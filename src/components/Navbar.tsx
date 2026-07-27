"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-2xl font-bold text-white">
                    Ayush<span className="text-blue-500">.</span>
                </Link>

                <nav className="hidden gap-8 md:flex">
                    {NAV_LINKS.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            className="text-sm text-gray-300 transition hover:text-blue-500"
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/P-ayush"
                        target="_blank"
                        className="text-gray-300 hover:text-white"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ayush-prasad-51811222b/"
                        target="_blank"
                        className="text-gray-300 hover:text-white"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="/resume.pdf"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                    >
                        <FileText size={18} />
                    </a>
                </div>
            </div>
        </header>
    );
}