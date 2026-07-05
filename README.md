# LILIX Consulting - MERN Stack Website Project

## 📋 Project Overview

A modern, professional website for LILIX Consulting, a consulting agency located in Mohammadia Mall, Third Story, Local 1144, Mohammadia, Algiers, Algeria. The website showcases the agency's services, expertise, and provides a platform for client engagement.

## 🏗️ Project Structure

```
lilix-consulting/
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── assets/
│   │       ├── images/
│   │       └── logos/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   └── ScrollToTop.jsx
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── AboutSection.jsx
│   │   │   │   ├── ServicesSection.jsx
│   │   │   │   ├── TestimonialsSection.jsx
│   │   │   │   └── ContactSection.jsx
│   │   │   ├── services/
│   │   │   │   ├── ServicesList.jsx
│   │   │   │   ├── ServiceDetail.jsx
│   │   │   │   └── ServiceCard.jsx
│   │   │   ├── about/
│   │   │   │   ├── AboutUs.jsx
│   │   │   │   ├── TeamMembers.jsx
│   │   │   │   └── MissionVision.jsx
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.jsx
│   │   │   │   ├── LocationInfo.jsx
│   │   │   │   └── MapComponent.jsx
│   │   │   └── admin/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── ServiceManagement.jsx
│   │   │       ├── MessageManagement.jsx
│   │   │       └── Login.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── ServicesPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── AdminPage.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ServiceContext.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useServices.js
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── validators.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── themes.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── .env
│   └── tailwind.config.js
│
├── server/                          # Node.js Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── passport.js
│   │   │   └── cloudinary.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Service.js
│   │   │   ├── Message.js
│   │   │   ├── Testimonial.js
│   │   │   └── Project.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── serviceController.js
│   │   │   ├── messageController.js
│   │   │   ├── testimonialController.js
│   │   │   └── projectController.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── serviceRoutes.js
│   │   │   ├── messageRoutes.js
│   │   │   ├── testimonialRoutes.js
│   │   │   └── projectRoutes.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── upload.js
│   │   ├── utils/
│   │   │   ├── emailService.js
│   │   │   └── validation.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── docker/
│   ├── Dockerfile.client
│   ├── Dockerfile.server
│   └── docker-compose.yml
│
├── README.md
├── .gitignore
└── LICENSE
```

## 🚀 Technology Stack

### Frontend

- **React 18** with Hooks
- **React Router DOM v6** for navigation
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **React Hook Form** for form handling
- **React Query** for data fetching
- **Framer Motion** for animations
- **React Leaflet** for maps integration

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Nodemailer** for email services
- **Multer** for file uploads
- **Cloudinary** for image hosting

### Development Tools

- **Vite** as build tool
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks
- **Jest** for testing

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/lilix-consulting.git
cd lilix-consulting
```

### Step 2: Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

#### Configure `.env` file:

```env
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/lilix_consulting
# or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lilix_consulting

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin credentials (for initial setup)
ADMIN_EMAIL=admin@lilixconsulting.dz
ADMIN_PASSWORD=admin123456
```

### Step 3: Frontend Setup

```bash
# Navigate to client directory (from root)
cd ../client

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

#### Configure `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Step 4: Database Setup

```bash
# Start MongoDB (local installation)
mongod

# Or use MongoDB Atlas (cloud)
# Create a cluster and get connection string
# Update MONGODB_URI in .env
```

### Step 5: Run the Application

#### Development Mode (Both client and server):

**Option 1: Run separately**

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

**Option 2: Run concurrently (from root)**

```bash
# Install concurrently globally
npm install -g concurrently

# Run both
npm run dev
# Or with a script in root package.json
```

#### Production Build:

```bash
# Build frontend
cd client
npm run build

# Start server (serves static files)
cd ../server
npm start
```

### Step 6: Docker Setup (Optional)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build individually
docker build -t lilix-client -f docker/Dockerfile.client .
docker build -t lilix-server -f docker/Dockerfile.server .
docker run -p 3000:3000 lilix-client
docker run -p 5000:5000 lilix-server
```

## 🎯 Key Features

### Client Features

- **Responsive Design**: Mobile-first approach
- **Multi-language Support**: Arabic, French, English
- **Interactive Components**: Smooth animations and transitions
- **Contact Form**: Email integration with validation
- **Service Showcase**: Dynamic service listing
- **Client Testimonials**: User feedback display
- **Location Map**: Interactive map with Google Maps integration
- **Blog/News Section**: Company updates and articles

### Admin Features

- **Dashboard**: Overview of site metrics
- **Service Management**: CRUD operations for services
- **Message Management**: View and respond to inquiries
- **Testimonial Management**: Approve and display testimonials
- **User Management**: Admin user management
- **Analytics**: Basic site statistics

## 📝 API Endpoints

### Authentication

```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
GET    /api/auth/me           - Get current user
POST   /api/auth/forgot-password - Forgot password
POST   /api/auth/reset-password/:token - Reset password
```

### Services

```
GET    /api/services          - Get all services
GET    /api/services/:id      - Get single service
POST   /api/services          - Create service (Admin)
PUT    /api/services/:id      - Update service (Admin)
DELETE /api/services/:id      - Delete service (Admin)
```

### Messages

```
POST   /api/messages          - Send contact message
GET    /api/messages          - Get all messages (Admin)
GET    /api/messages/:id      - Get single message (Admin)
DELETE /api/messages/:id      - Delete message (Admin)
```

### Testimonials

```
GET    /api/testimonials      - Get all testimonials
POST   /api/testimonials      - Create testimonial
PUT    /api/testimonials/:id  - Update testimonial (Admin)
DELETE /api/testimonials/:id  - Delete testimonial (Admin)
```

### Projects

```
GET    /api/projects          - Get all projects
GET    /api/projects/:id      - Get single project
POST   /api/projects          - Create project (Admin)
PUT    /api/projects/:id      - Update project (Admin)
DELETE /api/projects/:id      - Delete project (Admin)
```

## 🔧 Environment Variables

### Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_CLOUDINARY_URL=your_cloudinary_url
VITE_SENTRY_DSN=your_sentry_dsn (optional)
```

### Server (.env)

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/lilix_consulting
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ADMIN_EMAIL=admin@lilixconsulting.dz
ADMIN_PASSWORD=admin123456
```

## 🧪 Testing

### Run Backend Tests

```bash
cd server
npm test
```

### Run Frontend Tests

```bash
cd client
npm test
```

### End-to-End Testing

```bash
npm run test:e2e
```

## 🚢 Deployment

### Deploy to Vercel (Frontend)

```bash
cd client
npm run build
vercel --prod
```

### Deploy to Heroku (Backend)

```bash
cd server
heroku create lilix-consulting-api
heroku config:set MONGODB_URI=your_mongodb_uri
git push heroku main
```

### Deploy to Netlify (Frontend)

```bash
cd client
npm run build
netlify deploy --prod
```

### Deploy with Docker

```bash
# Build images
docker-compose build

# Push to registry
docker push yourregistry/lilix-client
docker push yourregistry/lilix-server

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

## 📊 Database Models

### User Model

```javascript
{
  name: String,
  email: String,
  password: String,
  role: ['user', 'admin', 'superadmin'],
  avatar: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Service Model

```javascript
{
  title: { en: String, ar: String, fr: String },
  description: { en: String, ar: String, fr: String },
  icon: String,
  image: String,
  features: [String],
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Message Model

```javascript
{
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: ['pending', 'read', 'replied'],
  repliedBy: ObjectId,
  repliedAt: Date,
  createdAt: Date
}
```

### Testimonial Model

```javascript
{
  clientName: String,
  clientPosition: String,
  clientCompany: String,
  clientImage: String,
  content: String,
  rating: Number,
  isApproved: Boolean,
  createdAt: Date
}
```

### Project Model

```javascript
{
  title: { en: String, ar: String, fr: String },
  description: { en: String, ar: String, fr: String },
  category: String,
  images: [String],
  client: String,
  date: Date,
  isActive: Boolean,
  createdAt: Date
}
```

## 🎨 Design System

### Color Palette

- **Primary**: #1a365d (Dark Blue)
- **Secondary**: #2b6cb0 (Blue)
- **Accent**: #ecc94b (Gold)
- **Success**: #48bb78 (Green)
- **Warning**: #ed8936 (Orange)
- **Error**: #fc8181 (Red)
- **Dark**: #1a202c
- **Light**: #f7fafc

### Typography

- **Font Family**: 'Poppins', sans-serif
- **Heading Font**: 'Playfair Display', serif
- **Arabic Font**: 'Amiri', serif
- **French Font**: 'Roboto', sans-serif

## 🔒 Security Features

- JWT-based authentication
- Password encryption with bcrypt
- XSS protection
- Helmet.js for security headers
- Rate limiting
- Input validation
- CORS configuration
- Environment variables for sensitive data

## 📈 Performance Optimizations

- Code splitting with React.lazy
- Image optimization with Cloudinary
- CDN for static assets
- Gzip compression
- Caching strategies
- Lazy loading for images
- React.memo for components

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   ```bash
   # Check if MongoDB is running
   sudo systemctl status mongod
   # Start MongoDB
   sudo systemctl start mongod
   ```

2. **Port Already in Use**

   ```bash
   # Find process using port 5000
   lsof -i :5000
   # Kill process
   kill -9 PID
   ```

3. **Environment Variables Not Loading**

   ```bash
   # Ensure .env file is in correct directory
   # Restart the application
   ```

4. **CORS Issues**
   ```bash
   # Update CORS configuration in server.js
   # Add your frontend URL to allowed origins
   ```

## 📚 Additional Documentation

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)

## 👥 Team

- **Project Lead**: [Name]
- **Frontend Developers**: [Team Members]
- **Backend Developers**: [Team Members]
- **UI/UX Designer**: [Name]

## 📄 License

This project is proprietary and confidential. All rights reserved by LILIX Consulting.

## 📞 Contact

**LILIX Consulting**
📍 Mohammadia Mall, Third Story, Local 1144
Mohammadia, Algiers, Algeria
📧 info@lilixconsulting.dz
📱 +213 XXX XXX XXX

---

## 🚀 Quick Start Commands

```bash
# Clone repository
git clone https://github.com/yourusername/lilix-consulting.git
cd lilix-consulting

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install

# Setup environment variables
cp server/.env.example server/.env
cp client/.env.example client/.env

# Edit .env files with your credentials

# Start development servers
cd ../server && npm run dev &
cd ../client && npm run dev &

# Access application
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
# Admin Panel: http://localhost:5173/admin
```

---

_Last Updated: January 2026_  
_Version: 1.0.0_
