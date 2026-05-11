import { Shield, AlertTriangle, TrendingUp, Lock, Eye, Zap, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export const RiskAnalyzer = () => {
  const [riskScore, setRiskScore] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);

  const analyzeRisk = () => {
    // Simulate risk analysis
    const score = Math.floor(Math.random() * 100);
    setRiskScore(score);
    setAnalyzed(true);
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: 'Low', color: 'green', icon: CheckCircle };
    if (score < 70) return { level: 'Medium', color: 'yellow', icon: AlertTriangle };
    return { level: 'High', color: 'red', icon: XCircle };
  };

  const risk = getRiskLevel(riskScore);
  const RiskIcon = risk.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-4">
            <span className="text-cyan-400 text-sm font-medium">Advanced Risk Assessment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Risk Analyzer
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive risk evaluation and vulnerability analysis for your security infrastructure
          </p>
        </div>

        {/* Risk Analysis Card */}
        <div className="mb-12 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
          <div className="relative inline-block mb-8">
            <Shield className="w-32 h-32 text-cyan-400 mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
          
          {!analyzed ? (
            <>
              <h2 className="text-3xl font-bold text-white mb-4">Start Your Risk Assessment</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Our AI-powered risk analyzer evaluates your security posture across multiple dimensions including threat exposure, vulnerability management, and compliance status.
              </p>
              <button
                onClick={analyzeRisk}
                className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Analyze Risk Now
              </button>
            </>
          ) : (
            <div className="animate-scale-in">
              <div className="mb-6">
                <RiskIcon className={`w-24 h-24 text-${risk.color}-400 mx-auto mb-4`} />
                <h2 className="text-4xl font-bold text-white mb-2">Risk Score: {riskScore}</h2>
                <div className={`inline-block px-6 py-2 bg-${risk.color}-500/10 border border-${risk.color}-500/30 rounded-full`}>
                  <span className={`text-${risk.color}-400 text-lg font-semibold`}>{risk.level} Risk</span>
                </div>
              </div>
              
              <div className="w-full max-w-2xl mx-auto mb-8">
                <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${risk.color}-500 to-${risk.color}-600 transition-all duration-1000`}
                    style={{ width: `${riskScore}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => setAnalyzed(false)}
                className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
              >
                Analyze Again
              </button>
            </div>
          )}
        </div>

        {/* Risk Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: AlertTriangle,
              title: 'Threat Exposure',
              description: 'Active threats and attack vectors targeting your systems',
              status: 'Monitoring',
              color: 'red'
            },
            {
              icon: Lock,
              title: 'Access Control',
              description: 'User permissions and authentication security measures',
              status: 'Secure',
              color: 'green'
            },
            {
              icon: Eye,
              title: 'Vulnerability Scan',
              description: 'Known vulnerabilities in your infrastructure',
              status: 'In Progress',
              color: 'yellow'
            },
            {
              icon: Shield,
              title: 'Data Protection',
              description: 'Encryption and data security protocols',
              status: 'Active',
              color: 'cyan'
            },
            {
              icon: TrendingUp,
              title: 'Compliance Status',
              description: 'Regulatory compliance and audit readiness',
              status: 'Compliant',
              color: 'blue'
            },
            {
              icon: Zap,
              title: 'Incident Response',
              description: 'Response time and threat mitigation capabilities',
              status: 'Ready',
              color: 'purple'
            },
          ].map((factor, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`inline-flex p-4 rounded-xl bg-${factor.color}-500/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <factor.icon className={`w-8 h-8 text-${factor.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{factor.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{factor.description}</p>
              <div className={`inline-block px-3 py-1 bg-${factor.color}-500/10 border border-${factor.color}-500/30 rounded-full`}>
                <span className={`text-${factor.color}-400 text-xs font-medium`}>{factor.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
