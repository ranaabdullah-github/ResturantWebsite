import React from 'react'
import './Pagination.css'

const Pagination = ({totalPages,handleClick}) => {
    const pages=[...Array(totalPages).keys()].map(num => num+1);
    console.log(pages);
    return (
        <div class="divPage">
            {pages.map(num=>(
                <button class="btnPage"
                key={num}
                onClick={()=> handleClick(num)}
                >{num}</button>
            ))}
        </div>
    )
}

export default Pagination
