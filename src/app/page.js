"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/theme-toggle";
import { ColorThemeSwitcher } from "@/components/color-theme-switcher";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Personal Portfolio",
    description: "The very site you are looking at now, built with Next.js and animated with Framer Motion.",
    tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    link: "https://github.com/AchroDev/achrodev.github.io",
    liveLink: "https://zbits.tech",
  },
  {
    title: "TuiText",
    description: "A terminal-based text editor wrote in Rust, exploring low-level programming concepts.",
    tags: ["Rust", "Terminal UI", "Systems Programming"],
    link: "https://github.com/AchroDev/TuiText",
  },
  {
    title: "CannaPal",
    description: "Track your garden, manage your seed bank, and log every detail of your cultivation journey. Join CannaPal and achieve your best harvest yet!",
    tags: ["React", "Vite", "Firebase", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    liveLink: "https://demo.cannapal.xyz/",
  },
  {
    title: "Koffee Kreme",
    description: "A warm, high-contrast, and eye-friendly dark theme for Visual Studio Code.",
    tags: ["VS Code", "Theme", "JSON"],
    link: "https://github.com/AchroDev/koffee-kreme",
  },
  {
    title: "Rust TCP Server",
    description: "A simple multi-threaded TCP server built in Rust to demonstrate networking and concurrency.",
    tags: ["Rust", "Networking", "TCP"],
    link: "https://github.com/AchroDev/rust_tcp_server",
  },
  {
    title: "CannaBot",
    description: "A cannabis-themed Discord game bot where you grow, hustle, and dominate your digital green empire.",
    tags: ["JavaScript", "Node.js", "Discord.js", "API"],
    link: "https://github.com/AchroDev/CannaBot",
  },
  {
    title: "Next Project",
    wip: true, // This is the new flag
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <ColorThemeSwitcher />
            <ThemeToggle />
          </div>
        </div>
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-16"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              AchroDev
            </h1>
            <p className="text-lg text-muted-foreground">
              A versatile developer with a passion for bringing ideas to life, from game modifications to full-stack web applications.
            </p>
          </div>
        </motion.div>

        <div className="my-24">
          <About />
        </div>

        <Separator />

        {/* --- Projects Section --- */}
        <div className="my-24">
          <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
            Featured Projects
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                liveLink={project.liveLink}
                wip={project.wip}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
