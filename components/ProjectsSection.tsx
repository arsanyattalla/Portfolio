"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" >
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-3xl font-bold text-center tracking-tight relative"
        >
          <span className="gradient-text">Projects</span>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[3px] bg-primary mx-auto mt-4 rounded-full mb-6"
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title="Drillshare - Webapp"
              description="Tool Rental App which allows users to rent an item or list an item for others to rent and both parties can save/earn money"
              image="/logo512.png"
              tags={["React", "Node.JS", "Express"]}
              demoLink=""
              codeLink="https://github.com/arsanyattalla/DrillShare-webapp"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title="IT Management System"
              description="An application built using Next.js and TypeScript for managing IT assets, tracking inventory, and generating reports for a small business."
              image="/mgmt.png"
              tags={["Next.js", "React", "TypeScript"]}
              demoLink=""
              codeLink="https://github.com/arsanyattalla/it-management-system"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title="Portfolio Website"
              description="My personal portfolio website showcasing my projects, skills, and experience as a software developer."
              image="/Elegant serif letter _A_ design.png"
              tags={["Next.js", "React", "TypeScript"]}
              demoLink="https://arsanyattalla.com"
              codeLink="https://github.com/arsanyattalla/Portfolio"
            />
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/80"
          >
            <Link href="https://github.com/arsanyattalla" target="_blank">
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
      
      
    </section>
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
          {demoLink && (
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
          )}
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
