import React,{useState,useEffect} from 'react';
import Header from '../Home/Header/Header'
import HeaderToMainRoute from '../Home/Header/HeaderToMainRoute';
import Slider from '../Slider'
import AllProducts from './AllProducts/AllProducts'
import AllProductsPagination from './AllProducts/AllProductsPagination';
import { PRODUCT_PER_PAGE } from './AllProducts/utils/constants';
import NavbarShopping from './NavbarShopping/NavbarShopping'
import Pagination from './Pagination/Pagination'


const ViewProducts = ({products,categoriesData,onAddToCart,totalItems}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page,setPage]=useState(1)
    const [totalPages,setTotalPage]=useState(0);
 

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
   
    setLoading(false);
    setPosts(products);
    console.log("Products")
    console.log(products)
    console.log("PostInAllProduction")
    console.log(posts)
    let noPage=products.length/PRODUCT_PER_PAGE
    setTotalPage(Math.ceil(noPage))
    console.log("totalPages==="+totalPages)
    
  };

  fetchPosts();
}, []);
const handleClick=num=>{
    setPage(num);
}
    return (
        <div>
            <Header typePage={false}/>
            {/* <HeaderToMainRoute/> */}
            <Slider/>
            <NavbarShopping totalItems={totalItems}/>
            {loading ? <p>Loading...</p> :<>
                {/* {products,categoriesData, onAddToCart}) */}
            {/* <AllProductsPagination products={products} categoriesData={categoriesData} onAddToCart={onAddToCart}/> */}
            <AllProducts products={products} totalPages={totalPages} page={page} categoriesData={categoriesData} onAddToCart={onAddToCart} handleClick={handleClick}/>
           
            {/* <Posts products={posts} page={page} onAddToCart={onAddToCart}/> */}
            </>}
           
            {/* <AllProductsPagination products={products} categoriesData={categoriesData} onAddToCart={onAddToCart}/> */}
        </div>
    )
}

export default ViewProducts
