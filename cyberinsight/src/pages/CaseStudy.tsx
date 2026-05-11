import { BookOpen, TrendingUp, Shield, AlertTriangle, Clock, ArrowRight } from 'lucide-react';

export const CaseStudy = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Enterprise Ransomware Attack Prevention',
      category: 'Ransomware',
      date: 'March 2024',
      readTime: '8 min read',
      description: 'How a Fortune 500 company prevented a sophisticated ransomware attack using real-time threat intelligence and automated response systems.',
      impact: '$2.5M saved',
      threat: 'Critical',
      icon: AlertTriangle,
      color: 'red',
      tags: ['Ransomware', 'Enterprise', 'Prevention']
    },
    {
      id: 2,
      title: 'Financial Sector Phishing Campaign Mitigation',
      category: 'Phishing',
      date: 'February 2024',
      readTime: '6 min read',
      description: 'Analysis of a targeted phishing campaign against financial institutions and the multi-layered defense strategy that neutralized the threat.',
      impact: '10K+ users protected',
      threat: 'High',
      icon: Shield,
      color: 'yellow',
      tags: ['Phishing', 'Finance', 'Email Security']
    },
    {
      id: 3,
      title: 'Healthcare Data Breach Response',
      category: 'Data Breach',
      date: 'January 2024',
      readTime: '10 min read',
      description: 'Comprehensive incident response to a healthcare data breach, including containment, investigation, and regulatory compliance measures.',
      impact: '500K records secured',
      threat: 'Critical',
      icon: TrendingUp,
      color: 'cyan',
      tags: ['Healthcare', 'HIPAA', 'Incident Response']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-4">
            <span className="text-cyan-400 text-sm font-medium">Real-World Security Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Learn from real-world cybersecurity incidents and discover proven defense strategies
          </p>
        </div>

        {/* Featured Stats */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Cases Analyzed', value: '150+', icon: BookOpen },
            { label: 'Threats Prevented', value: '10K+', icon: Shield },
            { label: 'Money Saved', value: '$50M+', icon: TrendingUp },
            { label: 'Organizations', value: '500+', icon: AlertTriangle },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            return (
              <div
                key={study.id}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon Section */}
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-${study.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 text-${study.color}-400`} />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 bg-${study.color}-500/10 border border-${study.color}-500/30 rounded-full text-${study.color}-400 text-xs font-semibold`}>
                          {study.category}
                        </span>
                        <span className={`px-3 py-1 bg-${study.color}-500/10 border border-${study.color}-500/30 rounded-full text-${study.color}-400 text-xs font-semibold`}>
                          {study.threat} Threat
                        </span>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Clock className="w-4 h-4" />
                          {study.readTime}
                        </div>
                        <span className="text-slate-500 text-sm">{study.date}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      
                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {study.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-400" />
                          <span className="text-green-400 font-semibold">{study.impact}</span>
                        </div>
                        <div className="flex gap-2">
                          {study.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
                        Read Full Case Study
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-xl text-center">
          <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Want to Share Your Case Study?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Help the security community learn from your experiences. Submit your incident response story and contribute to collective defense.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
            Submit Your Case Study
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
