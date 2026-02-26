import React from "react";
import { motion } from "framer-motion";

const disclaimerText = `
The information presented in this document is for informational and educational purposes only and does not constitute financial, investment, legal, or tax advice. CrypGPT is an AI + Blockchain-based ecosystem designed to provide technological infrastructure, digital utilities, and community-driven features within the cryptocurrency space. Participation in the CrypGPT ecosystem, including acquisition or use of the CrypGPT token, involves inherent risks associated with digital assets and emerging technologies.

Cryptocurrency markets are highly volatile and subject to significant price fluctuations. The value of digital tokens may increase or decrease, and participants should conduct independent research and consult qualified financial advisors before making any investment decisions.

CrypGPT does not guarantee profits, returns, income generation, or financial performance of any kind. Any references to ecosystem utilities, AI-driven tools, portfolio intelligence, payment solutions, reward models (including Move-to-Earn, Chat-to-Earn, or other incentive mechanisms), or future roadmap developments represent the platform’s vision and intended functionality. These features are subject to technical development, regulatory considerations, and market conditions.

While CrypGPT aims to enhance security, fraud detection, knowledge verification, and intelligent decision-making through AI and blockchain integration, no technology can eliminate all risks. Users remain solely responsible for their financial decisions, wallet security, private key management, and compliance with local laws and regulations.

CrypGPT tokens are utility-based digital assets intended for ecosystem participation and access to platform services. They are not equity, securities, shares, or ownership interests in any company, nor do they grant voting rights, dividends, or profit-sharing unless explicitly stated in legally binding documentation.

Regulatory treatment of cryptocurrencies and digital assets varies by jurisdiction. It is the responsibility of each participant to ensure that involvement in the CrypGPT ecosystem complies with applicable local laws, regulations, and tax obligations.

Forward-looking statements contained in this document reflect current expectations and projections regarding future events, technological development, and ecosystem expansion. Such statements involve risks and uncertainties and should not be interpreted as guarantees of future performance.

By engaging with CrypGPT, users acknowledge that they understand the risks associated with blockchain technology, digital assets, AI systems, and decentralized platforms, and agree to participate at their own discretion and responsibility.
`;

const Disclaimer = () => {
    return (
        <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
      radial-gradient(circle at 10% 10%, rgba(255, 215, 0, 0.25) 0%, transparent 50%),
      #000
    `,
                }}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 via-black/90 to-black/95" /> */}

            {/* Content */}
            <div className="relative z-10 max-w-5xl px-6 py-20 text-left">

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12"
                >
                    <span className="bg-gradient-to-r from-white to-[#FFBF00] bg-clip-text text-transparent">
                        Disclaimer
                    </span>
                </motion.h1>

                {/* Glass Card Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 border border-[#FFFFFF22] backdrop-blur-sm rounded-xl p-8 shadow-lg"
                >
                    <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed whitespace-pre-line">
                        {disclaimerText}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Disclaimer;