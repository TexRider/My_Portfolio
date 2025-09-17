import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/Blogpost';
import './App.css';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isBlogPostOpen, setIsBlogPostOpen] = useState(false);

  const openBlogPost = (post) => {
    setSelectedPost(post);
    setIsBlogPostOpen(true);
    // Disable background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeBlogPost = () => {
    setIsBlogPostOpen(false);
    // Re-enable background scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main>
        <Home />
        <About />
        <Projects />
        <Blog openBlogPost={openBlogPost} />
        <Contact />
      </main>
      
      <Footer />

      {/* Blog Post Modal */}
      {isBlogPostOpen && (
        <BlogPost post={selectedPost} onClose={closeBlogPost} />
      )}
    </div>
  );
}

export default App;