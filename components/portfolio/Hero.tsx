"use client";

import Link from "next/link";

// TODO: Update tagline, GitHub/LinkedIn/email to your real values
const TAGLINE = "Software Engineer · Builder · Writer";
const SOCIAL = {
  github: "https://github.com/adithya-pulipaka",
  linkedin: "https://linkedin.com/in/adithya-pulipaka",
  email: "adithya@example.com", // TODO: replace with real email
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, oklch(0.585 0.233 277.1 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            border: "1px solid var(--border)",
            color: "var(--fg-muted)",
            animationDelay: "0ms",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "oklch(0.7 0.2 145)" }} // green dot
          />
          Open to conversations
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
          style={{ animationDelay: "80ms", opacity: 0 }}
        >
          <span style={{ color: "var(--fg)" }}>Adithya </span>
          <span style={{ color: "var(--accent)" }}>Kashyap</span>
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-up text-lg md:text-xl"
          style={{
            color: "var(--fg-muted)",
            animationDelay: "160ms",
            opacity: 0,
          }}
        >
          {TAGLINE}
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up flex flex-wrap items-center justify-center gap-3 pt-2"
          style={{ animationDelay: "240ms", opacity: 0 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-80"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Read my blog
            <ArrowRight />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--fg-muted)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--fg-muted)";
              el.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--fg-muted)";
            }}
          >
            About me
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--fg-muted)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--fg-muted)";
              el.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--fg-muted)";
            }}
          >
            Contact me
          </Link>
        </div>

        {/* Social icons */}
        <div
          className="animate-fade-up flex items-center justify-center gap-5 pt-2"
          style={{ animationDelay: "320ms", opacity: 0 }}
        >
          <SocialLink href={SOCIAL.github} label="GitHub">
            <GitHubIcon />
          </SocialLink>
          <SocialLink href={SOCIAL.linkedin} label="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-up absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "500ms", opacity: 0 }}
        aria-hidden
      >
        <div
          className="flex flex-col items-center gap-1"
          style={{ color: "var(--fg-muted)" }}
        >
          <span className="text-xs">scroll</span>
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="transition-colors duration-200"
      style={{ color: "var(--fg-muted)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-muted)")
      }
    >
      {children}
    </a>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
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
