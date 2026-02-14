import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"

// Emoji Constants for Consistent Usage
const EMOJI_SETS = {
  // Core Technology Emojis (unique per category)
  AI_CORE: "🧠",
  DATA_CORE: "📊",
  CLOUD_CORE: "☁️",
  QUALITY_CORE: "✅",
  WORKFLOW_CORE: "🔄",

  // Technology Elements (deduplicated)
  ROBOT: "🤖",
  LIGHTNING: "⚡",
  GEAR: "⚙️",
  WRENCH: "🔧",
  BRAIN: "💡",
  ROCKET: "🚀",
  TARGET: "🎯",
  CHART_UP: "📈",
  CHART_BAR: "📊",
  MAGNIFYING_GLASS: "🔍",
  TEST_TUBE: "🧪",
  CLIPBOARD: "📋",

  // Interface Elements
  COMPUTER: "💻",
  MOBILE: "📱",
  GLOBE: "🌐",
  LAPTOP: "💻",

  // Business Elements
  BRIEFCASE: "💼",
  PEOPLE: "👥",
  PERSON: "👤",
  HANDSHAKE: "🤝",
  TROPHY: "🏆",
  DIAMOND: "💎",
  BUILDING: "🏢",

  // Experience Elements
  HEART: "💖",
  SMILE: "😊",
  STAR: "⭐",
  CHAT: "💬",
  GIFT: "🎁",

  // Data Elements
  DATABASE: "💾",
  CRYSTAL_BALL: "🔮",
  PIE_CHART: "🥧",
  TREND_DOWN: "📉",
  FOLDER: "📁",

  // Cloud Elements
  COMPUTER_OLD: "🖥️",
  SHIELD: "🛡️",
  LOCK: "🔒",
  LINK: "🔗",

  // Quality Elements
  CHECK_MARK: "✓",
  CERTIFICATE: "📜",

  // Service Elements
  PHONE: "📞",
  ENVELOPE: "📧",
  GRADUATE: "🎓",
  MONEY: "💰",
  BELL: "🔔",

  // Effects
  SPARKLES: "✨",
  FIRE: "🔥",
  ZAP: "⚡"
}

// Animated Illustration Components
const AIIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Brain Emoji */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl animate-bounce-slow">
        {EMOJI_SETS.AI_CORE}
      </div>

      {/* Orbiting Data Nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-pulse">{EMOJI_SETS.DATA_CORE}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-pulse">{EMOJI_SETS.ROBOT}
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-pulse">{EMOJI_SETS.BRAIN}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-pulse">{EMOJI_SETS.LIGHTNING}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">{EMOJI_SETS.SPARKLES}</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">{EMOJI_SETS.CRYSTAL_BALL}</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">{EMOJI_SETS.TARGET}</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">{EMOJI_SETS.ROCKET}</div>
    </div>
  </div>
);

// AI Technology Stack Illustration
const AITechStackIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central AI Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7H7v6h6V7z"/>
            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting Technology Icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.ROBOT}</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.LIGHTNING}</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.LINK}</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.CLOUD_CORE}</span>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-8 right-12 w-20 h-12 bg-slate-800 rounded-lg shadow-lg p-2 animate-float-delayed-1">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-green-400 text-xs font-mono">{"</>"}</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">{EMOJI_SETS.DATA_CORE}</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">AI</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">{EMOJI_SETS.ROCKET}</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const DigitalExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Phone/Tablet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        📱
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🛒</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💳</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">💻</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌐</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">📱</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const CustomerExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Heart */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        💖
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">😊</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">⭐</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">💬</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">👥</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">📱</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">💝</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const EmployeeExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Person */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        👤
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💼</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🚀</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">💻</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌟</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">👥</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const CompetitiveAdvantageIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Trophy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        🏆
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💎</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🚀</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📈</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">⚡</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌟</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">💪</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📊</div>
    </div>
  </div>
);

const DataAnalyticsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Chart */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        📊
      </div>

      {/* Orbiting Charts */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">📈</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🥧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📉</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">💾</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🔍</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">📋</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">🎯</div>
    </div>
  </div>
);

const EnterpriseAppsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Building */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        🏢
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">⚙️</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">💼</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📱</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">🔗</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">☁️</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🔒</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">🚀</div>
    </div>
  </div>
);

const CloudOperationsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Cloud */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        ☁️
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🖥️</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🔒</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">⚡</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌐</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🛡️</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const QualityEngineeringIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Checkmark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        ✅
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🧪</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔍</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📋</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">⚙️</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">📊</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🚀</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">💡</div>
    </div>
  </div>
);

const ServiceNowIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[350px] h-[350px] animate-float">
      {/* Central Workflow Hub with Gear Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center animate-spin-slow">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center animate-spin-slow-reverse">
            <span className="text-white text-2xl font-bold">🔄</span>
          </div>
        </div>
        {/* Gear Teeth */}
        <div className="absolute inset-0 w-32 h-32 -translate-x-2 -translate-y-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`absolute w-3 h-6 bg-indigo-400 rounded-sm`} 
                 style={{
                   top: '50%',
                   left: '50%',
                   transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-16px)`,
                   transformOrigin: 'center'
                 }}></div>
          ))}
        </div>
      </div>

      {/* Orbiting Service Modules */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        {/* ITSM Module */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center animate-bounce-3d">
          <div className="text-center">
            <div className="text-white text-xs font-bold">ITSM</div>
            <div className="text-white text-lg">📋</div>
          </div>
        </div>

        {/* ITOM Module */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl shadow-lg flex items-center justify-center animate-bounce-3d" style={{animationDelay: '0.5s'}}>
          <div className="text-center">
            <div className="text-white text-xs font-bold">ITOM</div>
            <div className="text-white text-lg">👥</div>
          </div>
        </div>

        {/* HRSD Module */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg flex items-center justify-center animate-bounce-3d" style={{animationDelay: '1s'}}>
          <div className="text-center">
            <div className="text-white text-xs font-bold">HRSD</div>
            <div className="text-white text-lg">💻</div>
          </div>
        </div>

        {/* CSM Module */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl shadow-lg flex items-center justify-center animate-bounce-3d" style={{animationDelay: '1.5s'}}>
          <div className="text-center">
            <div className="text-white text-xs font-bold">CSM</div>
            <div className="text-white text-lg">📞</div>
          </div>
        </div>
      </div>

      {/* Inner Orbit - Workflow Connectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 animate-spin-slow-reverse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse`}
               style={{
                 top: '50%',
                 left: '50%',
                 transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-28px)`,
                 animationDelay: `${i * 0.2}s`
               }}></div>
        ))}
      </div>

      {/* Workflow Data Streams */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 350">
        <defs>
          <linearGradient id="workflowStream" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Connecting Lines Between Modules */}
        <line x1="175" y1="55" x2="175" y2="125" stroke="url(#workflowStream)" strokeWidth="2" strokeDasharray="8,4" className="animate-dash" />
        <line x1="295" y1="175" x2="225" y2="175" stroke="url(#workflowStream)" strokeWidth="2" strokeDasharray="8,4" className="animate-dash" style={{animationDelay: '0.5s'}} />
        <line x1="175" y1="295" x2="175" y2="225" stroke="url(#workflowStream)" strokeWidth="2" strokeDasharray="8,4" className="animate-dash" style={{animationDelay: '1s'}} />
        <line x1="55" y1="175" x2="125" y2="175" stroke="url(#workflowStream)" strokeWidth="2" strokeDasharray="8,4" className="animate-dash" style={{animationDelay: '1.5s'}} />
      </svg>

      {/* Floating Automation Indicators */}
      <div className="absolute top-12 right-12 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-float-delayed-1 shadow-lg">
        ⚡ Auto
      </div>
      <div className="absolute top-12 left-12 bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-float-delayed-2 shadow-lg">
        🔗 Connect
      </div>
      <div className="absolute bottom-12 right-12 bg-gradient-to-r from-purple-400 to-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-float-delayed-3 shadow-lg">
        📊 Insights
      </div>
      <div className="absolute bottom-12 left-12 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-float-delayed-4 shadow-lg">
        🎯 Optimize
      </div>

      {/* Workflow Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
    </div>
  </div>
);

// Additional Illustrations for Data Analytics
const BusinessIntelligenceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central BI Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-4xl">📊</span>
        </div>
      </div>

      {/* Orbiting BI Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📈</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📋</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🎯</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">💡</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">BI</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">📊</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">INS</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const AnalyticsOperationIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central Analytics Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-4xl">📈</span>
        </div>
      </div>

      {/* Orbiting Analytics Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🤖</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📊</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⚡</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🎯</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">OPS</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">📈</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">EFF</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

// AI Maturity Model Illustration
const AIMaturityModelIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[450px] h-[450px] animate-float">
      {/* Central AI Maturity Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-2xl font-bold">AI</div>
            <div className="text-white/80 text-sm">Maturity</div>
          </div>
        </div>
      </div>

      {/* Maturity Stages Orbiting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 animate-spin-very-slow">
        {/* Stage 1: Awareness */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-1">
          <div className="text-center">
            <div className="text-white text-xs font-bold">1</div>
            <div className="text-white/80 text-xs">Aware</div>
          </div>
        </div>

        {/* Stage 2: Experimentation */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-2">
          <div className="text-center">
            <div className="text-white text-xs font-bold">2</div>
            <div className="text-white/80 text-xs">Pilot</div>
          </div>
        </div>

        {/* Stage 3: Operationalization */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-3">
          <div className="text-center">
            <div className="text-white text-xs font-bold">3</div>
            <div className="text-white/80 text-xs">Ops</div>
          </div>
        </div>

        {/* Stage 4: Enterprise Adoption */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-1">
          <div className="text-center">
            <div className="text-white text-xs font-bold">4</div>
            <div className="text-white/80 text-xs">Scale</div>
          </div>
        </div>

        {/* Stage 5: Autonomous Intelligence */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-4">
          <div className="text-center">
            <div className="text-white text-xs font-bold">5</div>
            <div className="text-white/80 text-xs">Auto</div>
          </div>
        </div>
      </div>

      {/* Inner Orbit - Technology Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 animate-spin-slow-reverse">
      </div>

      {/* Floating Progress Indicators */}
      <div className="absolute top-2 right-2 w-20 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-1 flex items-center justify-center">
        <span className="text-white text-xs font-bold">75%</span>
      </div>

      <div className="absolute bottom-6 right-6 w-24 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-lg animate-float-delayed-3 flex items-center justify-center">
        <span className="text-white text-xs font-mono">ROI</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{zIndex: -1}}>
        <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="15%" y1="50%" x2="85%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="10,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

// AI in Quality Engineering Illustration
const AIQualityEngineeringIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central Quality Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting Quality Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🧪</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🔍</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📊</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⚡</span>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">98%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">✓</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">QA</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Test Automation Icons */}
      <div className="absolute top-1/4 left-12 w-8 h-8 text-cyan-500 animate-pulse-slow">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-12 w-8 h-8 text-orange-500 animate-pulse-slow">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const PartnerExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central Partner Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting Partner Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🤝</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📊</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🔒</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⚡</span>
        </div>
      </div>

      {/* Partner Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">92%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">⭐</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">SAT</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const HRSDIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central HR Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting HR Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📋</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🎓</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">💼</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🏆</span>
        </div>
      </div>

      {/* HR Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">85%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">👥</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">EFF</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const CSMIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central CSM Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 9a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v1.734A3.001 3.001 0 019 9.5z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting CSM Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">💬</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📞</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📧</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⭐</span>
        </div>
      </div>

      {/* CSM Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">90%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">😊</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">SAT</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const MicrosoftDynamicsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central CRM */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        🤝
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💼</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">📈</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">👥</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">💰</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">📊</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🎯</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🚀</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">💡</div>
    </div>
  </div>
);

const ApplicationDevelopmentIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Code */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        💻
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">⚙️</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📱</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🌐</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">🚀</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">💡</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">⚡</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📊</div>
    </div>
  </div>
);

const ApplicationManagementIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        📊
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔍</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🛠️</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📋</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">⚙️</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">🔒</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">📈</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🔔</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">🎯</div>
    </div>
  </div>
);

export default function ServiceDetails() {
    const { serviceName } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [serviceName])

    return (
        <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
                <style>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes fadeInRight {
                        from {
                            opacity: 0;
                            transform: translateX(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes scaleIn {
                        from {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }

                    @keyframes slideInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    /* Enhanced 3D and Animation Effects */
                    @keyframes orbit {
                        0% {
                            transform: rotate(0deg) translateX(150px) rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg) translateX(150px) rotate(-360deg);
                        }
                    }

                    @keyframes pulse-glow {
                        0%, 100% {
                            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
                        }
                        50% {
                            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4);
                        }
                    }

                    @keyframes rotate-3d {
                        0% {
                            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
                        }
                        25% {
                            transform: perspective(1000px) rotateY(90deg) rotateX(10deg);
                        }
                        50% {
                            transform: perspective(1000px) rotateY(180deg) rotateX(0deg);
                        }
                        75% {
                            transform: perspective(1000px) rotateY(270deg) rotateX(-10deg);
                        }
                        100% {
                            transform: perspective(1000px) rotateY(360deg) rotateX(0deg);
                        }
                    }

                    @keyframes bounce-3d {
                        0%, 100% {
                            transform: perspective(1000px) translateZ(0px) rotateX(0deg);
                        }
                        50% {
                            transform: perspective(1000px) translateZ(50px) rotateX(10deg);
                        }
                    }

                    @keyframes float-delayed-1 {
                        0%, 100% {
                            transform: translateY(0px) translateX(0px);
                        }
                        33% {
                            transform: translateY(-15px) translateX(5px);
                        }
                        66% {
                            transform: translateY(-5px) translateX(-5px);
                        }
                    }

                    @keyframes float-delayed-2 {
                        0%, 100% {
                            transform: translateY(0px) translateX(0px) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) translateX(10px) rotate(5deg);
                        }
                    }

                    @keyframes float-delayed-3 {
                        0%, 100% {
                            transform: translateY(0px) scale(1);
                        }
                        50% {
                            transform: translateY(-12px) scale(1.05);
                        }
                    }

                    @keyframes float-delayed-4 {
                        0%, 100% {
                            transform: translateY(0px) translateX(0px);
                        }
                        25% {
                            transform: translateY(-8px) translateX(-3px);
                        }
                        75% {
                            transform: translateY(-18px) translateX(3px);
                        }
                    }

                    @keyframes spin-slow {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes spin-very-slow {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes spin-slow-reverse {
                        from {
                            transform: rotate(360deg);
                        }
                        to {
                            transform: rotate(0deg);
                        }
                    }

                    @keyframes bounce-slow {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                    }

                    @keyframes pulse-slow {
                        0%, 100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.8;
                            transform: scale(1.05);
                        }
                    }

                    @keyframes dash {
                        to {
                            stroke-dashoffset: -20;
                        }
                    }

                    .animate-fadeInUp {
                        animation: fadeInUp 0.8s ease-out forwards;
                    }

                    .animate-fadeInLeft {
                        animation: fadeInLeft 0.8s ease-out forwards;
                    }

                    .animate-fadeInRight {
                        animation: fadeInRight 0.8s ease-out forwards;
                    }

                    .animate-scaleIn {
                        animation: scaleIn 0.6s ease-out forwards;
                    }

                    .animate-float {
                        animation: float 3s ease-in-out infinite;
                    }

                    .animate-slideInLeft {
                        animation: slideInLeft 0.8s ease-out forwards;
                    }

                    /* Enhanced Animation Classes */
                    .animate-orbit {
                        animation: orbit 20s linear infinite;
                    }

                    .animate-pulse-glow {
                        animation: pulse-glow 2s ease-in-out infinite;
                    }

                    .animate-rotate-3d {
                        animation: rotate-3d 15s ease-in-out infinite;
                    }

                    .animate-bounce-3d {
                        animation: bounce-3d 4s ease-in-out infinite;
                    }

                    .animate-float-delayed-1 {
                        animation: float-delayed-1 4s ease-in-out infinite;
                    }

                    .animate-float-delayed-2 {
                        animation: float-delayed-2 5s ease-in-out infinite;
                    }

                    .animate-float-delayed-3 {
                        animation: float-delayed-3 3.5s ease-in-out infinite;
                    }

                    .animate-float-delayed-4 {
                        animation: float-delayed-4 4.5s ease-in-out infinite;
                    }

                    .animate-spin-slow {
                        animation: spin-slow 8s linear infinite;
                    }

                    .animate-spin-very-slow {
                        animation: spin-very-slow 15s linear infinite;
                    }

                    .animate-spin-slow-reverse {
                        animation: spin-slow-reverse 12s linear infinite;
                    }

                    .animate-bounce-slow {
                        animation: bounce-slow 3s ease-in-out infinite;
                    }

                    .animate-pulse-slow {
                        animation: pulse-slow 4s ease-in-out infinite;
                    }

                    .animate-dash {
                        animation: dash 2s linear infinite;
                    }

                    .hover-lift {
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .hover-lift:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    }

                    .hover-scale {
                        transition: transform 0.3s ease;
                    }

                    .hover-scale:hover {
                        transform: scale(1.05);
                    }

                    .hover-glow {
                        transition: all 0.3s ease;
                    }

                    .hover-glow:hover {
                        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
                    }

                    .stagger-1 { animation-delay: 0.1s; }
                    .stagger-2 { animation-delay: 0.2s; }
                    .stagger-3 { animation-delay: 0.3s; }
                    .stagger-4 { animation-delay: 0.4s; }
                    .stagger-5 { animation-delay: 0.5s; }
                    .stagger-6 { animation-delay: 0.6s; }

                    /* Background styles for service sections */
                    .ai-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .de-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .da-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .ea-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .md-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .it-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .qe-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1581091012184-7b3c5b2a7f6a?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .sn-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }
                `}</style>

                {/* ================= ARTIFICIAL INTELLIGENCE ================= */}
{serviceName === "artificial-intelligence" && (
    <>
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-20">
            <div className="animate-fadeInLeft order-2 lg:order-1">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-900 mb-3 sm:mb-6 hover:text-blue-700 transition-colors duration-300 leading-snug sm:leading-tight">
                    Artificial Intelligence
                </h1>
                <p className="italic text-base sm:text-lg lg:text-xl text-slate-600 mb-4 sm:mb-8 hover:text-slate-800 transition-colors duration-300">
                    Transform Your Business with Next-Generation AI Solutions
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-4 lg:mb-6">
                    Unlock unprecedented growth and efficiency with our cutting-edge AI implementations.
                    From intelligent automation to predictive insights, we deliver AI solutions that drive
                    measurable ROI and competitive advantage across industries.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl sm:text-2xl">🚀</span>
                        <span className="font-semibold text-blue-900 text-sm sm:text-base">Proven Results</span>
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">Our clients achieve up to <span className="font-bold text-blue-600">40% cost reduction</span> and <span className="font-bold text-blue-600">3x faster decision-making</span> with AI implementation.</p>
                </div>
            </div>
            <div className="order-1 lg:order-2 mb-6 lg:mb-0">
                <AIIllustration />
            </div>
        </div>

        {/* ================= OUR AI TECHNOLOGY STACK ================= */}
        <section className="mt-12 sm:mt-16 lg:mt-24 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 hover:text-blue-700 transition-colors duration-300">
                        Our AI Technology Stack
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <div className="text-slate-700 leading-relaxed space-y-4 sm:space-y-6 animate-fadeInLeft order-2 lg:order-1">
                        <p className="hover:text-slate-900 transition-colors duration-300 text-sm sm:text-base">
                            At Arvish Consulting, we leverage a <b className="hover:text-blue-700 transition-colors duration-200">robust, future-ready AI technology stack</b>
                            that combines large language models, agentic AI frameworks, and
                            enterprise-grade cloud infrastructure.
                        </p>

                        <p className="hover:text-slate-900 transition-colors duration-300 text-sm sm:text-base">
                            This enables us to build scalable, secure, and intelligent AI systems
                            that integrate seamlessly within enterprise ecosystems.
                        </p>

                        <h3 className="text-base sm:text-lg font-semibold text-blue-900 mt-4 sm:mt-6 hover:text-blue-700 transition-colors duration-300">
                            Large Language Models (LLMs)
                        </h3>

                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                            <li className="hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                                Expertise across major foundation models and APIs including
                                <b className="hover:text-blue-700 transition-colors duration-200"> OpenAI GPT</b>, <b className="hover:text-blue-700 transition-colors duration-200">Anthropic Claude</b>, <b className="hover:text-blue-700 transition-colors duration-200">Google Gemini</b>,
                                <b className="hover:text-blue-700 transition-colors duration-200"> Microsoft Copilot</b>, and <b className="hover:text-blue-700 transition-colors duration-200">Meta LLaMA</b> for enterprise-grade
                                reasoning, language understanding, and generation.
                            </li>
                        </ul>

                        <h3 className="text-base sm:text-lg font-semibold text-blue-900 mt-4 sm:mt-6 hover:text-blue-700 transition-colors duration-300">
                            Agentic AI Frameworks
                        </h3>

                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
                            <li className="hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                                Design and deployment of <b className="hover:text-blue-700 transition-colors duration-200">autonomous, goal-oriented AI agents</b>
                                using modern agentic frameworks and orchestration layers.
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                                <b className="hover:text-blue-700 transition-colors duration-200">CrewAI</b> and <b className="hover:text-blue-700 transition-colors duration-200">LangChain</b> for multi-agent coordination and
                                contextual orchestration.
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                                <b className="hover:text-blue-700 transition-colors duration-200">Strand Agents</b> for modular, composable AI workflows.
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                                <b className="hover:text-blue-700 transition-colors duration-200">Google AI Development Kit (ADK)</b>, <b className="hover:text-blue-700 transition-colors duration-200">Model Context Protocol (MCP)</b>,
                                and <b className="hover:text-blue-700 transition-colors duration-200">ADA Protocol</b> for interoperability across tools and systems.
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                                <b className="hover:text-blue-700 transition-colors duration-200">API Park</b> for secure agent-to-agent and service orchestration
                                across distributed enterprise environments.
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center animate-fadeInRight order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
                            <AITechStackIllustration />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= CORE AI CAPABILITIES ================= */}
        <section className="mt-12 sm:mt-16 lg:mt-24 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 bg-slate-50 rounded-xl">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 hover:text-blue-700 transition-colors duration-300">
                        Core AI Capabilities
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 sm:w-20 h-1 bg-green-200 rounded"></span>
                        <span className="w-2 sm:w-3 h-2 sm:h-3 bg-red-600 rounded-full animate-pulse"></span>
                        <span className="w-12 sm:w-20 h-1 bg-green-200 rounded"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex gap-4 sm:gap-6 hover-lift bg-white p-4 sm:p-6 rounded-xl shadow-md animate-fadeInUp stagger-1 group">
                        <div className="text-blue-600 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">💡</div>
                        <div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                Generative AI & LLM Solutions
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm lg:text-base group-hover:text-slate-900 transition-colors duration-300">
                                Create intelligent chatbots, content generators, and AI assistants
                                for natural, human-like interactions across customer support, sales,
                                and knowledge management.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 sm:gap-6 hover-lift bg-white p-4 sm:p-6 rounded-xl shadow-md animate-fadeInUp stagger-2 group">
                        <div className="text-blue-600 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">📊</div>
                        <div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                Predictive Analytics & Machine Learning
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm lg:text-base group-hover:text-slate-900 transition-colors duration-300">
                                Uncover trends, predict demand, detect anomalies, and optimize
                                operations using supervised and unsupervised learning.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 sm:gap-6 hover-lift bg-white p-4 sm:p-6 rounded-xl shadow-md animate-fadeInUp stagger-3 group">
                        <div className="text-blue-600 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">📚</div>
                        <div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                Retrieval-Augmented Generation (RAG)
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm lg:text-base group-hover:text-slate-900 transition-colors duration-300">
                                Integrate AI with internal knowledge bases and enterprise data
                                for accurate, context-aware, and secure AI responses.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 sm:gap-6 hover-lift bg-white p-4 sm:p-6 rounded-xl shadow-md animate-fadeInUp stagger-4 group">
                        <div className="text-blue-600 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">👁️</div>
                        <div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                Computer Vision & Natural Language Processing (NLP)
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm lg:text-base group-hover:text-slate-900 transition-colors duration-300">
                                Leverage image and language AI for document analysis, OCR,
                                sentiment detection, entity extraction, and translation.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 sm:gap-6 hover-lift bg-white p-4 sm:p-6 rounded-xl shadow-md animate-fadeInUp stagger-5 group">
                        <div className="text-blue-600 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">🤖</div>
                        <div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                AI Agents & Workflow Automation
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm lg:text-base group-hover:text-slate-900 transition-colors duration-300">
                                Automate complex multi-step tasks by integrating AI agents
                                with enterprise systems like APIs, CRM, and ERP platforms.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 sm:gap-6 hover-lift bg-white p-4 sm:p-6 rounded-xl shadow-md animate-fadeInUp stagger-6 group">
                        <div className="text-blue-600 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">💻</div>
                        <div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                AI-Assisted Software Development
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm lg:text-base group-hover:text-slate-900 transition-colors duration-300">
                                Boost developer productivity with AI tools for coding,
                                debugging, and testing—ensuring faster delivery and
                                higher code quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= AI MATURITY MODEL ================= */}
        <section className="mt-12 sm:mt-16 lg:mt-24 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Background Animation - Hidden on mobile for performance */}
            <div className="absolute inset-0 opacity-5 sm:opacity-10">
                <svg className="w-full h-full hidden sm:block" viewBox="0 0 1000 1000">
                    <defs>
                        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="100" fill="url(#bgGrad)" opacity="0.3" className="animate-pulse">
                        <animateTransform attributeName="transform" type="translate" values="0,0; 50,30; 0,0" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="800" cy="300" r="80" fill="url(#bgGrad)" opacity="0.2" className="animate-bounce">
                        <animateTransform attributeName="transform" type="translate" values="0,0; -30,50; 0,0" dur="10s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="600" cy="800" r="120" fill="url(#bgGrad)" opacity="0.25" className="animate-pulse">
                        <animateTransform attributeName="transform" type="translate" values="0,0; 40,-20; 0,0" dur="12s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-900 mb-3 sm:mb-6 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                        AI Maturity Model for Enterprises
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 max-w-3xl mx-auto animate-fadeInUp stagger-1">
                        Navigate your AI transformation journey with our comprehensive maturity framework
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Enhanced AI Maturity SVG Illustration */}
                    <div className="flex justify-center animate-fadeInLeft order-2 lg:order-1">
                        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
                            <svg viewBox="0 0 500 500" className="w-full h-full">
                                <defs>
                                    {/* Gradients */}
                                    <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#1e40af" />
                                    </radialGradient>
                                    <linearGradient id="stage1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#ef4444" />
                                        <stop offset="100%" stopColor="#dc2626" />
                                    </linearGradient>
                                    <linearGradient id="stage2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#f59e0b" />
                                        <stop offset="100%" stopColor="#d97706" />
                                    </linearGradient>
                                    <linearGradient id="stage3" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#1d4ed8" />
                                    </linearGradient>
                                    <linearGradient id="stage4" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#059669" />
                                    </linearGradient>
                                    <linearGradient id="stage5" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#8b5cf6" />
                                        <stop offset="100%" stopColor="#7c3aed" />
                                    </linearGradient>
                                    
                                    {/* Filters for 3D effects - simplified on mobile */}
                                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2"/>
                                    </filter>
                                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Central AI Core */}
                                <g transform="translate(250,250)">
                                    <circle r="80" fill="url(#centerGrad)" filter="url(#shadow)" className="animate-pulse">
                                        <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="20s" repeatCount="indefinite" />
                                    </circle>
                                    <circle r="60" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                                        <animateTransform attributeName="transform" type="rotate" values="360; 0" dur="15s" repeatCount="indefinite" />
                                    </circle>
                                    <text textAnchor="middle" dy="-10" fill="white" fontSize="16" fontWeight="bold">AI</text>
                                    <text textAnchor="middle" dy="10" fill="white" fontSize="12" opacity="0.8">Maturity</text>
                                </g>

                                {/* Maturity Stages - Orbiting */}
                                <g transform="translate(250,250)">
                                                    <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="30s" repeatCount="indefinite" />
                                                    
                                                    {/* Stage 1: Awareness */}
                                                    <g transform="translate(0,-150)">
                                                        <circle r="25" fill="url(#stage1)" filter="url(#glow)" className="hover:scale-110 transition-transform cursor-pointer">
                                                            <animate attributeName="r" values="25; 30; 25" dur="3s" repeatCount="indefinite" />
                                                        </circle>
                                                        <text textAnchor="middle" dy="-5" fill="white" fontSize="12" fontWeight="bold">1</text>
                                                        <text textAnchor="middle" dy="8" fill="white" fontSize="8">Aware</text>
                                                    </g>

                                                    {/* Stage 2: Experimentation */}
                                                    <g transform="translate(106,106)">
                                                        <circle r="25" fill="url(#stage2)" filter="url(#glow)" className="hover:scale-110 transition-transform cursor-pointer">
                                                            <animate attributeName="r" values="25; 30; 25" dur="3s" begin="0.6s" repeatCount="indefinite" />
                                                        </circle>
                                                        <text textAnchor="middle" dy="-5" fill="white" fontSize="12" fontWeight="bold">2</text>
                                                        <text textAnchor="middle" dy="8" fill="white" fontSize="8">Pilot</text>
                                                    </g>

                                                    {/* Stage 3: Operationalization */}
                                                    <g transform="translate(150,0)">
                                                        <circle r="25" fill="url(#stage3)" filter="url(#glow)" className="hover:scale-110 transition-transform cursor-pointer">
                                                            <animate attributeName="r" values="25; 30; 25" dur="3s" begin="1.2s" repeatCount="indefinite" />
                                                        </circle>
                                                        <text textAnchor="middle" dy="-5" fill="white" fontSize="12" fontWeight="bold">3</text>
                                                        <text textAnchor="middle" dy="8" fill="white" fontSize="8">Ops</text>
                                                    </g>

                                                    {/* Stage 4: Enterprise Adoption */}
                                                    <g transform="translate(106,-106)">
                                                        <circle r="25" fill="url(#stage4)" filter="url(#glow)" className="hover:scale-110 transition-transform cursor-pointer">
                                                            <animate attributeName="r" values="25; 30; 25" dur="3s" begin="1.8s" repeatCount="indefinite" />
                                                        </circle>
                                                        <text textAnchor="middle" dy="-5" fill="white" fontSize="12" fontWeight="bold">4</text>
                                                        <text textAnchor="middle" dy="8" fill="white" fontSize="8">Scale</text>
                                                    </g>

                                                    {/* Stage 5: Autonomous Intelligence */}
                                                    <g transform="translate(-106,-106)">
                                                        <circle r="25" fill="url(#stage5)" filter="url(#glow)" className="hover:scale-110 transition-transform cursor-pointer">
                                                            <animate attributeName="r" values="25; 30; 25" dur="3s" begin="2.4s" repeatCount="indefinite" />
                                                        </circle>
                                                        <text textAnchor="middle" dy="-5" fill="white" fontSize="12" fontWeight="bold">5</text>
                                                        <text textAnchor="middle" dy="8" fill="white" fontSize="8">Auto</text>
                                                    </g>
                                                </g>

                                {/* Connection Lines - simplified on mobile */}
                                <g transform="translate(250,250)" opacity="0.3">
                                                    <line x1="0" y1="-150" x2="0" y2="150" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
                                                        <animate attributeName="stroke-dashoffset" values="0; 10" dur="2s" repeatCount="indefinite" />
                                                    </line>
                                                    <line x1="-150" y1="0" x2="150" y2="0" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
                                                        <animate attributeName="stroke-dashoffset" values="0; 10" dur="2s" begin="1s" repeatCount="indefinite" />
                                                    </line>
                                                    <circle r="120" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="10,5">
                                                        <animate attributeName="stroke-dashoffset" values="0; 15" dur="3s" repeatCount="indefinite" />
                                                    </circle>
                                                </g>

                                {/* Floating Progress Indicators - hidden on mobile */}
                                <g className="hidden sm:block" transform="translate(400,100)">
                                                    <rect width="60" height="20" rx="10" fill="#10b981" filter="url(#shadow)">
                                                        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="4s" repeatCount="indefinite" />
                                                    </rect>
                                                    <text x="30" y="14" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">75% ROI</text>
                                                </g>

                                <g className="hidden sm:block" transform="translate(50,400)">
                                                    <rect width="80" height="25" rx="12" fill="#3b82f6" filter="url(#shadow)">
                                                        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="5s" repeatCount="indefinite" />
                                                    </rect>
                                                    <text x="40" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Enterprise</text>
                                                </g>

                                {/* Data Flow Animation - simplified on mobile */}
                                <g opacity="0.6" className="hidden sm:block">
                                                    <circle r="3" fill="#06b6d4">
                                                        <animateMotion dur="6s" repeatCount="indefinite">
                                                            <path d="M 100,250 Q 250,100 400,250 Q 250,400 100,250" />
                                                        </animateMotion>
                                                    </circle>
                                                    <circle r="2" fill="#8b5cf6">
                                                        <animateMotion dur="8s" repeatCount="indefinite">
                                                            <path d="M 250,100 Q 400,250 250,400 Q 100,250 250,100" />
                                                        </animateMotion>
                                                    </circle>
                                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="text-slate-700 leading-relaxed space-y-4 sm:space-y-6 animate-fadeInRight order-1 lg:order-2">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500 animate-fadeInUp">
                            <h3 className="font-bold text-blue-900 text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
                                🚀 Accelerate Your AI Journey
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base">
                                From Exploration to Enterprise-Scale Transformation
                            </p>
                        </div>

                        <p className="animate-fadeInUp stagger-1 text-sm sm:text-base">
                            Arvish Consulting partners with enterprises at every stage of their AI maturity.
                            Whether you're experimenting with proof of concept or operationalizing
                            AI across business units, our AI Maturity Framework helps assess
                            readiness, define a roadmap, and drive measurable impact.
                        </p>

                        <div className="space-y-3 sm:space-y-4 animate-fadeInUp stagger-2">
                            <h3 className="text-base sm:text-lg font-semibold text-blue-900 mt-4 sm:mt-6">
                                Our AI Maturity Stages:
                            </h3>

                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-x-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 text-sm sm:text-base">Awareness & Assessment</h4>
                                        <p className="text-xs sm:text-sm text-slate-600">Identify opportunities and evaluate current data and process readiness.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-x-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-semibold text-orange-700 text-sm sm:text-base">Experimentation & Pilots</h4>
                                        <p className="text-xs sm:text-sm text-slate-600">Build initial POCs using generative AI, machine learning models, or automation.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-x-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-semibold text-blue-700 text-sm sm:text-base">Operationalization</h4>
                                        <p className="text-xs sm:text-sm text-slate-600">Integrate AI into production systems with proper MLOps, governance, and data pipelines.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-x-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">4</div>
                                    <div>
                                        <h4 className="font-semibold text-green-700 text-sm sm:text-base">Enterprise Adoption</h4>
                                        <p className="text-xs sm:text-sm text-slate-600">Scale AI across functions while ensuring interoperability, security, and ROI tracking.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-x-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">5</div>
                                    <div>
                                        <h4 className="font-semibold text-purple-700 text-sm sm:text-base">Autonomous Intelligence</h4>
                                        <p className="text-xs sm:text-sm text-slate-600">Implement AI agents and self-learning systems that continuously optimize operations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 sm:p-6 rounded-xl border-l-4 border-slate-500 animate-fadeInUp stagger-3">
                            <p className="text-slate-700 text-sm sm:text-base">
                                <span className="font-semibold text-slate-900">🎯 Expert Partnership:</span> Arvish Consulting's experts work closely with business and technology leaders to
                                define strategy, establish governance, and prioritize investments
                                aligned with transformation goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= AI IN QUALITY ENGINEERING ================= */}
        <section className="mt-12 sm:mt-16 lg:mt-24 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    <div className="flex justify-center order-1 lg:order-1 mb-8 lg:mb-0">
                        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
                            <AIQualityEngineeringIllustration />
                        </div>
                    </div>

                    <div className="text-slate-700 leading-relaxed space-y-4 sm:space-y-6 order-2 lg:order-2">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
                            AI in Quality Engineering
                        </h2>

                        <p className="font-semibold text-blue-900 text-sm sm:text-base">
                            Reimagining Quality Engineering with AI
                        </p>

                        <p className="text-sm sm:text-base">
                            At Arvish Consulting, we integrate AI into the heart of Quality Engineering
                            to make software delivery faster, smarter, and more reliable.
                        </p>

                        <h3 className="text-base sm:text-lg font-semibold text-blue-900 mt-4 sm:mt-6">
                            AI-Driven Testing and Assurance Capabilities:
                        </h3>

                        <ul className="space-y-3 sm:space-y-4">
                            <li className="hover:translate-x-2 transition-transform duration-300 flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-1 flex-shrink-0">■</span>
                                <span className="text-sm sm:text-base">
                                    <b className="hover:text-blue-700 transition-colors duration-200">Intelligent Test Automation:</b> Use AI models to auto-generate
                                    test scripts, predict defects, and optimize regression coverage.
                                </span>
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-1 flex-shrink-0">■</span>
                                <span className="text-sm sm:text-base">
                                    <b className="hover:text-blue-700 transition-colors duration-200">Defect Prediction & Root Cause Analysis:</b> Leverage ML models
                                    to identify high-risk areas before failures occur.
                                </span>
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-1 flex-shrink-0">■</span>
                                <span className="text-sm sm:text-base">
                                    <b className="hover:text-blue-700 transition-colors duration-200">AI-Powered Test Data Management:</b> Automatically create, mask,
                                    and manage realistic test data from production-like environments.
                                </span>
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-1 flex-shrink-0">■</span>
                                <span className="text-sm sm:text-base">
                                    <b className="hover:text-blue-700 transition-colors duration-200">Generative AI for QA:</b> Use LLMs to assist testers in scenario
                                    creation, documentation, and traceability.
                                </span>
                            </li>
                            <li className="hover:translate-x-2 transition-transform duration-300 flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-1 flex-shrink-0">■</span>
                                <span className="text-sm sm:text-base">
                                    <b className="hover:text-blue-700 transition-colors duration-200">Continuous Quality in CI/CD:</b> Integrate AI insights with
                                    DevOps pipelines for proactive issue detection and automated triage.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= WHY Arvish Consulting FOR AI ================= */}
        <section className="mt-12 sm:mt-16 lg:mt-24 bg-slate-50 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 rounded-lg">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 hover:text-blue-700 transition-colors duration-300">
                        Why Arvish Consulting For AI?
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 sm:w-20 h-1 bg-green-200 rounded"></span>
                        <span className="w-2 sm:w-3 h-2 sm:h-3 bg-red-600 rounded-full animate-pulse"></span>
                        <span className="w-12 sm:w-20 h-1 bg-green-200 rounded"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-1 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                            ✓
                        </div>
                        <p className="group-hover:text-slate-900 transition-colors duration-300 text-xs sm:text-sm lg:text-base"><b className="hover:text-blue-700 transition-colors duration-200">Enterprise-Grade Expertise:</b> Proven across industries and mission-critical systems.</p>
                    </div>

                    <div className="flex gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-2 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                            ✓
                        </div>
                        <p className="group-hover:text-slate-900 transition-colors duration-300 text-xs sm:text-sm lg:text-base"><b className="hover:text-blue-700 transition-colors duration-200">Custom-Built Solutions:</b> Tailored AI models and workflows aligned with business needs.</p>
                    </div>

                    <div className="flex gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-3 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                            ✓
                        </div>
                        <p className="group-hover:text-slate-900 transition-colors duration-300 text-xs sm:text-sm lg:text-base"><b className="hover:text-blue-700 transition-colors duration-200">End-to-End Delivery:</b> From AI strategy to deployment and optimization.</p>
                    </div>

                    <div className="flex gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-4 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                            ✓
                        </div>
                        <p className="group-hover:text-slate-900 transition-colors duration-300 text-xs sm:text-sm lg:text-base"><b className="hover:text-blue-700 transition-colors duration-200">Responsible AI:</b> Ethical, secure, and compliant AI development.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
)}

                {/* ================= DIGITAL EXPERIENCE ================= */}
                {serviceName === "digital-experience" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 de-bg">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Digital Experience
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Crafting Exceptional Digital Journeys That Delight Customers
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Transform every customer interaction into a memorable experience with our cutting-edge
                                    digital experience solutions. We create seamless, personalized journeys that drive
                                    engagement, loyalty, and business growth across all touchpoints.
                                </p>
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🎯</span>
                                        <span className="font-semibold text-purple-900">Measurable Impact</span>
                                    </div>
                                    <p className="text-slate-700">Our clients see <span className="font-bold text-purple-600">85% increase in customer satisfaction</span> and <span className="font-bold text-purple-600">60% higher conversion rates</span> through optimized digital experiences.</p>
                                </div>
                            </div>
                            <DigitalExperienceIllustration />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <DigitalExperienceIllustration />

                                <div className="text-slate-700 leading-relaxed space-y-6">
                                    <p>
                                        Stakeholders such as customers, employees and partners play a critical
                                        role in the success of your enterprise.
                                    </p>

                                    <p>
                                        Supporting their unique demands requires distinctive sets of
                                        technologies, which may lead to limited agility and productivity.
                                    </p>

                                    <h3 className="font-semibold text-blue-900">
                                        Solutions powered by rich experience and smart technology
                                    </h3>

                                    <p>
                                        We combine great user experience with a fully integrated platform to
                                        deliver seamless, device-agnostic digital experiences.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 bg-slate-50 px-6">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-14">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        The Competitive Advantage We Offer
                                    </h2>
                                    <div className="flex justify-center items-center gap-3 mt-4">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        "We amplify customer understanding using analytics and mobility.",
                                        "From awareness to decision, we define the customer journey.",
                                        "We enhance efficiency and deliver Digital Capital faster.",
                                        "We offer customized solutions using recommendation engines.",
                                        "We provide digitally enhanced omni-channel experiences."
                                    ].map((text, i) => (
                                        <div key={i} className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                ✓
                                            </div>
                                            <p>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Competitive Advantage Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Building sustainable competitive advantages
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help organizations build and maintain competitive advantages through
                                        innovative digital strategies, advanced analytics, and technology
                                        differentiation that drives market leadership.
                                    </p>
                                </div>

                                <CompetitiveAdvantageIllustration />
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Customer Experience Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Make your customers your brand's evangelists
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        Enterprises need an operationally efficient and cost-effective
                                        transformation from service to sales. We help define and optimize
                                        strategies that create measurable customer impact.
                                    </p>
                                </div>

                                <CustomerExperienceIllustration />
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Employee Experience Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Transforming the Workforce Experience
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help organizations design personalized employee experiences that
                                        drive productivity, engagement, and retention through digital
                                        technologies.
                                    </p>
                                </div>

                                <EmployeeExperienceIllustration />
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Partner Experience Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Elevating customer delight through robust partner experiences
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help you build strong partner ecosystems, streamline engagement,
                                        and ensure consistent brand experiences across channels.
                                    </p>

                                    <ul className="mt-6 space-y-3">
                                        <li className="hover:translate-x-2 transition-transform duration-300">▪ Ensure partner contributions meet standards</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">▪ Match business needs with the right partners</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">▪ Reduce risks and prevent data loss</li>
                                    </ul>
                                </div>

                                <PartnerExperienceIllustration />
                            </div>
                        </section>
                    </>
                )}

                {/* ================= DATA ANALYTICS ================= */}
                {serviceName === "data-analytics" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 da-bg">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Data Analytics
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Unleashing the Power of Data for Strategic Excellence
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Transform raw data into strategic gold with our advanced analytics solutions.
                                    From predictive modeling to real-time insights, we help you make data-driven
                                    decisions that drive growth and competitive advantage.
                                </p>
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">📈</span>
                                        <span className="font-semibold text-green-900">Data-Driven Success</span>
                                    </div>
                                    <p className="text-slate-700">Our clients achieve <span className="font-bold text-green-600">300% ROI improvement</span> and <span className="font-bold text-green-600">50% faster insights</span> through intelligent data analytics.</p>
                                </div>
                            </div>
                            <DataAnalyticsIllustration />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <DataAnalyticsIllustration />
                                </div>

                                <div className="text-slate-700 leading-relaxed space-y-6">
                                    <p>
                                        A robust data architecture and intelligence can transform your business
                                        today and equip you for the future. Whether it is establishing basic
                                        business intelligence capabilities or utilizing advanced technologies
                                        such as <b class="hover:text-blue-700 transition-colors duration-200">Machine Learning</b> and <b class="hover:text-blue-700 transition-colors duration-200">Predictive Analytics</b>, we enable
                                        your business with domain-relevant processes to digitally transform your
                                        organization.
                                    </p>

                                    <p>
                                        We help you extract and maximize every bit of value out of your data to
                                        create useful insights, enabling better business decisions, competitive
                                        advantage and meaningful business impact. Our comprehensive data analytics
                                        solutions include real-time data processing, advanced visualization dashboards,
                                        and AI-powered insights that drive strategic decision-making across all
                                        business functions.
                                    </p>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">🎯</span>
                                            <span className="font-semibold text-green-900">Data Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Transform raw data into actionable intelligence with our enterprise-grade analytics platform, featuring automated data pipelines, predictive modeling, and real-time dashboards.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-slate-50">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        The Competitive Advantage We Offer
                                    </h2>
                                    <div className="flex justify-center items-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Deploy prediction models in the Cloud and on-premise environments.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Develop comprehensive data science capabilities.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Build or use standard data visualization tools.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Deliver data solutions as user-friendly applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <BusinessIntelligenceIllustration />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Business Intelligence Implementation and Operation
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        We leverage modern software and services to transform data into actionable
                                        intelligence that informs your organization's strategic and tactical
                                        business decisions, enabling you to collect, analyze and present
                                        meaningful insights. Our comprehensive BI solutions include advanced
                                        data warehousing, real-time dashboards, and predictive analytics that
                                        drive informed decision-making across all business functions.
                                    </p>

                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">📊</span>
                                            <span className="font-semibold text-indigo-900">Intelligence Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Our BI implementation delivers 50% faster reporting, 70% improved data accuracy, and 40% better decision-making through automated data pipelines and intelligent visualization tools.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white border-t">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center animate-fadeInLeft">
                                    <AnalyticsOperationIllustration />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Analytics Operation
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help you gain actionable insight about your customers, operations,
                                        and products with data analytics. We implement, manage and optimize
                                        statistical ML algorithms for predictive and prescriptive analytics
                                        across all stages of analytics maturity.
                                    </p>

                                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-500 mt-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">🚀</span>
                                            <span className="font-semibold text-teal-900">Operational Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Our analytics operations deliver <span className="font-bold text-teal-600">60% faster insights</span>, <span className="font-bold text-teal-600">40% cost reduction</span>, and <span className="font-bold text-teal-600">95% accuracy</span> in predictive modeling.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= ENTERPRISE APPLICATIONS ================= */}
                {(serviceName === "enterprise-applications" || serviceName === "enterprise-application") && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 ea-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Enterprise Applications
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Application-driven business transformation
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    We build scalable enterprise applications that
                                    streamline operations, integrate systems, and
                                    improve organizational efficiency.
                                </p>
                            </div>
                            <EnterpriseAppsIllustration />
                        </div>
                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="flex justify-center">
                                        <ApplicationDevelopmentIllustration />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <p>
                                            With technologies evolving at a rapid pace, it becomes necessary to
                                            align organizational strategies with innovative and precise
                                            application development and maintenance practices. With our vast and
                                            robust experience in cutting-edge transformational technologies, we
                                            offer end-to-end application development, management, and maintenance
                                            solutions that deliver quantifiable business value.
                                        </p>

                                        <p>
                                            Our next-generation technologies, industry know-how, consulting
                                            capabilities, and methodologies enable us to deliver futuristic
                                            applications that help you meet strategic business goals. We specialize
                                            in building scalable, secure, and user-centric applications that drive
                                            digital transformation across industries.
                                        </p>

                                        <p>
                                            Our Enterprise Application Development & Maintenance services include
                                            application development and maintenance, custom solution
                                            implementation, application integration, data transformation, and
                                            legacy modernization. Each service is tailored to meet your specific
                                            business needs, ensuring seamless integration with existing systems
                                            and maximum ROI.
                                        </p>

                                        <p>
                                            We provide comprehensive and efficient approaches that align with
                                            business objectives and deliver sustainable growth. Our application
                                            design and development systems streamline disparate applications and
                                            workflows while supporting internationalization and localization. Our
                                            expert team ensures high-quality deliverables with rigorous testing
                                            and continuous support.
                                        </p>

                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl">🚀</span>
                                                <span className="font-semibold text-blue-900">Innovation at Scale</span>
                                            </div>
                                            <p className="text-slate-700">Transform your business with our cutting-edge application development services, featuring modern architectures, cloud-native solutions, and AI-powered enhancements for unparalleled performance and user experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-slate-50 rounded-xl">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        The Competitive Advantage We Offer
                                    </h2>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    {[
                                        "We provide world-class portfolio of end-to-end enterprise application services.",
                                        "We help re-architect and transform legacy monolithic applications into scalable cloud-native microservices.",
                                        "We offer user-friendly enterprise project management tools for evolving business needs.",
                                        "We provide open and flexible solutions that accelerate container deployment and operations.",
                                        "Our CRM ensures stability and customization across departments and geographies.",
                                        "Our integration services enable seamless data flow across multiple environments."
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                ✓
                                            </div>
                                            <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                                <div className="flex justify-center">
                                    <ApplicationDevelopmentIllustration />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Enterprise Application Development
                                    </h2>

                                    <p>
                                        Application development is essential for improving efficiency,
                                        scalability, customer engagement, and unlocking new revenue streams.
                                        Our comprehensive development services transform business processes
                                        through innovative, scalable, and secure applications that drive
                                        digital transformation across all industries.
                                    </p>

                                    <p>
                                        We leverage deep domain expertise, technical excellence, and proven
                                        methodologies to deliver future-ready enterprise applications.
                                        Our team specializes in modern architectures, cloud-native solutions,
                                        and AI-powered enhancements that ensure unparalleled performance
                                        and user experience.
                                    </p>

                                    <p>
                                        Our capabilities span application assessment, modernization, end-to-end
                                        development, maintenance, and enhancement. We provide tailored solutions
                                        that integrate seamlessly with existing systems, ensuring maximum ROI
                                        and business value through rigorous testing and continuous support.
                                    </p>

                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="hover:translate-x-2 transition-transform duration-300">Web and Portal Development with modern frameworks</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Custom Application Development for complex business needs</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Mobile Application Development for iOS and Android</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Content Management Systems with advanced features</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">API Development and Integration Services</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Database Design and Optimization</li>
                                    </ul>

                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">🚀</span>
                                            <span className="font-semibold text-blue-900">Innovation Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Our enterprise application development delivers 40% faster deployment times, 60% cost reduction in maintenance, and 95% client satisfaction through cutting-edge technologies and expert craftsmanship.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-slate-50">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <ApplicationManagementIllustration />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Application Management
                                    </h2>

                                    <p>
                                        We provide comprehensive on-site and global support models that integrate seamlessly
                                        with your teams, ensuring cost efficiency, operational excellence, and continuous
                                        application performance optimization.
                                    </p>

                                    <p>
                                        By working closely with your organization, we deliver impactful
                                        application management services aligned with your business strategy,
                                        featuring 24/7 monitoring, proactive maintenance, and rapid incident response
                                        to minimize downtime and maximize productivity.
                                    </p>

                                    <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-6 rounded-xl border-l-4 border-slate-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">⚙️</span>
                                            <span className="font-semibold text-slate-900">Operational Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Our application management services deliver 99.9% uptime, 50% faster incident resolution, and 30% cost reduction through intelligent monitoring and automated workflows.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
    
    <div className="space-y-6 text-slate-700 md:order-1 order-2">
      <h2 className="text-3xl font-bold text-blue-900">
        Application Modernization
      </h2>

      <p>
        Modernize core applications using cloud-native architectures, CI/CD,
        containerization, and DevOps best practices.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li className="hover:translate-x-2 transition-transform duration-300">Cloud-native re-architecture</li>
        <li className="hover:translate-x-2 transition-transform duration-300">CI/CD automation</li>
        <li className="hover:translate-x-2 transition-transform duration-300">Portfolio assessment & roadmap</li>
        <li className="hover:translate-x-2 transition-transform duration-300">Containerized deployments</li>
        <li className="hover:translate-x-2 transition-transform duration-300">DevOps-driven acceleration</li>
        <li className="hover:translate-x-2 transition-transform duration-300">SaaS & PaaS optimization</li>
      </ul>
    </div>

    {/* Cloud Modernization Animation (on the right, larger size) */}
    <div className="relative w-full h-[320px] bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100 overflow-hidden md:order-2 order-1">
      
      {/* Cloud Platform */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
        <div className="relative">
          {/* Main Cloud */}
          <div className="w-32 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full shadow-lg animate-float">
            <div className="absolute -top-4 left-6 w-16 h-16 bg-gradient-to-r from-sky-300 to-blue-400 rounded-full"></div>
            <div className="absolute -top-6 right-8 w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Containers floating up */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2">
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg shadow-md animate-float-up flex items-center justify-center text-white">
          📦
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/4 translate-x-1/2">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-md animate-float-up flex items-center justify-center text-white"
          style={{animationDelay: '0.5s'}}>
          📦
        </div>
      </div>
      
      {/* CI/CD Arrows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-8">
          <div className="text-2xl text-sky-600 animate-move-left">⬅️</div>
          <div className="text-2xl text-blue-600 animate-move-right">➡️</div>
        </div>
      </div>
      
      {/* Modernization Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48">
        <div className="w-full h-2 bg-gradient-to-r from-sky-300 to-blue-300 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-progress" 
               style={{width: '85%'}}></div>
        </div>
        <div className="text-center mt-2 text-sm font-medium text-blue-700">85% Modernized</div>
      </div>
      
      {/* DevOps Icons */}
      <div className="absolute top-8 left-8 text-sky-600 animate-bounce">⚡</div>
      <div className="absolute top-8 right-8 text-blue-600 animate-bounce" style={{animationDelay: '0.3s'}}>🔄</div>
      <div className="absolute bottom-20 left-10 text-emerald-600 animate-spin-slow">☁️</div>
      <div className="absolute bottom-20 right-10 text-amber-600 animate-spin-reverse">⚙️</div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </div>
    
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(-50%); }
      25% { transform: translateY(-10px) translateX(-50%) rotate(5deg); }
      75% { transform: translateY(5px) translateX(-50%) rotate(-5deg); }
    }
    @keyframes float-up {
      0% { transform: translateY(0) translateX(-50%); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) translateX(-50%); opacity: 0; }
    }
    @keyframes move-left {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(-10px); }
    }
    @keyframes move-right {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(10px); }
    }
    @keyframes progress {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spin-reverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-up { animation: float-up 3s ease-in infinite; }
    .animate-move-left { animation: move-left 2s ease-in-out infinite; }
    .animate-move-right { animation: move-right 2s ease-in-out infinite; }
    .animate-progress { animation: progress 2s ease-out forwards; }
    .animate-bounce { animation: bounce 2s ease-in-out infinite; }
    .animate-spin-slow { animation: spin-slow 10s linear infinite; }
    .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
  `}</style>
</section>

                      <section className="mt-24 py-20 px-6 bg-slate-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    <div className="space-y-6 text-slate-700 md:order-1 order-2">
      <h2 className="text-3xl font-bold text-blue-900">
        Application Security Services
      </h2>

      <p>
        Our security assessments help identify risks, vulnerabilities, and
        threats while transforming security into a continuous governance
        process.
      </p>
    </div>

    {/* Security Shield Animation (on the right) */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 overflow-hidden md:order-2 order-1">
      
      {/* Shield with Scan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Shield Base */}
          <div className="w-20 h-24 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-t-lg 
            flex items-center justify-center text-3xl text-white shadow-xl animate-pulse">
            🔒
          </div>
          
          {/* Scanning Ring */}
          <div className="absolute -inset-4 border-2 border-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
        </div>
      </div>
      
      {/* Security Dots */}
      <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
      
      {/* Scan Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent 
        animate-scan"></div>
      
      {/* Security Badge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-2 rounded-lg shadow animate-bounce-slow">
        <span className="text-sm font-bold text-blue-700">Protected</span>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 grid-rows-10 gap-1 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="bg-blue-500 rounded-sm animate-pulse" 
                 style={{ animationDelay: `${i * 0.05}s` }}></div>
          ))}
        </div>
      </div>
    </div>
    
  </div>

  <style jsx>{`
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }
    @keyframes scan {
      0% { top: 0; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(-5px); }
    }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    .animate-ping { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
    .animate-scan { animation: scan 3s linear infinite; }
    .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
  `}</style>
</section>

                        <section className="mt-24 py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* Application Testing Animation */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100 overflow-hidden">
      
      {/* Testing Pyramid */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40">
        {/* Base - Unit Tests */}
        <div className="w-40 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-t-lg animate-pulse"></div>
        
        {/* Middle - Integration Tests */}
        <div className="w-28 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-t-lg mx-auto animate-pulse" 
             style={{animationDelay: '0.2s'}}></div>
        
        {/* Top - UI Tests */}
        <div className="w-16 h-8 bg-gradient-to-r from-emerald-600 to-green-700 rounded-t-lg mx-auto animate-pulse" 
             style={{animationDelay: '0.4s'}}></div>
      </div>
      
      {/* Testing Icons */}
      <div className="absolute top-4 left-4 text-emerald-600 animate-bounce">📱</div>
      <div className="absolute top-4 right-4 text-green-600 animate-bounce" style={{animationDelay: '0.2s'}}>🌐</div>
      <div className="absolute bottom-12 left-8 text-emerald-500 animate-float">✅</div>
      <div className="absolute bottom-12 right-8 text-green-500 animate-float" style={{animationDelay: '0.3s'}}>🔄</div>
      
      {/* Test Progress Line */}
      <div className="absolute top-1/3 left-4 right-4 h-1 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
      </div>
      
      {/* Quality Score */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 rounded-lg shadow animate-bounce-slow">
        <span className="text-sm font-bold text-emerald-700">99.8% Pass</span>
      </div>
    </div>

    <div className="space-y-6 text-slate-700">
      <h2 className="text-3xl font-bold text-blue-900">
        Application Testing
      </h2>

      <p>
        Our testing services ensure seamless performance, security, and
        reliability across web, mobile, automation, and security testing.
      </p>

      <p>
        We use holistic QA approaches to minimize risk and maximize application
        quality while aligning with your business needs.
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-5px) rotate(5deg); }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    .animate-bounce { animation: bounce 2s ease-in-out infinite; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-shimmer { animation: shimmer 2s linear infinite; }
    .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
  `}</style>
</section>
                    </>
                )}
                
                

                {/* ================= INTELLIGENT IT & CLOUD ================= */}
                {serviceName === "intelligent-it-and-cloud" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 it-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Intelligent IT & Cloud
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Cloud-first strategies for scalable and secure IT operations
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Transform your IT infrastructure with our intelligent cloud solutions
                                    that deliver scalability, security, and operational excellence.
                                </p>
                            </div>
                            <CloudOperationsIllustration />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <CloudOperationsIllustration />

                                <div className="text-slate-700 leading-relaxed space-y-6">
                                    <p>
                                        Our intelligent IT and cloud services help organizations modernize their
                                        infrastructure, optimize operations, and accelerate digital transformation
                                        through cloud-native technologies and best practices.
                                    </p>

                                    <p>
                                        We provide comprehensive cloud migration, management, and optimization
                                        services that ensure your IT infrastructure is scalable, secure, and
                                        cost-effective while enabling innovation and business growth.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= SERVICENOW PLATFORM ================= */}
                {serviceName === "servicenow-platform" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 sn-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    ServiceNow Platform
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Digital workflows that simplify enterprise service management
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Streamline your enterprise operations with ServiceNow's powerful
                                    platform for digital workflow automation and service management.
                                </p>
                            </div>
                            <ServiceNowIllustration />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <ServiceNowIllustration />

                                <div className="text-slate-700 leading-relaxed space-y-6">
                                    <p>
                                        ServiceNow transforms how work gets done by automating and connecting
                                        processes across departments, creating seamless experiences for
                                        employees, customers, and partners.
                                    </p>

                                    <p>
                                        Our ServiceNow implementation and optimization services help organizations
                                        achieve operational excellence through intelligent automation, streamlined
                                        workflows, and enhanced service delivery capabilities.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-slate-50">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <HRSDIllustration />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        HR Service Delivery (HRSD)
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        Transform HR service delivery with automated workflows, self-service
                                        portals, and intelligent case management that improves employee
                                        experience and operational efficiency.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <CSMIllustration />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Customer Service Management (CSM)
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        Deliver exceptional customer experiences with integrated service
                                        management capabilities that connect customer service, field service,
                                        and customer success operations.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </>
                )}
                {serviceName === "microsoft-dynamics-365" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Microsoft Dynamics 365
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Intelligent ERP & CRM solutions
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Our Dynamics 365 solutions help organizations
                                    improve customer engagement, optimize finance,
                                    and streamline supply chain operations.
                                </p>
                            </div>
                            <MicrosoftDynamicsIllustration />
                        </div>

                        <section className="mt-24 py-20 px-4 md:px-6 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full blur-3xl"></div>
  </div>
  
  {/* Floating Particles */}
  <div className="absolute inset-0">
    {[...Array(15)].map((_, i) => (
      <div key={i} className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}>
      </div>
    ))}
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Main Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 
        bg-clip-text text-transparent mb-6 animate-slide-up">
        The Heart of Digital Transformation
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* CRM Ecosystem Animation */}
      <div className="relative w-full h-[320px] bg-gradient-to-br from-white to-blue-50/50 rounded-2xl 
        p-6 border-2 border-blue-100 shadow-2xl shadow-blue-100/50 overflow-hidden">
        
        {/* Central CRM Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Pulse Rings */}
            <div className="absolute -inset-8 border-4 border-blue-400/30 rounded-full animate-ping-slow"></div>
            <div className="absolute -inset-12 border-2 border-cyan-400/20 rounded-full animate-ping-slower"></div>
            
            {/* CRM Core */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 
              rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl animate-pulse-glow group">
              <div className="relative">
                <div className="text-3xl">🚀</div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold whitespace-nowrap">
                  CRM Core
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connected Business Elements */}
        {[
          { icon: "👥", label: "Customers", color: "from-emerald-500 to-green-500", pos: "top-8 left-1/4" },
          { icon: "💰", label: "Sales", color: "from-cyan-500 to-blue-500", pos: "top-8 right-1/4" },
          { icon: "🛠️", label: "Service", color: "from-amber-500 to-orange-500", pos: "bottom-8 left-1/4" },
          { icon: "📊", label: "Analytics", color: "from-purple-500 to-pink-500", pos: "bottom-8 right-1/4" },
          { icon: "🔗", label: "Integration", color: "from-indigo-500 to-purple-500", pos: "top-1/2 left-8" },
          { icon: "⚡", label: "Automation", color: "from-red-500 to-rose-500", pos: "top-1/2 right-8" }
        ].map((element, i) => (
          <div key={i} className={`absolute ${element.pos} -translate-x-1/2 -translate-y-1/2`}>
            {/* Connection Line */}
            <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-blue-300/50 to-transparent 
              origin-left rotate-45 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            {/* Business Node */}
            <div className={`relative w-14 h-14 bg-gradient-to-br ${element.color} rounded-xl shadow-lg 
              flex items-center justify-center text-white text-xl group animate-orbit`}
              style={{ animationDuration: `${8 + i * 2}s`, animationDelay: `${i * 0.5}s` }}>
              
              {element.icon}
              
              {/* Node Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 
                rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300
                whitespace-nowrap">
                {element.label}
              </div>
            </div>
          </div>
        ))}
        
        {/* ROI Indicator */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 
          backdrop-blur-sm px-4 py-3 rounded-xl border border-emerald-200 animate-pulse-slow">
          <div className="text-center">
            <div className="text-xl font-bold text-emerald-700">2.5x</div>
            <div className="text-sm text-emerald-600">Faster ROI</div>
          </div>
        </div>
        
        {/* Growth Indicator */}
        <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 
          backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-200 animate-pulse-slow"
          style={{animationDelay: '0.5s'}}>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-700">+300%</div>
            <div className="text-sm text-blue-600">Growth</div>
          </div>
        </div>
        
        {/* Implementation Success */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 
          rounded-xl border border-purple-200 shadow-lg animate-bounce-slow">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-purple-700">100% Implementation Success</span>
          </div>
        </div>
        
        {/* Certified Expertise */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          <div className="text-xl text-amber-600 animate-spin-slow">🏆</div>
          <div className="text-sm font-medium text-amber-700">Certified Experts</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-xl">
          <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
            <span className="text-4xl animate-pulse">❤️</span>
            Our CRM Excellence
          </h3>
          
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            <span className="font-bold text-blue-700">Arvish Consulting's expertise</span> in implementing CRM solutions 
            is achieved through its <span className="text-indigo-600 font-semibold">technically skilled and certified professionals</span>.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-6">
            <p className="text-gray-700 leading-relaxed">
              As your technology partner, we deliver <span className="font-bold text-purple-700">Modern Workplace applications</span> 
              utilizing Dynamics CRM that accelerate business growth and achieve <span className="font-bold text-emerald-700">faster ROI</span>.
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Whether it's a single application or multiple applications, we have you covered with our comprehensive expertise 
            and commitment to your <span className="font-bold text-cyan-700">digital transformation journey</span>.
          </p>
        </div>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl text-center border border-blue-100 group hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-blue-700 group-hover:animate-bounce">50+</div>
            <div className="text-sm text-blue-600">CRM Projects</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl text-center border border-purple-100 group hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-purple-700 group-hover:animate-bounce">100%</div>
            <div className="text-sm text-purple-600">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl text-center border border-emerald-100 group hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-emerald-700 group-hover:animate-bounce">2.5x</div>
            <div className="text-sm text-emerald-600">ROI Multiplier</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    @keyframes orbit {
      0% {
        transform: rotate(0deg) translateX(80px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(80px) rotate(-360deg);
      }
    }
    @keyframes ping-slow {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }
    @keyframes ping-slower {
      75%, 100% {
        transform: scale(3);
        opacity: 0;
      }
    }
    @keyframes pulse-glow {
      0%, 100% {
        opacity: 1;
        box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
      }
      50% {
        opacity: 0.9;
        box-shadow: 0 0 40px rgba(37, 99, 235, 0.8);
      }
    }
    @keyframes pulse-slow {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }
    @keyframes bounce-slow {
      0%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .animate-slide-up {
      animation: slide-up 1s ease-out;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-orbit {
      animation: orbit linear infinite;
    }
    .animate-ping-slow {
      animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .animate-ping-slower {
      animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    .animate-pulse-glow {
      animation: pulse-glow 2s ease-in-out infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }
    .animate-bounce-slow {
      animation: bounce-slow 3s ease-in-out infinite;
    }
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    .animate-bounce {
      animation: bounce 0.5s ease-in-out;
    }
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `}</style>
</section>
                        <section className="mt-24 py-20 px-6 bg-slate-50 rounded-xl">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">We Offer</h2>
                                    <div className="flex justify-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Cost-effective and highly scalable CRM platform.
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Built-in intelligence that automates several tasks.
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Easy and fast deployment.
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Excellent customer support resulting in increased referrals.
                                    </div>

                                    <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Insights from customer experience to improve products and services.
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* Development Process Animation */}
    <div className="relative w-full h-[280px] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 overflow-hidden">
      
      {/* Development Pipeline Flow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48">
        {/* Pipeline Line */}
        <div className="w-full h-2 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        
        {/* Process Stages */}
        {[
          { step: "1", label: "Diligence", icon: "📋" },
          { step: "2", label: "Design", icon: "🎨" },
          { step: "3", label: "Build", icon: "🛠️" },
          { step: "4", label: "QA", icon: "✅" },
          { step: "5", label: "Rollout", icon: "🚀" }
        ].map((stage, i) => (
          <div key={i} className="absolute top-1/2 -translate-y-1/2" 
               style={{ left: `${i * 25}%` }}>
            
            {/* Stage Node */}
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 
              rounded-full flex items-center justify-center text-white text-xl shadow-lg 
              animate-pulse-slow group hover:scale-110 transition-transform duration-300">
              {stage.icon}
              
              {/* Stage Indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 
                rounded-full flex items-center justify-center text-xs font-bold text-white">
                {stage.step}
              </div>
            </div>
            
            {/* Stage Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-indigo-700 
              whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {stage.label}
            </div>
          </div>
        ))}
        
        {/* Moving Code Indicator */}
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 
          bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-flow"
          style={{ animationDuration: '5s' }}>
        </div>
      </div>
      
      {/* Code Snippets Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 font-mono text-xs text-indigo-800 animate-pulse">
          {`<Component />`}
        </div>
        <div className="absolute top-10 right-6 font-mono text-xs text-purple-800 animate-pulse" 
             style={{animationDelay: '0.5s'}}>
          {`export default`}
        </div>
        <div className="absolute bottom-6 left-6 font-mono text-xs text-blue-800 animate-pulse" 
             style={{animationDelay: '1s'}}>
          {`const api = {}`}
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-xs text-cyan-800 animate-pulse" 
             style={{animationDelay: '1.5s'}}>
          {`return (<>)`}
        </div>
      </div>
      
      {/* Success Metrics */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-6">
        <div className="text-center animate-bounce-slow">
          <div className="text-lg font-bold text-indigo-700">100%</div>
          <div className="text-xs text-indigo-600">Success</div>
        </div>
        <div className="text-center animate-bounce-slow" style={{animationDelay: '0.3s'}}>
          <div className="text-lg font-bold text-purple-700">50+</div>
          <div className="text-xs text-purple-600">Projects</div>
        </div>
      </div>
      
      {/* Active Development */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 
        rounded-lg shadow-lg border border-indigo-200 animate-pulse">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-indigo-800">Active Development</span>
        </div>
      </div>
    </div>

    <div className="space-y-6 text-slate-700">
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-800 to-purple-700 bg-clip-text text-transparent">
        Development & Consulting Services
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Arvish Consulting Solutions is a specialist technology success partner delivering strategic business outcomes.
        We help organizations identify, build, implement, service and support Dynamics CRM solutions.
      </p>

      <ul className="space-y-3">
        {[
          "Due Diligence",
          "Discovery & Design", 
          "Build Core Components",
          "Build Integration Components",
          "Quality Assurance",
          "Rollout"
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700 
            group hover:text-red-600 transition-colors duration-300">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" 
                 style={{animationDelay: `${index * 0.2}s`}}></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>

  <style jsx>{`
    @keyframes flow {
      0% { left: 0; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: calc(100% - 1rem); opacity: 0; }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.9; transform: scale(1.05); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-flow { animation: flow linear infinite; }
    .animate-shimmer { animation: shimmer 2s linear infinite; }
    .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
    .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
  `}</style>
</section>

                       <section className="mt-24 py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* Sales Engagement Animation */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100 overflow-hidden">
      
      {/* Sales Dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg 
          flex items-center justify-center text-2xl text-white animate-pulse">
          💰
        </div>
        
        {/* Sales Graph Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32">
          <div className="w-full h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      {/* Sales Metrics */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-6">
        <div className="text-center animate-float">
          <div className="text-lg font-bold text-cyan-700">42%</div>
          <div className="text-xs text-cyan-600">Growth</div>
        </div>
        <div className="text-center animate-float" style={{animationDelay: '0.3s'}}>
          <div className="text-lg font-bold text-blue-700">98%</div>
          <div className="text-xs text-blue-600">Retention</div>
        </div>
      </div>
      
      {/* Sales Process */}
      {[
        { step: "Connect", icon: "🤝", color: "from-emerald-400 to-green-500" },
        { step: "Engage", icon: "💬", color: "from-blue-400 to-cyan-500" },
        { step: "Close", icon: "✅", color: "from-purple-400 to-pink-500" },
        { step: "Grow", icon: "📈", color: "from-amber-400 to-orange-500" }
      ].map((item, i) => (
        <div key={i} className="absolute" style={{
          top: `${25 + (i * 25)}%`,
          left: i % 2 === 0 ? '20%' : '70%'
        }}>
          <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg 
            flex items-center justify-center text-white shadow-md animate-bounce`}
            style={{ animationDelay: `${i * 0.2}s` }}>
            {item.icon}
          </div>
        </div>
      ))}
      
      {/* Active Deal */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-2 
        rounded-lg shadow animate-bounce-slow">
        <span className="text-sm font-bold text-blue-700">$125K Deal</span>
        <span className="text-xs text-blue-600 ml-2">Active</span>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 grid-rows-10 gap-1 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="bg-cyan-500 rounded-sm animate-pulse" 
                 style={{ animationDelay: `${i * 0.05}s` }}></div>
          ))}
        </div>
      </div>
    </div>

    <div className="space-y-6 text-slate-700">
      <h2 className="text-3xl font-bold text-blue-900">
        Customer Engagement (Sales)
      </h2>

      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Personal customer engagement
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          360-degree customer data view
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          Smarter selling strategies
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          Unified relationships
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          Predictive sales performance
        </li>
      </ul>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(-5px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-shimmer { animation: shimmer 2s linear infinite; }
    .animate-bounce { animation: bounce 2s ease-in-out infinite; }
    .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
  `}</style>
</section>

                       <section className="mt-24 py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* Service Desk Dashboard Animation (left side) */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 border border-red-100 overflow-hidden">
      
      {/* Service Desk Console */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg 
          flex items-center justify-center text-3xl text-white animate-pulse">
          💬
        </div>
        
        {/* Active Indicators */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
      </div>
      
      {/* Support Channels */}
      <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 
        rounded-lg flex items-center justify-center text-white animate-float">
        📞
      </div>
      
      <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 
        rounded-lg flex items-center justify-center text-white animate-float" style={{animationDelay: '0.3s'}}>
        📧
      </div>
      
      <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 
        rounded-lg flex items-center justify-center text-white animate-float" style={{animationDelay: '0.6s'}}>
        💬
      </div>
      
      <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 
        rounded-lg flex items-center justify-center text-white animate-float" style={{animationDelay: '0.9s'}}>
        🤖
      </div>
      
      {/* Resolution Flow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-1 bg-gradient-to-r from-red-300 to-orange-300 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
      </div>
      
      {/* Live Metrics */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-2 rounded-lg shadow animate-bounce-slow">
        <span className="text-sm font-bold text-red-700">2.4m</span>
        <span className="text-xs text-red-600 ml-1">Resolved</span>
      </div>
    </div>

    {/* Text Content (right side) */}
    <div className="space-y-6 text-slate-700">
      <h2 className="text-3xl font-bold text-blue-900">
        Unified Service Desk
      </h2>

      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Faster customer issue resolution
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          Personalized interactions
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          Preferred customer channels
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          Unified customer experience
        </li>
        <li className="flex items-center gap-3 text-gray-700 group hover:text-red-600 transition-colors duration-300">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          Intelligent knowledge search
        </li>
      </ul>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(5deg); }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(-8px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-shimmer { animation: shimmer 2s linear infinite; }
    .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
  `}</style>
</section>
                    </>
                )}

                {/* ================= DIGITAL INTEGRATION ================= */}
                {serviceName === "digital-integration" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Digital Integration
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Seamless System Integration for Modern Enterprises
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Connect disparate systems and applications with our comprehensive integration solutions.
                                    We enable seamless data flow, process automation, and real-time synchronization across
                                    your entire technology ecosystem.
                                </p>
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🔗</span>
                                        <span className="font-semibold text-orange-900">Integration Excellence</span>
                                    </div>
                                    <p className="text-slate-700">Our integration solutions reduce <span className="font-bold text-orange-600">data silos by 90%</span> and improve <span className="font-bold text-orange-600">operational efficiency by 65%</span>.</p>
                                </div>
                            </div>
                            <div className="flex justify-center animate-fadeInRight">
                                <img
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
                                    alt="Digital Integration"
                                    className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300"
                                />
                            </div>
                        </div>
                    </>
                )}

                {/* ================= CLOUD OPERATIONS ================= */}
                {(serviceName === "cloud-operations" || serviceName === "intelligent-it-&-cloud") && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Cloud Operations
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Intelligent Cloud Management & Operations
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Optimize your cloud infrastructure with our comprehensive cloud operations services.
                                    From migration to ongoing management, we ensure your cloud environment is secure,
                                    scalable, and cost-effective.
                                </p>
                                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">☁️</span>
                                        <span className="font-semibold text-cyan-900">Cloud Excellence</span>
                                    </div>
                                    <p className="text-slate-700">Achieve <span className="font-bold text-cyan-600">99.9% uptime</span> and <span className="font-bold text-cyan-600">40% cost optimization</span> with our cloud operations expertise.</p>
                                </div>
                            </div>
                            <CloudOperationsIllustration />
                        </div>
                    </>
                )}

                {/* ================= PROCESS AUTOMATION ================= */}
                {serviceName === "process-automation" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Process Automation
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Intelligent Process Automation for Business Excellence
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Transform your business processes with intelligent automation solutions.
                                    We help you eliminate manual tasks, reduce errors, and accelerate operations
                                    through RPA, workflow automation, and AI-powered process optimization.
                                </p>
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🔄</span>
                                        <span className="font-semibold text-purple-900">Automation Impact</span>
                                    </div>
                                    <p className="text-slate-700">Our automation solutions deliver <span className="font-bold text-purple-600">70% faster processing</span> and <span className="font-bold text-purple-600">95% error reduction</span>.</p>
                                </div>
                            </div>
                            <ServiceNowIllustration />
                        </div>
                    </>
                )}



                {/* ================= QUALITY ENGINEERING ================= */}
                {serviceName === "quality-engineering" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 qe-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Quality Engineering
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Delivering reliable and high-quality software
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Our testing frameworks ensure performance,
                                    security, and reliability through automation,
                                    continuous testing, and QA best practices.
                                </p>
                            </div>
                            <QualityEngineeringIllustration />
                        </div>
                        {/* ================= QUALITY ENGINEERING & ASSURANCE ================= */}

<section className="py-16 px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Quality Assurance Cube Animation */}
    <div className="relative w-full h-[300px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 overflow-hidden">
      
      {/* 3D Cube Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-32 h-32 perspective-1000">
          {/* Rotating Cube */}
          <div className="absolute w-full h-full animate-3d-spin">
            {/* Front Face */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg 
              flex items-center justify-center text-white text-2xl shadow-xl border-4 border-white/30">
              QA
            </div>
            
            {/* Top Face */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg 
              flex items-center justify-center text-white text-xl shadow-lg transform -rotate-x-90 
              origin-bottom border-2 border-white/20">
              Test
            </div>
            
            {/* Right Face */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg 
              flex items-center justify-center text-white text-xl shadow-lg transform rotate-y-90 
              origin-left border-2 border-white/20">
              Check
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Quality Indicators */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4">
        {["✅", "⚡", "🔄", "📊", "🔒"].map((icon, i) => (
          <div key={i} className="text-xl animate-float" 
               style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}>
            {icon}
          </div>
        ))}
      </div>
      
      {/* Quality Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-48 border-2 border-blue-300/40 rounded-full animate-pulse-slow"></div>
        <div className="w-64 h-64 border border-purple-300/30 rounded-full animate-pulse-slow" 
             style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Quality Score Display */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 
        rounded-lg shadow-lg border border-blue-200 animate-bounce-slow">
        <div className="text-center">
          <div className="text-lg font-bold text-blue-700">99.9%</div>
          <div className="text-xs text-blue-600">Quality Score</div>
        </div>
      </div>
      
      {/* Testing Status */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="text-sm font-medium text-green-700">All Tests Pass</div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 14px, #3b82f6 14px, #3b82f6 16px)`,
          backgroundSize: '100% 16px'
        }}></div>
      </div>
    </div>

    <div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quality Engineering and Assurance focuses on delivering reliable,
        scalable, and high-performing applications across digital ecosystems.
        It ensures software quality is embedded throughout the development
        lifecycle.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our Quality Engineering services include:
      </p>

      <ul className="space-y-3">
        {[
          { service: "End-to-end functional testing", icon: "🧪", color: "from-blue-100 to-cyan-100" },
          { service: "Automation strategy and execution", icon: "🤖", color: "from-purple-100 to-pink-100" },
          { service: "Performance and load testing", icon: "⚡", color: "from-amber-100 to-orange-100" },
          { service: "Security and penetration testing", icon: "🔒", color: "from-emerald-100 to-green-100" },
          { service: "Continuous quality monitoring", icon: "📊", color: "from-indigo-100 to-blue-100" }
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-3 p-3 rounded-lg hover:scale-105 
            transition-all duration-300 bg-gradient-to-r hover:shadow-md">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} 
              flex items-center justify-center text-xl`}>
              {item.icon}
            </div>
            <span className="text-gray-700 font-medium">{item.service}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <style jsx>{`
    @keyframes 3d-spin {
      0% {
        transform: rotateX(0) rotateY(0) rotateZ(0);
      }
      25% {
        transform: rotateX(90deg) rotateY(90deg) rotateZ(0);
      }
      50% {
        transform: rotateX(180deg) rotateY(180deg) rotateZ(90deg);
      }
      75% {
        transform: rotateX(270deg) rotateY(270deg) rotateZ(180deg);
      }
      100% {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
      }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      33% { transform: translateY(-10px) rotate(5deg); }
      66% { transform: translateY(5px) rotate(-5deg); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.05); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .perspective-1000 { perspective: 1000px; }
    .animate-3d-spin { animation: 3d-spin 8s linear infinite; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
    .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `}</style>
</section>

<section className="bg-gray-50 py-16">
  <h2 className="text-center text-3xl font-semibold text-blue-900 mb-10">
    The Competitive Advantage We Offer
  </h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Faster time-to-market with test automation
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Reduced production defects
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Improved test coverage and accuracy
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Enhanced application reliability
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow col-span-2 text-center">
      ✔ Continuous quality assurance across SDLC
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Automation Gears Animation */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100 overflow-hidden">
      
      {/* Interlocking Gears */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-8">
        
        {/* Large Gear */}
        <div className="w-20 h-20 relative animate-gear-slow">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"></div>
          {/* Gear Teeth */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-8 
              bg-gradient-to-b from-cyan-400 to-blue-500 rounded-t-md"
              style={{ transform: `rotate(${i * 45}deg)` }}>
            </div>
          ))}
          <div className="absolute inset-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full"></div>
        </div>
        
        {/* Small Gear */}
        <div className="w-14 h-14 relative animate-gear-fast">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full"></div>
          {/* Gear Teeth */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-6 
              bg-gradient-to-b from-emerald-400 to-green-500 rounded-t-sm"
              style={{ transform: `rotate(${i * 60}deg)` }}>
            </div>
          ))}
          <div className="absolute inset-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full"></div>
        </div>
      </div>
      
      {/* Moving Test Cases */}
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        {["✅", "🔄", "⚡", "📊"].map((icon, i) => (
          <div key={i} className="text-2xl animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
            {icon}
          </div>
        ))}
      </div>
      
      {/* Test Flow Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        <div className="text-cyan-600 animate-bounce-right">➡️</div>
      </div>
      
      {/* Code Blocks */}
      <div className="absolute top-4 left-4 opacity-20">
        <div className="font-mono text-xs text-cyan-800 animate-pulse">{`{ test: "automated" }`}</div>
      </div>
      <div className="absolute bottom-4 right-4 opacity-20">
        <div className="font-mono text-xs text-blue-800 animate-pulse" style={{animationDelay: '0.5s'}}>
          {`-> CI/CD`}
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Test Automation Strategy
      </h3>

      <p className="text-gray-700 leading-relaxed">
        We design scalable automation frameworks that accelerate testing cycles,
        improve accuracy, and support continuous integration and delivery.
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes gear-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes gear-fast {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes bounce-right {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.5; }
    }
    .animate-gear-slow { animation: gear-slow 5s linear infinite; }
    .animate-gear-fast { animation: gear-fast 3s linear infinite; }
    .animate-float { animation: float 2s ease-in-out infinite; }
    .animate-shimmer { animation: shimmer 2s linear infinite; }
    .animate-bounce-right { animation: bounce-right 1s ease-in-out infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
  `}</style>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Performance Graph Animation */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100 overflow-hidden">
      
      {/* Performance Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 grid-rows-10 gap-1 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="bg-current rounded-sm animate-pulse" 
                 style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
      
      {/* Performance Bars */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between h-32 gap-2">
        {[30, 60, 45, 80, 55, 70, 40, 90, 65, 50].map((height, i) => (
          <div key={i} className="flex-1 relative">
            <div 
              className="w-full bg-gradient-to-t from-orange-500 to-red-500 rounded-t animate-rise"
              style={{ 
                height: `${height}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
            
            {/* Peak Load Indicator */}
            {height > 70 && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600 animate-bounce">
                ⚡
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Moving Speed Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1">
        <div className="h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-move-right"></div>
      </div>
      
      {/* Performance Dots */}
      {[25, 50, 75].map((percent, i) => (
        <div key={i} className="absolute bottom-4 w-2 h-2 bg-current rounded-full animate-pulse"
             style={{ 
               left: `${percent}%`,
               animationDelay: `${i * 0.5}s`
             }}></div>
      ))}
      
      {/* Speed Indicator */}
      <div className="absolute top-4 right-4 bg-white/90 px-3 py-2 rounded-lg shadow animate-bounce-slow">
        <div className="text-sm font-bold text-red-600">⚡ Fast</div>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Performance & Load Testing
      </h3>

      <p className="text-gray-700 leading-relaxed">
        We validate application performance under real-world conditions to
        ensure scalability, stability, and responsiveness during peak loads.
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes rise {
      from { height: 0%; }
      to { height: var(--target-height); }
    }
    @keyframes move-right {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-rise { animation: rise 1s ease-out forwards; }
    .animate-move-right { animation: move-right 2s linear infinite; }
    .animate-bounce { animation: bounce 0.5s ease-in-out infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
  `}</style>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Security Shield Animation */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 border border-blue-100 overflow-hidden">
      
      {/* Rotating Shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-32 h-32">
          {/* Outer Shield */}
          <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-spin-slow"></div>
          
          {/* Middle Shield */}
          <div className="absolute inset-6 border-4 border-red-400 rounded-full animate-spin-reverse"></div>
          
          {/* Inner Shield */}
          <div className="absolute inset-12 border-4 border-emerald-400 rounded-full flex items-center justify-center text-3xl animate-pulse">
            🔒
          </div>
        </div>
      </div>
      
      {/* Scanning Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full 
        bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-scan"></div>
      
      {/* Security Badges */}
      {[
        { icon: "✅", pos: "top-4 left-4", delay: "0s" },
        { icon: "🛡️", pos: "top-4 right-4", delay: "0.3s" },
        { icon: "🔐", pos: "bottom-4 left-4", delay: "0.6s" },
        { icon: "⚡", pos: "bottom-4 right-4", delay: "0.9s" }
      ].map((badge, i) => (
        <div key={i} className={`absolute ${badge.pos} text-2xl animate-float`} 
             style={{ animationDelay: badge.delay }}>
          {badge.icon}
        </div>
      ))}
      
      {/* Compliance Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-48 border-2 border-slate-300/50 rounded-full animate-pulse-slow"></div>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Security & Compliance Testing
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Our security testing services identify vulnerabilities, ensure compliance,
        and protect applications from evolving cyber threats.
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spin-reverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes scan {
      0% { transform: translateY(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(100%); opacity: 0; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(0.95); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
    .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-scan { animation: scan 3s linear infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
  `}</style>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Quality Pipeline Animation */}
    <div className="relative w-full h-[250px] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100 overflow-hidden">
      
      {/* Pipeline Flow */}
      <div className="absolute top-1/2 left-4 right-4 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Stages */}
      {["Code", "Test", "Deploy", "Monitor"].map((stage, i) => (
        <div key={i} className="absolute top-1/2 -translate-y-1/2" 
             style={{ left: `${25 * (i + 1)}%` }}>
          
          {/* Stage Node */}
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br 
            ${i === 0 ? 'from-blue-500 to-cyan-500' : 
              i === 1 ? 'from-amber-500 to-orange-500' : 
              i === 2 ? 'from-emerald-500 to-green-500' : 
              'from-purple-500 to-pink-500'} 
            flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce-slow`}
            style={{ animationDelay: `${i * 0.3}s` }}>
            {stage}
          </div>
          
          {/* Animated Checkmark */}
          {i > 0 && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 
              bg-green-500 rounded-full flex items-center justify-center text-white text-xs animate-fade-in"
              style={{ animationDelay: `${i * 0.8}s`, animationDuration: '1s' }}>
              ✓
            </div>
          )}
        </div>
      ))}
      
      {/* Moving Quality Indicator */}
      <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 
        bg-white rounded-full shadow-lg animate-slide-right"
        style={{ animationDuration: '4s' }}>
        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
      </div>
      
      {/* Background Checks */}
      <div className="absolute top-4 left-4 text-emerald-600 animate-pulse">✅</div>
      <div className="absolute bottom-4 right-4 text-green-600 animate-pulse" style={{animationDelay: '0.5s'}}>✅</div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Continuous Quality Engineering
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        We embed quality into DevOps pipelines to enable continuous testing,
        faster feedback, and proactive defect prevention.
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes slide-right {
      0% { left: 0; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: calc(100% - 1rem); opacity: 0; }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes fade-in {
      0% { opacity: 0; transform: scale(0); }
      100% { opacity: 1; transform: scale(1); }
    }
    .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
    .animate-slide-right { animation: slide-right 4s linear infinite; }
    .animate-shimmer { animation: shimmer 2s infinite; }
    .animate-fade-in { animation: fade-in 1s ease-out forwards; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `}</style>
</section>

                    </>
                )}

                {/* ================= SERVICENOW PLATFORM ================= */}
                {serviceName === "servicenow-platform" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    ServiceNow Platform
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Simplifying enterprise workflows
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    We implement ServiceNow solutions that automate
                                    workflows, improve service delivery, and enhance
                                    IT service management efficiency.
                                </p>
                            </div>
                            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                              <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-semibold text-gray-800">ServiceNow Platform Analytics</span>
                                <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-bold animate-pulse">ACTIVE</span>
                              </div>
                              
                              <div className="flex gap-6 mb-4">
                                <div className="flex flex-col">
                                  <span className="text-blue-600 text-xl font-bold animate-bounce">1.2K</span>
                                  <span className="text-gray-500 text-xs">Workflows/day</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-purple-600 text-xl font-bold animate-pulse">98.5%</span>
                                  <span className="text-gray-500 text-xs">Uptime</span>
                                </div>
                              </div>

                              <svg viewBox="0 0 280 120" className="w-full h-32">
                                <defs>
                                  <linearGradient id="serviceGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#1e40af" stopOpacity="0.4" />
                                  </linearGradient>
                                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                                  </linearGradient>
                                </defs>
                                
                                {/* Animated grid lines */}
                                {[30, 60, 90].map((y, i) => (
                                  <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2">
                                    <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                                  </line>
                                ))}
                                
                                {/* Animated data bars */}
                                {[65, 78, 85, 72, 90, 88, 95].map((height, i) => (
                                  <rect
                                    key={i}
                                    x={i * 35 + 15}
                                    y={120 - height}
                                    width="20"
                                    height={height}
                                    rx="2"
                                    fill="url(#serviceGradient)"
                                  >
                                    <animate attributeName="height" values="0;{height};{height}" dur="1.5s" begin={`${i * 0.2}s`} />
                                    <animate attributeName="y" values="120;{120 - height};{120 - height}" dur="1.5s" begin={`${i * 0.2}s`} />
                                  </rect>
                                ))}
                                
                                {/* Animated line chart */}
                                <polyline
                                  points="25,55 60,42 95,35 130,48 165,30 200,32 235,25"
                                  fill="none"
                                  stroke="#10b981"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeDasharray="300"
                                >
                                  <animate attributeName="stroke-dashoffset" values="300;0" dur="3s" />
                                </polyline>
                                
                                {/* Animated data points */}
                                {[[25,55], [60,42], [95,35], [130,48], [165,30], [200,32], [235,25]].map(([x,y], i) => (
                                  <circle key={i} cx={x} cy={y} r="3" fill="#10b981">
                                    <animate attributeName="r" values="0;3;3" dur="0.5s" begin={`${2 + i * 0.2}s`} />
                                    <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${2 + i * 0.2}s`} />
                                  </circle>
                                ))}
                                
                                {/* Floating data particles */}
                                <circle r="2" fill="#3b82f6" opacity="0.6">
                                  <animateMotion dur="4s" repeatCount="indefinite">
                                    <path d="M 50,100 Q 140,20 230,80" />
                                  </animateMotion>
                                </circle>
                                <circle r="1.5" fill="#10b981" opacity="0.4">
                                  <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
                                    <path d="M 30,80 Q 150,30 250,60" />
                                  </animateMotion>
                                </circle>
                              </svg>
                            </div>
                        </div>
                        {/* ================= SERVICENOW PLATFORM ================= */}

<section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Animated ServiceNow Workflow Illustration */}
    <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Platform Base */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-full"></div>
      
      {/* Animated Process Flow */}
      <div className="relative w-full h-full">
        
        {/* Flow Line */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        
        {/* Process Nodes */}
        {[
          { icon: "⚙️", label: "ITSM", color: "from-blue-500 to-blue-600", delay: "0s", pos: "left-8" },
          { icon: "📊", label: "ITOM", color: "from-indigo-500 to-indigo-600", delay: "0.2s", pos: "left-1/4" },
          { icon: "💼", label: "ITAM", color: "from-purple-500 to-purple-600", delay: "0.4s", pos: "left-1/2" },
          { icon: "👥", label: "HRSD", color: "from-pink-500 to-pink-600", delay: "0.6s", pos: "right-1/4" },
          { icon: "💬", label: "CSM", color: "from-cyan-500 to-cyan-600", delay: "0.8s", pos: "right-8" }
        ].map((node, i) => (
          <div key={i} className={`absolute top-1/2 ${node.pos} -translate-x-1/2 -translate-y-1/2`}>
            {/* Node Connection */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-300/50 to-transparent"></div>
            
            {/* Node */}
            <div className={`relative w-16 h-16 bg-gradient-to-br ${node.color} rounded-2xl shadow-lg 
              flex items-center justify-center text-2xl animate-float group cursor-pointer`}
              style={{ animationDelay: node.delay }}>
              
              {/* Icon */}
              <span className="group-hover:scale-110 transition-transform duration-300">{node.icon}</span>
              
              {/* Pulsing Ring */}
              <div className="absolute -inset-2 border-2 border-current rounded-2xl opacity-0 group-hover:opacity-30 animate-ping"></div>
              
              {/* Tooltip/Label */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg 
                text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {node.label}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"></div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Data Flow Animation */}
        <div className="absolute top-1/2 left-8 right-8 h-2 -translate-y-1/2 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="absolute top-0 w-4 h-4 bg-white rounded-full shadow-lg animate-flow"
              style={{
                left: `${-20 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '6s'
              }}>
              <div className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Cloud Platform Base */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 
          backdrop-blur-sm rounded-lg border border-white/20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full 
        backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full flex items-center justify-center text-blue-600">☁️</div>
      </div>
      
      <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg 
        backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full flex items-center justify-center text-purple-600">🔄</div>
      </div>
    </div>

    {/* Text Content (Remaining as it is) */}
    <div>
      <p className="text-gray-700 leading-relaxed mb-4">
        ServiceNow is a cloud-based digital workflow platform that helps
        enterprises automate, optimize, and modernize business operations
        across IT, HR, customer service, and security.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our ServiceNow services include:
      </p>

      <ul className="space-y-3">
        {[
          { service: "IT Service Management (ITSM)", icon: "⚙️", color: "text-blue-600" },
          { service: "IT Operations Management (ITOM)", icon: "📊", color: "text-indigo-600" },
          { service: "IT Asset Management (ITAM)", icon: "💼", color: "text-purple-600" },
          { service: "HR Service Delivery (HRSD)", icon: "👥", color: "text-pink-600" },
          { service: "Customer Service Management (CSM)", icon: "💬", color: "text-cyan-600" }
        ].map((item, index) => (
          <li key={index} 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 
                     hover:translate-x-2 group">
            <div className={`w-10 h-10 rounded-lg ${item.color.replace('text-', 'bg-')} bg-opacity-10 
              flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
              {item.service}
            </span>
            <div className="ml-auto w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100 
              transition-opacity duration-300"></div>
          </li>
        ))}
      </ul>
      
      {/* Stats Bar */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="group">
            <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="group">
            <div className="text-2xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="group">
            <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes flow {
      0% {
        transform: translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateX(calc(100% + 20px));
        opacity: 0;
      }
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-flow {
      animation: flow linear infinite;
    }

    .animate-shimmer {
      animation: shimmer 2s infinite;
    }

    .animate-ping {
      animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `}</style>
</section>



<section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Animated ITSM Workflow Visualization */}
    <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 overflow-hidden border border-slate-700">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px),
                            linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Floating ITSM Nodes in Workflow */}
      <div className="relative w-full h-full">
        
        {/* Main Workflow Line */}
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
        
        {/* ITSM Nodes with Animations */}
        {[
          { 
            icon: "🚨", 
            label: "Incident", 
            color: "from-red-500 to-orange-500",
            metric: "MTTR: 2.4h",
            status: "active",
            delay: "0s",
            pos: "left-4"
          },
          { 
            icon: "🔍", 
            label: "Problem", 
            color: "from-orange-500 to-yellow-500",
            metric: "Root Cause",
            status: "analyzing",
            delay: "0.5s",
            pos: "left-1/4"
          },
          { 
            icon: "🔄", 
            label: "Change", 
            color: "from-blue-500 to-cyan-500",
            metric: "99.9% Success",
            status: "pending",
            delay: "1s",
            pos: "left-1/2"
          },
          { 
            icon: "📋", 
            label: "Request", 
            color: "from-green-500 to-emerald-500",
            metric: "Auto-Fulfill",
            status: "completed",
            delay: "1.5s",
            pos: "right-1/4"
          }
        ].map((node, i) => (
          <div key={i} className={`absolute top-1/2 ${node.pos} -translate-x-1/2 -translate-y-1/2`}>
            
            {/* Node Connection Line */}
            <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-cyan-400/30 to-transparent 
              origin-left rotate-90 group-hover:rotate-0 transition-transform duration-500"></div>
            
            {/* Node Container */}
            <div className={`relative w-20 h-20 bg-gradient-to-br ${node.color} rounded-2xl shadow-2xl 
              flex flex-col items-center justify-center group animate-float hover:scale-110 transition-all duration-300`}
              style={{ animationDelay: node.delay }}>
              
              {/* Icon */}
              <div className="text-2xl mb-1 group-hover:animate-bounce">{node.icon}</div>
              
              {/* Label */}
              <div className="text-xs font-bold text-white">{node.label}</div>
              
              {/* Status Indicator */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900
                ${node.status === 'active' ? 'bg-red-500 animate-pulse' : 
                  node.status === 'analyzing' ? 'bg-yellow-500 animate-pulse' : 
                  node.status === 'pending' ? 'bg-blue-500' : 'bg-green-500'}`}>
              </div>
              
              {/* Metric Tooltip */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg 
                text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap 
                border border-slate-700 shadow-lg">
                {node.metric}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 
                  border-l-transparent border-r-transparent border-b-slate-800"></div>
              </div>
              
              {/* Node Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-current to-transparent rounded-2xl 
                opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
        
        {/* Workflow Animation - Moving Tickets */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 
            rounded-lg shadow-lg animate-flow-ticket flex items-center justify-center text-xs text-white font-bold"
            style={{
              left: `${-20 + i * 30}%`,
              top: '45%',
              animationDelay: `${i * 0.3}s`,
              animationDuration: '10s'
            }}>
            <span className="animate-pulse">🎫</span>
          </div>
        ))}
        
        {/* ITIL Best Practices Banner */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-800/80 
          backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-700 shadow-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-cyan-300">ITIL v4 Best Practices</span>
          <div className="text-xs text-slate-400 ml-2">✓ Aligned</div>
        </div>
        
        {/* Live Metrics Display */}
        <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="text-xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">300%</div>
              <div className="text-xs text-slate-400">ROI Increase</div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div>
              <div className="text-xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-300">85%</div>
              <div className="text-xs text-slate-400">Cost Reduction</div>
            </div>
          </div>
        </div>
        
        {/* Service Level Indicator */}
        <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-700 shadow-lg">
          <div className="text-center">
            <div className="text-sm font-bold text-white flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              SLA: 99.9%
            </div>
            <div className="text-xs text-slate-400 mt-1">Uptime</div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + Math.random() * 8}s`
              }}>
            </div>
          ))}
          
          {/* Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <path d="M50,100 Q100,50 150,100 Q200,150 250,100" 
                  stroke="#22d3ee" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" />
            <path d="M50,200 Q100,150 150,200 Q200,250 250,200" 
                  stroke="#22d3ee" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" style={{animationDelay: '0.5s'}} />
          </svg>
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-700 to-blue-900 bg-clip-text text-transparent mb-6">
        IT Service Management (ITSM)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        We implement ServiceNow ITSM solutions that streamline incident,
        problem, change, and request management while aligning with ITIL
        best practices.
      </p>

      {/* ITSM Process Flow */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { phase: "Identify", desc: "Detect and log incidents", color: "bg-red-100 text-red-800", icon: "📝" },
            { phase: "Analyze", desc: "Root cause investigation", color: "bg-orange-100 text-orange-800", icon: "🔍" },
            { phase: "Resolve", desc: "Implement solutions", color: "bg-blue-100 text-blue-800", icon: "🛠️" },
            { phase: "Improve", desc: "Prevent recurrence", color: "bg-green-100 text-green-800", icon: "📈" }
          ].map((step, index) => (
            <div key={index} className={`p-4 rounded-xl ${step.color} border border-current border-opacity-20 
              hover:scale-105 transition-transform duration-300 group`}>
              <div className="flex items-center gap-3">
                <div className="text-xl">{step.icon}</div>
                <div>
                  <div className="font-bold">{step.phase}</div>
                  <div className="text-sm opacity-80">{step.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 flex items-center gap-2">
            <span className="text-cyan-600">⚡</span> Key Features
          </h4>
          {[
            "Automated Incident Management",
            "Problem Management with Root Cause Analysis",
            "Change Management with Risk Assessment",
            "Service Request Catalog & Fulfillment",
            "Configuration Management Database (CMDB)",
            "Service Level Management (SLAs)"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Stats */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
        <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="text-xl">🎯</span> Measurable Results
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center group">
            <div className="text-2xl font-bold text-cyan-600 group-hover:scale-110 transition-transform duration-300">60%</div>
            <div className="text-sm text-gray-700">Faster Resolution</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">45%</div>
            <div className="text-sm text-gray-700">Cost Savings</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">99.9%</div>
            <div className="text-sm text-gray-700">SLA Compliance</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-8px) rotate(3deg);
      }
      75% {
        transform: translateY(4px) rotate(-3deg);
      }
    }

    @keyframes flow-ticket {
      0% {
        transform: translateX(0) translateY(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateX(calc(100vw - 100px)) translateY(var(--random-y));
        opacity: 0;
      }
    }

    @keyframes dash {
      to {
        stroke-dashoffset: 20;
      }
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-flow-ticket {
      animation: flow-ticket linear infinite;
    }

    .animate-dash {
      animation: dash 1s linear infinite;
    }

    .animate-ping {
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-bounce {
      animation: bounce 0.5s ease-in-out;
    }

    .animate-shimmer {
      animation: shimmer 2s infinite;
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `}</style>
</section>

<section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t bg-gradient-to-b from-white to-slate-50">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* Animated ITOM Visualization */}
    <div className="relative w-full h-[350px] md:h-[400px] bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 rounded-2xl p-6 overflow-hidden border border-blue-100 shadow-lg">
      
      {/* Background Network Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Central Monitoring Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Pulsing Core */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-2xl 
            flex items-center justify-center text-white animate-pulse-slow group">
            <div className="text-center">
              <div className="text-2xl mb-1 group-hover:animate-spin-slow">⚙️</div>
              <div className="text-xs font-bold">ITOM Core</div>
            </div>
            
            {/* Outer Rings */}
            <div className="absolute -inset-4 border-2 border-blue-400 rounded-2xl animate-ping opacity-0 group-hover:opacity-100"></div>
            <div className="absolute -inset-6 border border-cyan-300 rounded-2xl opacity-0 group-hover:opacity-30 animate-pulse-slow"></div>
          </div>
          
          {/* Real-time Metrics Display */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 
            rounded-xl shadow-lg border border-blue-200 animate-float">
            <div className="text-center">
              <div className="text-xs text-blue-600 font-bold">Real-time</div>
              <div className="text-lg font-bold text-cyan-700">99.97%</div>
              <div className="text-xs text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Infrastructure Nodes - Arranged in Circular Pattern */}
      {[
        { 
          type: "Server", 
          icon: "🖥️", 
          status: "healthy", 
          metrics: { cpu: "32%", mem: "64%" },
          color: "from-emerald-500 to-green-500",
          pos: "top-8 left-1/4",
          delay: "0s"
        },
        { 
          type: "Database", 
          icon: "🗄️", 
          status: "warning", 
          metrics: { cpu: "85%", mem: "72%" },
          color: "from-yellow-500 to-orange-500",
          pos: "top-8 right-1/4",
          delay: "0.2s"
        },
        { 
          type: "Network", 
          icon: "🌐", 
          status: "healthy", 
          metrics: { cpu: "28%", mem: "41%" },
          color: "from-blue-500 to-cyan-500",
          pos: "bottom-8 left-1/4",
          delay: "0.4s"
        },
        { 
          type: "Storage", 
          icon: "💾", 
          status: "critical", 
          metrics: { cpu: "92%", mem: "88%" },
          color: "from-red-500 to-pink-500",
          pos: "bottom-8 right-1/4",
          delay: "0.6s"
        },
        { 
          type: "VM", 
          icon: "🖧", 
          status: "healthy", 
          metrics: { cpu: "45%", mem: "58%" },
          color: "from-purple-500 to-indigo-500",
          pos: "top-1/2 left-8",
          delay: "0.8s"
        },
        { 
          type: "Container", 
          icon: "📦", 
          status: "healthy", 
          metrics: { cpu: "38%", mem: "49%" },
          color: "from-teal-500 to-emerald-500",
          pos: "top-1/2 right-8",
          delay: "1s"
        }
      ].map((node, i) => (
        <div key={i} className={`absolute ${node.pos} -translate-x-1/2 -translate-y-1/2`}>
          
          {/* Connection Line to Core */}
          <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-300/30 to-transparent 
            origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
            style={{ transform: `rotate(${i * 60}deg)` }}></div>
          
          {/* Node Container */}
          <div className={`relative w-16 h-16 bg-gradient-to-br ${node.color} rounded-xl shadow-lg 
            flex flex-col items-center justify-center group animate-float hover:scale-125 transition-transform duration-300`}
            style={{ animationDelay: node.delay }}>
            
            {/* Icon */}
            <div className="text-lg group-hover:animate-bounce">{node.icon}</div>
            
            {/* Status Indicator */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white
              ${node.status === 'healthy' ? 'bg-green-500 animate-pulse' : 
                node.status === 'warning' ? 'bg-yellow-500 animate-pulse' : 
                'bg-red-500 animate-pulse'}`}>
            </div>
            
            {/* Detailed Metrics on Hover */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-2 
              rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 
              backdrop-blur-sm border border-slate-700 shadow-xl min-w-[120px] z-10">
              <div className="font-bold text-white mb-1">{node.type}</div>
              <div className="flex justify-between gap-2">
                <div>
                  <div className="text-cyan-300">CPU</div>
                  <div className="font-bold">{node.metrics.cpu}</div>
                </div>
                <div>
                  <div className="text-cyan-300">MEM</div>
                  <div className="font-bold">{node.metrics.mem}</div>
                </div>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 
                border-l-transparent border-r-transparent border-b-slate-900"></div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Data Flow Animation - Monitoring Data */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Animated Rings */}
        <div className="absolute inset-0 border-2 border-blue-300/30 rounded-full animate-spin-slow"
          style={{ animationDuration: '20s' }}></div>
        <div className="absolute inset-8 border border-cyan-300/20 rounded-full animate-spin-reverse"
          style={{ animationDuration: '15s' }}></div>
        
        {/* Floating Data Points */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 
            rounded-full animate-float" style={{
              left: `${Math.cos(i * 45 * Math.PI/180) * 120 + 50}%`,
              top: `${Math.sin(i * 45 * Math.PI/180) * 120 + 50}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '4s'
            }}>
          </div>
        ))}
      </div>
      
      {/* Alert Panel */}
      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-50 to-red-50 
        backdrop-blur-sm px-4 py-3 rounded-xl border border-orange-200 shadow-lg animate-pulse-slow">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div className="text-sm font-medium text-orange-800">Alert: Storage 92%</div>
          <div className="text-xs text-orange-600 ml-2 bg-orange-100 px-2 py-1 rounded animate-pulse">
            🔄 Auto-Remediating
          </div>
        </div>
      </div>
      
      {/* Health Dashboard */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl 
        border border-blue-200 shadow-lg">
        <div className="text-center">
          <div className="text-xs text-blue-600 font-bold mb-1">Infrastructure Health</div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-lg font-bold text-green-700">83%</div>
          </div>
        </div>
      </div>
      
      {/* Performance Stats */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl 
        border border-blue-200 shadow-lg">
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="group">
            <div className="text-xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">1.2M</div>
            <div className="text-xs text-gray-600">Events/Day</div>
          </div>
          <div className="group">
            <div className="text-xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">0.3s</div>
            <div className="text-xs text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
      
      {/* Automated Workflow Indicator */}
      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-50 to-green-50 
        backdrop-blur-sm px-4 py-2 rounded-xl border border-emerald-200 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="text-lg">⚡</div>
          <div className="text-sm font-medium text-emerald-800">85% Auto-Resolved</div>
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent mb-6">
        IT Operations Management (ITOM)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Gain real-time visibility into your infrastructure with proactive
        monitoring, intelligent event management, and automated remediation —
        delivered through a stable and unified IT operations platform.
      </p>

      {/* Enhanced Feature List */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { feature: "Real-time Monitoring", icon: "👁️", color: "bg-blue-100 text-blue-800" },
            { feature: "Event Correlation", icon: "🧩", color: "bg-purple-100 text-purple-800" },
            { feature: "Health Analytics", icon: "📊", color: "bg-cyan-100 text-cyan-800" },
            { feature: "Auto-Remediation", icon: "⚡", color: "bg-emerald-100 text-emerald-800" }
          ].map((item, index) => (
            <div key={index} className={`p-4 rounded-xl ${item.color} border border-current border-opacity-20 
              hover:scale-105 transition-transform duration-300 group`}>
              <div className="flex items-center gap-3">
                <div className="text-xl group-hover:animate-bounce">{item.icon}</div>
                <div className="text-sm font-medium">{item.feature}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Capabilities */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 flex items-center gap-2">
            <span className="text-cyan-600">🔧</span> Key Capabilities
          </h4>
          {[
            "Real-time infrastructure visibility across hybrid environments",
            "Intelligent event correlation and root cause analysis",
            "Continuous health monitoring and predictive analytics",
            "Automated remediation workflows and incident response",
            "Performance optimization and capacity planning",
            "Comprehensive dashboards and reporting"
          ].map((capability, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 
                flex items-center justify-center text-cyan-600 text-xs mt-0.5 group-hover:scale-125 
                transition-transform duration-300">
                ✓
              </div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {capability}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
          <span className="text-xl">📈</span> Operational Benefits
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center group">
            <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">70%</div>
            <div className="text-sm text-gray-700">MTTR Reduction</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-cyan-600 group-hover:scale-110 transition-transform duration-300">50%</div>
            <div className="text-sm text-gray-700">Cost Savings</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">99.9%</div>
            <div className="text-sm text-gray-700">Availability</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-6px) rotate(2deg);
      }
      75% {
        transform: translateY(3px) rotate(-2deg);
      }
    }

    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes spin-reverse {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes pulse-slow {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }

    .animate-spin-reverse {
      animation: spin-reverse 25s linear infinite;
    }

    .animate-ping {
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-bounce {
      animation: bounce 0.5s ease-in-out;
    }

    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `}</style>
</section>


<section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t bg-gradient-to-b from-white to-slate-50">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* Animated HRSD Visualization */}
    <div className="relative w-full h-[350px] md:h-[400px] bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl p-6 overflow-hidden border border-amber-100 shadow-lg">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #f59e0b 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Central HR Service Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* HR Service Center */}
          <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-2xl 
            flex items-center justify-center text-white animate-pulse-slow group">
            <div className="text-center">
              <div className="text-2xl mb-1 group-hover:animate-bounce">🏢</div>
              <div className="text-xs font-bold">HR Hub</div>
            </div>
            
            {/* Pulse Rings */}
            <div className="absolute -inset-4 border-2 border-amber-400 rounded-2xl animate-ping opacity-0 group-hover:opacity-100"></div>
            <div className="absolute -inset-6 border border-yellow-300 rounded-2xl opacity-0 group-hover:opacity-30 animate-pulse-slow"></div>
          </div>
          
          {/* HR Metrics Display */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 
            rounded-xl shadow-lg border border-amber-200 animate-float">
            <div className="text-center">
              <div className="text-xs text-amber-600 font-bold">Cases Today</div>
              <div className="text-lg font-bold text-orange-700">248</div>
              <div className="text-xs text-gray-600">Active</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Employee Service Nodes */}
      {[
        { 
          type: "Onboarding", 
          icon: "🎯", 
          status: "processing", 
          details: "New Hire: 3/5 steps",
          color: "from-emerald-500 to-green-500",
          pos: "top-8 left-1/4",
          delay: "0s"
        },
        { 
          type: "Benefits", 
          icon: "🏥", 
          status: "completed", 
          details: "Enrollment: 100%",
          color: "from-blue-500 to-cyan-500",
          pos: "top-8 right-1/4",
          delay: "0.3s"
        },
        { 
          type: "Payroll", 
          icon: "💰", 
          status: "pending", 
          details: "Query: Pay Discrepancy",
          color: "from-purple-500 to-pink-500",
          pos: "bottom-8 left-1/4",
          delay: "0.6s"
        },
        { 
          type: "Leave", 
          icon: "🏝️", 
          status: "processing", 
          details: "Request: Pending Approval",
          color: "from-sky-500 to-blue-500",
          pos: "bottom-8 right-1/4",
          delay: "0.9s"
        },
        { 
          type: "Training", 
          icon: "🎓", 
          status: "active", 
          details: "Course: Compliance 2024",
          color: "from-red-500 to-orange-500",
          pos: "top-1/2 left-8",
          delay: "1.2s"
        },
        { 
          type: "Documents", 
          icon: "📄", 
          status: "completed", 
          details: "Signed: 42 docs",
          color: "from-gray-500 to-slate-500",
          pos: "top-1/2 right-8",
          delay: "1.5s"
        }
      ].map((service, i) => (
        <div key={i} className={`absolute ${service.pos} -translate-x-1/2 -translate-y-1/2`}>
          
          {/* Connection Line to HR Hub */}
          <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-amber-300/30 to-transparent 
            origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Service Node */}
          <div className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl shadow-lg 
            flex flex-col items-center justify-center group animate-float hover:scale-125 transition-transform duration-300`}
            style={{ animationDelay: service.delay }}>
            
            {/* Icon */}
            <div className="text-lg group-hover:animate-bounce">{service.icon}</div>
            
            {/* Status Indicator */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white
              ${service.status === 'completed' ? 'bg-green-500' : 
                service.status === 'processing' ? 'bg-yellow-500 animate-pulse' : 
                service.status === 'active' ? 'bg-blue-500 animate-pulse' : 
                'bg-gray-500'}`}>
            </div>
            
            {/* Service Details on Hover */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg 
              text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 
              border border-gray-200 shadow-xl min-w-[120px] z-10">
              <div className="font-bold text-gray-800 mb-1">{service.type}</div>
              <div className="text-gray-600">{service.details}</div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 
                border-l-transparent border-r-transparent border-b-white"></div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Employee Self-Service Portal */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 
        bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm px-4 py-3 
        rounded-xl border border-amber-200 shadow-lg animate-pulse-slow">
        <div className="text-amber-600 text-xl">🖥️</div>
        <div>
          <div className="text-sm font-bold text-amber-800">Employee Portal</div>
          <div className="text-xs text-amber-600">Self-Service Active</div>
        </div>
        <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      
      {/* HR Metrics Dashboard */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl 
        border border-amber-200 shadow-lg">
        <div className="text-center">
          <div className="text-xs text-amber-600 font-bold mb-1">Satisfaction</div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-lg font-bold text-green-700">94%</div>
            <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">↑ 12%</div>
          </div>
        </div>
      </div>
      
      {/* Service Level Stats */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl 
        border border-amber-200 shadow-lg">
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="group">
            <div className="text-xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">2.1h</div>
            <div className="text-xs text-gray-600">Avg. Resolution</div>
          </div>
          <div className="group">
            <div className="text-xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">85%</div>
            <div className="text-xs text-gray-600">Auto-Complete</div>
          </div>
        </div>
      </div>
      
      {/* Workflow Automation */}
      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-50 to-green-50 
        backdrop-blur-sm px-4 py-2 rounded-xl border border-emerald-200 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="text-lg animate-spin-slow" style={{animationDuration: '3s'}}>⚡</div>
          <div className="text-sm font-medium text-emerald-800">Auto-Workflows</div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Documents */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-6 h-6 bg-gradient-to-br from-amber-100 to-orange-100 
            rounded shadow-sm animate-float flex items-center justify-center text-xs text-amber-600"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}>
            📄
          </div>
        ))}
        
        {/* Animated Workflow Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <circle cx="50%" cy="50%" r="100" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" />
          <circle cx="50%" cy="50%" r="140" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" style={{animationDelay: '0.5s'}} />
        </svg>
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mb-6">
        HR Service Delivery (HRSD)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Transform employee experiences with intuitive self-service,
        centralized HR case management, and automated workflows —
        delivered through a secure, unified HR platform.
      </p>

      {/* HR Service Categories */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { category: "Employee Self-Service", icon: "👤", color: "bg-blue-100 text-blue-800", stat: "85% usage" },
            { category: "Case Management", icon: "📋", color: "bg-amber-100 text-amber-800", stat: "2.1h avg" },
            { category: "Workflow Automation", icon: "⚡", color: "bg-emerald-100 text-emerald-800", stat: "70% auto" },
            { category: "Analytics & Insights", icon: "📊", color: "bg-purple-100 text-purple-800", stat: "94% CSAT" }
          ].map((item, index) => (
            <div key={index} className={`p-4 rounded-xl ${item.color} border border-current border-opacity-20 
              hover:scale-105 transition-transform duration-300 group`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-xl group-hover:animate-bounce">{item.icon}</div>
                  <div className="text-sm font-medium">{item.category}</div>
                </div>
                <div className="text-xs font-bold opacity-80">{item.stat}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 flex items-center gap-2">
            <span className="text-amber-600">🎯</span> Key Features
          </h4>
          {[
            "Guided employee self-service portal with intuitive interface",
            "Centralized HR case visibility and tracking across all departments",
            "Secure employee data management and request processing",
            "Consistent, automated HR workflows for faster resolution",
            "Mobile-first experience for on-the-go HR services",
            "Real-time analytics and reporting on HR service performance"
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 
                flex items-center justify-center text-amber-600 text-xs mt-0.5 group-hover:scale-125 
                transition-transform duration-300">
                ✓
              </div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
        <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span className="text-xl">📈</span> Employee Experience Benefits
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center group">
            <div className="text-2xl font-bold text-amber-600 group-hover:scale-110 transition-transform duration-300">65%</div>
            <div className="text-sm text-gray-700">Faster Resolution</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">40%</div>
            <div className="text-sm text-gray-700">Cost Reduction</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">94%</div>
            <div className="text-sm text-gray-700">Employee Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-6px) rotate(2deg);
      }
      75% {
        transform: translateY(3px) rotate(-2deg);
      }
    }

    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      to {
        stroke-dashoffset: 20;
      }
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes pulse-slow {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }

    .animate-dash {
      animation: dash 1s linear infinite;
    }

    .animate-ping {
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-bounce {
      animation: bounce 0.5s ease-in-out;
    }

    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `}</style>
</section>


<section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* Interactive CSM Galaxy Animation */}
    <div className="relative w-full h-[400px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl overflow-hidden border border-purple-100 shadow-2xl">
      
      {/* 3D Perspective Container */}
      <div className="absolute inset-0 perspective-1000">
        
        {/* Central Customer Orbit System */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          
          {/* Core Customer Planet */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full 
            shadow-2xl animate-pulse-slow group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
              animate-spin-slow opacity-0 group-hover:opacity-100"></div>
            <div className="w-full h-full flex items-center justify-center text-white text-3xl">
              👤
            </div>
            
            {/* Atmosphere Rings */}
            <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-full animate-orbit-slow"></div>
            <div className="absolute -inset-8 border border-pink-400/20 rounded-full animate-orbit-medium" 
                 style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Orbiting Support Channels */}
          {[
            { channel: "Chat", icon: "💬", color: "bg-emerald-500", size: "w-12 h-12", orbit: 120, speed: "20s", delay: "0s" },
            { channel: "Email", icon: "📧", color: "bg-blue-500", size: "w-10 h-10", orbit: 100, speed: "15s", delay: "2s" },
            { channel: "Phone", icon: "📞", color: "bg-cyan-500", size: "w-14 h-14", orbit: 140, speed: "25s", delay: "4s" },
            { channel: "Social", icon: "📱", color: "bg-pink-500", size: "w-11 h-11", orbit: 90, speed: "18s", delay: "6s" }
          ].map((orbit, index) => (
            <div key={index} className="absolute top-0 left-0 animate-orbit" 
                 style={{
                   animationDuration: orbit.speed,
                   animationDelay: orbit.delay,
                   width: `${orbit.orbit * 2}px`,
                   height: `${orbit.orbit * 2}px`,
                   transformOrigin: 'center'
                 }}>
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${orbit.size} ${orbit.color} 
                rounded-full shadow-lg flex items-center justify-center text-white text-lg 
                hover:scale-125 transition-transform duration-300 group`}>
                {orbit.icon}
                
                {/* Connection Beam */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-1 h-12 
                  bg-gradient-to-t from-current to-transparent opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"></div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1 
                  rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  whitespace-nowrap">
                  {orbit.channel}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Background Constellation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-purple-300 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}>
            </div>
          ))}
        </div>
        
        {/* Floating Data Nebulas */}
        {[
          { color: "from-blue-400/20 to-cyan-400/20", pos: "top-8 left-8", size: "w-24 h-24" },
          { color: "from-purple-400/20 to-pink-400/20", pos: "bottom-8 right-8", size: "w-32 h-32" },
          { color: "from-indigo-400/20 to-blue-400/20", pos: "top-8 right-12", size: "w-20 h-20" },
          { color: "from-pink-400/20 to-rose-400/20", pos: "bottom-12 left-12", size: "w-28 h-28" }
        ].map((nebula, i) => (
          <div key={i} className={`absolute ${nebula.pos} ${nebula.size} bg-gradient-to-br ${nebula.color} 
            rounded-full blur-xl opacity-50 animate-float`}
            style={{ animationDelay: `${i * 0.5}s`, animationDuration: '8s' }}>
          </div>
        ))}
        
        {/* Case Routing Lines (3D effect) */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="50%" r="180" fill="url(#glow)" />
        </svg>
        
        {/* Interactive AI Assistant */}
        <div className="absolute bottom-6 left-6 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm 
          px-4 py-3 rounded-2xl shadow-xl border border-purple-200 animate-slide-up">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full 
                flex items-center justify-center text-white animate-bounce-slow">
                🤖
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white 
                animate-pulse"></div>
            </div>
            <div>
              <div className="text-sm font-bold text-purple-800">AI Assistant</div>
              <div className="text-xs text-purple-600">Live • Routing cases</div>
            </div>
          </div>
        </div>
        
        {/* Real-time Metrics */}
        <div className="absolute top-6 right-6 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 
          backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl text-white animate-slide-up" 
          style={{animationDelay: '0.3s'}}>
          <div className="text-center">
            <div className="text-2xl font-bold">2.3s</div>
            <div className="text-xs opacity-90">Avg. Response</div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rotate-45"></div>
          </div>
        </div>
        
        {/* Satisfaction Meter */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl 
          shadow-xl border border-emerald-200 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center gap-2">
            <div className="text-emerald-600 text-lg">⭐</div>
            <div>
              <div className="text-sm font-bold text-emerald-800">97% CSAT</div>
              <div className="text-xs text-emerald-600">This month</div>
            </div>
          </div>
        </div>
        
        {/* Animated Case Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 
              rounded-full animate-particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`
              }}>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 
        bg-clip-text text-transparent mb-6">
        Customer Service Management (CSM)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Deliver seamless customer experiences with omnichannel engagement,
        intelligent case routing, and proactive service workflows.
      </p>

      {/* Galaxy-inspired Feature Orbits */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { feature: "Orbital Routing", desc: "Intelligent case assignment", icon: "🔄", color: "from-indigo-100 to-purple-100" },
            { feature: "Gravity Assist", desc: "Automated escalation", icon: "⚡", color: "from-pink-100 to-rose-100" },
            { feature: "Nebula Analytics", desc: "Real-time insights", icon: "📊", color: "from-blue-100 to-cyan-100" },
            { feature: "Stellar Support", desc: "24/7 coverage", icon: "🌟", color: "from-emerald-100 to-green-100" }
          ].map((orbit, index) => (
            <div key={index} className={`relative p-4 rounded-xl bg-gradient-to-br ${orbit.color} 
              border border-current border-opacity-20 hover:scale-105 transition-transform duration-300 
              group overflow-hidden`}>
              
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative flex items-center gap-3">
                <div className="text-2xl animate-spin-slow group-hover:animate-none">{orbit.icon}</div>
                <div>
                  <div className="font-bold text-gray-800">{orbit.feature}</div>
                  <div className="text-sm text-gray-600">{orbit.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantum Service Features */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-800 flex items-center gap-2">
            <span className="text-purple-600">🌌</span> Quantum Service Features
          </h4>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Omnichannel Sync", value: "100%", color: "text-indigo-600" },
              { label: "AI Accuracy", value: "98.5%", color: "text-purple-600" },
              { label: "Auto-Resolve", value: "65%", color: "text-pink-600" },
              { label: "SLA Compliance", value: "99.9%", color: "text-emerald-600" }
            ].map((metric, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-gradient-to-br from-slate-50 to-white 
                border border-slate-200 hover:border-purple-300 transition-colors duration-300">
                <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cosmic Benefits Banner */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200 
        relative overflow-hidden">
        
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #8b5cf6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative">
          <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
            <span className="text-xl">🚀</span> Galactic Performance Metrics
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center group">
              <div className="text-2xl font-bold text-indigo-600 group-hover:animate-bounce">40%</div>
              <div className="text-sm text-gray-700">Faster Resolution</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-purple-600 group-hover:animate-bounce">55%</div>
              <div className="text-sm text-gray-700">Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-pink-600 group-hover:animate-bounce">97%</div>
              <div className="text-sm text-gray-700">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes orbit {
      0% {
        transform: rotate(0deg) translateX(var(--radius)) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg);
      }
    }

    @keyframes orbit-slow {
      0% {
        transform: rotate(0deg);
        opacity: 0.3;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        transform: rotate(360deg);
        opacity: 0.3;
      }
    }

    @keyframes orbit-medium {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }

    @keyframes pulse-slow {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }

    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-10px) rotate(5deg);
      }
      75% {
        transform: translateY(5px) rotate(-5deg);
      }
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.5);
      }
    }

    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes particle {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) translateX(50px);
        opacity: 0;
      }
    }

    .perspective-1000 {
      perspective: 1000px;
    }

    .animate-orbit {
      animation: orbit linear infinite;
    }

    .animate-orbit-slow {
      animation: orbit-slow 8s linear infinite;
    }

    .animate-orbit-medium {
      animation: orbit-medium 12s linear infinite;
    }

    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }

    .animate-spin-slow {
      animation: spin-slow 10s linear infinite;
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-twinkle {
      animation: twinkle 3s ease-in-out infinite;
    }

    .animate-slide-up {
      animation: slide-up 0.6s ease-out forwards;
    }

    .animate-bounce-slow {
      animation: bounce-slow 2s ease-in-out infinite;
    }

    .animate-particle {
      animation: particle 3s linear infinite;
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `}</style>
</section>


                    </>
                )}

                

                {/* Back Button */}
                <div className="mt-32 scroll-reveal">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
                        <Link 
                            to="/" 
                            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Animated Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Ripple Effect */}
                            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-110 transition-all duration-500"></div>
                            
                            {/* Content */}
                            <div className="relative flex items-center gap-4">
                                <div className="relative w-10 h-10">
                                    <div className="absolute inset-0 bg-white/30 transform rotate-45 animate-pulse group-hover:rotate-90 transition-all duration-500"></div>
                                    <div className="absolute inset-1 bg-white/20 transform -rotate-12 animate-bounce group-hover:rotate-45 transition-all duration-700"></div>
                                    <div className="absolute inset-2 bg-white rounded-full animate-ping group-hover:animate-pulse"></div>
                                </div>
                                <span className="group-hover:translate-x-2 transition-transform duration-500">Back to Services</span>
                                <div className="relative w-6 h-6">
                                    <div className="absolute inset-0 border-2 border-white transform rotate-0 group-hover:rotate-180 transition-all duration-1000 ease-in-out"></div>
                                    <div className="absolute inset-1 border border-white/60 transform rotate-45 group-hover:rotate-225 transition-all duration-800"></div>
                                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:scale-300"></div>
                                </div>
                            </div>
                            
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}