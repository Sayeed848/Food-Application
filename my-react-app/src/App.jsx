import React, { useState } from "react";

function Menu() {
  let [menuItems] = useState([
    {
      id: 1,
      name: "Masala Dosa",
      price: 80,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    },
    {
      id: 2,
      name: "Idli Sambar",
      price: 60,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    },
    {
      id: 3,
      name: "Veg Biryani",
      price: 150,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
      id: 4,
      name: "Chicken Biryani",
      price: 200,
      category: "Lunch",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    },
    {
      id: 5,
      name: "Paneer Butter Masala",
      price: 180,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      id: 6,
      name: "Samosa",
      price: 30,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 7,
      name: "French Fries",
      price: 100,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    },
    {
      id: 8,
      name: "Chicken Kebab",
      price: 220,
      category: "Dinner",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
    },
    {
      id: 9,
      name: "Butter Naan",
      price: 50,
      category: "Dinner",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    },
    {
      id: 10,
      name: "Burger",
      price: 140,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 11,
      name: "Pizza",
      price: 250,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      id: 12,
      name: "Chicken Burger",
      price: 180,
      category: "Timepass",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
    },
    {
      id: 13,
      name: "Poha",
      price: 50,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    },
    {
      id: 14,
      name: "Upma",
      price: 45,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    },
    {
      id: 15,
      name: "Aloo Paratha",
      price: 70,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
    },
    {
      id: 16,
      name: "Poori Bhaji",
      price: 80,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
    },
    {
      id: 17,
      name: "Pongal",
      price: 70,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    },
    {
      id: 18,
      name: "Medu Vada",
      price: 60,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 19,
      name: "Rava Dosa",
      price: 90,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    },
    {
      id: 20,
      name: "Set Dosa",
      price: 75,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    },
    {
      id: 21,
      name: "Cheese Dosa",
      price: 120,
      category: "Breakfast",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    },
    {
      id: 22,
      name: "Egg Omelette",
      price: 80,
      category: "Breakfast",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    },

    {
      id: 23,
      name: "Dal Tadka",
      price: 130,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    },
    {
      id: 24,
      name: "Rajma Chawal",
      price: 120,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    },
    {
      id: 25,
      name: "Chole Bhature",
      price: 130,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
    },
    {
      id: 26,
      name: "Veg Thali",
      price: 180,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    },
    {
      id: 27,
      name: "Chicken Curry",
      price: 220,
      category: "Lunch",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    },
    {
      id: 28,
      name: "Mutton Curry",
      price: 280,
      category: "Lunch",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
    {
      id: 29,
      name: "Fish Curry",
      price: 240,
      category: "Lunch",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
    },
    {
      id: 30,
      name: "Palak Paneer",
      price: 170,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      id: 31,
      name: "Kadai Paneer",
      price: 180,
      category: "Lunch",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      id: 32,
      name: "Chicken Fried Rice",
      price: 180,
      category: "Lunch",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    },

    {
      id: 33,
      name: "Pani Puri",
      price: 50,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 34,
      name: "Bhel Puri",
      price: 60,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 35,
      name: "Vada Pav",
      price: 50,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 36,
      name: "Pav Bhaji",
      price: 100,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 37,
      name: "Onion Pakoda",
      price: 70,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 38,
      name: "Chicken 65",
      price: 180,
      category: "Snacks",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7",
    },
    {
      id: 39,
      name: "Chicken Wings",
      price: 200,
      category: "Snacks",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
    },
    {
      id: 40,
      name: "Spring Rolls",
      price: 120,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
    {
      id: 41,
      name: "Garlic Bread",
      price: 110,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f",
    },
    {
      id: 42,
      name: "Cheese Balls",
      price: 130,
      category: "Snacks",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280",
    },

    {
      id: 43,
      name: "Butter Chicken",
      price: 250,
      category: "Dinner",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    },
    {
      id: 44,
      name: "Chicken Tikka",
      price: 220,
      category: "Dinner",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
    },
    {
      id: 45,
      name: "Tandoori Chicken",
      price: 260,
      category: "Dinner",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
    },
    {
      id: 46,
      name: "Mutton Biryani",
      price: 280,
      category: "Dinner",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    },
    {
      id: 47,
      name: "Dal Makhani",
      price: 160,
      category: "Dinner",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    },
    {
      id: 48,
      name: "Shahi Paneer",
      price: 190,
      category: "Dinner",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      id: 49,
      name: "Veg Korma",
      price: 170,
      category: "Dinner",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    },
    {
      id: 50,
      name: "Jeera Rice",
      price: 90,
      category: "Dinner",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    },
    {
      id: 51,
      name: "Garlic Naan",
      price: 60,
      category: "Dinner",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    },
    {
      id: 52,
      name: "Tandoori Roti",
      price: 40,
      category: "Dinner",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    },

    {
      id: 53,
      name: "Chocolate Cake",
      price: 120,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      id: 54,
      name: "Brownie",
      price: 100,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    },
    {
      id: 55,
      name: "Ice Cream",
      price: 80,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    },
    {
      id: 56,
      name: "Chocolate Shake",
      price: 130,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    },
    {
      id: 57,
      name: "Mango Shake",
      price: 120,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
    },
    {
      id: 58,
      name: "Cold Coffee",
      price: 110,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
    {
      id: 59,
      name: "Club Sandwich",
      price: 150,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    },
    {
      id: 60,
      name: "Veg Sandwich",
      price: 100,
      category: "Timepass",
      type: "Veg",
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
    },
    {
      id: 61,
      name: "Hot Dog",
      price: 150,
      category: "Timepass",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88",
    },
    {
      id: 62,
      name: "Chicken Wrap",
      price: 170,
      category: "Timepass",
      type: "Non-Veg",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
    },
  ]);

  let [selectedCategory, setSelectedCategory] = useState("All");

  let [search, setSearch] = useState("");

  let filteredItems = menuItems.filter((item) => {
    let categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;

    let searchMatch = item.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            🍴 Foodie
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#foodNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="foodNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Offers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <input
              className="form-control"
              type="search"
              placeholder="Search food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn btn-warning ms-lg-2 mt-2 mt-lg-0">
              🛒 Cart
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="bg-warning py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">
            Delicious Food, Delivered Fast 🍔
          </h1>

          <p className="lead">Fresh food • Great taste • Best prices</p>

          <button className="btn btn-dark btn-lg">Order Now</button>
        </div>
      </section>

      {/* MENU */}

      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Explore Our Menu</h2>

          <p className="text-muted">Choose your favourite food</p>
        </div>

        {/* CATEGORY BUTTONS */}

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {["Breakfast", "Lunch", "Snacks", "Dinner", "Timepass", "All"].map(
            (category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "btn btn-warning"
                    : "btn btn-outline-warning"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ),
          )}
        </div>

        {/* FOOD CARDS */}

        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={item.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{
                      height: "220px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title fw-bold mb-1">{item.name}</h5>

                      <span
                        className={
                          item.type === "Veg"
                            ? "badge bg-success"
                            : "badge bg-danger"
                        }
                      >
                        {item.type}
                      </span>
                    </div>

                    <p className="text-muted mb-2">{item.category}</p>

                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-success fw-bold mb-0">
                        ₹{item.price}
                      </h5>

                      <button className="btn btn-warning btn-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>😔 No food found</h4>

              <p className="text-muted">Try another food or category.</p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}

      <footer className="bg-dark text-white mt-5 py-4">
        <div className="container text-center">
          <h4>🍴 Foodie</h4>

          <p className="mb-1">Good food. Good mood.</p>

          <small>© 2026 Foodie. All Rights Reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default Menu;
