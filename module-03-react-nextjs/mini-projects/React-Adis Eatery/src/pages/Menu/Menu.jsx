import { useMemo, useState } from "react";
import menuData from "../../Data/menuData";
import DishCard from "../../components/DishCard/DishCard";
import "./Menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [spicyOnly, setSpicyOnly] = useState(false);

  const categories = [
    "All",
    "Breakfast",
    "Main Dishes",
    "Vegetarian",
    "Drinks",
  ];

  const filteredDishes = useMemo(() => {
    return menuData.filter((dish) => {
      const matchesCategory =
        activeCategory === "All" ||
        dish.category === activeCategory;

      const matchesSearch =
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpicy =
        !spicyOnly || dish.spicy;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesSpicy
      );
    });
  }, [activeCategory, searchTerm, spicyOnly]);

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchTerm("");
    setSpicyOnly(false);
  };

  return (
    <div className="menu-page">

      {/* 
          MENU HERO
       */}

      <section className="menu-heading">
        <p>OUR MENU</p>

        <h1>
          Something delicious
          <br />
          for everyone.
        </h1>

        <span>
          Explore our selection of Ethiopian favorites
          and freshly prepared dishes.
        </span>
      </section>

      {/* 
          MENU CONTROLS
       */}

      <section className="menu-container">

        <div className="menu-controls">

          {/* Search */}
          <div className="menu-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Spicy filter */}
          <button
            className={
              spicyOnly
                ? "spicy-filter active"
                : "spicy-filter"
            }
            onClick={() => setSpicyOnly(!spicyOnly)}
          >
            🌶️ Spicy Only
          </button>

        </div>

        {/* 
            CATEGORIES
         */}

        <div className="categories">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

        {/* 
            RESULTS INFO
         */}

        <div className="menu-results">

          <p>
            Showing{" "}
            <strong>{filteredDishes.length}</strong>{" "}
            {filteredDishes.length === 1
              ? "dish"
              : "dishes"}
          </p>

          {(searchTerm ||
            activeCategory !== "All" ||
            spicyOnly) && (
            <button
              className="clear-filters"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}

        </div>

        {/* 
            DISH GRID
         */}

        {filteredDishes.length > 0 ? (
          <div className="dish-grid">
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">

            <div className="no-results-icon">
              🍽️
            </div>

            <h2>No dishes found</h2>

            <p>
              We couldn't find anything matching
              your search.
            </p>

            <button
              onClick={clearFilters}
              className="reset-menu-button"
            >
              Show All Dishes
            </button>

          </div>
        )}

      </section>
    </div>
  );
}

export default Menu;