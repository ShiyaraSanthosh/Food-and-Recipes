import React, { useState } from 'react';

const FilterData = (props) => {

    let [allMenusItem , SetallMenusItem] = useState(props.allmenu)
    let [allFiltereditem , SetallFiltereditem] = useState([])
    let [activeClass , SetactiveClass] = useState("Beef")

    //show single dish
    const getAllSingleDish = props.getAllSingleDish.map((item) => {
        return(
             <li>
                    <img className = 'max-w-[80%] rounded overflow-hidden shadow-lg'src= {item.strMealThumb}/>
                    <hi>{item.strMeal}</hi>
            </li>
        )
    })
    
//show dishes using onclick
    const allFiteredData = (Category) => {
        props.SetsingleDish([])
        SetactiveClass (Category)
        let filteredDishes = allMenusItem.filter((item) => {
            return item.strCategory === Category
        }).map((item) => {
            return (
                <li>
                    <img className = 'max-w-[80%] rounded overflow-hidden shadow-lg'src= {item.strMealThumb}/>
                    <hi>{item.strMeal}</hi>
                </li>
            )

        })
        SetallFiltereditem(filteredDishes)
    }
    //show all the item
    let allCategory = props.categoriesItem.map((item) => {
        return (
            <button onClick={() => {allFiteredData(item.strCategory)}} type='button'>
           <li className={`focus:outline-none text-white bg-yellow-400 hover:bg-black focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-black-900 w-[37%] ${item.strCategory === activeClass ? "active" : ""}`}>{item.strCategory}</li>
           </button>
        )
    })
    return (
        <div>
            <h1 className='text-center text-[30px] font-extrabold text-shadow-lg/30 mt-[30px]'>choose your favorite categories</h1>
           <ul className=' grid grid-cols-4 gap-10 text-[18px] mt-[60px] ml-[10%]'>
            {allCategory}
            </ul> 
            <ul className='grid grid-cols-4 gap-10 m-auto p-[20px] ml-[5%]'>
                {getAllSingleDish}
                  {allFiltereditem.length > 0 ? allFiltereditem : <h2 className='text-red h-[100px] p-[30px] ml-[150%] mt-[40px] text-[25px] border border-black-200 rounded-lg w-96'>Sorry..! No item found </h2>}
            </ul>
        </div>
    );
}

export default FilterData;
