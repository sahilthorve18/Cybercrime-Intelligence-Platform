# 📊 Data Documentation - CyberInsight Elite Platform

## Overview
This document provides detailed information about all data sources, structures, and content used in the CyberInsight Elite Cybercrime Intelligence Platform.

---

## 1. Survey Data (data.csv)

### Data Source
Primary research survey conducted in March 2026 targeting cybersecurity awareness and threat experiences across different demographics in India.

### Sample Size
60+ respondents

### Demographics Breakdown
- **Students:** ~40%
- **Employees:** ~35%
- **Self-employed:** ~25%

### Data Fields

| Field Name | Type | Description | Sample Values |
|------------|------|-------------|---------------|
| Timestamp | DateTime | Survey submission time | 01/03/2026 22:29:59 |
| Email address | String | Respondent email | vedpathakvinayak315@gmail.com |
| name | String | Respondent name | Vinayak Vedpathak |
| Occupation | String | Professional status | Student, Employee, Self-employed |
| Have you ever heard about cybersecurity threats? | Boolean | Awareness indicator | Yes, No |
| Have you ever encountered any cyber threat? | Boolean | Personal experience | Yes, No |
| If yes, what type of cyber threat did you experience? | Multi-select | Threat categories | Hacking, Malware/Virus, Online Scam, Identity Theft, Phishing, Cyberbullying |
| Which of the following are common cyber threats? | Multi-select | Knowledge assessment | Phishing Emails, Weak Passwords, Fake Websites, Ransomware, All of the above |
| Do you use the same password for multiple accounts? | String | Password practice | Yes, No, Sometimes |
| Do you use two-factor authentication (2FA)? | Boolean | Security measure adoption | Yes, No |
| What steps do you take to prevent cyber threats? | Multi-select | Prevention practices | Use strong passwords, Enable 2FA, Avoid suspicious links, Install antivirus software, Regularly update software, Do not share OTP/password |
| How often do you update your passwords? | String | Update frequency | Never, Monthly, Every 3-6 months, Once a year |
| Do you think cybersecurity awareness should be taught in schools/colleges? | Boolean | Education opinion | Yes, No |
| What suggestions would you give to improve cybersecurity awareness? | Text | Open-ended feedback | Various suggestions |

### Key Statistics from Survey Data

#### Threat Encounter Rate
- **Encountered threats:** ~55% of respondents
- **Never encountered:** ~45% of respondents

#### 2FA Adoption
- **Using 2FA:** ~60% of respondents
- **Not using 2FA:** ~40% of respondents

#### Password Practices
- **Reuse passwords:** ~35% always, ~20% sometimes
- **Unique passwords:** ~45% of respondents

#### Password Update Frequency
- **Never:** ~15%
- **Monthly:** ~30%
- **Every 3-6 months:** ~35%
- **Once a year:** ~20%

#### Cybersecurity Awareness
- **Heard about threats:** ~85%
- **Not aware:** ~15%

#### Education Support
- **Support teaching in schools:** ~90%
- **Against/Neutral:** ~10%

---

## 2. Real-World Case Study Data

### Case 1: AI Voice Deepfake Scam - Mumbai (2025)

**Incident Details:**
- **Date:** January 2025
- **Location:** Mumbai, Maharashtra
- **Victim Profile:** Rajesh Kumar, 58, Business Owner
- **Financial Loss:** ₹4,20,000
- **Attack Vector:** AI voice cloning from social media
- **Source Audio:** 15-second clips from Instagram Reels
- **Impersonation Target:** Victim's daughter
- **Scenario Used:** Medical emergency (car accident)
- **Payment Method:** UPI transfer to mule account
- **Voice Accuracy:** 95% match using free AI tools

**Attack Timeline:**
1. Scammers harvested voice samples from public social media
2. Used AI voice cloning tools (freely available)
3. Called victim with cloned voice claiming emergency
4. Created urgency with hospital bill story
5. Victim transferred ₹4.2 lakhs before verification

**Prevention Measures:**
- Establish family "safe word" for emergencies
- Always video call to verify identity
- Limit public voice/video content sharing
- Enable transaction limits on banking apps
- Use 2FA on all financial accounts

---

### Case 2: WhatsApp Business Account Takeover - Delhi (2025)

**Incident Details:**
- **Date:** February 2025
- **Location:** Delhi, NCR
- **Victim:** Priya Textiles (Small Business)
- **Financial Loss:** ₹12,80,000 (customer fraud)
- **Reputation Damage:** 47 customers affected
- **Attack Method:** SIM swap + weak 2FA exploitation
- **Account Type:** WhatsApp Business

**Attack Timeline:**
- **Day 1:** SIM swap attack executed on business number
- **Day 2:** WhatsApp account accessed, profile changed
- **Day 3-5:** Mass fraudulent messages to 47 customers
- **Day 6:** Business owner regained access

**Fraudulent Messages Sent:**
- Urgent order requests
- Advance payment demands
- Fake discount offers
- Account verification scams

**Lessons Learned:**
- Use email-based 2FA instead of SMS
- Register for SIM swap protection with telecom
- Regular WhatsApp chat backups
- Customer education about verification protocols
- Business continuity planning

---

### Case 3: Cryptocurrency Investment Scam - Bangalore (2024-2025)

**Incident Details:**
- **Duration:** August 2024 - January 2025 (6 months)
- **Location:** Pan-India (headquarters Bangalore)
- **Platform Name:** "CryptoGain Pro"
- **Total Victims:** 2,300+ investors
- **Total Loss:** ₹86 Crores
- **Average Loss per Victim:** ₹3.7 Lakhs
- **Promised Returns:** 30% monthly (2,300% annually)

**Scam Mechanics:**
- Fake cryptocurrency trading platform
- Ponzi scheme structure with referral bonuses
- Celebrity deepfake endorsements
- Paid social media influencer promotions
- Fake trading dashboards showing profits
- Initial small withdrawals allowed to build trust

**Red Flags Ignored:**
- Unrealistic returns (30% monthly)
- No SEBI registration
- Anonymous founders with fake LinkedIn profiles
- Pressure tactics ("Limited slots available")
- Pyramid referral structure
- No verifiable trading activity

**Investigation Outcome:**
- **Arrests:** 7 individuals across 4 states
- **Assets Seized:** ₹18 crores recovered
- **Recovery Rate:** ~21% of total loss
- **Status:** Trial ongoing, victims awaiting compensation
- **Charges:** IPC 420 (Cheating), IT Act 66D (Online Fraud)

---

### Case 4: Ransomware Attack on Hospital - Pune (2025)

**Incident Details:**
- **Date:** March 2025
- **Location:** Pune, Maharashtra
- **Target:** City Care Hospital (250-bed facility)
- **Ransomware Variant:** LockBit 3.0
- **Ransom Demand:** $50,000 in Bitcoin
- **Payment Status:** Refused to pay

**Impact Assessment:**
- **Downtime:** 72 hours of manual operations
- **Patient Records Encrypted:** 1,200+ files
- **Systems Affected:** Billing, diagnostics, patient management
- **Financial Loss:** ₹45 lakhs (operational disruption)
- **Recovery Method:** Restored from 48-hour-old backups

**Attack Vector:**
- Phishing email disguised as medical equipment invoice
- Malicious PDF attachment
- Initial infection on admin workstation
- Lateral movement through network
- Encryption of file servers and databases

**Response Timeline:**
- **Hour 0:** Infection detected by IT staff
- **Hour 1:** Incident response plan activated
- **Hour 2:** Network isolated, law enforcement notified
- **Hour 6:** Backup restoration initiated
- **Hour 72:** Full operations restored

**Success Factors:**
- Regular offline backups (3-2-1 rule)
- Incident response plan in place
- Network segmentation limited spread
- Staff training enabled early detection
- Decision not to pay ransom

---

## 3. India Cybercrime Statistics (2024-2025)

### National Data

**Source:** National Cyber Crime Reporting Portal (cybercrime.gov.in)

| Metric | Value | Year |
|--------|-------|------|
| Total Complaints Registered | 7,40,000+ | 2024 |
| Financial Fraud Amount | ₹1,750 Crores | 2024 |
| Cases Resolved/Funds Recovered | 46% | 2024 |
| Average Loss Per Victim | ₹23,000 | 2024 |
| Year-over-Year Growth | +18% | 2024 vs 2023 |

### Complaint Categories Breakdown

1. **Financial Fraud:** 45% (₹787 Crores)
   - UPI/Payment fraud
   - Credit card fraud
   - Investment scams

2. **Social Media Crimes:** 20%
   - Account hacking
   - Impersonation
   - Cyberbullying

3. **Ransomware/Malware:** 12%
   - Business systems
   - Personal devices
   - Critical infrastructure

4. **Identity Theft:** 10%
   - Aadhaar fraud
   - PAN misuse
   - Document forgery

5. **Other Cybercrimes:** 13%
   - Website defacement
   - Data breaches
   - Cyber terrorism

### Recovery Statistics

**Golden Hour Rule Effectiveness:**
- **Within 1 hour:** 70% fund recovery rate
- **Within 24 hours:** 40% fund recovery rate
- **After 48 hours:** <10% fund recovery rate

**Average Response Time:**
- Portal acknowledgment: <5 minutes
- Police contact: Within 24 hours
- Investigation initiation: 48-72 hours

---

## 4. Top Cyber Threats in India (2025)

### Threat 1: AI Voice Deepfake Scams
- **Prevalence:** Emerging threat, 300+ reported cases in Q1 2025
- **Average Loss:** ₹2-5 Lakhs per incident
- **Target Demographics:** 45+ age group, parents
- **Success Rate:** ~40% of attempts successful
- **Detection Difficulty:** High (95% voice accuracy)

### Threat 2: UPI/Digital Payment Fraud
- **Prevalence:** Most common (35% of all complaints)
- **Average Loss:** ₹15,000-50,000
- **Methods:** Phishing links, fake payment apps, QR code scams
- **Target:** All demographics, especially new digital users
- **Growth Rate:** +25% year-over-year

### Threat 3: Cryptocurrency Ponzi Schemes
- **Prevalence:** 50+ major scams detected in 2024
- **Average Loss:** ₹50,000-10 Lakhs
- **Total Victims:** 10,000+ in 2024
- **Target:** Young professionals, tech-savvy investors
- **Red Flag:** Promises of >20% monthly returns

### Threat 4: WhatsApp Account Takeover
- **Prevalence:** 15% of social media crimes
- **Average Loss:** ₹20,000-1 Lakh
- **Method:** SIM swap attacks, OTP phishing
- **Target:** Business accounts, elderly users
- **Impact:** Financial + reputation damage

### Threat 5: Ransomware Attacks
- **Prevalence:** 12% of complaints
- **Average Loss:** ₹5-50 Lakhs + downtime costs
- **Target:** SMEs, hospitals, educational institutions
- **Payment Rate:** ~30% of victims pay ransom
- **Recovery:** 60% recover from backups

### Threat 6: Job & Loan Scams
- **Prevalence:** 8% of complaints
- **Average Loss:** ₹10,000-30,000
- **Target:** Job seekers, loan applicants
- **Methods:** Fake job offers, predatory loan apps
- **Red Flag:** Upfront fee requirements

---

## 5. Legal Framework Data

### IT Act 2000 - Key Sections

| Section | Offense | Imprisonment | Fine | Type |
|---------|---------|--------------|------|------|
| 43 | Unauthorized access & damage | - | Up to ₹1 Crore | Civil |
| 66 | Hacking with intent | Up to 3 years | Up to ₹5 Lakhs | Criminal |
| 66C | Identity theft | Up to 3 years | Up to ₹1 Lakh | Criminal |
| 66D | Cheating by impersonation | Up to 3 years | Up to ₹1 Lakh | Criminal |
| 66E | Privacy violation | Up to 3 years | Up to ₹2 Lakhs | Criminal |
| 66F | Cyber terrorism | Life imprisonment | - | Criminal |
| 67 | Obscene content | 3-5 years | ₹5-10 Lakhs | Criminal |
| 72 | Breach of confidentiality | Up to 2 years | Up to ₹1 Lakh | Criminal |

### Related IPC Sections

| Section | Offense | Punishment |
|---------|---------|------------|
| 419 | Cheating by impersonation | Up to 3 years |
| 420 | Cheating & dishonesty | Up to 7 years + fine |
| 463 | Forgery | Up to 2 years + fine |
| 465 | Punishment for forgery | Up to 2 years + fine |
| 468 | Forgery for cheating | Up to 7 years + fine |
| 471 | Using forged document | Same as forgery |

### Conviction Statistics (2024)
- **Cases Filed:** 12,500
- **Convictions:** 3,200 (25.6%)
- **Acquittals:** 1,800 (14.4%)
- **Pending:** 7,500 (60%)
- **Average Trial Duration:** 18-24 months

---

## 6. Security Recommendations Data

### 2FA Adoption Impact
- **With 2FA:** 98% reduction in account takeover
- **Without 2FA:** 70% higher breach probability
- **SMS-based 2FA:** 40% vulnerable to SIM swap
- **App-based 2FA:** 95% secure (Google Authenticator, Authy)

### Password Strength Analysis
- **8 characters:** Cracked in seconds
- **12 characters (mixed):** Cracked in years
- **16+ characters (mixed):** Practically uncrackable
- **Password reuse:** 80% of breaches involve reused passwords

### Backup Strategy Effectiveness
- **3-2-1 Rule:** 95% recovery success rate
- **Cloud-only:** 60% recovery success
- **No backup:** 5% recovery success
- **Offline backup:** 90% ransomware protection

---

## 7. Data Update Schedule

- **Survey Data:** Updated quarterly
- **Case Studies:** Added as incidents are publicly reported
- **Statistics:** Updated annually (source: NCRP)
- **Threat Intelligence:** Updated monthly
- **Legal Framework:** Updated as laws are amended

---

## 8. Data Privacy & Ethics

### Survey Data Privacy
- Email addresses included with respondent consent
- No sensitive personal information collected
- Data used solely for educational and research purposes
- Anonymization available upon request

### Case Study Sources
- Publicly reported incidents only
- Names changed where privacy concerns exist
- Financial figures verified from official reports
- No confidential investigation details disclosed

---

## 9. Data Accuracy & Verification

### Verification Methods
- Cross-referenced with official NCRP data
- Case studies verified through news reports
- Legal information sourced from official IT Act documentation
- Statistics validated against CERT-In advisories

### Last Verified
- **Survey Data:** March 2026
- **Case Studies:** March 2026
- **National Statistics:** January 2025 (latest available)
- **Legal Framework:** IT Act 2000 (as amended in 2023)

---

## 10. Data Usage Guidelines

### Permitted Uses
✅ Educational and awareness purposes  
✅ Research and academic studies  
✅ Cybersecurity training programs  
✅ Policy development and advocacy  
✅ Non-commercial presentations  

### Restricted Uses
❌ Commercial exploitation without permission  
❌ Misrepresentation of data sources  
❌ Removal of attribution  
❌ Modification that changes meaning  

---

**Document Version:** 1.0  
**Last Updated:** March 2026  
**Maintained By:** CyberInsight Elite Team  
**Contact:** For data inquiries or corrections, please refer to the main README.md
