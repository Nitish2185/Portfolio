import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, CalendarDays, Download, MapPin } from 'lucide-react';
import resumePdf from '../assets/Nitish_Singh_8423599961.pdf';
import sqlCert from '../assets/sql-cert.png';
import reactCert from '../assets/react-cert.png';
import javaCert from '../assets/java-cert.png';
import bangmetricLetter from '../assets/bangmetric-internship-letter.pdf';
import softapperLetter from '../assets/softapper-internship-letter.pdf';

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
  letter: string;
  downloadName: string;
}

interface CertificationCardProps {
  title: string;
  issuer: string;
  earnedOn: string;
  credentialId: string;
  image: string;
  downloadName: string;
}

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const ExperienceCard = ({
  role,
  company,
  location,
  duration,
  points,
  letter,
  downloadName,
}: ExperienceCardProps) => (
  <motion.article
    {...sectionMotion}
    className="rounded-[2rem] border border-black/[0.05] bg-gradient-to-br from-[#FDFDFC] to-[#F3F6F5] p-6 md:p-8 shadow-sm"
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
      <div className="max-w-[760px]">
        <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#8A8A85] mb-3">{company}</p>
        <h3 className="font-serif text-[1.9rem] md:text-[2.5rem] text-[#171717] leading-tight mb-3">{role}</h3>
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-black/[0.05] text-sm text-[#2B302F]">
            <CalendarDays className="w-4 h-4 text-[#1D91A1]" />
            {duration}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-black/[0.05] text-sm text-[#2B302F]">
            <MapPin className="w-4 h-4 text-[#1D91A1]" />
            {location}
          </div>
        </div>
      </div>

      <a
        href={letter}
        download={downloadName}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B302F] px-6 py-3 text-white text-sm font-medium hover:bg-black transition-colors shrink-0"
      >
        <Download className="w-4 h-4" />
        Download Letter
      </a>
    </div>

    <div className="grid gap-3">
      {points.map((point) => (
        <div key={point} className="rounded-2xl bg-white/80 border border-black/[0.04] px-4 py-4 text-[#4A4E4B] text-sm md:text-base leading-relaxed">
          {point}
        </div>
      ))}
    </div>
  </motion.article>
);

const CertificationCard = ({
  title,
  issuer,
  earnedOn,
  credentialId,
  image,
  downloadName,
}: CertificationCardProps) => (
  <motion.article
    {...sectionMotion}
    className="group rounded-[2rem] border border-black/[0.05] bg-[#FDFDFC] p-5 md:p-6 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500"
  >
    <div className="overflow-hidden rounded-[1.5rem] border border-black/[0.05] bg-[#F7F7F2] mb-5">
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>

    <div className="flex items-start justify-between gap-4 mb-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#8A8A85] mb-2">{issuer}</p>
        <h3 className="font-serif text-[1.6rem] md:text-[1.9rem] leading-tight text-[#171717]">{title}</h3>
      </div>
      <div className="w-11 h-11 rounded-2xl bg-[#E1EFEB] text-[#1D91A1] flex items-center justify-center shrink-0">
        <Award className="w-5 h-5" />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
      <div className="rounded-2xl bg-[#F7F7F2] px-4 py-3 border border-black/[0.04]">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8A8A85] mb-1">Earned</p>
        <p className="text-sm text-[#2B302F] font-medium">{earnedOn}</p>
      </div>
      <div className="rounded-2xl bg-[#F7F7F2] px-4 py-3 border border-black/[0.04]">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8A8A85] mb-1">Credential ID</p>
        <p className="text-sm text-[#2B302F] font-medium break-all">{credentialId}</p>
      </div>
    </div>

    <a
      href={image}
      download={downloadName}
      className="inline-flex items-center gap-2 rounded-full bg-[#2B302F] px-5 py-3 text-white text-sm font-medium hover:bg-black transition-colors"
    >
      <Download className="w-4 h-4" />
      Download Certificate
    </a>
  </motion.article>
);

export const Credentials = () => {
  const experiences: ExperienceCardProps[] = [
    {
      role: 'ServiceNow Developer Intern',
      company: 'Bangmetric LLC',
      location: 'Sector 62, Noida',
      duration: 'July 2025 - Oct 2025',
      points: [
        'Developed and customized server-side logic in ServiceNow using JavaScript and Glide APIs.',
        'Implemented REST API integrations between ServiceNow and external systems for secure data exchange.',
        'Worked on Incident, Problem, and Change Management using Business Rules and Script Includes.',
        'Worked with Service Portal components and data flow while handling ITSM use cases.',
        'Worked across the Software Development Life Cycle (SDLC), including requirements understanding, development, testing, debugging, and deployment support.',
      ],
      letter: bangmetricLetter,
      downloadName: 'Bangmetric_Internship_Letter.pdf',
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'SoftApper Tech Solutions',
      location: 'Noida',
      duration: 'Sep 2024 - Dec 2024',
      points: [
        'Built full-stack features using React.js, Node.js, Express.js, and MongoDB.',
        'Designed RESTful APIs supporting authentication, search, and filtering.',
        'Integrated frontend components with backend services for seamless data flow.',
        'Implemented backend logic using Express middleware and MongoDB schemas for data validation.',
      ],
      letter: softapperLetter,
      downloadName: 'SoftApper_Internship_Letter.pdf',
    },
  ];

  const certifications: CertificationCardProps[] = [
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      earnedOn: '28 May 2025',
      credentialId: '01883498139E',
      image: sqlCert,
      downloadName: 'Nitish_SQL_Intermediate_Certificate.png',
    },
    {
      title: 'React (Basic)',
      issuer: 'HackerRank',
      earnedOn: '14 Apr 2025',
      credentialId: '9D58D35F3907',
      image: reactCert,
      downloadName: 'Nitish_React_Basic_Certificate.png',
    },
    {
      title: 'Java (Basic)',
      issuer: 'HackerRank',
      earnedOn: '28 May 2025',
      credentialId: 'CACBB9C8E53E',
      image: javaCert,
      downloadName: 'Nitish_Java_Basic_Certificate.png',
    },
  ];

  return (
    <section id="credentials" className="py-24 px-4 md:px-8 w-full max-w-[1200px] mx-auto overflow-hidden">
      <div className="text-center mb-16 md:mb-20">
        <motion.div {...sectionMotion}>
          <p className="font-mono text-[11px] tracking-[0.4em] text-[#8A8A85] uppercase mb-4">Credentials</p>
          <h1 className="font-serif text-[3.1rem] md:text-[5rem] text-[#131313] tracking-tight leading-tight mb-6">
            Experience & Certifications
          </h1>
          <p className="max-w-[720px] mx-auto text-[#5B5F5D] text-base md:text-lg leading-relaxed">
            A focused overview of my professional background and certifications, presented in the same calm editorial style as the rest of the portfolio.
          </p>
        </motion.div>
      </div>

      <div className="space-y-20">
        <section>
          <motion.div {...sectionMotion} className="mb-8 md:mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#E1EFEB] text-[#1D91A1] flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-[2.2rem] md:text-[3rem] text-[#171717]">Experience</h2>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={`${experience.company}-${experience.role}`} {...experience} />
            ))}

            <motion.div {...sectionMotion} className="flex justify-center pt-2">
              <a
                href={resumePdf}
                download="Nitish_Singh_8423599961.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B302F] px-6 py-3 text-white text-sm font-medium hover:bg-black transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </section>

        <section>
          <motion.div {...sectionMotion} className="mb-8 md:mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F7F3E9] text-[#C97732] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-[2.2rem] md:text-[3rem] text-[#171717]">Certifications</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {certifications.map((certification) => (
              <CertificationCard key={certification.credentialId} {...certification} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
