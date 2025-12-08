<div align="center">

# 🤝 Contributing to Halali Meat
### Build the Future of B2B Meat Procurement

<p align="center">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/Code_Style-Standard-blue.svg?style=for-the-badge" alt="Code Style" />
</p>

Thank you for your interest in contributing! This document provides guidelines to ensure a smooth collaboration process.

</div>

<br />

## 🚀 Development Workflow

We follow a strict **Feature Branch Workflow** to maintain codebase stability.

### 1. Setup & Branching
1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd halali-meat
    ```
2.  **Create a Branch**:
    *Naming Convention*: `type/description-slug`
    ```bash
    git checkout -b feature/admin-dashboard
    git checkout -b fix/login-error
    ```

### 2. Implementation
*   **Code Quality**: Write clean, self-documenting code.
*   **Linting**: Ensure `npm run lint` passes (Husky will enforce this).
*   **Testing**: Add tests for new logic where possible.

### 3. Commit Guidelines
We encourage **Conventional Commits** for clear history:

| Type | Description | Example |
| :--- | :--- | :--- |
| `feat` | New feature | `feat: add new quote form` |
| `fix` | Bug fix | `fix: resolve email sending error` |
| `docs` | Documentation | `docs: update readme` |
| `refactor` | Code restructuring | `refactor: optimize db query` |
| `style` | Formatting/Style | `style: run prettier` |

### 4. Push & PR
1.  **Push your branch**:
    ```bash
    git push origin feature/my-new-feature
    ```
2.  **Open a Pull Request**:
    *   Describe changes clearly.
    *   Link related issues.
    *   Request review.

---

## 🎨 Code Style

*   **TypeScript**: Strict typing required. Avoid `any`. Define interfaces in `src/lib/definitions.ts`.
*   **Tailwind CSS**: Use utility classes. Avoid custom CSS files.
*   **Component Pattern**:
    *   **UI Primitives**: `src/components/ui/`
    *   **Shared**: `src/components/common/`
    *   **Feature-Specific**: `src/components/quotes/`, `src/components/products/`

---

## 📂 Project Structure

| Path | Purpose |
| :--- | :--- |
| `src/app` | Next.js App Router (Pages & Layouts) |
| `src/app/actions` | **Server Actions** (Business Logic) |
| `src/lib` | Utilities, Auth, Database Config |
| `src/components` | React UI Components |
| `prisma` | Database Schema & Migrations |

---

## 🐛 Reporting Issues

Found a bug? Please create an issue including:
1.  **Description**: What happened vs what you expected.
2.  **Reproduction**: Steps to reproduce the error.
3.  **Environment**: Browser, OS, Node version.

---

<div align="center">
  <sub>Built with ❤️ by the Halali Meat Engineering Team</sub>
</div>
