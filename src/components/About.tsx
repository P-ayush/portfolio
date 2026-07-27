"use client";

import { motion } from "framer-motion";

const stats = [
    {
        number: "1.5+",
        label: "Years Experience",
    },
    {
        number: "20+",
        label: "Projects Built",
    },
    {
        number: "10+",
        label: "Technologies",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-slate-950 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >
                    <p className="mb-3 text-blue-500 font-semibold">
                        ABOUT ME
                    </p>

                    <h2 className="text-5xl font-bold text-white">
                        Building scalable software &
                        AI powered applications.
                    </h2>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
                        I'm a Full Stack Developer with 1.5+ years of experience building
                        scalable backend systems, AI-powered applications, workflow
                        automation platforms, and modern web applications using Node.js,
                        React, Next.js, MySQL, TypeScript, and LangChain.

                        I enjoy solving complex engineering problems and creating products
                        that automate business workflows and improve user experience.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {stats.map((item) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-white/10 bg-slate-900 p-10"
                        >
                            <h3 className="text-5xl font-bold text-blue-500">
                                {item.number}
                            </h3>

                            <p className="mt-3 text-gray-400">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}