import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  navigate("/transformation");
};
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* Ambient Background Animation */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40"></div>
        {/* Full-screen Background Image with Dark Overlay */}
        <div className="fixed inset-0 z-[-1]">
          <img
            alt="Luxury gym sanctuary"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLviZL4Oc9S7QyudP5M6bCYVUg_Pszf911hYTKoifDohMH2GDGmuHiiD_Vhrbr5iL2KTSDPE6FC3QO64S3rL_cF0b4n9ku6ZPFSUt55snVDk0QZul0iAxi_uAPe87Po4yigqdoMxqe5s3u8pW_E1bSqYFAJzYmvsGc2yFcYT8epH4ebb8n702hdhULQqUdh2q0snTEk5cvMQhYMtCUX_Ec8bmYVWA3GwXH7ENOvvizlasijzNXsPgT_wP3I"
          />
          <div className="absolute inset-0 bg-overlay" />
        </div>
        {/* Top Navigation Bar */}
        <header className="w-full top-0 left-0 absolute z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-8 bg-transparent no-border">
          <div className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tighter text-secondary">
            LuxeBook
          </div>
          <div className="flex items-center gap-6">
            <button className="text-on-surface-variant hover:text-secondary/80 transition-colors duration-300 transform active:scale-95">
              <span
                className="material-symbols-outlined text-[28px]"
                data-icon="help"
              >
                help
              </span>
            </button>
          </div>
        </header>
        {/* Main Content: Login Card */}
        <main className="w-full max-w-[560px] px-margin-mobile z-10">
          <div className="glass-card rounded-xl p-stack-lg md:p-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-700">
            {/* Brand Identity */}
            <div className="mb-stack-md">
              <img
  alt="logo"
  src="https://via.placeholder.com/100"
  className="w-16 h-16 object-contain"
/>
              <h2 className="font-headline-lg text-5xl md:text-6xl text-on-surface tracking-wide">
                Member Entrance
              </h2>
              <p className="font-body-md text-on-surface-variant mt-2 opacity-80 uppercase tracking-widest text-[10px]">
                Authentication Required
              </p>
            </div>
            {/* Login Form */}
            <form
              className="w-full space-y-stack-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-stack-sm text-left">
                <div className="relative group">
                  <label className="font-label-caps text-label-caps text-on-tertiary-container block mb-2 uppercase">
                    Member ID or Email
                  </label>
                  <input
                    value={email}
onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-lowest border-b border-on-tertiary-fixed-variant/30 text-on-surface py-3 focus:outline-none focus:border-secondary transition-all duration-500 placeholder:text-on-tertiary-container/50 font-body-md input-focus-effect rounded-sm"
                    placeholder="elite@luxebook.com"
                    type="text"
                  />
                </div>
                <div className="relative group">
                  <label className="font-label-caps text-label-caps text-on-tertiary-container block mb-2 uppercase">
                    Secure Key
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface-container-lowest border-b border-on-tertiary-fixed-variant/30 text-on-surface py-3 focus:outline-none focus:border-secondary transition-all duration-500 placeholder:text-on-tertiary-container/50 font-body-md input-focus-effect rounded-sm"
                    placeholder="•••"
                    type="password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-8 h-4 bg-surface-container-highest rounded-full border border-outline-variant peer-checked:bg-secondary transition-colors" />
                    <div className="dot absolute left-1 top-1 bg-on-surface w-2 h-2 rounded-full transition-transform peer-checked:translate-x-4 peer-checked:bg-on-secondary" />
                  </div>
                  <span className="font-label-caps text-label-caps text-on-tertiary-container group-hover:text-on-surface transition-colors">
                    Remember Me
                  </span>
                </label>
                <Link
                  className="font-label-caps text-label-caps text-on-tertiary-container hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4"
                  to="/forgot-password"
                >
                  Forgot Access Credentials?
                </Link>
              </div>
              <button
  onClick={handleLogin}
  className="gold-shimmer w-full py-4 rounded-lg font-title-lg text-title-lg text-on-secondary shadow-lg hover:shadow-secondary/20 transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] mt-stack-md uppercase tracking-widest"
>
  Elite Access
</button>
            </form>
            <div className="mt-stack-lg pt-stack-sm border-t border-secondary/10 w-full">
              <p className="font-label-caps text-label-caps text-on-tertiary-container/60">
                By entering, you agree to our{" "}
                <span className="text-secondary/60">Private Membership Protocol</span>
                .
              </p>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="w-full bottom-0 left-0 absolute z-50 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-sm bg-transparent no-border">
          <div className="font-label-caps text-label-caps text-on-tertiary-container mb-4 md:mb-0">
            © 2024 LuxeBook. All Rights Reserved. Private Members Only.
          </div>
          <div className="flex gap-stack-md">
            <Link
              className="font-label-caps text-label-caps text-on-tertiary-container hover:text-secondary transition-colors opacity-80 hover:opacity-100"
              to="/privacy"
            >
              Privacy
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-tertiary-container hover:text-secondary transition-colors opacity-80 hover:opacity-100"
              to="/terms"
            >
              Terms
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-tertiary-container hover:text-secondary transition-colors opacity-80 hover:opacity-100"
              to="/transformation"
            >
              Concierge
            </Link>
          </div>
        </footer>
      </div>;

    </>
  );
}

export default Login;