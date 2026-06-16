import { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [service, setService] = useState(null);
  const [trainer, setTrainer] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [memberDetails, setMemberDetails] = useState(null);

  const reset = () => {
    setService(null);
    setTrainer(null);
    setDateTime(null);
    setMemberDetails(null);
  };

  return (
    <BookingContext.Provider
      value={{ service, setService, trainer, setTrainer, dateTime, setDateTime, memberDetails, setMemberDetails, reset }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}

export default BookingContext;
