import { Link } from "react-router-dom";
import transformationAfter from "../assets/transformation_after.png";

function Transformation() {
  return (
    <>
      <div>
        <canvas id="gold-dust" width={1572} height={10374} />
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20 shadow-[0_0_20px_rgba(233,195,73,0.05)]">
          <div className="flex items-center gap-4">
            <img
              alt="LuxeBook Fitness Logo"
              className="h-10 w-10 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATw5luAfh_p1It_j6Dy4BIpPO9xPpM6K2VLxUOW7xA3V6WXJcLLA2cRySYu4hQ-wYvQfi7oc-46VrFahybcWlVZmQiVgLb-xtERpWEs-xLSEHnst3CAQyEuihTB6Yw0tfY7YvxNl6rtPp2XTKZh2aqBd5Fu60OZr4Wy4iuWV6XB6ltGA7yMavLrA5_MCaRmhoeEQXO9icRUXPxnMYCo790EB4dHnUDuR-DGubLa_jEYAnzvtAL3qtaOWw8dzUoKOSq5_tll46dn7c"
            />
            <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-secondary-fixed tracking-tight">
              LuxeBook
            </span>
          </div>
          <nav className="hidden md:flex gap-gutter items-center">
            <Link
              className="font-body-md text-body-md text-secondary-fixed border-b-2 border-secondary-fixed pb-1"
              to="/transformation"
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
          </nav>
          <div className="flex items-center gap-stack-sm">
            <Link
              className="material-symbols-outlined text-secondary-fixed hover:bg-secondary/10 p-2 rounded-full transition-all"
              data-icon="account_circle"
              to="/login"
            >
              account_circle
            </Link>
            <Link 
            to="/booking"
            className="bg-secondary text-on-secondary px-6 py-2 font-label-caps text-label-caps rounded-full hover:shadow-[0_0_15px_rgba(233,195,73,0.5)] transition-all active:scale-95"
            >
              Book Session
            </Link>
          </div>
        </header>
        <aside className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-stack-sm p-2 bg-surface-container/40 backdrop-blur-[40px] border border-secondary/10 rounded-full shadow-2xl shadow-secondary/5 hidden sm:flex">
          <a
            className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="share">
              share
            </span>
          </a>
          <a
            className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="public">
              public
            </span>
          </a>
          <a
            className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
          </a>
          <a
            className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="play_circle">
              play_circle
            </span>
          </a>
        </aside>
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="parallax-wrapper z-0">
            <img
              className="w-full h-full object-cover grayscale-[20%] contrast-125"
              data-alt="A cinematic, wide-angle shot of a high-end luxury gym interior at night."
              id="hero-parallax"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk46jBoeL9Y1pDtUAe3q2_PwTJCBDB9N6f1yrKCHKzLdYYtLUYJlzPCoSczRhk0_V76gK5Mhy22vLC0DfvBczvnxh3HbGz2KbuXrF0KzNfGabK4gsgwVW7W8qXIPcYjsz05GMUoV3JwKk0pgyiK64v39XDO3UWDk5SpqkfxQ-rBZRZqhhdvMWXshuZ1l8n2zc48572rmdbQzhbQAItoJ3dZfyuPtsyMP1RIRLUwiN0SvQCBKtBC5E3QRj6G_yLbC-kVNozSHeOWo8" />
            <div className="absolute inset-0 hero-gradient" />
          </div>
          <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="max-w-3xl mx-auto reveal active">
              <span className="inline-block font-label-caps text-label-caps text-secondary mb-stack-sm tracking-[0.2em] gold-glow">
                ESTABLISHED 2024
              </span>
              <h1 className="font-display-lg text-7xl md:text-display-lg text-on-surface mb-stack-md leading-tight relative inline-block">
                <span className="relative">Transform Your Body.</span> <br />
                <span className="text-secondary-fixed shimmer-text relative">
                  Elevate Your Lifestyle.
                </span>
              </h1>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface/80 mb-stack-lg max-w-xl">
                Experience the pinnacle of performance in a private members' club
                designed for the elite. Bespoke coaching, regenerative therapies, and
                unparalleled exclusivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programs" className="bg-secondary text-on-secondary px-10 py-4 font-label-caps text-label-caps rounded-full hover:shadow-[0_0_25px_rgba(233,195,73,0.6)] transition-all">
                  Begin Journey
                </Link>
                <Link to="/studio" className="border border-secondary/40 text-secondary-fixed px-10 py-4 font-label-caps text-label-caps rounded-full backdrop-blur-md hover:bg-secondary/10 transition-all">
                  Tour Studio
                </Link>
              </div>
            </div>
            <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter reveal active">
              <div className="glass-card p-stack-md rounded-3xl animate-float">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="material-symbols-outlined text-secondary text-4xl"
                    data-icon="star"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                  <h2 className="font-title-lg text-title-lg text-on-surface">
                    Black Label
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface/60">
                  Unlimited access, private locker, and bi-weekly physiotherapy.
                </p>
              </div>
              <div className="glass-card p-stack-md rounded-3xl animate-float-delayed">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="material-symbols-outlined text-secondary text-4xl"
                    data-icon="bolt"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    bolt
                  </span>
                  <h2 className="font-title-lg text-title-lg text-on-surface">
                    Elite Recovery
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface/60">
                  Hyperbaric chambers, cryotherapy, and infrared sauna sessions.
                </p>
              </div>
              <div className="glass-card p-stack-md rounded-3xl animate-float-slow">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="material-symbols-outlined text-secondary text-4xl"
                    data-icon="groups"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    groups
                  </span>
                  <h2 className="font-title-lg text-title-lg text-on-surface">
                    Pro Community
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface/60">
                  Access to global networking events and pro-athlete masterclasses.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background relative overflow-hidden py-stack-md">
          <div className="absolute inset-0 bg-secondary/5 blur-[120px] rounded-full animate-pulse-gold w-1/2 h-1/2 left-1/4 top-1/4 -z-10" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-stack-lg reveal active">
              <h2 className="font-display-sm text-3xl md:text-display-sm mb-4 shimmer-text inline-block">
                Premium <span className="text-secondary-fixed">Services</span>
              </h2>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface/60 max-w-2xl mx-auto">
                Mastery in every movement. Our programs are curated by world-class
                athletes to deliver peak human performance.
              </p>
              <div className="flex justify-center md:justify-end mt-4 md:-mt-12">
                <a
                  href="#"
                  className="font-label-caps text-label-caps text-secondary-fixed flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  Explore All{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-gutter gap-y-gutter items-start justify-center">
              {/* Personal Training */}
              <div className="px-gutter w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 reveal mt-0 active">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-secondary/10 glass-card">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="Portrait of a professional athletic trainer."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQNADo0NmdJCFd-clpcHjTDn2cYcPQepthSgHiDL5fLAxR1ci45rSOtpPgeHx5nX4vqBVlQ32F960Q0d9_tAPotPkTqoC-9EHUUVcIDo_wB-XWqhMFnkG81CaM98E4dArrdqmwsbuRBsCFl7vZzwqj1NV1Ou4m5mUyETTxmuhmMzFXGwSbtcgSYbPGyyosHWzmRkUlkmHhJRuMsL078g8O3aDJTcGhSrgaj6fVbAIuZEHFiZNdlHJrB8M3Iu2du-xv8p2a2q4em9g"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-stack-md">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                      1-on-1 Mastery
                    </span>
                    <h4 className="font-title-lg text-on-surface mb-2">
                      Personal Training
                    </h4>
                    <p className="font-body-md text-xs text-on-surface/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Custom biometrics-based protocols.
                    </p>
                  </div>
                </div>
              </div>
              {/* HIIT (Staggered Down) */}
              <div className="px-gutter w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 reveal mt-stack-md active">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-secondary/10 glass-card">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="Action shot of an athlete in a HIIT session."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASB8XNrpcudbVa6KVRCAhZat9DkFONdjO9h0YeDfLBwfJtWnYgehqiVJ4jsdyDs6l7RoqHyLDu9NQGNoBvTISisa0Apl1HrA374-6RhP9mDxxBmfPBbRACB6KIYRx3t8xhSEiET2GXB_e5wo3zQD0DfEtFbPecEv473vn5mNSra6-ZMnqXIY40Bk0AggPekEyDJDmMNsMN-68CcI1dd972GJFwbVyou2G6xkYeRcuV-RjHZZ2IJhcMBqiDQK3aQsx0-GyDYG7i0RM"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-stack-md">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                      High Intensity
                    </span>
                    <h4 className="font-title-lg text-on-surface mb-2">Elite HIIT</h4>
                    <p className="font-body-md text-xs text-on-surface/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Push the limits of human endurance.
                    </p>
                  </div>
                </div>
              </div>
              {/* Yoga */}
              <div className="px-gutter w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 reveal mt-0 active">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-secondary/10 glass-card">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="Serene yoga studio."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBIHflYZzD6ZpGkhJcKaMFkJhd0wMDn8XkJNX1nZR9PUkMccrkRh8nYIzrHpps0LfCQfkPKz-UkH9iPTIhuF14kyNJlJuG7DSyOC40Es5Tp8GN8yglTPxnJcwEJKeOUSyp1tTnDwcchQZ8WZyvewggXgqmUPrtuKAgh0wIXOzodE_4Xc9GThg8qso7fDPg_11oPZLFXa3FYHecBDhAi4dLAkXoF0oYZ5z3zdJFdIBoRTIxI7snaDfi5pGKSgiQV1jN0PXEPRCwtgM"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-stack-md">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                      Mind &amp; Flow
                    </span>
                    <h4 className="font-title-lg text-on-surface mb-2">Zen Yoga</h4>
                    <p className="font-body-md text-xs text-on-surface/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Restorative flows in a private sanctuary.
                    </p>
                  </div>
                </div>
              </div>
              {/* Reformer (Staggered Down) */}
              <div className="px-gutter w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 reveal mt-stack-md active">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-secondary/10 glass-card">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="Premium Pilates reformer machines."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNvpDBf85VFEwpdmDVdY3gPd_Pz5_RVFg9QjR6kCzwC44IaX-4GRcoaStAYFgzgFHreyWkST1f6Fx51BUnMgyJOvqRIdX3-cs_ZZbXA2hzdZiTIReW3w7OYG7v-7d4Ub7AKIU4-y1dNiyiJGDeO7MjKOSNryHtaJBmz0PLyXIDf3V_CicTd8Rjz7bsUIrHaYe3JgwZtO1jMw0zgbuCI8Fdnh0tioFu0hSE43_zHRtfdy_YmKweb10fLKC8XQQ8bcjBg3YRHk4JRAs"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-stack-md">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                      Core Precision
                    </span>
                    <h4 className="font-title-lg text-on-surface mb-2">Reformer</h4>
                    <p className="font-body-md text-xs text-on-surface/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Precision training on elite apparatus.
                    </p>
                  </div>
                </div>
              </div>
              {/* Nutrition */}
              <div className="px-gutter w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 reveal mt-0 active">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-secondary/10 glass-card">
                  <img
                    alt="Gourmet healthy nutrition preparation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlnKYJvjZMERWFyG8gRecQpi_R84b9hijo0rs0dQU6cQFu_czIS3HvXoFeT2WgVxXXtzUekgpfmujDxk3HepYsTTxyJc0iX2VFQ3TipGFML8--lRL86YVlYmIN55Q3go_k2ergw9_dsMJL1IdAQyAyymKBGiuiHHw1ph2_ekQuEtLLp6mimVqEXXqXHthSDR2JYhHuhWimZhwsoHS-Azg1sUhM8nbL8Qaak2ISTImWRGU_ndVz-yCesZaH3o1C76lMc59s3qMEJ0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-stack-md">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                      Performance Fuel
                    </span>
                    <h4 className="font-title-lg text-on-surface mb-2">Nutrition</h4>
                    <p className="font-body-md text-xs text-on-surface/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Bespoke meal planning &amp; supplements.
                    </p>
                  </div>
                </div>
              </div>
              {/* Wellness (Staggered Down) */}
              <div className="px-gutter w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 reveal mt-stack-md active">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-secondary/10 glass-card">
                  <img
                    alt="Luxury spa and wellness therapy environment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsjj5MdNwRT42ocfy_C4IAoHS6HN2nyMJpaRUHbE_fWTTHKfm7ZQgh81FZVq2JxkNcjlrtImlqJ27l0NmpskVkdcZk6y008lpLXkRzlbPnkhP01ttD1sb8DvMNiAH-o8lLCvooKGn3IzuD6bVDFxm_-N3ISRkoPaECvGvBydO8uCSHWIsdxMLDf0BDI7kIejELTKr50RQ9_KxTJcjhGitGVUpnPBcOAodwj-uveWA3LCbFp31c35Q9KZVG1Fh87OR_8NLUP9CUFa8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-stack-md">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-2 block">
                      Holistic Healing
                    </span>
                    <h4 className="font-title-lg text-on-surface mb-2">Wellness</h4>
                    <p className="font-body-md text-xs text-on-surface/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Regenerative IV &amp; massage therapy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-lowest relative overflow-hidden py-stack-md">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-stack-lg reveal active">
              <h2 className="font-display-sm text-3xl md:text-display-sm mb-4">
                The{" "}
                <span className="text-secondary-fixed shimmer-text">Architects</span>{" "}
                of Performance
              </h2>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface/60 max-w-2xl mx-auto">
                Learn from the best. Our trainers are world-renowned specialists with
                decades of combined elite-level experience.
              </p>
            </div>
            <div className="space-y-stack-lg">
              {/* Julian Vane */}
              <div className="flex flex-col lg:flex-row items-center gap-stack-lg reveal active">
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-secondary/10 shadow-2xl">
                    <img
                      alt="Julian Vane"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlQEi6Sr1MBuyCnl7rjmd2466DiLjpt4dM3m4frs3JCWFsSC6ULboeAMjnvUIymSpCuhTNSF1q4T1GcPF_csDViVfAy6Z8iHFnlugHCx5TLD_kzUGWNGeI2V7cGCETLW_HsBdFcN8TPRNxtZyiTCwzBlMsW7fhwF8G0srPeSZd6uLAWONFXLk4hcGUsrQp__XjlMvjqWXVvovic5Vmr4H_jjaMPnSWwHHvBdePP_9Ix9zQ5TeTk4dZVtxDehJUJO-bENoNGN4BvPk"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-2/3 p-stack-md glass-card rounded-3xl border-l-4 border-l-secondary hidden lg:block">
                    <p className="font-body-md text-on-surface/80 italic mb-4">
                      "Precision is the only path to perfection. We train with data,
                      lead with heart."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-8 bg-secondary" />
                      <span className="font-label-caps text-[10px] text-secondary uppercase">
                        Mission Statement
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-stack-lg flex flex-col justify-center">
                  <span className="font-label-caps text-secondary mb-2 tracking-[0.2em]">
                    OLYMPIC CONDITIONING
                  </span>
                  <h3 className="font-headline-lg text-4xl md:text-5xl text-on-surface mb-stack-sm">
                    Julian Vane
                  </h3>
                  <div className="h-1 w-20 bg-secondary mb-stack-md" />
                  <p className="font-body-lg text-on-surface/70 mb-stack-md">
                    Julian specializes in high-performance conditioning for
                    professional athletes, integrating biometric feedback into every
                    set.
                  </p>
                  <ul className="space-y-4 mb-stack-lg">
                    <li className="flex items-center gap-4 text-on-surface/80">
                      <span
                        className="material-symbols-outlined text-secondary"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      <span className="font-body-md">
                        15+ Years Pro Athlete Coaching
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-on-surface/80">
                      <span
                        className="material-symbols-outlined text-secondary"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      <span className="font-body-md">PhD in Exercise Physiology</span>
                    </li>
                  </ul>
                  <button className="w-fit px-8 py-3 bg-secondary text-on-secondary rounded-full font-label-caps text-label-caps hover:shadow-[0_0_20px_rgba(233,195,73,0.4)] transition-all">
                    Book Private Session
                  </button>
                </div>
              </div>
              {/* Elena Rossi (Reversed Layout) */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-stack-lg reveal active">
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-secondary/10 shadow-2xl">
                    <img
                      alt="Elena Rossi"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkCikSUkxeedlhPRrxsow4RT6cUQZ_tes2FS8bA-kiOXem2QVV8il7e-f5FnC8kWxvjxCd0FeQX8lz8_5kKQgzCPWAbXPM6UKifF8XYrIN8gVmqU6Gu8YV5WXCGUijrLdtaClSPM5owECkFZurM4Hu0HRrzyEezYMMTtH6d56I3NeGwW1VbYT3e0VURhKHVGVGH0F9Kniyc2yr0fZdMXvRx83YEGco5g2mi8FaVvRVAS3xG9FtV1inNx0_XSM1fcBbSwnz6LjLilY"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-2/3 p-stack-md glass-card rounded-3xl border-r-4 border-r-secondary hidden lg:block text-right">
                    <p className="font-body-md text-on-surface/80 italic mb-4">
                      "True strength is found in fluidity. A resilient body is a body
                      that never breaks."
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <span className="font-label-caps text-[10px] text-secondary uppercase">
                        Philosophy
                      </span>
                      <div className="h-[1px] w-8 bg-secondary" />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pr-stack-lg flex flex-col justify-center">
                  <span className="font-label-caps text-secondary mb-2 tracking-[0.2em]">
                    MOBILITY &amp; RECOVERY
                  </span>
                  <h3 className="font-headline-lg text-4xl md:text-5xl text-on-surface mb-stack-sm">
                    Elena Rossi
                  </h3>
                  <div className="h-1 w-20 bg-secondary mb-stack-md" />
                  <p className="font-body-lg text-on-surface/70 mb-stack-md">
                    Elena blends classical physical therapy with advanced
                    neuromuscular training to unlock range of motion and prevent
                    injury.
                  </p>
                  <ul className="space-y-4 mb-stack-lg">
                    <li className="flex items-center gap-4 text-on-surface/80">
                      <span
                        className="material-symbols-outlined text-secondary"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      <span className="font-body-md">
                        Masters in Physical Therapy
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-on-surface/80">
                      <span
                        className="material-symbols-outlined text-secondary"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      <span className="font-body-md">Former Ballet Principal</span>
                    </li>
                  </ul>
                  <button className="w-fit px-8 py-3 bg-secondary text-on-secondary rounded-full font-label-caps text-label-caps hover:shadow-[0_0_20px_rgba(233,195,73,0.4)] transition-all">
                    Book Private Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background relative overflow-hidden py-stack-md">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-stack-lg reveal active">
              <h2 className="font-display-sm text-3xl md:text-display-sm mb-4">
                Elite{" "}
                <span className="text-secondary-fixed shimmer-text">
                  Transformations
                </span>
              </h2>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface/60 max-w-2xl mx-auto">
                Witness the evolution of our members. Real results achieved through
                rigorous science and unwavering commitment.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
              <div className="reveal relative group active">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                    <img
                      alt="Client before transformation"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWsI1SYt9Rfbh86awcnrra0Ct1V2x5phuGDd4DXwuIpwHm48j6mYjRZWr7Zpl58JIf7200aWzhiEr4LfZoVhOXnD3COG9YrFs62TmoShGzIIzkRh1rqXibqlm75-2RWi1tmhY4_ePM0Dp_cjkCU6QZYbmi3cxF1eusLp_mrqyprTNFGym9IGnQQSeKwhCVzto9bddkGjg3hLMrFMH6lWJ8NWALShjZoguyP_04y_siZ6MlkVUlUD2ogYXnAYKeNXoG58Nr8a_cMNE"
                    />
                    <div className="absolute top-4 left-4 comparison-label">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl aspect-[3/4] border-2 border-secondary/20 shadow-[0_0_30px_rgba(233,195,73,0.1)]">
                    <img
                      alt="Client after transformation"
                      className="w-full h-full object-cover"
                      src={transformationAfter}
                    />
                    <div className="absolute top-4 left-4 comparison-label !text-background !bg-secondary">
                      After
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" data-icon="bolt">
                        bolt
                      </span>
                    </div>
                    <div>
                      <p className="font-label-caps text-secondary text-[10px]">
                        TOTAL PROGRESS
                      </p>
                      <p className="font-headline-lg text-xl">
                        -14kg Body Fat / +6kg Muscle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-stack-md reveal active">
                <div className="glass-card p-8 rounded-2xl relative">
                  <span
                    className="material-symbols-outlined text-secondary/40 text-6xl absolute top-4 right-8 select-none"
                    data-icon="format_quote"
                  >
                    format_quote
                  </span>
                  <div className="flex gap-1 mb-4 text-secondary">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  </div>
                  <p className="font-body-lg text-body-md text-on-surface/80 leading-relaxed mb-6">
                    "LuxeBook didn't just change my physique; it completely overhauled
                    my mental clarity and professional stamina. The bespoke recovery
                    protocols are unlike anything I've experienced at other elite
                    clubs."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                      <img
                        alt="Alexander Chen, Tech CEO"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxlPzPvm8nPCwajXBH2jX7iTTh3fyztdhi46rmDBm52m4aLxmBXNgFpaDqfyajiyjPFwPV9-N-bBMSetwvXH6LAvbjrad8cf67c9vqd85BJunLnf5rhZl0vth85C5irp58GWhR-b2EydCIzI4B3h1lWXXM5kwmwBOydZ4LXKfjLddJf_xjgqJW66qU9Htg_ZameRoaINZFAnNfABEhG2MTela_pzAiqO6xjzgScTCxzTSwGa1DiyBu7GH9pTPBLvImWTiC4Wuk87c"
                      />
                    </div>
                    <div>
                      <h5 className="font-title-lg text-sm text-on-surface">
                        Alexander Chen
                      </h5>
                      <p className="font-label-caps text-[10px] text-on-surface/50">
                        Tech CEO &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Replacement: Global Sanctuaries Section */}
        <section className="bg-surface-container-lowest relative overflow-hidden border-t border-secondary/10 py-stack-md">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col lg:flex-row items-center gap-stack-lg">
              <div className="w-full lg:w-2/5 reveal active">
                <span className="font-label-caps text-secondary mb-4 tracking-[0.2em] block">
                  EXCLUSIVE DESTINATIONS
                </span>
                <h2 className="font-display-sm text-3xl md:text-5xl mb-stack-md leading-tight">
                  Our Global <br />
                  <span className="text-secondary-fixed shimmer-text">
                    Sanctuaries
                  </span>
                </h2>
                <p className="font-body-lg text-on-surface/60 mb-stack-lg max-w-md">
                  Access elite performance centers in the world's most exclusive
                  destinations. A unified membership for the global nomad.
                </p>
                <div className="grid grid-cols-2 gap-gutter mb-stack-lg">
                  <div className="border-l border-secondary/30 pl-4">
                    <p className="font-title-lg text-on-surface text-sm mb-1">
                      London
                    </p>
                    <p className="font-label-caps text-[10px] text-on-surface/40 uppercase">
                      Mayfair
                    </p>
                  </div>
                  <div className="border-l border-secondary/30 pl-4">
                    <p className="font-title-lg text-on-surface text-sm mb-1">
                      New York
                    </p>
                    <p className="font-label-caps text-[10px] text-on-surface/40 uppercase">
                      Tribeca
                    </p>
                  </div>
                  <div className="border-l border-secondary/30 pl-4">
                    <p className="font-title-lg text-on-surface text-sm mb-1">
                      Dubai
                    </p>
                    <p className="font-label-caps text-[10px] text-on-surface/40 uppercase">
                      DIFC
                    </p>
                  </div>
                  <div className="border-l border-secondary/30 pl-4">
                    <p className="font-title-lg text-on-surface text-sm mb-1">
                      Zurich
                    </p>
                    <p className="font-label-caps text-[10px] text-on-surface/40 uppercase">
                      Enge
                    </p>
                  </div>
                </div>
                <button className="bg-secondary text-on-secondary px-8 py-4 font-label-caps text-label-caps rounded-full hover:shadow-[0_0_20px_rgba(233,195,73,0.4)] transition-all">
                  Request Global Access
                </button>
              </div>
              <div className="w-full lg:w-3/5 reveal relative min-h-[400px] flex items-center justify-center active">
                <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl" />
                {/* Interactive Map Visual Representation */}
                <div className="relative w-full aspect-[16/9] glass-card rounded-3xl overflow-hidden border border-secondary/20 shadow-2xl">
                  <div className="absolute inset-0 bg-[#081425] opacity-80" />
                  {/* Mock Map Grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #e9c349 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  {/* Pulse Points */}
                  <div className="absolute top-[35%] left-[45%] group cursor-pointer">
                    <div className="w-3 h-3 bg-secondary rounded-full relative z-10" />
                    <div className="absolute -inset-2 bg-secondary/50 rounded-full map-point-pulse" />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 font-label-caps text-[8px] text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 px-2 py-1 rounded">
                      LONDON
                    </span>
                  </div>
                  <div className="absolute top-[40%] left-[25%] group cursor-pointer">
                    <div className="w-3 h-3 bg-secondary rounded-full relative z-10" />
                    <div className="absolute -inset-2 bg-secondary/50 rounded-full map-point-pulse" />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 font-label-caps text-[8px] text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 px-2 py-1 rounded">
                      NEW YORK
                    </span>
                  </div>
                  <div className="absolute top-[55%] left-[65%] group cursor-pointer">
                    <div className="w-3 h-3 bg-secondary rounded-full relative z-10" />
                    <div className="absolute -inset-2 bg-secondary/50 rounded-full map-point-pulse" />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 font-label-caps text-[8px] text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 px-2 py-1 rounded">
                      DUBAI
                    </span>
                  </div>
                  <div className="absolute top-[30%] left-[50%] group cursor-pointer">
                    <div className="w-3 h-3 bg-secondary rounded-full relative z-10" />
                    <div className="absolute -inset-2 bg-secondary/50 rounded-full map-point-pulse" />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 font-label-caps text-[8px] text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 px-2 py-1 rounded">
                      ZURICH
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 p-4 glass-card rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="font-label-caps text-[10px] text-on-surface/70">
                        LIVE AVAILABILITY: GLOBAL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px] relative z-10">
          <div className="w-full px-margin-mobile md:px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center gap-gutter text-center md:text-left">
            <div className="flex items-center gap-4">
              <img
                alt="LuxeBook Fitness Logo"
                className="h-8 w-8 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATw5luAfh_p1It_j6Dy4BIpPO9xPpM6K2VLxUOW7xA3V6WXJcLLA2cRySYu4hQ-wYvQfi7oc-46VrFahybcWlVZmQiVgLb-xtERpWEs-xLSEHnst3CAQyEuihTB6Yw0tfY7YvxNl6rtPp2XTKZh2aqBd5Fu60OZr4Wy4iuWV6XB6ltGA7yMavLrA5_MCaRmhoeEQXO9icRUXPxnMYCo790EB4dHnUDuR-DGubLa_jEYAnzvtAL3qtaOWw8dzUoKOSq5_tll46dn7c"
              />
              <span className="font-headline-lg text-headline-lg text-secondary-fixed">
                LuxeBook
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-stack-md my-8 md:my-0">
              <a
                className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
                href="#"
              >
                Sustainability
              </a>
              <a
                className="font-label-caps text-label-caps text-on-surface/60 hover:text-secondary transition-colors"
                href="#"
              >
                Careers
              </a>
            </div>
            <p className="font-body-md text-body-md text-secondary-fixed-dim">
              © 2024 LuxeBook Fitness. Excellence in Motion.
            </p>
          </div>
        </footer>
      </div>;

    </>
  );
}

export default Transformation;

