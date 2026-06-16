import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../contexts/BookingContext";



function MemberDetails() {
  const { trainer, dateTime } = useBooking();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goals, setGoals] = useState("");
  const handleBooking = async () => {
  if (!fullName || !email || !phone) {
    alert("Please fill all required fields");
    return;
  }

  try {
console.log("Button clicked");
console.log("Trainer:", trainer);
console.log("DateTime:", dateTime);
console.log("Full Name:", fullName);
console.log("Email:", email);
console.log("Phone:", phone);
    const response = await fetch(
      "http://localhost:5000/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
body: JSON.stringify({
  trainer_name: trainer?.name || trainer,
  booking_date: dateTime?.date,
  booking_time: dateTime?.time,
  member_name: fullName,
  member_email: email,
}),
      }
    );

    const data = await response.json();

    if (data.success) {
      navigate("/payment");
    } else {
      alert("Booking failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};
  return (
<>
  {/* Ambient Particles Background */}
  <div
    className="fixed inset-0 pointer-events-none z-0"
    id="particle-container"
  />
  {/* Navigation Shell */}
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20 shadow-[0_0_20px_rgba(233,195,73,0.05)]">
    <div className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
      LuxeBook
    </div>
    <div className="hidden md:flex gap-gutter">
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
    </div>
    <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary cursor-pointer">
        account_circle
      </span>
      <Link to="/booking" className="bg-secondary text-on-secondary px-6 py-2 font-label-caps text-label-caps rounded-full gold-glow transition-all active:scale-95">
        Book Session
      </Link>
    </div>
  </nav>
  {/* Side Social Rail */}
  <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-stack-sm p-2 bg-surface-container/40 backdrop-blur-[40px] rounded-full border border-secondary/10 shadow-2xl shadow-secondary/5">
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
  {/* Main Content */}
  <main className="relative z-10 pt-32 pb-stack-lg px-margin-desktop max-w-container-max mx-auto">
    {/* Progress Indicator */}
    <div className="flex justify-between items-center mb-stack-lg max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
          <span className="material-symbols-outlined text-sm">check</span>
        </div>
        <span className="font-label-caps text-label-caps text-on-surface/60">
          Service
        </span>
      </div>
      <div className="flex-1 h-[1px] bg-secondary/30 mx-4" />
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
          <span className="material-symbols-outlined text-sm">check</span>
        </div>
        <span className="font-label-caps text-label-caps text-on-surface/60">
          Trainer
        </span>
      </div>
      <div className="flex-1 h-[1px] bg-secondary/30 mx-4" />
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
          <span className="material-symbols-outlined text-sm">check</span>
        </div>
        <span className="font-label-caps text-label-caps text-on-surface/60">
          Schedule
        </span>
      </div>
      <div className="flex-1 h-[1px] bg-secondary/30 mx-4" />
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full border-2 border-secondary bg-secondary/10 flex items-center justify-center text-secondary-fixed animate-pulse">
          <span className="font-title-lg text-title-lg">4</span>
        </div>
        <span className="font-label-caps text-label-caps text-secondary-fixed">
          Details
        </span>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Left: Member Form & Previews */}
      <div className="lg:col-span-8 space-y-gutter">
        {/* Form Card */}
        <div className="glass-card rounded-xl p-stack-md">
          <h2 className="font-headline-lg text-headline-lg text-secondary-fixed mb-stack-sm">
            Member Information
          </h2>
          <p className="font-body-md text-body-md text-on-surface/60 mb-stack-md">
            Provide your details to complete the elite booking process.
          </p>
          <form className="space-y-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="relative group">
                <label className="block font-label-caps text-label-caps text-secondary-fixed mb-2">
                  Full Name
                </label>
<input
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface transition-all"
  placeholder="Enter your full name"
  type="text"
/>
              </div>
              <div className="relative group">
                <label className="block font-label-caps text-label-caps text-on-surface/60 mb-2">
                  Elite Member ID (Optional)
                </label>
                <input
                  className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface transition-all"
                  placeholder="LX-XXXX-XXXX"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="relative group">
                <label className="block font-label-caps text-label-caps text-secondary-fixed mb-2">
                  Email Address
                </label>
<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface transition-all"
  placeholder="name@luxury.com"
  type="email"
/>
              </div>
              <div className="relative group">
                <label className="block font-label-caps text-label-caps text-secondary-fixed mb-2">
                  Phone Number
                </label>
<input
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface transition-all"
  placeholder="+1 (555) 000-0000"
  type="tel"
/>
              </div>
            </div>
            <div className="relative group">
              <label className="block font-label-caps text-label-caps text-secondary-fixed mb-2">
                Specialized Training Goals
              </label>
<textarea
  value={goals}
  onChange={(e) => setGoals(e.target.value)}
  className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface transition-all resize-none"
  placeholder="E.g., Hypertrophy focus, flexibility optimization, or recovery protocols..."
  rows={3}
/>
            </div>
          </form>
        </div>
        {/* Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* WhatsApp Preview */}
          <div className="glass-card rounded-xl p-6 border-l-4 border-l-green-500/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-400 text-sm">
                  chat
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface/40 uppercase tracking-widest">
                WhatsApp Preview
              </span>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-secondary-fixed" />
                <span className="text-[12px] font-bold text-on-surface">
                  LuxeBook Concierge
                </span>
              </div>
              <p className="text-[13px] text-on-surface/80 leading-relaxed">
                Your LuxeBook session with{" "}
                <span className="text-secondary-fixed">Julian Vane</span> is
                confirmed. Welcome to the elite.
              </p>
              <div className="text-[10px] text-on-surface/40 text-right mt-1">
                11:00 AM
              </div>
            </div>
          </div>
          {/* Email Preview */}
          <div className="glass-card rounded-xl p-6 border-l-4 border-l-secondary/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-sm">
                  mail
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface/40 uppercase tracking-widest">
                Email Preview
              </span>
            </div>
            <div className="bg-surface-container-highest rounded-sm p-4 text-center border border-white/5 shadow-inner">
              <div className="font-display-sm text-[18px] text-secondary-fixed mb-1">
                LuxeBook
              </div>
              <div className="h-[1px] w-8 bg-secondary/40 mx-auto mb-3" />
              <div className="text-[11px] font-label-caps text-on-surface/60 uppercase">
                Session Confirmed
              </div>
              <div className="mt-4 text-[10px] text-on-surface/40 font-body-md">
                Excellence in Motion
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Booking Summary Sidebar */}
      <aside className="lg:col-span-4">
        <div className="glass-card rounded-xl p-stack-md sticky top-32">
          <h3 className="font-title-lg text-title-lg text-secondary-fixed mb-stack-sm">
            Booking Summary
          </h3>
          <div className="space-y-4 mb-stack-md">
            <div className="flex justify-between items-start py-3 border-b border-secondary/10">
              <div>
                <span className="font-label-caps text-[10px] text-on-surface/40 block mb-1">
                  SERVICE
                </span>
                <span className="font-body-md text-on-surface">
                  Elite Performance
                </span>
              </div>
              <span className="text-on-surface/80">$150.00</span>
            </div>
            <div className="flex justify-between items-start py-3 border-b border-secondary/10">
              <div>
                <span className="font-label-caps text-[10px] text-on-surface/40 block mb-1">
                  TRAINER
                </span>
                <span className="font-body-md text-on-surface">
                  Julian Vane
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start py-3 border-b border-secondary/10">
              <div>
                <span className="font-label-caps text-[10px] text-on-surface/40 block mb-1">
                  SCHEDULE
                </span>
                <span className="font-body-md text-on-surface">
                  October 12, 2024
                </span>
                <span className="font-body-md text-on-surface/60 block">
                  11:00 AM
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mb-stack-md">
            <span className="font-label-caps text-label-caps text-on-surface/60">
              TOTAL PRICE
            </span>
            <span className="font-display-sm text-display-sm text-secondary">
              $150.00
            </span>
          </div>
         <button
  onClick={handleBooking}
  className="w-full bg-secondary text-on-secondary font-label-caps text-label-caps py-5 rounded-full gold-glow shimmer transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-secondary/10 flex items-center justify-center"
>
  Complete Booking
</button>
          <p className="text-center mt-4 text-[11px] text-on-surface/40 font-body-md">
            Secure 256-bit encrypted checkout
          </p>
        </div>
        <div className="mt-gutter p-6 glass-card rounded-xl">
          <div className="flex gap-4 items-center">
            <img
              alt="Julian Vane"
              className="w-16 h-16 rounded-lg object-cover border border-secondary/20"
              data-alt="A professional high-end personal trainer with athletic build, wearing premium charcoal fitness apparel, standing confidently in a luxury dark-toned gym with subtle gold lighting accents. The atmosphere is sophisticated and performance-oriented, with soft focus on high-end equipment in the background. Cinematic depth of field and premium aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5m9pXb9GWMgZZ_7hHQ0ClY3e-q8ig_dqS08kJp_idipNaBzoCtjyez6S9TsBhCulR-U9LK9M89sClH7wDHsHrhkdaennlsCLapZGyDL0CuDTzm8Y9VR24lznM4JqHgGYo_IOYasvSc4ev3OA-5wW8sGJebhUi8nncW0a-1FgBqZZBIREr8Xg3gqiCK4HVSP8n3nQ193w3iZMd-nmjtd_I9Dnvh2GAA4Wq_8VsWmXDW_koJ-sjXNIr45UFtSqwA5tXQTCWr5U07pw"
            />
            <div>
              <div className="font-title-lg text-secondary-fixed text-sm">
                Julian Vane
              </div>
              <div className="text-[12px] text-on-surface/60">
                Master Performance Coach
              </div>
              <div className="flex gap-1 mt-1">
                <span
                  className="material-symbols-outlined text-secondary text-[12px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[12px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[12px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[12px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[12px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </main>
  {/* Footer */}
  <footer className="w-full px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px] mt-stack-lg">
    <div className="font-headline-lg text-headline-lg text-secondary-fixed mb-4 md:mb-0">
      LuxeBook
    </div>
    <div className="flex flex-wrap justify-center gap-gutter mb-4 md:mb-0">
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
    <p className="font-body-md text-body-md text-secondary-fixed-dim">
      © 2024 LuxeBook Fitness. Excellence in Motion.
    </p>
  </footer>
</>

  );
}

export default MemberDetails;

