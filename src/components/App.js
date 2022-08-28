import { useEffect } from 'react';
import { getPosts } from '../api';

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
        <p>hello</p>
      </header>
    </div>
  );
}

export default App;
