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
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

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
              title="E-commerce Platform"
              description="A brief description of this project. What it does, technologies used, and challenges overcome."
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "Tailwind", "TypeScript"]}
              demoLink="https://example.com"
              codeLink="https://github.com/arsanyattalla/"
            />
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/80"
          >
            <Link href="https://github.com" target="_blank">
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
