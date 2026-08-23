// products-data.ts
// Scale 99 — Software content source.
// This file IS the lightweight CMS: every software page and the /software
// index page render from this array. Add a new object here and both pages
// update automatically — no other code changes needed.
//
// Drop this into your repo's content/data layer (e.g. /data, /content, or
// /lib) and adjust the import path in the prompts below to match.

export interface CaseStudyQuote {
  text: string;
  attribution: string;
}

export interface CaseStudy {
  clientProfile: string;
  challenge: string;
  solution: string;
  results: string;
  quote?: CaseStudyQuote;
}

export interface Product {
  slug: string;
  title: string;
  category: string;
  shortExplanation: string;
  highlights: [string, string, string];
  caseStudy: CaseStudy;
  metaTitle: string;
  metaDescription: string;
  /** Product-showcase image on /software, served from /public/product-media. Falls back to a placeholder card when unset. */
  heroImage?: string;
  /** Background video for the case-study hero on /software/[slug], served from /public/product-media. Falls back to a placeholder when unset. */
  heroVideo?: string;
}

export const products: Product[] = [
  {
    slug: "cafe-crm",
    title: "Café CRM",
    category: "Hospitality & F&B",
    shortExplanation:
      "Café CRM is a complete, field-tested operations platform built for the daily realities of running a café — orders, staff, stock, and customers — all from one dashboard. Originally developed and proven in the Qatari market, it's designed to scale cleanly from a single counter to a multi-branch chain.",
    highlights: [
      "Multi-branch ready: manage several locations from a single account, with performance visibility across every branch.",
      "Daily-operations core: order tracking, staff shifts, and inventory levels stay synced in real time, so nothing falls through the cracks during a rush.",
      "Proven in production: built and stress-tested inside a real, operating café before ever being sold — not a theoretical product.",
    ],
    caseStudy: {
      clientProfile:
        "A café chain in Qatar, operating four branches across the country — a small-to-medium hospitality business.",
      challenge:
        "The client was running daily operations — orders, inventory, and staff coordination — across manual processes and disconnected spreadsheets. As they expanded from a single location to four branches, visibility across locations broke down, making it hard to spot stock shortages, reconcile daily sales, or standardize operations branch to branch.",
      solution:
        "We built and deployed a custom CRM covering point-of-sale-linked order tracking, live inventory monitoring, and staff shift management, with a centralized dashboard giving ownership a real-time view of all four branches at once.",
      results:
        "Within the first few months of rollout, the client reported faster daily reconciliation, fewer stock-outs during peak hours, and — most notably — was able to standardize operations well enough to confidently open and manage additional branches using the same system.",
      quote: {
        text: "We finally had one screen that told us what was happening across every branch, every day.",
        attribution: "Operations Lead, client café chain",
      },
    },
    metaTitle: "Café CRM — Multi-Branch Café Operations Platform | Scale 99",
    metaDescription:
      "Café CRM unifies orders, staff, and inventory for café chains. See how a 4-branch Qatari café chain standardized operations with it.",
    heroImage: "/product-media/cafe-crm-image.jpeg",
    heroVideo: "/product-media/cafe-crm-video.mp4",
  },
  {
    slug: "furniech",
    title: "Furniech",
    category: "Construction & Furnishing",
    shortExplanation:
      "Furniech is a project management platform purpose-built for furnishing and construction businesses working directly with end customers (engineer-to-customer / B2C). It turns a construction or fit-out project into a transparent, phase-by-phase journey — so customers always know what's happening, what it costs, and when it'll be done.",
    highlights: [
      "Phased project timelines: every project is broken into clear phases and steps, each with its own timeline, so customers can track exactly where things stand.",
      "Live cost & time estimation: built-in finance tracking lets customers see estimated cost and remaining time update as the project progresses.",
      "Visual progress tracking: photo and video updates per phase keep customers connected to their project — especially valuable for clients managing work on a home or apartment while living abroad.",
    ],
    caseStudy: {
      clientProfile:
        "A residential furnishing and fit-out contracting firm, a small-to-mid-sized business serving both local and overseas (expat) homeowners.",
      challenge:
        "A large share of the client's customers were based outside the country — Gulf-based expats furnishing apartments back home — and had no reliable way to track progress or communicate with site engineers beyond scattered phone calls and photos. This led to frequent misunderstandings about cost, timelines, and scope.",
      solution:
        "We implemented Furniech to structure every project into defined phases with timelines, attached cost and finance tracking to each phase, and gave customers a portal to view progress photos and videos in real time — closing the communication gap between site and customer, regardless of location.",
      results:
        "The client saw a marked drop in customer disputes over scope and cost, faster sign-offs between project phases, and a noticeable increase in referrals from overseas clients who — for the first time — felt fully in the loop despite being thousands of kilometers away.",
      quote: {
        text: "Our clients abroad finally trusted the process, because they could actually see it.",
        attribution: "Founder, client contracting firm",
      },
    },
    metaTitle: "Furniech — Engineer-to-Customer Project Management | Scale 99",
    metaDescription:
      "Furniech gives furnishing and construction clients a transparent, phase-by-phase view of their project, cost, and timeline.",
    heroImage: "/product-media/furniech-image.jpeg",
    heroVideo: "/product-media/furniech-video.mp4",
  },
  {
    slug: "tendering",
    title: "Tendering",
    category: "Construction",
    shortExplanation:
      "Tendering automates the entire bid preparation process for construction companies. Instead of building every offer from scratch, the platform applies predefined, business-specific formulas and automatically generates a tailored offer template for each new job — cutting tendering time from days to hours.",
    highlights: [
      "Formula-driven pricing: predefined calculation logic tailored to the business automatically prices new tenders based on job specifics.",
      "Automated offer generation: offer templates are auto-populated and adjusted for each specific job, removing repetitive manual drafting.",
      "Faster turnaround, more bids: by compressing preparation time, teams can respond to more tender opportunities without adding headcount.",
    ],
    caseStudy: {
      clientProfile:
        "A mid-sized construction contracting company regularly bidding on multiple commercial and residential tenders per month.",
      challenge:
        "The client's estimating team was manually rebuilding pricing and offer documents for every tender from scratch, a process that consumed days per bid and left little room to pursue additional opportunities. Inconsistent formatting and pricing logic between team members was also causing internal errors.",
      solution:
        "We deployed Tendering with the client's actual pricing formulas and offer templates built in, so estimators could generate a fully priced, branded, job-specific offer in a fraction of the time — with consistent logic applied every time.",
      results:
        "The client cut average tender preparation time by more than half and was able to submit noticeably more bids per quarter with the same team, directly increasing their win volume without adding to the estimating headcount.",
    },
    metaTitle: "Tendering — Automated Bid Preparation for Contractors | Scale 99",
    metaDescription:
      "Tendering auto-generates priced, job-specific offers for construction bids, cutting preparation time from days to hours.",
    heroImage: "/product-media/tendering-image.jpeg",
    heroVideo: "/product-media/tendering-video.mp4",
  },
  {
    slug: "callscore-ai",
    title: "CallScore AI",
    category: "AI & HR Tech",
    shortExplanation:
      "CallScore AI is an AI-powered interviewer built for high-volume hiring roles that require specific English proficiency, such as call center and customer support positions. It automatically scores and profiles candidates — with a built-in accent-calibration setting that fine-tunes scoring sensitivity for regional English accents, so assessments measure communication effectiveness rather than unfairly penalizing accent.",
    highlights: [
      "Automated interviewing at scale: conducts structured English-proficiency interviews without tying up a human recruiter for every candidate.",
      "Objective scoring & profiling: generates consistent, comparable candidate scores and profiles based on defined role requirements.",
      "Accent-aware calibration: an adjustable modifier — tuned for accents like Egyptian English — recalibrates scoring to focus on real communication ability, improving fairness across regional candidate pools.",
    ],
    caseStudy: {
      clientProfile:
        "A regional business process outsourcing (BPO) company running large-scale customer support operations, a medium-sized employer hiring hundreds of agents annually.",
      challenge:
        "The client's recruiting team was manually screening hundreds of English-proficiency candidates every month, a slow and inconsistent process where scoring varied significantly between interviewers — and strong local candidates were sometimes screened out due to accent rather than actual communication ability.",
      solution:
        "We deployed CallScore AI to run first-round English-proficiency interviews automatically, generating a consistent score and profile for every candidate, with the accent-calibration setting tuned to the client's primary regional talent pool.",
      results:
        "The client's recruiting team reduced first-round screening time dramatically, standardized scoring across all candidates, and reported an improved quality of shortlisted candidates reaching the final human interview stage.",
    },
    metaTitle: "CallScore AI — AI Interviewer for Call Center Hiring | Scale 99",
    metaDescription:
      "CallScore AI automates English-proficiency screening for call center hiring with fair, accent-calibrated scoring.",
    heroImage: "/product-media/callscore-ai-image.jpeg",
    heroVideo: "/product-media/callscore-ai-video.mp4",
  },
  {
    slug: "ai-marketing-automation",
    title: "AI Marketing Automation Suite",
    category: "Marketing & AI",
    shortExplanation:
      "An end-to-end AI marketing platform that takes a business from brand identity to published content — automatically. It builds brand identity assets, generates marketing campaigns, creates media, and schedules posts, compressing what normally takes a marketing team weeks into a fast, largely automated workflow.",
    highlights: [
      "Brand-to-campaign pipeline: goes from brand identity creation straight through to full campaign development in one connected flow.",
      "AI-generated media: produces campaign-ready visual and written content automatically, reducing dependency on external creative resources.",
      "Automated scheduling: posts are scheduled and published automatically across channels, keeping a consistent content cadence with minimal manual input.",
    ],
    caseStudy: {
      clientProfile:
        "An early-stage e-commerce retail brand, a small business with no in-house marketing department.",
      challenge:
        "The client needed a consistent brand presence and regular content output but had neither the budget for a full marketing team nor the internal expertise to build a brand identity and run campaigns independently.",
      solution:
        "We onboarded the client onto the AI Marketing Automation Suite, using it to generate a complete brand identity, build out initial campaign concepts, produce supporting media, and automatically schedule a consistent posting calendar across their social channels.",
      results:
        "The client launched with a cohesive brand identity in a fraction of the usual time and cost, maintained a consistent posting cadence without hiring additional staff, and saw steady growth in engagement during their first campaign cycles.",
    },
    metaTitle: "AI Marketing Automation Suite — Brand to Campaign | Scale 99",
    metaDescription:
      "From brand identity to scheduled posts — an AI marketing platform that runs the full campaign pipeline automatically.",
    heroImage: "/product-media/ai-marketing-automation-image.jpeg",
    heroVideo: "/product-media/ai-marketing-automation-video.mp4",
  },
  {
    slug: "procurement-inventory",
    title: "Procurement & Inventory Management Modules",
    category: "CRM & Operations",
    shortExplanation:
      "A set of procurement and inventory modules that plug directly into a business's existing CRM, giving teams a unified view of stock levels, purchasing, and vendor activity alongside their customer and sales data — without needing a separate system.",
    highlights: [
      "Unified stock visibility: inventory levels stay connected to sales and customer activity within the same CRM environment.",
      "Streamlined procurement: purchase requests, vendor tracking, and reordering flow through a single, connected module.",
      "Modular integration: designed to extend an existing CRM rather than replace it, minimizing disruption during rollout.",
    ],
    caseStudy: {
      clientProfile:
        "A wholesale distribution company, a medium-sized business managing inventory across multiple product lines and vendors.",
      challenge:
        "The client's procurement and inventory tracking lived entirely outside their CRM, in separate spreadsheets disconnected from sales and customer data. This made it difficult to forecast reordering needs or understand which products were driving revenue versus sitting in the warehouse.",
      solution:
        "We integrated Procurement & Inventory modules directly into the client's existing CRM, connecting stock levels and vendor purchasing to live sales data, so the team could act on one unified source of truth.",
      results:
        "The client significantly reduced instances of stockouts and overstocking, shortened the time needed to process reorders, and gained clearer visibility into which vendors and products were most profitable.",
    },
    metaTitle: "Procurement & Inventory Modules — CRM-Native Stock Management | Scale 99",
    metaDescription:
      "Add procurement and inventory management directly into your existing CRM for unified stock, vendor, and sales visibility.",
    heroImage: "/product-media/procurement-inventory-image.jpeg",
    heroVideo: "/product-media/procurement-inventory-video.mp4",
  },
  {
    slug: "clinic-crm",
    title: "Clinic CRM",
    category: "Healthcare",
    shortExplanation:
      "Clinic CRM is a customer relationship platform purpose-built for clinics — designed around patient scheduling, follow-ups, and communication rather than generic sales pipelines, helping healthcare practices run more organized, patient-centered operations.",
    highlights: [
      "Patient-centric scheduling: appointment booking and follow-ups built around patient history rather than generic sales stages.",
      "Automated follow-up reminders: reduces missed appointments and improves recurring patient retention.",
      "Multi-branch support: designed to scale across multiple clinic locations under one account.",
    ],
    caseStudy: {
      clientProfile:
        "A multi-branch dental clinic group, a small-to-medium healthcare business operating several locations.",
      challenge:
        "The client was relying on front-desk staff at each branch to manually track appointments and follow-ups, resulting in inconsistent patient communication, missed recall appointments, and no centralized view of patient activity across branches.",
      solution:
        "We deployed Clinic CRM across all branches, centralizing patient records and scheduling, and enabling automated recall and follow-up reminders so no patient touchpoint depended on a single staff member remembering to make a call.",
      results:
        "The client saw a measurable drop in missed appointments, improved patient recall rates for routine check-ups, and gained a consolidated view of patient activity across every branch for the first time.",
    },
    metaTitle: "Clinic CRM — Patient Scheduling & Follow-Up Platform | Scale 99",
    metaDescription:
      "Clinic CRM centralizes patient scheduling and follow-ups across branches, cutting missed appointments for healthcare practices.",
    heroImage: "/product-media/clinic-crm-image.jpeg",
    heroVideo: "/product-media/clinic-crm-video.mp4",
  },
  {
    slug: "finishing-contracting-ai",
    title: "Finishing Contractor AI Platform",
    category: "Construction",
    shortExplanation:
      "A complete AI platform built for the full lifecycle of finishing and interior contracting work — from contract review and risk-flagging to project timelines and automated client notifications — designed to bring structure and oversight to a traditionally fragmented process.",
    highlights: [
      "AI-powered contract review: automatically reviews contracts and surfaces special warnings and risk flags before they become costly problems.",
      "Automated project timelines: builds and maintains project timelines, notifying clients and teams automatically as milestones approach or shift.",
      "End-to-end process coverage: manages the finishing contracting workflow from agreement through delivery in a single platform.",
    ],
    caseStudy: {
      clientProfile:
        "An interior finishing and contracting company, a medium-sized business handling multiple concurrent residential and commercial projects.",
      challenge:
        "The client was managing contracts, timelines, and client notifications manually across separate tools, which led to missed contractual risks, timeline slippage going unnoticed until it became a client complaint, and inconsistent communication across active projects.",
      solution:
        "We implemented the Finishing Contractor AI Platform to automatically review incoming contracts and flag risk clauses, generate and maintain project timelines per job, and automatically notify clients and internal teams of key milestones and changes.",
      results:
        "The client caught contractual risks earlier and more consistently, reduced unnoticed timeline slippage across active projects, and improved client satisfaction through proactive, automated status updates instead of reactive check-ins.",
    },
    metaTitle: "Finishing Contractor AI Platform | Scale 99",
    heroImage: "/product-media/finishing-contracting-ai-image.jpeg",
    heroVideo: "/product-media/finishing-contracting-ai-video.mp4",
    metaDescription:
      "AI-powered contract review, risk flagging, and automated timelines for finishing and interior contracting companies.",
  },
  {
    slug: "stereotactic-planning",
    title: "Stereotactic Surgical Planning Software",
    category: "MedTech",
    shortExplanation:
      "A specialized planning and visualization software built to accompany a newly developed stereotactic neurosurgical hardware device. It handles MRI and CT scan registration and viewing, hardware-specific 3D geometry, and full trajectory planning — giving surgical teams a precise, hardware-matched planning environment.",
    highlights: [
      "Hardware-matched geometry: a complete geometry dictionary built specifically for the companion hardware, ensuring planning precision matches the physical device.",
      "Advanced scan visualization: MRI and CT scan registration with 3D viewing of the hardware overlaid on scans, alongside a 3D-reconstructed brain model.",
      "Full surgical planning toolkit: includes ACPC referencing, trajectory planning, probe sizing, and reference point management to support precise procedure planning.",
    ],
    caseStudy: {
      clientProfile:
        "A specialized medical device manufacturer, an early-stage medtech company that had developed a new stereotactic neurosurgical hardware device but lacked companion planning software.",
      challenge:
        "The client had built innovative stereotactic hardware but had no software counterpart to let surgical teams register patient scans, plan trajectories, and visualize the device in relation to patient anatomy — a gap preventing the hardware from being clinically usable.",
      solution:
        "We built a dedicated planning software from the ground up around the client's exact hardware specifications, including a custom geometry dictionary, MRI/CT registration and 3D visualization, and a full trajectory-planning toolkit covering ACPC referencing, probe sizing, and reference points.",
      results:
        "The software gave the client a clinically usable, hardware-matched planning system, turning their standalone device into a complete, deployable surgical solution and enabling them to move forward with clinical adoption of the hardware.",
    },
    metaTitle: "Stereotactic Surgical Planning Software | Scale 99",
    metaDescription:
      "Hardware-matched stereotactic planning software with MRI/CT registration, 3D visualization, and full trajectory planning.",
    heroImage: "/product-media/stereotactic-planning-image.jpeg",
    heroVideo: "/product-media/stereotactic-planning-video.mp4",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
