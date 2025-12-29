import Image from "next/image";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Draeger's Supermarkets",
    role: "Systems Engineer",
    period: "Oct 2025 – Present",
    lWidth: 100,
    lHeight: 48,
    logoScale: 1,

    logo: "/DraegersCircleDLogoWhite.png",
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
    role: "Support Analsyst",
    period: "May 2025 – Oct 2025",
    lWidth: 100,
    lHeight: 48,
    logo: "/Fidelity-Investments-Logo-Vector-01-scaled-Picsart-BackgroundRemover.jpg",
    logoScale: 1.25,

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
    lWidth: 100,
    lHeight: 60,
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
    role: "Support Specialist/Engineer",
    period: "Oct. 2021 – Jan 2023",
    logo: "Screenshot 2025-12-24 152854-Picsart-BackgroundRemover.png",
    lWidth: 100,
    lHeight: 60,
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
    <section id="experience" className="py-1">
   
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        ></motion.div>

        {/* Timeline */}
        <div className="relative border-l border-muted pl-6 space-y-10">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    fill
                    className="object-contain"
                    style={{
                      transform: `scale(${item.logoScale ?? 1})`,
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold/italic">
                    {item.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.role} • {item.period}
                  </p>

                  <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
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
