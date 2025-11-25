// Central place to customize your project page content and assets.
// Change only this file (plus public assets) to make the template yours.
// Tip: keep paths under /public and use asset("/images/...") so static export works.

export interface Author {
  name: string;
  affiliations: number[];
  email?: string;
  link?: string;
}

export interface Affiliation {
  id: number;
  name: string;
  url?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Helper to prefix assets for static export (e.g., GitHub Pages).
const asset = (path: string) => `${basePath}${path}`;

const heroImage = asset("/images/placeholders/hero.svg");
const figureImage = asset("/images/placeholders/figure.svg");
const sampleImage = asset("/images/placeholders/sample.svg");
const chartImage = asset("/images/placeholders/histogram.svg");

// All copy, links, and asset paths for the page.
export const projectData = {
  // --- Meta & hero copy ---
  meta: {
    title: "Project Name: Concise Claim in One Line",
    description:
      "A short abstract-like description of your research contribution. Mention the core idea, method, and takeaway in 1–2 sentences.",
    tagline: "Replace this line with your one-sentence value proposition.",
    conference: "Conference/Journal · Year",
    quote: "“Add an inspiring one-liner about the problem you solve.”",
  },
  // --- Authors and affiliations (numbers map to affiliations below) ---
  authors: <Author[]>[
    { name: "First Author", affiliations: [1], email: "first.author@university.edu", link: "#" },
    { name: "Second Author", affiliations: [1, 2], link: "#" },
    { name: "Senior Author", affiliations: [1], email: "senior@lab.edu", link: "#" },
  ],
  affiliations: <Affiliation[]>[
    { id: 1, name: "Your Lab, University Name", url: "#" },
    { id: 2, name: "Department / Institute", url: "#" },
  ],
  // --- External links / downloads (hero buttons + poster iframe + BibTeX anchor) ---
  links: {
    paperPdf: "#",
    suppPdf: "#",
    arXiv: "#",
    code: "#",
    models: "#",
    dataset: "#",
    posterSection: "#poster",
    posterPdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    bibtexAnchor: "#bibtex",
  },
  // --- Asset paths (update with your own files under public/) ---
  assets: {
    heroBg: heroImage,
    framework: figureImage,
    presentationVideo: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    descriptorExample: {
      original: sampleImage,
      edges: figureImage,
      segmentation: sampleImage,
      histogram: chartImage,
      artist: sampleImage,
      output: sampleImage,
    },
    appAssets: {
      restorationCond: sampleImage,
      restorationOurs: sampleImage,
      restorationGT: sampleImage,
    },
  },
  // --- Body text sections ---
  introduction:
    "Summarize the problem, why it matters, what is missing in prior work, and the single-line insight behind your method. Keep it short and skimmable for readers outside your sub-field.",
  contributions: [
    "State your 2–4 crisp technical contributions. Avoid marketing; keep to verifiable claims.",
    "Highlight what is new compared to existing methods or baselines.",
    "Mention the settings and tasks where your method shows clear gains.",
  ],
  methodCards: [
    {
      title: "Inputs",
      text: "Describe the signals you condition on (e.g., edges, masks, audio, text). Explain why they are sufficient and interpretable.",
    },
    {
      title: "Backbone",
      text: "Give a one-liner on the core architecture and how conditioning is injected (e.g., cross-attention, adapters, skip connections).",
    },
    {
      title: "Objective",
      text: "Explain the training target, losses, or supervision strategy, especially anything that enforces disentanglement or controllability.",
    },
  ],
  // --- Core demo text and assets ---
  descriptorExplainer:
    "Use this section to show why your chosen inputs/controls are informative and how the model recombines them to produce the output.",
  experimentNote: "Replace the sample assets under public/images with your own inputs/intermediates/outputs.",

  // --- Baseline selector for the application section ---
  otherModelOptions: [
    {
      label: "Baseline 1",
      withPrompt: sampleImage,
      withoutPrompt: sampleImage,
    },
    {
      label: "Baseline 2",
      withPrompt: sampleImage,
      withoutPrompt: sampleImage,
    },
    {
      label: "Baseline 3",
      withPrompt: sampleImage,
      withoutPrompt: sampleImage,
    },
  ],
  // --- Metrics table (columns/rows are free-form; rename to suit your task) ---
  metricsTable: {
    columns: [
      { key: "method", label: "Method" },
      { key: "setting", label: "Setting", align: "center" as const },
      { key: "psnr", label: "PSNR", align: "center" as const },
      { key: "ssim", label: "SSIM", align: "center" as const },
    ],
    rows: [
      { cells: { method: "Baseline 1", setting: "Config A", psnr: "19.2", ssim: "0.68" } },
      { cells: { method: "Baseline 1", setting: "Config B", psnr: "19.5", ssim: "0.69" } },
      { cells: { method: "Baseline 2", setting: "Config A", psnr: "20.1", ssim: "0.70" } },
      { cells: { method: "Baseline 2", setting: "Config B", psnr: "20.3", ssim: "0.71" } },
      { cells: { method: "Baseline 3", setting: "Config A", psnr: "21.0", ssim: "0.73" } },
      { cells: { method: "Baseline 3", setting: "Config B", psnr: "21.2", ssim: "0.74" } },
      { cells: { method: "Ours", setting: "Config A", psnr: "23.5", ssim: "0.80" }, emphasize: true },
    ],
    note: "Swap in your own metrics; adjust column names to your task.",
  },
  bibtex: `@inproceedings{Your2025Project,
  title   = {Project Name: Concise Claim in One Line},
  author  = {You, First and Collaborator, Second and Advisor, Senior},
  booktitle = {Conference on Great Ideas},
  year    = {2025}
}`,
};

export type ProjectData = typeof projectData;
