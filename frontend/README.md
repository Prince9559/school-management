# 🎓 School Management Mini System

A full-stack web application to manage students and their assigned tasks/homework.

---

## 🚀 Features

### 🔐 Authentication
- Admin Login (JWT आधारित authentication)
- Protected dashboard access

### 👨‍🎓 Student Management
- Add new students
- View all students
- Delete students

### 📚 Task Management
- Assign tasks to students
- View all assigned tasks
- Mark tasks as completed

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS (Custom UI + Animations)

### Backend
- Node.js
- Express.js

### Database
- MySQL (XAMPP)

---

## 📂 Project Structure
school-management/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── studentController.js
│   │   ├── taskController.js
│   │   └── authController.js
│   │
│   ├── routes/
│   │   ├── studentRoutes.js
│   │   ├── taskRoutes.js
│   │   └── authRoutes.js
│   │
│   ├── models/   (optional for MySQL)
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Login.css
│   │   │   ├── Dashboard.js
│   │   │   ├── Dashboard.css
│   │   │   ├── Students.js
│   │   │   ├── Students.css
│   │   │   ├── Tasks.js
│   │   │   └── Tasks.css
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md



---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Prince9559/school-management

admin login 
gmail:admin@gmail.com
password:1234
 

