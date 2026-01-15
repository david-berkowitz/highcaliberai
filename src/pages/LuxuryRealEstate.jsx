import React, { useState } from 'react';
import { MapPin, Home, Bed, Bath, Square, TrendingUp, Sparkles, Search, Filter, Diamond, Heart, Share2, Eye, ChevronLeft, ChevronRight, Upload, Mail, BarChart3, Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const properties = [
  {
    id: 1,
    title: "Penthouse on Park Avenue",
    location: "Upper East Side, New York",
    price: 25000000,
    beds: 4,
    baths: 5,
    sqft: 6500,
    type: "Penthouse",
    status: "For Sale",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"],
    description: "Breathtaking views, custom Italian marble, private rooftop terrace"
  },
  {
    id: 2,
    title: "Beachfront Villa",
    location: "Hamptons, New York",
    price: 18500000,
    beds: 6,
    baths: 7,
    sqft: 8200,
    type: "Villa",
    status: "For Sale",
    images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    description: "Direct ocean access, infinity pool, wine cellar, home theater"
  },
  {
    id: 3,
    title: "Modern Masterpiece",
    location: "Tribeca, New York",
    price: 32000000,
    beds: 5,
    baths: 6,
    sqft: 7800,
    type: "Loft",
    status: "New Listing",
    images: ["https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"],
    description: "Floor-to-ceiling windows, smart home technology, private elevator"
  },
  {
    id: 4,
    title: "Historic Brownstone",
    location: "Brooklyn Heights, New York",
    price: 12500000,
    beds: 5,
    baths: 4,
    sqft: 5400,
    type: "Townhouse",
    status: "For Sale",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"],
    description: "Restored 1890s gem, original details, landscaped garden"
  },
  {
    id: 5,
    title: "Central Park View",
    location: "Midtown West, New York",
    price: 28000000,
    beds: 4,
    baths: 5,
    sqft: 6200,
    type: "Condo",
    status: "For Sale",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"],
    description: "Unobstructed park views, Baccarat chandeliers, concierge service"
  },
  {
    id: 6,
    title: "Waterfront Estate",
    location: "Greenwich, Connecticut",
    price: 21000000,
    beds: 7,
    baths: 8,
    sqft: 12000,
    type: "Estate",
    status: "For Sale",
    images: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800", "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800"],
    description: "5 acres, private dock, guest house, tennis court"
  }
];

export default function LuxuryRealEstate() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  
  // AI Tools State
  const [activeTab, setActiveTab] = useState('description');
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [marketAnalysis, setMarketAnalysis] = useState('');
  const [clientName, setClientName] = useState('');
  const [propertyDetails, setPropertyDetails] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // AI Description Generator
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setIsGenerating(true);
    setGeneratedDescription('');
    
    try {
      // Upload image
      const uploadResult = await base44.integrations.Core.UploadFile({ file });
      setUploadedImage(uploadResult.file_url);
      
      // Generate description
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `You are a luxury real estate copywriter. Analyze this property image and create an elegant, compelling property description (150-200 words) that would appeal to high-net-worth buyers. Focus on luxury details, architectural features, lifestyle benefits, and emotional appeal. Use sophisticated language.`,
        file_urls: [uploadResult.file_url]
      });
      
      setGeneratedDescription(result);
    } catch (error) {
      setGeneratedDescription('Error generating description. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // AI Market Analysis
  const handleMarketAnalysis = async () => {
    if (!propertyAddress.trim()) return;
    
    setIsGenerating(true);
    setMarketAnalysis('');
    
    try {
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `Provide a detailed luxury real estate market analysis for: ${propertyAddress}. Include: current market trends, comparable recent sales, neighborhood highlights, investment outlook, and price positioning. Format with clear sections and bullet points. Be specific and data-driven.`,
        add_context_from_internet: true
      });
      
      setMarketAnalysis(result);
    } catch (error) {
      setMarketAnalysis('Error generating analysis. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // AI Email Generator
  const handleEmailGeneration = async () => {
    if (!clientName.trim() || !propertyDetails.trim()) return;
    
    setIsGenerating(true);
    setGeneratedEmail('');
    
    try {
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `Write a professional, personalized email from a luxury real estate agent to ${clientName} about this property: ${propertyDetails}. The email should be warm yet sophisticated, highlight key features, create urgency, and include a clear call-to-action for a private viewing. Keep it concise (200-250 words) and compelling.`
      });
      
      setGeneratedEmail(result);
    } catch (error) {
      setGeneratedEmail('Error generating email. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const filteredProperties = properties.filter(prop =>
    prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProperty.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-[#D4AF37]/20 bg-black/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Diamond className="w-8 h-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-2xl font-light text-white tracking-wider">PRESTIGE ESTATES</h1>
                <p className="text-xs text-[#D4AF37] tracking-[0.3em]">LUXURY REAL ESTATE</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#listings" className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide">LISTINGS</a>
              <a href="#featured" className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide">FEATURED</a>
              <a href="#agents" className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide">AGENTS</a>
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black rounded-none px-6 font-light tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                CONTACT
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* AI Tools Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-none bg-white/5 border border-[#D4AF37]/20"
            >
              <Wand2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs text-white tracking-[0.3em]">LIVE AI DEMONSTRATIONS</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-4">
              AI-Powered <span className="text-[#D4AF37] font-light" style={{ fontFamily: 'Georgia, serif' }}>Marketing Tools</span>
            </h2>
            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
              See how vibe-coded AI can transform your real estate business—these tools actually work
            </p>
          </div>

          {/* Tool Tabs */}
          <div className="flex gap-4 mb-8 border-b border-[#D4AF37]/20 overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 px-6 font-light tracking-wider whitespace-nowrap transition-colors ${
                activeTab === 'description'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              DESCRIPTION GENERATOR
            </button>
            <button
              onClick={() => setActiveTab('market')}
              className={`pb-4 px-6 font-light tracking-wider whitespace-nowrap transition-colors ${
                activeTab === 'market'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              MARKET ANALYSIS
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`pb-4 px-6 font-light tracking-wider whitespace-nowrap transition-colors ${
                activeTab === 'email'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              EMAIL GENERATOR
            </button>
          </div>

          {/* Tool Content */}
          <div className="bg-white/5 border border-[#D4AF37]/20 rounded-none p-8 backdrop-blur-sm">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-2xl font-light text-white mb-3">AI Property Description Generator</h3>
                <p className="text-white/70 mb-6 font-light">Upload a property photo and get a luxury listing description instantly</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white/80 mb-3 font-light tracking-wide">UPLOAD PROPERTY IMAGE</label>
                    <div className="border-2 border-dashed border-[#D4AF37]/30 rounded-none p-12 text-center hover:border-[#D4AF37] transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        {uploadedImage ? (
                          <img src={uploadedImage} alt="Uploaded" className="max-h-64 mx-auto mb-4" />
                        ) : (
                          <>
                            <Upload className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                            <p className="text-white/60 font-light">Click to upload property image</p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-3 font-light tracking-wide">GENERATED DESCRIPTION</label>
                    <div className="bg-black/30 border border-[#D4AF37]/20 rounded-none p-6 min-h-[300px]">
                      {isGenerating ? (
                        <div className="flex items-center justify-center h-full">
                          <Loader2 className="w-8 h-8 text-[#D4AF37] animate-spin" />
                        </div>
                      ) : generatedDescription ? (
                        <p className="text-white/90 font-light leading-relaxed">{generatedDescription}</p>
                      ) : (
                        <p className="text-white/40 font-light italic">Your AI-generated description will appear here...</p>
                      )}
                    </div>
                    {generatedDescription && !isGenerating && (
                      <Button
                        onClick={() => navigator.clipboard.writeText(generatedDescription)}
                        className="mt-4 bg-[#D4AF37] text-black rounded-none px-6 hover:bg-[#F4D03F] font-light tracking-wider"
                      >
                        COPY TO CLIPBOARD
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'market' && (
              <div>
                <h3 className="text-2xl font-light text-white mb-3">AI Market Analysis</h3>
                <p className="text-white/70 mb-6 font-light">Get real-time market insights for any property location</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white/80 mb-3 font-light tracking-wide">PROPERTY ADDRESS</label>
                    <Input
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="e.g., 432 Park Avenue, New York, NY"
                      className="bg-black/30 border-[#D4AF37]/30 text-white placeholder:text-white/40 rounded-none mb-4 font-light"
                    />
                    <Button
                      onClick={handleMarketAnalysis}
                      disabled={!propertyAddress.trim() || isGenerating}
                      className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black rounded-none px-8 py-6 font-light tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50 w-full"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          ANALYZING...
                        </>
                      ) : (
                        <>
                          <BarChart3 className="w-5 h-5 mr-2" />
                          GENERATE ANALYSIS
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-3 font-light tracking-wide">MARKET INSIGHTS</label>
                    <div className="bg-black/30 border border-[#D4AF37]/20 rounded-none p-6 min-h-[300px] max-h-[500px] overflow-y-auto">
                      {marketAnalysis ? (
                        <div className="text-white/90 font-light leading-relaxed whitespace-pre-line">{marketAnalysis}</div>
                      ) : (
                        <p className="text-white/40 font-light italic">AI-powered market analysis will appear here...</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'email' && (
              <div>
                <h3 className="text-2xl font-light text-white mb-3">AI Client Email Generator</h3>
                <p className="text-white/70 mb-6 font-light">Create personalized client emails in seconds</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white/80 mb-3 font-light tracking-wide">CLIENT NAME</label>
                    <Input
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g., Sarah Johnson"
                      className="bg-black/30 border-[#D4AF37]/30 text-white placeholder:text-white/40 rounded-none mb-4 font-light"
                    />
                    
                    <label className="block text-white/80 mb-3 font-light tracking-wide">PROPERTY DETAILS</label>
                    <Textarea
                      value={propertyDetails}
                      onChange={(e) => setPropertyDetails(e.target.value)}
                      placeholder="e.g., 5-bed penthouse on Park Avenue, $25M, 6,500 sqft, panoramic views, private terrace"
                      className="bg-black/30 border-[#D4AF37]/30 text-white placeholder:text-white/40 rounded-none mb-4 font-light h-32"
                    />
                    
                    <Button
                      onClick={handleEmailGeneration}
                      disabled={!clientName.trim() || !propertyDetails.trim() || isGenerating}
                      className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black rounded-none px-8 py-6 font-light tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50 w-full"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          GENERATING...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          GENERATE EMAIL
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-3 font-light tracking-wide">GENERATED EMAIL</label>
                    <div className="bg-black/30 border border-[#D4AF37]/20 rounded-none p-6 min-h-[300px]">
                      {generatedEmail ? (
                        <div className="text-white/90 font-light leading-relaxed whitespace-pre-line">{generatedEmail}</div>
                      ) : (
                        <p className="text-white/40 font-light italic">Your personalized email will appear here...</p>
                      )}
                    </div>
                    {generatedEmail && !isGenerating && (
                      <Button
                        onClick={() => navigator.clipboard.writeText(generatedEmail)}
                        className="mt-4 bg-[#D4AF37] text-black rounded-none px-6 hover:bg-[#F4D03F] font-light tracking-wider"
                      >
                        COPY EMAIL
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm font-light">
              <Sparkles className="w-4 h-4 inline mr-2 text-[#D4AF37]" />
              These tools are fully functional and powered by live AI—try them now!
            </p>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section id="listings" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-light text-white mb-2">Featured <span className="text-[#D4AF37]">Properties</span></h2>
              <p className="text-white/60 font-light">Handpicked exceptional estates</p>
            </div>
            <Button className="bg-white/5 border border-[#D4AF37]/30 text-white rounded-none px-6 hover:bg-[#D4AF37]/10 font-light tracking-wider">
              <Filter className="w-4 h-4 mr-2" />
              FILTER
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border border-[#D4AF37]/20 rounded-none overflow-hidden hover:border-[#D4AF37] transition-all duration-500 group cursor-pointer backdrop-blur-sm">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onClick={() => {
                        setSelectedProperty(property);
                        setCurrentImageIndex(0);
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#D4AF37] text-black rounded-none font-light tracking-wider">
                        {property.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(property.id);
                        }}
                        className="w-10 h-10 bg-black/70 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors"
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(property.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white'}`} />
                      </button>
                      <button className="w-10 h-10 bg-black/70 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-light text-white group-hover:text-[#D4AF37] transition-colors">{property.title}</h3>
                    </div>
                    
                    <div className="flex items-center text-white/60 text-sm mb-4 gap-2">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      <span className="font-light">{property.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-4 text-white/70 text-sm">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-light">{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-light">{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-light">{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    
                    <p className="text-white/50 text-sm mb-4 font-light line-clamp-2">{property.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20">
                      <div className="text-2xl font-light text-[#D4AF37]">
                        ${(property.price / 1000000).toFixed(1)}M
                      </div>
                      <Button
                        onClick={() => {
                          setSelectedProperty(property);
                          setCurrentImageIndex(0);
                        }}
                        className="bg-white/5 border border-[#D4AF37]/30 text-white rounded-none px-6 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all font-light tracking-wider"
                      >
                        VIEW DETAILS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
            onClick={() => setSelectedProperty(null)}
          >
            <div className="min-h-screen px-6 py-12">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-none overflow-hidden"
                >
                  {/* Image Gallery */}
                  <div className="relative h-[500px] overflow-hidden">
                    <img
                      src={selectedProperty.images[currentImageIndex]}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {selectedProperty.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                      </>
                    )}
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProperty.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-[#D4AF37] w-8' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Property Details */}
                  <div className="p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-4xl font-light text-white mb-3">{selectedProperty.title}</h2>
                        <div className="flex items-center text-white/60 gap-2 mb-4">
                          <MapPin className="w-5 h-5 text-[#D4AF37]" />
                          <span className="text-lg font-light">{selectedProperty.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-light text-[#D4AF37] mb-2">
                          ${(selectedProperty.price / 1000000).toFixed(2)}M
                        </div>
                        <Badge className="bg-[#D4AF37] text-black rounded-none font-light tracking-wider">
                          {selectedProperty.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-6 mb-8">
                      <div className="bg-white/5 border border-[#D4AF37]/20 rounded-none p-6 text-center">
                        <Bed className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                        <div className="text-2xl font-light text-white mb-1">{selectedProperty.beds}</div>
                        <div className="text-sm text-white/60 font-light tracking-wider">Bedrooms</div>
                      </div>
                      <div className="bg-white/5 border border-[#D4AF37]/20 rounded-none p-6 text-center">
                        <Bath className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                        <div className="text-2xl font-light text-white mb-1">{selectedProperty.baths}</div>
                        <div className="text-sm text-white/60 font-light tracking-wider">Bathrooms</div>
                      </div>
                      <div className="bg-white/5 border border-[#D4AF37]/20 rounded-none p-6 text-center">
                        <Square className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                        <div className="text-2xl font-light text-white mb-1">{selectedProperty.sqft.toLocaleString()}</div>
                        <div className="text-sm text-white/60 font-light tracking-wider">Square Feet</div>
                      </div>
                      <div className="bg-white/5 border border-[#D4AF37]/20 rounded-none p-6 text-center">
                        <Home className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                        <div className="text-2xl font-light text-white mb-1">{selectedProperty.type}</div>
                        <div className="text-sm text-white/60 font-light tracking-wider">Property Type</div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-white mb-4">Description</h3>
                      <p className="text-white/70 text-lg leading-relaxed font-light">{selectedProperty.description}</p>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black rounded-none py-6 text-base font-light tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                        SCHEDULE VIEWING
                      </Button>
                      <Button
                        onClick={() => setSelectedProperty(null)}
                        className="bg-white/5 border border-[#D4AF37]/30 text-white rounded-none px-8 py-6 hover:bg-white/10 font-light tracking-wider"
                      >
                        CLOSE
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#D4AF37]/20 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <Diamond className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
          <p className="text-white/60 mb-4 font-light tracking-[0.2em] uppercase">Prestige Estates</p>
          <p className="text-xs text-white/40 font-light">© 2026 Luxury Real Estate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}