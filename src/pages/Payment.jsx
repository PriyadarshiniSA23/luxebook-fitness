import { Link } from "react-router-dom";

function Payment() {
  return (
<>
  {/* TopNavBar */}
  <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20 shadow-[0_0_20px_rgba(233,195,73,0.05)]">
    <div className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
      LuxeBook
    </div>
    <nav className="hidden md:flex gap-8 items-center">
      <Link
        className="text-on-surface/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md"
        to="/"
      >
        Studios
      </Link>
      <Link
        className="text-on-surface/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md"
        to="/trainers"
      >
        Trainers
      </Link>
      <Link
        className="text-on-surface/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md"
        to="/programs"
      >
        Programs
      </Link>
      <Link
        className="text-on-surface/80 hover:text-secondary-fixed transition-colors font-body-md text-body-md"
        to="/membership"
      >
        Membership
      </Link>
    </nav>
    <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary-fixed cursor-pointer">
        account_circle
      </span>
      <Link to="/booking" className="bg-secondary text-on-secondary px-6 py-2 font-bold transition-transform active:scale-95 gold-heat">
        Book Session
      </Link>
    </div>
  </header>
  <main className="pt-32 pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    {/* Progress Tracker */}
    <div className="mb-stack-lg relative max-w-3xl mx-auto">
      <div className="flex justify-between items-center relative z-10">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              check
            </span>
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed">
            Select
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              check
            </span>
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed">
            Trainer
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              check
            </span>
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed">
            Schedule
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              check
            </span>
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed">
            Details
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(233,195,73,0.3)] bg-surface-container-highest">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed font-bold">
            Payment
          </span>
        </div>
      </div>
      <div className="absolute top-5 left-0 w-full h-[2px] progress-line -z-0" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Left Column: Payment Form */}
      <div className="lg:col-span-7 flex flex-col gap-stack-md">
        <h1 className="font-headline-lg text-headline-lg text-secondary-fixed">
          Secure Payment
        </h1>
        {/* Interactive Card Visual */}
        <div
          className="perspective-1000 w-full h-64 relative group cursor-pointer"
          id="creditCard"
        >
          <div className="card-inner relative w-full h-full duration-500">
            {/* Front */}
            <div className="card-front absolute w-full h-full glass-panel rounded-xl p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full -mr-16 -mt-16" />
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-secondary/40">
                  contactless
                </span>
                <div className="w-12 h-12">
                  <svg
                    className="opacity-80"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={15}
                      cy={24}
                      fill="#e9c349"
                      fillOpacity="0.8"
                      r={15}
                    />
                    <circle
                      cx={33}
                      cy={24}
                      fill="#ffe088"
                      fillOpacity="0.6"
                      r={15}
                    />
                  </svg>
                </div>
              </div>
              <div
                className="font-body-lg text-display-sm tracking-[0.15em] text-secondary-fixed"
                id="cardDisplayNumber"
              >
                •••• •••• •••• ••••
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    Card Holder
                  </p>
                  <p
                    className="font-title-lg text-title-lg tracking-wide uppercase"
                    id="cardDisplayName"
                  >
                    Your Name
                  </p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    Expires
                  </p>
                  <p
                    className="font-title-lg text-title-lg"
                    id="cardDisplayExpiry"
                  >
                    MM/YY
                  </p>
                </div>
              </div>
            </div>
            {/* Back */}
            <div className="card-back absolute w-full h-full glass-panel rounded-xl flex flex-col py-8">
              <div className="w-full h-12 bg-surface-container-highest mb-6" />
              <div className="px-8">
                <div className="bg-surface-container-low h-10 w-full flex items-center justify-end px-4">
                  <span
                    className="font-body-md text-secondary tracking-widest"
                    id="cardDisplayCVV"
                  >
                    •••
                  </span>
                </div>
                <p className="mt-4 text-[8px] leading-tight text-on-surface-variant opacity-60">
                  This card is issued by LuxeBook Financial Services. Access to
                  elite performance facilities is subject to membership terms.
                  By using this card, you agree to the exclusive terms and
                  conditions of the LuxeBook Private Circle.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Form Fields */}
        <form className="glass-panel rounded-xl p-8 space-y-gutter">
          <div className="group">
            <label className="block font-label-caps text-label-caps text-secondary mb-2 group-focus-within:text-secondary-fixed transition-colors">
              Cardholder Name
            </label>
            <input
              className="w-full bg-transparent border-b border-secondary/20 focus:border-secondary transition-all outline-none py-3 text-body-lg font-body-lg placeholder:text-on-surface-variant/30 uppercase tracking-widest"
              id="nameInput"
              placeholder="JULIAN VANE"
              type="text"
            />
          </div>
          <div className="group">
            <label className="block font-label-caps text-label-caps text-secondary mb-2 group-focus-within:text-secondary-fixed transition-colors">
              Card Number
            </label>
            <input
              className="w-full bg-transparent border-b border-secondary/20 focus:border-secondary transition-all outline-none py-3 text-body-lg font-body-lg tracking-[0.2em] placeholder:text-on-surface-variant/30"
              id="numberInput"
              maxLength={19}
              placeholder="0000 0000 0000 0000"
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            <div className="group">
              <label className="block font-label-caps text-label-caps text-secondary mb-2 group-focus-within:text-secondary-fixed transition-colors">
                Expiry Date
              </label>
              <input
                className="w-full bg-transparent border-b border-secondary/20 focus:border-secondary transition-all outline-none py-3 text-body-lg font-body-lg placeholder:text-on-surface-variant/30"
                id="expiryInput"
                maxLength={5}
                placeholder="MM/YY"
                type="text"
              />
            </div>
            <div className="group">
              <label className="block font-label-caps text-label-caps text-secondary mb-2 group-focus-within:text-secondary-fixed transition-colors">
                CVV
              </label>
              <input
                className="w-full bg-transparent border-b border-secondary/20 focus:border-secondary transition-all outline-none py-3 text-body-lg font-body-lg placeholder:text-on-surface-variant/30"
                id="cvvInput"
                maxLength={3}
                onBlur={() => document.getElementById('creditCard')?.classList.remove('card-flip')}
                onFocus={() => document.getElementById('creditCard')?.classList.add('card-flip')}
                placeholder="•••"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4 opacity-60">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary-fixed">
                verified_user
              </span>
              <span className="material-symbols-outlined text-secondary-fixed">
                shield
              </span>
              <span className="material-symbols-outlined text-secondary-fixed">
                lock
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-label-caps">
              PCI DSS Compliant &amp; SSL Secured
            </p>
          </div>
        </form>
      </div>
      {/* Right Column: Order Breakdown */}
      <div className="lg:col-span-5">
        <div className="glass-panel rounded-xl p-8 sticky top-32 flex flex-col gap-stack-md">
          <h2 className="font-title-lg text-title-lg text-secondary-fixed">
            Reservation Summary
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  alt="Julian Vane"
                  className="w-full h-full object-cover"
                  data-alt="A portrait of a highly professional fitness trainer in a sleek, minimalist high-end gym environment. The lighting is dramatic and cinematic, highlighting muscle definition and professional posture. The overall mood is elite and exclusive, using the deep navy and metallic gold palette of LuxeBook. The atmosphere is quiet, focused, and expensive."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnuTMorBEhOzdN1NGL-XOpMdn3ckeLDjYocDYURjJiAr8TdXKopp4jbzylkE7tGYBSpOd2TgPwoQQT_dCPQTafS7akAiGP96KoLgJwMoylAhreV-u-blySAzfn6nlwo0-Y9bVW2D1V4oHDSITaaG48STNURfe9Kdh0KHzN-ObjktVvIA4FeAvXjoV8gj9V6hpbL0U0VCt7hBf-onPBFx3hMB0ZSssKhH8MbODmQChPI1kE2DIEUxRkv5HkEJqKihFfHUtrDBj_gJc"
                />
              </div>
              <div>
                <p className="font-title-lg text-secondary-fixed">
                  Elite Performance
                </p>
                <p className="text-on-surface-variant">with Julian Vane</p>
                <div className="flex items-center gap-2 mt-1 text-secondary/80">
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_today
                  </span>
                  <span className="text-[14px]">Oct 12, 2024 at 11:00 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary/10 pt-stack-sm space-y-3">
            <div className="flex justify-between items-center text-on-surface-variant">
              <span>Base Rate</span>
              <span>$135.00</span>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant">
              <span>Service Excellence Fee</span>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-secondary/10">
              <span className="font-title-lg text-secondary-fixed">
                Total Due
              </span>
              <span className="font-display-sm text-display-sm text-secondary">
                $150.00
              </span>
            </div>
          </div>
          <Link
            to="/confirmation"
            className="w-full bg-secondary text-on-secondary py-5 font-bold font-title-lg gold-heat transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">lock</span>
            Pay &amp; Secure Reservation
          </Link>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-label-caps text-label-caps text-on-surface-variant/60 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                encrypted
              </span>
              Secure 256-bit encrypted checkout
            </p>
            <p className="text-[11px] text-on-surface-variant/40 max-w-[280px]">
              By clicking the button, you authorize LuxeBook to charge your card
              for the total amount shown above.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* SideNavBar (Social Rail) */}
  <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-stack-sm p-2 bg-surface-container/40 backdrop-blur-[40px] border border-secondary/10 rounded-full shadow-2xl shadow-secondary/5">
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
  </aside>
  {/* Footer */}
  <footer className="w-full px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px] mt-stack-lg">
    <div className="font-headline-lg text-headline-lg text-secondary-fixed mb-4 md:mb-0">
      LuxeBook
    </div>
    <div className="flex gap-8 mb-4 md:mb-0">
      <button
        className="text-on-surface/60 hover:text-secondary transition-colors font-label-caps text-label-caps"
        type="button"
      >
        Privacy Policy
      </button>
      <button
        className="text-on-surface/60 hover:text-secondary transition-colors font-label-caps text-label-caps"
        type="button"
      >
        Terms of Service
      </button>
      <button
        className="text-on-surface/60 hover:text-secondary transition-colors font-label-caps text-label-caps"
        type="button"
      >
        Sustainability
      </button>
      <button
        className="text-on-surface/60 hover:text-secondary transition-colors font-label-caps text-label-caps"
        type="button"
      >
        Careers
      </button>
    </div>
    <div className="text-secondary-fixed-dim font-body-md text-body-md">
      © 2024 LuxeBook Fitness. Excellence in Motion.
    </div>
  </footer>
</>

  );
}

export default Payment;

