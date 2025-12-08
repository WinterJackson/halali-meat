<div align="center">

# 🥩 Halali Meat
### Enterprise B2B Procurement Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <strong>Streamlining wholesale meat distribution with a seamless Request for Quote (RFQ) workflow.</strong>
</p>

</div>

<br />

## 📖 Overview

**Halali Meat** is an enterprise-grade B2B e-commerce platform designed to modernize the meat supply chain. Built on a scalable **Next.js 14** architecture, it replaces traditional procurement methods with a digital-first approach.

### Key Features
*   **🚀 RFQ Workflow**: Automated "Get a Quote" system for high-volume orders.
*   **🛡️ Admin Dashboard**: Real-time control over inventory, orders, and messages.
*   **⚡ Performance**: Built with React Server Components for speed and SEO.
*   **🔒 Secure**: Role-Based Access Control (RBAC) protecting sensitive B2B data.

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| **Core** | [Next.js 14](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/) |
| **Data** | [MongoDB](https://www.mongodb.com/) via [Prisma ORM](https://www.prisma.io/) |
| **Auth** | [NextAuth.js](https://next-auth.js.org/) (Secure Credentials Provider) |
| **UI/UX** | [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Framer Motion](https://www.framer.com/motion/) |
| **Infra** | [Cloudinary](https://cloudinary.com/) (Assets), [Upstash Redis](https://upstash.com/) (Rate Limiting) |

---

## 🛠️ Getting Started

### Prerequisites

*   **Node.js 18+**
*   **Git**
*   **MongoDB** (Local or Atlas)
*   **Cloudinary Account**

### ⚡ Quick Start

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd halali-meat
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment**
    Create a `.env.local` file with your credentials:

    ```env
    # Database
    DATABASE_URL="mongodb+srv://..."

    # Auth
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="<generate-secret>"

    # Services
    CLOUDINARY_CLOUD_NAME="..."
    CLOUDINARY_API_KEY="..."
    CLOUDINARY_API_SECRET="..."
    EMAIL="smtp@example.com"
    EMAIL_PASSWORD="..."
    ```

4.  **Initialize Database**
    ```bash
    npx prisma generate
    npx prisma db push
    npm run db:seed  # Optional: Seed initial data
    ```

5.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Visit [http://localhost:3000](http://localhost:3000)

---

## 📜 Architecture

The application leverages the Modern Web Stack:

*   **Server Actions**: Handling strict business logic (Quotes, Messages) without a separate API layer.
*   **Middleware**: robust `middleware.ts` for route protection and RBAC.
*   **Data Access Layer**: Centralized queries in `src/lib/data-access.ts` for maintainability.

---

## 🤝 Contributing

We welcome contributions! Please check [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on our Feature Branch workflow and Code Style.

---

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/Status-Active-success.svg" alt="Status" />
</div>
