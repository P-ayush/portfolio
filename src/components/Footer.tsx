import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
                <p className="text-slate-400">
                    © {year} Ayush Prasad. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/P-ayush"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition hover:text-blue-500"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ayush-prasad-51811222b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition hover:text-blue-500"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>
            </div>
        </footer>
    );
}