import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Blog } from "./components/Blog";
import { BlogPage } from "./components/BlogPage";
import { BlogPost } from "./components/BlogPost";
import { LoadingScreen } from "./components/LoadingScreen";

import { Footer } from "./components/Footer";
import ContactForm from "./components/connect";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && <LoadingScreen />}
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              {/* <Projects /> */}
              <Blog />
              <ContactForm />
            </>
          } />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
