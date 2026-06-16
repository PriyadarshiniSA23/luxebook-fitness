import { Link } from "react-router-dom";
function Home() {
  return (
   <>
  {/* Ambient Background Scene */}
  <div className="fixed inset-0 z-0" id="particle-container">
    {/* Accent Glows */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] animate-pulse" />
    <div
      className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] animate-pulse"
      style={{ animationDelay: "2s" }}
    />
  </div>
  {/* Main Splash Canvas */}
  <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-margin-mobile md:px-margin-desktop text-center">
    {/* Content Container */}
    <div className="flex flex-col items-center max-w-4xl">
      {/* Logo Container */}
      <div className="relative mb-stack-md group reveal-logo">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
        {/* The Logo Image */}
        <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full border border-secondary/20 p-2 glass-panel gold-sweep">
          <img
            alt="LuxeBook Performance Studio Logo"
            className="w-full h-full object-contain"
            src="https://lh3.googleusercontent.com/aida/AP1WRLuZq8QKzjx4M5hqpR4jiZ_lcatND3iQBC5KHog0P--4mOAqMoSgJ4ZnpInPtCagxa-nmMvl01gZMD-wawEV3agvu7Aqepyy3seT9IOHrO4-L2lIWa73CapzfSLau0lJw8eyP7msuUGTm3wtqQOLiu93pExxHBla0tk24s2wezF5CrQdqaO-RfmQv-aRaKdTWNPpyYAtZ8cSPAuGKjk0x8OfUWHalLPnDPqPJGWD5T_fe-x3oYieHCH3cZo"
          />
        </div>
      </div>
      {/* Typography Section */}
      <header className="space-y-4 mb-stack-lg">
        <h1 className="font-display-lg text-display-lg md:text-[84px] text-secondary tracking-tight leading-none reveal-headline">
          LuxeBook{" "}
          <span className="block md:inline font-normal italic opacity-90">
            Performance Studio
          </span>
        </h1>
        <div className="flex items-center justify-center gap-4 py-2 reveal-tagline">
          <span className="h-[1px] w-12 bg-secondary/30" />
          <p className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-[0.3em]">
            Elite Fitness. Luxury Wellness. Seamless Booking.
          </p>
          <span className="h-[1px] w-12 bg-secondary/30" />
        </div>
      </header>
      {/* CTA Section */}
      <div className="relative group reveal-cta">
        <Link
          to="/transformation"
          className="px-10 py-4 bg-secondary text-on-secondary-fixed font-title-lg rounded-full flex items-center gap-3 gold-heat-glow transition-all duration-500 hover:scale-105 active:scale-95"
        >
          <span className="uppercase tracking-widest text-[14px]">
            Enter Experience
          </span>
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </Link>
        {/* Subtle Sub-action */}
        <div className="mt-stack-sm">
          <Link
            to="/login"
            className="font-label-caps text-on-surface/40 hover:text-secondary/60 transition-colors uppercase tracking-widest text-[10px]"
          >
            Member Login
          </Link>
        </div>
      </div>
    </div>
  </main>
  {/* Bottom Decorative Element */}
  <div
    className="fixed bottom-12 left-0 w-full z-20 flex justify-center opacity-30 select-none pointer-events-none reveal-cta"
    style={{ animationDelay: "1.5s" }}
  >
    <div className="flex items-center gap-8 font-label-caps text-[10px] tracking-[0.5em] uppercase text-secondary">
      <span>London</span>
      <span className="w-1 h-1 bg-secondary rounded-full" />
      <span>New York</span>
      <span className="w-1 h-1 bg-secondary rounded-full" />
      <span>Dubai</span>
    </div>
  </div>
  {/* JavaScript for Particles and Interactions */}
</>

  );
}

export default Home;