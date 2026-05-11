"use client";

import { useState, useEffect } from "react";
import Intro from "@/components/intro";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/skills";
import Education from "../components/education";
import Experience from "@/components/experience";
import Certificates from "@/components/certificates";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeResumeTab, setActiveResumeTab] = useState<
    "Skills" | "Experience" | "Education" | "Certificates"
  >("Education");
  const [showIntro, setShowIntro] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const y = useMotionValue(0);

  useEffect(() => {
    const controls = animate(y, [0, -12, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  const navigate = (section: string) => {
    setActiveSection(section);
    setMobileOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="h-screen w-screen overflow-hidden bg-background relative">
          {/* NAVBAR */}
          <nav className="fixed top-0 w-full z-50 backdrop-blur bg-background/70 border-b">
            <div className="flex justify-between items-center px-4 py-3 md:justify-center">
              <button
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>

              <div className="hidden md:flex space-x-2 bg-secondary/40 p-1 rounded-full">
                {["home", "about", "projects", "resume"].map((item) => (
                  <button
                    key={item}
                    onClick={() => navigate(item)}
                    className="relative px-5 py-2 text-sm capitalize group"
                  >
                    {activeSection === item && (
                      <motion.span
                        layoutId="pill"
                        className="absolute inset-0 bg-primary/20 rounded-full"
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        activeSection === item
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-primary"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden flex flex-col items-center gap-6 py-6 bg-background"
                >
                  {["home", "about", "projects", "resume"].map((item) => (
                    <button
                      key={item}
                      onClick={() => navigate(item)}
                      className="text-lg capitalize"
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* MAIN VIEW */}
          <div className="h-full w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full flex items-center justify-center px-4 pt-20"
              >
                {/* HOME */}
                {activeSection === "home" && (
                  <div className="text-center space-y-6">
                    <motion.div
                      style={{ y }}
                      className="w-40 h-40 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                    >
                      <Image
                        src="https://avatars.githubusercontent.com/u/67488163?v=4"
                        alt="profile"
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                      Arsany Attalla
                    </h1>

                    <p className="text-muted-foreground text-lg">
                      Network Administrator @ 1st United Credit Union
                    </p>

                    <div className="flex justify-center gap-4">
                      <Link
                        href="https://github.com/arsanyattalla"
                        target="_blank"
                      >
                        <div className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                          <Github />
                        </div>
                      </Link>

                      <Link href="https://www.linkedin.com/in/arsany-attalla-1330531b1/" target="_blank">
                        <div className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                          <Linkedin />
                        </div>
                      </Link>

                      <Link href="mailto:arsanyattalla10@gmail.com">
                        <div className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                          <Mail />
                        </div>
                      </Link>
                    </div>

                    <ChevronDown
                      className="mx-auto text-primary cursor-pointer"
                      onClick={() => navigate("about")}
                    />
                  </div>
                )}

                {/* ABOUT */}
                {activeSection === "about" && (
                  <div className="w-full h-full flex flex-col items-center justify-center px-2">
                    {/* TITLE */}
                    <div className="mb-10 text-center">
                      <h2 className="text-xl md:text-3xl font-bold gradient-text">
                        About Me
                      </h2>
                      <div className="h-[3px] w-20 bg-primary mx-auto mt-4 rounded-full" />
                      <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                        Network Administrator with strong expertise in
                        infrastructure, security, and automation across
                        enterprise environments.
                      </p>
                    </div>

                    {/* CONTENT */}
                    <div className="h-full w-full max-w-6xl flex-1 overflow-y-auto pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          "Experience designing and supporting enterprise networks including Layer 2/3 switching, routing, and next-gen firewalls across multi-site environments.",
                          "Strong knowledge of VLANs, inter-VLAN routing, subnetting (CIDR/VLSM), NAT/PAT, and routing fundamentals (OSPF, BGP basics).",
                          "Hands-on experience configuring firewall policies, VPNs (site-to-site and remote access), security zones, and access control.",
                          "Skilled in network troubleshooting using ping, traceroute, nslookup, netstat, and log/packet analysis to resolve latency, DNS, and connectivity issues.",
                          "Understanding of network security principles including segmentation, least-privilege access, firewall hardening, and traffic inspection.",
                          "Automation using Python, PowerShell, and Bash for network tasks, monitoring, and troubleshooting workflows.",
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="p-5 rounded-2xl bg-secondary/40 backdrop-blur border border-white/10 
                       hover:border-primary/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] 
                       transition-all duration-300"
                          >
                            <div className="flex items-start gap-3">
                              {/* ICON DOT */}
                              <div className="mt-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {item}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <ChevronDown
                        className="mx-auto mt-5 text-primary cursor-pointer"
                        onClick={() => navigate("projects")}
                      />
                    </div>
                  </div>
                )}
                {/* PROJECTS */}
                {activeSection === "projects" && (
                  <div className="w-full h-full flex flex-col pt-6">
                    <div className="flex-1 overflow-y-auto px-4 pb-6">
                      <ProjectsSection />
                      <ChevronDown
                        className="mx-auto mt-4 text-primary cursor-pointer"
                        onClick={() => navigate("resume")}
                      />
                    </div>
                  </div>
                )}

                {/* RESUME */}
                {activeSection === "resume" && (
                  <div className="w-full h-full flex flex-col items-center pt-6">
                    <h2 className="text-3xl font-bold mb-4 gradient-text">
                      Resume
                    </h2>
                    <div className="h-[3px] w-20 bg-primary mx-auto mt-0 rounded-full " />

                    <div className="flex justify-center gap-5 mt-5 flex-wrap mb-4">
                      {[
                        "Education",
                        "Certificates",
                        "Experience",
                        "Skills",
                      ].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveResumeTab(tab as any)}
                          className={`px-4 py-2 rounded-full transition ${
                            activeResumeTab === tab
                              ? "bg-primary text-white"
                              : "bg-secondary/40 text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    <div className="w-full max-w-5xl flex-1 overflow-y-auto px-4 pb-6">
                      {activeResumeTab === "Skills" && <Skills />}
                      {activeResumeTab === "Experience" && <Experience />}
                      {activeResumeTab === "Education" && <Education />}
                      {activeResumeTab === "Certificates" && <Certificates />}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
}
