"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TerminalCard from "./TerminalCard";
export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center bg-slate-950">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="mb-4 text-blue-500 font-semibold">
                        Backend & Full Stack Developer
                    </p>

                    <h1 className="text-6xl font-extrabold leading-tight text-white">
                        Hi, I'm{" "}
                        <span className="text-blue-500">
                            Ayush Prasad
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                        I build scalable backend systems, AI-powered applications,
                        workflow automation platforms and modern web experiences using
                        Node.js, React, Next.js, TypeScript and MySQL.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-white transition hover:bg-blue-500"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="rounded-xl border border-white/20 px-7 py-4 text-white hover:bg-white/10"
                        >
                            Resume
                        </a>
                    </div>

                    <div className="mt-10 flex gap-6">
                        <a
                            href="https://github.com/P-ayush"
                            target="_blank"
                            className="text-gray-400 hover:text-white"
                        >
                            <FaGithub size={28} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ayush-prasad-51811222b/"
                            target="_blank"
                            className="text-gray-400 hover:text-white"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hidden items-center justify-center lg:flex"
                >
                    <TerminalCard />
                </motion.div>
            </div>
        </section>
    );
}