import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  DollarSign, 
  FileText, 
  Lightbulb,
  ExternalLink,
  Mail,
  MessageSquare,
  TrendingUp,
  Award
} from "lucide-react";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Marketing <span className="font-semibold text-red-600">Job Resources</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Looking for a job in marketing or related fields? Get started here!
            </p>
          </motion.div>

          {/* Community Links */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Serial Marketers</h3>
                    <p className="text-purple-100 text-sm mb-3">Many jobs are shared regularly in this community</p>
                    <a 
                      href="https://www.serialmarketers.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-purple-200 transition-colors text-sm font-medium"
                    >
                      Visit Community
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">AI Marketers Guild</h3>
                    <p className="text-blue-100 text-sm mb-3">Regular job postings for AI marketing roles</p>
                    <a 
                      href="https://www.aimarketersguild.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors text-sm font-medium"
                    >
                      Visit Community
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-gray-700">
              Find networking events at{" "}
              <a href="https://lu.ma/aimg" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold">
                lu.ma/aimg
              </a>
              , and more ideas at{" "}
              <a href="https://www.bit.ly/howdavidcanhelp" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold">
                bit.ly/howdavidcanhelp
              </a>
            </p>
            <p className="text-gray-700">
              For more job listings, check out{" "}
              <a href="https://MarketingJobs.ai" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold">
                MarketingJobs.ai
              </a>
              {" "}— a new offering of ours getting ready to launch.
            </p>
            <p className="text-gray-700">
              If you're hiring, check out this resource via HuntClub's ExpertAccess network:{" "}
              <a href="https://www.huntclub.com/expert/davidberkowitz" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold">
                huntclub.com/expert/davidberkowitz
              </a>
            </p>
            <p className="text-sm text-gray-600 italic mt-6">
              - <a href="https://www.linkedin.com/in/dberkowitz" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">David Berkowitz</a>, founder, Serial Marketers, AI Marketers Guild, and High Caliber AI
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Featured partners and friends who we find especially useful are <strong>bolded</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Job Boards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-red-600" />
              Job Boards & Platforms
            </h2>
            <p className="text-gray-600">Curated job boards for marketing and related fields</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="AMA Job Board" href="https://jobs.ama.org/" description="Listings from the American Marketing Association" />
            <JobLink title="Beeler.Tech" href="https://jobs.beeler.tech/" description="Jobs in ad ops, programmatic, and sales ops" />
            <JobLink title="Bolster" href="https://bolster.com/" description="Fractional roles and board seats for senior talent" />
            <JobLink title="Fractional Jobs" href="https://www.fractionaljobs.io/" description="Job board for fractional marketing roles" />
            <JobLink title="The Boyd Initiative" href="https://www.theboydinitiative.com/" description="Careers for Young Black Professionals in advertising" />
            <JobLink title="Braintrust" href="https://app.usebraintrust.com/r/david77/" description="Freelance platform where talent keeps 100% of bill rate" featured />
            <JobLink title="Built in NYC" href="https://www.builtinnyc.com/jobs" description="Jobs at NYC startups and tech companies" />
            <JobLink title="Career Intelligence" href="https://careerintelligenceresumewriting.com/" description="Executive resume-writing services" />
            <JobLink title="Catalant" href="https://catalant.com/" description="Expert marketplace for independent consultants" />
            <JobLink title="CMO Huddles Transition Team" href="https://cmohuddles.com/join-transition-team" description="Land your next dream job with CMO support" />
            <JobLink title="Comet" href="https://www.comethq.com/" description="Tools for tracking your job search" />
            <JobLink title="Creative Women of Color" href="https://www.womenwhocreate.org/cwoc" description="Database for creative women of color" />
            <JobLink title="Creatively" href="https://creatively.life/" description="Job platform for creatives" />
            <JobLink title="ExecThread" href="https://execthread.com/apply/ex7GoZ" description="Senior roles, fully vetted membership" featured />
            <JobLink title="The Hired Guns" href="https://thehiredguns.com/" description="Marketing jobs at brands, agencies, and media" />
            <JobLink title="Hue" href="https://www.wearehue.org/talent" description="Amplifying voices of people of color in marketing" />
            <JobLink title="Jobs in Ad Tech" href="https://www.jobsinadtech.com/" description="Jobs in ad tech" />
            <JobLink title="Jobscan" href="https://www.jobscan.co/" description="ATS tracker and job search tools" />
            <JobLink title="Korn Ferry" href="https://interimjobs.kornferry.com/jobs/search" description="Search interim jobs from top recruiting firm" />
            <JobLink title="Lead5" href="https://lead5.com/" description="Executive roles and company intel" />
            <JobLink title="Lunch Club" href="https://lunchclub.com/?invite_code=davidb20" description="1:1 matching with accomplished professionals" />
            <JobLink title="Marc Goldberg on LinkedIn" href="https://www.linkedin.com/in/marcgoldberg/" description="Constantly shares marketing and ad industry jobs" featured />
            <JobLink title="Marketer Hire" href="https://marketerhire.com/" description="Hire top marketing talent on-demand" />
            <JobLink title="MeetFrank" href="https://meetfrank.com/latest-remote-jobs-in-united-states" description="AI-powered job matches personalized to you" />
            <JobLink title="MentorCruise" href="http://mentorcruise.com/referrals/g5kMQdXO4Ghg6pF7DkbX9wfIHyNYrpo4NqmWA1s9/" description="Be a mentor or find one at reasonable rates" />
            <JobLink title="The Mom Project" href="https://themomproject.com/" description="Unlocking potential of moms in the workforce" />
            <JobLink title="NYC Ad Jobs & Networking" href="https://www.facebook.com/groups/nycadjobsandnetworking/" description="Popular Facebook group for NYC ad jobs" />
            <JobLink title="Peerlist" href="https://peerlist.io/dberkowitz/signup" description="LinkedIn alternative with portfolio showcase" />
            <JobLink title="Pocit" href="https://www.pocitjobs.com/" description="Connecting people of color with tech jobs" />
            <JobLink title="Publicist.co" href="http://www.publicist.co" description="Vetted talent in communications and marketing" />
            <JobLink title="The Second Shift" href="https://www.thesecondshift.com/" description="Network for female executive talent" />
            <JobLink title="Shiny" href="https://useshiny.com/fractional-executives" description="Matching CXO talent to startups" />
            <JobLink title="Side Hustle Stack" href="https://sidehustlestack.co/" description="Platform-based gigs and extra income" />
            <JobLink title="Sonara" href="https://www.sonara.ai/" description="AI tool that automates job applications" />
            <JobLink title="Startup.Jobs" href="https://startup.jobs/" description="Marketing jobs at startups" />
            <JobLink title="TechNY Daily" href="https://www.technyc.org/newsletter" description="Jobs at NY startups" />
            <JobLink title="Umbrex" href="https://umbrex.com/join-our-community/" description="Community for independent consultants" />
            <JobLink title="Veritux" href="https://veritux.com/" description="Sister community to Umbrex" />
            <JobLink title="VentureLoop" href="https://www.ventureloop.com/ventureloop/home.php" description="Free startup job listings" />
            <JobLink title="Venwise" href="https://www.venwise.com/membership" description="Get in front of hiring leads" />
            <JobLink title="Welcome to the Jungle" href="https://us.welcometothejungle.com/" description="Discover jobs matched with your interests" />
            <JobLink title="Wellfound" href="https://angel.co/l/2y6Dbr" description="Formerly AngelList, top spot for startup jobs" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">VC Job Boards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <JobLink title="Eniac Ventures" href="https://jobs.eniac.vc/jobs" />
              <JobLink title="Primary" href="https://jobs.primary.vc/jobs" />
              <JobLink title="Sequoia" href="https://jobs.sequoiacap.com/jobs/" />
              <JobLink title="Union Square Ventures" href="https://jobs.usv.com/jobs" />
              <JobLink title="Y Combinator" href="https://www.workatastartup.com/" />
            </div>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Users className="w-8 h-8 text-red-600" />
              Communities
            </h2>
            <p className="text-gray-600">Professional communities for networking and job opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Fractionals United" href="https://www.fractionalsunited.com/" description="Community of fractional CXOs" />
            <JobLink title="Growth Collective" href="https://www.wearegrowth.co/" description="Network of notable freelance marketers" />
            <JobLink title="Never Search Alone" href="https://www.neversearchalone.org/" description="Join a Free Job Search Council (JSC). JSCs are free support groups for job seekers. If you apply, we will place you with peers and get you the training and tools you need. 50,000 job seekers already helped." featured />
            <JobLink title="Our Vibe Attracts Our Career Tribe" href="https://docs.google.com/spreadsheets/d/1P1fDhDBUogMEbTH9ENOmITv6znIfW8J9TK-XqbIX0wk/edit?gid=0#gid=0" description="Great group for finding your next move" />
          </div>
        </div>
      </section>

      {/* Expert Networks */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Award className="w-8 h-8 text-red-600" />
              Expert Networks
            </h2>
            <p className="text-gray-600">Get paid for your expertise with these networks</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Atheneum" href="https://www.atheneum.ai/network/" />
            <JobLink title="DeepBench" href="https://deepbench.io/consult" />
            <JobLink title="GLG" href="https://glginsights.com/" description="One of the longer-running, better-known networks" />
            <JobLink title="Maven" href="https://www.maven.co/" />
            <JobLink title="NewtonX" href="https://www.newtonx.com/for-professionals/" />
            <JobLink title="Office Hours" href="https://officehours.com/r/david-berkowitz" description="Share your expertise on B2B products" />
            <JobLink title="Tegus" href="https://www.tegus.com/experts" />
            <JobLink title="Third Bridge" href="https://thirdbridge.com/" />
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Mail className="w-8 h-8 text-red-600" />
              Newsletters
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="VC Jobs" href="https://app.convertkit.com/landing_pages/398564?v=7" description="Newsletter by John Gannon with VC firm jobs" />
          </div>
        </div>
      </section>

      {/* Job Matching Tools */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-red-600" />
              Job Matching Tools
            </h2>
            <p className="text-gray-600">AI-powered tools to find the right opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Eightfold.ai" href="http://eightfold.ai/" description="AI matching to remove bias from hiring" />
            <JobLink title="Jobright.ai" href="https://jobright.ai/s/6DG973" description="AI job search copilot for your career" />
            <JobLink title="LinkedIn" href="https://www.linkedin.com/jobs/" description="AI-powered job search and matching" />
            <JobLink title="Overlap" href="https://www.moreoverlap.com/" description="Trusted, opt-in email intros to network members" />
            <JobLink title="Pymetrics" href="https://www.pymetrics.ai/" description="Behavioral science matching for compatible jobs" />
            <JobLink title="ZipRecruiter" href="https://www.ziprecruiter.com/" description="AI-driven smart matching technology" />
          </div>
        </div>
      </section>

      {/* Resume Builders */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <FileText className="w-8 h-8 text-red-600" />
              Resume Builders
            </h2>
            <p className="text-gray-600">AI-powered tools to create winning resumes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="EarnBetter" href="https://earnbetter.com/" description="Free AI copilot for your job search" />
            <JobLink title="Jobscan" href="https://www.jobscan.co/" description="AI to optimize resumes for ATS" />
            <JobLink title="ResumeUp" href="https://resumeup.ai/" description="Create perfect resume in minutes" />
            <JobLink title="Rezi" href="https://www.rezi.ai/" description="AI-powered resume builder for ATS" />
            <JobLink title="Resumaker.ai" href="http://resumaker.ai/" description="Professional resumes showcasing skills" />
            <JobLink title="Skillroads" href="https://skillroads.com/" description="Targeted resumes for specific jobs" />
            <JobLink title="Teal" href="https://www.tealhq.com/" description="Career development and resume building platform" />
          </div>
        </div>
      </section>

      {/* Interview Preparation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-red-600" />
              Interview Preparation Tools
            </h2>
            <p className="text-gray-600">Prepare for interviews with AI assistance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Career Dreamer by Google" href="https://grow.google/career-dreamer/" description="Uncover skills and explore career possibilities" />
            <JobLink title="ChatGPT" href="https://chat.openai.com/" description="AI assistant for interview preparation" />
            <JobLink title="Final Round AI" href="https://www.finalroundai.com/" description="Video responses to common interview questions" />
            <JobLink title="Fonzi.ai" href="https://fonzi.ai/candidates" description="Practice realistic phone screens anytime" />
            <JobLink title="InterviewBuddy" href="https://interviewbuddy.net/" description="Live mock interviews with professionals" />
            <JobLink title="Winning Interviews" href="https://winninginterviews.com/?sld=davidberkowitz" description="AI-powered interview preparation coach" />
          </div>
        </div>
      </section>

      {/* Job Search Assistants */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-red-600" />
              Job Search Assistants
            </h2>
            <p className="text-gray-600">AI assistants to streamline your job search</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Google for Jobs" href="https://jobs.google.com/about/" description="Aggregated job postings from various websites" />
            <JobLink title="JobPal" href="https://jobpal.work/" description="AI matching from discovery to application" />
            <JobLink title="JobWizard" href="https://www.jobwizard.ai/" description="AI-driven job search automation" />
            <JobLink title="Meetingprep.com" href="https://www.meetingprep.com/" description="Search encyclopedia for media and marketing data" />
            <JobLink title="Olivia by Paradox" href="https://www.paradox.ai/author/olivia" description="Find opportunities to scheduling interviews" />
            <JobLink title="Teal" href="https://www.tealhq.com/" description="Comprehensive job search management" />
            <JobLink title="Teal Job Tracker" href="https://www.tealhq.com/tools/job-tracker" description="Free Chrome extension for job tracking" />
          </div>
        </div>
      </section>

      {/* Salary Estimation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-red-600" />
              Salary Estimation Tools
            </h2>
            <p className="text-gray-600">Know your worth with these salary tools</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Glassdoor" href="https://www.glassdoor.com/Salaries/know-your-worth.htm" description="Salary insights from user-submitted data" />
            <JobLink title="Payscale" href="https://www.payscale.com/" description="Salary comparisons by title and location" />
            <JobLink title="Salary.com" href="http://salary.com/" description="Accurate compensation data using AI" />
          </div>
        </div>
      </section>

      {/* Board Roles */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Award className="w-8 h-8 text-red-600" />
              Board Roles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Private Director Association" href="https://www.privatedirectorassociation.org/" description="National association for private company board governance" />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">More Resources</h2>
          <p className="text-lg text-gray-700 mb-8">
            View even more resources in the{" "}
            <a 
              href="http://bit.ly/howdavidcanhelp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:underline font-semibold"
            >
              How David Can Help spreadsheet
            </a>
            .
          </p>
          <p className="text-gray-600">
            Share this resource freely with anyone who can use it!
          </p>
        </div>
      </section>
    </div>
  );
}

function JobLink({ title, href, description, featured }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className={`${featured ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-600 shadow-md' : 'bg-white border-gray-200'} border hover:border-red-600/50 hover:shadow-lg transition-all duration-200 h-full`}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className={`text-base ${featured ? 'font-bold' : 'font-semibold'} text-gray-900 group-hover:text-red-600 transition-colors flex items-center gap-2`}>
              {title}
              {featured && (
                <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold">
                  Featured
                </span>
              )}
            </h3>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
          </div>
          {description && (
            <p className={`text-sm ${featured ? 'text-gray-800 font-medium' : 'text-gray-600'} leading-relaxed`}>
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    </a>
  );
}