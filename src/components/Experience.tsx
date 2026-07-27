"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-slate-950 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="font-semibold text-blue-500">
                        EXPERIENCE
                    </p>

                    <h2 className="mt-2 text-5xl font-bold">
                        Professional Experience
                    </h2>
                </motion.div>

                <div className="mt-20 space-y-12">

                    {experience.map((job) => (

                        <motion.div
                            key={job.company}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-white/10 bg-slate-900 p-10"
                        >
                            <div className="flex flex-col justify-between gap-3 md:flex-row">

                                <div>
                                    <h3 className="text-3xl font-bold">
                                        {job.role}
                                    </h3>

                                    <p className="mt-2 text-blue-500">
                                        {job.company}
                                    </p>
                                </div>

                                <div className="text-gray-400 md:text-right">
                                    <p>{job.duration}</p>
                                    <p>{job.location}</p>
                                </div>

                            </div>

                            <ul className="mt-8 list-disc space-y-3 pl-6 text-gray-300">

                                {job.achievements.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}

                            </ul>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}