"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative bg-slate-900 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                        Portfolio
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Featured Projects
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        A selection of projects showcasing my experience in
                        AI applications, workflow automation,
                        scalable backend systems and modern web development.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-2">

                    {projects.map((project, index) => (

                        <motion.div
                            key={project.title}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: .5,
                                delay: index * .15,
                            }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}