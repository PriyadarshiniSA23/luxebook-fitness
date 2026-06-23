import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBooking } from "../contexts/BookingContext";

function DateTimeSelection() {
  const { setDateTime } = useBooking();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysInMonth = new Date(
  selectedYear,
  selectedMonth + 1,
  0
).getDate();

  return (
<>
  {/* TopNavBar */}
  <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface-container/40 backdrop-blur-[20px] border-b border-secondary/20 shadow-[0_0_20px_rgba(233,195,73,0.05)]">
    <div className="font-headline-lg text-headline-lg font-bold text-secondary-fixed tracking-tight">
      LuxeBook
    </div>
    <nav className="hidden md:flex items-center gap-stack-md">
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
    <div className="flex items-center gap-stack-sm">
      <Link
        className="material-symbols-outlined text-on-surface-variant hover:text-secondary-fixed transition-all"
        to="/login"
      >
        account_circle
      </Link>
    </div>
  </header>
  {/* Side Social Rail (SideNavBar) */}
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
  <main className="pt-32 pb-stack-lg px-margin-desktop max-w-container-max mx-auto">
    {/* Progress Indicator */}
    <section className="flex justify-center items-center gap-12 mb-stack-lg">
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container border border-secondary/40 progress-halo">
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            check
          </span>
        </div>
        <span className="font-label-caps text-label-caps text-secondary">
          Service
        </span>
      </div>
      <div className="h-px w-16 bg-secondary/30" />
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container border border-secondary/40 progress-halo">
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            check
          </span>
        </div>
        <span className="font-label-caps text-label-caps text-secondary">
          Trainer
        </span>
      </div>
      <div className="h-px w-16 bg-secondary/30" />
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary border-2 border-secondary shadow-[0_0_15px_rgba(233,195,73,0.5)]">
          <span className="font-bold">3</span>
        </div>
        <span className="font-label-caps text-label-caps text-secondary font-bold">
          Schedule
        </span>
      </div>
      <div className="h-px w-16 bg-on-surface/10" />
      <div className="flex flex-col items-center gap-2 opacity-40">
        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface/50 border border-on-surface/10">
          <span className="font-bold">4</span>
        </div>
        <span className="font-label-caps text-label-caps">Details</span>
      </div>
    </section>
    {/* Main Booking Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
      {/* Left Column: Calendar & Times */}
      <div className="lg:col-span-2 space-y-stack-md">
        <div className="glass-card rounded-xl p-stack-md">
          <div className="flex justify-between items-center mb-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-primary-fixed">
              Select Your Date
            </h2>
            <div className="flex items-center gap-4">
  <button
    onClick={() => {
      if (selectedMonth === 0) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    }}
    className="material-symbols-outlined text-secondary hover:bg-secondary/10 p-2 rounded-full transition-all"
  >
    chevron_left
  </button>

  <span className="font-title-lg text-title-lg text-secondary-fixed">
    {months[selectedMonth]} {selectedYear}
  </span>

  <button
    onClick={() => {
      if (selectedMonth === 11) {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }}
    className="material-symbols-outlined text-secondary hover:bg-secondary/10 p-2 rounded-full transition-all"
  >
    chevron_right
  </button>
</div>
          </div>
          {/* Custom Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Days of Week */}
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day) => (
              <div key={day} className="text-center font-label-caps text-label-caps text-on-surface/50 py-2">
                {day}
              </div>
            ))}
            {/* Spacer Days for previous month */}
            {[...Array(4)].map((_, i) => (
              <div key={"spacer-"+i} className="aspect-square flex items-center justify-center opacity-20 font-body-md">
                {27 + i}
              </div>
            ))}
            {/* Month Days */}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const isSelected =
  selectedDate?.day === day &&
  selectedDate?.month === selectedMonth + 1 &&
  selectedDate?.year === selectedYear;
              return (
                <div
                  key={day}
                  className={`aspect-square flex items-center justify-center hover:bg-secondary/10 rounded-lg cursor-pointer transition-all border ${isSelected ? 'bg-secondary/10 text-secondary-fixed font-bold' : ''}`}
                  onClick={() =>
  setSelectedDate({
    day,
    month: selectedMonth + 1,
    year: selectedYear,
  })
}
                >
                  {day}
                  {isSelected && <div className="absolute bottom-1 w-1 h-1 bg-secondary rounded-full" />}
                </div>
              );
            })}
          </div>        </div>
        <div className="glass-card rounded-xl p-stack-md">
          <h2 className="font-headline-lg text-headline-lg text-primary-fixed mb-stack-sm">
            Available Time Slots
          </h2>
          <p className="text-on-surface/60 mb-stack-md">
            Select your preferred window for elite performance coaching.
          </p>
          <div className="flex flex-wrap gap-4" id="time-slots">
            {["08:00 AM","09:30 AM","11:00 AM","01:30 PM","03:00 PM","04:30 PM","06:00 PM"].map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-6 py-3 rounded-full font-label-caps text-label-caps transition-all ${selectedTime === time ? 'bg-secondary text-on-secondary font-bold shadow-[0_0_20px_rgba(233,195,73,0.3)]' : 'bg-surface-container/50 border border-secondary/10 text-on-surface/80 hover:border-secondary'}`}
              >
                {time}
              </button>
            ))}
          </div></div>
        </div>
      </div>
      {/* Right Column: Sidebar */}
      <aside className="space-y-stack-md">
        <div className="glass-card rounded-xl p-stack-md sticky top-32">
          <h3 className="font-headline-lg text-headline-lg text-primary-fixed mb-stack-md">
            Booking Summary
          </h3>
          <div className="space-y-stack-sm mb-stack-lg">
            {/* Service Info */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-high/30">
              <div className="w-12 h-12 rounded bg-secondary/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">
                  fitness_center
                </span>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-secondary">
                  Service
                </p>
                <p className="font-title-lg text-title-lg">Elite Performance</p>
                <p className="text-on-surface/60">$150.00</p>
              </div>
            </div>
            {/* Trainer Info */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-high/30">
              <img
                alt="Julian Vane"
                className="w-12 h-12 rounded-full object-cover border border-secondary/20"
                data-alt="A professional male fitness coach with an athletic build and focused expression, posing in a high-end luxury gym environment. The lighting is dramatic and moody with warm gold highlights on his silhouette, reflecting a premium athletic brand aesthetic. He is dressed in high-quality charcoal performance wear. The background shows blurred high-fidelity training equipment in a dark, sophisticated studio setting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQTKPGvvy5-l-AK4xUHq2jxkI1GVIg2ZU0sGIj0elOfqw-gni2G2iOFPD_doH0ZUTUIW78CA5yqPgNZz1RQhU9rfBB3qdkjLKCPuxEdedHKvundQ_HR3fRtLGevmbGfLJtjhqLbfZ5S8MOf-V0oPvwBznXY6Cpvot8xh0gjt5GFVpaZ5W6NUn8VVwxgxGdat93Xaz2nz0lFHWx8DFmlfFeIUQkiZPNCX2uXIQlowCZKeFYghFF_VApO1ZqyT7nSd9g8c5xLnuXC8k"
              />
              <div>
                <p className="font-label-caps text-label-caps text-secondary">
                  Coach
                </p>
                <p className="font-title-lg text-title-lg">Julian Vane</p>
              </div>
            </div>
            {/* Date/Time Selection Status */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10">
              <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">
                  event_available
                </span>
              </div>
               <div className="animate-pulse">
                 <p className="font-label-caps text-label-caps text-secondary">
                   Schedule
                 </p>
                {selectedDate && selectedTime ? (
  <p className="font-body-md text-body-md text-secondary-fixed italic">
    {selectedDate.day}-{selectedDate.month}-{selectedDate.year} • {selectedTime}
  </p>
) : (
  <p className="font-body-md text-body-md text-secondary-fixed italic">
    Selection in progress...
  </p>
)}
               </div>
            </div>
          </div>
          <div className="border-t border-secondary/20 pt-stack-sm mb-stack-md">
            <div className="flex justify-between items-center">
              <span className="text-on-surface/60 font-body-md">
                Total Price
              </span>
              <span className="font-headline-lg text-headline-lg text-secondary-fixed">
                $150.00
              </span>
            </div>
          </div>
           <button
             onClick={() => {
               if (selectedDate && selectedTime) {
     setDateTime({
  date: `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(selectedDate.day).padStart(2, "0")}`,
  time: selectedTime,
});
                 navigate('/details');
               }
             }}
             disabled={!(selectedDate && selectedTime)}
             className={`w-full ${selectedDate && selectedTime ? 'bg-secondary text-on-secondary' : 'bg-surface-container/50 text-on-surface/40'} py-4 rounded font-label-caps text-label-caps tracking-widest transition-all flex items-center justify-center hover:scale-[1.02] active:scale-[0.98]`}
           >
             Continue to Details
           </button>
          <p className="text-center text-[10px] text-on-surface/40 mt-4 font-label-caps">
            Step 3 of 4: All bookings are subject to our 24h cancellation
            policy.
          </p>
        </div>
      </aside>
    
  </main>
  {/* Footer */}
  <footer className="w-full mt-stack-lg border-t border-secondary/10 bg-surface-container-lowest/80 backdrop-blur-[20px] px-margin-desktop py-stack-md flex flex-col md:flex-row justify-between items-center gap-stack-sm">
    <div className="font-headline-lg text-headline-lg text-secondary-fixed">
      LuxeBook
    </div>
    <p className="text-on-surface/60 font-body-md text-body-md">
      © 2024 LuxeBook Fitness. Excellence in Motion.
    </p>
    <div className="flex gap-stack-md">
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
  </footer>
</>

  );
}

export default DateTimeSelection;

