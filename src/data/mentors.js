/**
 * Mentors data
 *
 * To add a mentor, copy the object below and fill in the details.
 * Submit a PR with your changes — no coding knowledge required!
 *
 * Fields:
 *   initials   - 2 letters shown in the avatar
 *   name       - Full name
 *   role       - Job title and company (e.g. "ML Engineer · Google")
 *   advice     - One piece of advice for younger girls (keep it under 2 sentences)
 *   linkedin   - Full LinkedIn profile URL
 *   avatarColor - One of: "purple", "teal", "amber", "coral"
 */

export const mentors = [
  {
    id: 1,
    initials: 'AP',
    name: 'Ananya Pillai',
    role: 'ML Engineer · Google DeepMind',
    advice: 'I started with a free Coursera course in class 12. You don\'t need to know everything — you just need to start.',
    linkedin: 'https://linkedin.com',
    avatarColor: 'purple',
  },
  {
    id: 2,
    initials: 'RS',
    name: 'Riya Sharma',
    role: 'AI Researcher · IIT Delhi',
    advice: 'The gender gap in AI research is real — and you closing it is the most important thing that can happen for the field.',
    linkedin: 'https://linkedin.com',
    avatarColor: 'violet',
  },
  {
    id: 3,
    initials: 'NK',
    name: 'Neha Krishnan',
    role: 'Founder · AI Startup, Bengaluru',
    advice: 'Build something. Anything. Even if it breaks. That\'s how you actually learn — not by watching more tutorials.',
    linkedin: 'https://linkedin.com',
    avatarColor: 'teal',
  },
  {
    id: 4,
    initials: 'PM',
    name: 'Priya Mehta',
    role: 'Data Scientist · Flipkart',
    advice: 'I was the only girl in my CS class. You won\'t be. Because of communities like this one.',
    linkedin: 'https://linkedin.com',
    avatarColor: 'amber',
  },
]

export const avatarStyles = {
  purple: { background: 'linear-gradient(135deg, #7B5CF0, #A78BFA)' },
  violet: { background: 'linear-gradient(135deg, #6344d4, #7B5CF0)' },
  teal:   { background: 'linear-gradient(135deg, #00C9A7, #34D399)' },
  amber:  { background: 'linear-gradient(135deg, #F5A623, #FBBF24)' },
}
