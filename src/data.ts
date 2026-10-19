export type Tone = 'y' | 'p' | 'b' | 'g'
export type Route = { id: string; label: string; file: string; nav?: boolean }
export type CaseStudy = {
  id: string
  file: string
  tone: Tone
  eyebrow: string
  title: string
  summary: string
  meta: string
  metrics: { value: string; label: string }[]
  issues: { tag: string; title: string; text: string }[]
  quote: string
  fixes: { title: string; body: string }[]
}
export const EMAIL = 'connectaetheria@gmail.com'
export const ROUTES: Route[] = [
  { id: 'home', label: 'Home', file: 'index.tsx', nav: true },
  { id: 'portfolio', label: 'Portfolio', file: 'portfolio.tsx', nav: true },
  { id: 'about', label: 'About', file: 'about.md', nav: true },
  { id: 'contact', label: 'Contact', file: 'contact.tsx', nav: true },
  { id: 'zara', label: 'Zara', file: 'zara-case-study.tsx' },
  { id: 'huffpost', label: 'HuffPost', file: 'huffpost-case-study.tsx' },
  { id: 'careers', label: 'Careers', file: 'careers.md' },
  { id: 'blog', label: 'Blog', file: 'blog.md' },
  { id: 'retreats', label: 'Retreats', file: 'retreats.md' },
]
export const SERVICES = ['Web Architecture', 'E-Commerce', 'SaaS MVPs', 'UI/UX Design', 'Brand Systems', 'Zero Templates']
export const METRICS = [
  { n: 100, suffix: '%', label: 'bespoke builds' },
  { n: 100, suffix: '%', label: 'code ownership' },
  { n: 3, suffix: 'x*', label: 'average client conversion gain' },
]
export const WORK = [
  { tag: 'brand-first', t: 'Brand websites', d: 'Identity-led sites that look like nobody else.' },
  { tag: 'saas', t: 'SaaS / MVPs', d: 'Product interfaces and first versions, shipped fast.' },
  { tag: 'commerce', t: 'E-commerce', d: 'Stores built around conversion, not templates.' },
]
export const TEAM = [
  { name: 'Alark', edu: 'BTech, Computer Engineering — SAKEC', url: 'https://www.linkedin.com/in/alark-mhatre-1551a9385/' },
  { name: 'Abishek', edu: 'Integrated Programme in Management — IIM BG', url: 'https://www.linkedin.com/in/abishek-neelakandan-a52b92352/' },
]
export const FAQ = [
  ['Do you use templates?', 'No. Every pixel and line of code is made for your brand, from first call to launch.'],
  ['How do projects run?', 'A streamlined process with a clear timeline.'],
  ['What do I own at handover?', 'The code, design files, and accounts. No lock-in.'],
  ["What's the tech stack?", 'React, TypeScript, and Tailwind CSS.'],
]
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'zara',
    file: 'case-study-zara.tsx',
    tone: 'p',
    eyebrow: 'Case study 01 · Unofficial concept redesign',
    title: 'Zara looks incredible. Try buying something.',
    summary: 'One of the best-looking fashion sites on the internet is also one of the most annoying to shop on. We looked at why it makes every click feel like a chore.',
    meta: 'By the two of us, front-end students building a portfolio · not affiliated with Zara',
    metrics: [
      { value: '3.8s', label: 'LCP in a third-party audit' },
      { value: '14+', label: 'subcategories under main menu' },
      { value: '0', label: 'breadcrumbs on the shop path' },
    ],
    issues: [
      { tag: 'High', title: 'Minimal to the point of invisible', text: 'Zara strips out the icons people expect. Reviewers noted that the magnifying glass and filter funnel get downplayed, which hurts discoverability: if people cannot see an action, they assume it does not exist.' },
      { tag: 'High', title: 'A menu that floats over everything', text: 'The category menu sits over image content without a stable background, making text hard to read and the shopping path harder to scan.' },
      { tag: 'Medium', title: 'Carousels you cannot control', text: 'Homepage sliders do not pause when you hover, and the controls disappear on smaller screens, which turns the banner into a race.' },
    ],
    quote: 'It’s not that Zara is ugly. It’s that it asks you to work for every click.',
    fixes: [
      { title: 'Make affordances obvious', body: 'Raise contrast around search, filters, and cart counts so users can immediately trust the actions already there.' },
      { title: 'Fix the menu system', body: 'Give the category rail a strong background and a clearer hierarchy so navigation feels stable instead of floating over product imagery.' },
      { title: 'Keep the aesthetic, improve the flow', body: 'Retain the minimal editorial look while adding breadcrumbs, search prominence, and better control over promotional sliders.' },
    ],
  },
  {
    id: 'huffpost',
    file: 'case-study-huffpost.tsx',
    tone: 'b',
    eyebrow: 'Case study 02 · Unofficial concept redesign',
    title: 'HuffPost makes you scroll past nothing',
    summary: 'A news site has one job on the first screen: show you the news. We looked at what HuffPost’s header area is spending that space on instead.',
    meta: 'By the two of us, front-end students building a portfolio · not affiliated with HuffPost',
    metrics: [
      { value: '1st screen', label: 'highest-value editorial space' },
      { value: 'Logo + nav', label: 'header stack competing with content' },
      { value: 'Ad slots', label: 'space often treated as premium inventory' },
    ],
    issues: [
      { tag: 'High', title: 'A tall header stack', text: 'Logo bar, edition selector, navigation, and generous padding all push the first story lower down the page before the reader sees anything useful.' },
      { tag: 'Likely', title: 'Space reserved for ads', text: 'A publisher can justify empty top slots as inventory. If that is true, the answer is not to delete the space, but to redesign around it more intelligently.' },
      { tag: 'Medium', title: 'Oversized lead headline', text: 'A giant splash story is a strong editorial choice, but it uses a lot of the first screen and leaves less room for discoverable top stories.' },
    ],
    quote: 'The goal isn’t an empty header. It’s a header that earns every pixel.',
    fixes: [
      { title: 'Compress the chrome', body: 'Trim the top stack so the first headline arrives faster without losing brand recognition or navigation.' },
      { title: 'Design around inventory', body: 'Preserve a strong ad slot while using the content strip below as the real hero of the homepage.' },
      { title: 'Lead with value', body: 'Feature a clear top story plus a quick stream of the next items so the first screen feels editorial, not padded.' },
    ],
  },
]

type Card = { tag: string; t: string; d: string }
export const PAGES: Record<string, { title: string; body: string; tone: Tone; cards?: Card[]; cta?: { label: string; href: string } }> = {
  portfolio: { title: 'Portfolio', tone: 'b', body: 'Our work spans brand-first websites, SaaS and product interfaces, and e-commerce. We are turning concept critiques into polished case-study pages.', cards: WORK, cta: { label: 'Discuss your project →', href: '#contact' } },
  zara: { title: 'Zara case study', tone: 'p', body: 'A mobile-first critique focused on discoverability, navigation clarity, and conversion friction.' },
  huffpost: { title: 'HuffPost case study', tone: 'b', body: 'An editorial homepage critique about reducing dead space above the fold and making the first screen earn its pixels.' },
  careers: { title: 'Careers', tone: 'y', body: "We're open to designers, engineers, and collaborators.", cta: { label: 'Get in touch', href: 'mailto:' + EMAIL } },
  blog: { title: 'Blog', tone: 'b', body: 'The first articles are in progress. Got a topic you want us to write about?', cta: { label: 'Suggest a topic →', href: 'mailto:' + EMAIL } },
  retreats: { title: 'Retreats', tone: 'g', body: 'A focused collaboration and creative retreat concept. Details are still taking shape.', cta: { label: 'Tell us you are interested →', href: '#contact' } },
}
