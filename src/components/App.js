import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import Home from '../pages/Home';
import Loader from './Loader';
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
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="App">
      <header className="App-header">
        <Home posts={posts} />
      </header>
    </div>
  );
}

export default App;
