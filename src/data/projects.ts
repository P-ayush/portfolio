export interface Project {
    title: string;
    description: string;
    images: string[];
    tech: string[];
    github: string;
    live: string;
}

export const projects: Project[] = [
    {
        title: "AI Interview Hiring Copilot",

        description:
            "An AI-powered interview platform that conducts technical interviews, analyzes resumes, evaluates candidates, and generates structured hiring reports using Gemini AI and LangChain.",

        images: [
            "/images/projects/ai-interview-copilot/landing.png",
            "/images/projects/ai-interview-copilot/interview.png",
        ],

        tech: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Socket.io",
            "LangChain",
            "Gemini",
        ],

        github:
            "https://github.com/P-ayush/ai-interview-hiring-copilot",

        live:
            "https://ai-interview-hiring-copilot-fronten.vercel.app/",
    },

    {
        title: "SyncDocs",

        description:
            "Offline-first collaborative document editor featuring AI summaries, version history, collaboration, synchronization, and local-first editing.",

        images: [
            "/images/projects/sync-docs/editor.png",
        ],

        tech: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "React Query",
            "Dexie",
            "Gemini",
        ],

        github:
            "https://github.com/P-ayush/collaborative-document-editor",

        live: "https://syncdocs-xi.vercel.app/",
    },

    {
        title: "SupportPilot AI",

        description:
            "AI-powered customer support platform using LangChain, Gemini and Retrieval-Augmented Generation (RAG) to answer user queries from uploaded documents.",

        images: [
            "/images/projects/support-pilot/chat.png",
            "/images/projects/support-pilot/upload-document.png",
        ],

        tech: [
            "React",
            "Node.js",
            "Express",
            "TypeScript",
            "LangChain",
            "Gemini",
        ],

        github: "https://github.com/P-ayush/SupportPilot-AI",

        live: "https://support-pilot-frontend.vercel.app/",
    },
];