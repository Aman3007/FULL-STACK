Whisper App - Anonymous Secret Sharing Platform

A secure platform where users can share their secrets anonymously without revealing their identity — powered by modern MERN technologies with JWT-based authentication and encrypted cookie handling.

🔗 Live Site: https://my-whisper-app.onrender.com

Features

Anonymous login & authentication using JWT + cookies

Share secrets securely without personal identification

View secrets shared by others (community space)

Backend security with CORS middleware

Encrypted secret storage in MongoDB

Fully responsive UI using React

API communication via Axios

Tech Stack

Backend:

Node.js + Express

MongoDB + Mongoose

JWT Authentication

CORS + Cookie Parser

Frontend:

React.js

Axios for API requests

Vanilla CSS and tailwind CSS / Simple UI styling

Project Structure
whisper-app/
├── client/
│   ├── src/
│   │   ├── App.js
│   │   └── components/
│   ├── public/
│   ├── package.json
│   └── .env
├── server/
│   ├── middleware/
│   ├── controllers/
│   ├── Model/
│   ├── Routes/
|    ├── app.js/
│   ├── package.json
│   └── .env
└── README.md

Setup & Installation
Prerequisites

Node.js (Express)

MongoDB Database

Backend Setup

1️⃣ Navigate to backend folder:

cd backend


2️⃣ Install dependencies:

npm install


3️⃣ Create .env file:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000


4️⃣ Start server:

npm start
# OR with nodemon
npm run dev


Backend runs at: http://localhost:5000

Frontend Setup

1️⃣ Move to frontend folder:

cd frontend


2️⃣ Install:

npm install


3️⃣ Run the project:

npm start


Frontend runs at: http://localhost:3000


How It Works

User authenticates anonymously → Receives JWT token

User submits secret → Stored in database with no identity

Other users can view those secrets anonymously

JWT handled through secure cookies for protection

Future Enhancements

🔏 Convert into a secure DigiLocker-style platform
to store personal files & important documents privately

File-based encrypted storage (Documents, PDFs, etc.)

Ability to control share permissions

Two-factor authentication

Cloud storage integration

Improved UI/UX Themes
