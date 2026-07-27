"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
    };

    const previousImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl"
        >
            {/* Image Section */}
            <div className="relative h-72 w-full">
                <Image
                    src={project.images[currentImage]}
                    alt={project.title}
                    fill
                    className="object-cover"
                />

                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={previousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                            {project.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`h-2 w-2 rounded-full transition ${currentImage === index
                                            ? "bg-white"
                                            : "bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="text-3xl font-bold text-white">
                    {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-white transition hover:border-blue-500 hover:bg-blue-600"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-500"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}