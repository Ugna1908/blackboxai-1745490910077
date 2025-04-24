# React Booking App

This project is a React application designed for scheduling appointments. It includes a user-friendly booking form, an admin dashboard for managing bookings, and notification services for confirming appointments via WhatsApp and email.

## Features

- **Homepage**: A beautifully designed homepage that replicates the original website's layout.
- **Booking Form**: Users can schedule appointments through a simple and intuitive form.
- **Calendar Integration**: A calendar component allows users to select appointment dates easily.
- **Admin Dashboard**: Admins can manage bookings, view available timings, and edit or delete appointments.
- **Notifications**: Appointment confirmations are sent via WhatsApp and email.

## Project Structure

```
react-booking-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── BookingForm
│   │   │   ├── BookingForm.tsx
│   │   │   └── Calendar.tsx
│   │   ├── AdminDashboard
│   │   │   ├── Dashboard.tsx
│   │   │   └── ManageBookings.tsx
│   │   └── Homepage
│   │       └── Homepage.tsx
│   ├── pages
│   │   ├── Admin.tsx
│   │   ├── Booking.tsx
│   │   └── Home.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── notificationService.ts
│   ├── styles
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 5.6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/react-booking-app.git
   ```
2. Navigate to the project directory:
   ```
   cd react-booking-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```
This will generate a `build` folder containing the optimized application.

## Usage

- Navigate to the homepage to view the services offered.
- Use the booking form to schedule an appointment.
- Admins can access the dashboard to manage bookings.

## License

This project is licensed under the MIT License. See the LICENSE file for details.