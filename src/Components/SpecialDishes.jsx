import React from 'react';

const SpecialDishes = (props) => {
    let maxImg = 8;
    let specialMen = props.specialmenu.map((menuItem,index) => {
        if(index < maxImg){
            return(
            <li className='mt-[40px] '>
               
                <img className = 'max-w-[80%]'src= {menuItem.strMealThumb} />
                 <h1 className=' text-[18px]'>{menuItem.strMeal}</h1>
                
            </li>
        )

        }
    });
    return (
        <div >
            <h1 className='m-auto max-w-[200px] text-[20px] font-extrabold text-shadow-lg/30 mt-[50px]'>Our Special Dishes</h1>
            <p className=' max-w-[80%] m-auto p-[20px] ml-[15%] text-[17px]'>Indian cuisine boasts a wide array of dishes, with some considered special due to their unique preparation, rich flavors, or association with special occasions.</p>
            <ul className='grid grid-cols-4 gap-10 m-auto p-[20px] ml-[5%]'>
                {specialMen}
            </ul>
        </div>
    );
}

export default SpecialDishes;
