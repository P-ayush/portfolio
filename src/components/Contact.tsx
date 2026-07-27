"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Download,
    ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-slate-950 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                        Contact
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Let's Build Something Great
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        I'm currently open to Backend, Full Stack and AI Engineering
                        opportunities. If you'd like to discuss a role or collaborate on a
                        project, I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2">

                    <a
                        href="mailto:your@email.com"
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:-translate-y-1"
                    >
                        <Mail className="text-blue-500" size={30} />

                        <h3 className="mt-6 text-2xl font-semibold text-white">
                            Email
                        </h3>

                        <p className="mt-2 text-slate-400">
                            ayushprasad481@gmail.com
                        </p>
                    </a>

                    <a
                        href="tel:+911234567890"
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:-translate-y-1"
                    >
                        <Phone className="text-blue-500" size={30} />

                        <h3 className="mt-6 text-2xl font-semibold text-white">
                            Phone
                        </h3>

                        <p className="mt-2 text-slate-400">
                            +91 9749752704
                        </p>
                    </a>

                    <a
                        href="https://github.com/P-ayush"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:-translate-y-1"
                    >
                        <FaGithub size={30} className="text-blue-500" />

                        <div className="mt-6 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-white">
                                GitHub
                            </h3>

                            <ArrowUpRight />
                        </div>

                        <p className="mt-2 text-slate-400">
                            github.com/P-ayush
                        </p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ayush-prasad-51811222b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:-translate-y-1"
                    >
                        <FaLinkedin size={30} className="text-blue-500" />

                        <div className="mt-6 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-white">
                                LinkedIn
                            </h3>

                            <ArrowUpRight />
                        </div>

                        <p className="mt-2 text-slate-400">
                            Connect with me
                        </p>
                    </a>

                </div>

                <div className="mt-16 flex justify-center">

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>

                </div>

                <div className="mt-16 flex items-center justify-center gap-2 text-slate-500">
                    <MapPin size={18} />
                    Siliguri, India
                </div>

            </div>
        </section>
    );
}