"use client";

import { motion } from "framer-motion";

const lines = [
    "npm run dev",
    "✓ Backend Server Started",
    "✓ MySQL Connected",
    "✓ AI Services Initialized",
    "✓ Workflow Engine Ready",
    "✓ REST APIs Loaded",
    "✓ Listening on http://localhost:3000",
];

export default function TerminalCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl"
        >
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-slate-400">
                    ayush@portfolio
                </span>
            </div>

            {/* Terminal */}
            <div className="space-y-4 p-8 font-mono text-sm">
                {lines.map((line, index) => (
                    <motion.div
                        key={line}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.2,
                        }}
                        className="flex items-center gap-3"
                    >
                        {index === 0 ? (
                            <>
                                <span className="text-blue-500">$</span>
                                <span className="text-white">{line}</span>
                            </>
                        ) : (
                            <span className="text-green-400">{line}</span>
                        )}
                    </motion.div>
                ))}

                <motion.div
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                    }}
                    className="inline-block h-5 w-2 bg-blue-500"
                />
            </div>
        </motion.div>
    );
}