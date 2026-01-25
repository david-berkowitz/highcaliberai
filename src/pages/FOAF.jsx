import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight, Mail, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MetaTags from "../components/SEO/MetaTags";

export default function FOAFPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <MetaTags
        title="FOAF - Fraction of a Fraction"
        description="FOAF is now part of High Caliber AI. Get in touch for fractional leadership and AI marketing expertise."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/94dc5b1c1_foaf-logotype-full-color-rgb-900px-w-72ppi.png"
            alt="FOAF Logo"
            className="h-20 mx-auto mb-8"
          />
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Welcome FOAF Visitors
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Thanks for Your Interest in FOAF
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            FOAF (Fraction of a Fraction) is now running our consulting services through <span className="font-semibold text-gray-900">High Caliber AI</span>, where we continue to provide fractional leadership with a focus on AI-powered marketing excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 mb-12">
          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  What's Changed?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We're bringing the same fractional leadership expertise you know from FOAF, now enhanced with cutting-edge AI marketing capabilities through High Caliber AI. Whether you need strategic guidance, team training, or hands-on execution, we're here to help.
                </p>
                <Link to={createPageUrl("Services")}>
                  <Button className="bg-blue-600 hover:bg-blue-700 group">
                    Explore Our Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">
                  Looking for a FOAF Team Member?
                </h2>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Need to connect with someone from the original FOAF team or looking for recommendations for fractional leadership? We're happy to help connect you with the right expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:david@highcaliberai.com?subject=FOAF Inquiry" className="w-full sm:w-auto">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full">
                      Email David
                    </Button>
                  </a>
                  <Link to={createPageUrl("Contact")} className="w-full sm:w-auto">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                      Contact Form
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              to={createPageUrl("About")} 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              About High Caliber AI
            </Link>
            <Link 
              to={createPageUrl("WorkshopShowcase")} 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Training Programs
            </Link>
            <Link 
              to={createPageUrl("Speaking")} 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Speaking Engagements
            </Link>
            <Link 
              to={createPageUrl("CaseStudies")} 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}