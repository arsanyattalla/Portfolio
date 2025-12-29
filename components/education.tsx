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
import Image from "next/image";

export default function Education() {
  return (
    <div
      id="education"
      
    >
<div className="flex items-center gap-0">
  <Image
    src="/SFSU-San-Francisco-State-University-Symbol.png"
    alt="San Francisco State University"
    width={200} 
    height={200} 
    
  />
  <div>
    <p className="text-2xl md:text-3xl font-semibold">
      San Francisco State University
    </p>
     <p className="text-lg md:text-xl text-muted-foreground italic">
      B.S Computer Science 2022
    </p>
  </div>
</div>

      
     
    </div>
  );
}
