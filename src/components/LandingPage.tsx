import React from 'react';
import { motion } from 'motion/react';
import { Layout, CheckCircle2, Zap, Users, ArrowRight, Menu, X } from 'lucide-react';

// --- Navbar ---
export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Layout className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">SyncSpace</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">Solutions <span className="text-[10px]">▼</span></a>
              <a href="#" className="hover:text-indigo-600 transition-colors">How It Works</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">Resources <span className="text-[10px]">▼</span></a>
              <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm font-semibold text-gray-700 hover:text-indigo-600">Login</button>
              <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#" className="text-gray-600 font-medium">Solutions</a>
          <a href="#" className="text-gray-600 font-medium">How It Works</a>
          <a href="#" className="text-gray-600 font-medium">Pricing</a>
          <a href="#" className="text-gray-600 font-medium">Resources</a>
          <a href="#" className="text-gray-600 font-medium">About</a>
          <hr className="border-gray-100" />
          <button className="text-gray-700 font-semibold text-left">Login</button>
          <button className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold w-full">Start Free Trial</button>
        </motion.div>
      )}
    </nav>
  );
};

// --- Hero ---
export const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-indigo-700 text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
          🚀 V2.0 is now live! See what's new
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6"
        >
          Bring your team's work into <span className="text-indigo-600">one clear picture.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SyncSpace is the all-in-one workspace that connects your projects, tools, and people. Stop switching tabs and start getting things done.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
            Start Your Free Trial <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all">
            Book a Demo
          </button>
        </motion.div>

        {/* Coded Dashboard Mockup */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white border border-gray-200 rounded-[2rem] shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex">
            {/* Sidebar Mock */}
            <div className="w-16 md:w-48 bg-gray-50 border-r border-gray-100 flex flex-col p-4 gap-4">
              <div className="h-8 w-8 bg-indigo-100 rounded-lg"></div>
              <div className="hidden md:block space-y-3 mt-4">
                <div className="h-2 w-full bg-gray-200 rounded"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
            {/* Main Mock Content */}
            <div className="flex-1 p-4 md:p-8 space-y-6">
              <div className="flex justify-between items-center">
                <div className="h-6 w-32 md:w-48 bg-gray-100 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">🔔</div>
                  <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-bold text-indigo-700">SJ</div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'Active Projects', val: '12', color: 'text-indigo-600', bg: 'bg-indigo-50/50' },
                  { label: 'Tasks Completed', val: '148', color: 'text-emerald-600', bg: 'bg-emerald-50/50' },
                  { label: 'Upcoming Deadlines', val: '5', color: 'text-amber-600', bg: 'bg-amber-50/50' }
                ].map((stat, i) => (
                  <div key={i} className={`h-24 md:h-32 ${stat.bg} border border-white/50 shadow-sm rounded-2xl p-4 flex flex-col justify-between`}>
                    <div className="text-xs font-semibold text-gray-500">{stat.label}</div>
                    <div className={`text-3xl font-display font-bold ${stat.color}`}>{stat.val}</div>
                  </div>
                ))}
              </div>
              <div className="h-40 bg-gray-50/80 rounded-2xl border border-gray-100 p-6 flex flex-col gap-4">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="flex-1 rounded-xl bg-white border border-gray-100 flex items-end justify-between px-4 pb-2 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                  {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                    <div key={i} className="w-[10%] bg-indigo-100 rounded-t-sm relative" style={{ height: `${h}%` }}>
                      <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm" style={{ height: `${h * 0.7}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Social Proof ---
export const SocialProof = () => {
  const logos = ["Google", "Stripe", "Spotify", "Meta", "Slack", "Amazon"];
  return (
    <div className="py-12 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Trusted by 10,000+ forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map(logo => (
            <span key={logo} className="font-display text-xl md:text-2xl font-bold text-gray-400">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Features ---
export const Features = () => {
  const features = [
    {
      title: "Smart Dashboards",
      desc: "See project health at a glance with customizable views and real-time data.",
      icon: <Layout className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Automated Workflows",
      desc: "Let AI handle your repetitive tasks so your team can focus on execution.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Real-time Collaboration",
      desc: "Chat, comment, and edit documents together without leaving the workspace.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Stop managing "work about work."</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Spreadsheets, endless email threads, and scattered notes are slowing you down. SyncSpace centralizes everything so your team can focus on execution, not administration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col"
            >
              <div className={`w-12 h-12 ${feat.color} rounded-2xl flex items-center justify-center mb-6`}>
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-2 text-lg font-bold text-indigo-600 hover:text-indigo-700 hover:gap-3 transition-all">
            Explore all Core Features <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- How It Works ---
export const HowItWorks = () => {
  const steps = [
    { title: "Connect", desc: "Sync your existing tools with one click." },
    { title: "Customize", desc: "Build workflows that match your exact process." },
    { title: "Scale", desc: "Watch your team's productivity multiply." }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Up and running in minutes.</h2>
          <p className="text-indigo-200/70 max-w-2xl mx-auto">Skip the long implementation cycles. SyncSpace is designed to be adopted in days, not months.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group flex gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-xl relative z-10 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                    {idx + 1}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 -ml-[1px] w-[2px] h-16 bg-indigo-800/50"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-indigo-200/60 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-12 lg:mt-0">
             <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur-3xl opacity-20"></div>
             <div className="relative bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-700">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Incoming connection</div>
                    <div className="text-lg font-bold">Sync successful</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {['Data synchronized', 'Workflow updated', 'Team notified'].map((msg, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                       <span className="text-gray-300">{msg}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Integrations ---
export const Integrations = () => {
  const tools = [
    "Slack", "Google Workspace", "Salesforce", "Zoom", "Notion", "Asana", "Jira", "Figma"
  ];
  
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Plays nice with your favorite tools.</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          SyncSpace natively integrates with the software your team already relies on, so you never skip a beat. Connect in seconds, automate in minutes.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {tools.map(tool => (
            <div key={tool} className="bg-white px-6 py-4 rounded-2xl border border-gray-200 shadow-sm font-bold text-gray-700 flex items-center gap-3 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm"></div>
              </div>
              {tool}
            </div>
          ))}
        </div>
        
        <a href="#" className="inline-flex items-center gap-2 text-lg font-bold text-indigo-600 hover:text-indigo-700 hover:gap-3 transition-all">
          See all 50+ Integrations <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

// --- Testimonials ---
export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-10 inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full text-indigo-600">
          <Users className="w-8 h-8" />
        </div>
        <blockquote className="font-display text-2xl md:text-4xl font-medium text-gray-900 leading-tight mb-8">
          "SyncSpace completely transformed how our agency operates. We saved 15 hours a week on project management alone. It's the first tool the entire team actually <span className="italic underline decoration-indigo-300 underline-offset-4">enjoys</span> using."
        </blockquote>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shadow-inner flex-shrink-0">
             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="Sarah Jenkins" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
            <p className="text-gray-500 text-sm">VP of Operations at TechCorp</p>
          </div>
        </div>
        
        <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-lg hover:text-indigo-700 hover:gap-3 transition-all">
           Read the full Case Study <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

// --- Final CTA ---
export const FinalCTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-500/40">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 blur-3xl rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to do your best work?</h2>
          <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams who are scaling faster and stressing less. Get 14 days completely free. No credit card required.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-50 transition-all shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <Layout className="text-white w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">SyncSpace</span>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              The all-in-one workspace for high-performance teams to connect, collaborate and scale.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Solutions</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Team Collaboration</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Resource Planning</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Resources</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
          <p>© 2024 SyncSpace Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
            <a href="#" className="hover:text-gray-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
