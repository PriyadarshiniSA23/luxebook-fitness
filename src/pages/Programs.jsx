import { Link } from "react-router-dom";

function Programs() {
  return (
    <>
  {/* Atmospheric Background */}
  <div
    className="fixed inset-0 z-0 overflow-hidden pointer-events-none shimmer-bg"
    id="particle-container"
  />
  {/* TopNavBar */}
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20 shadow-[0_0_20px_rgba(233,195,73,0.05)]">
    <div className="flex items-center gap-4">
      <img
        alt="LuxeBook"
        className="h-10 w-10 object-contain"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuATw5luAfh_p1It_j6Dy4BIpPO9xPpM6K2VLxUOW7xA3V6WXJcLLA2cRySYu4hQ-wYvQfi7oc-46VrFahybcWlVZmQiVgLb-xtERpWEs-xLSEHnst3CAQyEuihTB6Yw0tfY7YvxNl6rtPp2XTKZh2aqBd5Fu60OZr4Wy4iuWV6XB6ltGA7yMavLrA5_MCaRmhoeEQXO9icRUXPxnMYCo790EB4dHnUDuR-DGubLa_jEYAnzvtAL3qtaOWw8dzUoKOSq5_tll46dn7c"
      />
      <span className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
        LuxeBook
      </span>
    </div>
    <div className="hidden md:flex gap-10">
      <Link
        className="font-label-caps text-label-caps text-on-surface/80 hover:text-secondary-fixed transition-colors"
        to="/"
      >
        Studios
      </Link>
      <Link
        className="font-label-caps text-label-caps text-on-surface/80 hover:text-secondary-fixed transition-colors"
        to="/trainers"
      >
        Trainers 
      </Link>
      <Link
        className="font-label-caps text-label-caps text-secondary-fixed border-b-2 border-secondary-fixed pb-1"
        to="/programs"
      >
        Programs
      </Link>
      
      <Link
        className="font-label-caps text-label-caps text-on-surface/80 hover:text-secondary-fixed transition-colors"
        to="/membership"
      >
        Membership
      </Link>
    </div>
    <div className="flex items-center gap-6">
      <Link
      to="/login" className="material-symbols-outlined text-secondary text-2xl hover:scale-110 transition-transform">
        account_circle
      </Link>
      <Link to="/booking" className="bg-secondary text-on-primary px-6 py-2 font-label-caps text-label-caps gold-heat transition-all active:scale-95">
        Book Session
      </Link>
    </div>
  </nav>
  {/* SideNavBar (Social Rail) */}
  <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-stack-sm p-2 bg-surface-container/40 backdrop-blur-[40px] rounded-full border border-secondary/10 shadow-2xl shadow-secondary/5">
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      title="Instagram"
    >
      <span className="material-symbols-outlined">share</span>
    </button>
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      title="Twitter"
    >
      <span className="material-symbols-outlined">public</span>
    </button>
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      title="LinkedIn"
    >
      <span className="material-symbols-outlined">group</span>
    </button>
    <button
      className="text-on-surface/60 p-3 hover:text-secondary-fixed hover:scale-110 transition-all"
      title="YouTube"
    >
      <span className="material-symbols-outlined">play_circle</span>
    </button>
  </aside>
  <main className="relative z-10 pt-32 px-margin-desktop max-w-container-max mx-auto">
    {/* Header Section */}
    <section className="mb-stack-lg text-center md:text-left">
      <h1 className="font-headline-lg text-[64px] leading-tight mb-4 text-secondary-fixed">
        Elite Performance <br />
        <span className="text-on-surface italic">Redefined</span>
      </h1>
      <p className="max-w-2xl text-on-surface/70 text-body-md">
        Precision-engineered fitness journeys for those who demand excellence.
        Our programs are designed by world-class athletes to transform your
        physiology and mindset.
      </p>
    </section>
    {/* Programs Showcase (Bento Grid) */}
    <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg">
      <div className="md:col-span-8 group relative overflow-hidden glass-card h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"
          data-alt="A focused high-performance athlete engaged in a heavy Olympic lift in a moody, dark-mode private gym. The lighting is cinematic with golden rim lights highlighting muscle definition. The atmosphere is quiet, intense, and ultra-exclusive, featuring polished concrete floors and premium metallic fitness equipment."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSoIShC6HgBtv-wX3CJsmvUEAe--v4iFpZVPXeipkH56lcJO98oZbmQxWEwkUpaolD4SBv_Rg2mw8N_geMFjZnspGoDW6gD18zfTwej2leUCLUIKBWusPjPgTm5ToKwCj4InBQ4vOKLegarlry-AdVDhwNvdfwtfE0mxl-VDLRuIgg114UJ-PWCFkoSdrJHkmn8IxTpR08il7Z6uANtVQydX_mbAyTNrrC4cixs3uyxCLnIFxeXb_-M4StzENmw8BxBT8YvMSYjHQ")'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-stack-md">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-label-caps text-[10px] mb-4">
            TRANSFORMATION
          </span>
          <h3 className="font-headline-lg text-4xl mb-2 text-secondary-fixed">
            Athletic Performance
          </h3>
          <p className="text-on-surface/80 max-w-md mb-6">
            Elite-level conditioning, explosive power, and injury prevention
            protocols used by professional athletes.
          </p>
          <Link
            to="/booking"
            className="border border-secondary text-secondary px-6 py-2 font-label-caps text-label-caps hover:bg-secondary hover:text-on-primary transition-all flex items-center justify-center"
          >
            EXPLORE PROTOCOL
          </Link>
        </div>
      </div>
      <div className="md:col-span-4 flex flex-col gap-gutter">
        <div className="flex-1 glass-card p-stack-md flex flex-col justify-end group overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
            data-alt="Close up of high-end, modern fitness equipment in a minimalist luxury gym. The scene features dark carbon fiber textures and warm golden ambient lighting. The mood is sophisticated, technical, and serene, perfect for an elite muscle-building program."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGfNwrT29dVH-rVVAdd2-HVS7OXFFQPLNGm8NBx2tIKm6jG36ayrRGPJD1BjB3nGaNktVw30JO5vi0q8PXKjOWH1pinL3S7xzLhIsOfD0DTz3N6gbIR3cKnhdINiTIF8ly0LLjChiZZfvhsXwXKqC6prBmiz3sR6Ut8qA_ZarOkEhCrr_iMHOuOAhZoDPYYfsSownzpbhg9RnjQsMjtHRH5sPIzeUA32HPN98F0mqmfQaLrwHXecHVIAvWmqArHmZgGpKpvzDecVM")',
              backgroundSize: "cover"
            }}
          />
          <h4 className="font-headline-lg text-2xl text-secondary-fixed mb-1 relative z-10">
            Muscle Building
          </h4>
          <p className="text-on-surface/70 text-sm relative z-10">
            Hypertrophy-focused science to optimize structural growth and
            strength density.
          </p>
        </div>
        <div className="flex-1 glass-card p-stack-md flex flex-col justify-end group overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
            data-alt="An ethereal, brightly lit private yoga studio overlooking a futuristic city skyline at dusk. The interior is a mix of dark navy and gold accents with premium leather mats. The mood is tranquil yet energizing, representing a high-end weight loss and metabolic health environment."
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBR_KtmPeHrPgqUkiDwI5QsuQQVaGi7uu0hDoVsXiuaqIZu9UDun0IBa17I065ZJ8bbHTBog1RaGklEN_ptDPX2ERwd6a6Gr4TajdIb0bdGrTwhv84A1sPWGvVfVoV_H1EQyyKurVjB_MlPFN1DqsXj4adm1RUadMfw7aFsg9TK4M60r4uKLndWNGzEtHWHkq57uFmlpWje8epsDLUr9_Wg2Hz0qs8psTW90zm5p0PU8TSrk0M4Zs6x_XcjtBbnqvfdZTb2eMwFUtA")',
              backgroundSize: "cover"
            }}
          />
          <h4 className="font-headline-lg text-2xl text-secondary-fixed mb-1 relative z-10">
            Weight Loss
          </h4>
          <p className="text-on-surface/70 text-sm relative z-10">
            Metabolic optimization through custom nutritional architecture and
            high-intensity output.
          </p>
        </div>
      </div>
    </section>
    {/* Meet Our Trainers Section */}
    <section className="mb-stack-lg">
      <div className="flex flex-col md:flex-row justify-between items-end mb-stack-md gap-4">
        <div>
          <h2 className="font-headline-lg text-4xl text-secondary-fixed mb-2">
            The Architects of Excellence
          </h2>
          <p className="text-on-surface/60 font-label-caps">
            OUR ELITE TRAINER ROSTER
          </p>
        </div>
        <Link
          to="/trainer"
          className="text-secondary font-label-caps border-b border-secondary pb-1 hover:text-secondary-fixed transition-colors flex items-center"
        >
          VIEW ALL COACHES
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
        {/* Trainer 1 */}
        <div className="glass-card group overflow-hidden">
          <div className="h-80 overflow-hidden relative">
            <img
              alt="Julian Vane"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Professional portrait of a male elite fitness trainer with a confident stance. He is wearing high-end athletic apparel in deep navy. Background is a blurred luxury gym environment with warm golden lighting and cinematic depth-of-field. The aesthetic is clean, professional, and authoritative."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8o_lJBmhk45u1_E-jQWV7Tr0C1zgXfmWL0JS4bEM9oppx1iU7hzzWzOTJdUjcFOhza2ki3K5NcW-ecPGDM3OWhHEwc4XX7P-PcY76Hj3TYVdkPgM_EAkeMlNCqMKy-YsAx3HuMdrIkc7_5M7VvUObjRiCxhDlrHYRrxplQYZdRsuwbDMouFuEvW2ZMN8FqG563Wjctr7srtKtTRDqSi5-7DwwP12f0GvFRVwz2cgLZNDifAb1S9XaDB-Pmlgzhk-P9MFHVtpMT6Y"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60" />
          </div>
          <div className="p-stack-sm">
            <h4 className="font-headline-lg text-xl text-secondary-fixed mb-1">
              Julian Vane
            </h4>
            <p className="text-on-surface/60 text-xs mb-4">
              OLYMPIC CONDITIONING
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                share
              </span>
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                public
              </span>
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                play_circle
              </span>
            </div>
          </div>
        </div>
        {/* Trainer 2 */}
        <div className="glass-card group overflow-hidden">
          <div className="h-80 overflow-hidden relative">
            <img
              alt="Elena Rossi"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Professional portrait of a female elite fitness trainer with an athletic build. She has a serene yet powerful expression. Wearing premium black yoga wear. The setting is a minimalist architectural space with soft glowing gold accents and high-end materials. Cinematic lighting enhances the luxury brand feel."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6DeWkvvKJgjF1RYgxz9wEHi_3sFwuVVFSBay-AAyIUP-MqXXE9bZjf8gjSxrNU-eikJyadcmfawpkjalAFIJccPfjpQ7MVFNsgf-JVmc65Ef29l_-vK9_1e0zSi9gyl43eEU2wkQzlB0_y5dlGWpXfyhwWsl1CI7-ncKDqQLOWITjsbVsPcGsxdKaYVhpeMoPlEe6EXyZ0mNAOowxLKUfgZdEuusmFN-VYiE5k9z7lGI7OgArr90-TLzLUztn4fDjYsMKQlqnpG8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60" />
          </div>
          <div className="p-stack-sm">
            <h4 className="font-headline-lg text-xl text-secondary-fixed mb-1">
              Elena Rossi
            </h4>
            <p className="text-on-surface/60 text-xs mb-4">
              MOBILITY &amp; RECOVERY
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                share
              </span>
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                public
              </span>
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                play_circle
              </span>
            </div>
          </div>
        </div>
        {/* Trainer 3 */}
        <div className="glass-card group overflow-hidden">
          <div className="h-80 overflow-hidden relative">
            <img
              alt="Marcus Thorne"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Professional portrait of a male elite trainer focusing on strength and muscle building. Rugged but refined appearance, wearing technical luxury gym gear. The background features deep shadows and sharp gold highlights reflecting off gym equipment. High-contrast, cinematic, and authoritative photography."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq-UbYJ2p82VAFhSdRKhrhHy1iTRhE_Gt26RpODosFXJKX6YOFVP6DtWQuPOGdQOFVnLOIZqYeD7dNZKkpO9D6HmWf_izIylUFoNP3a9B2oyyMKDLFZnWeDMODGxsMxRD-70jIvhd6-BbEzmnSsRQVHuN3v9QMmggobarA2ecaA51UWsDZdwpkrjafmW_uOsfwnjzuqHL0Zm8IeI2PUorkDZjsUJ30mqhfteyhjiECqCHJUrO6gZt_W81c9LlhzwBTDsIam5orf0Q"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60" />
          </div>
          <div className="p-stack-sm">
            <h4 className="font-headline-lg text-xl text-secondary-fixed mb-1">
              Marcus Thorne
            </h4>
            <p className="text-on-surface/60 text-xs mb-4">
              HYPERTROPHY SPECIALIST
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                share
              </span>
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                public
              </span>
              <span className="material-symbols-outlined text-secondary text-sm cursor-pointer hover:text-secondary-fixed transition-colors">
                play_circle
              </span>
            </div>
          </div>
        </div>
        {/* Membership CTA Card */}
        <div className="bg-secondary/10 border border-secondary/30 p-stack-md flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(233,195,73,1)_0%,transparent_70%)]" />
          <span
            className="material-symbols-outlined text-secondary text-4xl mb-4"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <h4 className="font-headline-lg text-2xl text-secondary-fixed mb-2">
            Join the Elite
          </h4>
          <p className="text-on-surface/70 text-sm mb-6">
            Gain access to our full roster of world-class trainers and tailored
            programs.
          </p>
          <Link
            to="/membership"
            className="bg-secondary text-on-primary px-8 py-3 font-label-caps text-label-caps gold-heat transition-all flex items-center justify-center"
          >
            BECOME A MEMBER
          </Link>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full mt-stack-lg border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px] w-full px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center gap-stack-md">
    <div className="flex flex-col items-center md:items-start">
      <span className="font-headline-lg text-headline-lg text-secondary-fixed mb-2">
        LuxeBook
      </span>
      <p className="text-on-surface/40 font-body-md text-sm">
        © 2024 LuxeBook Fitness. Excellence in Motion.
      </p>
    </div>
    <div className="flex gap-8">
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
  </footer>
</>

  );
}

export default Programs;

