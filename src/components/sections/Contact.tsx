"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  Copy,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const myEmail = "fasi.developer@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Message must be at least 10 characters.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again later.";
      setErrorMessage(msg);
    }
  };

  return (
    <section id="contact" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something together."
          description="Have a software project, mobile app idea, or opportunity in mind? Feel free to reach out directly."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr]">
          {/* Left Column: Direct Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${myEmail}`}
                      className="mt-1 block text-base font-semibold text-white hover:text-violet-300 transition"
                    >
                      {myEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-zinc-400 hover:text-white hover:border-violet-400/40 transition cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Location & Timezone
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Kotli, Azad Jammu &amp; Kashmir, Pakistan
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    PKT (UTC+5) • Open for Worldwide Remote &amp; On-Site Roles
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Expected Response Time
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    Typically responds within <span className="text-violet-300 font-semibold">24 hours</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                Connect on Professional Channels
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white transition"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white transition"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white transition"
                  aria-label="Twitter / X Profile"
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card rounded-3xl border border-violet-500/20 p-7 sm:p-10">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Send a Direct Message
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Fill out the form below and your inquiry will be delivered directly to my inbox and saved to Neon PostgreSQL.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center animate-fade-up">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="mx-auto mt-2 max-w-md text-sm text-zinc-300 leading-relaxed">
                  Thank you for reaching out, Fasi has received your message and will review it promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full bg-violet-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-violet-500 transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {status === "error" && errorMessage && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-200">
                    <AlertCircle size={16} className="shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry, Consultation, Mobile App Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, and requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition disabled:opacity-50 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition duration-200 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
