import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Shield, AlertTriangle, TrendingUp, CheckCircle, XCircle, Target, Users, DollarSign, Lock } from 'lucide-react';

interface CaseStudyData {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  impact: string;
  threat: string;
  color: string;
  tags: string[];
  
  // Detailed content
  executive_summary: string;
  background: string;
  threat_actor: string;
  attack_vector: string;
  timeline: Array<{ time: string; event: string }>;
  impact_details: {
    financial: string;
    operational: string;
    reputational: string;
  };
  response_strategy: string[];
  lessons_learned: string[];
  recommendations: string[];
}

const caseStudiesData: Record<number, CaseStudyData> = {
  1: {
    id: 1,
    title: 'Enterprise Ransomware Attack Prevention',
    category: 'Ransomware',
    date: 'March 2024',
    readTime: '8 min read',
    description: 'How a Fortune 500 company prevented a sophisticated ransomware attack using real-time threat intelligence and automated response systems.',
    impact: '$2.5M saved',
    threat: 'Critical',
    color: 'red',
    tags: ['Ransomware', 'Enterprise', 'Prevention'],
    
    executive_summary: 'A Fortune 500 manufacturing company successfully prevented a sophisticated ransomware attack targeting their production systems. Through proactive threat detection, rapid incident response, and coordinated defense measures, the organization avoided an estimated $2.5 million in potential losses and operational downtime.',
    
    background: 'The organization operates 47 manufacturing facilities globally with over 15,000 employees. Their IT infrastructure includes legacy systems critical to production operations, making them a high-value target for ransomware attacks. The company had recently invested in enhanced cybersecurity monitoring following increased threats in the manufacturing sector.',
    
    threat_actor: 'The attack was attributed to the LockBit 3.0 ransomware group, known for targeting large enterprises with double extortion tactics. The threat actors had been conducting reconnaissance for approximately 3 weeks before the attack attempt, mapping network architecture and identifying high-value targets.',
    
    attack_vector: 'Initial access was gained through a spear-phishing email targeting the HR department, containing a malicious Excel macro disguised as a benefits enrollment form. The payload established a foothold in the network and began lateral movement toward production systems.',
    
    timeline: [
      { time: 'Day 1 - 09:15 AM', event: 'Phishing email detected by security operations center (SOC)' },
      { time: 'Day 1 - 09:47 AM', event: 'Suspicious macro execution flagged by endpoint detection' },
      { time: 'Day 1 - 10:12 AM', event: 'Automated isolation of affected workstation initiated' },
      { time: 'Day 1 - 11:30 AM', event: 'Incident response team mobilized' },
      { time: 'Day 1 - 02:45 PM', event: 'Command and control (C2) communications blocked' },
      { time: 'Day 2 - 08:00 AM', event: 'Network segmentation reinforced to protect critical systems' },
      { time: 'Day 3 - 04:00 PM', event: 'Threat neutralized, forensic analysis initiated' },
    ],
    
    impact_details: {
      financial: 'Prevented potential losses of $2.5M including ransom demands ($1.2M), operational downtime costs ($800K), and data recovery expenses ($500K)',
      operational: 'Zero production downtime achieved through proactive isolation. Minimal disruption to business operations with only 3 workstations temporarily taken offline',
      reputational: 'No data breach occurred, maintaining customer trust and avoiding regulatory scrutiny. Positive media coverage of successful defense enhanced company reputation'
    },
    
    response_strategy: [
      'Immediate isolation of compromised systems using automated EDR response',
      'Real-time threat intelligence correlation to identify attack patterns',
      'Network segmentation to protect critical production systems',
      'Forensic analysis of attack vectors and indicators of compromise (IOCs)',
      'Coordination with law enforcement and cybersecurity agencies',
      'Enhanced monitoring and threat hunting across the environment'
    ],
    
    lessons_learned: [
      'Early detection is crucial - automated threat detection systems identified the attack within 32 minutes',
      'Network segmentation prevented lateral movement to critical systems',
      'Regular security awareness training helped employees identify suspicious emails',
      'Incident response playbooks enabled rapid, coordinated action',
      'Investment in EDR and SIEM technologies provided visibility needed for successful defense'
    ],
    
    recommendations: [
      'Implement multi-layered email security with advanced threat protection',
      'Deploy endpoint detection and response (EDR) solutions across all endpoints',
      'Conduct regular security awareness training with simulated phishing exercises',
      'Establish network segmentation to isolate critical systems',
      'Maintain offline, immutable backups with regular testing',
      'Develop and test incident response playbooks quarterly',
      'Implement zero-trust architecture principles',
      'Conduct regular vulnerability assessments and penetration testing'
    ]
  },
  
  2: {
    id: 2,
    title: 'Financial Sector Phishing Campaign Mitigation',
    category: 'Phishing',
    date: 'February 2024',
    readTime: '6 min read',
    description: 'Analysis of a targeted phishing campaign against financial institutions and the multi-layered defense strategy that neutralized the threat.',
    impact: '10K+ users protected',
    threat: 'High',
    color: 'yellow',
    tags: ['Phishing', 'Finance', 'Email Security'],
    
    executive_summary: 'A sophisticated phishing campaign targeting customers of multiple regional banks was successfully disrupted through coordinated efforts between financial institutions, email security providers, and law enforcement. The campaign attempted to harvest credentials from over 10,000 users but was neutralized before significant losses occurred.',
    
    background: 'Three regional banks identified a coordinated phishing campaign using sophisticated social engineering techniques. The emails impersonated legitimate bank communications with convincing branding, urgent messaging about account security, and links to fraudulent login pages that closely mimicked the banks\' legitimate websites.',
    
    threat_actor: 'The campaign was linked to an organized cybercrime group based in Eastern Europe, specializing in financial fraud and credential theft. The group operates as a phishing-as-a-service (PhaaS) provider, selling kits and infrastructure to other criminals.',
    
    attack_vector: 'Attackers used spoofed email addresses closely resembling official bank domains, combined with stolen logos and branding. Phishing pages were hosted on compromised legitimate websites to avoid detection. Messages created urgency by claiming accounts would be locked unless users verified their credentials immediately.',
    
    timeline: [
      { time: 'Week 1 - Monday', event: 'First phishing emails detected by bank customers' },
      { time: 'Week 1 - Tuesday', event: 'Banks\' security teams identify campaign pattern' },
      { time: 'Week 1 - Wednesday', event: 'Inter-bank threat intelligence sharing initiated' },
      { time: 'Week 1 - Thursday', event: 'Email security filters updated with new signatures' },
      { time: 'Week 1 - Friday', event: 'Law enforcement contacted and takedown requests filed' },
      { time: 'Week 2 - Monday', event: 'Public awareness campaign launched' },
      { time: 'Week 2 - Wednesday', event: 'Phishing domains seized and taken offline' },
      { time: 'Week 2 - Friday', event: 'Campaign effectively neutralized' },
    ],
    
    impact_details: {
      financial: 'Prevented estimated losses of $3.2M in fraudulent transactions. Average attempted fraud amount was $320 per compromised account',
      operational: 'Required temporary increase in customer support capacity to handle inquiries. Enhanced security measures implemented across all customer-facing systems',
      reputational: 'Swift response and transparent communication maintained customer confidence. Zero significant data breaches occurred across protected institutions'
    },
    
    response_strategy: [
      'Immediate deployment of email filtering rules to block phishing messages',
      'Customer notification campaign via multiple channels (email, SMS, app notifications)',
      'Temporary additional authentication requirements for high-risk transactions',
      'Coordination with domain registrars and hosting providers for takedowns',
      'Collaboration with other financial institutions to share threat intelligence',
      'Enhanced monitoring for fraudulent transaction patterns'
    ],
    
    lessons_learned: [
      'Inter-organizational collaboration accelerated threat response',
      'Multi-channel customer communication was essential for awareness',
      'Advanced email filtering detected most phishing attempts automatically',
      'Regular customer education reduced susceptibility to social engineering',
      'Rapid coordination with infrastructure providers enabled quick takedowns'
    ],
    
    recommendations: [
      'Implement DMARC, SPF, and DKIM email authentication protocols',
      'Deploy AI-powered phishing detection in email security gateways',
      'Conduct regular phishing simulation exercises for customers',
      'Establish information sharing agreements with industry partners',
      'Implement risk-based authentication for sensitive transactions',
      'Maintain 24/7 security operations center coverage',
      'Use domain monitoring services to detect typosquatting',
      'Provide easy-to-use phishing reporting mechanisms for customers'
    ]
  },
  
  3: {
    id: 3,
    title: 'Healthcare Data Breach Response',
    category: 'Data Breach',
    date: 'January 2024',
    readTime: '10 min read',
    description: 'Comprehensive incident response to a healthcare data breach, including containment, investigation, and regulatory compliance measures.',
    impact: '500K records secured',
    threat: 'Critical',
    color: 'cyan',
    tags: ['Healthcare', 'HIPAA', 'Incident Response'],
    
    executive_summary: 'A multi-facility healthcare network experienced a data breach affecting 500,000 patient records. Through rapid incident response, containment measures, and comprehensive remediation, the organization successfully secured its systems, notified affected parties, and implemented enhanced security controls to prevent future incidents.',
    
    background: 'The healthcare network operates 12 hospitals and 80 outpatient clinics across three states, serving over 2 million patients annually. The breach was discovered during routine security monitoring when anomalous database access patterns were detected on a legacy patient records system.',
    
    threat_actor: 'Investigation revealed the breach was caused by an external attacker who gained access through compromised credentials of a third-party vendor with remote access to patient systems. The attacker\'s primary objective appeared to be theft of protected health information (PHI) for sale on dark web markets.',
    
    attack_vector: 'The attack exploited weak authentication on a vendor VPN account that lacked multi-factor authentication. Once inside the network, the attacker leveraged overly permissive access controls to reach database servers containing patient records. Data exfiltration occurred over a 72-hour period before detection.',
    
    timeline: [
      { time: 'Day 0 - 11:00 PM', event: 'Automated alert for unusual database queries generated' },
      { time: 'Day 1 - 07:30 AM', event: 'Security team begins investigation of alerts' },
      { time: 'Day 1 - 02:00 PM', event: 'Data breach confirmed, incident response activated' },
      { time: 'Day 1 - 04:00 PM', event: 'Compromised vendor access revoked' },
      { time: 'Day 2 - 09:00 AM', event: 'Forensic investigation firm engaged' },
      { time: 'Day 5', event: 'Full scope of breach determined' },
      { time: 'Day 10', event: 'Law enforcement and HHS Office for Civil Rights notified' },
      { time: 'Day 30', event: 'Patient notification letters mailed' },
      { time: 'Day 60', event: 'Enhanced security controls implemented' },
    ],
    
    impact_details: {
      financial: 'Total breach costs estimated at $12M including forensics ($500K), legal fees ($2M), regulatory penalties ($3M), credit monitoring services ($4M), and system remediation ($2.5M)',
      operational: 'Temporary disruption to non-emergency systems during investigation. Enhanced security measures required changes to clinical workflows. Significant IT staff resources diverted to incident response',
      reputational: 'Media coverage of breach negatively impacted patient confidence initially. Transparent communication and robust response helped rebuild trust over subsequent months'
    },
    
    response_strategy: [
      'Immediate termination of unauthorized access and isolation of affected systems',
      'Engagement of specialized healthcare cybersecurity incident response firm',
      'Comprehensive forensic analysis to determine breach scope and timeline',
      'Coordination with legal counsel for regulatory compliance',
      'Notification to Department of Health and Human Services and affected individuals',
      'Offering of credit monitoring and identity protection services to affected patients',
      'Complete review and overhaul of vendor access management',
      'Implementation of enhanced monitoring and security controls'
    ],
    
    lessons_learned: [
      'Third-party vendor access presents significant risk and requires strict controls',
      'Multi-factor authentication is essential for all remote access',
      'Automated monitoring enabled relatively rapid breach detection',
      'Clear incident response procedures facilitated coordinated action',
      'Legacy systems require additional security controls and monitoring',
      'Regular security assessments of vendors are crucial',
      'HIPAA compliance requires ongoing vigilance and adaptation'
    ],
    
    recommendations: [
      'Implement mandatory MFA for all remote and privileged access',
      'Adopt zero-trust architecture with least-privilege access principles',
      'Conduct regular security assessments of third-party vendors',
      'Deploy data loss prevention (DLP) solutions on critical systems',
      'Implement advanced threat detection with behavioral analytics',
      'Encrypt data at rest and in transit across all systems',
      'Maintain comprehensive audit logging for security-relevant events',
      'Conduct regular incident response exercises and tabletop simulations',
      'Establish vendor risk management program with security requirements',
      'Migrate legacy systems to modern platforms with enhanced security'
    ]
  }
};

export const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudiesData[parseInt(id)] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-slate-400 mb-8">The requested case study could not be found.</p>
          <Link
            to="/case-study"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = () => {
    switch (caseStudy.category) {
      case 'Ransomware': return AlertTriangle;
      case 'Phishing': return Shield;
      case 'Data Breach': return TrendingUp;
      default: return Shield;
    }
  };

  const Icon = getIcon();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to="/case-study"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-${caseStudy.color}-500/10 flex items-center justify-center`}>
              <Icon className={`w-10 h-10 text-${caseStudy.color}-400`} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 bg-${caseStudy.color}-500/10 border border-${caseStudy.color}-500/30 rounded-full text-${caseStudy.color}-400 text-sm font-semibold`}>
                  {caseStudy.category}
                </span>
                <span className={`px-3 py-1 bg-${caseStudy.color}-500/10 border border-${caseStudy.color}-500/30 rounded-full text-${caseStudy.color}-400 text-sm font-semibold`}>
                  {caseStudy.threat} Threat
                </span>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {caseStudy.date}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {caseStudy.readTime}
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <p className="text-slate-300 text-lg leading-relaxed">{caseStudy.description}</p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <DollarSign className="w-8 h-8 text-green-400 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{caseStudy.impact}</div>
              <div className="text-slate-400 text-sm">Financial Impact</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <Target className="w-8 h-8 text-cyan-400 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{caseStudy.threat}</div>
              <div className="text-slate-400 text-sm">Threat Level</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <Users className="w-8 h-8 text-purple-400 mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Enterprise</div>
              <div className="text-slate-400 text-sm">Organization Type</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Executive Summary */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
              <Shield className="w-7 h-7" />
              Executive Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">{caseStudy.executive_summary}</p>
          </section>

          {/* Background */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Background</h2>
            <p className="text-slate-300 leading-relaxed">{caseStudy.background}</p>
          </section>

          {/* Threat Actor */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-400" />
              Threat Actor Profile
            </h2>
            <p className="text-slate-300 leading-relaxed">{caseStudy.threat_actor}</p>
          </section>

          {/* Attack Vector */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="w-7 h-7 text-yellow-400" />
              Attack Vector
            </h2>
            <p className="text-slate-300 leading-relaxed">{caseStudy.attack_vector}</p>
          </section>

          {/* Timeline */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Clock className="w-7 h-7 text-blue-400" />
              Incident Timeline
            </h2>
            <div className="space-y-4">
              {caseStudy.timeline.map((event, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-cyan-400 mt-2 group-hover:scale-125 transition-transform"></div>
                  <div className="flex-1 pb-6 border-l-2 border-slate-700 pl-6 ml-1.5">
                    <div className="text-cyan-400 font-semibold mb-1">{event.time}</div>
                    <div className="text-slate-300">{event.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Details */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-green-400" />
              Impact Analysis
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" /> Financial Impact
                </h3>
                <p className="text-slate-300 leading-relaxed">{caseStudy.impact_details.financial}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" /> Operational Impact
                </h3>
                <p className="text-slate-300 leading-relaxed">{caseStudy.impact_details.operational}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" /> Reputational Impact
                </h3>
                <p className="text-slate-300 leading-relaxed">{caseStudy.impact_details.reputational}</p>
              </div>
            </div>
          </section>

          {/* Response Strategy */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-cyan-400" />
              Response Strategy
            </h2>
            <ul className="space-y-3">
              {caseStudy.response_strategy.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Lessons Learned */}
          <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="w-7 h-7 text-yellow-400" />
              Lessons Learned
            </h2>
            <ul className="space-y-3">
              {caseStudy.lessons_learned.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Recommendations */}
          <section className="bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-cyan-400" />
              Security Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.recommendations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/50 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help with Your Security Posture?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our team of cybersecurity experts can help you assess risks and implement robust defense strategies.
          </p>
          <Link
            to="/risk-analyzer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            Analyze Your Risk
            <Shield className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
