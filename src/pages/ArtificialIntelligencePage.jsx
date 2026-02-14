import { Link } from "react-router-dom";
import "./ArtificialIntelligence.responsive.css";

const ArtificialIntelligencePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* HERO SECTION */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Artificial Intelligence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                Transform Your Business
              </span>
            </h1>
          </div>

          <div className="glass-effect p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl">
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Unlock unprecedented growth and efficiency with our cutting-edge AI implementations.
              From intelligent automation to predictive insights, we deliver AI solutions that drive
              measurable ROI and competitive advantage across industries.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '40%', label: 'Cost Reduction' },
              { value: '3x', label: 'Faster Decisions' },
              { value: '95%', label: 'Accuracy' },
              { value: '24/7', label: 'AI Operations' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl mb-4">
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                </div>
                <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI TECHNOLOGY STACK */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Technology Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Large Language Models</h3>
              <p className="text-gray-700">
                Expertise across OpenAI GPT, Anthropic Claude, Google Gemini, Microsoft Copilot, and Meta LLaMA.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Agentic AI Frameworks</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• CrewAI and LangChain for multi-agent coordination</li>
                <li>• Strand Agents for modular AI workflows</li>
                <li>• Google ADK, MCP, and ADA Protocol</li>
                <li>• API Park for secure orchestration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core AI Capabilities</h3>
              <div className="space-y-4">
                {[
                  'Generative AI & LLM Solutions',
                  'Predictive Analytics & ML',
                  'Retrieval-Augmented Generation',
                  'Computer Vision & NLP',
                  'AI Agents & Automation',
                  'AI-Assisted Development'
                ].map((capability, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl shadow-sm">
                    <p className="font-semibold text-gray-900">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI MATURITY MODEL */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Maturity Model
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { stage: '1', title: 'Awareness' },
              { stage: '2', title: 'Experimentation' },
              { stage: '3', title: 'Operationalization' },
              { stage: '4', title: 'Enterprise Adoption' },
              { stage: '5', title: 'Autonomous Intelligence' }
            ].map((stage, index) => (
              <div key={index} className="text-center">
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl mb-4 p-4">
                  <div className="text-4xl font-bold mb-2">{stage.stage}</div>
                  <div className="text-sm font-semibold">{stage.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI IN QUALITY ENGINEERING */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI in Quality Engineering
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Making software delivery faster, smarter, and more reliable.
              </p>

              <div className="space-y-4">
                {[
                  'Intelligent Test Automation',
                  'Defect Prediction & Analysis',
                  'AI-Powered Test Data Management',
                  'Generative AI for QA',
                  'Continuous Quality in CI/CD'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">98% Test Coverage</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Faster Testing', value: '60%' },
                  { label: 'Cost Savings', value: '40%' },
                  { label: 'Defect Detection', value: '95%' },
                  { label: 'Automation', value: '85%' }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl">
                    <div className="text-2xl font-bold text-cyan-600">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Arvish Consulting For AI?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Enterprise-Grade Expertise', desc: 'Proven across industries' },
              { title: 'Custom-Built Solutions', desc: 'Tailored AI models' },
              { title: 'End-to-End Delivery', desc: 'Strategy to deployment' },
              { title: 'Responsible AI', desc: 'Ethical and secure' }
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default ArtificialIntelligencePage;
