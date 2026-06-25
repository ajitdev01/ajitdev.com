// ========== ADVANCED STRUCTURED DATA ==========
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ajitdev.com/privacy",
      "url": "https://ajitdev.com/privacy",
      "name": "Privacy Policy | Ajit Dev — DevOps Engineer Portfolio India",
      "description": "Complete privacy policy for Ajit Dev's DevOps and Cloud Security portfolio. Learn how your data is protected when contacting a Full Stack Developer from Katihar, Bihar.",
      "inLanguage": ["en-IN", "en-US"],
      "isPartOf": {
        "@id": "https://ajitdev.com/#website"
      },
      "about": {
        "@id": "https://ajitdev.com/#person"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2025-02-22",
      "significantLink": [
        "https://ajitdev.com/contact",
        "https://ajitdev.com/about"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://ajitdev.com/#person",
      "name": "Ajit Kumar",
      "alternateName": "Ajit Dev",
      "jobTitle": [
        "DevOps Engineer",
        "Cloud Security Developer",
        "Full Stack Developer"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "AjitDev Technologies",
        "description": "Independent DevOps consulting and cloud solutions"
      },
      "email": ["support@ajitdev.com", "ajitk23192@gmail.com"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Katihar",
        "addressRegion": "Bihar",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://github.com/ajitdev01",
        "https://linkedin.com/in/ajitdev01"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ajitdev.com/privacy#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ajitdev.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://ajitdev.com/privacy"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://ajitdev.com/privacy#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What personal data does this DevOps portfolio collect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only basic contact information (name, email, message) when you voluntarily use the contact form. No automatic data collection beyond standard server logs."
          }
        },
        {
          "@type": "Question", 
          "name": "Is my data shared with third parties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. EmailJS processes contact form submissions but data is never sold. GitHub and LinkedIn links are external with their own policies."
          }
        },
        {
          "@type": "Question",
          "name": "How does this website protect my information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Industry-standard HTTPS encryption, minimal data storage, and regular security reviews by a DevOps engineer."
          }
        }
      ]
    }
  ]
};

// ========== PRIVACY PAGE COMPONENT ==========
export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ███████ MAIN CONTENT - SEMANTIC HTML5 ███████ */}
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation (SEO Gold) */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex text-sm text-gray-650 space-x-2">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li><span className="text-gray-400">/</span></li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>

          {/* Hero Section with Trust Indicators */}
          <div className="mb-16">
            <div className="text-center">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                🔒 GDPR-Ready • 100% Transparency
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-gray-650 max-w-3xl mx-auto">
                How <strong className="text-gray-900">Ajit Kumar</strong>, a 
                <strong className="text-blue-600"> DevOps Engineer & Cloud Security Developer</strong> 
                from <strong className="text-gray-900">Katihar, Bihar, India</strong>, 
                handles your data with transparency and respect.
              </p>

              {/* Last Updated Badge */}
              <div className="mt-6 inline-block bg-gray-100 text-gray-650 px-6 py-2 rounded-full text-sm">
                📅 Last Updated: <time dateTime="2025-02-22">{currentDate}</time>
              </div>
            </div>
          </div>

          {/* ███████ PRIVACY CONTENT - STRUCTURED FOR SEO ███████ */}
          <div className="prose prose-lg max-w-none text-gray-700">
            {/* Section 1: Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                1. Introduction
              </h2>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-800">
                  Welcome to <strong>ajitdev.com</strong> — the professional portfolio of 
                  <strong> Ajit Kumar</strong>, a <strong>DevOps Engineer and Full Stack Developer</strong> 
                  based in <strong>Katihar, Bihar, India</strong>. This website showcases cloud security projects, 
                  DevOps implementations, and full-stack development work.
                </p>
                <p className="text-gray-805 mt-4">
                  <span className="font-semibold">My Commitment:</span> Your privacy is paramount. 
                  Whether you're a recruiter evaluating my <strong>DevOps engineer portfolio</strong>, 
                  a potential client seeking cloud expertise, or a fellow developer, I handle your 
                  data with the same security principles I apply to cloud infrastructure.
                </p>
              </div>
            </section>

            {/* Section 2: Information Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                2. Information I Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6">📝 Voluntarily Submitted</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact Form:</strong> When reaching out via my 
                  <strong> developer portfolio contact form</strong>, I collect:
                  <ul className="list-circle pl-6 mt-2">
                    <li>Your name (to address you professionally)</li>
                    <li>Email address (to respond to inquiries about DevOps projects)</li>
                    <li>Subject line (context for your message)</li>
                    <li>Message content (your questions about cloud engineering)</li>
                  </ul>
                </li>
                <li>
                  <strong>Direct Email:</strong> Communications sent to 
                  <code className="bg-gray-100 px-2 py-1 rounded">support@ajitdev.com</code> or <code className="bg-gray-100 px-2 py-1 rounded">ajitk23192@gmail.com</code>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6">🤖 Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser type and version</li>
                <li>Device information (mobile/desktop)</li>
                <li>Anonymous usage patterns (to improve my <strong>cloud engineer portfolio</strong>)</li>
                <li>IP address (anonymized for security)</li>
              </ul>
            </section>

            {/* Section 3: How Information Is Used */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                3. How Your Information Is Used
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-blue-600 text-2xl mb-3">📧</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Responding to Inquiries</h3>
                  <p className="text-gray-650">Answering questions about DevOps projects, cloud security, or collaboration</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-blue-600 text-2xl mb-3">🚀</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Project Communication</h3>
                  <p className="text-gray-650">Discussing potential cloud engineering opportunities</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-blue-600 text-2xl mb-3">📊</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Analytics</h3>
                  <p className="text-gray-655">Understanding which projects interest visitors most</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-blue-600 text-2xl mb-3">🔒</div>
                  <h3 className="font-semibold mb-2 text-gray-900">Security</h3>
                  <p className="text-gray-650">Monitoring for abuse and protecting the portfolio</p>
                </div>
              </div>
              <p className="mt-4 font-medium text-green-700">
                ✓ I NEVER sell your data. As a DevOps professional, I respect data privacy.
              </p>
            </section>

            {/* Section 4: Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                4. Third-Party Services
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Service</th>
                      <th className="p-3 text-left">Purpose</th>
                      <th className="p-3 text-left">Data Shared</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium text-gray-900">EmailJS</td>
                      <td className="p-3">Contact form delivery</td>
                      <td className="p-3">Name, email, message</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-medium text-gray-905 font-mono">Vercel/GitHub Pages</td>
                      <td className="p-3">Hosting</td>
                      <td className="p-3">Server logs (temporary)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-900 font-mono">GitHub/LinkedIn</td>
                      <td className="p-3">External profile links</td>
                      <td className="p-3">Referral information</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-655 mt-4">
                Each service operates under its own privacy policy. Links open in new tabs.
              </p>
            </section>

            {/* Section 5: Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                5. Data Security (DevOps Approach)
              </h2>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-xl font-mono text-sm">
                <p className="mb-2">{'$'} Security measures implemented:</p>
                <p className="mb-1">{'  '}✓ HTTPS/TLS 1.3 encryption</p>
                <p className="mb-1">{'  '}✓ Minimal data retention policy</p>
                <p className="mb-1">{'  '}✓ Regular security audits</p>
                <p className="mb-1">{'  '}✓ No database storage of forms</p>
                <p>{'  '}✓ Cloud best practices applied</p>
              </div>
            </section>

            {/* Section 6: Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                6. Cookies & Tracking
              </h2>
              <p>
                This <strong>full stack developer portfolio</strong> uses minimal cookies:
              </p>
              <ul className="list-disc pl-6 mt-3">
                <li><strong>Essential:</strong> Session management, security</li>
                <li><strong>Performance:</strong> Anonymous analytics (if implemented)</li>
              </ul>
              <p className="mt-4">
                Manage cookies via browser settings. No third-party tracking cookies.
              </p>
            </section>

            {/* Section 7: External Links */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                7. External Links
              </h2>
              <p>
                My portfolio links to professional platforms:
              </p>
              <ul className="list-disc pl-6 mt-3">
                <li>
                  <a href="https://github.com/ajitdev01" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a> — Code repositories
                </li>
                <li>
                  <a href="https://linkedin.com/in/ajitdev01" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a> — Professional network
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-655">
                External sites have independent privacy policies.
              </p>
            </section>

            {/* Section 8: Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                8. Your Rights
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-3xl">📋</span>
                  <p className="font-medium mt-2">Access</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-3xl">✏️</span>
                  <p className="font-medium mt-2">Correction</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <span className="text-3xl">🗑️</span>
                  <p className="font-medium mt-2">Deletion</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <span className="text-3xl">🚫</span>
                  <p className="font-medium mt-2">Opt-out</p>
                </div>
              </div>
              <p className="mt-6">
                Contact me anytime to exercise these rights.
              </p>
            </section>

            {/* Section 9: Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                9. Contact Information
              </h2>
              <address className="not-italic bg-gray-100 p-6 rounded-xl">
                <p className="text-xl font-semibold text-gray-900">Ajit Kumar</p>
                <p className="text-gray-700 mt-2">DevOps Engineer & Full Stack Developer</p>
                <p className="text-gray-655">Katihar, Bihar, India</p>
                <p className="mt-4">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@ajitdev.com" className="text-blue-600 hover:underline">
                    support@ajitdev.com
                  </a> or{' '}
                  <a href="mailto:ajitk23192@gmail.com" className="text-blue-600 hover:underline">
                    ajitk23192@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://ajitdev.com" className="text-blue-600 hover:underline">
                    https://ajitdev.com
                  </a>
                </p>
              </address>
            </section>

            {/* Section 10: Updates */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                10. Policy Updates
              </h2>
              <p>
                This policy may be updated to reflect:
              </p>
              <ul className="list-disc pl-6 mt-3">
                <li>New portfolio features</li>
                <li>Legal/regulatory changes</li>
                <li>Improved security practices</li>
              </ul>
              <p className="mt-4">
                Check the &quot;Last Updated&quot; date for the latest version.
              </p>
            </section>
          </div>

          {/* Trust Seal Section */}
          <div className="mt-16 text-center border-t border-gray-200 pt-10">
            <div className="inline-flex flex-wrap justify-center gap-8">
              <div className="flex items-center text-gray-655">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GDPR Ready
              </div>
              <div className="flex items-center text-gray-655">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Data Selling
              </div>
              <div className="flex items-center text-gray-655">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                HTTPS Secured
              </div>
            </div>
          </div>

        </article>
      </main>
    </>
  );
}