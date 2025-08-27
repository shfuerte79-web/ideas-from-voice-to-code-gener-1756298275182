import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Driven Game Development",
    "one_liner": "Create games by describing gameplay mechanics and character actions verbally.",
    "why_now": "The rise of voice assistants has made voice interaction mainstream.",
    "novel_mechanism": "Leverages natural language understanding to interpret game design requests.",
    "ai_stack": [
      "GPT",
      "Speech",
      "Agents"
    ],
    "edge_use_cases": [
      "Educational games for coding",
      "Interactive storytelling games"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command parsing",
        "Basic game mechanics generation",
        "Character dialogue generation"
      ],
      "tools": [
        "Unity",
        "Azure Speech Services",
        "Firebase"
      ],
      "data_bootstrap": [
        "Open game data",
        "Synthetic character dialogues"
      ],
      "risk": [
        "Limited voice recognition accuracy",
        "Complexity of game mechanics"
      ],
      "mitigation": [
        "Focus on simple game types",
        "Iterative testing with users"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Voice demo of game creation",
        "Share games created by users"
      ],
      "channels": [
        "Indie Game Dev Communities",
        "Twitch"
      ],
      "pricing": {
        "free": "Basic game creation tools",
        "pro": "$9.99/month for advanced features",
        "business": "$49.99/month for licensing and support"
      }
    },
    "moat": [
      "Unique voice interaction experience",
      "Community-generated content",
      "Partnerships with educational institutions"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 7
    },
    "total_score": 30,
    "reasoning": "Game development has traditionally been complex; this product simplifies it dramatically through voice, tapping into the growing gaming and voice tech markets."
  },
  {
    "title": "Voice-Activated IDE Plugin",
    "one_liner": "Turn voice commands into code snippets directly in IDEs.",
    "why_now": "Increased emphasis on developer productivity and remote work.",
    "novel_mechanism": "Real-time voice-to-code translation within development environments.",
    "ai_stack": [
      "GPT",
      "Speech",
      "Agents"
    ],
    "edge_use_cases": [
      "Hands-free coding for accessibility",
      "Rapid prototyping by voice"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Installable plugin",
        "Voice command recognition",
        "Simple code snippet generation"
      ],
      "tools": [
        "VS Code API",
        "Google Speech-to-Text",
        "Node.js"
      ],
      "data_bootstrap": [
        "Example codebases",
        "Voice command dataset"
      ],
      "risk": [
        "Compatibility with various IDEs",
        "Voice command misunderstanding"
      ],
      "mitigation": [
        "Focus on major IDEs first",
        "User feedback for improving recognition"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live coding sessions showing voice commands",
        "Before/after coding productivity"
      ],
      "channels": [
        "Developer Forums",
        "Reddit",
        "Hacker News"
      ],
      "pricing": {
        "free": "Basic commands",
        "pro": "$5/month for premium features",
        "business": "$29/month for team collaboration"
      }
    },
    "moat": [
      "Integration with existing IDEs",
      "Customization for different programming languages"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "By providing a unique approach to coding that merges voice AI with traditional development tools, this idea caters to a rising need for more accessible coding practices."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}