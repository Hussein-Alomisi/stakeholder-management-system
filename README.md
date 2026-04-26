# 🤝 Stakeholder Management System

> **Status: 🚧 Work in Progress (MVP Stage)**

A comprehensive full-stack web application designed to manage stakeholders for projects and organizations effectively. The system provides a centralized platform to track, manage, and engage with stakeholders, currently featuring a fully localized Arabic RTL user interface.

## 📋 Overview
The Stakeholder Management System is built to streamline the process of identifying and managing organizational and project stakeholders. By bridging a robust Node.js/Express backend with a modern React (Vite) frontend, it offers a seamless experience for administrators to monitor stakeholder data, complete with a beautifully designed Arabic interface.

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React (via Vite)
- 🌐 Arabic RTL (Right-to-Left) UI
- 🎨 Modern styling and responsive design

**Backend:**
- 🟢 Node.js
- 🚂 Express.js

**Database:**
- 🐬 MySQL

## 🏗️ Project Structure

The project is structured as a monorepo containing both the frontend and backend applications:

```text
stakeholder-management-system/
├── frontend/               # React (Vite) application
│   ├── src/                # UI components, pages, and assets
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                # Node.js/Express server
│   ├── controllers/        # Request handlers
│   ├── models/             # Database schemas/models
│   ├── routes/             # API route definitions
│   ├── config/             # Configuration files (DB, etc.)
│   └── package.json        # Backend dependencies
├── docs/                   # Project documentation
└── test/                   # Testing suites
```

## ✨ Features (Implemented)

- 📊 **Dashboard:** A central hub providing an overview of stakeholder data.
- 👥 **Stakeholder Management:** 
  - Add new stakeholders.
  - View existing stakeholder details.
  - Delete stakeholders from the system.
- 🔌 **API Integration:** Seamless data flow between the React frontend and Express backend.
- 🔄 **Basic CRUD Functionality:** Core operations established for data entities.
- 🇸🇦 **Arabic Interface:** Fully localized, intuitive Right-to-Left (RTL) user experience.

## 🚀 Upcoming Features

- ✏️ **Edit Stakeholder:** Modify and update existing stakeholder information.
- 🏢 **Stakeholder Groups Management:** Categorize and manage stakeholders in functional groups.
- 🤝 **Interactions Tracking:** Log and monitor meetings, calls, and communications.
- ⚠️ **Issues Management:** Track and resolve stakeholder-related issues and concerns.
- 🔐 **Authentication & Roles:** Secure login with distinct permission levels (Admin, Viewer, etc.).
- 📈 **Reports & Analytics:** Generate detailed insights and exportable reports.

## ⚙️ Installation / Run Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MySQL](https://www.mysql.com/) installed and running

### 1. Clone the repository
```bash
git clone <repository-url>
cd stakeholder-management-system
```

### 2. Setup the Database
1. Create a new MySQL database named `stakeholder_management` (or your preferred name).
2. Configure the database connection in the backend (typically in a `.env` file inside the `backend` directory).

### 3. Backend Setup
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the development server
npm run dev
```
*The backend server typically runs on `http://localhost:5000` (or as configured).*

### 4. Frontend Setup
Open a new terminal window/tab:
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```
*The frontend application will run on `http://localhost:5173`.*

## 🛣️ API Endpoints

*(Note: These are standard RESTful representations based on current features)*

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/stakeholders` | Retrieve all stakeholders |
| `GET` | `/api/stakeholders/:id` | Retrieve a specific stakeholder |
| `POST` | `/api/stakeholders` | Create a new stakeholder |
| `DELETE` | `/api/stakeholders/:id` | Delete a stakeholder |

## 🗄️ Database Overview

The system utilizes a **MySQL** relational database to ensure data integrity and scalable relationships. 

Currently, the primary entity is the **Stakeholders** table, which stores essential contact and organizational details. As the system scales to include groups, interactions, and issues, the schema will expand using relational mapping to connect these entities seamlessly.

---
*Designed with ❤️ by Hussein Alomisi.*