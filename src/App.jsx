import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-300 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

export default function OmarAhmedPortfolio() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      year: "2025",
      title: "SHATO — Speech-Based Robotics Control System",
      stack: ["Python", "LLaMA-3", "FastAPI", "Whisper", "Docker", "Coqui TTS"],
      summary:
        "Voice-based robotics control pipeline using microservices for speech-to-text, command generation, validation, and text-to-speech.",
      impact: "Modular architecture with schema validation for safer, more reliable robot commands.",
    },
    {
      year: "2025",
      title: "Spam Classification System",
      stack: ["Scikit-learn", "NLTK", "TF-IDF", "SMOTE"],
      summary:
        "Built an NLP classification system with full preprocessing, feature extraction, and class balancing.",
      impact: "Improved spam recall from 76% to 89% and reached 98% accuracy with Linear SVM.",
    },
    {
      year: "2025",
      title: "Rainfall Prediction (Australia Dataset)",
      stack: ["Python", "Scikit-learn", "EDA", "Feature Engineering"],
      summary:
        "Binary classification pipeline over 145K+ records with robust preprocessing, encoding, and scaling.",
      impact: "Achieved 85% accuracy, outperforming the 77.6% null baseline.",
    },
    {
      year: "2025",
      title: "Alexandria Real Estate Price Prediction",
      stack: ["Python", "Selenium", "Regression", "Scikit-learn"],
      summary:
        "Scraped apartment listings and built regression models for property price prediction.",
      impact: "Reached 88.4% prediction accuracy with feature engineering and model tuning.",
    },
  ];

  const experience = [
    {
      role: "AI Engineer Intern",
      company: "M.I.A. Robotics",
      period: "Aug 2025 — Oct 2025",
      bullets: [
        "Trained deep learning models with PyTorch for computer vision and NLP tasks.",
        "Applied CNNs, RNNs, and Transformers to engineering use cases.",
        "Worked with Linux, Git, and Docker in development and deployment workflows.",
      ],
    },
    {
      role: "NLP Engineer Trainee",
      company: "MAIM Digital Solution",
      period: "Jul 2025 — Sep 2025",
      bullets: [
        "Built end-to-end NLP pipelines for preprocessing, classification, and sentiment analysis.",
        "Fine-tuned BERT-based transformer models for practical NLP applications.",
        "Evaluated and optimized models using standard NLP metrics.",
      ],
    },
  ];

  const skills = {
    "Programming & Tools": ["Python", "Git", "GitHub", "Jupyter", "Linux"],
    "ML / AI Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "MLflow"],
    Specializations: ["Machine Learning", "Deep Learning", "NLP", "Transformers (BERT)", "Computer Vision"],
    Deployment: ["FastAPI", "Docker"],
    "Data & Modeling": ["EDA", "Feature Engineering", "Model Evaluation", "Error Analysis"],
    "Databases & CS": ["SQL Server", "Java", "C++", "Data Structures & Algorithms"],
  };

  const certs = [
    "Intermediate Python — DataCamp",
    "Intermediate SQL — DataCamp",
    "GitHub Foundations — DataCamp",
    "Understanding Cloud Computing — DataCamp",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.12),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(2,6,23,0.98))]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="absolute top-24 left-8 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-24 right-8 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/55 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="group">
            <p className="text-sm font-semibold tracking-wide">Omar Ahmed</p>
            <p className="text-xs text-slate-400 group-hover:text-slate-300">Machine Learning & AI Engineer</p>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-cyan-500/5 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-purple-400/10 blur-3xl" />

          <div className="grid md:grid-cols-5 gap-6 items-start relative">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Alexandria, Egypt</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight text-white">Omar Ahmed</h1>
              <p className="mt-3 text-xl md:text-2xl text-slate-200">Machine Learning & AI Engineer</p>
              <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">
                I build intelligent systems in NLP, Computer Vision, and applied machine learning — focused on practical products,
                clean pipelines, and deployment-ready architecture.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="px-4 py-2 rounded-xl bg-cyan-300 text-slate-900 font-medium hover:opacity-90 transition">
                  View Projects
                </a>
                <a href="#contact" className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                  Contact Me
                </a>
                <a href="https://drive.google.com/file/d/1qOdzht964Xhs99Akk0C6j7_70HOp-Ga4/view?usp=sharing" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                  View CV
                </a>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Focus</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["NLP", "Computer Vision", "Transformers", "Deployment", "MLOps"].map((x) => (
                    <span key={x} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Education</p>
                <p className="mt-2 text-sm font-medium text-white">Alexandria University</p>
                <p className="text-sm text-slate-300">B.Sc. Computing & Data Science</p>
                <p className="mt-2 text-xs text-slate-400">Expected 2027 • GPA 3.30 / 4.00</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/omar-ahmed-mleng/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm text-cyan-300 hover:underline break-all"
                >
                  linkedin.com/in/omar-ahmed-mleng
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="about" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7">
            <SectionTitle eyebrow="About" title="Who I Am" subtitle="A builder focused on practical AI systems and strong engineering foundations." />
            <div className="grid md:grid-cols-3 gap-5">
              <div className="md:col-span-2 text-slate-300 leading-relaxed">
                <p>
                  I’m a Machine Learning & AI Engineer with hands-on experience in building and evaluating systems across Natural Language Processing,
                  deep learning, and computer vision. I enjoy taking an idea from concept to implementation using Python and modern ML tooling.
                </p>
                <p className="mt-3">
                  My work includes end-to-end NLP pipelines, transformer-based modeling, classical machine learning systems, and AI-powered applications
                  with deployment-ready architecture using FastAPI and Docker.
                </p>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Strengths</p>
                  <ul className="mt-2 text-sm text-slate-300 space-y-1">
                    <li>• Model building & evaluation</li>
                    <li>• NLP pipelines & transformers</li>
                    <li>• API integration & deployment</li>
                    <li>• Clean, practical implementation</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Open To</p>
                  <p className="mt-2 text-sm text-slate-300">AI/ML internships, engineering roles, and freelance AI projects.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10">
          <SectionTitle eyebrow="Experience" title="What I’ve Worked On" />
          <div className="relative pl-0 md:pl-6">
            <div className="hidden md:block absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300/40 via-white/10 to-transparent" />
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.role} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 md:ml-6">
                  <div className="hidden md:block absolute -left-[29px] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white">{item.role}</h3>
                      <p className="text-slate-300">{item.company}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-slate-900/50 text-slate-300">{item.period}</span>
                  </div>
                  <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10">
          <SectionTitle
            eyebrow="Projects"
            title="Featured Work"
            subtitle="Projects selected to show model design, NLP/LLM workflows, data pipelines, and applied machine learning results."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.18),transparent_35%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs px-2 py-1 rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">{p.year}</span>
                    <span className="text-xs text-slate-400">Project {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.summary}</p>
                  <p className="mt-2 text-sm text-cyan-200/90">{p.impact}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-slate-900/40 text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10">
          <SectionTitle eyebrow="Skills" title="Tech Stack" />
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <h3 className="font-medium text-white">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="text-sm px-3 py-1 rounded-full bg-slate-900/60 border border-white/10 text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
            <h3 className="text-lg font-semibold text-white">Certifications</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
              {certs.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
            <h3 className="text-lg font-semibold text-white">Activities</h3>
            <p className="mt-3 text-slate-200">HackerRank Team Member — Alexandria University</p>
            <p className="mt-2 text-sm text-slate-300">Supported students in university courses and problem-solving sessions.</p>
          </div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-purple-400/10 backdrop-blur-xl p-6 md:p-7">
            <SectionTitle eyebrow="Contact" title="Let’s Build Something" subtitle="I’m available for AI/ML projects, internships, and collaborations." />
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-slate-400">Email</p>
                <a href="mailto:omar76ahmed0@gmail.com" className="mt-1 block text-cyan-300 hover:underline break-all">omar76ahmed0@gmail.com</a>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-slate-400">Phone</p>
                <a href="tel:+201063240287" className="mt-1 block text-cyan-300 hover:underline">+20 106 324 0287</a>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-slate-400">Location</p>
                <p className="mt-1 text-slate-200">Alexandria, Egypt</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4 md:col-span-3">
                <p className="text-slate-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/omar-ahmed-mleng/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-cyan-300 hover:underline break-all"
                >
                  linkedin.com/in/omar-ahmed-mleng
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="mt-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Omar Ahmed</p>
          <p>Building AI solutions for real-world problems.</p>
        </div>
      </footer>
    </div>
  );
}
