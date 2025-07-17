import React, { useState } from 'react';

const FilterData = (props) => {

    let [allMenusItem , SetallMenusItem] = useState(props.allmenu)
    let [allFiltereditem , SetallFiltereditem] = useState([])

    const allFiteredData = (Category) => {
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
    let allCategory = props.categoriesItem.map((item) => {
        return (
            <button onClick={() => {allFiteredData(item.strCategory)}} type='button'>
           <li className='focus:outline-none text-white bg-yellow-400 hover:bg-black focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-black-900 w-[37%]'>{item.strCategory}</li>
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
                {allFiltereditem}
            </ul>
        </div>
    );
}

export default FilterData;
