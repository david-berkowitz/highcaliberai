import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Award,
  Filter,
  ChevronDown,
  Send,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function JobsPage() {
  const [selectedStage, setSelectedStage] = useState("all");
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Quick Jump Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-gray-700">Jump to:</span>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('job-boards')}>Job Boards</Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('communities')}>Communities</Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('expert-networks')}>Expert Networks</Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('tools')}>Tools</Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('pro-tips')}>Pro Tips</Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('faq')}>FAQ</Button>
            </div>
            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-gray-500" />
              <select 
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="all">All Levels</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid-Career</option>
                <option value="senior">Senior</option>
                <option value="executive">Executive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

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
              If you're hiring, check out this resource via HuntClub's ExpertAccess network:{" "}
              <a href="https://www.huntclub.com/expert/davidberkowitz" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold">
                huntclub.com/expert/davidberkowitz
              </a>
            </p>
            <p className="text-sm text-gray-600 italic mt-6">
              - <a href="https://www.linkedin.com/in/dberkowitz" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">David Berkowitz</a>, founder, Serial Marketers, AI Marketers Guild, and High Caliber AI
            </p>
          </div>
        </div>
      </section>

      {/* Job Boards */}
      <section id="job-boards" className="py-16 px-6 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-red-600" />
              Job Boards & Platforms
            </h2>
            <p className="text-gray-600">Curated job boards for marketing and related fields</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="AMA Job Board" href="https://jobs.ama.org/" description="Listings from the American Marketing Association" stage="all" selectedStage={selectedStage} />
            <JobLink title="Bolster" href="https://bolster.com/" description="Fractional roles and board seats for senior talent" stage="executive" selectedStage={selectedStage} />
            <JobLink title="Fractional Jobs" href="https://www.fractionaljobs.io/" description="Job board for fractional marketing roles" stage="senior" selectedStage={selectedStage} />
            <JobLink title="The Boyd Initiative" href="https://www.theboydinitiative.com/" description="Careers for Young Black Professionals in advertising" stage="entry" selectedStage={selectedStage} />
            <JobLink title="Braintrust" href="https://app.usebraintrust.com/r/david77/" description="Freelance platform where talent keeps 100% of bill rate" featured stage="mid" selectedStage={selectedStage} />
            <JobLink title="Built in NYC" href="https://www.builtinnyc.com/jobs" description="Jobs at NYC startups and tech companies" stage="all" selectedStage={selectedStage} />
            <JobLink title="Career Intelligence" href="https://careerintelligenceresumewriting.com/" description="Executive resume-writing services" stage="executive" selectedStage={selectedStage} />
            <JobLink title="Catalant" href="https://catalant.com/" description="Expert marketplace for independent consultants" stage="senior" selectedStage={selectedStage} />
            <JobLink title="CMO Huddles Transition Team" href="https://cmohuddles.com/join-transition-team" description="Land your next dream job with CMO support" stage="executive" selectedStage={selectedStage} />
            <JobLink title="Comet" href="https://www.comethq.com/" description="Tools for tracking your job search" stage="all" selectedStage={selectedStage} />
            <JobLink title="Creatively" href="https://creatively.life/" description="Job platform for creatives" stage="entry" selectedStage={selectedStage} />
            <JobLink title="ExecThread" href="https://execthread.com/apply/ex7GoZ" description="Senior roles, fully vetted membership" featured stage="executive" selectedStage={selectedStage} />
            <JobLink title="The Hired Guns" href="https://thehiredguns.com/" description="Marketing jobs at brands, agencies, and media" stage="all" selectedStage={selectedStage} />
            <JobLink title="Jobs in Ad Tech" href="https://www.jobsinadtech.com/" description="Jobs in ad tech" stage="all" selectedStage={selectedStage} />
            <JobLink title="Jobscan" href="https://www.jobscan.co/" description="ATS tracker and job search tools" stage="all" selectedStage={selectedStage} />
            <JobLink title="Korn Ferry" href="https://interimjobs.kornferry.com/jobs/search" description="Search interim jobs from top recruiting firm" stage="senior" selectedStage={selectedStage} />
            <JobLink title="Lead5" href="https://lead5.com/" description="Executive roles and company intel" stage="executive" selectedStage={selectedStage} />
            <JobLink title="Lunch Club" href="https://lunchclub.com/?invite_code=davidb20" description="1:1 matching with accomplished professionals" stage="all" selectedStage={selectedStage} />
            <JobLink title="Marc Goldberg on LinkedIn" href="https://www.linkedin.com/in/marcgoldberg/" description="Constantly shares marketing and ad industry jobs" featured stage="all" selectedStage={selectedStage} />
            <JobLink title="Marketer Hire" href="https://marketerhire.com/" description="Hire top marketing talent on-demand" stage="mid" selectedStage={selectedStage} />
            <JobLink title="MeetFrank" href="https://meetfrank.com/latest-remote-jobs-in-united-states" description="AI-powered job matches personalized to you" stage="all" selectedStage={selectedStage} />
            <JobLink title="MentorCruise" href="http://mentorcruise.com/referrals/g5kMQdXO4Ghg6pF7DkbX9wfIHyNYrpo4NqmWA1s9/" description="Be a mentor or find one at reasonable rates" stage="all" selectedStage={selectedStage} />
            <JobLink title="The Mom Project" href="https://themomproject.com/" description="Unlocking potential of moms in the workforce" stage="all" selectedStage={selectedStage} />
            <JobLink title="NYC Ad Jobs & Networking" href="https://www.facebook.com/groups/nycadjobsandnetworking/" description="Popular Facebook group for NYC ad jobs" stage="all" selectedStage={selectedStage} />
            <JobLink title="Peerlist" href="https://peerlist.io/dberkowitz/signup" description="LinkedIn alternative with portfolio showcase" stage="all" selectedStage={selectedStage} />
            <JobLink title="Pocit" href="https://www.pocitjobs.com/" description="Connecting people of color with tech jobs" stage="all" selectedStage={selectedStage} />
            <JobLink title="Publicist.co" href="http://www.publicist.co" description="Vetted talent in communications and marketing" stage="mid" selectedStage={selectedStage} />
            <JobLink title="The Second Shift" href="https://www.thesecondshift.com/" description="Network for female executive talent" stage="senior" selectedStage={selectedStage} />
            <JobLink title="Shiny" href="https://useshiny.com/fractional-executives" description="Matching CXO talent to startups" stage="executive" selectedStage={selectedStage} />
            <JobLink title="Sonara" href="https://www.sonara.ai/" description="AI tool that automates job applications" stage="all" selectedStage={selectedStage} />
            <JobLink title="Startup.Jobs" href="https://startup.jobs/" description="Marketing jobs at startups" stage="all" selectedStage={selectedStage} />
            <JobLink title="TechNY Daily" href="https://jobs.technyc.org/jobs" description="Jobs at NY startups" stage="all" selectedStage={selectedStage} />
            <JobLink title="Umbrex" href="https://umbrex.com/join-our-community/" description="Community for independent consultants" stage="senior" selectedStage={selectedStage} />
            <JobLink title="Veritux" href="https://veritux.com/" description="Sister community to Umbrex" stage="senior" selectedStage={selectedStage} />
            <JobLink title="VentureLoop" href="https://www.ventureloop.com/ventureloop/home.php" description="Free startup job listings" stage="all" selectedStage={selectedStage} />
            <JobLink title="Venwise" href="https://www.venwise.com/membership" description="Get in front of hiring leads" stage="senior" selectedStage={selectedStage} />
            <JobLink title="Welcome to the Jungle" href="https://us.welcometothejungle.com/" description="Discover jobs matched with your interests" stage="all" selectedStage={selectedStage} />
            <JobLink title="Wellfound" href="https://angel.co/l/2y6Dbr" description="Formerly AngelList, top spot for startup jobs" stage="all" selectedStage={selectedStage} />
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
      <section id="communities" className="py-16 px-6 scroll-mt-32">
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
            <JobLink title="Never Search Alone" href="https://www.neversearchalone.org/" description="Free support groups for job seekers" />
          </div>
        </div>
      </section>

      {/* Expert Networks */}
      <section id="expert-networks" className="py-16 px-6 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Award className="w-8 h-8 text-red-600" />
              Expert Networks
            </h2>
            <p className="text-gray-600">Get paid for your expertise with these networks</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobLink title="Atheneum" href="https://www.atheneum.ai/network/" description="Global expert network connecting professionals with consulting opportunities" />
            <JobLink title="GLG" href="https://glginsights.com/" description="One of the longer-running, better-known networks" />
            <JobLink title="Maven" href="https://www.maven.co/" description="Expert network for research consultations and interviews" />
            <JobLink title="NewtonX" href="https://www.newtonx.com/for-professionals/" description="B2B expert network for business insights and consulting" />
            <JobLink title="Office Hours" href="https://officehours.com/r/david-berkowitz" description="Share your expertise on B2B products" />
            <JobLink title="Tegus" href="https://www.tegus.com/experts" description="Expert platform for equity research and investment insights" />
            <JobLink title="Third Bridge" href="https://thirdbridge.com/" description="Independent investment research and expert insights network" />
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
      <section id="tools" className="py-16 px-6 bg-white scroll-mt-32">
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
            <JobLink title="Final Round AI" href="https://www.finalroundai.com/" description="Video responses to common interview questions" />
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
            <JobLink title="Private Director Association" href="https://www.privatedirectorassociation.org/" description="National association for private company board governance" stage="executive" selectedStage={selectedStage} />
          </div>
        </div>
      </section>

      {/* Submit a Resource */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <Send className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Know a Great Resource?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Help the community by submitting job boards, tools, or platforms that have helped you in your career journey.
          </p>
          <a 
            href="mailto:david@highcaliberai.com?subject=Job Resource Submission"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <Send className="w-5 h-5" />
            Submit a Resource
          </a>
        </div>
      </section>

      {/* Pro Tips */}
      <section id="pro-tips" className="py-16 px-6 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <Lightbulb className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Pro Tips for Your Job Search</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Essential strategies from someone who's helped thousands navigate their careers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Leverage Your Network First</h3>
                <p className="text-gray-700 leading-relaxed">
                  Before applying cold to job boards, reach out to your network. 80% of jobs are filled through networking. Join communities like Serial Marketers and AI Marketers Guild to expand your reach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimize for ATS Systems</h3>
                <p className="text-gray-700 leading-relaxed">
                  Use tools like Jobscan to ensure your resume passes Applicant Tracking Systems. Mirror keywords from job descriptions and use standard formatting without tables or graphics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Build a Multi-Channel Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Don't rely on one platform. Combine job boards, LinkedIn, expert networks, and communities. Track applications with tools like Teal Job Tracker to stay organized.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consider Fractional & Expert Roles</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fractional roles and expert networks can provide income while you search for full-time opportunities. Platforms like Braintrust and GLG offer legitimate paid opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Show Up Consistently</h3>
                <p className="text-gray-700 leading-relaxed">
                  Job searching is a numbers game. Set daily goals (5 applications, 3 networking messages). Use AI tools like Sonara to automate parts of the process, but keep it personal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learn from Rejection</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every "no" gets you closer to a "yes." Ask for feedback when possible, refine your approach, and keep iterating. Join Never Search Alone for peer support during the journey.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Want more career insights and networking strategies?</p>
            <Link 
              to={createPageUrl('Bylines')}
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
            >
              <BookOpen className="w-5 h-5" />
              Read David's Articles on Networking & Career Growth
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-gray-50 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How many job boards should I use?</h3>
                <p className="text-gray-700">
                  Focus on 3-5 that match your career stage and industry. For marketing roles, prioritize general boards (LinkedIn, Wellfound), niche boards (Jobs in Ad Tech), and communities (Serial Marketers). Quality over quantity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Are expert networks worth it?</h3>
                <p className="text-gray-700">
                  Yes, especially if you have 5+ years of experience. Networks like GLG and Maven pay $200-500/hour for consultations. They're a great income source while job hunting and expand your professional network.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Should I pay for premium job board features?</h3>
                <p className="text-gray-700">
                  Start with free options first. If you're not getting traction after 2-3 weeks, consider premium features on LinkedIn or specialized platforms. Tools like Jobscan offer better ROI than most job board upgrades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How long does a typical job search take?</h3>
                <p className="text-gray-700">
                  For marketing roles: entry-level (1-3 months), mid-level (2-4 months), senior (3-6 months), executive (6-12 months). Using multiple channels and networking actively can cut this time by 30-50%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What's the difference between fractional and freelance?</h3>
                <p className="text-gray-700">
                  Fractional roles are ongoing executive-level engagements (e.g., fractional CMO working 10 hours/week). Freelance is typically project-based. Fractional pays better but requires more experience and strategic thinking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I know which resources are legitimate?</h3>
                <p className="text-gray-700">
                  Legitimate platforms never ask for upfront fees to apply for jobs. Check reviews on Trustpilot, ask in communities like Serial Marketers, and start with well-known brands. If something feels off, it probably is.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}

function JobLink({ title, href, description, featured, stage = "all", selectedStage = "all" }) {
  // Filter logic
  if (selectedStage !== "all" && stage !== "all" && stage !== selectedStage) {
    return null;
  }

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
            <h3 className={`text-base ${featured ? 'font-bold' : 'font-semibold'} text-gray-900 group-hover:text-red-600 transition-colors flex items-center gap-2 flex-wrap`}>
              {title}
              {featured && (
                <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold">
                  Featured
                </span>
              )}
              {stage !== "all" && (
                <Badge variant="outline" className="text-xs">
                  {stage === "entry" ? "Entry" : stage === "mid" ? "Mid" : stage === "senior" ? "Senior" : "Executive"}
                </Badge>
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