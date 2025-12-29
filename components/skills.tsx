import Link from "next/link";
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
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  return (
    <section>
      
    <div
      id="skills"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      
      {" "}
      {[
        { name: "Powershell", icon: <Cpu className="h-6 w-6 mb-2" /> },
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
        { name: "HTML & CSS", icon: <Code className="h-6 w-6 mb-2" /> },
        { name: "JavaScript", icon: <Code className="h-6 w-6 mb-2" /> },
        { name: "TypeScript", icon: <Code className="h-6 w-6 mb-2" /> },
        { name: "React", icon: <Code className="h-6 w-6 mb-2" /> },
        { name: "Python", icon: <Code className="h-6 w-6 mb-2" /> },
        { name: "Tailwind CSS", icon: <Code className="h-6 w-6 mb-2" /> },
        { name: "Node.js", icon: <Cpu className="h-6 w-6 mb-2" /> },
        { name: "Git", icon: <Code className="h-6 w-6 mb-2" /> },
        {
          name: "Responsive Design",
          icon: <Layers className="h-6 w-6 mb-2" />,
        },
        { name: "RESTful APIs", icon: <Cpu className="h-6 w-6 mb-2" /> },
        { name: "Manual Testing", icon: <Code className="h-6 w-6 mb-2" /> },
        { name: "Test Case Design", icon: <Code className="h-6 w-6 mb-2" /> },
        {
          name: "Bug Tracking (Jira)",
          icon: <Code className="h-6 w-6 mb-2" />,
        },
      ].map((skill, index) => (
        
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          {" "}
          
          <Card className="h-full custom-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            {" "}
            <CardContent className="flex flex-col items-center justify-center h-full p-6">
              {" "}
              <span className="text-primary">{skill.icon}</span>{" "}
              <span className="text-center font-medium"> {skill.name} </span>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </motion.div>
      ))}{" "}
    </div>
    </section>
  );
}
