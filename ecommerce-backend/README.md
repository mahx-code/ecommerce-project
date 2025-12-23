# 🛒 Ecommerce Web App - Backend API

A high-performance, serverless REST API designed to power modern e-commerce experiences. This backend manages product catalogs, inventory, and order processing using a direct-driver PostgreSQL implementation for maximum efficiency.

**🚀 Live API Endpoint:** [https://ecommerce-project-backend-omega.vercel.app/api/products](https://ecommerce-project-backend-omega.vercel.app/api/products)

---

## 🛠️ Technical Architecture

This project has been migrated from a local file-based system (SQLite) to a robust, cloud-native infrastructure to support scalability and high availability.

### Tech Stack
- **Runtime:** [Node.js](https://nodejs.org/) (v22+)
- **Server Framework:** [Express.js](https://expressjs.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) via **Neon.tech** (Serverless Postgres)
- **Database Driver:** [node-postgres (pg)](https://node-postgres.com/)
- **Cloud Hosting:** [Vercel](https://vercel.com/) (Serverless Functions)

---

## ✨ Key Features

- **Relational Data Modeling:** Structured SQL schema for Products, Cart Items, and Orders.
- **Optimized SQL Queries:** Uses the `pg` library to execute raw SQL, providing better performance and granular control over database interactions.
- **Serverless Optimized:** Configured specifically for Vercel's serverless environment, utilizing connection pooling for efficient resource management.
- **Automated Data Seeding:** Integrated logic to hydrate the database with default product data upon the first connection.
- **Secure Communication:** SSL-encrypted database connections and CORS-enabled policies for frontend security.

---

## ⚙️ Local Development

### Prerequisites
- Node.js (Version 22 or higher)
- A Neon.tech account (or a local PostgreSQL instance)

### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd ecommerce-backend