import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getPosts } from '../api';
import Home from '../pages/Home';
import Loader from './Loader';
import Navbar from './Navbar';
import { Login } from '../pages';
// adding comments
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);

      if (response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };
    fetchPosts();
    console.log('inside');
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home posts={posts} />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
