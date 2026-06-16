import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookingPortal from "./pages/BookingPortal";
import TrainerSelection from "./pages/TrainerSelection";
import DateTimeSelection from "./pages/DateTimeSelection";
import MemberDetails from "./pages/MemberDetails";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import AdminDashboard from "./pages/AdminDashboard";
import Programs from "./pages/Programs";
import Membership from "./pages/Membership";
import Transformation from "./pages/Transformation";
import BookingLayoutWrapper from "./layouts/BookingLayout";
import RequireAdmin from "./components/RequireAdmin";
import Trainers from "./pages/Trainers";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    const revealOnScroll = () => {
      document.querySelectorAll(".reveal").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    const activateInitialReveals = () => {
      document.querySelectorAll(
        ".reveal-logo, .reveal-headline, .reveal-tagline, .reveal-cta"
      ).forEach((element) => {
        element.classList.add("active");
      });
    };

    const createParticles = () => {
      const containers = document.querySelectorAll(
        "#particle-container, #particles-container"
      );
      containers.forEach((container) => {
        if (container.dataset.particlesCreated) return;
        container.dataset.particlesCreated = "true";
        for (let i = 0; i < 25; i += 1) {
          const particle = document.createElement("span");
          const size = 4 + Math.random() * 10;
          particle.className = "particle";
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.opacity = `${0.05 + Math.random() * 0.35}`;
          particle.style.animation = `float ${6 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`;
          container.appendChild(particle);
        }
      });
    };

    activateInitialReveals();
    revealOnScroll();
    createParticles();
    window.addEventListener("scroll", revealOnScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<BookingLayoutWrapper />}>
          <Route path="/booking" element={<BookingPortal />} />
          <Route path="/trainer" element={<TrainerSelection />} />
          <Route path="/datetime" element={<DateTimeSelection />} />
          <Route path="/details" element={<MemberDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/transformation" element={<Transformation />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;