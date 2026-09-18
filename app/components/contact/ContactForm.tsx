'use client';

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  User,
  Mail,
  Tag,
  MessageSquare,
  Send,
  ArrowRight,
  Zap,
  CheckCircle2,
  AlertCircle,
  Info,
  Loader2,
  Copy,
  Check,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const quickResponses = [
  "Full Stack MERN application development",
  "Next.js / SEO optimization project",
  "Technical collaboration / Code review",
  "Job opportunity / Contract work",
  "DSA / Problem solving discussion"
];

export default function ContactForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectClick = (subject: string) => {
    if (selectedTopic === subject) {
      setSelectedTopic(null);
      setFormData(prev => ({ ...prev, subject: "" }));
    } else {
      setSelectedTopic(subject);
      setFormData(prev => ({ ...prev, subject: `Inquiry about: ${subject}` }));
    }
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(type);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsLoading(false);
        setShowSuccessModal(true);
        setSelectedTopic(null);
        trackEvent("contact_submission_success", { subject: formData.subject || "General" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (err: any) {
      console.error("Contact form error:", err);
      setIsLoading(false);
      trackEvent("contact_submission_failed", { error: err.message || "Unknown error" });
      setError(err.message || "Failed to send message. Please try again or email me directly.");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Quick response block & Direct Emails */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Card className="p-6 rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Zap className="w-5 h-5 fill-amber-500/20" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-base leading-snug">
                  Quick Topics
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Click to pre-fill your message subject
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {quickResponses.map((response, idx) => {
                const isSelected = selectedTopic === response;
                return (
                  <Badge
                    key={idx}
                    variant="outline"
                    onClick={() => handleSubjectClick(response)}
                    className={`py-1.5 px-3 text-xs font-bold transition-all duration-200 cursor-pointer select-none ${
                      isSelected
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm scale-[1.02]"
                        : "border-indigo-100 text-indigo-700 bg-indigo-50/60 hover:bg-indigo-100 hover:border-indigo-200"
                    }`}
                  >
                    {isSelected && <Sparkles className="w-3 h-3 mr-1 inline animate-pulse" />}
                    {response}
                  </Badge>
                );
              })}
            </div>
          </Card>

          {/* Quick Copy Email Card */}
          <Card className="p-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black tracking-wider uppercase text-indigo-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Direct Contacts
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Instant Copy
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between group hover:bg-white/15 transition-all">
                <div className="overflow-hidden mr-2">
                  <span className="text-[10px] uppercase font-bold text-indigo-200 block">Primary Business Email</span>
                  <span className="text-xs font-mono font-bold text-white truncate block">support@ajitdev.com</span>
                </div>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => handleCopy("support@ajitdev.com", "primary")}
                  className={`shrink-0 text-xs font-bold transition-all ${
                    copiedEmail === "primary"
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "bg-white/20 hover:bg-white text-white"
                  }`}
                >
                  {copiedEmail === "primary" ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1" /> Copy
                    </>
                  )}
                </Button>
              </div>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between group hover:bg-white/15 transition-all">
                <div className="overflow-hidden mr-2">
                  <span className="text-[10px] uppercase font-bold text-indigo-200 block">Personal Email</span>
                  <span className="text-xs font-mono font-bold text-white truncate block">ajitk23192@gmail.com</span>
                </div>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => handleCopy("ajitk23192@gmail.com", "personal")}
                  className={`shrink-0 text-xs font-bold transition-all ${
                    copiedEmail === "personal"
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "bg-white/20 hover:bg-white text-white"
                  }`}
                >
                  {copiedEmail === "personal" ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1" /> Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm mb-1">
                  Guaranteed Response
                </h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">
                  Messages are sent directly to <strong className="text-slate-900 font-extrabold">support@ajitdev.com</strong> & <strong className="text-slate-900 font-extrabold">ajitk23192@gmail.com</strong> with 24-hour turnaround SLA.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side: The Contact Form */}
        <div className="lg:col-span-8">
          <Card className="p-6 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Send a Direct Message
              </h2>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 hidden sm:inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-600" /> ~24h Response
              </span>
            </div>

            <p className="text-sm font-medium text-slate-500 mb-8">
              Fill out the details below and I&apos;ll reach back out as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    startAdornment={<User className="w-4 h-4 text-indigo-600" />}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    startAdornment={<Mail className="w-4 h-4 text-indigo-600" />}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                    Subject
                  </label>
                  {selectedTopic && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTopic(null);
                        setFormData(prev => ({ ...prev, subject: "" }));
                      }}
                      className="text-[11px] font-extrabold text-rose-600 hover:underline"
                    >
                      Clear selected topic
                    </button>
                  )}
                </div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g., Full Stack Project Inquiry, Job Opportunity"
                  startAdornment={<Tag className="w-4 h-4 text-indigo-600" />}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {formData.message.length} characters
                  </span>
                </div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, job opportunity, tech stack, or inquiry..."
                  startAdornment={<MessageSquare className="w-4 h-4 text-indigo-600" />}
                />
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive" icon={<AlertCircle className="w-5 h-5 text-rose-600" />}>
                  {error}
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant="default"
                size="large"
                className="w-full py-4 rounded-2xl text-base font-black shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <div className="pt-1 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" /> SSL Encrypted Transmission
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Direct Delivery to Inbox
                </span>
              </div>
            </form>
          </Card>
        </div>

      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent onClose={() => setShowSuccessModal(false)} className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">Message Delivered!</h3>
          <p className="text-xs sm:text-sm font-medium text-slate-500 mb-6 leading-relaxed">
            Thank you for reaching out. Your message has been routed directly to Ajit Dev. I will get back to you within 24 hours.
          </p>
          <Button
            variant="default"
            className="w-full py-3 rounded-2xl font-extrabold"
            onClick={() => setShowSuccessModal(false)}
          >
            Great, Thanks!
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

