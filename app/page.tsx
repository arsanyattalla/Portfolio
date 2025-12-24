"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Cpu,
  Layers,
  HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/skills"
import Education from "../components/education"
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
const [activeResumeTab, setActiveResumeTab] = useState<
  "skills" | "experience" | "education"
>("education");

  
  


  // Change active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "resume", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (Id: string) => {
    const element = document.getElementById(Id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">
          {/* Left (empty or logo later) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          />

          {/* Center nav */}
          <div className="hidden md:flex justify-center space-x-6">
            {["home", "about", "projects", "resume", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === item
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right button */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={() => scrollToSection("home")}
            >
              Arsany Attalla
            </Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-16 md:pt-40 md:pb-20 center overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-6"
            >
              <div className="space-y-2">
                <motion.div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto">
                  <Image
                    src="https://avatars.githubusercontent.com/u/67488163?v=4"
                    alt="Profile"
                    fill
                    className="object-cover rounded-full"
                  />
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
                  Arsany Attalla
                </h1>
                <h3 className="text-2xl md:text-3xl text-muted-foreground">
                  Systems Engineer | Software Developer
                </h3>
              </div>

              <p className="text-muted-foreground max-w-lg">
                Systems Engineer @ Draeger's Supermarkets
              </p>

              <div className="flexitems-center">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-primary hover:text-primary/80 hover:bg-primary/10"
                >
                  <Link
                    href="https://github.com/arsanyattalla"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-primary hover:text-primary/80 hover:bg-primary/10"
                >
                  <Link
                    href="https://www.linkedin.com/in/arsany-attalla-1330531b1/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-primary hover:text-primary/80 hover:bg-primary/10"
                >
                  <Link
                    href="mailto:arsanyattalla10@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center mt-16"
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-primary"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 bg-secondary/30 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2 text-center mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>
                Strong background in IT systems and software engineering, with
                hands-on experience supporting, testing, and maintaining
                reliable application and system environments.
              </li>
              <li>
                4+ years of experience working with web-based systems, including
                deploying, monitoring, and troubleshooting applications across
                development and production environments.
              </li>
              <li>
                Experience writing and executing test cases, performing manual
                and automated testing, and collaborating with developers to
                identify, reproduce, and resolve system and software issues.
              </li>
              <li>
                Solid understanding of system workflows, APIs, and integrations,
                with experience debugging issues across frontend, backend, and
                infrastructure layers.
              </li>
              <li>
                Proficient in modern software development practices, including
                building and maintaining web applications using JavaScript,
                React, and backend services.
              </li>
              <li>
                Continuously improving skills in system reliability, automation,
                and quality assurance by learning new tools, technologies, and
                best practices.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <>
        <ProjectsSection />
      </>
      {/* Skills Section */}
      <section id="resume" className="py-16 bg-secondary/30 relative">
  <div className="container mx-auto px-4 relative z-10">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-4 text-center mb-12"
    >
      <h2 className="text-3xl font-bold gradient-text">Resume</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />

      {/* Tabs */}
      <div className="flex justify-center space-x-6">
        {["education","experience","skills"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveResumeTab(tab as any)}
            className={`capitalize text-sm font-medium transition-colors ${
              activeResumeTab === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </motion.div>

    {/* Content */}
    <motion.div
      key={activeResumeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {activeResumeTab === "skills" && <Skills/> }
      {activeResumeTab === "experience"  }
      {activeResumeTab === "education" && <Education/> }
    </motion.div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2 text-center mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out if you're looking for an engineer, have a
              question, or just want to connect.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/50 text-primary hover:bg-primary/10"
                asChild
              >
                <Link
                  href="https://github.com/arsanyattalla"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/50 text-primary hover:bg-primary/10"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/arsany-attalla-1330531b1/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/50 text-primary hover:bg-primary/10"
                asChild
              >
                <Link
                  href="mailto:arsanyattalla10@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 border-t border-primary/20">
        <div className="container mx-auto px-4 relative z-10 items-center">
          <div className="flex flex-col md:flex-row justify-between items-center"></div>
          <p className="text-muted-foreground text-sm items-center">
            © {new Date().getFullYear()} Arsany Attalla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
