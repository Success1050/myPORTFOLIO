import Home from "./pages/HomeComponent.jsx";
import About from "./pages/AboutComponent.jsx";
import Services from "./pages/ServicesComponent.jsx";
import Projects from "./pages/ProjectsComponent.jsx";
import Shop from "./pages/ShopComponent.jsx";
import Contact from "./pages/ContactComponent.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Cart from "./pages/Cart.jsx";
import Footer from "./PageLayout/Footer.jsx";
import HeaderComponent from "./PageLayout/HeaderComponent.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./PageLayout/SharedLayout.jsx";
const App = () => {
  return (
    <>
      <div>
        <Router>
          <HeaderComponent />

          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/Shop' element={<Shop />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
          <section className='bg-white p-8 py-14'>
            <Footer />
          </section>
        </Router>
      </div>
    </>
  );
};

export default App;