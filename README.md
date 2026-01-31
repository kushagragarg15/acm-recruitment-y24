# 🎓 ACM LNMIIT Y24 Recruitment Portal

<div align="center">

![ACM LNMIIT Banner]([https://via.placeholder.com/800x200/219EBC/FFFFFF?text=ACM+LNMIIT+Y24+Recruitment+Portal](https://divyanshrastogi51.github.io/ACM-Website/))

**A modern, full-stack web application for managing ACM Student Chapter LNMIIT's Y24 batch recruitment process**

<div align="center">

**🌟 [TRY IT NOW - LIVE APPLICATION](https://acm-recruitment-y24.vercel.app) 🌟**

</div>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-success?style=for-the-badge)](https://acm-recruitment-y24.vercel.app)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://acm-recruitment-y24.vercel.app)
[![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)](https://acm-recruitment-y24.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Landing Page
![Landing Page](https://via.placeholder.com/600x400/8ECAE6/023047?text=Landing+Page+Screenshot)

### 📝 Submission Form
![Submission Form](https://via.placeholder.com/600x400/FFB703/023047?text=Submission+Form+Screenshot)

### 📊 Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/600x400/219EBC/FFFFFF?text=Admin+Dashboard+Screenshot)

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 👨‍🎓 For Students
- 🎯 **Multi-Domain Applications** - Apply for up to 5 different domains
- 📱 **Responsive Design** - Perfect on mobile, tablet & desktop
- ⚡ **Real-time Validation** - Instant feedback on form inputs
- 🔄 **Smart Forms** - Dynamic fields based on selected domains
- 📊 **Submission Tracking** - Check status and prevent duplicates
- 🏆 **Contest Registration** - Special CP contest signup

</td>
<td width="50%">

### 👨‍💼 For Administrators
- 🔐 **Secure Dashboard** - Protected admin panel
- 📈 **Advanced Analytics** - Charts, metrics & insights
- 🔍 **Smart Filtering** - Search & filter submissions
- 📤 **Data Export** - CSV export for analysis
- 🔄 **Real-time Updates** - Live submission tracking
- 🛡️ **Security Features** - Rate limiting & validation

</td>
</tr>
</table>

## 🏗️ Tech Stack

<div align="center">

| Frontend | Backend | Database | Deployment |
|----------|---------|----------|------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) |
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | ![Neon](https://img.shields.io/badge/Neon-00E599?style=flat&logo=neon&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white) |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | ![API Routes](https://img.shields.io/badge/API_Routes-FF6B6B?style=flat) | ![Prisma](https://img.shields.io/badge/Raw_SQL-4169E1?style=flat) | ![CI/CD](https://img.shields.io/badge/CI/CD-2088FF?style=flat&logo=github-actions&logoColor=white) |

</div>

### 🌐 Live Application

<div align="center">

**🚀 [Visit Live Application](https://acm-recruitment-y24.vercel.app)**

[![Application Status](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A//acm-recruitment-y24.vercel.app)](https://acm-recruitment-y24.vercel.app)

**Quick Links:**
- 🏠 [Landing Page](https://acm-recruitment-y24.vercel.app)
- 📝 [Submit Application](https://acm-recruitment-y24.vercel.app/submit)
- 🔐 [Admin Login](https://acm-recruitment-y24.vercel.app/admin/login)

</div>

<details>
<summary><b>📋 Prerequisites</b></summary>

- Node.js 18+ 
- npm/pnpm/yarn
- PostgreSQL database (Neon recommended)
- Git

</details>

### 1️⃣ Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/acm-recruitment-portal.git
cd acm-recruitment-portal

# Install dependencies
npm install
# or
pnpm install
```

### 2️⃣ Environment Setup

```bash
# Copy environment template
cp .env.example .env.local
```

Update `.env.local`:
```env
DATABASE_URL="postgresql://username:password@host:port/database"
ADMIN_USERNAME="your-admin-username"
ADMIN_PASSWORD="your-secure-password"
NODE_ENV="development"
```

### 3️⃣ Database Setup

```bash
# Run SQL scripts in order:
# 1. scripts/create-submissions-table.sql
# 2. scripts/add-competitive-programming-fields.sql  
# 3. scripts/update-creative-domain-schema.sql
```

### 4️⃣ Run Development Server

```bash
npm run dev
# or
pnpm dev
```

🎉 **Open [https://acm-recruitment-y24.vercel.app](https://acm-recruitment-y24.vercel.app) to see it live!**

> **🌟 Live Demo**: The application is already deployed and running at [acm-recruitment-y24.vercel.app](https://acm-recruitment-y24.vercel.app)

## 📁 Project Structure

```
acm-recruitment-portal/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 admin/             # Admin dashboard
│   │   ├── 📁 login/         # Login page
│   │   └── 📄 page.tsx       # Dashboard
│   ├── 📁 api/               # API routes
│   │   ├── 📁 admin/         # Admin APIs
│   │   ├── 📁 submissions/   # Submission APIs
│   │   └── 📄 submit/        # Main submit API
│   ├── 📁 submit/            # Submission form
│   ├── 📄 layout.tsx         # Root layout
│   └── 📄 page.tsx           # Landing page
├── 📁 components/            # React components
│   ├── 📁 admin/            # Admin components
│   ├── 📁 icons/            # Custom icons
│   └── 📁 ui/               # UI components
├── 📁 lib/                  # Utilities
│   ├── 📄 auth.ts           # Authentication
│   ├── 📄 database.ts       # Database ops
│   └── 📄 utils.ts          # Helpers
└── 📁 scripts/              # SQL scripts
    └── 📄 *.sql             # Database migrations
```

## 📊 Database Schema

### Submissions Table
```sql
CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    roll_number VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    domain VARCHAR(100) NOT NULL,
    task_option VARCHAR(255),
    project_title VARCHAR(255),
    project_description TEXT,
    project_link VARCHAR(500),
    github_link VARCHAR(500),
    additional_links TEXT,
    technologies_used TEXT,
    challenges_faced TEXT,
    learning_outcomes TEXT,
    additional_comments TEXT,
    -- Competitive Programming fields
    codeforces_profile VARCHAR(255),
    codeforces_rating VARCHAR(50),
    leetcode_profile VARCHAR(255),
    leetcode_rating VARCHAR(50),
    -- Metadata
    submission_status VARCHAR(50) DEFAULT 'submitted',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Constraints
    UNIQUE(roll_number, domain)
);
```

## 🎯 Recruitment Domains

<div align="center">

| Domain | Description | Key Features |
|--------|-------------|--------------|
| 💻 **Web Development** | Frontend & Full-stack projects | Responsive design, Modern frameworks, API integration |
| 🤖 **AI/ML** | Machine Learning models | Data analysis, Model training, Performance metrics |
| ✨ **Generative AI** | AI-powered applications | API integration, Content generation, User experience |
| 🎨 **Creative Domain** | Design & Media projects | Visual design, Brand consistency, Creative portfolio |
| 🏆 **Competitive Programming** | Contest-based evaluation | Live contest, Problem solving, Algorithmic thinking |

</div>

<details>
<summary><b>📝 Detailed Domain Requirements</b></summary>

### 💻 Web Development
**Choose one option:**
- **MNTN Landing Page**: Pixel-perfect Figma implementation
- **College Achievement Portal**: Two-role system with OTP auth

**Requirements:**
- ✅ Responsive across all devices
- ✅ Modern HTML/CSS/JS practices  
- ✅ Interactive elements & animations
- ✅ Performance optimization

### 🤖 AI/ML
**Choose one task:**
- **Video Game Sales Prediction**: Regression model using Kaggle data
- **Spotify Song Popularity**: Audio features-based prediction

**Requirements:**
- ✅ Comprehensive EDA
- ✅ Data preprocessing & feature engineering
- ✅ Model training & evaluation
- ✅ Performance metrics (RMSE, MAE, R²)

### ✨ Generative AI
**Task:** AI Content Creation Assistant

**Requirements:**
- ✅ AI API integration (OpenAI/Anthropic)
- ✅ User-friendly interface
- ✅ Multiple content types
- ✅ Response optimization

### 🎨 Creative Domain
**Choose one option:**
- **ACM Newsletter Design**: Professional layout
- **ACM T-shirt Design**: Creative merchandise
- **Video Editing Portfolio**: Showcase reel

**Requirements:**
- ✅ Original creative work
- ✅ Professional quality
- ✅ Brand consistency
- ✅ Portfolio presentation

### 🏆 Competitive Programming
**Format:** Live Contest

**Details:**
- 📅 **Date**: September 1st, 2025
- ⏰ **Time**: 6:30 PM
- 📍 **Venue**: CP 1
- ⏳ **Registration Deadline**: August 28th, 2025 (6:00 PM)

**Requirements:**
- ✅ Codeforces OR LeetCode profile (mandatory)
- ✅ Contest participation
- ✅ Problem-solving skills

</details>

## 📊 Admin Analytics

<div align="center">

### 📈 Key Metrics Tracked

| Metric Category | Details |
|-----------------|---------|
| **📊 Core Metrics** | Total submissions, Unique applicants, Avg domains per student |
| **🎯 Conversion Funnel** | Landing views → Form opens → Submissions → Completions |
| **📈 Trends** | Daily submissions, Hourly patterns, Domain preferences |
| **👥 Cohort Analysis** | Early vs late applicants, Submission patterns |
| **🏆 Domain Performance** | CP vs Non-CP engagement, Popular combinations |

</div>

### 🔐 Admin Access
- **URL**: [https://acm-recruitment-y24.vercel.app/admin/login](https://acm-recruitment-y24.vercel.app/admin/login)
- **Features**: Dashboard, Analytics, Export, User management
- **Security**: Session-based auth, Rate limiting, Input validation

## 🛡️ Security & Performance

<table>
<tr>
<td width="50%">

### 🔒 Security Features
- 🛡️ **Rate Limiting** - IP-based request throttling
- 🧹 **Input Sanitization** - XSS & injection prevention  
- 🍪 **Secure Sessions** - HttpOnly cookies with expiration
- 🔐 **CSRF Protection** - Request validation
- ✅ **Data Validation** - Server-side input validation
- 📊 **Error Monitoring** - Comprehensive logging

</td>
<td width="50%">

### ⚡ Performance Optimizations
- 🚀 **Next.js 15** - Latest framework optimizations
- 📦 **Code Splitting** - Automatic bundle optimization
- 🖼️ **Image Optimization** - Built-in Next.js features
- 🗄️ **Database Indexing** - Optimized query performance
- 💾 **Strategic Caching** - Improved load times
- 📱 **Responsive Design** - Mobile-first approach

</td>
</tr>
</table>

## 🚀 Deployment

### Deploy to Vercel (Recommended)

> **✅ Already Deployed!** This project is live at [acm-recruitment-y24.vercel.app](https://acm-recruitment-y24.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/acm-recruitment-portal)

**To deploy your own instance:**
1. **Click the deploy button above**
2. **Connect your GitHub account**
3. **Set environment variables** in Vercel dashboard:
   ```env
   DATABASE_URL=your-production-database-url
   ADMIN_USERNAME=secure-admin-username  
   ADMIN_PASSWORD=very-secure-password
   NODE_ENV=production
   ```
4. **Deploy!** 🎉

### Manual Deployment

<details>
<summary><b>📋 Manual Deployment Steps</b></summary>

```bash
# Build the application
npm run build

# Start production server
npm start
```

**Environment Variables for Production:**
```env
DATABASE_URL="your-production-database-url"
ADMIN_USERNAME="secure-admin-username"
ADMIN_PASSWORD="very-secure-password"
NODE_ENV="production"
```

</details>

## 📚 API Documentation

<details>
<summary><b>🔗 API Endpoints</b></summary>

### Public Endpoints
```http
POST /api/submit                    # Submit application
GET  /api/submissions/check         # Check existing submissions
```

### Admin Endpoints (Protected)
```http
POST   /api/admin/auth              # Admin login
GET    /api/admin/auth              # Check authentication  
DELETE /api/admin/auth              # Admin logout
GET    /api/admin/submissions       # Get all submissions
GET    /api/admin/analytics         # Get analytics data
```

### Request/Response Examples

**Submit Application:**
```json
POST /api/submit
{
  "name": "John Doe",
  "roll_number": "24ucs123", 
  "email": "john@lnmiit.ac.in",
  "domains": ["web-development", "ai-ml"],
  "project_title": "My Awesome Project"
}
```

**Response:**
```json
{
  "success": true,
  "message": "All 2 domain(s) submitted successfully!",
  "data": [...]
}
```

</details>

## 🤝 Contributing

We welcome contributions! Here's how you can help:

<div align="center">

[![Contributors](https://img.shields.io/github/contributors/yourusername/acm-recruitment-portal?style=for-the-badge)](https://github.com/yourusername/acm-recruitment-portal/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/yourusername/acm-recruitment-portal?style=for-the-badge)](https://github.com/yourusername/acm-recruitment-portal/network/members)
[![Pull Requests](https://img.shields.io/github/issues-pr/yourusername/acm-recruitment-portal?style=for-the-badge)](https://github.com/yourusername/acm-recruitment-portal/pulls)

</div>

### 🚀 Quick Contribution Guide

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💻 Code** your changes
4. **✅ Test** thoroughly
5. **📝 Commit** (`git commit -m 'Add amazing feature'`)
6. **🚀 Push** (`git push origin feature/amazing-feature`)
7. **🔄 Open** a Pull Request

<details>
<summary><b>📋 Development Guidelines</b></summary>

- ✅ Follow TypeScript best practices
- ✅ Use ESLint and Prettier for formatting
- ✅ Write meaningful commit messages
- ✅ Test changes across different devices
- ✅ Update documentation as needed
- ✅ Follow existing code patterns

</details>

## 🐛 Issues & Support

<div align="center">

[![GitHub Issues](https://img.shields.io/github/issues/yourusername/acm-recruitment-portal?style=for-the-badge&color=red)](https://github.com/yourusername/acm-recruitment-portal/issues)
[![GitHub Closed Issues](https://img.shields.io/github/issues-closed/yourusername/acm-recruitment-portal?style=for-the-badge&color=green)](https://github.com/yourusername/acm-recruitment-portal/issues?q=is%3Aissue+is%3Aclosed)

</div>

### 🔧 Common Issues

<details>
<summary><b>🗄️ Database Connection Issues</b></summary>

- ✅ Verify `DATABASE_URL` in `.env.local`
- ✅ Check database server status  
- ✅ Ensure SSL mode is configured correctly
- ✅ Test connection with database client

</details>

<details>
<summary><b>🔐 Admin Login Problems</b></summary>

- ✅ Verify `ADMIN_USERNAME` and `ADMIN_PASSWORD` 
- ✅ Check browser cookies are enabled
- ✅ Clear browser cache and cookies
- ✅ Check for rate limiting (wait 15 minutes)

</details>

<details>
<summary><b>🏗️ Build Errors</b></summary>

- ✅ Run `npm install` to update dependencies
- ✅ Check TypeScript errors with `npm run build`
- ✅ Verify all environment variables are set
- ✅ Clear `.next` folder and rebuild

</details>

### 💬 Get Help

- 🌐 **Live Demo**: [acm-recruitment-y24.vercel.app](https://acm-recruitment-y24.vercel.app)
- � **DCreate an Issue**: [New Issue](https://github.com/yourusername/acm-recruitment-portal/issues/new)
- � **Disicussions**: [GitHub Discussions](https://github.com/yourusername/acm-recruitment-portal/discussions)
- 📧 **Email**: acm@lnmiit.ac.in

## 📊 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/acm-recruitment-portal?style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/yourusername/acm-recruitment-portal?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/acm-recruitment-portal?style=for-the-badge)

</div>

## 📄 License

<div align="center">

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## 🙏 Acknowledgments

<div align="center">

**Special thanks to:**

🎓 **ACM LNMIIT** - For the opportunity to build this system  
⚡ **Next.js Team** - For the incredible framework  
🚀 **Vercel** - For seamless deployment platform  
🐘 **Neon** - For the PostgreSQL database service  
🎨 **Radix UI** - For accessible UI components  
💙 **Open Source Community** - For inspiration and tools

</div>

## 📞 Contact & Links

<div align="center">

### 🏛️ ACM Student Chapter LNMIIT

[![Website](https://img.shields.io/badge/🌐_Website-Visit-blue?style=for-the-badge)](https://acm.lnmiit.ac.in)
[![Live App](https://img.shields.io/badge/🚀_Live_App-Try_Now-success?style=for-the-badge)](https://acm-recruitment-y24.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/acm-lnmiit)
[![Email](https://img.shields.io/badge/📧_Email-Contact-red?style=for-the-badge)](mailto:acm@lnmiit.ac.in)

### 👨‍💻 Developer

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kushagragarg)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/kushagragarg)
[![Email](https://img.shields.io/badge/📧_Email-Contact-red?style=for-the-badge)](mailto:kushagra@example.com)

</div>

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**🚀 [Try the Live Application](https://acm-recruitment-y24.vercel.app)**

**Made with ❤️ for ACM LNMIIT Y24 Recruitment**

![Footer](https://via.placeholder.com/800x100/219EBC/FFFFFF?text=Thank+You+for+Visiting!)

</div>
