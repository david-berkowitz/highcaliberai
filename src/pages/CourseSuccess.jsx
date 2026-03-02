import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CourseSuccess() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 pt-20">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">You're enrolled!</h1>
        <p className="text-gray-500 mb-2">
          Check your email for your access link — or click below to jump right in.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Bookmark the course page and use your email to log back in anytime.
        </p>
        <Link
          to={`${createPageUrl("CourseAccess")}${sessionId ? `?session_id=${sessionId}` : ""}`}
          className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          Start Learning
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}