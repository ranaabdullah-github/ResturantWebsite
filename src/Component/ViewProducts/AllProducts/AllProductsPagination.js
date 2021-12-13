import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import PaginationNow from './PaginationNow';
import axios from 'axios';
// import './App.css';

const AllProductsPagination = ({products,categoriesData, onAddToCart}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [page,setPage]=useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      
    setLoading(false);
    setPosts(products);
    console.log("Products")
    console.log(products)
    console.log("Possssst")
    console.log(products)
      
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      {loading ? <p>Loading...</p> :<>
      <h1>Data</h1>
      <Posts products={posts} page={page} onAddToCart={onAddToCart}/>
      </>}
      {/* <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <PaginationNow
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default AllProductsPagination;
