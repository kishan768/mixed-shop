import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import {
  AboutPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  LoginPage,
  PaymentPage,
  ProductPage,
} from "./pages";
import { CartContainer, Footer, Product, Sidebar } from "./components";
import { useSidebarContext } from "./context/SidebarContext";
export default function App() {
  const { isSidebarOpen } = useSidebarContext();
  return (
    <main>
      <BrowserRouter>
        {/* if (isSidebarOpen) return ( ); */}

        {isSidebarOpen ? (
          <nav>
            <Sidebar />
          </nav>
        ) : (
          <NavBar />
        )}

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<CartContainer />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </main>
  );
}
