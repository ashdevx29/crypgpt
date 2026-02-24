import React from "react";
import { motion } from "framer-motion";

const terms = [
  {
    title: "1. Acceptance",
    text: "By using CrypGPT and its services via crypgpt.ai, you agree to abide by these Terms. If you disagree, please discontinue use immediately.",
  },
  {
    title: "2. Eligibility",
    text: "You must be 18+ to use our services. If younger, parental/guardian consent is required.",
  },
  {
    title: "3. Account Responsibilities",
    text: "You are responsible for activities under your account/wallet. Keep credentials secure. Notify us of unauthorized access immediately.",
  },
  {
    title: "4. Permitted Use",
    text: "Use CrypGPT for lawful, personal purposes only. Prohibited uses: unlawful, abusive, reverse engineering, impersonation, misuse of content.",
  },
  {
    title: "5. Intellectual Property",
    text: "Content (AI responses, UI, trademarks, software) belongs to CrypGPT or licensors. Unauthorized use is prohibited.",
  },
  {
    title: "6. Disclaimers & No Financial Advice",
    text: "The platform provides blockchain/market data only. Not financial, investment, or legal advice. DYOR. We’re not liable for decisions/losses.",
  },
  {
    title: "7. Limitation of Liability",
    text: "Provided “as is.” No guarantees of accuracy, uptime, or completeness. Liability capped at fees paid (if any) in last 12 months.",
  },
  {
    title: "8. Indemnification",
    text: "You agree to indemnify and hold harmless CrypGPT and affiliates for claims from breaches/misuse of services.",
  },
  {
    title: "9. Governing Law & Disputes",
    text: "Governed by laws of [Your Jurisdiction]. Disputes resolved in courts there unless arbitration is chosen.",
  },
  {
    title: "10. Arbitration & Waiver",
    text: "You and CrypGPT may resolve disputes via binding arbitration, waiving court trials/class actions.",
  },
  {
    title: "11. Termination",
    text: "You may stop use anytime. We may suspend/terminate access for policy violations or legal reasons. Data may be deleted as per retention policy.",
  },
  {
    title: "12. Modifications",
    text: "We may update Terms occasionally. Notice will be provided. Continued use means acceptance.",
  },
];

const TermsAndConditions = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
     
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
            Terms & Conditions
          </span>
        </motion.h1>

        <div className="space-y-8">
          {terms.map((item, index) => (
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
              <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed">
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

export default TermsAndConditions;
