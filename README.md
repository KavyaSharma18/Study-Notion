# 📚 StudyNotion - EdTech Platform

![StudyNotion Logo](public/logo.png)

A comprehensive EdTech platform built with the MERN stack, enabling seamless course creation, enrollment, and learning experiences. StudyNotion provides a robust learning management system for both instructors and students.

## 🌟 Features

### For Students
- 📖 **Course Enrollment**: Browse and enroll in various courses
- 💰 **Secure Payments**: Integrated Razorpay payment gateway
- 📊 **Progress Tracking**: Track learning progress with visual indicators
- 🎥 **Video Learning**: Stream course videos with playback controls
- ⭐ **Rating & Reviews**: Rate courses and provide feedback
- 🛒 **Shopping Cart**: Add multiple courses to cart before purchase
- 👤 **Profile Management**: Manage personal information and preferences

### For Instructors
- 📝 **Course Creation**: Create comprehensive courses with multiple sections
- 📹 **Content Upload**: Upload videos, images, and documents
- 📈 **Analytics Dashboard**: Track student enrollment and revenue
- 💵 **Revenue Tracking**: View earnings and payment analytics

### General Features
- 🔐 **Secure Authentication**: JWT-based authentication with OTP verification
- 📱 **Responsive Design**: Mobile-first responsive design
- 🌙 **Modern UI**: Clean and intuitive user interface
- 📧 **Email Notifications**: Automated email confirmations and updates
- 🔍 **Course Search**: Advanced search and filtering capabilities

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern React with hooks and functional components
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling and validation
- **Chart.js** - Data visualization
- **React Icons** - Icon library
- **Swiper** - Touch slider component

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email sending
- **Multer** - File upload handling

### Third-Party Integrations
- **Cloudinary** - Media storage and management
- **Razorpay** - Payment gateway integration
- **Gmail SMTP** - Email service



## ⚙️ Environment Variables

### Frontend (.env)
Create a `.env` file in the root directory:
```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

### Backend (server/.env)
Create a `.env` file in the server directory:
```env
# Database Configuration
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/StudyNotionDB

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key

# Email Configuration (Gmail SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_gmail_app_password

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=StudyNotion

# Razorpay Configuration
RAZORPAY_KEY=rzp_test_your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

# Server Configuration
PORT=4000
```
## 📁 Project Structure

```
Study-Notion/
│
├── public/                 # Static files
├── src/                    # Frontend source code
│   ├── assets/            # Images, logos, and static assets
│   ├── components/        # Reusable components
│   │   ├── Common/        # Common components (Navbar, Footer)
│   │   └── core/          # Feature-specific components
│   ├── data/              # Static data and configurations
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API calls and external services
│   ├── slices/            # Redux slices
│   └── utils/             # Utility functions
│
├── server/                 # Backend source code
│   ├── config/            # Database and service configurations
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── mail/              # Email templates
│
└── README.md              # Project documentation
```

Made with ❤️ by Kavya Sharma
