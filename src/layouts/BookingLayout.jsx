import { Outlet } from 'react-router-dom';
import { BookingProvider } from '../contexts/BookingContext';

function BookingLayoutWrapper() {
  return (
    <BookingProvider>
      <Outlet />
    </BookingProvider>
  );
}

export default BookingLayoutWrapper;
