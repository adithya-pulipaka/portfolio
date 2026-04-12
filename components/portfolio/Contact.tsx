"use client";

import { useState } from "react";
import { SectionHeading } from "./About";

// TODO: Update with your real social links
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/adithya-pulipaka",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adithya-pulipaka",
    icon: <LinkedInIcon />,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire up to a backend in a future phase
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="max-w-2xl mx-auto">
        <SectionHeading>Get in touch</SectionHeading>

        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: "var(--fg-muted)" }}
        >
          Whether you want to work together, chat about an idea, or just say hi
          — I&apos;m always happy to hear from you.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              style={{
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--fg-muted)";
              }}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Placeholder form */}
        <div
          className="rounded-xl p-6 md:p-8"
          style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <p className="font-semibold mb-2" style={{ color: "var(--fg)" }}>
                Message received!
              </p>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                (Form backend coming soon — for now, reach me via email or
                LinkedIn.)
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  required
                  className="rounded-lg px-3 py-2.5 text-sm resize-none outline-none transition-colors duration-200"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                  onFocus={(e) =>
                    ((
                      e.currentTarget as HTMLTextAreaElement
                    ).style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    ((
                      e.currentTarget as HTMLTextAreaElement
                    ).style.borderColor = "var(--border)")
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium"
        style={{ color: "var(--fg-muted)" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-lg px-3 py-2.5 text-sm outline-none transition-colors duration-200"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--fg)",
        }}
        onFocus={(e) =>
          ((e.currentTarget as HTMLInputElement).style.borderColor =
            "var(--accent)")
        }
        onBlur={(e) =>
          ((e.currentTarget as HTMLInputElement).style.borderColor =
            "var(--border)")
        }
      />
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
