import { Link, useNavigate } from "react-router-dom";
import { useBooking } from "../contexts/BookingContext";

function TrainerSelection() {
  const navigate = useNavigate();
  const { setTrainer } = useBooking();

  return (
<>
  {/* Atmospheric Particles */}
  <div
    className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    id="particles-container"
  />
  {/* TopNavBar */}
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20 shadow-[0_0_20px_rgba(233,195,73,0.05)]">
    <div className="flex items-center gap-8">
      <span className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
        LuxeBook
      </span>
      <div className="hidden md:flex gap-gutter">
        <Link
          className="font-body-md text-body-md text-on-surface/80 hover:text-secondary-fixed transition-colors"
          to="/"
        >
          Studios
        </Link>
        <Link
          className="font-body-md text-body-md text-on-surface/80 hover:text-secondary-fixed transition-colors"
          to="/trainers"
        >
          Trainers
        </Link>
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
      </div>
    </div>
    <div className="flex items-center gap-stack-sm">
      <Link to="/booking" className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-caps text-label-caps hover:scale-105 active:scale-95 transition-all gold-glow">
        Book Session
      </Link>
      <span className="material-symbols-outlined text-secondary-fixed text-3xl cursor-pointer hover:opacity-80">
        account_circle
      </span>
    </div>
  </nav>
  {/* SideNavBar (Social Rail) */}
  <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-stack-sm p-2 bg-surface-container/40 backdrop-blur-[40px] border border-secondary/10 rounded-full shadow-2xl shadow-secondary/5 hidden lg:flex">
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      type="button"
    >
      <span className="material-symbols-outlined">share</span>
    </button>
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      type="button"
    >
      <span className="material-symbols-outlined">public</span>
    </button>
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      type="button"
    >
      <span className="material-symbols-outlined">group</span>
    </button>
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      type="button"
    >
      <span className="material-symbols-outlined">play_circle</span>
    </button>
  </div>
  {/* Main Content Canvas */}
  <main className="pt-32 pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
    {/* Page Header & Progress */}
    <header className="mb-stack-lg text-center md:text-left">
      <h1 className="font-display-sm text-display-sm text-secondary-fixed-dim mb-4">
        Reserve Your Experience
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface/60 max-w-2xl">
        Elevate your performance with elite guidance in our private sanctuary.
      </p>
    </header>
    {/* Progress Tracker */}
    <div className="mb-stack-lg relative">
      <div className="flex justify-between items-center relative z-10">
        {/* Step 1 (Completed) */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer opacity-60">
          <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold transition-all">
            <span className="material-symbols-outlined text-xl">check</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface/60">
            Service
          </span>
        </div>
        {/* Step 2 (Active) */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold progress-dot-active transition-all">
            2
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed">
            Trainer
          </span>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-secondary/20 flex items-center justify-center font-bold">
            3
          </div>
          <span className="font-label-caps text-label-caps">
            Date &amp; Time
          </span>
        </div>
        {/* Step 4 */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-secondary/20 flex items-center justify-center font-bold">
            4
          </div>
          <span className="font-label-caps text-label-caps">Details</span>
        </div>
        {/* Step 5 */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-secondary/20 flex items-center justify-center font-bold">
            5
          </div>
          <span className="font-label-caps text-label-caps">Confirmation</span>
        </div>
      </div>
      {/* Progress Line Background */}
      <div className="absolute top-5 left-0 w-full h-[1px] bg-secondary/10 -z-10" />
      {/* Active Progress Line */}
      <div className="absolute top-5 left-0 w-1/2 h-[1px] bg-secondary -z-10 transition-all duration-700 shadow-[0_0_10px_#e9c349]" />
    </div>
    <div className="flex flex-col lg:flex-row gap-gutter">
      {/* Service Selection Grid (Left) */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
          {/* Trainer 1 */}
          <div className="glass-panel p-stack-sm cursor-pointer relative overflow-hidden group">
            <div className="h-64 mb-stack-sm overflow-hidden rounded-xl">
              <img
                alt="Julian Vane"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4CuO6zzdkvTcsbI3pvEiZzS6Iocg2BNeshiYZNr0r1O8PofvK35hmpUJuGh-yfAp5HQU5J2Dqg7xrfYbuYcIknu-J9AXlT_l5V1ywRpXDL86DbSCUMeIx_lt2Pxd76rs5hdw6aDHdIqkksj9fMDetYBdUIL9JHwCqTcoPpLoZ2uk0IrHVHX4ahVGDYv7x5byosEJ0hlr4DyriW4BhTr5ZfVWWGRM6Bu4ecdrsGbVQwMjNqerpEGzBUSn-28E1KUg3n-gk5I96IY"
              />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-secondary-fixed-dim mb-1">
              Julian Vane
            </h3>
            <p className="font-label-caps text-label-caps text-secondary-fixed/60 mb-stack-sm">
              Olympic Conditioning
            </p>
            <p className="font-body-md text-on-surface/60 mb-stack-md line-clamp-2">
              Former Olympic coach specializing in explosive power and elite
              metabolic conditioning.
            </p>
            <button
              type="button"
              onClick={() => { setTrainer({ id: 1, name: 'Julian Vane' }); navigate('/datetime'); }}
              className="w-full py-3 border border-secondary/20 rounded-full font-label-caps text-label-caps tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-300 flex items-center justify-center"
            >
              Select Trainer
            </button>
          </div>
          {/* Trainer 2 */}
          <div className="glass-panel p-stack-sm cursor-pointer relative overflow-hidden group">
            <div className="h-64 mb-stack-sm overflow-hidden rounded-xl">
              <img
                alt="Elena Rossi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcUP0rZgvHNE_6vrGHV-y1DbtGj1Bfb9BiIoAmMhOfsjuUUvejWde1cTb6xtDpmJ6qVaSdEVKvFHJydT99P68enkOgpndGcMDHfoNcM3ntwnATLdi2f8AfsUEEcpisZCMy6qzyy4XlvM-WhPJeGR8e-7TJ7tk8DKmrCgi7EnRNwmOVrjoAXKnVQiinYCZ1L9C05r8XGYRazmAmDPhHYK6U--EWFYrTeAKMVj0qul8TEQDrngCLY8imijyoACNLQKz6X7xgMokN4y0"
              />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-secondary-fixed-dim mb-1">
              Elena Rossi
            </h3>
            <p className="font-label-caps text-label-caps text-secondary-fixed/60 mb-stack-sm">
              Mobility &amp; Recovery
            </p>
            <p className="font-body-md text-on-surface/60 mb-stack-md line-clamp-2">
              Expert in biomechanics and restorative movement for long-term
              athletic longevity.
            </p>
            <button
              type="button"
              onClick={() => { setTrainer({ id: 2, name: 'Elena Rossi' }); navigate('/datetime'); }}
              className="w-full py-3 border border-secondary/20 rounded-full font-label-caps text-label-caps tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-300 flex items-center justify-center"
            >
              Select Trainer
            </button>
          </div>
          {/* Trainer 3 */}
          <div className="glass-panel p-stack-sm cursor-pointer relative overflow-hidden group">
            <div className="h-64 mb-stack-sm overflow-hidden rounded-xl">
              <img
                alt="Marcus Thorne"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyoH7pVnrSG0lAm1hxq_qJRYs5Tdu_gMdZg4K6cy7NMbnpTUFTVvZpftVyyylS0ly6L7Kg2UTHLWJO59HcnI9vDOkGniwTC_yxW7mrQHcvUyJwSN0tCI-XP_LYv5DcNN-vlYGVP5QgDdcSgrOx9hUSFVYWw2Fw3YR8v6fER_TrkYZWH0WkzHRG-1mThAfkV7plQqJ7dLHatBfu216j1wKF8tAPNPFtp-z5D6IO2PjTmea3U94IpJX_idYKH_LsuC5sjM23oU77BhY"
              />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-secondary-fixed-dim mb-1">
              Marcus Thorne
            </h3>
            <p className="font-label-caps text-label-caps text-secondary-fixed/60 mb-stack-sm">
              Hypertrophy Specialist
            </p>
            <p className="font-body-md text-on-surface/60 mb-stack-md line-clamp-2">
              Master of structural hypertrophy and precision strength training
              for high-performance physiques.
            </p>
            <button
              type="button"
              onClick={() => { setTrainer({ id: 3, name: 'Marcus Thorne' }); navigate('/datetime'); }}
              className="w-full py-3 border border-secondary/20 rounded-full font-label-caps text-label-caps tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-300 flex items-center justify-center"
            >
              Select Trainer
            </button>
          </div>
        </div>
      </div>
      {/* Booking Summary Sidebar (Right) */}
      <aside className="w-full lg:w-[400px] shrink-0">
        <div className="glass-panel p-stack-md sticky top-32 rounded-xl">
          <h2 className="font-title-lg text-title-lg text-secondary-fixed mb-stack-sm">
            Booking Summary
          </h2>
          <div id="summary-content">
            <div className="flex flex-col gap-stack-sm mb-stack-md border-y border-secondary/10 py-stack-sm">
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-label-caps text-on-surface/60">
                  Service
                </span>
                <span className="font-body-md text-secondary-fixed-dim font-bold">
                  Elite Performance
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-label-caps text-on-surface/60">
                  Duration
                </span>
                <span className="font-body-md text-on-surface">60 Minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-label-caps text-on-surface/60">
                  Trainer
                </span>
                <span className="font-body-md text-secondary-fixed italic">
                  Selection in progress...
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-title-lg text-title-lg text-on-surface">
                  Total
                </span>
                <span className="font-title-lg text-title-lg text-secondary-fixed">
                  $150
                </span>
              </div>
            </div>
            <button
              className="w-full bg-surface-container-high text-on-surface/40 py-4 rounded-full font-label-caps text-label-caps tracking-widest cursor-not-allowed mb-4"
              disabled=""
            >
              Select a Trainer
            </button>
          </div>
          <div className="flex items-start gap-3 mt-stack-sm p-3 bg-secondary/5 rounded-lg border border-secondary/10">
            <span className="material-symbols-outlined text-secondary text-sm pt-1">
              verified_user
            </span>
            <p className="text-xs text-on-surface/50 leading-relaxed">
              Your reservation includes access to the private valet, hydration
              bar, and luxury grooming suite.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </main>
  {/* Footer */}
  <footer className="w-full mt-stack-lg border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px]">
    <div className="w-full px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:items-start gap-2 mb-stack-sm md:mb-0">
        <span className="font-headline-lg text-headline-lg text-secondary-fixed">
          LuxeBook
        </span>
        <p className="font-body-md text-body-md text-on-surface/60 text-secondary-fixed-dim">
          © 2024 LuxeBook Fitness. Excellence in Motion.
        </p>
      </div>
      <div className="flex gap-gutter">
        <button
          className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
          type="button"
        >
          Privacy Policy
        </button>
        <button
          className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
          type="button"
        >
          Terms of Service
        </button>
        <button
          className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
          type="button"
        >
          Sustainability
        </button>
        <button
          className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
          type="button"
        >
          Careers
        </button>
      </div>
    </div>
  </footer>
</>

  );
}

export default TrainerSelection;

