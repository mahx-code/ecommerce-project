# 🛒 Full-Stack E-Commerce Platform

A high-performance, responsive e-commerce application featuring a dynamic product grid, shopping cart functionality, and a persistent SQL backend.

## 🔗 Live Demo
- **Frontend:** [https://ecommerce-project-tau-gray.vercel.app/](https://ecommerce-project-tau-gray.vercel.app/)
- **API Status:** [https://ecommerce-project-backend-omega.vercel.app/api/products](https://ecommerce-project-backend-omega.vercel.app/api/products)

---

## ✨ Features
- **Dynamic Product Grid:** Fetches real-time data from a PostgreSQL database.
- **Search & Filter:** Find products instantly using the search bar.
- **Persistent Shopping Cart:** Add items, adjust quantities, and view totals.
- **Automated Seeding:** Backend automatically populates the database with default products on first run.
- **Mobile Responsive:** Fully optimized for all screen sizes using modern CSS.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Functional Components & Hooks)
- **React Router** (Client-side routing)
- **Axios** (API communication)
- **CSS3** (Custom styling & Responsive design)

### Backend
- **Node.js & Express** (Server framework)
- **Sequelize ORM** (Database management)
- **PostgreSQL** (Hosted on Neon.tech)
- **CORS** (Cross-Origin Resource Sharing enabled)

---

## 🚀 Deployment Configuration

### Frontend (Vercel)
The frontend uses a `vercel.json` rewrite to communicate with the backend without CORS issues:
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "[https://ecommerce-project-backend-omega.vercel.app/api/:path](https://ecommerce-project-backend-omega.vercel.app/api/:path)*"
    }
  ]
}