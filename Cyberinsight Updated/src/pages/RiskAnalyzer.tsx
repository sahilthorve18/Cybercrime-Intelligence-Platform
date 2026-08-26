import { Shield, AlertTriangle, TrendingUp, Lock, Eye, Zap, CheckCircle, XCircle, User, Users, Mail, Phone, MapPin, Briefcase, Download, FileText } from 'lucide-react';
import { useState } from 'react';
import jsPDF from 'jspdf';

export const RiskAnalyzer = () => {
  const [riskScore, setRiskScore] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);
  const [analyzerMode, setAnalyzerMode] = useState<'personal' | 'group'>('personal');
  
  // Personal analyzer form state
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    location: '',
    role: '',
    use2FA: '',
    passwordStrength: '',
    updateFrequency: '',
    publicWifi: '',
    clickedSuspiciousLinks: '',
    deviceSecurity: ''
  });

  const analyzeRisk = () => {
    // Calculate risk based on actual answers
    let score = 0;
    
    // Base score
    score += 20;
    
    // 2FA Check (most important)
    if (personalInfo.use2FA === 'no') score += 25;
    else if (personalInfo.use2FA === 'sometimes') score += 15;
    else if (personalInfo.use2FA === 'yes') score -= 10;
    
    // Password Strength
    if (personalInfo.passwordStrength === 'weak') score += 20;
    else if (personalInfo.passwordStrength === 'medium') score += 10;
    else if (personalInfo.passwordStrength === 'strong') score -= 5;
    
    // Update Frequency
    if (personalInfo.updateFrequency === 'never') score += 15;
    else if (personalInfo.updateFrequency === 'yearly') score += 10;
    else if (personalInfo.updateFrequency === 'monthly') score += 5;
    else if (personalInfo.updateFrequency === 'weekly') score -= 5;
    
    // Public WiFi Usage
    if (personalInfo.publicWifi === 'yes-no-vpn') score += 20;
    else if (personalInfo.publicWifi === 'yes-with-vpn') score += 5;
    else if (personalInfo.publicWifi === 'no') score -= 5;
    
    // Suspicious Links
    if (personalInfo.clickedSuspiciousLinks === 'yes') score += 25;
    else if (personalInfo.clickedSuspiciousLinks === 'unsure') score += 10;
    else if (personalInfo.clickedSuspiciousLinks === 'no') score -= 5;
    
    // Device Security
    if (personalInfo.deviceSecurity === 'none') score += 15;
    else if (personalInfo.deviceSecurity === 'basic') score += 5;
    else if (personalInfo.deviceSecurity === 'advanced') score -= 10;
    
    // Ensure score is within 0-100
    const finalScore = Math.max(0, Math.min(100, score));
    
    setRiskScore(finalScore);
    setAnalyzed(true);
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: 'Low', color: 'green', icon: CheckCircle };
    if (score < 70) return { level: 'Medium', color: 'yellow', icon: AlertTriangle };
    return { level: 'High', color: 'red', icon: XCircle };
  };

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const isPersonalFormValid = () => {
    return personalInfo.name && 
           personalInfo.email && 
           personalInfo.organization &&
           personalInfo.use2FA &&
           personalInfo.passwordStrength &&
           personalInfo.updateFrequency &&
           personalInfo.publicWifi &&
           personalInfo.clickedSuspiciousLinks &&
           personalInfo.deviceSecurity;
  };

  const downloadReport = () => {
    const reportDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    const getRiskLevelText = (score: number) => {
      if (score < 30) return 'LOW RISK';
      if (score < 70) return 'MEDIUM RISK';
      return 'HIGH RISK';
    };

    const getRiskColor = (score: number) => {
      if (score < 30) return { bg: [220, 252, 231], border: [34, 197, 94], text: [21, 128, 61] };
      if (score < 70) return { bg: [254, 249, 195], border: [234, 179, 8], text: [161, 98, 7] };
      return { bg: [254, 226, 226], border: [239, 68, 68], text: [185, 28, 28] };
    };

    const getSecurityStatus = (answer: string, type: string) => {
      switch(type) {
        case '2fa':
          return answer === 'yes' ? 'Excellent! 2FA is enabled' :
                 answer === 'sometimes' ? 'Enable 2FA on all accounts' :
                 'Critical: Enable 2FA immediately';
        case 'password':
          return answer === 'strong' ? 'Strong passwords in use' :
                 answer === 'medium' ? 'Consider using longer passwords' :
                 'Use complex passwords (12+ characters)';
        case 'updates':
          return answer === 'weekly' ? 'Excellent update frequency' :
                 answer === 'monthly' ? 'Good update practice' :
                 answer === 'yearly' ? 'Update more frequently' :
                 'Enable automatic updates now';
        case 'wifi':
          return answer === 'no' ? 'Great! Avoiding public WiFi' :
                 answer === 'yes-with-vpn' ? 'Good! VPN protects you' :
                 'Use VPN or avoid public WiFi';
        case 'phishing':
          return answer === 'no' ? 'Excellent vigilance' :
                 answer === 'unsure' ? 'Be more cautious with links' :
                 'High risk: Take security training';
        case 'security':
          return answer === 'advanced' ? 'Comprehensive protection' :
                 answer === 'basic' ? 'Consider full security suite' :
                 'Install antivirus software ASAP';
        default:
          return '';
      }
    };

    // Create PDF
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let yPosition = 20;

    const colors = getRiskColor(riskScore);

    // Header
    pdf.setFillColor(8, 145, 178);
    pdf.rect(0, 0, pageWidth, 40, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.text('Cybersecurity Risk Assessment Report', pageWidth / 2, 20, { align: 'center' });
    pdf.setFontSize(10);
    pdf.text('CyberInsight Platform - Personal Risk Analysis', pageWidth / 2, 28, { align: 'center' });
    pdf.text(`Generated on ${reportDate}`, pageWidth / 2, 35, { align: 'center' });

    yPosition = 50;

    // User Information Section
    pdf.setFillColor(255, 255, 255);
    pdf.setDrawColor(8, 145, 178);
    pdf.setLineWidth(1);
    pdf.rect(margin, yPosition, contentWidth, 40, 'S');
    
    pdf.setTextColor(8, 145, 178);
    pdf.setFontSize(14);
    pdf.text('User Information', margin + 5, yPosition + 10);
    
    pdf.setTextColor(30, 41, 59);
    pdf.setFontSize(10);
    yPosition += 18;
    pdf.text(`Name: ${personalInfo.name}`, margin + 5, yPosition);
    yPosition += 7;
    pdf.text(`Email: ${personalInfo.email}`, margin + 5, yPosition);
    yPosition += 7;
    pdf.text(`Organization: ${personalInfo.organization}`, margin + 5, yPosition);
    if (personalInfo.phone || personalInfo.location || personalInfo.role) {
      yPosition += 7;
      const additionalInfo = [
        personalInfo.phone && `Phone: ${personalInfo.phone}`,
        personalInfo.location && `Location: ${personalInfo.location}`,
        personalInfo.role && `Role: ${personalInfo.role}`
      ].filter(Boolean).join(' | ');
      pdf.text(additionalInfo, margin + 5, yPosition);
    }

    yPosition += 20;

    // Risk Score Section
    pdf.setFillColor(colors.bg[0], colors.bg[1], colors.bg[2]);
    pdf.setDrawColor(colors.border[0], colors.border[1], colors.border[2]);
    pdf.setLineWidth(2);
    pdf.rect(margin, yPosition, contentWidth, 35, 'FD');
    
    pdf.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    pdf.setFontSize(36);
    pdf.text(`${riskScore}/100`, pageWidth / 2, yPosition + 15, { align: 'center' });
    pdf.setFontSize(16);
    pdf.text(getRiskLevelText(riskScore), pageWidth / 2, yPosition + 25, { align: 'center' });
    pdf.setFontSize(9);
    pdf.setTextColor(71, 85, 105);
    pdf.text('Your overall cybersecurity risk assessment score', pageWidth / 2, yPosition + 32, { align: 'center' });

    yPosition += 45;

    // Security Assessment Details
    pdf.setTextColor(8, 145, 178);
    pdf.setFontSize(14);
    pdf.text('Security Assessment Details', margin, yPosition);
    yPosition += 10;

    const assessments = [
      {
        title: 'Two-Factor Authentication',
        answer: personalInfo.use2FA === 'yes' ? 'Yes, Always' : personalInfo.use2FA === 'sometimes' ? 'Sometimes' : 'No',
        status: getSecurityStatus(personalInfo.use2FA, '2fa'),
        level: personalInfo.use2FA === 'yes' ? 'good' : personalInfo.use2FA === 'sometimes' ? 'warning' : 'critical'
      },
      {
        title: 'Password Strength',
        answer: personalInfo.passwordStrength === 'strong' ? 'Strong (12+ chars)' : personalInfo.passwordStrength === 'medium' ? 'Medium (8-11 chars)' : 'Weak',
        status: getSecurityStatus(personalInfo.passwordStrength, 'password'),
        level: personalInfo.passwordStrength === 'strong' ? 'good' : personalInfo.passwordStrength === 'medium' ? 'warning' : 'critical'
      },
      {
        title: 'Software Updates',
        answer: personalInfo.updateFrequency === 'weekly' ? 'Weekly' : personalInfo.updateFrequency === 'monthly' ? 'Monthly' : personalInfo.updateFrequency === 'yearly' ? 'Rarely' : 'Never',
        status: getSecurityStatus(personalInfo.updateFrequency, 'updates'),
        level: personalInfo.updateFrequency === 'weekly' || personalInfo.updateFrequency === 'monthly' ? 'good' : personalInfo.updateFrequency === 'yearly' ? 'warning' : 'critical'
      },
      {
        title: 'Public WiFi Usage',
        answer: personalInfo.publicWifi === 'no' ? 'No, I avoid it' : personalInfo.publicWifi === 'yes-with-vpn' ? 'Yes, with VPN' : 'Yes, without VPN',
        status: getSecurityStatus(personalInfo.publicWifi, 'wifi'),
        level: personalInfo.publicWifi === 'no' ? 'good' : personalInfo.publicWifi === 'yes-with-vpn' ? 'warning' : 'critical'
      },
      {
        title: 'Phishing Awareness',
        answer: personalInfo.clickedSuspiciousLinks === 'no' ? 'Never clicked' : personalInfo.clickedSuspiciousLinks === 'unsure' ? 'Not sure' : 'Yes, clicked',
        status: getSecurityStatus(personalInfo.clickedSuspiciousLinks, 'phishing'),
        level: personalInfo.clickedSuspiciousLinks === 'no' ? 'good' : personalInfo.clickedSuspiciousLinks === 'unsure' ? 'warning' : 'critical'
      },
      {
        title: 'Device Security',
        answer: personalInfo.deviceSecurity === 'advanced' ? 'Full Suite' : personalInfo.deviceSecurity === 'basic' ? 'Basic Antivirus' : 'None',
        status: getSecurityStatus(personalInfo.deviceSecurity, 'security'),
        level: personalInfo.deviceSecurity === 'advanced' ? 'good' : personalInfo.deviceSecurity === 'basic' ? 'warning' : 'critical'
      }
    ];

    assessments.forEach((assessment) => {
      if (yPosition > 240) {
        pdf.addPage();
        yPosition = 20;
      }

      const bgColor = assessment.level === 'good' ? [240, 253, 244] : assessment.level === 'warning' ? [254, 252, 232] : [254, 242, 242];
      const borderColor = assessment.level === 'good' ? [34, 197, 94] : assessment.level === 'warning' ? [234, 179, 8] : [239, 68, 68];

      pdf.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
      pdf.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
      pdf.setLineWidth(1);
      pdf.rect(margin, yPosition, contentWidth, 20, 'FD');

      pdf.setTextColor(30, 41, 59);
      pdf.setFontSize(11);
      pdf.text(assessment.title, margin + 3, yPosition + 7);
      pdf.setFontSize(9);
      pdf.setTextColor(71, 85, 105);
      pdf.text(`Answer: ${assessment.answer}`, margin + 3, yPosition + 13);
      pdf.text(`Status: ${assessment.status}`, margin + 3, yPosition + 18);

      yPosition += 23;
    });

    // Add new page for recommendations
    pdf.addPage();
    yPosition = 20;

    // Recommendations Section
    pdf.setFillColor(239, 246, 255);
    pdf.setDrawColor(59, 130, 246);
    pdf.setLineWidth(1.5);
    pdf.rect(margin, yPosition, contentWidth, pageHeight - 60, 'S');

    pdf.setTextColor(30, 64, 175);
    pdf.setFontSize(14);
    pdf.text('Personalized Recommendations', margin + 5, yPosition + 10);

    yPosition += 18;

    const recommendations = [];
    if (personalInfo.use2FA !== 'yes') {
      recommendations.push('Enable Two-Factor Authentication on all your accounts immediately. This is the single most effective security measure.');
    }
    if (personalInfo.passwordStrength !== 'strong') {
      recommendations.push('Strengthen Your Passwords: Use at least 12 characters with a mix of uppercase, lowercase, numbers, and symbols. Consider using a password manager.');
    }
    if (personalInfo.updateFrequency === 'yearly' || personalInfo.updateFrequency === 'never') {
      recommendations.push('Enable Automatic Updates: Keep your software and operating system up-to-date to protect against known vulnerabilities.');
    }
    if (personalInfo.publicWifi === 'yes-no-vpn') {
      recommendations.push('Use a VPN: When using public WiFi, always use a Virtual Private Network to encrypt your connection.');
    }
    if (personalInfo.clickedSuspiciousLinks === 'yes') {
      recommendations.push('Security Awareness Training: Take a phishing awareness course to better identify suspicious emails and links.');
    }
    if (personalInfo.deviceSecurity !== 'advanced') {
      recommendations.push('Install Comprehensive Security Software: Use a full security suite with antivirus, firewall, and real-time protection.');
    }
    if (riskScore < 30) {
      recommendations.push('Maintain Your Practices: You\'re doing great! Keep up these excellent security habits and stay informed about new threats.');
    }
    recommendations.push('Regular Security Audits: Review your security settings quarterly and update them as needed.');
    recommendations.push('Backup Your Data: Maintain regular backups of important files in a secure location.');
    recommendations.push('Stay Informed: Follow cybersecurity news and best practices to stay ahead of emerging threats.');

    pdf.setTextColor(30, 41, 59);
    pdf.setFontSize(10);
    recommendations.forEach((rec, index) => {
      if (yPosition > 260) {
        pdf.addPage();
        yPosition = 20;
      }
      const bullet = `${index + 1}. `;
      const lines = pdf.splitTextToSize(rec, contentWidth - 15);
      pdf.text(bullet, margin + 5, yPosition);
      pdf.text(lines, margin + 12, yPosition);
      yPosition += lines.length * 5 + 3;
    });

    // Footer
    const footerY = pageHeight - 30;
    pdf.setDrawColor(226, 232, 240);
    pdf.setLineWidth(0.5);
    pdf.line(margin, footerY, pageWidth - margin, footerY);
    
    pdf.setTextColor(100, 116, 139);
    pdf.setFontSize(9);
    pdf.text('CyberInsight Platform - Cybercrime Intelligence & Risk Analysis', pageWidth / 2, footerY + 7, { align: 'center' });
    pdf.setFontSize(8);
    pdf.text('This report is for informational purposes only. Consult with a cybersecurity professional for comprehensive security assessment.', pageWidth / 2, footerY + 12, { align: 'center' });
    pdf.text(`Report generated on ${reportDate}`, pageWidth / 2, footerY + 17, { align: 'center' });

    // Save PDF
    const fileName = `CyberSecurity_Risk_Report_${personalInfo.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    pdf.save(fileName);
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

          {/* Mode Toggle */}
          <div className="mt-8 inline-flex gap-2 p-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl">
            <button
              onClick={() => {
                setAnalyzerMode('personal');
                setAnalyzed(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                analyzerMode === 'personal'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-5 h-5" />
              Personal Risk
            </button>
            <button
              onClick={() => {
                setAnalyzerMode('group');
                setAnalyzed(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                analyzerMode === 'group'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-5 h-5" />
              Group Risk
            </button>
          </div>
        </div>

        {/* Risk Analysis Card */}
        {analyzerMode === 'personal' ? (
          // Personal Risk Analyzer
          <div className="mb-12 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
            {!analyzed ? (
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-6">
                    <User className="w-24 h-24 text-cyan-400 mx-auto" />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Personal Risk Assessment</h2>
                  <p className="text-slate-400 leading-relaxed">
                    Enter your details to receive a personalized cybersecurity risk evaluation tailored to your profile and online activities.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={personalInfo.name}
                          onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          value={personalInfo.email}
                          onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          value={personalInfo.phone}
                          onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                          placeholder="+1 234 567 8900"
                          className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Organization *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={personalInfo.organization}
                          onChange={(e) => handlePersonalInfoChange('organization', e.target.value)}
                          placeholder="Acme Corp"
                          className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={personalInfo.location}
                          onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                          placeholder="New York, USA"
                          className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2">
                        Role/Title
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={personalInfo.role}
                          onChange={(e) => handlePersonalInfoChange('role', e.target.value)}
                          placeholder="Security Analyst"
                          className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security Questions Section */}
                  <div className="border-t border-slate-700/50 pt-6 mt-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-cyan-400" />
                      Security Practices
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Answer these questions to help us assess your cybersecurity risk level
                    </p>

                    <div className="space-y-6">
                      {/* 2FA Question */}
                      <div>
                        <label className="block text-sm font-semibold text-cyan-400 mb-3">
                          Do you use Two-Factor Authentication (2FA)? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { value: 'yes', label: 'Yes, Always', color: 'green' },
                            { value: 'sometimes', label: 'Sometimes', color: 'yellow' },
                            { value: 'no', label: 'No', color: 'red' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handlePersonalInfoChange('use2FA', option.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                personalInfo.use2FA === option.value
                                  ? `border-${option.color}-500 bg-${option.color}-500/10`
                                  : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                              }`}
                            >
                              <span className={`font-semibold ${
                                personalInfo.use2FA === option.value
                                  ? `text-${option.color}-400`
                                  : 'text-slate-400'
                              }`}>
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Password Strength */}
                      <div>
                        <label className="block text-sm font-semibold text-cyan-400 mb-3">
                          How would you rate your password strength? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { value: 'strong', label: 'Strong (12+ chars, mixed)', color: 'green' },
                            { value: 'medium', label: 'Medium (8-11 chars)', color: 'yellow' },
                            { value: 'weak', label: 'Weak (short/simple)', color: 'red' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handlePersonalInfoChange('passwordStrength', option.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                personalInfo.passwordStrength === option.value
                                  ? `border-${option.color}-500 bg-${option.color}-500/10`
                                  : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                              }`}
                            >
                              <span className={`font-semibold text-sm ${
                                personalInfo.passwordStrength === option.value
                                  ? `text-${option.color}-400`
                                  : 'text-slate-400'
                              }`}>
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Software Update Frequency */}
                      <div>
                        <label className="block text-sm font-semibold text-cyan-400 mb-3">
                          How often do you update your software/apps? *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            { value: 'weekly', label: 'Weekly', color: 'green' },
                            { value: 'monthly', label: 'Monthly', color: 'cyan' },
                            { value: 'yearly', label: 'Rarely', color: 'yellow' },
                            { value: 'never', label: 'Never', color: 'red' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handlePersonalInfoChange('updateFrequency', option.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                personalInfo.updateFrequency === option.value
                                  ? `border-${option.color}-500 bg-${option.color}-500/10`
                                  : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                              }`}
                            >
                              <span className={`font-semibold text-sm ${
                                personalInfo.updateFrequency === option.value
                                  ? `text-${option.color}-400`
                                  : 'text-slate-400'
                              }`}>
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Public WiFi Usage */}
                      <div>
                        <label className="block text-sm font-semibold text-cyan-400 mb-3">
                          Do you use public WiFi for sensitive activities? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { value: 'no', label: 'No, I avoid it', color: 'green' },
                            { value: 'yes-with-vpn', label: 'Yes, with VPN', color: 'cyan' },
                            { value: 'yes-no-vpn', label: 'Yes, without VPN', color: 'red' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handlePersonalInfoChange('publicWifi', option.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                personalInfo.publicWifi === option.value
                                  ? `border-${option.color}-500 bg-${option.color}-500/10`
                                  : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                              }`}
                            >
                              <span className={`font-semibold text-sm ${
                                personalInfo.publicWifi === option.value
                                  ? `text-${option.color}-400`
                                  : 'text-slate-400'
                              }`}>
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Suspicious Links */}
                      <div>
                        <label className="block text-sm font-semibold text-cyan-400 mb-3">
                          Have you ever clicked on suspicious links or attachments? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { value: 'no', label: 'No, Never', color: 'green' },
                            { value: 'unsure', label: 'Not Sure', color: 'yellow' },
                            { value: 'yes', label: 'Yes', color: 'red' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handlePersonalInfoChange('clickedSuspiciousLinks', option.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                personalInfo.clickedSuspiciousLinks === option.value
                                  ? `border-${option.color}-500 bg-${option.color}-500/10`
                                  : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                              }`}
                            >
                              <span className={`font-semibold ${
                                personalInfo.clickedSuspiciousLinks === option.value
                                  ? `text-${option.color}-400`
                                  : 'text-slate-400'
                              }`}>
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Device Security */}
                      <div>
                        <label className="block text-sm font-semibold text-cyan-400 mb-3">
                          What security software do you use on your devices? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { value: 'advanced', label: 'Full Suite (Antivirus + Firewall)', color: 'green' },
                            { value: 'basic', label: 'Basic Antivirus', color: 'yellow' },
                            { value: 'none', label: 'None', color: 'red' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handlePersonalInfoChange('deviceSecurity', option.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                personalInfo.deviceSecurity === option.value
                                  ? `border-${option.color}-500 bg-${option.color}-500/10`
                                  : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                              }`}
                            >
                              <span className={`font-semibold text-sm ${
                                personalInfo.deviceSecurity === option.value
                                  ? `text-${option.color}-400`
                                  : 'text-slate-400'
                              }`}>
                                {option.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 text-center">
                    <button
                      onClick={analyzeRisk}
                      disabled={!isPersonalFormValid()}
                      className={`group inline-flex items-center gap-3 px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        isPersonalFormValid()
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105'
                          : 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                      Analyze My Risk Profile
                    </button>
                    <p className="text-slate-500 text-sm mt-4">* Required fields</p>
                    <p className="text-slate-400 text-xs mt-2 flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      You'll be able to download a detailed PDF report after analysis
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-scale-in text-center">
                <div className="mb-8">
                  <RiskIcon className={`w-24 h-24 text-${risk.color}-400 mx-auto mb-6`} />
                  <h2 className="text-4xl font-bold text-white mb-4">Personal Risk Analysis</h2>
                  <div className="inline-block px-6 py-2 bg-slate-800/50 border border-slate-700 rounded-xl mb-4">
                    <p className="text-cyan-400 font-semibold">{personalInfo.name}</p>
                    <p className="text-slate-400 text-sm">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-300 font-semibold">Risk Score</span>
                    <span className="text-4xl font-bold text-white">{riskScore}/100</span>
                  </div>
                  <div className="h-6 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${risk.color}-500 to-${risk.color}-600 transition-all duration-1000 flex items-center justify-end pr-3`}
                      style={{ width: `${riskScore}%` }}
                    >
                      <span className="text-white text-xs font-bold">{risk.level}</span>
                    </div>
                  </div>
                </div>

                {/* Personalized Recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Security Status Cards based on answers */}
                  <div className={`bg-slate-800/30 border rounded-xl p-6 ${
                    personalInfo.use2FA === 'yes' ? 'border-green-500/50' : 'border-red-500/50'
                  }`}>
                    <Lock className={`w-8 h-8 mx-auto mb-3 ${
                      personalInfo.use2FA === 'yes' ? 'text-green-400' : 'text-red-400'
                    }`} />
                    <h4 className="text-white font-semibold mb-2">Two-Factor Authentication</h4>
                    <p className="text-slate-400 text-sm">
                      {personalInfo.use2FA === 'yes' ? '✅ Excellent! 2FA is enabled' :
                       personalInfo.use2FA === 'sometimes' ? '⚠️ Enable 2FA on all accounts' :
                       '❌ Critical: Enable 2FA immediately'}
                    </p>
                  </div>

                  <div className={`bg-slate-800/30 border rounded-xl p-6 ${
                    personalInfo.passwordStrength === 'strong' ? 'border-green-500/50' :
                    personalInfo.passwordStrength === 'medium' ? 'border-yellow-500/50' : 'border-red-500/50'
                  }`}>
                    <Shield className={`w-8 h-8 mx-auto mb-3 ${
                      personalInfo.passwordStrength === 'strong' ? 'text-green-400' :
                      personalInfo.passwordStrength === 'medium' ? 'text-yellow-400' : 'text-red-400'
                    }`} />
                    <h4 className="text-white font-semibold mb-2">Password Security</h4>
                    <p className="text-slate-400 text-sm">
                      {personalInfo.passwordStrength === 'strong' ? '✅ Strong passwords in use' :
                       personalInfo.passwordStrength === 'medium' ? '⚠️ Consider using longer passwords' :
                       '❌ Use complex passwords (12+ characters)'}
                    </p>
                  </div>

                  <div className={`bg-slate-800/30 border rounded-xl p-6 ${
                    personalInfo.updateFrequency === 'weekly' ? 'border-green-500/50' :
                    personalInfo.updateFrequency === 'monthly' ? 'border-cyan-500/50' :
                    personalInfo.updateFrequency === 'yearly' ? 'border-yellow-500/50' : 'border-red-500/50'
                  }`}>
                    <TrendingUp className={`w-8 h-8 mx-auto mb-3 ${
                      personalInfo.updateFrequency === 'weekly' ? 'text-green-400' :
                      personalInfo.updateFrequency === 'monthly' ? 'text-cyan-400' :
                      personalInfo.updateFrequency === 'yearly' ? 'text-yellow-400' : 'text-red-400'
                    }`} />
                    <h4 className="text-white font-semibold mb-2">Software Updates</h4>
                    <p className="text-slate-400 text-sm">
                      {personalInfo.updateFrequency === 'weekly' ? '✅ Excellent update frequency' :
                       personalInfo.updateFrequency === 'monthly' ? '✅ Good update practice' :
                       personalInfo.updateFrequency === 'yearly' ? '⚠️ Update more frequently' :
                       '❌ Enable automatic updates now'}
                    </p>
                  </div>

                  <div className={`bg-slate-800/30 border rounded-xl p-6 ${
                    personalInfo.publicWifi === 'no' ? 'border-green-500/50' :
                    personalInfo.publicWifi === 'yes-with-vpn' ? 'border-cyan-500/50' : 'border-red-500/50'
                  }`}>
                    <Eye className={`w-8 h-8 mx-auto mb-3 ${
                      personalInfo.publicWifi === 'no' ? 'text-green-400' :
                      personalInfo.publicWifi === 'yes-with-vpn' ? 'text-cyan-400' : 'text-red-400'
                    }`} />
                    <h4 className="text-white font-semibold mb-2">Public WiFi Safety</h4>
                    <p className="text-slate-400 text-sm">
                      {personalInfo.publicWifi === 'no' ? '✅ Great! Avoiding public WiFi' :
                       personalInfo.publicWifi === 'yes-with-vpn' ? '✅ Good! VPN protects you' :
                       '❌ Use VPN or avoid public WiFi'}
                    </p>
                  </div>

                  <div className={`bg-slate-800/30 border rounded-xl p-6 ${
                    personalInfo.clickedSuspiciousLinks === 'no' ? 'border-green-500/50' :
                    personalInfo.clickedSuspiciousLinks === 'unsure' ? 'border-yellow-500/50' : 'border-red-500/50'
                  }`}>
                    <AlertTriangle className={`w-8 h-8 mx-auto mb-3 ${
                      personalInfo.clickedSuspiciousLinks === 'no' ? 'text-green-400' :
                      personalInfo.clickedSuspiciousLinks === 'unsure' ? 'text-yellow-400' : 'text-red-400'
                    }`} />
                    <h4 className="text-white font-semibold mb-2">Phishing Awareness</h4>
                    <p className="text-slate-400 text-sm">
                      {personalInfo.clickedSuspiciousLinks === 'no' ? '✅ Excellent vigilance' :
                       personalInfo.clickedSuspiciousLinks === 'unsure' ? '⚠️ Be more cautious with links' :
                       '❌ High risk: Take security training'}
                    </p>
                  </div>

                  <div className={`bg-slate-800/30 border rounded-xl p-6 ${
                    personalInfo.deviceSecurity === 'advanced' ? 'border-green-500/50' :
                    personalInfo.deviceSecurity === 'basic' ? 'border-yellow-500/50' : 'border-red-500/50'
                  }`}>
                    <Shield className={`w-8 h-8 mx-auto mb-3 ${
                      personalInfo.deviceSecurity === 'advanced' ? 'text-green-400' :
                      personalInfo.deviceSecurity === 'basic' ? 'text-yellow-400' : 'text-red-400'
                    }`} />
                    <h4 className="text-white font-semibold mb-2">Device Protection</h4>
                    <p className="text-slate-400 text-sm">
                      {personalInfo.deviceSecurity === 'advanced' ? '✅ Comprehensive protection' :
                       personalInfo.deviceSecurity === 'basic' ? '⚠️ Consider full security suite' :
                       '❌ Install antivirus software ASAP'}
                    </p>
                  </div>
                </div>

                {/* Detailed Risk Breakdown */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-cyan-400" />
                    Risk Factor Breakdown
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        label: 'Authentication Security', 
                        impact: personalInfo.use2FA === 'yes' ? 'Low' : personalInfo.use2FA === 'sometimes' ? 'Medium' : 'High',
                        color: personalInfo.use2FA === 'yes' ? 'green' : personalInfo.use2FA === 'sometimes' ? 'yellow' : 'red'
                      },
                      { 
                        label: 'Password Security', 
                        impact: personalInfo.passwordStrength === 'strong' ? 'Low' : personalInfo.passwordStrength === 'medium' ? 'Medium' : 'High',
                        color: personalInfo.passwordStrength === 'strong' ? 'green' : personalInfo.passwordStrength === 'medium' ? 'yellow' : 'red'
                      },
                      { 
                        label: 'Software Hygiene', 
                        impact: personalInfo.updateFrequency === 'weekly' ? 'Low' : personalInfo.updateFrequency === 'monthly' ? 'Low' : personalInfo.updateFrequency === 'yearly' ? 'Medium' : 'High',
                        color: personalInfo.updateFrequency === 'weekly' ? 'green' : personalInfo.updateFrequency === 'monthly' ? 'green' : personalInfo.updateFrequency === 'yearly' ? 'yellow' : 'red'
                      },
                      { 
                        label: 'Network Security', 
                        impact: personalInfo.publicWifi === 'no' ? 'Low' : personalInfo.publicWifi === 'yes-with-vpn' ? 'Medium' : 'High',
                        color: personalInfo.publicWifi === 'no' ? 'green' : personalInfo.publicWifi === 'yes-with-vpn' ? 'cyan' : 'red'
                      },
                      { 
                        label: 'Social Engineering Risk', 
                        impact: personalInfo.clickedSuspiciousLinks === 'no' ? 'Low' : personalInfo.clickedSuspiciousLinks === 'unsure' ? 'Medium' : 'High',
                        color: personalInfo.clickedSuspiciousLinks === 'no' ? 'green' : personalInfo.clickedSuspiciousLinks === 'unsure' ? 'yellow' : 'red'
                      },
                      { 
                        label: 'Device Protection', 
                        impact: personalInfo.deviceSecurity === 'advanced' ? 'Low' : personalInfo.deviceSecurity === 'basic' ? 'Medium' : 'High',
                        color: personalInfo.deviceSecurity === 'advanced' ? 'green' : personalInfo.deviceSecurity === 'basic' ? 'yellow' : 'red'
                      }
                    ].map((factor, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-slate-300 font-medium">{factor.label}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-${factor.color}-500 transition-all duration-500`}
                              style={{ 
                                width: factor.impact === 'Low' ? '33%' : factor.impact === 'Medium' ? '66%' : '100%' 
                              }}
                            ></div>
                          </div>
                          <span className={`text-${factor.color}-400 font-semibold w-20 text-right`}>
                            {factor.impact} Risk
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setAnalyzed(false)}
                  className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 mr-4"
                >
                  Analyze Again
                </button>

                <button
                  onClick={downloadReport}
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download Report
                </button>
              </div>
            )}
          </div>
        ) : (
          // Group Risk Analyzer (Original)
          <div className="mb-12 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
            <div className="relative inline-block mb-8">
              <Users className="w-32 h-32 text-cyan-400 mx-auto animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl"></div>
            </div>
            
            {!analyzed ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-4">Group Risk Assessment</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Comprehensive risk analyzer for teams and organizations. Evaluates collective security posture across multiple dimensions including threat exposure, vulnerability management, and compliance status.
                </p>
                <button
                  onClick={analyzeRisk}
                  className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Analyze Group Risk
                </button>
              </>
            ) : (
              <div className="animate-scale-in">
                <div className="mb-6">
                  <RiskIcon className={`w-24 h-24 text-${risk.color}-400 mx-auto mb-4`} />
                  <h2 className="text-4xl font-bold text-white mb-2">Group Risk Score: {riskScore}</h2>
                  <div className={`inline-block px-6 py-2 bg-${risk.color}-500/10 border border-${risk.color}-500/30 rounded-full`}>
                    <span className={`text-${risk.color}-400 text-lg font-semibold`}>{risk.level} Risk Level</span>
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
        )}

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
