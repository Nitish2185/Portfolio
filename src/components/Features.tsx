import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Database,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Github,
  Clapperboard,
  Briefcase,
  ChevronDown,
} from 'lucide-react';
import voyagerBg from '../assets/voyager-bg.jpg';
import riderBg from '../assets/rider-bg.webp';
import liftlifeBg from '../assets/liftlife-bg.jpeg';
import movieAppBg from '../assets/movie-app-bg.webp';

interface StackCellProps {
  label: string;
  value: string;
  index: number;
  borderClasses: string;
}

interface FeatureCardProps {
  title: string;
  subtitle: string;
  variant: string;
  children?: React.ReactNode;
  tags: string[];
  liveLink?: string;
  githubLink: string;
  backgroundImage?: string;
  titleClassName?: string;
  className?: string;
}

const StackCell = ({ label, value, index, borderClasses }: StackCellProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    whileHover={{ backgroundColor: 'rgba(255,255,255,0.8)', transition: { duration: 0.3 } }}
    className={`group p-8 md:p-10 flex flex-col justify-center bg-white/30 cursor-default relative overflow-hidden transition-all duration-300 ${borderClasses}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#1D91A1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8A8A85] group-hover:text-[#1D91A1] transition-colors duration-300 block mb-3">
      {label}
    </span>
    <span className="text-[#131313] text-base md:text-[17px] leading-relaxed font-medium block opacity-90 group-hover:opacity-100 transition-opacity">
      {value}
    </span>
  </motion.div>
);

const FeatureCard = ({
  title,
  subtitle,
  variant,
  children,
  tags,
  liveLink,
  githubLink,
  backgroundImage,
  titleClassName,
  className,
}: FeatureCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden flex flex-col h-auto sm:h-[320px] md:h-[480px] min-h-[240px] shadow-sm hover:shadow-md transition-shadow duration-500 border border-black/[0.03]
        ${variant === 'teal'
          ? 'bg-gradient-to-br from-[#E1EFEB] to-[#CBDFDA]'
          : variant === 'indigo'
            ? 'bg-gradient-to-br from-[#E9E9FC] to-[#D5D5F2]'
            : variant === 'sand'
              ? 'bg-gradient-to-br from-[#F7F3E9] to-[#EBE4D5]'
              : variant === 'coral'
                ? 'bg-gradient-to-br from-[#FCF9F7] to-[#F7EBE8]'
                : 'bg-[#EFEEE7]'} ${className}`}
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 blur-[4px] scale-110"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-white/35" />
        </>
      )}

      <div className="flex justify-between items-start z-20 shrink-0 mb-4 sm:mb-0">
        <h3
          className={`font-serif text-[28px] md:text-[32px] text-[#1A1A1A] tracking-tight group-hover:text-[#1D91A1] transition-colors leading-tight ${titleClassName || ''}`}
        >
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="inline-flex items-center gap-2 rounded-full bg-white/65 px-3 py-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[#2B302F] backdrop-blur-md border border-white/60 shadow-sm hover:bg-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live demo for ${title}`}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-sm hover:bg-[#1D91A1] hover:text-white hover:border-[#1D91A1] transition-all duration-500"
            >
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 hover:scale-110 hover:translate-x-0.5 hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-1 w-full relative z-0 min-h-[180px] sm:min-h-0">{children}</div>

      <div className="relative sm:absolute sm:inset-x-6 md:inset-x-8 sm:bottom-6 md:bottom-8 bg-[#FDFDFC]/80 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] z-20 border border-white/50 shadow-sm transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col gap-4 mt-auto sm:mt-0">
        <p className="text-[#3E4240] text-sm md:text-[16px] font-medium leading-relaxed opacity-90">{subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] md:text-[10px] text-[#8A8A85] bg-black/[0.03] border border-black/[0.05] px-2.5 py-1 rounded-full tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export const Features = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <div className="w-full relative z-10 bg-[#F7F7F2]">
      <section id="stack" className="pt-20 pb-16 md:pt-24 md:pb-20 px-4 md:px-8 w-full max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-[#131313] tracking-tight leading-tight">
              Technical Skills
            </h2>
            <p className="text-[#6C6C6C] font-sans text-base md:text-lg mt-2">
              Technologies and tools I use across web, mobile, and enterprise platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#E8E8E3] rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
            <StackCell
              index={0}
              label="Frontend"
              value="React.js · React Native · Redux · JavaScript (ES6+) · HTML5 · CSS3 · Tailwind CSS · Bootstrap"
              borderClasses="border-b border-[#E8E8E3] sm:border-r"
            />
            <StackCell
              index={1}
              label="Backend"
              value="Node.js · Express.js · RESTful APIs · JWT Authentication · MVC Architecture"
              borderClasses="border-b border-[#E8E8E3]"
            />
            <StackCell
              index={2}
              label="Databases"
              value="MySQL · MongoDB"
              borderClasses="border-b border-[#E8E8E3] sm:border-r"
            />
            <StackCell
              index={3}
              label="ServiceNow"
              value="ITSM · Glide API · Business Rules · Client Scripts · Script Includes · REST Integrations"
              borderClasses="border-b border-[#E8E8E3]"
            />
            <StackCell
              index={4}
              label="Tools"
              value="Git · Postman · NPM · VS Code · IntelliJ · Eclipse"
              borderClasses="border-b border-[#E8E8E3] sm:border-b-0 sm:border-r"
            />
            <StackCell
              index={5}
              label="Core Concepts"
              value="Data Structures · OOP · Agile · SDLC · API Design · Authentication · Problem Solving"
              borderClasses=""
            />
          </div>
        </motion.div>
      </section>

      <div className="max-w-[1200px] mx-auto px-8">
        <hr className="border-[#E8E8E3]" />
      </div>

      <section id="projects" className="py-16 md:py-24 px-4 md:px-8 w-full max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-serif text-[2.5rem] md:text-[5rem] text-[#131313] tracking-tight leading-tight">
            Selected Projects
          </h2>
          <p className="text-[#6C6C6C] font-sans text-lg md:text-xl mt-3 md:mt-4">
            Open source and private engineering work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Voyager"
            subtitle="Travel platform with a React frontend, Node.js backend, MongoDB data layer, and deployment-ready configuration."
            tags={['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']}
            variant="sand"
            liveLink="https://voyager-frontend-3smj.vercel.app/"
            githubLink="https://github.com/nitish2185/voyager"
            backgroundImage={voyagerBg}
            titleClassName="font-black"
            className="md:col-span-2 md:h-[350px]"
          >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-4 md:px-10 sm:-mt-20">
              <div className="w-[90%] md:w-full max-w-[720px] bg-white rounded-xl shadow-sm border border-black/5 p-4 md:p-5 flex items-center gap-3 md:gap-4 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F2F2EC] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 md:w-5 md:h-5 text-[#2B302F]" />
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                  <div className="rounded-2xl bg-[#F7F7F2] px-3 py-3">
                    <p className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-[#8A8A85] mb-2">Frontend</p>
                    <div className="w-[80%] h-2.5 md:h-3 bg-black/10 rounded-full mb-2"></div>
                    <div className="w-[60%] h-2.5 md:h-3 bg-black/5 rounded-full"></div>
                  </div>
                  <div className="rounded-2xl bg-[#F7F7F2] px-3 py-3">
                    <p className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-[#8A8A85] mb-2">Backend</p>
                    <div className="w-[75%] h-2.5 md:h-3 bg-black/10 rounded-full mb-2"></div>
                    <div className="w-[55%] h-2.5 md:h-3 bg-black/5 rounded-full"></div>
                  </div>
                  <div className="rounded-2xl bg-[#F7F7F2] px-3 py-3">
                    <p className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-[#8A8A85] mb-2">Deploy</p>
                    <div className="w-[70%] h-2.5 md:h-3 bg-black/10 rounded-full mb-2"></div>
                    <div className="w-[50%] h-2.5 md:h-3 bg-black/5 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="LiftLife"
            subtitle="Medical crowdfunding platform for launching fundraisers, browsing cases, and supporting campaigns."
            tags={['React', 'Express', 'MongoDB', 'Redux', 'Cloudinary']}
            variant="teal"
            githubLink="https://github.com/Nitish2185/crowd-funding"
            backgroundImage={liftlifeBg}
          >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pl-6 pr-6 md:pl-10 sm:-mt-24">
              <div className="w-full bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-black/5 p-4 flex flex-col overflow-hidden relative group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow">
                <Database className="w-6 h-6 text-[#1D91A1] mb-4 opacity-50" />
                <div className="w-[85%] h-4 bg-black/5 rounded-full mb-3"></div>
                <div className="w-[60%] h-4 bg-[#E1EFEB] rounded-full mb-6"></div>
                <div className="flex gap-2 mb-2">
                  <div className="w-16 h-6 bg-[#27C93F]/20 rounded text-[10px] font-mono text-[#1AAB29] flex items-center justify-center">
                    RAISE
                  </div>
                  <div className="flex-1 h-6 bg-black/5 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-16 h-6 bg-[#FFBD2E]/20 rounded text-[10px] font-mono text-[#DEA123] flex items-center justify-center">
                    DONATE
                  </div>
                  <div className="flex-1 h-6 bg-black/5 rounded"></div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="RiDER"
            subtitle="MERN food delivery platform with JWT auth, Stripe payments, and full order management."
            tags={['React', 'Node.js', 'MongoDB', 'JWT', 'Stripe']}
            variant="coral"
            liveLink="https://food-delivery-frontend-fl09.onrender.com/"
            githubLink="https://github.com/Nitish2185/Food-Delivery"
            backgroundImage={riderBg}
          >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center sm:-mt-24">
              <div className="w-[75%] bg-white rounded-2xl shadow-sm border border-[#E8E8E3] p-6 flex flex-col relative group-hover:shadow-md transition-shadow">
                <ShieldCheck className="w-8 h-8 text-[#FF5F56] absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity" />
                <h4 className="font-mono text-[11px] text-[#A1A1A1] uppercase tracking-widest mb-6">Orders + Checkout</h4>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded-xl bg-[#FFE8E0]"></div>
                    <div className="flex-1">
                      <div className="w-[70%] h-2.5 bg-black/10 rounded-full mb-2"></div>
                      <div className="w-[40%] h-2.5 bg-black/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded-xl bg-[#E1EFEB]"></div>
                    <div className="flex-1">
                      <div className="w-[65%] h-2.5 bg-black/10 rounded-full mb-2"></div>
                      <div className="w-[35%] h-2.5 bg-black/5 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[12px] font-mono text-[#6C6C6C]">
                  <span>User and Admin Panels</span>
                  <span>JWT + Stripe</span>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>

        {!showMoreProjects && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowMoreProjects(true)}
              className="inline-flex items-center gap-3 rounded-full bg-[#2B302F] px-7 py-3 text-white text-sm font-medium shadow-sm hover:bg-black transition-colors"
            >
              View More
              <ChevronDown className="w-4 h-4 transition-transform duration-300" />
            </button>
          </div>
        )}

        <AnimatePresence initial={false}>
          {showMoreProjects && (
            <motion.div
              initial={{ opacity: 0, y: 24, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 16, height: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <FeatureCard
                  title="Movie Finder"
                  subtitle="React Native movie discovery app with live search, trending rankings, and Appwrite-powered popularity tracking."
                  tags={['React Native', 'Expo', 'TypeScript', 'Appwrite', 'TMDB']}
                  variant="indigo"
                  githubLink="https://github.com/Nitish2185/movie-app"
                  backgroundImage={movieAppBg}
                >
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-6 sm:-mt-24">
                    <div className="w-[78%] max-w-[280px] rounded-[2rem] border border-white/50 bg-[#0F0D23]/80 p-4 shadow-xl backdrop-blur-md">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-2.5 w-16 rounded-full bg-white/20"></div>
                        <Clapperboard className="w-5 h-5 text-white/70" />
                      </div>
                      <div className="mb-3 h-28 rounded-[1.25rem] bg-gradient-to-br from-[#AB8BFF] to-[#221F3D]"></div>
                      <div className="mb-2 h-3 w-[72%] rounded-full bg-white/25"></div>
                      <div className="mb-4 h-3 w-[48%] rounded-full bg-white/15"></div>
                      <div className="flex gap-2">
                        <div className="h-8 flex-1 rounded-xl bg-white/12"></div>
                        <div className="h-8 w-16 rounded-xl bg-[#AB8BFF]/70"></div>
                      </div>
                    </div>
                  </div>
                </FeatureCard>

                <FeatureCard
                  title="Job Portal"
                  subtitle="Full-stack hiring platform with job search, applications, company management, and recruiter admin workflows."
                  tags={['React', 'Express', 'MongoDB', 'Redux', 'Tailwind']}
                  variant="teal"
                  githubLink="https://github.com/Nitish2185/JobPortal"
                >
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-6 sm:-mt-24">
                    <div className="w-[88%] rounded-[1.5rem] border border-black/5 bg-white/75 p-5 shadow-lg backdrop-blur-md">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <div className="mb-2 h-3 w-28 rounded-full bg-black/10"></div>
                          <div className="h-2.5 w-20 rounded-full bg-black/5"></div>
                        </div>
                        <Briefcase className="w-5 h-5 text-[#6A38C2]" />
                      </div>
                      <div className="mb-3 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-2xl bg-[#6A38C2]/12"></div>
                        <div className="h-16 rounded-2xl bg-[#1D91A1]/10"></div>
                        <div className="h-16 rounded-2xl bg-[#E57A44]/10"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-9 flex-1 rounded-xl bg-black/8"></div>
                        <div className="h-9 w-24 rounded-xl bg-[#6A38C2]"></div>
                      </div>
                    </div>
                  </div>
                </FeatureCard>
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowMoreProjects(false)}
                  className="inline-flex items-center gap-3 rounded-full bg-[#2B302F] px-7 py-3 text-white text-sm font-medium shadow-sm hover:bg-black transition-colors"
                >
                  View Less
                  <ChevronDown className="w-4 h-4 rotate-180 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};
