import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    //tarayicidaki urle gore sayfalama yapmamizi saglar
    <BrowserRouter>
      <div className="page">
        <Header />

        <Routes>
          {/*Route: Projedeki her sayfa icin tanimlanir
        Route'a yol ve yol icin ekrana basilacak bileseni veririz */}
          <Route path="/" element={<MainPage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          {/*dinamik Route */}
          <Route path="/urun/:id" element={<ProductDetail />} />
          {/*nested routes > ic ice yollar*/}
          <Route path="/kategori" element={<CategoryPage />}>
            <Route
              path="hikaye"
              element={
                <p>
                  Hikaye Kategorili Urunlere ulasmak icin
                  {
                    <Link to={"http://localhost:5173/urunler?kategori=Hikaye"}>
                      <span> tiklayiniz</span>
                    </Link>
                  }
                </p>
              }
            />
            <Route
              path="roman"
              element={
                <p>
                  Roman Kategorili Urunlere ulasmak icin
                  {
                    <Link to={"http://localhost:5173/urunler?kategori=Roman"}>
                      <span> tiklayiniz</span>
                    </Link>
                  }
                </p>
              }
            />
          </Route>
          {/* tanimsiz bir routea yonlendirir*/}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
