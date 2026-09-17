# 🍴 Food Menu React Project

This is a simple **Food Menu website** built using **React.js** and **Bootstrap**.

The main purpose of this project is to practice the **React `useState` hook** and learn how state can be used to create a dynamic website.

## 📌 Project Description

This project displays different food items with their **name, price, category, type, and image**.

Users can:

* Search for food items
* Filter food by category
* View food details
* Use a responsive and full-width layout

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* Bootstrap
* HTML
* CSS
* React `useState` Hook

## ✨ Features

### 1. Food Menu

The website contains **60+ food items** with:

* Food name
* Price
* Category
* Veg / Non-Veg type
* Food image

### 2. Search Food

Users can search for a food item by entering its name in the search box.

Example:

`Pizza` → Shows Pizza-related items.

### 3. Category Filter

Users can filter food items by category:

* All
* Breakfast
* Lunch
* Snacks
* Dinner
* Timepass

### 4. useState

The project uses React's `useState` hook to manage:

* Menu data
* Selected category
* Search input

Example:

```jsx
const [selectedCategory, setSelectedCategory] = useState("All");
```

When the state changes, React automatically updates the UI.

### 5. Responsive Design

Bootstrap's grid system is used to make the website responsive on:

* Desktop
* Laptop
* Tablet
* Mobile

## 📂 Project Structure

```text
src/
│
├── Menu.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 How to Run the Project

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the project

```bash
cd your-project-name
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the React application

```bash
npm run dev
```

The application will start on the local development server.

## 🎯 What I Learned

Through this project, I practiced:

* React components
* JSX
* `useState`
* State management
* Array `.filter()`
* Array `.map()`
* Event handling
* Conditional filtering
* Bootstrap grid system
* Responsive design

## 👨‍💻 Author

**Sayeed Alam**

Java Full Stack Developer
