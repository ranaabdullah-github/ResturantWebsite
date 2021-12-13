import React,{useState} from 'react'

const SideFilterProducts = ({categoriesData}) => {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = (id) => {
        setTheArray([...theArray, `${id}`]);
    };
    return (
        <>
        {/* {categoriesData.map((categories) => (
                    <div className="col-md-3 col-sm-12 mb-2">
                        <p>{categories.name}</p>
                    </div>
                 ))} */}
            <div className="col-md-3">
            <section id="sidebar">
              <p>
                Home | <b>All Breads</b>
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
                    {categoriesData.map((categories) => (
                    <div className="form-group">
                        <input type="checkbox" id={categories.name} onChange={() => addEntryClick(`${categories.name}`)}/>
                        <label for={categories.name}>{categories.name}</label>
                    </div>
                 ))}
                 {theArray.map(entry =>
                    <div>{entry}</div>
                    )}
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
        </>
    )
}


export default SideFilterProducts
