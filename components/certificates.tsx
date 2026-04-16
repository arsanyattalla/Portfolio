import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const certs = [
  {
    title: "DevOps on AWS: Code, Build, and Test",
    org: "Amazon Web Services",
    logo: "/aws.png",
    link: "https://www.coursera.org/account/accomplishments/verify/CTSJPPFWXLZ7/", 
  },
  {
    title: "Cybersecurity Identity and Access Solutions with Azure AD",
    org: "Microsoft",
    logo: "/micro.png",
    link: "https://www.coursera.org/account/accomplishments/verify/BW57N82TIVB5/", 
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    org: "DeepLearning.AI",
    logo: "/deep.png",
    link: "https://www.coursera.org/account/accomplishments/verify/ADTFP436GYPU/",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-0 px-6">
      <div className="max-w-5xl mx-auto">
        
  
       

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition duration-300 rounded-2xl">
                <CardContent className="flex items-center gap-4 p-6">

                  {/* Logo */}
                  <div className="w-16 h-16 relative">
                    <Image
                      src={cert.logo}
                      alt={cert.org}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.org}
                    </p>

                    {/* Credential Link */}
                    <Link
                      href={cert.link}
                      target="_blank"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-blue-500 hover:underline"
                    >
                      View Credential <ExternalLink size={14} />
                    </Link>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}