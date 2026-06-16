import { Link, useNavigate } from "react-router-dom";
import { useBooking } from "../contexts/BookingContext";

function BookingPortal() {
  const navigate = useNavigate();
  const { service: selectedService, setService } = useBooking();

  const services = [
    { id: 1, name: "Elite Performance", duration: "60 min", price: "$150" },
    { id: 2, name: "Restorative Yoga", duration: "75 min", price: "$120" },
    { id: 3, name: "Precision Boxing", duration: "45 min", price: "$135" },
    { id: 4, name: "Regenerative Therapy", duration: "90 min", price: "$200" },
  ];

  const selectService = (svc) => {
    setService(svc);
  };

  const handleContinue = () => {
    if (selectedService) {
      navigate("/trainer");
    }
  };

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
          to="/trainer"
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
        {/* Step 1 (Active) */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold progress-dot-active transition-all">
            1
          </div>
          <span className="font-label-caps text-label-caps text-secondary-fixed">
            Service
          </span>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-secondary/20 flex items-center justify-center font-bold">
            2
          </div>
          <span className="font-label-caps text-label-caps">Trainer</span>
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
      <div className="absolute top-5 left-0 w-1/4 h-[1px] bg-secondary -z-10 transition-all duration-700 shadow-[0_0_10px_#e9c349]" />
    </div>
    <div className="flex flex-col lg:flex-row gap-gutter">
      {/* Service Selection Grid (Left) */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
          {/* Service 1 */}
          <div
            className="glass-panel p-stack-sm cursor-pointer relative overflow-hidden group"
            onClick={() => selectService(services[0])}
          >
            <div className="h-48 mb-stack-sm overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A moody, high-contrast photograph of a sleek, ultra-luxury gym interior featuring matte black equipment and subtle gold ambient lighting. The atmosphere is quiet, exclusive, and technologically advanced with a professional high-key cinematic aesthetic. Minimalist shadows and pristine surfaces dominate the visual frame."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvVnvlGf8qEEcWHb7QsKLqLAjzje2UL1gi7IIePdAtCnkrodJ9scNPX0irEbLwzOypW3Thgw-8iaLV9hkv5BBa6JwNkOqTzTzkTeNVq1voiBPZ-PMDOq76d-Q4VRYViNtJC709AlEfvqF8flR5OHL_LLoJWocwpGZluqWyLloRDh7iGNELcRDqcjD59thiUCz9oNUrdk4P5-J4nJLtGVqgQT7Z5SCUsRPxGxoT_4FYhtb3MmzL1kY8G6DOAgpfNdEGgcIGxw54E8Q"
              />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-lg text-headline-lg text-secondary-fixed-dim">
                Elite Performance
              </h3>
              <span className="font-label-caps text-label-caps text-secondary-fixed/50">
                $150
              </span>
            </div>
            <p className="font-body-md text-on-surface/60 mb-stack-sm line-clamp-2">
              Master your physical potential with data-driven conditioning and
              elite athletic coaching.
            </p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">
                schedule
              </span>
              <span className="font-label-caps text-label-caps text-on-surface/40">
                60 Minutes
              </span>
            </div>
          </div>
          {/* Service 2 */}
          <div
            className="glass-panel p-stack-sm cursor-pointer relative overflow-hidden group"
            onClick={() => selectService(services[1])}
          >
            <div className="h-48 mb-stack-sm overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="An ethereal and serene luxury yoga studio at sunset, with golden hour light streaming through floor-to-ceiling windows. The room is filled with premium natural materials, soft textures, and a minimalist aesthetic. A deep sense of calm and exclusivity is conveyed through the warm, cinematic lighting and high-end finish."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpU1ocOvLOpKWVcNXy0oam_ydKRQ44TI3DZ5nZkj2fbIXiw4dREAozcFXbFsqXG5RgJPqupPyc_VXuuy-KbO-o3X_0eIB3kk6DUXE5DQ4j54ZyW1_UQUHdYURKREv5wXhmint_wrcP4Rt9LzLjKmqx_W9SjrMPChkNvrGS8zR78xmzKyTaGjIxFaoogo8NNacyV2gTXX0ZipEiBSF_KbzH6NdfxBMRXQURC51xbVO6pdib3WOQqDXBapsHjnSeBq8HSlm2femubUE"
              />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-lg text-headline-lg text-secondary-fixed-dim">
                Restorative Yoga
              </h3>
              <span className="font-label-caps text-label-caps text-secondary-fixed/50">
                $120
              </span>
            </div>
            <p className="font-body-md text-on-surface/60 mb-stack-sm line-clamp-2">
              Align body and mind in a sanctuary of silence. Focus on mobility,
              breathwork, and deep restoration.
            </p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">
                schedule
              </span>
              <span className="font-label-caps text-label-caps text-on-surface/40">
                75 Minutes
              </span>
            </div>
          </div>
          {/* Service 3 */}
          <div
            className="glass-panel p-stack-sm cursor-pointer relative overflow-hidden group"
            onClick={() => selectService(services[2])}
          >
            <div className="h-48 mb-stack-sm overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A striking, close-up shot of professional leather boxing gloves hanging in a high-end, darkly lit training studio. The lighting is focused and dramatic, highlighting the rich textures of the leather and the sophisticated, metallic accents of the room. The mood is powerful, disciplined, and unapologetically luxurious."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOptzFfLdU1MJ5ANnnmExerKxaHw5WMq2cSTbcWO28Ht5mkHWv_P3ajwZJL2sm4D67HekQhDegqUbfOajqV0xGwv4mJG6WZaZijn071vTka9J8nkAk7ROfJr8HDX6vSPZ_hkL2klzuTkn9rkEru_-jA7PW6aDmpeTa0DKXHnVeAmc6niCls2YMFwXmjD5jjQKu3ZCQB1G7Ram8v9St-inQjQleEQGLne_QibR0v8ysE7o8FQmHq0nm2_MxE1gR7POkD1s0ab2cs1c"
              />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-lg text-headline-lg text-secondary-fixed-dim">
                Precision Boxing
              </h3>
              <span className="font-label-caps text-label-caps text-secondary-fixed/50">
                $135
              </span>
            </div>
            <p className="font-body-md text-on-surface/60 mb-stack-sm line-clamp-2">
              High-intensity technical boxing drills focused on speed, power,
              and cognitive reflex training.
            </p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">
                schedule
              </span>
              <span className="font-label-caps text-label-caps text-on-surface/40">
                45 Minutes
              </span>
            </div>
          </div>
          {/* Service 4 */}
          <div
            className="glass-panel p-stack-sm cursor-pointer relative overflow-hidden group"
            onClick={() => selectService(services[3])}
          >
            <div className="h-48 mb-stack-sm overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A futuristic recovery lounge featuring a high-tech hyperbaric chamber and soft glowing blue and gold accent lights. The environment is impeccably clean, ultra-modern, and exclusive, resembling a private medical spa for elite athletes. Deep shadows and polished surfaces create a sophisticated cinematic mood."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR56WYTMwrCCkQQvkHEgV2dLyPgggRpuQvxn4wLAo2qNYme5UAVKpUpxLGBZmiX6jMyUqn0om_df91KHSjzTVbE_NyvW2u3BWNwh0BWBkZg-VYWamPNTImaKvXOqs2gsqQp4aHoZWloNNzISGw-plzRYYkfWaSkjv095C428MOYtW91y0HwPyHMo-ff4kkXlL1n9WXTrIsYoWo0QouzUCEnqozkhvTKXXXi5rMeToEqyzZPv0brE42pKTolOruoXiu_blRX4VBCtE"
              />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-lg text-headline-lg text-secondary-fixed-dim">
                Regenerative Therapy
              </h3>
              <span className="font-label-caps text-label-caps text-secondary-fixed/50">
                $200
              </span>
            </div>
            <p className="font-body-md text-on-surface/60 mb-stack-sm line-clamp-2">
              Bio-hacking and recovery protocols including cryotherapy, red
              light exposure, and compression.
            </p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">
                schedule
              </span>
              <span className="font-label-caps text-label-caps text-on-surface/40">
                90 Minutes
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Summary Sidebar (Right) */}
      <aside className="w-full lg:w-[400px] shrink-0">
        <div className="glass-panel p-stack-md sticky top-32 rounded-xl">
          <h2 className="font-title-lg text-title-lg text-secondary-fixed mb-stack-sm">
            Booking Summary
          </h2>
          <div className="py-stack-md text-center border-y border-secondary/10 mb-stack-md">
            {selectedService ? (
              <div className="flex flex-col gap-stack-sm mb-stack-md border-y border-secondary/10 py-stack-sm">
                <div className="flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-on-surface/60">
                    Service
                  </span>
                  <span className="font-body-md text-secondary-fixed-dim font-bold">
                    {selectedService.name}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-on-surface/60">
                    Duration
                  </span>
                  <span className="font-body-md text-on-surface">
                    {selectedService.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-caps text-label-caps text-on-surface/60">
                    Trainer
                  </span>
                  <span className="font-body-md text-on-surface/40 italic">
                    Selection in progress...
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-title-lg text-title-lg text-on-surface">
                    Total
                  </span>
                  <span className="font-title-lg text-title-lg text-secondary-fixed">
                    {selectedService.price}
                  </span>
                </div>
              </div>
            ) : (
              <p className="font-body-md text-on-surface/40 italic">
                Select a service to proceed
              </p>
            )}
            <button
              className={`w-full py-4 rounded-full font-label-caps text-label-caps tracking-widest transition-all mb-4 ${selectedService ? 'bg-secondary text-on-secondary hover:scale-[1.02] active:scale-[0.98] gold-glow cursor-pointer' : 'bg-on-surface/10 text-on-surface/30 cursor-not-allowed'}`}
              onClick={handleContinue}
              type="button"
              disabled={!selectedService}
            >
              Continue to Trainers
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

export default BookingPortal;

