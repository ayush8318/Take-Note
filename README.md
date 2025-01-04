# iNotebook 

**A secure and efficient online notebook application for managing your notes effortlessly.**


[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=netlify)](https://master--take-note-today.netlify.app/)  

---

## 🚀 Features

- **User Authentication:** Secure login/signup system using bcrypt.js for password hashing and JWT tokens for session management.
- **CRUD Operations:** Create, Read, Update, and Delete notes with ease.
- **Global State Management:** Leveraged React's Context API to simplify data sharing across components.
- **Responsive UI:** Intuitive and user-friendly interface designed with Bootstrap and CSS.
- **API Testing:** Verified API functionality using Thunder Client and Postman.

---

## 🛠️ Tech Stack

 ![React](https://img.icons8.com/color/48/000000/react-native.png) ![HTML5](https://img.icons8.com/color/48/000000/html-5.png) ![CSS3](https://img.icons8.com/color/48/000000/css3.png) ![JavaScript](https://img.icons8.com/color/48/000000/javascript--v1.png) ![Bootstrap](https://img.icons8.com/color/48/000000/bootstrap.png)
 ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) ![Express.js](https://img.icons8.com/ios/50/000000/express-js.png)
 ![MongoDB](https://img.icons8.com/color/48/000000/mongodb.png)
 ![Context API](https://img.icons8.com/color/48/000000/api-settings.png)
![bcrypt.js](https://img.icons8.com/ios/48/000000/lock--v1.png) ![JWT](https://img.icons8.com/ios-filled/48/000000/key-security.png) Input Validation

---

## 🌐 Deployment

- **Frontend:** [Netlify](https://master--take-note-today.netlify.app/)
- **Backend:** Render
- **Version Control:** GitHub

---

## ⚡ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/inotebook.git
   cd inotebook
   ```

2. Install dependencies for the backend and frontend:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd frontend
   npm install
   ```

3. Set up environment variables:
   - `MONGO_URI`: MongoDB connection string.
   - `JWT_SECRET`: Secret key for JWT tokens.

4. Start the development servers:
   ```bash
   # Backend
   npm start

   # Frontend
   npm start
   ```

5. Access the app at `http://localhost:3000`.

---

## 📜 API Endpoints

- **Authentication:**
  - `POST /api/auth/login` - User login.
  - `POST /api/auth/signup` - User signup.

- **Notes Management:**
  - `GET /api/notes` - Fetch all notes.
  - `POST /api/notes` - Create a new note.
  - `PUT /api/notes/:id` - Update a note.
  - `DELETE /api/notes/:id` - Delete a note.

---

## 🔒 Security Features

- Password hashing with `bcrypt.js`.
- Session management using `JWT` tokens.
- Input validation to prevent SQL Injection and other vulnerabilities.

---
## Authentication Workflow Screenshot
<img src="https://github.com/ayush8318/Zapchat/blob/032f79a1a0451670903c933d671fbc29ab1cd601/img2.png" alt="Authentication Workflow Screenshot" width="800" height="800">

## 📸 Screenshots

### Login Page
 <img src="https://github.com/ayush8318/Take-Note/blob/5aa92e825056a2b2eff5cfe66402d6a13316acbf/login.png" alt="" width="800" height="400">
 
### Notes Dashboard
  <img src="https://github.com/ayush8318/Take-Note/blob/5aa92e825056a2b2eff5cfe66402d6a13316acbf/add%20notes.png" alt="" width="800" height="600">
  <img src="https://github.com/ayush8318/Take-Note/blob/5aa92e825056a2b2eff5cfe66402d6a13316acbf/edit.png" alt="" width="600" height="400">


---

## 📋 Contribution

Feel free to contribute to this project by opening an issue or creating a pull request. 

---

## 🌐 Connect

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayush-gupta-01a785228) [![GitHub](https://img.shields.io/badge/-GitHub-black?logo=github&logoColor=white)](https://github.com/ayush8318)

---

Made with ❤️ by **Ayush Gupta**.
