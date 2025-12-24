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

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          ></motion.div>

          <div className="hidden md:flex space-x-6">
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

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-primary hover:text-primary/80"
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
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
      <section id="skills" className="py-16 bg-secondary/30 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2 text-center mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies and tools in the web
              development ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "HTML & CSS", icon: <Code className="h-6 w-6 mb-2" /> },
              { name: "JavaScript", icon: <Code className="h-6 w-6 mb-2" /> },
              { name: "TypeScript", icon: <Code className="h-6 w-6 mb-2" /> },
              { name: "React", icon: <Code className="h-6 w-6 mb-2" /> },
              { name: "Next.js", icon: <Code className="h-6 w-6 mb-2" /> },
              { name: "Tailwind CSS", icon: <Code className="h-6 w-6 mb-2" /> },
              { name: "Node.js", icon: <Cpu className="h-6 w-6 mb-2" /> },
              { name: "Git", icon: <Code className="h-6 w-6 mb-2" /> },
              {
                name: "Responsive Design",
                icon: <Layers className="h-6 w-6 mb-2" />,
              },
              { name: "RESTful APIs", icon: <Cpu className="h-6 w-6 mb-2" /> },
              {
                name: "Manual Testing",
                icon: <Code className="h-6 w-6 mb-2" />,
              },
              {
                name: "Automated Testing",
                icon: <Cpu className="h-6 w-6 mb-2" />,
              },
              {
                name: "Test Case Design",
                icon: <Code className="h-6 w-6 mb-2" />,
              },
              {
                name: "Bug Tracking (Jira)",
                icon: <Code className="h-6 w-6 mb-2" />,
              },
              {
                name: "System Troubleshooting",
                icon: <Cpu className="h-6 w-6 mb-2" />,
              },
              { name: "Linux", icon: <Cpu className="h-6 w-6 mb-2" /> },
              {
                name: "Technical Support",
                icon: <Layers className="h-6 w-6 mb-2" />,
              },
              { name: "Networking", icon: <Layers className="h-6 w-6 mb-2" /> },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full custom-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <span className="text-primary">{skill.icon}</span>
                    <span className="text-center font-medium">
                      {skill.name}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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

          {
            //<div className="max-w-2xl mx-auto">
            //<ContactForm />
            //</div>
          }
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

function ProjectCard({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-all duration-300 custom-border bg-card/80 backdrop-blur-sm hover:border-primary/50">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain p-6"
        />
      </div>

      <CardContent className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground text-sm flex-1 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
            asChild
          >
            <Link href={demoLink} target="_blank">
              <ExternalLink className="h-4 w-4 mr-1" />
              Demo
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-accent/50 text-accent hover:bg-accent/10"
            asChild
          >
            <Link href={codeLink} target="_blank">
              <Github className="h-4 w-4 mr-1" />
              Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
