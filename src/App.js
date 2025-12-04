import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import ZKCourse from './pages/ZKCourse';
import RustCourse from './pages/RustCourse';
import Blog from './pages/Blog';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-100 font-sans selection:bg-purple-100 selection:text-purple-900 dark:selection:bg-purple-900 dark:selection:text-purple-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/zk" element={<ZKCourse />} />
            <Route path="/courses/rust" element={<RustCourse />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<StoryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
