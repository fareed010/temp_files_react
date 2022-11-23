import { useState, useEffect } from "react";
import Posts from "./components/posts";
import Pagination from "./components/pagination";

import "./App.css";
import data from "./data/capi.json";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    setPosts(data.results);
    setLoading(false);
  }, []);

  // Pagination

  const idxOfLastPost = currentPage * postsPerPage;
  const idxOfFirstPost = idxOfLastPost - postsPerPage;
  const currentPosts = posts.slice(idxOfFirstPost, idxOfLastPost);

  // change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(currentPosts);
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3 text-center">My News - Fake</h2>
      <div className="row">
        <Posts posts={currentPosts} loading={loading} />
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
