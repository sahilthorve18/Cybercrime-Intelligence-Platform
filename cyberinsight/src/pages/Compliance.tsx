import { Shield, FileText, CheckCircle, AlertCircle, Scale, BookOpen } from 'lucide-react';

export const Compliance = () => {
  const regulations = [
    {
      title: 'GDPR Compliance',
      description: 'General Data Protection Regulation for EU data privacy',
      icon: Shield,
      status: 'Compliant',
      color: 'green',
      details: ['Data encryption', 'User consent management', 'Right to be forgotten']
    },
    {
      title: 'ISO 27001',
      description: 'Information Security Management System standard',
      icon: FileText,
      status: 'Certified',
      color: 'blue',
      details: ['Risk assessment', 'Security controls', 'Continuous improvement']
    },
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control for security and availability',
      icon: CheckCircle,
      status: 'Audited',
      color: 'cyan',
      details: ['Security monitoring', 'Access controls', 'Incident response']
    },
    {
      title: 'IT Act 2000',
      description: 'Indian Information Technology Act for cyber law',
      icon: Scale,
      status: 'Compliant',
      color: 'purple',
      details: ['Digital signatures', 'Cyber crime prevention', 'Data protection']
    },
    {
      title: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: AlertCircle,
      status: 'In Progress',
      color: 'yellow',
      details: ['PHI protection', 'Access logging', 'Breach notification']
    },
    {
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      icon: BookOpen,
      status: 'Compliant',
      color: 'red',
      details: ['Cardholder data security', 'Network monitoring', 'Regular testing']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-4">
            <span className="text-cyan-400 text-sm font-medium">Regulatory Standards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Compliance & Regulations
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay compliant with global security standards and regulatory requirements
          </p>
        </div>

        {/* Compliance Overview */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">4</div>
            <div className="text-slate-400 text-sm">Compliant Standards</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 text-center">
            <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">1</div>
            <div className="text-slate-400 text-sm">In Progress</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 text-center">
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">1</div>
            <div className="text-slate-400 text-sm">Certified</div>
          </div>
        </div>

        {/* Regulations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regulations.map((reg, idx) => {
            const Icon = reg.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-${reg.color}-500/10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${reg.color}-400`} />
                  </div>
                  <div className={`px-4 py-1.5 bg-${reg.color}-500/10 border border-${reg.color}-500/30 rounded-full`}>
                    <span className={`text-${reg.color}-400 text-xs font-semibold`}>{reg.status}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {reg.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{reg.description}</p>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-300 mb-3">Key Requirements:</div>
                  {reg.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${reg.color}-400`}></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Continuous Compliance Monitoring</h3>
              <p className="text-slate-300 leading-relaxed">
                Our platform continuously monitors your compliance status across all regulatory frameworks. 
                Receive real-time alerts for any compliance gaps and get actionable recommendations to maintain 
                your security certifications and regulatory adherence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
