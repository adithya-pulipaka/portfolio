import Image from "next/image";

// TODO: Replace bio with your real bio
const BIO = [
  "I'm a software engineer who cares deeply about building things that are fast, reliable, and genuinely useful. I've spent the last few years working across the full stack — from distributed systems at scale to polished front-end experiences.",
  "Outside of engineering, I like legos and spending time with friends and family. Welcome to my corner of the internet.",
];

// TODO: Update with your real tech stack
const SKILLS = [
  "Java",
  "Spring",
  "Kubernetes",
  "GCP",
  "Langchain",
  "ADK",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Azure",
  "AWS",
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>About</SectionHeading>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* Text */}
          <div>
            <div className="space-y-4 mb-8">
              {BIO.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-3"
                style={{ color: "var(--fg-muted)" }}
              >
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden flex-shrink-0"
              style={{ border: "1px solid var(--border)" }}
            >
              <Image
                src="/images/profile.JPG"
                alt="Adithya Kashyap"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ color: "var(--fg)" }}
      >
        {children}
      </h2>
      <div
        className="mt-3 w-10 h-1 rounded-full"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}
