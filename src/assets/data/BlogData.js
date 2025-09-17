export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    date: "April 15, 2023",
    readTime: "5 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features without writing a class component. They've revolutionized how we write React code, making it more concise and easier to understand.</p>
      
      <h3>Why Hooks?</h3>
      <p>Before Hooks, stateful logic was often trapped inside class components, making it difficult to reuse this logic between components. Complex components became hard to understand due to scattered lifecycle methods.</p>
      
      <p>Hooks solve these problems by allowing you to:</p>
      <ul>
        <li>Reuse stateful logic between components</li>
        <li>Split one component into smaller functions based on related pieces</li>
        <li>Use more of React's features without classes</li>
      </ul>
      
      <h3>Basic Hooks</h3>
      <p>Let's explore the most commonly used hooks:</p>
      
      <h4>useState</h4>
      <p>The useState hook allows you to add state to functional components:</p>
      
      <pre><code>const [state, setState] = useState(initialState);</code></pre>
      
      <p>Here's a simple counter example:</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h4>useEffect</h4>
      <p>The useEffect hook allows you to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.</p>
      
      <p>Here's an example of fetching data with useEffect:</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]); // Only re-run the effect if userId changes

  return (
    <div>
      {user ? <p>{user.name}</p> : <p>Loading...</p>}
    </div>
  );
}</code></pre>
      
      <h3>Custom Hooks</h3>
      <p>One of the most powerful features of Hooks is the ability to create your own custom hooks. This lets you extract component logic into reusable functions.</p>
      
      <p>Here's an example of a custom hook that manages form input:</p>
      
      <pre><code>import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function MyForm() {
  const nameInput = useInput('');
  const emailInput = useInput('');

  return (
    <form>
      <input type="text" {...nameInput} placeholder="Name" />
      <input type="email" {...emailInput} placeholder="Email" />
    </form>
  );
}</code></pre>
      
      <h3>Conclusion</h3>
      <p>React Hooks have fundamentally changed how we write React applications. They make code more reusable, easier to read, and simpler to test. While there's a learning curve, the benefits are well worth the effort.</p>
      
      <p>Start incorporating hooks into your projects today, and you'll quickly appreciate the cleaner, more maintainable code they enable.</p>
    `
  },
  {
    id: 2,
    title: "Mastering TailwindCSS",
    excerpt: "Discover advanced techniques and best practices for working with TailwindCSS in large projects.",
    date: "March 22, 2023",
    readTime: "8 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `
      <h2>Advanced TailwindCSS Techniques</h2>
      <p>TailwindCSS has taken the CSS world by storm with its utility-first approach. While it's easy to get started, mastering it requires understanding some advanced techniques.</p>
      
      <h3>Customizing Your Configuration</h3>
      <p>One of Tailwind's most powerful features is its extensive customization options. Instead of fighting with the framework, you can tailor it to your specific needs.</p>
      
      <p>Create a tailwind.config.js file to customize:</p>
      
      <pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}</code></pre>
      
      <h3>Extracting Components</h3>
      <p>While utility classes are powerful, they can become repetitive. Use the @apply directive to extract repeated utility patterns:</p>
      
      <pre><code>.btn {
  @apply py-2 px-4 rounded font-semibold;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}</code></pre>
      
      <h3>Responsive Design</h3>
      <p>Tailwind makes responsive design incredibly straightforward with its mobile-first breakpoint system:</p>
      
      <pre><code>&lt;div class="w-16 h-16 bg-red-300 sm:bg-green-300 md:bg-blue-300 lg:bg-pink-300 xl:bg-teal-300"&gt;&lt;/div&gt;</code></pre>
      
      <h3>Dark Mode</h3>
      <p>Implementing dark mode is simple with Tailwind's dark variant:</p>
      
      <pre><code>&lt;div class="bg-white dark:bg-gray-800"&gt;
  &lt;h1 class="text-gray-900 dark:text-white"&gt;Dark mode is easy!&lt;/h1&gt;
  &lt;p class="text-gray-600 dark:text-gray-300"&gt;This will change color in dark mode.&lt;/p&gt;
&lt;/div&gt;</code></pre>
      
      <h3>Conclusion</h3>
      <p>TailwindCSS offers a powerful, flexible approach to styling that scales beautifully with your projects. By mastering these advanced techniques, you can create maintainable, responsive designs faster than ever before.</p>
    `
  },
  {
    id: 3,
    title: "Animations with Framer Motion",
    excerpt: "Create stunning animations and transitions in your React applications using Framer Motion.",
    date: "February 10, 2023",
    readTime: "6 min read",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `
      <h2>Creating Smooth Animations with Framer Motion</h2>
      <p>Framer Motion is a powerful animation library for React that makes creating smooth, complex animations simple and intuitive.</p>
      
      <h3>Basic Animations</h3>
      <p>The simplest way to animate with Framer Motion is using the motion component and its animate prop:</p>
      
      <pre><code>import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div
      animate={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      Animated element
    </motion.div>
  );
}</code></pre>
      
      <h3>Entry Animations</h3>
      <p>You can easily create entrance animations using the initial and animate props:</p>
      
      <pre><code>&lt;motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
&gt;
  This will fade in and slide up
&lt;/motion.div&gt;</code></pre>
      
      <h3>Hover Animations</h3>
      <p>Adding interactive animations is straightforward with the whileHover prop:</p>
      
      <pre><code>&lt;motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="px-6 py-3 bg-blue-500 text-white rounded"
&gt;
  Hover me
&lt;/motion.button&gt;</code></pre>
      
      <h3>Scroll-Triggered Animations</h3>
      <p>You can create animations that trigger when elements enter the viewport:</p>
      
      <pre><code>&lt;motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
&gt;
  This animates when it comes into view
&lt;/motion.div&gt;</code></pre>
      
      <h3>Keyframe Animations</h3>
      <p>Create more complex animations using keyframes:</p>
      
      <pre><code>&lt;motion.div
  animate={{
    scale: [1, 1.2, 1.2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}
/&gt;</code></pre>
      
      <h3>Conclusion</h3>
      <p>Framer Motion provides an incredibly powerful yet simple API for creating engaging animations in React applications. With its declarative approach and extensive feature set, you can bring your interfaces to life with minimal effort.</p>
    `
  }
];