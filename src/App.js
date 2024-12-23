import "./App.css";
import LandingPage from "./Pages/LandingPage.jsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Clothing from "./Pages/Clothing.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Signup from "./Pages/Signup.jsx";
import gymFoodBanner from "./Assets/gymFoodBanner.jpg";
import equipmentBanner from "./Assets/equipment-banner.jpg";
import accessoriesBanner from "./Assets/accessories-banner.jpg";
import Login from "./Pages/Login.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/shopping/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="" element={<Clothing />} />
                  <Route
                    path="gymfood"
                    element={
                      <ShopCategory
                        category="gymfood"
                        backgroundImage={gymFoodBanner}
                        bannerTitle="Fuel Your Fitness"
                        bannerDescription="Explore our best gym food products."
                      />
                    }
                  />
                  <Route
                    path="equipments"
                    element={
                      <ShopCategory
                        category="equipments"
                        backgroundImage={equipmentBanner}
                        bannerTitle="Top-Notch Gym Equipment"
                        bannerDescription="Discover premium gym equipment for your workouts."
                      />
                    }
                  />
                  <Route
                    path="accessories"
                    element={
                      <ShopCategory
                        category="accessories"
                        backgroundImage={accessoriesBanner}
                        bannerTitle="Gym Accessories"
                        bannerDescription="Check out our range of accessories for the best gym experience."
                      />
                    }
                  />
                  <Route path="product/:productId" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default App;