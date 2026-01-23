"use client"

import React, { useState } from 'react';
import { ChevronDown, X, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState([0, 1]);

  const faqs = [
    {
      question: "How long does it take for an entire video to get made?",
      answer: "We guarantee your video fully edited, with a thumbnail, ready to go, all within a max period of 60-72 hours."
    },
    {
      question: "Is there a trial period available to test the service before committing?",
      answer: "Absolutely! You can order a customizable sample video for FREE! This will be completely risk free, no commitment is required. The free sample will allow you to witness the impact of our automation services on your channel firsthand."
    },
    {
      question: "Who owns the videos created through your automation services, and what is the liability in terms of compliance with YouTube policies?",
      answer: "You retain full ownership of all videos created through our automation services. We ensure all content complies with YouTube's terms of service and community guidelines. However, the final responsibility for content uploaded to your channel rests with you as the channel owner."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* FAQ Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(147,51,234,0.4)]">
            FAQ
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
            Questions
          </span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-xl ${
                openItems.includes(index)
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(147,51,234,0.3)]'
                  : 'bg-white/5 text-white border border-white/10 hover:border-purple-500/50 hover:bg-white/10'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-4 flex items-start justify-between text-left transition-colors"
              >
                <span className="font-semibold text-base pr-4 leading-relaxed">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <X className="w-6 h-6 flex-shrink-0 mt-1 animate-in fade-in duration-200" />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0 mt-1 text-white/60 group-hover:text-white transition-colors" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-white/95 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Have a different question button */}
        <div className="mb-8">
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]">
            <span>Have a different question?</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Get Started button */}
        <div className="flex justify-center">
          <Link href="/cart?plan=Custom Package&price=0&description=Let's discuss your specific video production needs&features=[]">
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-800 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] cursor-pointer"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;