import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Sparkles, 
  Code, 
  Heart, 
  Package, 
  Flag,
  Users, 
  ArrowRight,
  BookOpen,
  Target,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetaTags from "@/components/SEO/MetaTags";

export default function Training() {
  const trainingPrograms = [
    {
      id: "vibe-coding",
      title: "Vibe Coding Workshop",
      subtitle: "Build with AI, No Code Required",
      description: "Learn to build full applications using AI as your development partner. Perfect for marketers, entrepreneurs, and anyone who wants to bring their ideas to life through conversational development.",
      icon: Code,
      color: "from-purple-600 to-blue-600",
      borderColor: "border-purple-200",
      features: [
        "Conversational AI development",
        "Rapid prototyping techniques",
        "Live build demonstrations",
        "Deploy real applications"
      ],
      duration: "Half-day workshop",
      link: "/vibe",
      external: false
    },
    {
      id: "cpg",
      title: "AI for CPG Brands",
      subtitle: "Transform Consumer Marketing",
      description: "Two-day intensive bootcamp for consumer packaged goods marketers. Learn AI tools for product launches, consumer insights, content creation, and omnichannel retail.",
      icon: Package,
      color: "from-emerald-600 to-orange-600",
      borderColor: "border-emerald-200",
      features: [
        "Product innovation workflows",
        "Consumer insights AI",
        "Retail execution strategies",
        "Brand building at scale"
      ],
      duration: "2-day bootcamp",
      link: "/cpg",
      external: false
    },
    {
      id: "politics",
      title: "AI Campaign Training",
      subtitle: "Win Elections with AI",
      description: "Intensive campaign bootcamp for political operatives. Master AI tools for voter outreach, fundraising, messaging, rapid response, and get-out-the-vote operations.",
      icon: Flag,
      color: "from-blue-600 to-red-600",
      borderColor: "border-blue-200",
      features: [
        "Voter targeting & persuasion",
        "Rapid response systems",
        "Volunteer mobilization",
        "Fundraising automation"
      ],
      duration: "2-day bootcamp",
      link: "/politics",
      external: false
    },
    {
      id: "corporate",
      title: "Corporate AI Training",
      subtitle: "Team Activation & Enablement",
      description: "Custom training programs for B2B marketing teams. Applied workshops that force your team to use AI on live campaigns—building muscle memory and immediate output.",
      icon: Users,
      color: "from-gray-800 to-gray-900",
      borderColor: "border-gray-200",
      features: [
        "Customized to your industry",
        "Hands-on live campaigns",
        "Team skill development",
        "Implementation support"
      ],
      duration: "Custom duration",
      link: "/services",
      external: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Training Programs - AI Marketing Education"
        description="AI marketing training programs from vibe coding workshops to corporate team training. Learn practical AI skills for marketing, campaigns, and social impact."
        url="https://highcaliberai.com/training"
        canonical="https://highcaliberai.com/training"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* AI-optimized answer box */}
          <div className="bg-white border-2 border-red-200 rounded-xl p-6 mb-12 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What AI Training Does High Caliber AI Offer?</h2>
            <p className="text-gray-800 leading-relaxed">
              High Caliber AI offers four specialized training programs: (1) Vibe Coding Workshop - build AI-powered apps without code in a half-day session, (2) AI for CPG Brands - 2-day bootcamp for consumer packaged goods marketers covering product innovation and retail execution, (3) AI Campaign Training - 2-day bootcamp for political operatives covering voter outreach and fundraising, and (4) Corporate AI Training - custom programs for B2B marketing teams with hands-on exercises.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-100 border border-red-200">
              <GraduationCap className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900 tracking-wide">AI Marketing Education</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Training <span className="text-red-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From vibe coding workshops to specialized industry bootcamps—practical AI training that gets results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                {program.external ? (
                  <a 
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                  >
                    <Card className={`h-full border-2 ${program.borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <program.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <Badge className="mb-3 text-xs">{program.duration}</Badge>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 font-medium mb-4">
                          {program.subtitle}
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {program.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {program.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <Sparkles className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Link 
                    to={createPageUrl(program.link.substring(1))}
                    className="block h-full group"
                  >
                    <Card className={`h-full border-2 ${program.borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <program.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <Badge className="mb-3 text-xs">{program.duration}</Badge>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 font-medium mb-4">
                          {program.subtitle}
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {program.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {program.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <Sparkles className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Train with David Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Train with David
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world experience meets hands-on practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  400+ speaking engagements, author of The Non-Obvious Guide to Using AI for Marketing, founder of AI Marketers Guild (7,000+ members)
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  No theory-heavy lectures. Every session includes hands-on exercises with real tools you can use immediately after training
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join a network of AI-forward marketers. Get ongoing support, peer learning, and access to exclusive resources
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Level Up Your Team?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Custom training programs available for teams and organizations. Let's discuss your needs.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Inquire About Training
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}