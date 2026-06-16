# LuxeBook – Luxury Fitness Booking Platform

LuxeBook is a full-stack luxury fitness booking platform designed for premium wellness studios and elite training facilities. The application provides a seamless booking experience for members while offering administrators a powerful dashboard to manage bookings, trainers, and member activity.

## Features

### Member Experience

* Luxury landing page
* Trainer selection
* Date and time slot booking
* Member details collection
* Payment interface
* Booking confirmation

### Admin Dashboard

* Live booking feed
* Real-time booking management
* Booking status updates

  * Confirmed
  * Completed
  * Cancelled
* Delete booking functionality
* Dashboard statistics

  * Total bookings
  * Unique members
* Luxury UI/UX design

### Backend

* Node.js
* Express.js
* REST API architecture
* MySQL database integration

### Database Features

* Store bookings
* Update booking status
* Delete bookings
* Retrieve booking history
* Dashboard analytics

## Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Context API

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Development Tools

* Vite
* VS Code

## Project Structure

```text
luxebook-app
│
├── src
│   ├── pages
│   ├── components
│   ├── contexts
│   ├── assets
│   └── styles
│
├── backend
│   ├── server.js
│   └── package.json
│
├── public
├── package.json
└── README.md
```

## Installation

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

## Database Setup

1. Install MySQL Server.
2. Create a database named:

```sql
CREATE DATABASE luxebook;
```

3. Create the bookings table.

4. Update database credentials in `server.js`.

## Current Functionality

* Create Booking
* Read Bookings
* Update Booking Status
* Delete Booking

The project currently implements full CRUD functionality for booking management.

## Future Enhancements

* Admin Authentication
* Search and Filter Bookings
* Payment Gateway Integration
* Trainer Availability Management
* Analytics Dashboard
* Email Notifications
* Member Accounts
