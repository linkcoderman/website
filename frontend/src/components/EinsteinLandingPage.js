import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  Gamepad2, 
  Zap, 
  Users, 
  Code, 
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const EinsteinLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Developers', href: '#ready-to-build' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Zero-Knowledge Proofs',
      description: 'Cryptographic verification ensuring game results are tamper-proof without revealing sensitive data.'
    },
    {
      icon: Gamepad2,
      title: 'AI Infrastructure',
      description: 'Ignite Creativity and Trust with our fine-tuned LLMs, engineered for seamless integration within the ZK-JS framework.'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Verification',
      description: 'Instant proof generation and verification for real-time gaming experiences.'
    },
    {
      icon: Code,
      title: 'Neural Game Engine',
      description: 'Comprehensive tools and APIs to integrate verifiable gaming logic into any game.'
    }
  ];

  const benefits = [
    {
      category: 'Game Developers',
      items: [
        'Democratizes game development',
        'Build trust with transparent, verifiable outcomes',
        'Easy integration with existing game engines',
        'Comprehensive documentation and support'
      ]
    },
    {
      category: 'Players',
      items: [
        'Winner takes all rewards',
        'Transparent and verifiable results',
        'Enhanced gaming experience with trust',
        'True ownership of game assets and achievements'
      ]
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Game Logic Tokenization',
      description: 'Developers integrate Einstein protocol into their game logic and instantly publish a tradeabe asset.',
    },
    {
      step: '02',
      title: 'ZKP Generation',
      description: 'Game outcomes generate zero-knowledge proofs automatically without revealing private data.',
    },
    {
      step: '03',
      title: 'Trust Layer',
      description: 'Proofs are verified on-chain, ensuring tamper-proof and transparent results.',
    },
    {
      step: '04',
      title: 'Player Confidence',
      description: 'Players can independently verify game fairness, building unprecedented trust.',
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-cyan-500/20 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Einstein
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <a href="https://einstein.quest" target="_blank" rel="noopener noreferrer">Experience</a>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-700 py-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full font-semibold">
                <a href="https://einstein.quest" target="_blank" rel="noopener noreferrer">Experience</a>
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              A Quantum Leap
            </span>
            <br />
            <span className="text-white">In Development</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Einstein protocol is <span className="text-cyan-400 font-semibold">designed to be instructable and scalable</span>, enabling anyone to publish a new game simply by providing prompts.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <a href="https://einstein.quest" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <span>Experience</span>
                <ArrowRight size={20} />
              </a>
            </button>
            
            <button
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <a href="/documentation.html" className="flex items-center space-x-2">
                <span>Explore Protocol</span>
              </a>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center items-center space-x-8 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>Zero-Knowledge Proofs</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>Verifiable Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>Developer-Friendly</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight size={24} className="text-cyan-400 rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Core Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for the next generation of developers with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                How Einstein Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A seamless integration process that brings cryptographic verification to any game
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transform -translate-y-0.5"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Built For Everyone
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Einstein lowers the barrier to game development empowering everyday users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {benefit.category}
                    </span>
                  </h3>
                  
                  <ul className="space-y-4">
                    {benefit.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="ready-to-build" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/50 to-black/80"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Build?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the revolution of AI gaming. Start integrating Einstein protocol 
              into your games today and give your players incredible incentives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <a href="https://einstein.quest" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <span>Experience</span>
                  <ArrowRight size={20} />
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Einstein
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                Building the future of verifiable, trustless gaming experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/zkEinstein" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">GitHub</a></li>
                <li><a href="/documentation.html" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Documentation</a></li>
                <li><a href="https://einstein.cool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Cool</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="https://discord.gg/euFxrH4DPY" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Discord</a></li>
                <li><a href="https://t.me/zkEinstein" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Telegram</a></li>
                <li><a href="https://x.com/zkEinstein" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ockams Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EinsteinLandingPage;