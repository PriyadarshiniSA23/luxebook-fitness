import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
  totalBookings: 0,
  uniqueMembers: 0,
  revenue: 0,
});
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this booking?"
  );

  if (!confirmDelete) return;

  try {
    const response = await fetch(
      `http://localhost:5000/api/bookings/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data.success) {
      setBookings(
        bookings.filter((booking) => booking.id !== id)
      );
    }
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
  fetch("http://localhost:5000/api/bookings")
    .then((res) => res.json())
    .then((data) => setBookings(data))
    .catch((err) => console.error(err));
}, []);
  useEffect(() => {
  fetch("http://localhost:5000/api/dashboard-stats")
    .then((res) => res.json())
    .then((data) => setStats(data))
    .catch((err) => console.error(err));
}, []);

const updateStatus = async (id, status) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/bookings/${id}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await response.json();

    if (data.success) {
      setBookings(
        bookings.map((booking) =>
          booking.id === id
            ? { ...booking, status }
            : booking
        )
      );
    }
  } catch (error) {
    console.error(error);
  }
};

  console.log(bookings);
  return (
    <>
  {/* Sidebar Navigation */}
  <aside className="h-screen w-72 flex-col fixed left-0 top-0 bg-surface-container/40 backdrop-blur-[20px] border-r border-secondary/20 shadow-[30px_0_30px_rgba(4,14,31,0.2)] flex flex-col py-stack-md z-50">
    <div className="px-8 mb-12">
      <div className="flex items-center gap-4">
        <img
          alt="LuxeBook Logo"
          className="w-10 h-10 object-contain"
          src="https://lh3.googleusercontent.com/aida/AP1WRLuZq8QKzjx4M5hqpR4jiZ_lcatND3iQBC5KHog0P--4mOAqMoSgJ4ZnpInPtCagxa-nmMvl01gZMD-wawEV3agvu7Aqepyy3seT9IOHrO4-L2lIWa73CapzfSLau0lJw8eyP7msuUGTm3wtqQOLiu93pExxHBla0tk24s2wezF5CrQdqaO-RfmQv-aRaKdTWNPpyYAtZ8cSPAuGKjk0x8OfUWHalLPnDPqPJGWD5T_fe-x3oYieHCH3cZo"
        />
        <div>
          <h1 className="font-display-sm text-display-sm font-bold text-secondary">
            LuxeBook
          </h1>
          <p className="font-label-caps text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
            Elite Management
          </p>
        </div>
      </div>
    </div>
    <nav className="flex-1 px-4 space-y-2">
      {/* Dashboard (Active) */}
      <button
        className="flex items-center gap-4 px-4 py-3 text-secondary font-bold border-r-2 border-secondary bg-secondary-container/10 transition-colors duration-300"
        type="button"
      >
        <span className="material-symbols-outlined">dashboard</span>
        <span className="font-body-md">Dashboard</span>
      </button>
  <Link
  to="/trainers"
  className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-medium hover:text-secondary hover:bg-secondary-container/5 transition-colors duration-300"
>
  <span className="material-symbols-outlined">event_seat</span>
  <span className="font-body-md">Elite Trainers</span>
</Link>
      <Link
        className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-medium hover:text-secondary hover:bg-secondary-container/5 transition-colors duration-300"
        to="/booking"
      >
        <span className="material-symbols-outlined">groups</span>
        <span className="font-body-md">Member Bookings</span>
      </Link>
      <button
        className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-medium hover:text-secondary hover:bg-secondary-container/5 transition-colors duration-300"
        type="button"
      >
        <span className="material-symbols-outlined">monitoring</span>
        <span className="font-body-md">Studio Performance</span>
      </button>
      <button
        className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-medium hover:text-secondary hover:bg-secondary-container/5 transition-colors duration-300"
        type="button"
      >
        <span className="material-symbols-outlined">payments</span>
        <span className="font-body-md">Financials</span>
      </button>
      <Link
        className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-medium hover:text-secondary hover:bg-secondary-container/5 transition-colors duration-300"
        to="/transformation"
      >
        <span className="material-symbols-outlined">support_agent</span>
        <span className="font-body-md">Concierge</span>
      </Link>
    </nav>
    <div className="px-4 mt-auto">
      <Link
        className="w-full py-4 bg-secondary text-on-secondary font-bold uppercase tracking-widest text-label-caps gold-glow transition-all duration-300 active:scale-[0.98]"
        to="/transformation"
      >
        New Booking
      </Link>
    </div>
  </aside>
  {/* Main Content Canvas */}
  <main className="ml-72 min-h-screen">
    {/* Top App Bar */}
    <header className="h-20 flex justify-between items-center px-margin-desktop w-full backdrop-blur-[20px] bg-surface-dim/40 border-b border-secondary/10 sticky top-0 z-40">
      <div className="flex items-center bg-surface-container-highest/20 px-4 py-2 rounded-full border border-secondary/10 w-96">
        <span className="material-symbols-outlined text-on-surface-variant mr-2">
          search
        </span>
        <input
          className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder:text-on-surface-variant/50"
          placeholder="Search members, trainers, or wings..."
          type="text"
        />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 border-r border-secondary/20 pr-8">
          <button className="text-on-surface-variant hover:text-secondary transition-opacity duration-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-secondary transition-opacity duration-200">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="text-on-surface-variant hover:text-secondary transition-opacity duration-200">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-body-md font-bold text-secondary leading-none">
              Alexander Rossi
            </p>
            <p className="font-label-caps text-[10px] text-on-surface-variant mt-1">
              Elite Status
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
            <img
              alt="Admin Avatar"
              data-alt="A professional headshot of a luxury gym manager with a confident expression, wearing a tailored charcoal suit against a soft-focus architectural background. The lighting is dramatic and expensive, reflecting a high-end corporate lifestyle. The aesthetic is clean and modern with deep tones and golden highlights."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx-G6w0FjQiW1GDwzyU2uYrFjvhXH-ISI6uQJxvzchXXXVN-JXCA-sfoXexVcmkff3-LmBJl-JQZGIeg4uFBWN5bqvLLXpYe9mfvR2HqmKGtw6zfNPTpv1SC8bnY-VP1D379tBRZ0HPh4otKSZi1Kt9XJzVPSorhwnOz2BdeF-tDmGfjwgOWeW911Qe1M1z86Q46Ei4PrPSfaWaN2qKIHLUe8V_jezuvJHpEwnwcu4X9sm0DENj0yhLVplqcOg7JySTALqozTZGCA"
            />
          </div>
        </div>
      </div>
    </header>
    <section className="p-stack-md px-margin-desktop space-y-stack-lg">
      {/* Studio Pulse Section */}
      <div className="space-y-stack-sm">
        <h2 className="font-display-sm text-headline-lg text-secondary">
          Studio Pulse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Daily Bookings */}
          <div className="glass-card p-8 shimmer-overlay">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-caps text-on-surface-variant mb-2">
                  Today's Bookings
                </p>
                <h3 className="font-display-sm text-display-sm text-secondary">
                  {stats.totalBookings}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-secondary text-sm font-bold"><span className="text-secondary font-semibold">
  Live
</span></span>
              <span className="text-on-surface-variant/60 text-sm">
                Database Synced
              </span>
            </div>
          </div>
          {/* Occupancy Rate */}
          <div className="glass-card p-8 shimmer-overlay">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-caps text-on-surface-variant mb-2">
                  Unique Members
                </p>
                <h3 className="font-display-sm text-display-sm text-secondary">
                  {stats.uniqueMembers}
                </h3>
              </div>
              <div className="relative w-16 h-16">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-surface-container-highest"
                    cx={32}
                    cy={32}
                    fill="transparent"
                    r={28}
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <circle
                    className="text-secondary drop-shadow-[0_0_8px_rgba(233,195,73,0.6)]"
                    cx={32}
                    cy={32}
                    fill="transparent"
                    r={28}
                    stroke="currentColor"
                    strokeDasharray={175}
                    strokeDashoffset={21}
                    strokeWidth={3}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-secondary">
                  LIVE
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-secondary text-sm font-bold">Elite</span>
              <span className="text-on-surface-variant/60 text-sm">
Distinct member activity
              </span>
            </div>
          </div>
          {/* Elite Trainer Availability */}
          <div className="glass-card p-8 shimmer-overlay">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label-caps text-on-surface-variant mb-2">
                  Elite Availability
                </p>
                <h3 className="font-display-sm text-display-sm text-secondary">
                  4/12
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">timer</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-error text-sm font-bold">Low</span>
              <span className="text-on-surface-variant/60 text-sm">
                Demand surge in 1h
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
        {/* Live Booking Feed */}
        <div className="lg:col-span-2 space-y-stack-sm">
          <div className="flex justify-between items-end">
            <h2 className="font-display-sm text-headline-lg text-secondary">
              Live Booking Feed
            </h2>
            <button className="text-secondary font-label-caps text-[12px] border-b border-secondary/30 pb-1">
              View All
            </button>
          </div>
          <div className="glass-card divide-y divide-secondary/10">
            {/* Booking Item 1 */}
           {bookings.slice(0, 5).map((booking) => (
  <div
    key={booking.id}
    className="p-6 flex items-center justify-between group transition-all duration-300 hover:bg-secondary-container/5"
  >
    <div className="flex items-center gap-6">
      <div>
        <h4 className="font-title-lg text-secondary">
          {booking.member_name}
        </h4>

        <p className="text-on-surface-variant text-sm">
          {new Date(booking.booking_date).toLocaleDateString("en-GB")} • {booking.booking_time}
        </p>
      </div>
    </div>

    <div className="flex items-center gap-12">
      <div className="text-right">
        <p className="text-on-surface-variant text-xs font-label-caps uppercase">
          Trainer
        </p>

        <p className="font-medium">
          {booking.trainer_name}
        </p>
      </div>

      <div className="flex items-center gap-4">

 <select
  value={booking.status || "Confirmed"}
  onChange={(e) =>
    updateStatus(
      booking.id,
      e.target.value
    )
  }
  className="bg-secondary/10 border border-secondary/20 text-secondary text-xs rounded px-3 py-1"
>
  <option value="Confirmed">
    Confirmed
  </option>

  <option value="Completed">
    Completed
  </option>

  <option value="Cancelled">
    Cancelled
  </option>
</select>

  <button
    onClick={() => handleDelete(booking.id)}
    className="text-red-400 hover:text-red-300 transition-colors duration-300"
    title="Delete Booking"
  >
    <span className="material-symbols-outlined">
      delete
    </span>
  </button>

</div>
    </div>
  </div>
))}
            {/* Booking Item 2 */}
            <div className="p-6 flex items-center justify-between group transition-all duration-300 hover:bg-secondary-container/5">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-secondary/20 overflow-hidden shrink-0">
                  <img
                    alt="Member Avatar"
                    data-alt="A close-up portrait of a high-performance male athlete with sharp features and a look of intense concentration. The lighting is dramatic and directional, casting long shadows and bright highlights on his face. The overall style is elite and cinematic, with a palette of deep navy and metallic gold accents."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuCZo8ftasdLLmUixO-BTSyhiQmBI1XJK7J228ghustXFmFC0eFFk4fyrdexUr86XtjnCfRUxvyNUj8RVHE8ay5uw8BdNMqfeU_0Qd2aF4aOoWNyWJS2-_7_7dhwtQLas0sRHjP4QQYCeQeWb_bAI-KRh_InTHwxBspVy2kCTyoTCyV9toCZuESUElv_IIuNn3nR4OvneHNW9QXo6rOVpPUhecSuJ8c7mtIjYpHB5V3zBvtGWjXYbD9AHhBSbFCBI6G4o7OHSqZbM"
                  />
                </div>
                <div>
                  <h4 className="font-title-lg text-secondary">
                    Marcus Aurelius
                  </h4>
                  <p className="text-on-surface-variant text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>{" "}
                    Recovery Suite • In Progress
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-right hidden sm:block">
                  <p className="text-on-surface-variant text-xs font-label-caps uppercase">
                    Trainer
                  </p>
                  <p className="font-medium">Self Guided</p>
                </div>
                <span className="px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-secondary-container text-on-secondary-container border border-secondary/20">
                  Active
                </span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
            {/* Booking Item 3 */}
            <div className="p-6 flex items-center justify-between group transition-all duration-300 hover:bg-secondary-container/5">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-secondary/20 overflow-hidden shrink-0">
                  <img
                    alt="Member Avatar"
                    data-alt="A striking portrait of an elegant woman in a luxury setting, showcasing a blend of fitness and fashion. Her gaze is direct and confident, illuminated by soft warm light against a dark, textured backdrop. The image exudes a sense of exclusivity and high-end living, consistent with a premium private members club."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7e28R1x75jzfjNU2SI0QsEt5Ay1dPxBQIDmvKzEZ51RpAWrODHOfTgdTK5IYc9Ut84_z6bF2y6idkgrfJh5emZJzHArfqXchD-6yyoi2HiLuPcx8ZRnH20C-UXMfGW_jQ9Q8lL_HDmqGIeGOflvPCb3V1qgQBK_K1XT406nY_rIZbhy1TwGTpJtVWpeBM_TIkmS1TS3ujdKtkmAkRf9KtguzypcNJbt9QbZkCrM94FXVxfcw3JtsrClr5Y1gZhg3gpRM7CLPK8Y8"
                  />
                </div>
                <div>
                  <h4 className="font-title-lg text-secondary">
                    Sophia Sterling
                  </h4>
                  <p className="text-on-surface-variant text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>{" "}
                    Zen Sanctuary • 11:30 AM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-right hidden sm:block">
                  <p className="text-on-surface-variant text-xs font-label-caps uppercase">
                    Trainer
                  </p>
                  <p className="font-medium">Elena Kostic</p>
                </div>
                <span className="px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-surface-container-highest/40 text-on-surface-variant border border-on-surface-variant/20">
                  Pending
                </span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Trainer Schedule Overview & Quick Actions */}
        <div className="space-y-stack-md">
          {/* Quick Actions */}
          <div className="space-y-stack-sm">
            <h2 className="font-display-sm text-headline-lg text-secondary">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <button className="flex items-center justify-between p-4 glass-card glass-card-hover group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    add_circle
                  </span>
                  <span className="font-body-md font-bold">
                    New Manual Booking
                  </span>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
                  chevron_right
                </span>
              </button>
              <button className="flex items-center justify-between p-4 glass-card glass-card-hover group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    event_repeat
                  </span>
                  <span className="font-body-md font-bold">
                    Schedule Adjustment
                  </span>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
                  chevron_right
                </span>
              </button>
              <button className="flex items-center justify-between p-4 glass-card glass-card-hover group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    send
                  </span>
                  <span className="font-body-md font-bold">
                    Member Outreach
                  </span>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
          {/* Trainer Overview */}
          <div className="space-y-stack-sm">
            <div className="flex justify-between items-end">
              <h2 className="font-display-sm text-headline-lg text-secondary">
                Elite Coaches
              </h2>
            </div>
            <div className="glass-card p-6 space-y-6">
              {/* Coach 1 */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
                    <img
                      alt="Trainer Avatar"
                      data-alt="A high-end professional portrait of an elite fitness trainer with a sophisticated yet athletic presence. He is standing in a modern, dark-themed gym environment with subtle golden lighting highlights. The composition is clean and focused, conveying authority and premium service in the wellness industry."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYPVJhYWA2PL20p3CGKjEza-rc0HRpVva6fLv1-n5fD5L04P4jaIc_D_17ijFI_vohZNf8ZwF3sB-qJYbqjqYI6JLSVJJqyM5tRXlJAqMmRArrHdbkChIT66gyhRD0SzJbC-JlTpRwjo74bnMZYrQWJo_LDBW4MGMsZePL4dJZlhif6dgYvW9f4WA2udpiZgySBA2yLXmBvEc_tpNj1yU5fTn2xTgVj45rKllG63aBwBMKHCI2QOmcGK4rsV0-Ucu3YSxq0MAjtZY"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-surface" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm">Julian Vane</p>
                    <p className="text-on-surface-variant text-[10px]">
                      8/10 slots
                    </p>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 mt-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[80%]" />
                  </div>
                </div>
              </div>
              {/* Coach 2 */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
                    <img
                      alt="Trainer Avatar"
                      data-alt="A portrait of a top-tier female trainer with a strong, graceful physique and an expression of focused professional expertise. She is positioned within a luxury boutique studio featuring minimalist glass and gold finishes. The lighting is soft and cinematic, emphasizing a premium brand identity."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD99CDN572STrWAZUn2mmYR8vvlasfxmL5pvgWnr0DbM8Zu8LrGRVb-R_x5Y64RoCctmFeBkUoPEleW7RfAVv0sbj4V-FEMqKrP-IbRHK2D1ULsG5Xa8YklosDo-IQh6Y2MTpSH7c1x8vpmtr4KdCcQv04VxdkWu2vrMwS2W7uJxX2Bw2z45eg93DB5hVzfgp3_Go8_X3HsQnLMUuQppK1ioZHW1eEhcwL11jHqbIoEV2pkb-6YU-r0EoSycksFwZF7FyazG5h8Ojk"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-error rounded-full border-2 border-surface" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm">Elena Kostic</p>
                    <p className="text-on-surface-variant text-[10px]">Full</p>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 mt-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[100%]" />
                  </div>
                </div>
              </div>
              {/* Coach 3 */}
              <div className="flex items-center gap-4 opacity-60">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden grayscale">
                    <img
                      alt="Trainer Avatar"
                      data-alt="A stylish portrait of an elite male coach, showcasing a blend of physical prowess and professional refinement. The setting is a darkened luxury fitness club with golden rim lighting. The image captured reflects an exclusive, high-performance atmosphere, with high contrast and sharp detail."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuApj5sf90LlEiIw6qc3kOpgliiYQeAWYuVspIo8Kcik-uxoj_V9WdoDO_vIkSblYsZ6xv-vNAncuWRQQn707hCAr--D2EWbYJ0OZsSTDmdx-rLCwqFDC-QV8tuq78rEh4471XfmZn9Jsr1uLrEjrUMOdhiumNxhL2DT_0tdBTVB0LiWeLcGayDq9J9Mn4ATWY1kcFVX1na1GCIip0yN3SPxIwcBSk_KNo6fLQNpkJVq2Ty6mVPe1mC31wnZSOGi2sEi6d0LYNlYhZc"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-on-surface-variant rounded-full border-2 border-surface" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm">David Sterling</p>
                    <p className="text-on-surface-variant text-[10px]">
                      Off Shift
                    </p>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 mt-2 rounded-full overflow-hidden">
                    <div className="bg-on-surface-variant h-full w-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Interactive Micro-interactions */}
</>

  );
}

export default AdminDashboard;

