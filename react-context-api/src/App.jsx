import React from 'react';
import { PostContext } from './context/PostContext';
import PostsPage from './components/PostPage';
import './App.css';
import { AlertProvider } from './context/AlertContext';


const posts = [
  { id: 1, title: 'React Basis', content: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.', category: 'FrontEnd' },
  { id: 2, title: 'What is Express.js?', content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', category: 'Backend' },
  { id: 3, title: 'Run JavaScript Everywhere', content: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.', category: 'Backend' },
  { id: 4, title: 'Build fast, responsive sites with Bootstrap', content: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.', category: 'Frontend' },
];

function App() {
  return (
    <PostContext.Provider value={posts}>
      <AlertProvider>

        <div className="App">
          <PostsPage />
        </div>

      </AlertProvider>
    </PostContext.Provider>
  );
}

export default App;