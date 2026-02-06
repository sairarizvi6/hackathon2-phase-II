"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroFull() {
  return (
    <header className="min-h-[calc(100vh-80px)] relative flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-40 blur-3xl animate-blob" />
        <div className="absolute right-[-8rem] bottom-0 w-96 h-96 rounded-full bg-gradient-to-br from-pink-500 to-amber-400 opacity-30 blur-3xl animate-blob" style={{ animationDelay: '1.2s' }} />
      </div>

      <motion.div
        className="z-10 max-w-6xl px-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-black tracking-widest uppercase mb-6 animate-glow">
          <Sparkles className="w-4 h-4" />
          “Productivity — Evolved”
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-foreground mb-6">
            A Todo App
          <br />
          That Actually Works.
        </h1>

        <p className="text-xl md:text-2xl opacity-80 body max-w-3xl mx-auto mb-10">
          A new way to master your day: fluid motion, intuitive design, 
          and interactions that make planning feel effortless.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="/auth/sign-up">
            <Button variant="primary" size="lg" className="h-16 px-10 rounded-2xl neon">
           Let’s Go
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button variant="ghost" size="lg" className="h-16 px-8 rounded-2xl">
             Launch Dashboard <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
