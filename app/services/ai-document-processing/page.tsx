import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "AI Document Processing for Service Operations",
  description:
    "Extract data from quotes, orders and invoices in emails and PDFs and push it into your systems. Custom AI document processing for service ops teams.",
  alternates: { canonical: "/services/ai-document-processing" },
  openGraph: {
    title: "AI Document Processing for Service Operations | Acumo AI",
    description:
      "Extract data from quotes, orders and invoices in emails and PDFs and push it into your systems. Custom AI document processing for service ops teams.",
    type: "website",
    url: "https://www.acumoai.com/services/ai-document-processing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Document Processing and Data Entry Automation",
  provider: {
    "@type": "Organization",
    name: "Acumo AI",
    url: "https://www.acumoai.com",
  },
  areaServed: "US",
  url: "https://www.acumoai.com/services/ai-document-processing",
  description:
    "Acumo AI builds custom AI document processing pipelines that extract structured data from invoices, purchase orders, quotes and emails, validate it, and write it into a business's existing ERP, CRM and accounting systems.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is document processing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Document processing is the work of turning incoming documents — invoices, purchase orders, quotes, forms and emails — into structured data your systems can use. Traditionally that means a person reads each document and re-keys it; with AI document processing, software extracts and validates the fields automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How does document processing software work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Document processing software captures a document from email, upload, or a watched folder, identifies its type, and uses OCR plus AI models to extract the relevant fields. Those fields are validated against your business rules, then written into your ERP, CRM, or database — with exceptions flagged for human review.",
      },
    },
    {
      "@type": "Question",
      name: "How do companies process documents across multiple systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most teams re-key the same document into two or three systems because each one needs different fields. An integration layer extracts the data once and routes it to every destination through APIs, keeping records in sync without duplicate entry.",
      },
    },
    {
      "@type": "Question",
      name: "What is document AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Document AI is the machine learning layer that understands document structure and meaning — not just the characters on a page. It classifies document types, extracts fields regardless of layout, and improves as it sees more of your formats.",
      },
    },
  ],
};

const deliverables = [
  {
    title: "Email & PDF intake",
    detail:
      "One pipeline for quotes, orders, invoices and forms — captured the moment they arrive, from inboxes, uploads, or shared folders.",
  },
  {
    title: "Structured extraction",
    detail:
      "Line items, totals, dates, addresses, PO numbers and reference codes pulled into clean fields instead of screenshots and sticky notes.",
  },
  {
    title: "Validation rules",
    detail:
      "Every field checked against your business logic — totals, tax, vendor lists, and duplicate detection — before anything is written.",
  },
  {
    title: "Multi-system routing",
    detail:
      "Data pushed to your ERP, CRM, accounting or warehouse system through APIs, so the same document is never keyed twice.",
  },
  {
    title: "Human-in-the-loop review",
    detail:
      "An exception queue for ambiguous documents, low-confidence fields, and anything above your risk threshold.",
  },
  {
    title: "Audit trail & monitoring",
    detail:
      "Each document logged with source, extraction result and destination — with alerts when a run fails or volume spikes.",
  },
];

const process = [
  {
    step: "01",
    title: "Scoping call (30 min)",
    detail:
      "Bring a week of real documents. We map the formats, volumes, edge cases and systems involved.",
  },
  {
    step: "02",
    title: "Technical proposal",
    detail:
      "The extraction schema, validation rules, integrations and timeline — fixed before any build starts.",
  },
  {
    step: "03",
    title: "Build (2–4 weeks)",
    detail:
      "The pipeline built and tested against your actual documents, including the messy ones nobody warns you about.",
  },
  {
    step: "04",
    title: "Launch + monitoring",
    detail:
      "Go live with confidence thresholds, an exception queue, and reporting on volume, accuracy and hours saved.",
  },
  {
    step: "05",
    title: "Support & expand",
    detail:
      "New document types, systems and rules added as your operations change — without rebuilding the pipeline.",
  },
];

export default function AiDocumentProcessingPage() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-grid" />
        </div>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px]">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            Acumo AI — AI Document Processing
          </p>

          <h1 className="font-spartan text-[clamp(2.2rem,7vw,5.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
            AI document processing{" "}
            <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
              that ends manual data entry
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg font-medium leading-[1.5] tracking-tight text-text-primary/85 sm:text-xl md:text-2xl">
            Every quote, purchase order and invoice that arrives as an email or PDF
            has to be read, keyed in and routed by a person. Acumo AI builds custom
            document processing that{" "}
            <span className="font-bold text-text-primary">
              extracts the data once and pushes it into your systems
            </span>{" "}
            — so your operations team handles volume, not copy-paste.
          </p>

          <p className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-surface/40 p-6 font-sans text-base leading-[1.7] text-muted sm:text-[17px]">
            <span className="font-bold uppercase tracking-wider text-[#1e3a8a]">
              What Acumo AI does:
            </span>{" "}
            Acumo AI builds custom AI document processing pipelines that read
            invoices, purchase orders, quotes and emails, extract structured data,
            validate it against your rules, and write it into the ERP, CRM and
            accounting systems your business already runs on — with human review for
            edge cases.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#scoping"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-7 py-3.5 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                Book a free document scoping call{" "}
                <span className="text-[13px] font-normal">↗</span>
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-7 py-3.5 font-sans text-[11px] font-bold uppercase tracking-wider text-muted transition-colors duration-300 hover:border-white/25 hover:text-text-primary"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="text-text-primary font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              What&apos;s{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                included
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              The pieces that turn a stack of incoming documents into clean,
              routed data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 bg-bg p-7 sm:p-9"
              >
                <h3 className="font-spartan text-xl font-bold uppercase tracking-tight text-text-primary">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-muted font-medium font-sans">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              How the{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                build works
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              A clear process with checkpoints — so you always know what&apos;s
              shipping and when.
            </p>
          </div>

          <div className="flex flex-col">
            {process.map((item) => (
              <div
                key={item.step}
                className="grid grid-cols-1 gap-4 border-b border-white/5 py-8 last:border-b-0 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#1e3a8a] uppercase font-bold">
                    {item.step}
                  </span>
                </div>
                <div className="sm:col-span-10">
                  <h3 className="font-spartan text-lg sm:text-2xl font-bold uppercase tracking-tight text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-[15px] leading-[1.65] text-muted font-medium font-sans">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Time{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                back
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              Document processing pays off in the hours it hands back. Here&apos;s
              the kind of impact we ship.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">
                  Operations teams drowning in intake.
                </span>{" "}
                Quotes, orders and invoices arriving by email, each one keyed into a
                system by hand. Directional outcome: documents are captured,
                extracted and routed automatically, so the team reviews exceptions
                instead of retyping every field.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-7 sm:p-10">
              <p className="font-sans text-base leading-[1.7] text-text-primary/85 sm:text-lg">
                <span className="font-bold text-[#1e3a8a]">
                  Multi-system back offices.
                </span>{" "}
                The same purchase order entered into an ERP, a CRM and a spreadsheet.
                Directional outcome: one extraction feeds every destination through
                APIs, keeping records consistent without duplicate entry or
                reconciliation hunts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="mb-14 sm:mb-20">
            <h2 className="font-spartan text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
              Document{" "}
              <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                questions
              </span>
            </h2>
            <p className="max-w-xl text-sm font-mono text-muted">
              What operations teams ask before automating document intake.
            </p>
          </div>

          <div className="flex flex-col">
            {faqSchema.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="group border-b border-white/5 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 sm:py-8">
                  <h3 className="font-spartan text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-text-primary group-open:text-[#1e3a8a] transition-colors duration-300">
                    {faq.name}
                  </h3>
                  <span className="font-mono text-xl text-muted transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 sm:pb-8 text-[15px] leading-[1.7] text-muted font-medium font-sans">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            <Link
              href="/articles/your-business-has-the-information-why-are-your-employees-still-entering-it"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Why are your employees still entering data? Read the article
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="scoping"
        className="relative w-full overflow-hidden border-b border-white/5 bg-[#0b1220] py-20 text-text-primary sm:py-24 lg:py-40"
      >
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-spartan text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.8] tracking-tighter uppercase select-none">
                Stop keying{" "}
                <span className="block text-transparent text-stroke italic font-display font-bold tracking-[0.04em]">
                  it twice
                </span>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-muted font-medium font-sans">
                Book a free 30-minute scoping call for your document pipeline.
                We&apos;ll map your intake volume, the systems involved and what the
                automation would save — no obligation.
              </p>
              <a
                href="https://calendly.com/teamacumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-sans transition-transform duration-300 hover:scale-105"
              >
                <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2 rounded-full border border-white/5 bg-surface px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-text-primary backdrop-blur-md">
                  Book a free document scoping call{" "}
                  <span className="text-[13px] font-normal">↗</span>
                </span>
              </a>
            </div>

            <div className="shrink-0">
              <div className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-3 font-bold">
                Direct Channel
              </div>
              <a
                href="mailto:teamacumo@gmail.com"
                className="font-mono text-lg font-bold tracking-tight text-text-primary hover:text-[#1e3a8a] transition-all duration-300 sm:text-xl"
              >
                teamacumo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="relative w-full overflow-hidden border-b border-white/5 bg-bg py-16 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-[1100px] px-4 sm:px-6">
          <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            <span className="font-bold text-text-primary">Explore further</span>
            <Link
              href="/services/ai-automation"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Automating the workflows around those documents
            </Link>
            <Link
              href="/services/voice-ai-crm"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Capture the calls and inquiries that start the paperwork
            </Link>
            <Link
              href="/articles/your-business-has-the-information-why-are-your-employees-still-entering-it"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → Read how AI turns documents and emails into business actions
            </Link>
            <Link
              href="/#case-studies"
              className="transition-colors duration-300 hover:text-text-primary"
            >
              → See our case studies
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Footer />
    </main>
  );
}
