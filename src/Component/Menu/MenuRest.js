import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import { menu } from "./DataMenujs";
import './MenuRest.css'
function MenuRest() {

  const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return(menuItems)
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    // <div className="tab-menu"></div>
    <>
     <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="tab-menu">
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
        </div>
      </section>
    </main>
      {/* <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        
        {/* {categories.map((category, index) => {
          return (
            <div key={index}>
              {category}
            </div>
          );
        })} */}
        {/* <Categories categories={categories} filterItems={filterItems} /> */}
        {/* <Menu items={menuItems} /> 
      </section>
    </main> */}
    </>

  )
}

export default MenuRest
