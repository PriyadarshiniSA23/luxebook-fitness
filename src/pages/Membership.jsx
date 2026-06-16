import { Link } from "react-router-dom";

function Membership() {
  return (
    <>
      {/* TopNavBar */}
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20">
    <div className="flex items-center gap-2">
      <img
        alt="LuxeBook Logo"
        className="w-8 h-8 object-contain"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuATw5luAfh_p1It_j6Dy4BIpPO9xPpM6K2VLxUOW7xA3V6WXJcLLA2cRySYu4hQ-wYvQfi7oc-46VrFahybcWlVZmQiVgLb-xtERpWEs-xLSEHnst3CAQyEuihTB6Yw0tfY7YvxNl6rtPp2XTKZh2aqBd5Fu60OZr4Wy4iuWV6XB6ltGA7yMavLrA5_MCaRmhoeEQXO9icRUXPxnMYCo790EB4dHnUDuR-DGubLa_jEYAnzvtAL3qtaOWw8dzUoKOSq5_tll46dn7c"
      />
      <span className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
        LuxeBook
      </span>
    </div>
    <div className="hidden md:flex items-center gap-stack-md">
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
        className="text-secondary-fixed border-b-2 border-secondary-fixed pb-1 font-body-md text-body-md"
        to="/membership"
      >
        Membership
      </Link>
    </div>
    <div className="flex items-center gap-4">
      <Link
        to="/booking"
        className="bg-secondary text-on-primary px-6 py-2 font-label-caps text-label-caps hover:shadow-[0_0_15px_rgba(233,193,73,0.5)] transition-all active:scale-95"
      >
        Book Session
      </Link>
      <span className="material-symbols-outlined text-secondary-fixed cursor-pointer">
        account_circle
      </span>
    </div>
  </nav>
  {/* SideNavBar (Social Rail) */}
  <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-stack-sm p-2 bg-surface-container/40 backdrop-blur-[40px] rounded-full border border-secondary/10 shadow-2xl hidden md:flex">
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
  <main className="pt-32 pb-20 px-4 md:px-margin-desktop max-w-container-max mx-auto">
    {/* Hero Section */}
    <section className="mb-stack-lg text-center reveal">
      <h1 className="font-display-lg text-display-lg text-secondary-fixed mb-stack-sm">
        The Pinnacle of Performance
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface/70 max-w-2xl mx-auto">
        Discover an ecosystem designed for elite transformation. Exceptional
        spaces, unparalleled expertise, and a community of high achievers.
      </p>
    </section>
    {/* Membership Plans */}
    <section className="mb-stack-lg reveal">
      <div className="flex flex-col items-center mb-stack-md">
        <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-2 uppercase">
          Privileged Access
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Membership Tiers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter items-stretch">
        {/* Silver */}
        <div className="glass-card p-stack-md rounded-xl flex flex-col items-center text-center gold-glow transition-all duration-500">
          <span className="font-label-caps text-label-caps text-on-surface/50 mb-4">
            SILVER
          </span>
          <div className="font-display-sm text-display-sm text-secondary-fixed mb-4">
            $250<span className="text-title-lg">/mo</span>
          </div>
          <ul className="font-body-md text-body-md text-on-surface/70 space-y-3 mb-stack-md flex-grow">
            <li>Access to One Studio</li>
            <li>Standard Group Classes</li>
            <li>Digital Wellness Tools</li>
            <li>1 Personal Assessment</li>
          </ul>
          <Link
            to="/booking"
            className="w-full py-3 border border-secondary/40 text-secondary-fixed font-label-caps text-label-caps hover:bg-secondary/10 transition-colors flex items-center justify-center"
          >
            Select Plan
          </Link>
        </div>
        {/* Gold */}
        <div className="glass-card p-stack-md rounded-xl flex flex-col items-center text-center gold-glow transition-all duration-500">
          <span className="font-label-caps text-label-caps text-secondary mb-4">
            GOLD
          </span>
          <div className="font-display-sm text-display-sm text-secondary-fixed mb-4">
            $450<span className="text-title-lg">/mo</span>
          </div>
          <ul className="font-body-md text-body-md text-on-surface/70 space-y-3 mb-stack-md flex-grow">
            <li>Access to All Regional Studios</li>
            <li>Unlimited HIIT &amp; Yoga</li>
            <li>Guest Passes (2 Monthly)</li>
            <li>Priority Class Booking</li>
          </ul>
          <Link
            to="/booking"
            className="w-full py-3 border border-secondary/40 text-secondary-fixed font-label-caps text-label-caps hover:bg-secondary/10 transition-colors flex items-center justify-center"
          >
            Select Plan
          </Link>
        </div>
        {/* Platinum */}
        <div className="glass-card p-stack-md rounded-xl flex flex-col items-center text-center gold-glow transition-all duration-500 relative">
          <div className="absolute top-0 right-0 bg-secondary text-on-primary font-label-caps text-[10px] px-3 py-1 rotate-45 translate-x-4 translate-y-2 z-10">
            MOST POPULAR
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-4">
            PLATINUM
          </span>
          <div className="font-display-sm text-display-sm text-secondary-fixed mb-4">
            $800<span className="text-title-lg">/mo</span>
          </div>
          <ul className="font-body-md text-body-md text-on-surface/70 space-y-3 mb-stack-md flex-grow">
            <li>Global Studio Access</li>
            <li>Semi-Private Sessions (4)</li>
            <li>LuxeBook Concierge</li>
            <li>Spa &amp; Recovery Lounge</li>
          </ul>
          <Link
            to="/booking"
            className="w-full py-3 bg-secondary/80 text-on-primary font-label-caps text-label-caps hover:bg-secondary transition-all flex items-center justify-center"
          >
            Select Plan
          </Link>
        </div>
        {/* Elite VIP */}
        <div className="vip-shimmer rounded-xl transition-all duration-700 scale-105 shadow-[0_0_60px_rgba(233,195,73,0.15)]">
          <div className="vip-content p-stack-md h-full flex flex-col items-center text-center rounded-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-on-primary font-label-caps text-[10px] px-4 py-1.5 whitespace-nowrap tracking-widest rounded-full shadow-lg">
              MOST EXCLUSIVE
            </div>
            <span className="font-label-caps text-label-caps text-secondary-fixed mt-2 mb-4">
              ELITE VIP
            </span>
            <div className="font-display-sm text-display-sm text-secondary-fixed mb-4">
              $1,500<span className="text-title-lg">/mo</span>
            </div>
            <ul className="font-body-md text-body-md text-on-surface/70 space-y-3 mb-stack-md flex-grow">
              <li>Unlimited 1-on-1 Training</li>
              <li>Private Studio Suites</li>
              <li>Nutrition &amp; Bio-tracking</li>
              <li>Chauffeur Service</li>
              <li>24/7 Concierge Support</li>
            </ul>
            <Link
              to="/booking"
              className="w-full py-3 bg-secondary text-on-primary font-label-caps text-label-caps shadow-[0_0_20px_rgba(233,195,73,0.3)] hover:scale-105 transition-transform flex items-center justify-center"
            >
              Request Invite
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* Comparison Table */}
    <section className="mb-stack-lg reveal">
      <div className="flex flex-col items-center mb-stack-md">
        <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-2 uppercase">
          Deep Dive
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Benefit Comparison
        </h2>
      </div>
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-md">
            <thead>
              <tr className="border-b border-secondary/10">
                <th className="p-6 font-label-caps text-on-surface/40">
                  Feature
                </th>
                <th className="p-6 font-label-caps text-on-surface/40">
                  Silver
                </th>
                <th className="p-6 font-label-caps text-on-surface/40">Gold</th>
                <th className="p-6 font-label-caps text-on-surface/40">
                  Platinum
                </th>
                <th className="p-6 font-label-caps text-secondary">
                  Elite VIP
                </th>
              </tr>
            </thead>
            <tbody className="text-on-surface/80">
              <tr className="border-b border-secondary/5 hover:bg-surface-container/20 transition-colors">
                <td className="p-6">Multi-Studio Access</td>
                <td className="p-6">—</td>
                <td className="p-6">Regional</td>
                <td className="p-6">Global</td>
                <td className="p-6">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                </td>
              </tr>
              <tr className="border-b border-secondary/5 hover:bg-surface-container/20 transition-colors">
                <td className="p-6">Private Training sessions</td>
                <td className="p-6">—</td>
                <td className="p-6">—</td>
                <td className="p-6">4 / Month</td>
                <td className="p-6">Unlimited</td>
              </tr>
              <tr className="border-b border-secondary/5 hover:bg-surface-container/20 transition-colors">
                <td className="p-6">Spa &amp; Recovery Access</td>
                <td className="p-6">—</td>
                <td className="p-6">Standard</td>
                <td className="p-6">Premium</td>
                <td className="p-6">Ultra-Private</td>
              </tr>
              <tr className="border-b border-secondary/5 hover:bg-surface-container/20 transition-colors">
                <td className="p-6">Personal Concierge</td>
                <td className="p-6">—</td>
                <td className="p-6">—</td>
                <td className="p-6">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                </td>
                <td className="p-6">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                </td>
              </tr>
              <tr className="border-b border-secondary/5 hover:bg-surface-container/20 transition-colors">
                <td className="p-6">Nutrition &amp; Bio-tracking</td>
                <td className="p-6">—</td>
                <td className="p-6">—</td>
                <td className="p-6">—</td>
                <td className="p-6">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-surface-container/20 transition-colors">
                <td className="p-6">Chauffeur Service</td>
                <td className="p-6">—</td>
                <td className="p-6">—</td>
                <td className="p-6">—</td>
                <td className="p-6">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    {/* Exclusive Benefits Section */}
    <section className="mb-stack-lg reveal">
      <div className="flex flex-col items-center mb-stack-md">
        <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-2 uppercase">
          Unparalleled Standards
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          The Signature Experience
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="group relative h-[450px] overflow-hidden rounded-2xl">
          <img
            alt="Private Concierge"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8iB17hPpJaWWQQpM4E9QRVzrsFuR2u55bXJyuS4XBjpj93um29XjEaJQtQOajfGqRBaJIXF8jFMUfjTxit_GIaUJ0Eayg6lKCNRwW3rG1X1YB7KopAO46m-wvwoG6gg49wAup9oUvhvA8YLM_ODliypNAvMXuSfaZZY25vsgBKnxYf-QuHOnmbKxOgCE8ymTKaFxsfGisyJr2_NhkxXUxBtwttdKgtKQ-iEvDQBrZl7lMcpRI9DHvUqj3CGrRqJ7qO_eZ5t7Q_Js"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-stack-md flex flex-col justify-end">
            <h3 className="font-headline-lg text-secondary-fixed mb-2">
              Private Concierge
            </h3>
            <p className="font-body-md text-on-surface/80">
              Every detail of your wellness journey curated by a dedicated
              professional.
            </p>
          </div>
        </div>
        <div className="group relative h-[450px] overflow-hidden rounded-2xl">
          <img
            alt="Regenerative Suite"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABp9-Snhh4W7qXqyv1LfavLNcLDaR0JpURyaWnzWNFdyFjfV1Te9RWx3wTrhb6ALNqRcq303g_sUePJRI2-wTzb0ALfD02l3A05lwYsOqYxGh92EOgxi8GTyu-k5l8315k6GqJzq0WUlS7CapdIrxHCOsKG5ny2vrtqb62NU1RIXB-9-PPTxpL9GpgqSfteK3NAJGCGWqHKKmQMRBI9MEOznv18gcvSN6L3O5eSJyW_6sefYd1d6670enO9I2ZNTSLvslZz9Z57U8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-stack-md flex flex-col justify-end">
            <h3 className="font-headline-lg text-secondary-fixed mb-2">
              Regenerative Suites
            </h3>
            <p className="font-body-md text-on-surface/80">
              Advanced cryotherapy and infrared recovery systems for peak
              biological efficiency.
            </p>
          </div>
        </div>
        <div className="group relative h-[450px] overflow-hidden rounded-2xl">
          <img
            alt="Global Studio Passport"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByj5Q5MGXV54mB-D3_HspfR-33H4UBUm8f1eELL-XYMZs0KHrvQOeHSONpFs46zBAotXZdcQm9OxpnupbGA8hjKWrLErDxeHxioBwmyP1DGaRHr3zoLnhJnYVhg2N-mkz_lUdnxlHl5H9sLURfjywh629r2Is3cYK5wCnPBaw3ZNb_zsmhs3l3oJGyRN8w--UIw5GHbap2sGRmE9vwyYZwxFXSk44Y7E44GiJEHTUk9_JpE42J83bUXoZW5qkvi5o4BLBa3akGHNc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-stack-md flex flex-col justify-end">
            <h3 className="font-headline-lg text-secondary-fixed mb-2">
              Global Passport
            </h3>
            <p className="font-body-md text-on-surface/80">
              Consistency in performance wherever you travel, from London to
              Dubai.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Studio Experience Gallery */}
    <section className="mb-stack-lg reveal">
      <div className="flex flex-col mb-stack-md">
        <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-2 uppercase">
          Architectural Excellence
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          The Studio Experience
        </h2>
      </div>
      <div className="masonry-grid gap-6">
        <div className="mb-6 break-inside-avoid studio-card group relative rounded-xl overflow-hidden cursor-pointer">
          <img
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTE34mWK8CRlSfihar0JeBmvmnoUgDGI2Q2p14wu-F4y7ZhCw4qL-5SIwFpkXfuAKdjEU8sQ6e4OSkSgV_sJxzTkytxzt-Tm_9LZiMRITEJACx2YcypWjxXEDOFYBWJWKEXF8zUJBThIFZT-dBAFMn_Q5fELcpsKu-f5LVmFHAaRFc3wGIjpn1ZIIfFMxwb3gQKKl4k-6tRAgohdQ0I-5c8Izx6R-Xi4rxkhNEWqw_iV51QwTuap95nmB9ZjE0UKbeOGa1pUkd1_w"
          />
          <div className="absolute inset-0 studio-reveal-overlay flex items-end p-6">
            <h4 className="font-title-lg text-secondary-fixed">
              Metropolitan Peak Studio
            </h4>
          </div>
        </div>
        <div className="mb-6 break-inside-avoid studio-card group relative rounded-xl overflow-hidden cursor-pointer">
          <img
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8Fd2I4a6zMIZZOonTdDN77N-2g22JzUopGAl_cDNDB8oNMrBwRhevdapx8rXxAjkHIcx2FsiaPGtKPSPu9px1qjZ-Pd4LoiEeYDLGe_PXihkI6yoBuFATqpInPen1c6PRUFSsCHqc9wkMpLNoCAqYq7wpMnRyAehile0FtUouIVSiFOFFqOrJj5PJIng5pcfQ6V4pyhgEitV9BbTjJUICQXNi_0h_0W4U-YPtC9UIncKp2qaGmWGUA1moBsAPQ258QmBw0iqyCE"
          />
          <div className="absolute inset-0 studio-reveal-overlay flex items-end p-6">
            <h4 className="font-title-lg text-secondary-fixed">
              Zenith Yoga Pavilion
            </h4>
          </div>
        </div>
        <div className="mb-6 break-inside-avoid studio-card group relative rounded-xl overflow-hidden cursor-pointer">
          <img
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8iB17hPpJaWWQQpM4E9QRVzrsFuR2u55bXJyuS4XBjpj93um29XjEaJQtQOajfGqRBaJIXF8jFMUfjTxit_GIaUJ0Eayg6lKCNRwW3rG1X1YB7KopAO46m-wvwoG6gg49wAup9oUvhvA8YLM_ODliypNAvMXuSfaZZY25vsgBKnxYf-QuHOnmbKxOgCE8ymTKaFxsfGisyJr2_NhkxXUxBtwttdKgtKQ-iEvDQBrZl7lMcpRI9DHvUqj3CGrRqJ7qO_eZ5t7Q_Js"
          />
          <div className="absolute inset-0 studio-reveal-overlay flex items-end p-6">
            <h4 className="font-title-lg text-secondary-fixed">
              The Chrysalis Recovery Hub
            </h4>
          </div>
        </div>
        <div className="mb-6 break-inside-avoid studio-card group relative rounded-xl overflow-hidden cursor-pointer">
          <img
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx0VH6zPG3v_koWRqxkLDED5qiWOklAf_IAEENYsBhiXETql_NrFfhj5f0XHDPaESpXcU5LaSgjEKTxQiXJjYjw7-mSQrO5UrxXFverYNEDoWY2zL86LfEKy9brlfKF8QZ6kGB_mazJp78I4NHGMUmOYauogh_oijgp-ocS520k2rQ1555Vkf-oTmzGhm4m1YsEPS-5t6FCD3i7fzCah_ZB_06SLZn4jiG-ponzvDeISzXs-cwhL-b25WQvfwJYeyNxL8unV5IzFw"
          />
          <div className="absolute inset-0 studio-reveal-overlay flex items-end p-6">
            <h4 className="font-title-lg text-secondary-fixed">
              Precision Lab
            </h4>
          </div>
        </div>
      </div>
    </section>
    {/* Success Stories */}
    <section className="mb-stack-lg py-16 px-8 glass-card rounded-2xl relative overflow-hidden reveal">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="flex flex-col items-center mb-stack-md text-center">
        <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-2 uppercase">
          Proven Results
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Member Transformations
        </h2>
      </div>
      <div className="relative overflow-hidden" id="testimonial-carousel">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          id="carousel-track"
        >
          {/* Slide 1 */}
          <div className="min-w-full flex flex-col md:flex-row items-center gap-stack-md px-4">
            <div className="w-48 h-48 rounded-full border-2 border-secondary/30 p-2 shrink-0">
              <img
                alt="Julian Sterling"
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYB0vE0kQTUZk-IA8xEH8mQtbAmKV05AJyLdX1Re5ERyqzzxsNr1BuJTrf-UytF7gx773JbGDdAF9CvWDXLq8nmxja_psKvoAn_V40BNimqrjUPmUm3DjdZ2K3k7lC_bR-rZA4JDphy1oYtDECxxjCRRELJS0YyF9ketGP8wnRl_iW4xbfJMMEiwixt1uYRmgJ4puMxWAfyEqt6zELLZLIN_psMPk7WNV1vIHBVlubobw0eeEc_HipXesCQaIUjN59LU-WB8O9Zqw"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start text-secondary mb-4">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface/90 italic mb-6">
                "LuxeBook didn't just change my workout; it changed my life. The
                level of personalization and the sheer quality of the
                environment is unmatched in the industry."
              </p>
              <h4 className="font-title-lg text-title-lg text-secondary-fixed">
                Julian Sterling
              </h4>
              <p className="font-label-caps text-label-caps text-on-surface/50">
                Tech CEO, Platinum Member
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Mobile App Preview */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center mb-stack-lg reveal">
      <div className="order-2 lg:order-1">
        <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-2 uppercase">
          LuxeBook Digital
        </span>
        <h2 className="font-display-sm text-display-sm text-on-surface mb-stack-sm">
          Performance in your Pocket
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface/70 mb-stack-md">
          Manage your membership, book private sessions, and track your
          bio-metrics with our award-winning mobile application.
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-secondary">
                touch_app
              </span>
            </div>
            <div>
              <h5 className="font-title-lg text-title-lg text-secondary-fixed mb-1">
                Instant Booking
              </h5>
              <p className="font-body-md text-body-md text-on-surface/60">
                One-tap reservations for private trainers.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-secondary">
                monitoring
              </span>
            </div>
            <div>
              <h5 className="font-title-lg text-title-lg text-secondary-fixed mb-1">
                Real-time Biometrics
              </h5>
              <p className="font-body-md text-body-md text-on-surface/60">
                Sync your wearable devices for a holistic view.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex justify-center items-center relative py-stack-lg">
        <div className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        <div className="relative z-10 glass-card w-64 h-[500px] rounded-[40px] border-4 border-surface-container-high p-4 floating-device shadow-2xl">
          <div className="w-full h-full rounded-[30px] overflow-hidden bg-background">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-label-caps text-[10px] text-on-surface/50">
                  9:41
                </span>
                <div className="w-16 h-4 bg-surface-container rounded-full" />
                <span className="material-symbols-outlined text-[14px]">
                  battery_full
                </span>
              </div>
              <div className="glass-card p-4 rounded-xl mb-6">
                <p className="font-label-caps text-[10px] text-secondary">
                  ACTIVE CALORIES
                </p>
                <p className="font-headline-lg text-xl text-on-surface">
                  1,240
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full px-4 md:px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px]">
    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
      <span className="font-headline-lg text-headline-lg text-secondary-fixed mb-2">
        LuxeBook
      </span>
      <p className="font-body-md text-body-md text-on-surface/60 max-w-xs text-center md:text-left">
        The definitive sanctuary for elite performance and wellness excellence.
      </p>
    </div>
    <div className="flex gap-stack-md mb-6 md:mb-0">
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
    </div>
    <div className="text-secondary-fixed-dim font-body-md text-body-md text-center md:text-right">
      © 2024 LuxeBook Fitness. Excellence in Motion.
    </div>
  </footer>
</>

  );
}

export default Membership;

