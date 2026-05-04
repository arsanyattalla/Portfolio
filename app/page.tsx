"use client";

import { useState, useEffect } from "react";
import Intro from "@/components/intro";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
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

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const y = useMotionValue(0);
  useEffect(() => {
    const controls = animate(y, [0, -12, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  useEffect(() => {
    const handler = () => {
      const sections = ["home", "about", "projects", "resume"];
      const pos = window.scrollY + 120;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(sec);
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent)",
              "radial-gradient(circle at 80% 80%, rgba(139,92,246,0.15), transparent)",
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {!showIntro && (
          <>
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
                      onClick={() => scrollTo(item)}
                      className="relative px-5 py-2 text-sm capitalize group"
                    >
                      {activeSection === item && (
                        <motion.span
                          layoutId="pill"
                          className="absolute inset-0 bg-primary/20 rounded-full"
                        />
                      )}
                      <span
                        className={`relative z-10 transition-all duration-300 ${
                          activeSection === item
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        {item}
                      </span>
                      <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]" />
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
                        onClick={() => scrollTo(item)}
                        className="text-lg capitalize"
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>

            <motion.section
              id="home"
              style={{ scale: heroScale }}
              className="pt-32 pb-20 text-center px-4"
            >
              <div className="space-y-6">
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

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
                  Arsany Attalla
                </h1>

                <p className="text-muted-foreground text-lg">
                  Network Administrator @ 1st United Credit Union
                </p>

                <div className="flex justify-center gap-4">
                  <Link href="https://github.com/arsanyattalla" target="_blank">
                    <div className="p-3 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] active:scale-95">
                      <Github />
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/arsany-attalla-1330531b1/" target="_blank">
                    <div className="p-3 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] active:scale-95">
                      <Linkedin />
                    </div>
                  </Link>
                  <Link href="mailto:arsanyattalla10@gmail.com">
                    <div className="p-3 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] active:scale-95">
                      <Mail />
                    </div>
                  </Link>
                </div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronDown
                    className="mx-auto text-primary cursor-pointer"
                    onClick={() => scrollTo("about")}
                  />
                </motion.div>
              </div>
            </motion.section>

            <section id="about" className="py-20 px-4">
              <div className="max-w-3xl mx-auto space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-3xl font-bold text-center tracking-tight relative"
                >
                  <span className="gradient-text">About Me</span>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-[3px] bg-primary mx-auto mt-4 rounded-full mb-6"
                  />
                </motion.h2>

                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    Experience designing and supporting enterprise networks
                    including Layer 2/3 switching, routing, and next-gen
                    firewalls across multi-site environments.
                  </li>
                  <li>
                    Strong knowledge of VLANs, inter-VLAN routing, subnetting
                    (CIDR/VLSM), NAT/PAT, and routing fundamentals (OSPF, BGP
                    basics).
                  </li>
                  <li>
                    Hands-on experience configuring firewall policies, VPNs
                    (site-to-site and remote access), security zones, and access
                    control.
                  </li>
                  <li>
                    Skilled in network troubleshooting using ping, traceroute,
                    nslookup, netstat, and log/packet analysis to resolve
                    latency, DNS, and connectivity issues.
                  </li>
                  <li>
                    Understanding of network security principles including
                    segmentation, least-privilege access, firewall hardening,
                    and traffic inspection.
                  </li>
                  <li>
                    Automation using Python, PowerShell, and Bash for network
                    tasks, monitoring, and troubleshooting workflows.
                  </li>
                </ul>
              </div>
            </section>

            <ProjectsSection />

            <section id="resume" className="py-20 text-center px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-3xl font-bold text-center tracking-tight relative"
              >
                <span className="gradient-text">Resume</span>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-[3px] bg-primary mx-auto mt-4 rounded-full mb-6"
                />
              </motion.h2>

              <div className="flex justify-center gap-4 flex-wrap">
                {["Education", "Certificates", "Experience", "Skills"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveResumeTab(tab as any)}
                      className="relative px-4 py-2 rounded-full group"
                    >
                      {activeResumeTab === tab && (
                        <motion.div
                          layoutId="tab"
                          className="absolute inset-0 bg-primary/20 rounded-full"
                        />
                      )}
                      <span
                        className={`relative z-10 ${
                          activeResumeTab === tab
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        {tab}
                      </span>
                    </button>
                  ),
                )}
              </div>

              <motion.div
                key={activeResumeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                {activeResumeTab === "Skills" && <Skills />}
                {activeResumeTab === "Experience" && <Experience />}
                {activeResumeTab === "Education" && <Education />}
                {activeResumeTab === "Certificates" && <Certificates />}
              </motion.div>
            </section>

            <footer className="text-center py-6 text-sm text-muted-foreground border-t">
              © {new Date().getFullYear()} Arsany Attalla
            </footer>
          </>
        )}
      </div>
    </>
  );
}
