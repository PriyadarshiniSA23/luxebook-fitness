import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <>
      <div>
  {/* Ambient Particle Canvas */}
  <div className="canvas-bg" id="particle-container" />
  {/* TopNavBar */}
  <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-margin-desktop py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20 shadow-[0_0_20px_rgba(233,195,73,0.05)]">
    <div className="flex items-center gap-4">
      <span className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
        LuxeBook
      </span>
    </div>
    <nav className="hidden md:flex items-center gap-gutter">
<Link
  className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
  to="/"
>
  Studios
</Link>
     <Link to="/trainers">Trainers</Link>
      <Link
        className="font-body-md text-body-md text-on-surface/80 hover:text-secondary-fixed transition-colors"
        to="/programs"
      >
        Programs
      </Link>
      <Link
        className="font-body-md text-body-md text-on-surface/80 hover:text-secondary-fixed transition-colors"
        to="/membership"
      >
        Membership
      </Link>
    </nav>
    <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary-fixed cursor-pointer p-2 hover:bg-secondary/10 rounded-full transition-all">
        account_circle
      </span>
      <Link
        className="hidden md:block bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-caps text-label-caps uppercase tracking-widest gold-heat-glow transition-all active:scale-95"
        to="/booking"
      >
        Book Session
      </Link>
    </div>
  </header>
  <main className="relative pt-32 pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    {/* Success Hero Section */}
    <section className="flex flex-col items-center text-center mb-stack-lg">
      <div className="mb-stack-sm relative">
        <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-150 opacity-50" />
        <svg
          className="w-24 h-24 text-secondary relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            className="animate-check"
            d="M5 13l4 4L19 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <h1 className="font-display-sm text-display-sm md:font-display-lg md:text-display-lg text-secondary-fixed mb-4 drop-shadow-[0_2px_10px_rgba(233,195,73,0.3)]">
        Booking Confirmed
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface max-w-xl">
        Your sanctuary is prepared. We look forward to your arrival at the Elite
        Performance Studio.
      </p>
    </section>
    {/* Main Confirmation Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      {/* Reservation Details Card */}
      <div className="lg:col-span-7 glass-card rounded-xl overflow-hidden shimmer p-stack-md flex flex-col md:flex-row gap-stack-md">
        <div className="w-full md:w-48 h-64 md:h-auto rounded-lg overflow-hidden shrink-0">
          <img
            alt="Julian Vane training at Elite Performance Studio"
            className="w-full h-full object-cover"
            data-alt="A cinematic portrait of an elite fitness trainer in a high-tech, dimly lit studio. The trainer is lean and muscular, standing amidst high-end obsidian-colored equipment. Golden ambient lighting catches the dust motes in the air, creating a rich atmosphere of luxury and focused performance. The background is a sophisticated mix of deep navy glass and warm metallic gold accents."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCeP6vwRHL6WsxJWqR9tpvNZrSx0ruuw6Zkg7gYuB3q6WrOMCAkyt8bcMQcy0kUPHtVnq550zdqvA3ldS8zpuqIN-QO4-WBnZZXrJsihk6k7nlB6mdnY-qIXW-SsWUDZbFVM-N6pFLISZ6sCUTZP1pqGgeVlf2ktEjH-y5mIH3_BxTUoVNp9ncjm-uS7Uru_qGyJE18gUFQDWgFeSCRiKsj47jTwEYSAYcKVj2KW-u4q0ofCYltub2Xq8M0MNi9qy2rVgDGiJ2rCs"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-secondary/10 text-secondary-fixed px-3 py-1 rounded-full font-label-caps text-[10px] tracking-widest uppercase">
                Confirmed
              </span>
              <span className="text-on-surface/40 text-label-caps">
                Ref: LB-92834
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-secondary-fixed mb-1">
              Elite Performance
            </h2>
            <p className="font-body-md text-on-surface/60 mb-stack-sm italic">
              with Julian Vane
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-label-caps text-secondary/60 uppercase tracking-tighter mb-1">
                  Date
                </p>
                <p className="font-title-lg text-title-lg text-on-surface">
                  Oct 12, 2024
                </p>
              </div>
              <div>
                <p className="font-label-caps text-secondary/60 uppercase tracking-tighter mb-1">
                  Time
                </p>
                <p className="font-title-lg text-title-lg text-on-surface">
                  11:00 AM
                </p>
              </div>
            </div>
          </div>
          <div className="mt-stack-md pt-stack-sm border-t border-secondary/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-sm">
              location_on
            </span>
            <address className="not-italic font-label-caps text-on-surface/60">
              Mayfair District, Elite Performance Wing
            </address>
          </div>
        </div>
      </div>
      {/* Calendar & Actions */}
      <div className="lg:col-span-5 flex flex-col gap-stack-sm">
        {/* Calendar Card */}
        <div className="glass-card rounded-xl p-stack-md">
          <h3 className="font-title-lg text-title-lg text-secondary-fixed mb-stack-sm">
            Add to Calendar
          </h3>
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-between w-full p-4 rounded-lg bg-surface-container/60 border border-secondary/10 hover:bg-secondary/10 transition-all group">
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  calendar_today
                </span>
                <span className="font-body-md">Apple Calendar</span>
              </span>
              <span className="material-symbols-outlined text-on-surface/40 group-hover:text-secondary transition-colors">
                arrow_forward
              </span>
            </button>
            <button className="flex items-center justify-between w-full p-4 rounded-lg bg-surface-container/60 border border-secondary/10 hover:bg-secondary/10 transition-all group">
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  event_available
                </span>
                <span className="font-body-md">Google Calendar</span>
              </span>
              <span className="material-symbols-outlined text-on-surface/40 group-hover:text-secondary transition-colors">
                arrow_forward
              </span>
            </button>
            <button className="flex items-center justify-between w-full p-4 rounded-lg bg-surface-container/60 border border-secondary/10 hover:bg-secondary/10 transition-all group">
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  download
                </span>
                <span className="font-body-md">Download ICS File</span>
              </span>
              <span className="material-symbols-outlined text-on-surface/40 group-hover:text-secondary transition-colors">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        {/* Primary Call to Action */}
        <div className="flex flex-col gap-3">
          <Link to="/admin"className="w-full bg-secondary text-on-secondary py-5 rounded-lg font-label-caps text-label-caps uppercase tracking-widest gold-heat-glow transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-secondary/10">
            Return to Dashboard
          </Link>
          <Link to="/membership" className="w-full bg-transparent border border-secondary text-secondary-fixed py-5 rounded-lg font-label-caps text-label-caps uppercase tracking-widest backdrop-blur-md hover:bg-secondary/5 transition-all active:scale-95">
            Explore Membership
          </Link>
        </div>
      </div>
    </div>
    {/* Membership Spotlight (Bento-style tease) */}
    <section className="mt-stack-lg">
      <h2 className="font-headline-lg text-headline-lg text-secondary-fixed text-center mb-stack-md">
        Elevate Your Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <div className="glass-card rounded-xl p-stack-md flex flex-col gap-stack-sm relative overflow-hidden group h-64">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
            <img
              alt="Luxury spa facilities"
              className="w-full h-full object-cover"
              data-alt="Close-up of a luxurious private spa within a fitness club, featuring warm golden lighting reflected on smooth obsidian tiles. Steam rises gently from a hydrotherapy pool, with high-end designer amenities visible in the soft-focus background. The atmosphere is one of deep relaxation and extreme privacy, rendered in a cinematic high-contrast style."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-QMcLLaesLW0oJAI2-bv_KVw3UkHCyCwBmQ3K8r1FlReljBarwCHzokOtKRcEqdxud_RmOCYnzJznj5r1b2nU8W-ggdp8-FtWkq5zcIDg-SPTcAZDPS2_c-wQs004eq_3KOZ3QJ8vUGs59Fb82gGAubor-BJ5klZ7OE32IjKh0O465lUEg7DJDm4rSrmxwt8EOKFe8IKie1XIb6Tw6CyEjW-EoNUlDocXyuzX6rK2xColtYl2GbxRx63QllufSOH-riP0DlcMlqU"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h4 className="font-title-lg text-title-lg text-secondary-fixed">
              Private Recovery
            </h4>
            <p className="font-body-md text-on-surface/80">
              Access to cryotherapy and salt-water floats after your session.
            </p>
          </div>
        </div>
        <div className="glass-card rounded-xl p-stack-md flex flex-col gap-stack-sm relative overflow-hidden group h-64">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
            <img
              alt="Advanced biometric tracking equipment"
              className="w-full h-full object-cover"
              data-alt="Cutting-edge biometric fitness sensors glowing in a dark room. The sensors emit a subtle gold and blue light, indicating active tracking. The background consists of sleek, glass-covered displays showing elegant data visualizations of heart rate and muscle engagement. The image conveys high-tech performance and scientific precision in a luxury setting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkV9aDZqQIPaorTX4kVlIhgw6efhuiDkU7CmZGnGZ17lceTiyd7QbTKJE81ibuT8YfjFRIcOjD245P2ntmA37AbayFUHFww_0brZ0QmhrD-QwrRmqPD125XChSS4f5bs2gjGvrjV36IAWAwbCLnauucCPrxRTgHgo7YZ4cimYGa4Ir7p7ruWhYqAPe0VXxF3xegGVGBs-FdCYq5bXdKhCO07AhFvFKwueJmMn4z7ioJGNsXpYuGwwP2qDPVIveXRO0YY1IlKHdHYE"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h4 className="font-title-lg text-title-lg text-secondary-fixed">
              Biometric Analysis
            </h4>
            <p className="font-body-md text-on-surface/80">
              Track every movement with medical-grade performance metrics.
            </p>
          </div>
        </div>
        <div className="glass-card rounded-xl p-stack-md flex flex-col gap-stack-sm relative overflow-hidden group h-64 md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
            <img
              alt="Elite members lounge"
              className="w-full h-full object-cover"
              data-alt="An exclusive members-only lounge with deep velvet armchairs and low-slung marble tables. Warm golden accent lighting creates an intimate, sophisticated atmosphere. In the background, a concierge desk made of dark wood and brushed brass stands ready. The overall feeling is one of a prestigious private club for high-performers."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCExTbQZQNl26ehQgOtZeij9FYQ4GVfyNLBYnAh_4T3lwFEiPPLcNu9XJOnmnNpLYQPKY7LKkyqY1pJpvppTYyh9RBsVK0UrW39jSu0W_lLgPOmVEOfRYcBa8DAPNgnuAPTRDCkKJzUL-agmmx_axxtZiReJWpxFbhi5rPMiGGTPaJ06VIuMsfUrLS-67M6FnBjNFSEYsccYsEf35FzQGAZ699q0vzlHbqHk_KUNXmStWN8yunZev3pENLYFXg-5nvRMq98Z9jORLo"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h4 className="font-title-lg text-title-lg text-secondary-fixed">
              Member Concierge
            </h4>
            <p className="font-body-md text-on-surface/80">
              24/7 dedicated support for all your performance and lifestyle
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full px-6 md:px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px] mt-stack-lg">
    <div className="flex flex-col items-center md:items-start gap-2 mb-stack-sm md:mb-0">
      <span className="font-headline-lg text-headline-lg text-secondary-fixed">
        LuxeBook
      </span>
      <p className="font-body-md text-body-md text-secondary-fixed-dim">
        © 2024 LuxeBook Fitness. Excellence in Motion.
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-stack-sm">
      <a
        className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-all"
        href="#"
      >
        Privacy Policy
      </a>
      <a
        className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-all"
        href="#"
      >
        Terms of Service
      </a>
      <a
        className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-all"
        href="#"
      >
        Sustainability
      </a>
      <a
        className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-all"
        href="#"
      >
        Careers
      </a>
    </div>
  </footer>
</div>;

    </>
  );
}

export default Confirmation;