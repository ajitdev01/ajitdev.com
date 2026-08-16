'use client';

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
  Modal,
} from "@mui/material";
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
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "4fr 8fr" }, gap: 4 }}>
        
        {/* Left Side: Quick response block */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Zap className="w-5 h-5 text-indigo-600" />
              <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "#0f172a" }}>
                Quick Response Ideas
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {quickResponses.map((response, idx) => (
                <Chip
                  key={idx}
                  label={response}
                  onClick={() => handleSubjectClick(response)}
                  variant="outlined"
                  color="primary"
                  sx={{ fontWeight: 700, fontSize: "0.75rem", borderRadius: "10px", py: 1.8, "&:hover": { backgroundColor: "#eef2ff" } }}
                />
              ))}
            </Box>
          </Paper>

          <Paper elevation={0} sx={{ p: 3, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
              <Box sx={{ p: 1.5, borderRadius: "14px", backgroundColor: "#eef2ff", color: "#4f46e5" }}>
                <Info className="w-5 h-5" />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a", mb: 0.5 }}>
                  What happens next?
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b", lineHeight: 1.6, display: "block" }}>
                  Your message is delivered straight to <strong className="text-slate-900">support@ajitdev.com</strong>. I personally respond within 24 hours.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Right Side: The Contact Form (MUI Paper) */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
          <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 0.5 }}>
            Send a Direct Message
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b", mb: 4 }}>
            Fill out the form below and I&apos;ll get back to you within 24 hours.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
              {/* Name Field */}
              <TextField
                fullWidth
                label="Full Name *"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <User className="w-4 h-4 text-indigo-600" />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: "14px", fontWeight: 700 }
                  }
                }}
              />

              {/* Email Field */}
              <TextField
                fullWidth
                type="email"
                label="Email Address *"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail className="w-4 h-4 text-indigo-600" />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: "14px", fontWeight: 700 }
                  }
                }}
              />
            </Box>

            {/* Subject Field */}
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="e.g., Full Stack Project Inquiry, Job Opportunity"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Tag className="w-4 h-4 text-indigo-600" />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: "14px", fontWeight: 700 }
                }
              }}
            />

            {/* Message Field */}
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Message *"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.5 }}>
                      <MessageSquare className="w-4 h-4 text-indigo-600" />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: "14px", fontWeight: 700 }
                }
              }}
            />

            {/* Error Message */}
            {error && (
              <Alert severity="error" icon={<AlertCircle className="w-5 h-5" />} sx={{ borderRadius: "14px", fontWeight: 700 }}>
                {error}
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              variant="contained"
              size="large"
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Send className="w-5 h-5" />}
              endIcon={!isLoading && <ArrowRight className="w-4 h-4" />}
              sx={{
                py: 1.8,
                borderRadius: "16px",
                fontWeight: 900,
                fontSize: "1rem",
                textTransform: "none",
                backgroundColor: "#4f46e5",
                "&:hover": { backgroundColor: "#4338ca" }
              }}
            >
              {isLoading ? "Sending message..." : "Send Message"}
            </Button>

            <Typography variant="caption" sx={{ color: "#64748b", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5 }}>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Your message is secure and will be sent directly to my inbox.
            </Typography>
          </Box>
        </Paper>

      </Box>

      {/* Success Modal */}
      <Modal open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: "90%", sm: 400 }, bgcolor: "background.paper", borderRadius: "24px", p: 4, textAlign: "center", boxShadow: 24 }}>
          <Box sx={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "#dcfce7", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2 }}>
            <CheckCircle2 className="w-8 h-8" />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 1 }}>Message Sent!</Typography>
          <Typography variant="body2" sx={{ color: "#64748b", mb: 3 }}>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</Typography>
          <Button variant="contained" fullWidth onClick={() => setShowSuccessModal(false)} sx={{ borderRadius: "14px", fontWeight: 800, textTransform: "none", py: 1.2, backgroundColor: "#4f46e5" }}>
            Got it!
          </Button>
        </Box>
      </Modal>
    </>
  );
}
