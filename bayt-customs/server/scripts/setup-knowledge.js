require("dotenv").config();

const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

async function main() {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY is missing from .env");
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const pdfPath = path.join(
        __dirname,
        "../knowledge/bayt_customs_temporary_chatbot_knowledge_base.pdf"
    );

    if (!fs.existsSync(pdfPath)) {
        throw new Error(`PDF not found: ${pdfPath}`);
    }

    console.log("Creating Bayt Customs knowledge store...");

    const store = await openai.vectorStores.create({
        name: "Bayt Customs Knowledge Base",
    });

    console.log("Uploading PDF and indexing its contents...");

    await openai.vectorStores.files.uploadAndPoll(
        store.id,
        fs.createReadStream(pdfPath)
    );

    console.log("\nKnowledge base ready!");
    console.log("Vector store ID:", store.id);
    console.log("\nSave this ID in your server/.env file as:");
    console.log(`OPENAI_VECTOR_STORE_ID=${store.id}`);
}

main().catch((error) => {
    console.error("Knowledge base setup failed:", error.message);
    process.exitCode = 1;
});
