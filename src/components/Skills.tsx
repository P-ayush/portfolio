"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-slate-900 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="font-semibold text-blue-500">
                        SKILLS
                    </p>

                    <h2 className="mt-2 text-5xl font-bold">
                        Technologies I work with
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                        I enjoy building modern full-stack applications,
                        scalable backend systems, AI-powered solutions,
                        and workflow automation platforms.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 md:grid-cols-2">

                    {skillCategories.map((category) => (

                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-white/10 bg-slate-950 p-8"
                        >
                            <h3 className="mb-8 text-2xl font-bold">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-4">

                                {category.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm transition hover:bg-blue-600 hover:text-white"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}