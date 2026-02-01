# 🚗 CarRental - Luxury Car Rental Platform

A full-stack car rental web application built with React, Node.js, Express, and MongoDB. Users can browse, search, and book luxury cars, while car owners can list and manage their vehicles.

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/1.png)

### Available Cars
![Cars Page](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/2.png)

### Car Details & Booking
![Car Details](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/3.png)

### My Bookings
![My Bookings](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/5.png)

### Owner Dashboard
![Owner Dashboard](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/6.png)

### Add Car
![Add Car](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/7.png)

### Manage Cars
![Manage Cars](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/8.png)

### Manage Bookings
![Manage Bookings](https://github.com/mdashad0/Car-Rental/blob/main/screenshots/4.png)

## ✨ Features

### For Customers
- 🔍 **Browse Cars** - View all available luxury cars with detailed information
- 📅 **Search by Date & Location** - Find cars available for specific dates and pickup locations
- 🚙 **Car Details** - View comprehensive car information including features, specifications, and pricing
- 📝 **Easy Booking** - Simple booking process with date selection
- 📋 **My Bookings** - Track all your car rentals and booking status

### For Car Owners
- 📊 **Dashboard** - Overview of your car listings and bookings
- ➕ **Add Cars** - List your luxury cars for rent with images and details
- 🚗 **Manage Cars** - Edit, toggle availability, or remove car listings
- 📑 **Manage Bookings** - Approve, confirm, or cancel booking requests

### General
- 🔐 **User Authentication** - Secure login and registration system
- 🎨 **Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Smooth Animations** - Enhanced UX with Framer Motion animations
- 🔔 **Toast Notifications** - Real-time feedback for user actions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **ImageKit** - Image storage and optimization
- **Multer** - File uploads

## 📁 Project Structure

```
Car Rental/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and static data
│   │   ├── components/    # Reusable UI components
│   │   │   └── owner/     # Owner-specific components
│   │   ├── context/       # React Context (AppContext)
│   │   └── pages/         # Page components
│   │       └── owner/     # Owner dashboard pages
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── server/                 # Backend Node.js application
    ├── configs/           # Database and ImageKit config
    ├── controllers/       # Route handlers
    ├── middleware/        # Auth and file upload middleware
    ├── models/            # Mongoose schemas
    ├── routes/            # API routes
    ├── uploads/           # Temporary file uploads
    ├── package.json
    └── server.js          # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- ImageKit account (for image uploads)

### Environment Variables

#### Client (`client/.env`)
```env
VITE_BASE_URL=http://localhost:5000
VITE_CURRENCY=₹
```

#### Server (`server/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mdashad0/car-rental.git
   cd car-rental
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   - Create `.env` files in both `client` and `server` directories
   - Add the required environment variables as shown above

5. **Start the development servers**

   In the server directory:
   ```bash
   npm run server
   ```

   In the client directory:
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📡 API Endpoints

### User Routes (`/api/user`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | User login |
| GET | `/data` | Get user data |
| GET | `/cars` | Get all available cars |

### Owner Routes (`/api/owner`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/change-role` | Upgrade to owner role |
| POST | `/add-car` | Add new car listing |
| GET | `/cars` | Get owner's cars |
| POST | `/toggle-availability` | Toggle car availability |
| DELETE | `/delete-car` | Delete car listing |
| POST | `/update-image` | Update profile image |

### Booking Routes (`/api/bookings`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/check-availability` | Check car availability |
| POST | `/create` | Create new booking |
| GET | `/user` | Get user's bookings |
| GET | `/owner` | Get owner's bookings |
| POST | `/change-status` | Update booking status |

## 🎯 Key Features Explained

### Authentication Flow
- Users register/login with email and password
- JWT tokens are stored in localStorage
- Protected routes require valid tokens
- Owners can upgrade their role to list cars

### Booking System
- Users select pickup and return dates
- System checks car availability for the date range
- Price is calculated based on daily rate × number of days
- Owners can confirm or cancel bookings

### Image Management
- Car images are uploaded via ImageKit
- Optimized delivery with automatic transformations
- Owner profile images supported

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**MD ASHAD**

- GitHub: [@mdashad0](https://github.com/yourusername)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [MongoDB](https://www.mongodb.com/)
- [ImageKit](https://imagekit.io/)

---

⭐ Star this repository if you found it helpful!
