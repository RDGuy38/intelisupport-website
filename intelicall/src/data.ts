export const navLinks = [
  { label: 'Product', href: '#features' },
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const voices = [
  { name: 'Sarah', tagline: 'Warm and easy to follow — sounds like your best front-desk hire picking up on the first ring.', accent: 'Canadian English', color: 'from-rose-400 to-pink-500' },
  { name: 'Eric', tagline: 'Calm, steady, and unrushed — built for late-night, overflow, and emergency calls.', accent: 'American English', color: 'from-slate-500 to-slate-700' },
  { name: 'Nora', tagline: 'Bright and precise — makes booking and intake feel quick and effortless for callers.', accent: 'Canadian English', color: 'from-amber-400 to-orange-500' },
  { name: 'Marcus', tagline: 'Composed and credible — keeps professional calls moving without sounding scripted.', accent: 'British English', color: 'from-primary-500 to-accent-500' },
];

export const demoConversation = [
  { speaker: 'ai', text: "Maple Plumbing, this is Avery. How can I help?" },
  { speaker: 'caller', text: "Hi — my kitchen sink is backed up. Can someone come out today?" },
  { speaker: 'ai', text: "Sorry to hear that. I can get a tech out today. Can I grab your name and the service address?" },
  { speaker: 'caller', text: "Jordan Lee, 412 Maple Ave in Mississauga." },
  { speaker: 'ai', text: "Thanks Jordan. I have a 2:00 PM or a 4:30 PM today — which works better?" },
  { speaker: 'caller', text: "2 o'clock please." },
  { speaker: 'ai', text: "Booked. You'll get a text confirmation in a moment with your tech's name and an arrival window. Anything else?" },
  { speaker: 'caller', text: "Nope, that's it. Thanks!" },
];

export const features = [
  { icon: 'PhoneCall', title: 'Every call answered — in your brand voice, 24/7', description: 'Natural conversational AI with your greeting, tone, and escalation rules. Never sends a caller to voicemail.' },
  { icon: 'CalendarCheck', title: 'Books appointments live', description: 'Two-way sync with Google, Outlook, Jobber, Calendly, Acuity, Square — checks real availability mid-call.' },
  { icon: 'MessageSquare', title: 'Texts callers back', description: 'Sends a recap, booking link, or quote by SMS the moment the call ends. Conversation continues by text.' },
  { icon: 'Filter', title: 'Qualifies leads with your script', description: 'Routes hot leads, filters spam, captures intent — all summarized in the dashboard.' },
  { icon: 'ShieldCheck', title: 'Enterprise-grade privacy', description: 'SOC 2 controls, HIPAA-ready workflows, full call recording and transcript audit trail.' },
  { icon: 'Leaf', title: 'Built and hosted in Canada', description: 'Your data stays on Canadian soil. PIPEDA-aligned, with bilingual EN/FR support out of the box.' },
];

export const integrations = [
  { name: 'Google Calendar', icon: 'Calendar', category: 'Calendars', desc: 'Bookings land directly on your calendar — no double-entry, no missed slots. Setup in under 2 minutes via OAuth.' },
  { name: 'Outlook', icon: 'Calendar', category: 'Calendars', desc: 'Seamless two-way sync with Outlook calendars for real-time availability.' },
  { name: 'Jobber', icon: 'Wrench', category: 'CRM', desc: 'Every caller becomes a contact and deal — with full transcript and lead fields attached.' },
  { name: 'HubSpot', icon: 'Users', category: 'CRM', desc: 'One-click OAuth. Pick the pipeline and watch leads flow in automatically.' },
  { name: 'Calendly', icon: 'CalendarClock', category: 'Calendars', desc: 'Real-time slot checking against your Calendly availability.' },
  { name: 'Square', icon: 'CreditCard', category: 'Telephony', desc: 'Keep your existing number. We just answer it — instantly, 24/7.' },
];

export const stats = [
  { value: '27%', label: 'Of small-business calls go unanswered' },
  { value: '100%', label: 'Missed calls — every single inquiry answered instantly' },
  { value: '3×', label: 'More booked appointments in 30 days' },
  { value: '24/7', label: 'Always-on coverage, even holidays' },
];

export const leadCard = {
  name: 'Daniel Ortega',
  issue: 'Furnace diagnostic — banging noise',
  address: '118 Birch Lane, Mississauga',
  type: 'New customer',
  priority: 'HIGH · no heat',
  fee: 'Accepted $129 diagnostic fee',
  slot: 'Tomorrow 9–11 AM',
};

export const pricingPlans = [
  { name: 'Starter', monthly: 29, annual: 24, minutes: '200 included minutes', features: ['1 AI voice agent', '1 phone number', 'Google & Outlook calendar sync', 'SMS follow-up to callers', 'Call recording & transcripts', 'Email support'], badge: null, cta: 'Start free trial', highlight: false },
  { name: 'Professional', monthly: 79, annual: 66, minutes: '500 included minutes', features: ['Everything in Starter', '3 AI voice agents', '2 phone numbers', 'CRM integrations (Jobber, HubSpot)', 'Lead qualification & routing', 'Custom greeting & script', 'Priority support'], badge: 'Most Popular', cta: 'Start free trial', highlight: true },
  { name: 'Enterprise', monthly: 199, annual: 166, minutes: '1500 included minutes', features: ['Everything in Professional', 'Unlimited AI voice agents', '5 phone numbers', 'Custom voice cloning', 'API access & webhooks', 'Dedicated account manager', '24/7 phone support'], badge: null, cta: 'Contact sales', highlight: false },
];

export const addons = [
  { name: 'Call Routing (IVR)', price: '$15/mo', desc: 'Build multi-level phone menus, route callers by keypad or voice, and assign different menus to different numbers.' },
  { name: 'Extra phone numbers', price: '$5/mo each', desc: 'Add local or toll-free numbers to any plan. Each number includes its own call routing and agent settings.' },
  { name: 'More add-ons coming', price: '—', desc: 'We are building more optional upgrades that you can toggle on from your dashboard as they launch.' },
];

export const comparisonData = [
  { label: 'Full-time receptionist', cost: '$40K–50K/yr', desc: '40 hrs/week. Goes home at 6 PM. Sick days, vacation, training — one phone at a time.', highlight: false },
  { label: 'Human answering service', cost: '$1–$2/min', desc: 'Pay for every ring, voicemail, on-hold second. Generic scripts, no booking, no CRM push.', highlight: false },
  { label: 'InteliCall', cost: 'from $29/mo', desc: 'Books appointments live. Texts confirmations. 24/7, 365. Pays for itself with 1 extra job.', highlight: true },
];

export const meteredRates = [
  { service: 'Overage talk time (Starter)', rate: '$0.15/min', note: 'Billed per second after included minutes' },
  { service: 'Overage talk time (Professional)', rate: '$0.12/min', note: 'Billed per second after included minutes' },
  { service: 'Overage talk time (Enterprise)', rate: '$0.10/min', note: 'Billed per second after included minutes' },
  { service: 'Additional local number', rate: '$5/mo', note: 'Per number, includes routing' },
  { service: 'Toll-free number', rate: '$10/mo', note: '1-800/833/844/855/866/877/888' },
];

export const faqCategories = [
  {
    category: 'Voice & call experience',
    items: [
      { q: 'Does it really sound like a human?', a: 'Yes. We use the latest neural voice models — natural pacing, pauses, backchannel cues like "mm-hm" and "got it". Most callers don\'t realize they\'re talking to AI until you tell them. You can also choose to disclose if you prefer.' },
      { q: 'Can I pick the voice?', a: 'Yes. Pick from dozens of male and female voices across Canadian English, American English, British English, Québécois French, and Parisian French. You can preview each voice in the dashboard before going live.' },
      { q: 'Can I customize the greeting and script?', a: 'Absolutely. The greeting, hold phrases, and closing line are fully customizable. You can also load brand-specific terminology and pronunciations so product names and locations are spoken correctly.' },
      { q: 'How does it handle bad phone connections?', a: 'We use noise-suppression and barge-in detection trained on real call-center audio. If a line is too poor to understand, the AI politely asks the caller to repeat or offers to text them instead.' },
      { q: 'Can callers interrupt the AI mid-sentence?', a: 'The AI stops talking immediately, listens, and responds to what the caller actually said — just like a good human receptionist. No robotic "please wait until I\'m done speaking" loops.' },
    ],
  },
  {
    category: 'Setup & phone numbers',
    items: [
      { q: 'How long does setup take?', a: 'About 5 minutes. Paste your website URL, pick a voice, connect your calendar, and forward your number. Most customers take their first AI-answered call the same day.' },
      { q: 'Do I need a new phone number?', a: 'No. Forward your existing number conditionally (busy/no-answer/after-hours) or all calls. You can also get a new local or toll-free number from us.' },
      { q: 'Can I port my existing number?', a: 'Yes. We provision local numbers across every Canadian area code, plus toll-free 1-800/833/844/855/866/877/888 numbers. Porting your existing number is free and usually takes 7–10 business days.' },
      { q: 'Does it work with my existing phone system?', a: 'Yes. InteliCall works as an overlay — forward calls to us on busy, no-answer, or after-hours, and we pick up instantly. No hardware changes needed.' },
    ],
  },
  {
    category: 'Integrations & workflow',
    items: [
      { q: 'Which calendars does it sync with?', a: 'Google Calendar, Outlook (Microsoft 365), Jobber, Calendly, Acuity, and Square — with two-way sync. Bookings appear instantly; the AI checks real availability mid-call.' },
      { q: 'Does it push leads to my CRM?', a: 'Yes. Every caller becomes a contact and deal in HubSpot, Jobber, or your connected CRM — with the full transcript, lead score, and captured fields attached automatically.' },
      { q: 'Can it transfer calls to a real person?', a: 'Yes. You set the escalation rules — specific keywords, call types, or caller requests trigger a warm transfer to any number you choose. The AI stays on the line until the human picks up.' },
    ],
  },
  {
    category: 'Privacy & security',
    items: [
      { q: 'Is my data safe? Where is it stored?', a: 'All call audio, transcripts, and customer data are stored on Canadian servers. We are PIPEDA-aligned, SOC 2 controls are in progress, and HIPAA-ready workflows are available for healthcare clients.' },
      { q: 'Who owns the call recordings?', a: 'You do. All recordings and transcripts are accessible from your dashboard and can be exported at any time. You control retention policies and can delete recordings on demand.' },
      { q: 'Is it HIPAA-ready?', a: 'Yes. We offer HIPAA-ready workflows for healthcare and dental practices. Contact us to enable BAA (Business Associate Agreement) on your account.' },
    ],
  },
  {
    category: 'Pricing & billing',
    items: [
      { q: 'How does the free trial work?', a: 'Free for 5 calls or 10 minutes — no credit card required. You get full access to all features. Cancel anytime, no questions asked.' },
      { q: 'What counts as an "included minute"?', a: 'Only talk time counts. Ringing, on-hold, and voicemail don\'t. We bill per second, so a 42-second call costs 42 seconds — not a full minute.' },
      { q: 'What happens if I go over my included minutes?', a: 'Overage is metered at transparent per-minute rates (see the table above). You\'ll get an email alert at 80% and 100% of your plan limit.' },
      { q: 'Can I switch plans or cancel anytime?', a: 'Yes. Upgrade, downgrade, or cancel from your dashboard at any time. Changes take effect at the next billing cycle — no penalties, no lock-in.' },
      { q: 'Do you charge for additional phone numbers?', a: 'Local numbers are $5/mo each. Toll-free numbers are $10/mo each. Each number includes its own call routing and agent settings.' },
    ],
  },
];

export const footerSections = [
  { title: 'Product', links: ['Features', 'Pricing', 'ROI Calculator', 'Voice Agents', 'Integrations'] },
  { title: 'Use cases', links: ['Plumbing', 'HVAC', 'Electrical', 'Roofing', 'General Contractors'] },
  { title: 'Account', links: ['Sign up', 'Log in', 'Free trial', 'Dashboard'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'PIPEDA', 'HIPAA'] },
];
