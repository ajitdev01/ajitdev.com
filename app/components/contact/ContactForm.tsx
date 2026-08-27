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
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectClick = (subject: string) => {
    setFormData(prev => ({ ...prev, subject: `Inquiry about: ${subject}` }));
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
        
        {/* Left Side: Quick response block */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Card className="p-6 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-indigo-600" />
              <h3 className="font-black text-slate-900 text-base">
                Quick Response Ideas
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  onClick={() => handleSubjectClick(response)}
                  className="py-1.5 px-3 text-xs font-bold border-indigo-200 text-indigo-700 bg-indigo-50/50 hover:bg-indigo-100/80 cursor-pointer transition-colors"
                >
                  {response}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm mb-1">
                  What happens next?
                </h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">
                  Your message is delivered straight to <strong className="text-slate-900 font-extrabold">support@ajitdev.com</strong>. I personally respond within 24 hours.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side: The Contact Form */}
        <div className="lg:col-span-8">
          <Card className="p-6 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h2 className="text-2xl font-black text-slate-900 mb-1">
              Send a Direct Message
            </h2>
            <p className="text-sm font-medium text-slate-500 mb-8">
              Fill out the form below and I&apos;ll get back to you within 24 hours.
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
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  Subject
                </label>
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
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  Message <span className="text-rose-500">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
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
                className="w-full py-4 rounded-2xl text-base font-black shadow-md shadow-indigo-500/20"
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

              <p className="text-xs font-semibold text-slate-500 text-center flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Your message is secure and will be sent directly to my inbox.
              </p>
            </form>
          </Card>
        </div>

      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent onClose={() => setShowSuccessModal(false)} className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
          <p className="text-xs sm:text-sm font-medium text-slate-500 mb-6">
            Thank you for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
          <Button
            variant="default"
            className="w-full py-3 rounded-2xl font-extrabold"
            onClick={() => setShowSuccessModal(false)}
          >
            Got it!
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
