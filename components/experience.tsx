import Image from "next/image";
import { motion } from "framer-motion";

const experienceData = [
    {
    company: "1st United Credit Union",
    role: "Network Administrator",
    period: "April 2026 - Present",
    logo: "/1st.jpg",
    logoScale: 1,
    points: [
     "Engineered and supported LAN/WAN infrastructure, including VLANs, segmentation, and routing protocols (BGP, OSPF).",
"Delivered Tier 2/3 network troubleshooting using packet captures (Wireshark), NetFlow analysis, and log correlation.",
"Administered Windows Server, Active Directory, DNS, DHCP, and GPO; automated operations with PowerShell.",
"Configured and maintained Cisco, Palo Alto (PAN-OS), Ubiquiti, and Ruckus devices, including firewalls, NAT, ACLs, and VPNs (IPsec/SSL).",
"Monitored network performance using SolarWinds, PRTG, and SNMP, resolving latency, outages, and packet loss.",
"Implemented secure remote access solutions (GlobalProtect VPN) and enforced network security best practices.",
"Maintained network documentation, diagrams, and ITSM workflows."
    ],
  },
  
  {
    company: "Draeger's Supermarkets",
    role: "Systems Engineer",
    period: "Oct 2025 – April 2026",
    logo: "/DraegersCircleDLogoWhite.png",
    logoScale: 1,
    points: [
      "Designed and maintained IT systems and internal tools",
      "Deliver multi-site technical support and root-cause troubleshooting across servers, networks, and endpoints.",
      "Administer Windows Server, AD, DNS, DHCP, and GPO, automating tasks with PowerShell to improve efficiency",
      "Manage and troubleshoot Cisco, Palo Alto, Ubiquiti, Ruckus WiFi, VPNs, and VoIP systems.",
      "Developed and maintained documentation for IT processes and procedures, ensuring compliance with industry standards.",
      "Maintain documentation, asset inventory, and ticketing workflows while supporting M365, Google Workspace and POS systems.",
    ],
  },
  {
    company: "Fidelity Investments",
    role: "Support Analyst",
    period: "May 2025 – Oct 2025",
    logo: "/Fidelity-Investments-Logo-Vector-01-scaled-Picsart-BackgroundRemover.jpg",
    logoScale: 1.2,
    points: [
      "Delivered technical support for hardware, software, and network issues, ensuring minimal downtime.",
      "Built, imaged, and configured laptops using Windows Autopilot for new hires and refresh cycles",
      "Managed device enrollment, configuration policies, and compliance in Microsoft Intune.",
      "Assisted with the deployment and maintenance of network infrastructure, including switches, routers, and firewalls.",
      "Partnered with networking teams to troubleshoot LAN/WAN and VLAN configuration problems",
      "Enforced security and compliance standards through proactive monitoring and policy updates.",
    ],
  },
  {
    company: "Qureez Inc.",
    role: "Applications Engineer",
    period: "Jan 2023 – May 2024",
    logo: "Screenshot 2025-12-24 152854-Picsart-BackgroundRemover.png",
    logoScale: 0.75,
    points: [
      "Debugged application issues using logs, API traces, and system metrics to identify root causes and implement fixes.",
      "Developed and maintained scripts (Python/JavaScript) to automate diagnostics, data validation, and routine support tasks.",
      "Tested application features, integrations, and bug fixes using manual and automated test cases to ensure reliability and performance.",
      "Collaborated with developers and QA to reproduce defects, validate fixes, and improve release quality.",
      "Supported REST APIs, databases, and backend services, performing query analysis and data integrity checks",
    ],
  },
  {
    company: "Qureez Inc.",
    role: "Support Specialist / Engineer",
    period: "Oct 2021 – Jan 2023",
    logo: "Screenshot 2025-12-24 152854-Picsart-BackgroundRemover.png",
    logoScale: 0.75,
    points: [
      "Managed Azure AD accounts, group policies, and RBAC, improving access control.",
      "Optimized IT budgets by selecting cost-effective hardware, software, and cloud solutions.",
      "Configured and maintained Windows/Linux servers, networking devices, and endpoint security.",
      "Reduced IT issues by training users on connectivity, software installs, and security best practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 w-full">
      <div className="mx-auto max-w-5xl px-4 text-left">

  

        <div className="relative border-l border-primary/20 ">

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative w-full"
            >

              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

              <div className="flex gap-5 items-start w-full rounded-xl p-5 bg-secondary/20 hover:bg-secondary/30 transition-all">

                <div className="w-14 h-14 flex-shrink-0 flex items-start justify-center mt-1">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={56}
                    height={56}
                    className="object-contain"
                    style={{ transform: `scale(${item.logoScale})` }}
                  />
                </div>

                <div className="flex-1 text-left min-w-0">

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-tight text-left">
                      {item.company}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-tight text-left">
                      {item.role} • {item.period}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-outside ml-5 text-left">
                    {item.points.map((p, i) => (
                      <li key={i} className="leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}