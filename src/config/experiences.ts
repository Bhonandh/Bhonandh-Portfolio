import ISULogo from 'assets/images/isu-logo.jpg'
import SRMLogo from 'assets/images/Srm-logo1.jpg'
import { ExperienceInfo } from 'types'

export const experiences: ExperienceInfo[] = [
  {
    title: 'Senior Full-Stack Software Engineer',
    company: 'AppMan',
    logo: ISULogo,
    date: 'Jan 2021 - Jul 2024',
    description: `
- Developed and maintained core multi-tenant SaaS products, including E-KYC Platform,
Background Check Platform, Document OCR Pipelines with AI Chatbot, Transaction & Credits System, Video Conferencing App.
- Successfully migrated production data for 200+ client companies, encompassing thousands of cases, from old to new systems.
- Played a key role in Agile processes, including product design, technical solution design, resource planning, and sprint planning.
- Supervised ~10 junior and intern developers through code reviews, guidance, and mentorship.
- Improved code review processes and promoted high-quality code, leading to a cleaner, more consistent codebase across the team.
`,
  },
  {
    title: 'Graduate Assistant',
    company: 'Indiana State University',
    logo: ISULogo,
    date: 'Jan 2024 - Present',
    description: `
- Ensure the university website is updated, accurate, and user-friendly, applying principles akin to maintaining enterprise network systems for seamless user experiences. Troubleshoot technical issues, implement updates, and enhance functionality, showcasing problem-solving skills relevant to network infrastructure and IT operations.
- Leverage data analytics to monitor website performance, track engagement, and uncover insights that drive strategies for improved efficiency and system optimization.
- Collaborate with cross-functional teams to design and develop user-focused applications and solutions, aligning with network engineering tasks such as deploying, troubleshooting, and optimizing hardware and software systems.
- Contribute to the redesign of university websites by applying expertise in web development and design principles, transferable to maintaining and enhancing network systems and configurations.
`,
  },
 
]

export const educations: ExperienceInfo[] = [
  {
    title: 'Master of Science in Computer Science',
    company: 'Indiana State University',
    logo: ISULogo,
    logoClass: 'w-8 h-8',
    date: 'Jan. 2024 - Present',
    description: `
- First Class Honors, Gold Medal, 3.97 GPA
- Full scholarship with a monthly allowance
- Achieved a Certificate of Academic Excellence in every academic year.
- Volunteered as a staff member for the Techsauce Global Summit event.
`,
  },
  {
    title: 'Bachelor of Technology in Computer Science with Spz in Big Data Analytics',
    company: 'SRM University',
    logo: SRMLogo,
    logoClass: 'w-8 h-8',
    date: '2019 - 2023',
    description: `
- First Class Honors, Gold Medal, 3.97 GPA
- Full scholarship with a monthly allowance
- Achieved a Certificate of Academic Excellence in every academic year.
- Volunteered as a staff member for the Techsauce Global Summit event.
`,
  },
]
