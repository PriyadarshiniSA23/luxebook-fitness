import { Link } from "react-router-dom";

function Trainers() {
  return (
    <>
      <div>
  {/* Global Background Shader */}
  {/* Top Navigation */}
  <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-secondary/20 shadow-sm h-20">
    <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-full max-w-container-max mx-auto">
      <div className="font-headline-lg text-headline-lg text-secondary tracking-tighter cursor-pointer">
        LuxeBook
      </div>
      <div className="hidden md:flex items-center gap-stack-md font-body-md text-body-md">
        <Link
          className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
          to="/"
        >
          Studios
        </Link>
        <Link
          className="text-secondary font-bold border-b-2 border-secondary pb-1"
          to="/trainers"
        >
          Trainers
        </Link>
        <Link
          className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
          to="/programs"
        >
          Programs
        </Link>
        <Link
          className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
          to="/membership"
        >
          Membership
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden lg:block bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-caps text-label-caps hover:bg-secondary/90 transition-all">
          Private Consultation
        </button>
        <span className="material-symbols-outlined text-secondary cursor-pointer md:hidden">
          menu
        </span>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        alt="Luxury Gym Interior"
        className="w-full h-full object-cover opacity-60 scale-105"
        src="https://lh3.googleusercontent.com/aida/AP1WRLviZL4Oc9S7QyudP5M6bCYVUg_Pszf911hYTKoifDohMH2GDGmuHiiD_Vhrbr5iL2KTSDPE6FC3QO64S3rL_cF0b4n9ku6ZPFSUt55snVDk0QZul0iAxi_uAPe87Po4yigqdoMxqe5s3u8pW_E1bSqYFAJzYmvsGc2yFcYT8epH4ebb8n702hdhULQqUdh2q0snTEk5cvMQhYMtCUX_Ec8bmYVWA3GwXH7ENOvvizlasijzNXsPgT_wP3I"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </div>
    <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto space-y-stack-md">
      <span className="font-label-caps text-label-caps text-secondary tracking-widest block uppercase reveal active">
        Elite Performance Architects
      </span>
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg gold-gradient-text reveal active">
        Architects of Human Excellence
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto reveal active">
        World-class experts dedicated to transforming performance, strength,
        recovery, and longevity through high-precision biometric protocols.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-gutter pt-unit reveal active">
        <button className="btn-primary px-12 py-4 rounded-full font-label-caps text-label-caps font-bold">
          Book Your Coach
        </button>
        <button className="px-12 py-4 rounded-full border border-secondary/30 text-secondary font-label-caps text-label-caps backdrop-blur-md hover:bg-secondary/5 transition-all">
          Explore Philosophy
        </button>
      </div>
    </div>
  </section>
  {/* Transformation Stats */}
  <section className="py-stack-lg relative px-margin-mobile">
    <div className="max-w-container-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-gutter">
      <div className="glass-card p-stack-md text-center rounded-xl reveal active">
        <div className="text-secondary font-display-sm text-display-sm mb-2">
          500+
        </div>
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          Transformations
        </div>
      </div>
      <div className="glass-card p-stack-md text-center rounded-xl reveal active">
        <div className="text-secondary font-display-sm text-display-sm mb-2">
          98%
        </div>
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          Client Satisfaction
        </div>
      </div>
      <div className="glass-card p-stack-md text-center rounded-xl reveal active">
        <div className="text-secondary font-display-sm text-display-sm mb-2">
          20k+
        </div>
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          Sessions Delivered
        </div>
      </div>
      <div className="glass-card p-stack-md text-center rounded-xl reveal active">
        <div className="text-secondary font-display-sm text-display-sm mb-2">
          12
        </div>
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          Award-Winning Coaches
        </div>
      </div>
    </div>
  </section>
  {/* Specializations */}
  <section className="py-stack-lg px-margin-mobile bg-surface-container-low/30">
    <div className="max-w-container-max mx-auto space-y-stack-lg">
      <div className="text-center space-y-unit">
        <h2 className="font-headline-lg text-headline-lg gold-gradient-text reveal active">
          Specialized Domains
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto reveal active">
          Multi-disciplinary excellence applied to every facet of your
          physiological evolution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Specialized Card 1 */}
        <div className="glass-card p-stack-md rounded-2xl space-y-4 group reveal active">
          <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-secondary mb-stack-sm">
            <span className="material-symbols-outlined">bolt</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-secondary">
            Performance
          </h3>
          <p className="text-on-surface-variant">
            Unlocking explosive power and metabolic efficiency for high-stakes
            competition and cognitive clarity.
          </p>
        </div>
        {/* Specialized Card 2 */}
        <div className="glass-card p-stack-md rounded-2xl space-y-4 group reveal active">
          <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-secondary mb-stack-sm">
            <span className="material-symbols-outlined">fitness_center</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-secondary">
            Strength
          </h3>
          <p className="text-on-surface-variant">
            Structural integrity and hypertrophic mastery through
            biomechanically optimized load protocols.
          </p>
        </div>
        {/* Specialized Card 3 */}
        <div className="glass-card p-stack-md rounded-2xl space-y-4 group reveal active">
          <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-secondary mb-stack-sm">
            <span className="material-symbols-outlined">architecture</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-secondary">
            Mobility
          </h3>
          <p className="text-on-surface-variant">
            Dynamic flexibility and joint longevity through neuro-muscular
            re-education and functional range.
          </p>
        </div>
        {/* Specialized Card 4 */}
        <div className="glass-card p-stack-md rounded-2xl space-y-4 group reveal active">
          <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-secondary mb-stack-sm">
            <span className="material-symbols-outlined">spa</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-secondary">
            Recovery
          </h3>
          <p className="text-on-surface-variant">
            Advanced hyperbaric and cryo-integration protocols to accelerate
            systemic restoration.
          </p>
        </div>
        {/* Specialized Card 5 */}
        <div className="glass-card p-stack-md rounded-2xl space-y-4 group reveal active">
          <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-secondary mb-stack-sm">
            <span className="material-symbols-outlined">biotech</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-secondary">
            Nutrition
          </h3>
          <p className="text-on-surface-variant">
            DNA-based dietary architectural planning for cellular health and
            hormonal optimization.
          </p>
        </div>
        {/* Specialized Card 6 */}
        <div className="glass-card p-stack-md rounded-2xl space-y-4 group reveal active">
          <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-secondary mb-stack-sm">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-secondary">
            Transformation
          </h3>
          <p className="text-on-surface-variant">
            Comprehensive body composition redesign utilizing periodized,
            multi-modal strategies.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Trainer Bento Grid */}
  <section className="py-stack-lg px-margin-mobile">
    <div className="max-w-container-max mx-auto space-y-stack-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter">
        <div className="space-y-unit">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            Elite Roster
          </span>
          <h2 className="font-headline-lg text-headline-lg gold-gradient-text">
            Meet the Architects
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-sm">
          Curated from the world's most prestigious sports science and medical
          institutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-auto gap-gutter">
        {/* Primary Architect (Large) */}
        <div className="md:col-span-4 lg:col-span-4 lg:row-span-2 glass-card rounded-3xl overflow-hidden flex flex-col group reveal active">
          <div className="relative h-[400px] overflow-hidden">
            <img
              alt="Head Architect"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="A portrait of a high-end personal trainer with an athletic build, dressed in minimalist black performance gear, standing in a sleek, dimly lit luxury gym with gold lighting accents. The trainer has an authoritative yet welcoming expression. The environment is cinematic, with shallow depth of field and premium glassmorphism overlays on the periphery."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIGoD3u4IxBK0Uk0WG4caNLHyPWoxv8kP39woPNyRPfmaS3STvxLOS1IyFBatVorTlzUvKjZOT7mHTQfJofKy6Rea6AbJOWSKEwl2jCcyp2DiPIAA2SqcHiNHG4y0fJoL-ArvJjj6gjjuTEDgb5AR9HbbB2QMednL5JA1-PbY8hht86hN1vdwYJ54fZ1BFNJO1VYxvf3EpUm2APYs7PSw_CWit3In-j5tygHde7hrAs-q3x9SZJdEnXxkNMAJh_PXxEWVAX4c8hf4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute bottom-stack-md left-stack-md space-y-2">
              <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                Chief Architect
              </span>
              <h3 className="font-headline-lg text-headline-lg text-secondary">
                Marcus Vane
              </h3>
            </div>
          </div>
          <div className="p-stack-md flex-1 grid grid-cols-3 gap-stack-sm bg-surface-container-high/40">
            <div className="space-y-1">
              <p className="text-on-surface-variant text-xs uppercase font-bold tracking-wider">
                Experience
              </p>
              <p className="text-secondary font-title-lg">15+ Yrs</p>
            </div>
            <div className="space-y-1">
              <p className="text-on-surface-variant text-xs uppercase font-bold tracking-wider">
                Success Rate
              </p>
              <p className="text-secondary font-title-lg">99%</p>
            </div>
            <div className="space-y-1">
              <p className="text-on-surface-variant text-xs uppercase font-bold tracking-wider">
                Certified
              </p>
              <p className="text-secondary font-title-lg">PhD, CSCS</p>
            </div>
          </div>
        </div>
        {/* Secondary Architect 1 */}
        <div className="md:col-span-2 lg:col-span-2 glass-card rounded-3xl overflow-hidden group reveal active">
          <div className="relative h-[250px] overflow-hidden">
            <img
              alt="Performance Specialist"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="A professional female fitness architect in high-tech gym apparel, focusing intensely in a futuristic training center. The lighting is cold blue with warm gold counter-lighting, creating a sophisticated cinematic atmosphere. Background shows blurred biometric data screens and high-end equipment."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi6QjyX9QATqoIY4CyTaWTHIWB-5-bFnNHfI7DKLRJQjcb9XeB0_hsFGr_mghEwMn8n4pRdVqvqq5HSbN0z9yOv9z-Ohb8nfKGdwW5FP8cMkZCidBLDsTyJp5BAJ_dP2UUx93TTfrifEJUJzJO19zAoca_575d9PB0pzXwdjpIAXxoqMl-agVKcOH9HVsNO23pRyz14fDXIvLwGxnK9CTIdBIEVx_AfLwDLVm37Bh3MgUQq4Xw5ia-GcVhDdV-8FNXWqd9IIHwAn0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80" />
            <div className="absolute bottom-stack-sm left-stack-sm">
              <h3 className="font-title-lg text-title-lg text-secondary">
                Elena S.
              </h3>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                Strength &amp; Mobility
              </p>
            </div>
          </div>
        </div>
        {/* Secondary Architect 2 */}
        <div className="md:col-span-2 lg:col-span-2 glass-card rounded-3xl overflow-hidden group reveal active">
          <div className="relative h-[250px] overflow-hidden">
            <img
              alt="Nutrition Specialist"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-alt="A world-class nutritionist and performance coach standing in a high-end wellness suite. He is looking at a digital biometric tablet. The setting is ultra-modern with glass panels, dark navy walls, and soft champagne-colored ambient light. The overall mood is medical precision combined with luxury hospitality."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI7irDMy_7KEPTc3pg6gOUvM79FLbHd6JMlN_ZksFH9z3mEtAzSs5K52Fz5ds1xnWZor7DIliCrlA98HM2MDhpCBoofaPB_QnRereozCL-8i03YG9UYmK9VERIHlogv68Y1MnV-eNsZBO78SVQpofARxoAlo7vZkUNtzi3JqLZPT9YT8sdeg9Y5XJckNowtTbcG5hYrFxpVINROvJwm98H9_9F1SyTms74XePzfADIJhWof7jrlRShmk5O_0co6Vilqr50FnRhoQE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80" />
            <div className="absolute bottom-stack-sm left-stack-sm">
              <h3 className="font-title-lg text-title-lg text-secondary">
                Julian K.
              </h3>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                Bio-Optimization
              </p>
            </div>
          </div>
        </div>
        {/* Small Stat Block */}
        <div className="md:col-span-2 lg:col-span-2 glass-card rounded-3xl p-stack-md flex flex-col justify-center text-center reveal active">
          <span className="material-symbols-outlined text-secondary text-4xl mb-2">
            workspace_premium
          </span>
          <h4 className="font-title-lg text-title-lg text-glow text-secondary">
            Voted #1 Private Studio
          </h4>
          <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-2">
            London Performance Awards
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Luxury Experience Section */}
  <section className="py-stack-lg px-margin-mobile relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] -z-10" />
    <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-stack-lg">
      <div className="lg:w-1/2 space-y-stack-md reveal active">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          The Luxe Experience
        </span>
        <h2 className="font-display-sm text-display-sm gold-gradient-text">
          Precision Integration
        </h2>
        <div className="space-y-gutter">
          <div className="flex gap-stack-sm">
            <div className="flex-shrink-0 w-10 h-10 border border-secondary/30 rounded-full flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <div>
              <h4 className="font-title-lg text-title-lg text-secondary mb-1">
                Biometric Tracking
              </h4>
              <p className="text-on-surface-variant">
                Continuous monitoring of HRV, VO2 Max, and blood glucose to
                adapt your protocol in real-time.
              </p>
            </div>
          </div>
          <div className="flex gap-stack-sm">
            <div className="flex-shrink-0 w-10 h-10 border border-secondary/30 rounded-full flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <div>
              <h4 className="font-title-lg text-title-lg text-secondary mb-1">
                Personalized Programs
              </h4>
              <p className="text-on-surface-variant">
                Zero guesswork. Every session is architected based on your
                specific physiological profile.
              </p>
            </div>
          </div>
          <div className="flex gap-stack-sm">
            <div className="flex-shrink-0 w-10 h-10 border border-secondary/30 rounded-full flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">auto_graph</span>
            </div>
            <div>
              <h4 className="font-title-lg text-title-lg text-secondary mb-1">
                Elite Recovery
              </h4>
              <p className="text-on-surface-variant">
                Integrated access to post-session cryotherapy, compression
                therapy, and IV nutrient optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative reveal active">
        <div className="glass-card rounded-2xl overflow-hidden border border-secondary/20 p-2">
          <img
            alt="High Tech Training"
            className="rounded-xl w-full"
            data-alt="A high-tech fitness assessment in progress. A client is running on a high-end treadmill while connected to metabolic testing masks and sensors. The room is a high-concept training lab with dark textures, glass walls, and sophisticated gold-tinted lighting. Data visualizations and performance graphs are projected onto glass screens in the background."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWCkvIPldAvDTMbSTjc2I68UMvKHFhp43GT635gIwnzWXd1LPs4Ri7S33ZWGb-DKpqWY8gm60t5V_Xl5NfNTlE6y_Qe_MX_4MsXw4BXZzRG92xfu8NjnRBHHDqCXeJNdmr49WGjiprDbuScjPwbxU0gSwiDzwzUS5jJpRNoWGPHhsh_cOOCLXwpORmgIPka9tc9xIoZuDUkpV8WiI9LLvrku7R0-HDdg-p7EahiqJHa02__rLD5dLEbAqixTBRYeOw6IShjfMuS-E"
          />
        </div>
        {/* Floating Card Overlay */}
        <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl hidden md:block max-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-wider">
              Live Metrics
            </span>
          </div>
          <div className="text-2xl font-bold text-secondary">98 BPM</div>
          <div className="text-[10px] text-on-surface-variant mt-1">
            HRV Optimum Level
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Final CTA Section */}
  <section className="py-stack-lg px-margin-mobile relative">
    <div className="max-w-4xl mx-auto glass-card p-stack-lg rounded-[40px] text-center space-y-stack-md border-secondary/20 reveal active">
      <h2 className="font-display-sm text-display-sm gold-gradient-text">
        Begin Your Evolution
      </h2>
      <p className="text-on-surface-variant text-body-lg">
        The first step to extraordinary performance starts with an elite
        architectural consult.
      </p>
      <div className="pt-stack-sm">
        <button className="btn-primary px-16 py-5 rounded-full font-label-caps text-label-caps font-extrabold tracking-widest text-lg">
          Book Session
        </button>
      </div>
      <p className="text-xs text-on-tertiary-container uppercase tracking-widest">
        Limited slots available for new elite memberships
      </p>
    </div>
  </section>
  {/* Footer */}
  <footer className="py-stack-md border-t border-secondary/10 px-margin-mobile">
    <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-sm">
      <div className="font-headline-lg text-headline-lg text-secondary tracking-tighter">
        LuxeBook
      </div>
      <div className="flex gap-stack-md font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase">
        <a className="hover:text-secondary transition-colors" href="#">
          Privacy
        </a>
        <a className="hover:text-secondary transition-colors" href="#">
          Terms
        </a>
        <a className="hover:text-secondary transition-colors" href="#">
          Press
        </a>
        <a className="hover:text-secondary transition-colors" href="#">
          Contact
        </a>
      </div>
      <p className="text-xs text-on-tertiary-container">
        © 2024 LuxeBook Elite Performance. All Rights Reserved.
      </p>
    </div>
  </footer>
  {/* Mobile Navigation Shell */}
  <div className="md:hidden fixed bottom-0 w-full z-50 bg-surface-dim/80 backdrop-blur-lg border-t border-secondary/20 shadow-[0_-10px_40px_rgba(233,195,73,0.1)] rounded-t-xl py-4 flex justify-around items-center">
    <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-60">
      <span className="material-symbols-outlined">home</span>
      <span className="font-label-caps-mobile text-[10px] uppercase mt-1">
        Home
      </span>
    </div>
    <div className="flex flex-col items-center justify-center text-secondary scale-110">
      <span className="material-symbols-outlined">psychology</span>
      <span className="font-label-caps-mobile text-[10px] uppercase mt-1">
        Coaches
      </span>
    </div>
    <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-60">
      <span className="material-symbols-outlined">fitness_center</span>
      <span className="font-label-caps-mobile text-[10px] uppercase mt-1">
        Pillars
      </span>
    </div>
    <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-60">
      <span className="material-symbols-outlined">calendar_today</span>
      <span className="font-label-caps-mobile text-[10px] uppercase mt-1">
        Consult
      </span>
    </div>
  </div>
</div>;

    </>
  );
}

export default Trainers;