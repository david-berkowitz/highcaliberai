import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap, User, ArrowRight, Briefcase, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MetaTags from '@/components/SEO/MetaTags';

const slides = [
  {
    type: "title",
    title: "10 Lessons in Account Management",
    subtitle: "From 15+ Years in Agencies & Marketing Tech",
    speaker: "David Berkowitz",
    speakerTitle: "Founder, High Caliber AI | Chief Community Officer, Marketecture Media"
  },
  {
    number: 1,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here. Add specific examples, stories, or frameworks.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 2,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 3,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 4,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 5,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 6,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 7,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 8,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 9,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  },
  {
    number: 10,
    title: "Lesson Title Here",
    content: "Your key insight or lesson content goes here.",
    takeaway: "Main takeaway or action item"
  }
];

const lessons = slides.filter(slide => slide.number);

export default function Baruch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <MetaTags 
        title="Baruch College Guest Lecture - Account Management"
        description="Guest lecture on Advertising Account Management for Baruch College students by David Berkowitz"
        url="https://highcaliberai.com/baruch"
        canonical="https://highcaliberai.com/baruch"
      />

      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/193424fd7_image.png"
                alt="Baruch College"
                className="h-16 w-auto"
              />
              <div>
                <div className="flex items-center gap-2 text-blue-200 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-sm font-medium">Baruch College</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Advertising Account Management
                </h1>
                <div className="flex items-center gap-2 mt-2 text-blue-200">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Professor Dorian Benkoil</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-blue-200 text-sm">Guest Lecturer</div>
              <div className="text-white font-semibold">David Berkowitz</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/00874766c_DBheadshot1-2026-smallersq.png"
                alt="David Berkowitz"
                className="w-48 h-48 rounded-full mx-auto shadow-xl object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">About David Berkowitz</h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                David Berkowitz is an AI marketing strategist and author of <em>The Non-Obvious Guide to Using AI for Marketing</em>. He founded AI Marketers Guild (7,000+ members) and Serial Marketers, which were acquired by Marketecture Media in 2025, where he now serves as Chief Community Officer.
              </p>
              <p className="text-blue-100 leading-relaxed mb-4">
                Previously, David held senior roles at 360i (VP), MRY (CMO), Mediaocean (SVP), and Sysomos (CSO). He currently serves as fractional CMO for AI-forward companies and Executive in Residence at Progress Partners.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  to={createPageUrl("Book")}
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  My Book
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to={createPageUrl("Jobs")}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Job Resources
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to={createPageUrl("Resources")}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  AI Resources
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Slide Content */}
          <div className="relative h-[500px] flex items-center justify-center p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {slides[currentSlide].type === "title" ? (
                  <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-2xl text-gray-600 mb-12">
                      {slides[currentSlide].subtitle}
                    </p>
                    <div className="mt-16">
                      <div className="text-xl font-semibold text-gray-900 mb-2">
                        {slides[currentSlide].speaker}
                      </div>
                      <div className="text-lg text-gray-600">
                        {slides[currentSlide].speakerTitle}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6">
                      {slides[currentSlide].number}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                      {slides[currentSlide].content}
                    </p>
                    <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto border-l-4 border-blue-600">
                      <div className="text-sm font-semibold text-blue-900 mb-2">Key Takeaway:</div>
                      <p className="text-gray-800">{slides[currentSlide].takeaway}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <button
                onClick={() => goToSlide(0)}
                className={`w-10 h-10 rounded-full font-semibold text-sm transition-all ${
                  currentSlide === 0
                    ? 'bg-blue-600 text-white scale-110'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
                aria-label="Go to title slide"
              >
                ●
              </button>
              {lessons.map((lesson, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index + 1)}
                  className={`w-10 h-10 rounded-full font-semibold text-sm transition-all ${
                    currentSlide === index + 1
                      ? 'bg-blue-600 text-white scale-110'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                  aria-label={`Go to lesson ${lesson.number}`}
                >
                  {lesson.number}
                </button>
              ))}
            </div>
            <div className="text-center mt-4 text-sm text-gray-600">
              {currentSlide === 0 ? 'Title' : `Lesson ${currentSlide}`} of {slides.length - 1}
            </div>
          </div>
        </div>

        {/* Keyboard Navigation Hint */}
        <div className="text-center mt-6 text-blue-200 text-sm">
          Use arrow keys ← → to navigate
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="hidden">
        <button onClick={prevSlide} onKeyDown={(e) => e.key === 'ArrowLeft' && prevSlide()} />
        <button onClick={nextSlide} onKeyDown={(e) => e.key === 'ArrowRight' && nextSlide()} />
      </div>
    </div>
  );
}