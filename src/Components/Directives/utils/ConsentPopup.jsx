import React from "react";
import { HiX } from "react-icons/hi";

function ConsentPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* ===== MOBILE / TABLET (≤1023px) CENTER POPUP ===== */}
      <div className="lg:hidden fixed inset-0 flex items-center justify-center z-[9999] bg-black/60 backdrop-blur-sm">
        <div
          className="relative w-[90%] max-w-[460px] text-white rounded-2xl p-3 sm:p-8 shadow-2xl"
          style={{
            border: "1px solid #C2C2C245",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.9))",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <HiX size={22} />
          </button>

          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Consent to terms and <br /> continued use
          </h2>

          <div
            className="rounded-xl p-3 md:p-5 text-sm leading-6 text-gray-300"
            style={{
              background: "#191919",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="mb-4">
By accessing or continuing to use this website or our services, you acknowledge and agree to be bound by CrypGpt AI Tech's Terms of Use and Privacy Policy, including any future updates or amendments to these policies.</p>

            <p className="mb-4">
              

CrupGpt AI Tech reserves the right to modify these terms at any time without prior notice. Your continued use of our website or services after such modifications constitutes your acceptance of the updated terms</p>

            <p className="italic text-gray-400">
(If you do not agree with any part of these terms, you should discontinue to use of our website and services immediately).            </p>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP (≥1024px) BUTTON KE NICHE ===== */}
<div className="hidden lg:flex fixed inset-0 items-start justify-end pt-25 pr-100 z-[999] bg-black/40 backdrop-blur-sm">        <div
          className="relative w-[420px] text-white rounded-2xl p-3 sm:p-8 shadow-2xl"
          style={{
            border: "1px solid #C2C2C245",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.9))",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <HiX size={22} />
          </button>

          <h2 className="text-2xl font-semibold mb-6">
            Consent to terms and <br /> continued use
          </h2>

          <div
            className="rounded-xl p-3 md:p-5 text-sm leading-6 text-gray-300"
            style={{
              background: "#191919",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="mb-4">
              By accessing or continuing to use this website or our services, you acknowledge and agree to be bound by CrypGpt AI Tech's Terms of Use and Privacy Policy, including any future updates or amendments to these policies.
            </p>

            <p className="mb-4">
             CrypGpt AI Tech reserves the right to modify these terms at any time without prior notice. Your continued use of our website or services after such modifications constitutes your acceptance of the updated terms.
            </p>

            <p className="italic text-gray-400">
              (If you do not agree with any part of these terms, you should discontinue to use of our website and services immediately)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsentPopup;