import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerSubmitSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Submission Received!</h1>
        <p className="text-gray-600 text-lg mb-4">
          Thanks for submitting your listing to the High Caliber AI Partner Marketplace.
        </p>
        <p className="text-gray-500 mb-8">
          We'll review your submission and be in touch within a few business days. Note that submission does not guarantee approval, and the listing fee is non-refundable.
        </p>
        <Link to={createPageUrl("Partners")} className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
          Back to Partners
        </Link>
      </motion.div>
    </div>
  );
}