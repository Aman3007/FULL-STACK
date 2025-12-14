# Whisper App – Anonymous Secret Sharing Platform

A secure and anonymous platform that allows users to share secrets without revealing their identity.  
Built using the **MERN stack**, featuring JWT-based authentication, encrypted cookie handling, and a scalable backend architecture.

---

## 🚀 Live Demo

🔗 **Demo:** https://my-whisper-app.onrender.com

---

## ✨ Key Features

- 🔐 Anonymous authentication using JWT with HTTP-only cookies  
- 🕵️ Share secrets without exposing personal identity  
- 🌐 Community feed to view secrets shared by other users  
- 🛡️ Secure backend with CORS and cookie-based protection  
- 🔒 Encrypted data storage in MongoDB  
- 📱 Fully responsive frontend built with React  
- ⚡ Smooth API communication using Axios  

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Cookie Parser
- CORS Middleware

### Frontend
- React.js
- Axios
- Tailwind CSS / Vanilla CSS

### Deployment
- Full-stack deployment on **Render**

---

## 📂 Project Structure
```bash
whisper-app/
├── client/
│   ├── src/
│   │   ├── App.js
│   │   └── components/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── server/
│   ├── middleware/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── package.json
│   └── .env
│
└── README.md
```
---

## 🔐 Authentication & Security Flow

1. User authenticates anonymously  
2. Server issues a JWT stored in an HTTP-only cookie  
3. User submits secrets without personal identification  
4. Secrets are securely stored in MongoDB  
5. Other users can view shared secrets anonymously  

This approach ensures **privacy, security, and protection against token exposure**.

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder:

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
PORT=5000  

---

## ▶️ Run Locally

### Backend
```bash
cd backend
npm install
npm start
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
---
### 📈 Impact & Learning Outcomes

Implemented anonymous authentication using secure cookies

Designed privacy-first data handling architecture

Built real-world backend security using JWT and CORS

Deployed a full-stack MERN application to production

Gained hands-on experience with scalable REST APIs
---

### 🔮 Future Enhancements

🔏 Transform into a DigiLocker-style secure document platform

📁 Encrypted file storage (PDFs, documents, images)

🔑 Role-based and permission-controlled sharing

🔐 Two-factor authentication (2FA)

☁️ Cloud storage integration

🎨 Enhanced UI/UX themes and accessibility

---

👤 Author

Aman Singh Chauhan
Fresher Full-Stack (MERN) Developer

GitHub: https://github.com/Aman3007
