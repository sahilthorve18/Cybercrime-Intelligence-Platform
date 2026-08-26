import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, AlertTriangle, BarChart3, Lock, Zap, Eye } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm animate-fade-in">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-medium">Advanced Cybersecurity Intelligence</span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-bold leading-tight animate-slide-up">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Protect Your Digital
                  </span>
                  <br />
                  <span className="text-white">Assets Today</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed animate-slide-up delay-100">
                  Real-time threat analysis, risk assessment, and compliance monitoring for modern enterprises. Stay ahead of cyber threats with advanced intelligence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
                <Link
                  to="/dashboard"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  View Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeQvxGkyI2_5zq1syzF2Cohl2JJdPvAj3WUycC-bzSLLgve2A/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
                >
                  Submit Response
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-800/50 animate-slide-up delay-300">
                <p className="text-slate-400 text-sm mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  Trusted by security professionals worldwide
                </p>
                <div className="flex flex-wrap gap-3">
                  {['99.9% Uptime', 'SOC 2 Certified', 'Real-time Updates', 'Enterprise Grade'].map((badge, idx) => (
                    <div
                      key={badge}
                      className="px-4 py-2 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 rounded-full text-xs text-slate-300 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <span className="text-cyan-400 mr-1">✓</span> {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full flex items-center justify-center shadow-2xl hover:border-cyan-500/50 transition-all duration-500">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Shield className="w-32 h-32 text-cyan-400 mx-auto animate-pulse" />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl"></div>
                  </div>
                  <p className="text-slate-300 text-lg font-medium">Comprehensive Security Intelligence Platform</p>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-400">Secure</p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-400">Fast</p>
                    </div>
                    <div className="text-center">
                      <Eye className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-400">Monitor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-4">
              <span className="text-cyan-400 text-sm font-medium">Why Choose CyberInsight</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Enterprise-grade security intelligence with real-time threat detection and analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Real-time Analytics',
                description: 'Monitor security metrics and trends with live data feeds and instant alerts',
                color: 'cyan',
                gradient: 'from-cyan-500/10 to-cyan-600/5'
              },
              {
                icon: AlertTriangle,
                title: 'Threat Detection',
                description: 'Advanced AI-powered threat detection with automated response capabilities',
                color: 'red',
                gradient: 'from-red-500/10 to-red-600/5'
              },
              {
                icon: BarChart3,
                title: 'Risk Assessment',
                description: 'Comprehensive risk evaluation with detailed scoring and recommendations',
                color: 'blue',
                gradient: 'from-blue-500/10 to-blue-600/5'
              },
              {
                icon: Shield,
                title: 'Compliance Monitoring',
                description: 'Stay compliant with GDPR, SOC 2, ISO 27001, and IT Act regulations',
                color: 'green',
                gradient: 'from-green-500/10 to-green-600/5'
              },
              {
                icon: Lock,
                title: 'Data Protection',
                description: 'Enterprise-grade encryption and secure data handling protocols',
                color: 'purple',
                gradient: 'from-purple-500/10 to-purple-600/5'
              },
              {
                icon: Zap,
                title: 'Instant Alerts',
                description: 'Get notified immediately when threats are detected in your systems',
                color: 'yellow',
                gradient: 'from-yellow-500/10 to-yellow-600/5'
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-${feature.color}-500/50 hover:shadow-2xl hover:shadow-${feature.color}-500/20 hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl"></div>
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-${feature.color}-500/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
              { value: '500+', label: 'Enterprises' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 rounded-3xl p-12 sm:p-16 text-center backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-6">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Get Started Today</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">
                Ready to Enhance Your <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Security Posture?
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of security professionals using CyberInsight to protect their organizations from evolving cyber threats
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/dashboard"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/risk-analyzer"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300"
                >
                  Try Risk Analyzer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
