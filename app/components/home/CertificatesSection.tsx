"use client";

import React from "react";
import { Award, ShieldAlert, GraduationCap, CheckCircle, ExternalLink } from "lucide-react";

export default function CertificatesSection() {
  const certifications = [
    {
      title: "DevOps & Cloud Systems Specialist Training",
      institution: "Brainzima Innovation Institute",
      date: "January 2026",
      credentialId: "BRZ-DEV-2026-902",
      status: "Verified",
      skills: ["CI/CD pipelines", "Docker namespaces", "Linux administration", "AWS VPC networks", "Security scanning"],
      link: "https://www.brainzima.com/",
      icon: Award,
      color: "border-indigo-200 hover:border-indigo-400 shadow-indigo-500/5",
      logoBg: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "BCA (Cloud & Security) Academic Program",
      institution: "Amity University Online",
      date: "2025 - Present",
      credentialId: "Enrollment ID Active",
      status: "In Progress",
      skills: ["Operating systems", "Computer networking", "Data structures", "Object-oriented design", "Information security"],
      link: "https://amityonline.com/",
      icon: GraduationCap,
      color: "border-purple-200 hover:border-purple-400 shadow-purple-500/5",
      logoBg: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="py-16 border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-2">
            <Award className="w-6.5 h-6.5 text-indigo-650" /> Academic & Professional Credentials
          </h2>
          <p className="text-gray-500 text-sm mt-2">Academic enrollments and industrial systems engineering training specifications</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${cert.color} group`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className={`p-3 rounded-xl shrink-0 ${cert.logoBg} group-hover:scale-115 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-gray-900 leading-snug group-hover:text-indigo-650 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm font-semibold text-gray-500 mt-0.5">{cert.institution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-150 text-[10px] font-bold text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-6 mt-6 border-t border-gray-100 font-semibold">
                  <div className="space-y-1">
                    <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Credential Info</div>
                    <div className="text-gray-700 font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      {cert.credentialId}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Issue Date / Status</div>
                    <div className="text-gray-700 font-extrabold">{cert.date}</div>
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1 px-4 py-2 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 text-xs font-bold text-indigo-650 rounded-xl transition-all"
                >
                  Verify at {cert.institution.split(" ")[0]}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
