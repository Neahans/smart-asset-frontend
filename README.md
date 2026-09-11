<div align="center">

# 📦 Smart Asset Management System

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=32&pause=900&color=2563EB&center=true&vCenter=true&width=850&lines=Welcome+to+Smart+Asset+Management+%F0%9F%93%A6;React+Frontend+with+Mock+Data+%E2%9A%9B%EF%B8%8F;Admin+%26+Employee+Dashboards+%F0%9F%91%A8%F0%9F%91%A9;Manage+Assets%2C+Inventory+%26+Tickets+%F0%9F%9A%80" alt="Typing Animation" />

<br>

<img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/React_Router-Navigation-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
<img src="https://img.shields.io/badge/Redux_Toolkit-State-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
<img src="https://img.shields.io/badge/Bootstrap-UI-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
<img src="https://img.shields.io/badge/Recharts-Charts-22B5BF?style=for-the-badge" />

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,50:60A5FA,100:111827&height=180&section=header&text=SMART%20ASSET&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=55" width="100%" />

</div>

---

## 📋 About The Project

**Smart Asset Management System** is a responsive React frontend designed for managing company assets, inventory, assignments, and repair tickets.

This project is currently built with **mock data**, allowing the complete frontend experience to be developed before backend/API integration.

The interface provides separate experiences for **Administrator** and **Employee** users.

---

# ✨ Features

### 👨‍💼 Administrator

* 📊 Admin Dashboard
* 🖥️ Asset Management
* ➕ Add Assets
* ✏️ Edit Assets
* 🗑️ Delete Assets
* 📦 Inventory Management
* 🎫 Repair Ticket Management
* ➕ Create Repair Tickets
* 👤 Profile Management
* 📈 Dashboard Charts

### 👩‍💻 Employee

* 📊 Personal Dashboard
* 🖥️ View Assigned Assets
* 🎫 View Personal Tickets
* 👤 Profile
* 📈 Personal Activity Overview

---

# 🎨 User Interface

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=24&pause=900&color=2563EB&center=true&vCenter=true&width=700&lines=Clean+%26+Responsive+Dashboard+%F0%9F%92%BB;Admin+%26+Employee+Views+%F0%9F%91%A5;Modern+Asset+Management+UI+%F0%9F%93%A6" />

</div>

---

# 👨‍💼 Admin Mode

## 🔐 Admin Login

<div align="center">

<img src="src/screenshots/adminlogin.png" width="90%" />

</div>

---

## 📊 Admin Dashboard

<div align="center">

<img src="src/screenshots/admin dashboard.png" width="90%" />

</div>

The Admin Dashboard provides an overview of:

```text
📦 Total Assets
📤 Assigned Assets
✅ Available Assets
🛠️ Open Repair Tickets
📊 Asset Status Chart
📈 Monthly Asset Overview
🕒 Recent Activities
```

---

## 🖥️ Asset Management

<div align="center">

<img src="src/screenshots/admin assets.png" width="90%" />

</div>

Administrators can view assets and manage their:

```text
Asset Name
Type
Serial Number
Status
Purchase Date
```

---

## ➕ Add Asset

<div align="center">

<img src="src/screenshots/admin addassets.png" width="90%" />

</div>

The Add Asset interface allows the administrator to enter asset information using a reusable modal form.

---

## 📦 Inventory

<div align="center">

<img src="src/screenshots/admin inventory.png" width="90%" />

</div>

Inventory provides stock information including:

```text
📦 Total Items
⚠️ Low Stock
❌ Out of Stock
✅ In Stock
```

---

## 🎫 Repair Tickets

<div align="center">

<img src="src/screenshots/admin ticket.png" width="90%" />

</div>

Administrators can monitor repair tickets by:

```text
Asset
Issue
Priority
Status
Technician
Created Date
```

---

## ➕ Create Repair Ticket

<div align="center">

<img src="src/screenshots/admin createticket.png" width="90%" />

</div>

The ticket creation form allows administrators to specify:

```text
🖥️ Asset
📝 Issue
🔥 Priority
👨‍🔧 Technician
```

---

## 👤 Admin Profile

<div align="center">

<img src="src/screenshots/admin profile.png" width="90%" />

</div>

Administrators can view and edit their profile information.

---

# 👩‍💻 Employee Mode

## 🔐 Employee Login

<div align="center">

<img src="src/screenshots/user login.png" width="90%" />

</div>

---

## 📊 Employee Dashboard

<div align="center">

<img src="src/screenshots/user1.png" width="90%" />

</div>

The Employee Dashboard focuses on personal information such as:

```text
🖥️ My Assets
📤 Active Assignments
🎫 My Tickets
📊 Personal Asset Overview
📈 Recent Activity
```

---

## 🖥️ Employee Assets

<div align="center">

<img src="src/screenshots/user2.png" width="90%" />

</div>

Employees can view their assigned assets and related information.

---

## 🎫 Employee Tickets

<div align="center">

<img src="src/screenshots/user3.png" width="90%" />

</div>

Employees can view their repair-related activity and ticket information.

---

## 👤 Employee Profile

<div align="center">

<img src="src/screenshots/user4.png" width="90%" />

</div>

Employees can view and update their profile information.

---

## 📱 Responsive Interface

<div align="center">

<img src="src/screenshots/user5.png" width="90%" />

</div>

The frontend is designed to adapt to different screen sizes using responsive layouts and Bootstrap utilities.

---

# 🏗️ Project Architecture

```text
smart-asset-frontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Layout.js
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Sidebar.js
│   │   ├── Sidebar.css
│   │   ├── Table.js
│   │   └── Table.css
│   │
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── Assets.js
│   │   ├── Assets.css
│   │   ├── Inventory.js
│   │   ├── Inventory.css
│   │   ├── Tickets.js
│   │   ├── Tickets.css
│   │   ├── Profile.js
│   │   └── Profile.css
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── store/
│   │   └── store.js
│   │
│   ├── screenshots/
│   │   ├── adminlogin.png
│   │   ├── admin dashboard.png
│   │   ├── admin assets.png
│   │   ├── admin addassets.png
│   │   ├── admin inventory.png
│   │   ├── admin ticket.png
│   │   ├── admin createticket.png
│   │   ├── admin profile.png
│   │   ├── user login.png
│   │   ├── user1.png
│   │   ├── user2.png
│   │   ├── user3.png
│   │   ├── user4.png
│   │   └── user5.png
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

# 🧰 Technologies Used

<div align="center">

<img src="https://skillicons.dev/icons?i=react,js,html,css,bootstrap,redux,git,github,vscode" />

</div>

### Main Libraries

```text
⚛️ React
🚦 React Router
🔄 Redux Toolkit
🎨 Bootstrap
🎯 Bootstrap Icons
📊 Recharts
```

---

# 🔄 Application Flow

```text
                    🔐 LOGIN
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
    👨‍💼 ADMIN                  👩‍💻 EMPLOYEE
          │                         │
          ▼                         ▼
    📊 Dashboard               📊 Dashboard
          │                         │
     ┌────┼────┐               ┌────┼────┐
     ▼    ▼    ▼               ▼    ▼    ▼
   Assets Inventory Tickets   Assets Tickets Profile
     │
     ▼
 Add / Edit / Delete
```

---

# 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Neahans/smart-asset-frontend.git
```

### 2. Open the project

```bash
cd smart-asset-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

# 🧪 Mock Login

The current project uses mock users instead of a backend.

### 👨‍💼 Administrator

```text
Username: admin
Password: admin123
```

### 👩‍💻 Employee

```text
Username: neaha
Password: neaha123
```

Additional mock employees can be added through:

```text
src/data/mockData.js
```

---

# 📌 Current Project Status

<div align="center">

| Module              | Status     |
| ------------------- | ---------- |
| React Setup         | ✅ Complete |
| Routing             | ✅ Complete |
| Login               | ✅ Complete |
| Admin Dashboard     | ✅ Complete |
| Employee Dashboard  | ✅ Complete |
| Asset Management    | ✅ Complete |
| Inventory           | ✅ Complete |
| Repair Tickets      | ✅ Complete |
| Profile             | ✅ Complete |
| Reusable Table      | ✅ Complete |
| Mock Authentication | ✅ Complete |
| Responsive UI       | ✅ Complete |
| Backend Integration | ⏳ Future   |

</div>

---

# 🎯 Future Improvements

```text
🔗 Django REST API integration
🔐 Real authentication
🗄️ Database integration
👥 Real user management
📦 Real-time asset updates
🎫 Real ticket workflow
🔔 Notifications
📊 Advanced analytics
```

---

# 👩‍💻 Author

<div align="center">

## Neaha N S

💻 Computer Science Graduate
🐍 Python & Django Developer
⚛️ React Developer / Learner
🔐 Cybersecurity Enthusiast

<br>

<a href="https://github.com/Neahans">

<img src="https://img.shields.io/badge/GitHub-Neahans-181717?style=for-the-badge&logo=github" />

</a>

</div>

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=22&pause=1000&color=2563EB&center=true&vCenter=true&width=650&lines=Build+%E2%80%A2+Learn+%E2%80%A2+Improve+%E2%80%A2+Repeat+%F0%9F%9A%80;Thanks+for+visiting+%F0%9F%92%99;Made+with+React+%E2%9A%9B%EF%B8%8F" alt="Footer Animation" />

<br><br>

⭐ **Star this repository if you found it useful!**

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,50:2563EB,100:60A5FA&height=120&section=footer" width="100%"/>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
