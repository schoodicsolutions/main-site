import type { IconName } from '$lib/Icon.svelte';

export type ServiceSlug =
	'ai-automation' | 'data-ml' | 'cloud' | 'devops' | 'workflows' | 'software';

export interface Item {
	title: string;
	text: string;
}

export interface Faq {
	question: string;
	answer: string;
}

export interface Service {
	slug: ServiceSlug;
	name: string;
	icon: IconName;
	/** One or two lines for cards */
	summary: string;
	/** <title> (without the " · Schoodic" suffix) — lead with the search phrase */
	seoTitle: string;
	/** Meta description, ~150 characters */
	seoDescription: string;
	/** H1 on the service page */
	headline: string;
	intro: string;
	capabilities: Item[];
	engagements: Item[];
	tools: string[];
	faqs: Faq[];
}

/**
 * Single source of truth for service pillars. Drives the home grid, service pages,
 * footer links, sitemap, and structured data.
 */
export const services: Service[] = [
	{
		slug: 'ai-automation',
		icon: 'sparkles',
		name: 'AI & Automation',
		summary:
			'Put language models to work on the busywork: assistants, document processing, and agents that plug into the tools you already use.',
		seoTitle: 'AI Consulting & Automation in Maine',
		seoDescription:
			'Practical AI for Maine businesses: custom assistants, document processing, and AI agents connected to your existing tools. Based in Washington County.',
		headline: 'Practical AI that does real work for your business.',
		intro:
			'Large language models are finally good enough to take on the repetitive reading, writing, and sorting that eats up your team’s week. We help you find the tasks where AI pays off, build it into the tools you already use, and put guardrails around it so it stays accurate and private.',
		capabilities: [
			{
				title: 'AI assistants & chat',
				text: 'Assistants that answer questions from your own documents, policies, and product information, for staff or for customers.',
			},
			{
				title: 'Document processing',
				text: 'Pull structured data out of invoices, intake forms, contracts, and emails, then route it where it needs to go.',
			},
			{
				title: 'AI agents',
				text: 'Multi-step automations that can look things up, fill in systems, and draft responses, with a human approving the important steps.',
			},
			{
				title: 'Retrieval over company knowledge (RAG)',
				text: 'Search that understands meaning, not just keywords, across your shared drives, wikis, and archives.',
			},
			{
				title: 'Guardrails & evaluation',
				text: 'Testing, monitoring, and access controls so AI output stays accurate and sensitive data stays where it belongs.',
			},
		],
		engagements: [
			{
				title: 'AI readiness workshop',
				text: 'A short, focused engagement to map your processes, rank AI opportunities by payoff, and leave you with a concrete plan.',
			},
			{
				title: 'Pilot in weeks, not months',
				text: 'Take one high-value workflow, such as invoice entry or customer email triage, and get a working AI version in front of your team.',
			},
			{
				title: 'Production rollout',
				text: 'Harden a successful pilot with monitoring, cost controls, and training so it becomes part of how you work.',
			},
		],
		tools: [
			'Claude',
			'OpenAI',
			'AWS Bedrock',
			'Azure OpenAI',
			'LangGraph',
			'pgvector',
			'Model Context Protocol',
		],
		faqs: [
			{
				question: 'Is AI actually useful for a small business?',
				answer:
					'Often more than for large ones. Small teams lose a bigger share of their week to data entry, email, and paperwork, and that is exactly the kind of work today’s AI handles well. We start with one workflow and measure the time saved before expanding.',
			},
			{
				question: 'Will our data be used to train AI models?',
				answer:
					'No. We use business-grade AI services that contractually do not train on your data, and when privacy requirements call for it we can run models inside your own cloud account.',
			},
			{
				question: 'What does an AI project cost?',
				answer:
					'It depends on scope, but most engagements start with a small, fixed-price pilot so you can see results before committing to more. We’ll give you a clear estimate after an initial conversation.',
			},
		],
	},
	{
		slug: 'data-ml',
		icon: 'database',
		name: 'Data & Machine Learning',
		summary:
			'Turn scattered spreadsheets into reliable pipelines, clear dashboards, and models that forecast what comes next.',
		seoTitle: 'Data & Machine Learning Consulting in Maine',
		seoDescription:
			'Data pipelines, dashboards, and machine learning models for Maine organizations. Turn spreadsheets and siloed systems into decisions you can trust.',
		headline: 'Turn the data you already have into decisions you can trust.',
		intro:
			'Most organizations have more data than they think. It is just scattered across spreadsheets, point-of-sale systems, and accounting software. We bring it together, clean it up, and turn it into dashboards and forecasts that people actually use.',
		capabilities: [
			{
				title: 'Data pipelines',
				text: 'Automated, scheduled syncs from your business systems into one reliable source of truth.',
			},
			{
				title: 'Data warehousing',
				text: 'Right-sized warehouses on Postgres, BigQuery, or Snowflake, modeled so reports agree with each other.',
			},
			{
				title: 'Dashboards & reporting',
				text: 'Clear, self-serve dashboards for owners, managers, and boards, with numbers you don’t have to double-check.',
			},
			{
				title: 'Forecasting & predictive models',
				text: 'Demand, staffing, and inventory forecasts built from your own history, with honest error bars.',
			},
			{
				title: 'Data quality & governance',
				text: 'Validation checks, access controls, and documentation so your data stays trustworthy as it grows.',
			},
		],
		engagements: [
			{
				title: 'Single source of truth',
				text: 'Connect your sales, accounting, and operations systems so everyone works from the same numbers.',
			},
			{
				title: 'Seasonal demand forecasting',
				text: 'Plan staffing and inventory for the busy season using past sales, bookings, and weather data.',
			},
			{
				title: 'Board & grant reporting',
				text: 'Automate the reports funders and boards ask for every quarter instead of rebuilding them by hand.',
			},
		],
		tools: [
			'Python',
			'SQL',
			'dbt',
			'PostgreSQL',
			'BigQuery',
			'Snowflake',
			'scikit-learn',
			'Metabase',
			'Power BI',
		],
		faqs: [
			{
				question: 'Do we need a lot of data for machine learning?',
				answer:
					'Less than you might expect. A few years of sales or operational history is often enough for useful forecasts, and simple, well-built models frequently beat complicated ones on small datasets.',
			},
			{
				question: 'Can you work with our existing spreadsheets?',
				answer:
					'Yes. Spreadsheets are usually where we start. We automate what they do today, then move the parts that need it into a proper database without disrupting your team.',
			},
			{
				question: 'Which dashboard tool should we use?',
				answer:
					'Whichever fits your budget and the tools you already pay for. We work with Power BI, Looker Studio, Metabase, and others, and we’ll recommend the simplest option that meets your needs.',
			},
		],
	},
	{
		slug: 'cloud',
		icon: 'cloud',
		name: 'Cloud Infrastructure',
		summary:
			'Secure, right-sized infrastructure on AWS, Azure, or GCP: designed, migrated, and managed so you never think about servers.',
		seoTitle: 'Cloud Consulting & Managed Hosting in Maine',
		seoDescription:
			'AWS, Azure, and Google Cloud architecture, migration, and managed hosting for Maine businesses. Secure, right-sized, and cost-optimized.',
		headline: 'Cloud infrastructure that’s secure, affordable, and someone else’s problem.',
		intro:
			'Whether you are moving off an aging server in the back office or untangling a cloud bill that keeps growing, we design infrastructure that fits your actual needs, migrate you with minimal downtime, and keep it patched, backed up, and monitored.',
		capabilities: [
			{
				title: 'Cloud architecture',
				text: 'Designs on AWS, Azure, or Google Cloud that balance cost, security, and reliability for your workload.',
			},
			{
				title: 'Migrations',
				text: 'Move on-premise servers, file shares, and legacy apps to the cloud with a tested plan and a rollback path.',
			},
			{
				title: 'Infrastructure as code',
				text: 'Everything defined in Terraform or similar, so environments are reproducible, reviewable, and documented.',
			},
			{
				title: 'Cost optimization',
				text: 'Find and remove waste: idle resources, oversized instances, and missed savings plans. The savings often pay for the review.',
			},
			{
				title: 'Managed hosting',
				text: 'We run it for you: updates, security patches, backups, uptime monitoring, and a real person to call.',
			},
		],
		engagements: [
			{
				title: 'Server-closet retirement',
				text: 'Replace the aging on-site server with secure cloud storage and apps your team can reach from anywhere.',
			},
			{
				title: 'Cloud cost review',
				text: 'A line-by-line review of your cloud bill with a prioritized list of savings and the work to capture them.',
			},
			{
				title: 'Website & app hosting',
				text: 'Fast, secure hosting for your sites and applications, fully managed, with backups and monitoring included.',
			},
		],
		tools: [
			'AWS',
			'Microsoft Azure',
			'Google Cloud',
			'Terraform',
			'Cloudflare',
			'Netlify',
			'Linux',
		],
		faqs: [
			{
				question: 'Which cloud provider is best for us?',
				answer:
					'It depends on what you already use. Businesses on Microsoft 365 often fit naturally on Azure, while AWS and Google Cloud have strengths for custom applications. We recommend based on your tools, team, and budget, not on our preferences.',
			},
			{
				question: 'Is the cloud more expensive than our own server?',
				answer:
					'Not when it’s sized correctly. Once you count hardware replacement, power, backups, and the time spent maintaining it, a well-designed cloud setup is usually cheaper and far more reliable.',
			},
			{
				question: 'Do you offer ongoing managed hosting?',
				answer:
					'Yes. We manage hosting for websites, applications, and infrastructure, including updates, backups, security patching, and monitoring, so you have one local point of contact.',
			},
		],
	},
	{
		slug: 'devops',
		icon: 'cycle',
		name: 'DevOps & Platform',
		summary:
			'Automated builds, deployments, monitoring, and backups so your software ships safely and stays up.',
		seoTitle: 'DevOps Consulting & CI/CD in Maine',
		seoDescription:
			'DevOps and platform engineering for Maine teams: CI/CD pipelines, containers, monitoring, backups, and security so your software ships safely.',
		headline: 'Ship faster, sleep better.',
		intro:
			'If deploying your software involves a checklist, a specific person, or crossed fingers, there is a better way. We automate how your code is tested, released, and monitored so changes are routine, outages are rare, and recovery is fast.',
		capabilities: [
			{
				title: 'CI/CD pipelines',
				text: 'Automated testing and deployment on every change, using GitHub Actions, GitLab CI, or your platform of choice.',
			},
			{
				title: 'Containers & orchestration',
				text: 'Docker, ECS, and Kubernetes where it makes sense, and simpler options where it doesn’t.',
			},
			{
				title: 'Monitoring & alerting',
				text: 'Dashboards, logs, and alerts that tell you something is wrong before your customers do.',
			},
			{
				title: 'Backups & disaster recovery',
				text: 'Automated, tested backups and a written recovery plan, so a bad day doesn’t become a bad month.',
			},
			{
				title: 'Security & compliance basics',
				text: 'Secrets management, least-privilege access, dependency scanning, and audit trails built into the workflow.',
			},
		],
		engagements: [
			{
				title: 'Deployment automation',
				text: 'Take a manual, error-prone release process and turn it into a one-click (or zero-click) pipeline.',
			},
			{
				title: 'Reliability review',
				text: 'Assess how your systems fail today and fix the weak points: single servers, missing backups, silent errors.',
			},
			{
				title: 'Fractional platform team',
				text: 'Ongoing DevOps support for teams that need the expertise but not a full-time hire.',
			},
		],
		tools: [
			'GitHub Actions',
			'GitLab CI',
			'Docker',
			'Kubernetes',
			'Terraform',
			'Grafana',
			'Prometheus',
			'Sentry',
		],
		faqs: [
			{
				question: 'We only have one or two developers. Do we need DevOps?',
				answer:
					'Small teams benefit the most. Automating testing and deployment means your developers spend their time building instead of babysitting releases, and you aren’t dependent on one person’s memory.',
			},
			{
				question: 'Do we need Kubernetes?',
				answer:
					'Probably not. Kubernetes is powerful but complex, and many workloads run better on simpler managed services. We pick the least complicated setup that meets your reliability needs.',
			},
			{
				question: 'Can you work alongside our existing developers or vendor?',
				answer:
					'Yes. We regularly work with in-house teams and outside vendors, improving the pipeline and infrastructure around the code they write.',
			},
		],
	},
	{
		slug: 'workflows',
		icon: 'workflow',
		name: 'Business Workflows',
		summary:
			'Connect your CRM, accounting, scheduling, and email so information flows on its own instead of by copy and paste.',
		seoTitle: 'Business Process Automation in Maine',
		seoDescription:
			'Automate business workflows and connect your CRM, accounting, scheduling, and email. Maine-based integration and process automation services.',
		headline: 'Stop copying and pasting between systems.',
		intro:
			'Every business has processes held together by spreadsheets, email threads, and someone re-typing the same information into three different programs. We map how work actually flows, then connect your tools so data moves on its own and nothing falls through the cracks.',
		capabilities: [
			{
				title: 'Process mapping',
				text: 'Document how work really moves through your business today and find the steps worth automating.',
			},
			{
				title: 'System integrations',
				text: 'Connect QuickBooks, CRMs, scheduling, e-commerce, and email so a change in one updates the rest.',
			},
			{
				title: 'Workflow automation',
				text: 'Approvals, reminders, follow-ups, and handoffs that happen automatically, with a clear audit trail.',
			},
			{
				title: 'Internal tools',
				text: 'Simple, purpose-built apps and portals that replace the spreadsheet everyone is afraid to touch.',
			},
			{
				title: 'Forms & intake',
				text: 'Online forms that validate input and feed directly into the right system instead of an inbox.',
			},
		],
		engagements: [
			{
				title: 'Quote-to-invoice automation',
				text: 'Connect quoting, scheduling, and invoicing so jobs flow from first call to final payment without re-entry.',
			},
			{
				title: 'Customer intake & onboarding',
				text: 'Replace paper and PDF forms with online intake that routes information and triggers follow-ups.',
			},
			{
				title: 'Spreadsheet replacement',
				text: 'Turn the critical spreadsheet at the center of your operation into a reliable, multi-user tool.',
			},
		],
		tools: [
			'QuickBooks',
			'Microsoft 365',
			'Google Workspace',
			'HubSpot',
			'Zapier',
			'Make',
			'n8n',
			'Airtable',
		],
		faqs: [
			{
				question: 'Can’t we just use Zapier?',
				answer:
					'Sometimes, yes, and we’ll tell you when that’s the right answer. When workflows get complex, high-volume, or business-critical, a custom integration is often more reliable and cheaper over time.',
			},
			{
				question: 'Do we have to replace our current software?',
				answer:
					'Usually not. Most of our work connects the tools you already use and like. We only recommend replacing something when it’s genuinely holding you back.',
			},
			{
				question: 'How do we know what to automate first?',
				answer:
					'We start by mapping your processes and estimating the time each step takes. The best first project is usually something frequent, tedious, and error-prone.',
			},
		],
	},
	{
		slug: 'software',
		icon: 'code',
		name: 'Custom Software & Web',
		summary:
			'Fast, modern websites and web applications built around how your business actually works.',
		seoTitle: 'Custom Software & Web Development in Maine',
		seoDescription:
			'Custom web applications, websites, and APIs built in Washington County, Maine. Fast, accessible, mobile-friendly software designed around your business.',
		headline: 'Software built around how your business actually works.',
		intro:
			'Off-the-shelf software gets you most of the way. When the last mile matters, we design and build web applications, customer portals, and websites that fit your processes, load fast on any device, and are easy to maintain long after launch.',
		capabilities: [
			{
				title: 'Web applications',
				text: 'Full-stack applications, from customer portals to internal operations tools, built with modern, well-supported frameworks.',
			},
			{
				title: 'Websites',
				text: 'Fast, accessible, search-friendly websites that look great on phones and are easy to update.',
			},
			{
				title: 'APIs & integrations',
				text: 'Clean, documented APIs that let your systems, partners, and AI tools talk to each other.',
			},
			{
				title: 'UX & interface design',
				text: 'Interfaces designed around real users and real tasks, tested before they’re built.',
			},
			{
				title: 'Modernization',
				text: 'Rescue and update legacy applications without a risky big-bang rewrite.',
			},
		],
		engagements: [
			{
				title: 'Customer portal',
				text: 'Give customers a secure place to see orders, documents, invoices, and messages without calling the office.',
			},
			{
				title: 'Website rebuild',
				text: 'Replace a slow, hard-to-edit site with a fast, modern one that ranks well and converts visitors.',
			},
			{
				title: 'Legacy app modernization',
				text: 'Move an aging application to a modern stack step by step, keeping the business running throughout.',
			},
		],
		tools: ['TypeScript', 'SvelteKit', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS'],
		faqs: [
			{
				question: 'Should we build custom software or buy an existing product?',
				answer:
					'Buy when a product fits your process well. Build when your process is part of what makes you competitive, or when you’re paying for several products and gluing them together by hand. We’ll give you an honest recommendation either way.',
			},
			{
				question: 'Who owns the code?',
				answer:
					'You do. Code, accounts, and documentation belong to you, so you’re never locked in to working with us.',
			},
			{
				question: 'Do you maintain software after launch?',
				answer:
					'Yes. We offer ongoing support and hosting so your application stays secure, up to date, and improving.',
			},
		],
	},
];

export const serviceHref = (slug: ServiceSlug) => `/services/${slug}`;
