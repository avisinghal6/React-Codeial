import { useEffect } from 'react';
import { getPosts } from '../api';
import Home from '../pages/Home';
function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
