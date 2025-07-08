<<<<<<< HEAD
# Muhammad Noman's Portfolio

A fully responsive portfolio website built with React, Tailwind CSS, and Node.js backend.

## Features

### Frontend
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with smooth animations
- ✅ Dark theme with purple accent
- ✅ Interactive navigation
- ✅ Contact form with backend integration
- ✅ Project showcase
- ✅ Skills display with progress bars
- ✅ Social media links

### Backend
- ✅ Node.js/Express server
- ✅ MongoDB database
- ✅ Contact form handling with email notifications
- ✅ Project management API
- ✅ Skills management API
- ✅ Admin authentication
- ✅ Rate limiting and security
- ✅ Input validation

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer
- JWT Authentication
- Express Validator
- Helmet (Security)
- CORS

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd manual-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd manual-portfolio/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/portfolio

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

   # Email Configuration (for contact form notifications)
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Admin Configuration
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ADMIN_EMAIL=nomanrehann112233@gmail.com

   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start MongoDB:**
   - Local: Make sure MongoDB is running on your system
   - Cloud: Use MongoDB Atlas or similar service

5. **Start the backend server:**
   ```bash
   npm run dev
   ```

6. **Verify the backend is running:**
   Navigate to `http://localhost:5000/api/health`

## API Endpoints

### Public Endpoints
- `GET /api/health` - Health check
- `GET /api/projects` - Get all active projects
- `GET /api/skills` - Get all active skills
- `POST /api/contact` - Submit contact form

### Admin Endpoints (require authentication)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/contact` - Get all contacts
- `PATCH /api/contact/:id/status` - Update contact status
- `DELETE /api/contact/:id` - Delete contact
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

## Responsive Design

The portfolio is fully responsive with the following breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible sidebar
- Touch-friendly navigation
- Optimized text sizes
- Mobile-first grid layouts

### Tablet Features
- Adaptive layouts
- Optimized spacing
- Touch-friendly interactions

### Desktop Features
- Full sidebar navigation
- Hover effects
- Larger text and spacing
- Multi-column layouts

## Deployment

### Frontend Deployment
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Deploy to:
   - Heroku
   - Railway
   - DigitalOcean
   - AWS EC2

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  purple: {
    400: '#c084fc',
    600: '#9333ea',
    700: '#7c3aed',
  }
}
```

### Content
- Update personal information in `src/App.jsx`
- Add/remove projects in the Portfolio section
- Modify skills and their levels
- Update contact information

### Styling
- Modify Tailwind classes for layout changes
- Update animations in Framer Motion components
- Customize CSS in `src/index.css`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Name**: Muhammad Noman
- **Email**: nomanrehann112233@gmail.com
- **Phone**: 0317-4961945
- **Location**: Sham Nager, Lahore

## Support

If you encounter any issues or have questions, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

**Note**: This portfolio is designed to showcase web development skills and can be easily customized for other developers' use.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 51b406e6ba39a5595d7bc02e480e2147372d7205
