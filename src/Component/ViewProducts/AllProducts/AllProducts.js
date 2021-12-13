import React,{useState,useEffect} from 'react';
import "./AllProducts.css";
import Product from "../Product/Product"
import {PRODUCT_PER_PAGE} from './utils/constants'
import Pagination from '../Pagination/Pagination'
const AllProducts = ({ products,totalPages,page,categoriesData, onAddToCart,handleClick }) => {
  // ----------------------------------------------------------------------------------
  // Pagination Calculation
  // ------------------------------------------------------------------------------------
  const startIndex=(page-1) * PRODUCT_PER_PAGE;////noPage-1 * no Page to view
  let toPage=0;
  toPage=startIndex + PRODUCT_PER_PAGE;
 
  let selectedProducts=products.slice(startIndex,toPage)////Selected no of Product Card Display
 

  console.log("selectedProducts")
  console.log(selectedProducts)
  // ---------------------------------------------------------------------------------------------
  const [xcatigory,setxCatigory]=useState("All")
  const [viewProducts, setViewProducts] = useState([]);

  useEffect(() => {
    setViewProducts(selectedProducts);
         }, []);


  useEffect(()=>{
    let filteredProducts = selectedProducts;
    if (xcatigory!="All"){
      filteredProducts = filteredProducts.filter((product) => product.categories[0].name==xcatigory)
   
    }
    setViewProducts(filteredProducts)
    console.log(xcatigory)
  },[xcatigory])
  
  const handleFilterChange = (e) => {
    //changes state 
    setxCatigory(e.target.id)
  }

   console.log("xcatigory====  "+xcatigory);
    return (
    <>
     
      <div className="filter">
        
        <button
          className="btn btn-default"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-filter"
          aria-expanded="true"
          aria-controls="mobile-filter"
        >
          Filters<span className="fa fa-filter pl-1"></span>
        </button>
      </div>
      <div className="container-fluid">
        {/* <!-- Sidebar filter section --> */}
        <div className="row">
          {/* --------------------------------------------------------------------------- */}
          {/* ---------------------Side Filter Categories-------------------------------- */}
          {/* --------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <section id="sidebar">
              <p>
                Menu | <b>All Meals</b>
              </p>
            
              <div className="border-bottom pb-2 ml-2">
                <h4 id="burgundy">Filters</h4>
              </div>
              <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Categories</h6>
                <div id="orange">
                  <span className="fa fa-minus"></span>
                </div>
                <form>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="All" onClick={(e) => handleFilterChange(e)} checked/>
                      <label class="form-check-label" for="All">
                      All
                      </label>
                    </div>
                    {categoriesData.map((categories) => (
                     < div class="form-check">
                      <input  class="form-check-input" type="radio" name="flexRadioDefault" id={categories.name} onClick={(e) => handleFilterChange(e)} />
                      <label class="form-check-label" for={categories.name}>
                      {categories.name}
                      </label>
                    </div>
                    
                 ))}
                 {/* {selected.map((cate) =>(
                   <p>{cate}</p>
                 ))} */}
                </form>
              </div>
              <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Accompainments</h6>
                <div id="orange">
                  <span className="fa fa-minus"></span>
                </div>
                <form>
                  <div className="form-group">
                    
                    <input type="checkbox" id="tea" />
                    <label for="tea">Tea Cakes</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="cookies" />
                    <label for="cookies">Cookies</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="pastries" />
                    <label for="pastries">Pastries</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="dough" />
                    <label for="dough">Cookie Dough</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="choco" />
                    <label for="choco">Chocolates</label>
                  </div>
                </form>
              </div>
              <div className="py-2 ml-3">
                <h6 className="font-weight-bold">Top Offers</h6>
                <div id="orange">
                  <span className="fa fa-minus"></span>
                </div>
                <form>
                  <div className="form-group">
                  
                    <input type="checkbox" id="25off" />
                    <label for="25">25% off</label>
                  </div>
                  <div className="form-group">
                   
                    <input type="checkbox" id="5off" />
                    <label for="5off" id="off">
                      5% off on artisan breads
                    </label>
                  </div>
                </form>
              </div>
            </section>
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* ------------------------------------Side Food Products -------------------- */}
          {/* --------------------------------------------------------------------------- */}
          <div className="col-md-9">
            {/* <!-- products section --> */}
            <section id="productss">
              <div className="container-product">
                <div className="d-flex flex-row">
                  <div className="text-muted m-2" id="res">
                    No Page {page} 
                  </div>
                  <div className="ml-auto mr-lg-4">
                    <div id="sorting" className="border rounded p-1 m-1">
                     
                      <span className="text-muted">Sort by</span>
                      <select name="sort" id="sort">
                        <option value="popularity">
                          <b>Popularity</b>
                        </option>
                        <option value="prcie">
                          <b>Price</b>
                        </option>
                        <option value="rating">
                          <b>Rating</b>
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                {selectedProducts.map(product => (
                          <Product product={product}  onAddToCart={onAddToCart} />
                        ))}
{/* ------------------------------OKKKK-------------------------------------------- */}
                {/* {selectedProducts.map((prod)=>
               <div key={prod.id} className="col-md-3 col-sm-12 mb-2 mr-5">
                      <Product product={prod}  onAddToCart={onAddToCart} />
                    </div>
               
               )} */}
                
           
                
                </div>
               
              </div>
            </section>
            <div className='row mt-3'>
                <Pagination totalPages={totalPages} handleClick={handleClick}/>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllProducts;
