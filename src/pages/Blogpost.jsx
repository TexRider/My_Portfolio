import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../assets/data/BlogData";

const BlogPost = ({ post, onClose }) => {
  // Handle escape key press - moved to top level
  React.useEffect(() => {
    if (!post) return; // Only add listener if post exists
    
    const handleEscape = (e) => {
      if (e.keyCode === 27) onClose();
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [post, onClose]);

  // Handle case where post might be null
  if (!post) {
    return null;
  }

  const fullPost = blogPosts.find(p => p.id === post.id) || post;

  // Handle click on overlay to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOverlayClick}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm font-medium rounded-full">
              {fullPost.category}
            </span>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1">
            <div className="h-64 md:h-96">
              <img 
                src={fullPost.image} 
                alt={fullPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {fullPost.date}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {fullPost.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {fullPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {fullPost.excerpt}
              </p>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: fullPost.content }} 
                  className="blog-content"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogPost;