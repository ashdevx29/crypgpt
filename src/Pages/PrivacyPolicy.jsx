import React from "react";
import { motion } from "framer-motion";

const policies = [
  {
    title: "1. Introduction",
    text: `Welcome to CrypGPT ("we," "us," or "our"). This Privacy Policy explains what personal data we collect, how we use and protect it, and your rights regarding that data when you access crypgpt.ai ("the Platform").`,
  },
  {
    title: "2. Data We Collect",
    text: `Email, username, wallet/account identifiers. 
    Chat inputs, outputs, prompts, queries, browser/device type, IP, session duration. 
    Public wallet addresses, blockchain activity, transaction metadata. 
    Cookies, analytics, tracking for performance and UX.`,
  },
  {
    title: "3. How We Use Your Data",
    text: `We use your data to deliver and personalise services, improve AI models, manage accounts, enforce policies, and comply with legal obligations.`,
  },
  {
    title: "4. Data Sharing",
    text: `We share data with trusted service providers, legal authorities (when required), or during mergers/acquisitions with confidentiality.`,
  },
  {
    title: "5. Your Rights",
    text: `You may access, correct, delete, or request portability of your data. Contact us at support@crypgpt.ai.`,
  },
  {
    title: "6. Data Retention & Security",
    text: `We retain data only as long as necessary and secure it with encryption, access controls, and audits. However, no system is 100% secure.`,
  },
  {
    title: "7. Children’s Policy",
    text: `CrypGPT is not intended for individuals under 18 years old. We do not knowingly collect data from minors.`,
  },
  {
    title: "8. Updates",
    text: `We may update this Privacy Policy. Continued use after updates means acceptance of changes.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
  


      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 via-black/80 to-black/95" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 py-20 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-white to-[#FFBF00] bg-clip-text text-transparent">
            Privacy Policy
          </span>
        </motion.h1>

        <div className="space-y-8">
          {policies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-[#FFFFFF22] backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#FFBF00] mb-3">
                {item.title}
              </h2>
              <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 text-lg">
            Contact:{" "}
            <a
              href="mailto:support@crypgpt.ai"
              className="text-[#FFBF00] underline"
            >
              support@crypgpt.ai
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
