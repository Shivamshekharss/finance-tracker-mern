# 🚀 MERN Expense Tracker

A modern personal finance dashboard built with the MERN stack, allowing you to track income, expenses, and investments in real-time with interactive charts and summaries.

---

## ✨ Demo

- **Frontend:** `http://localhost:3000`  
- **Backend / API:** `http://localhost:5000`

---

## 🧩 Features

- **Track Transactions:** Add, view, and delete income/expense records  
- **Real-time Charts:** Doughnut charts update automatically with totals  
- **Category Analysis:** See breakdown of investments, salary, food, entertainment  
- **Responsive Design:** Works on desktop and mobile devices  
- **Data Persistence:** Transactions saved to MongoDB Atlas  

---

## 🛠 Tech Stack

**Frontend:** React.js, CSS, Chart.js  
**Backend:** Node.js, Express.js, MongoDB (Atlas)  

---

## 🏗 Project Structure
```bash

mern-expense-tracker/
├─ client/  # React frontend
├─ server/  # Express backend + MongoDB logic
├─ assets/  # Screenshots for README
├─ .env     # Environment variables
└─ README.md # Project documentation
```


---

## 🖼 Screenshots / Homepage

**Homepage – Dashboard with transaction summary and chart**  
![Homepage Screenshot](assets/expense-screenshot.png)

---

## 🔌 API Endpoints

| Resource       | Endpoint               | Method           |
|----------------|-----------------------|----------------|
| Categories     | `/api/categories`      | GET / POST      |
| Labels         | `/api/labels`          | GET             |
| Transactions   | `/api/transaction`     | POST / GET / DELETE |

---

## ⚡ Getting Started
1️⃣ Clone the repository
```bash
Run these commands in your terminal:

git clone https://github.com/Shivamshekharss/finance-tracker-mern.git
cd mern-expense-tracker
 ```
2️⃣ Backend Setup
```bash
Go to the backend folder and install dependencies:
cd server
npm install
```
Create a .env file in the server folder with:
```bash
MONGO_URI=<Your MongoDB Atlas Connection String>
PORT=5000
```

Start the backend server:
```bash
npm start
3️⃣ Frontend Setup
```

Go to the frontend folder and install dependencies:
```bash
cd ../client
npm install
```
Create a .env file in the client folder with:
```bash

REACT_APP_API_URL=http://localhost:5000
```

Start the frontend server:
```bash

npm start
```

👨‍💻 Author

Shivam Shekhar

⭐ Like this project? Give it a star on GitHub!




