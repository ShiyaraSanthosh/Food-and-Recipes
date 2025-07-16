import React, { useEffect,useState } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';

const Menu = () => {

    let [Menus , SetMenu] = useState([])

    async function getAllTheMenu() {
        const UPI_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(UPI_URL)
        let data = await response.json()
       SetMenu(data.meals)
    }
    useEffect(() => {
        getAllTheMenu()

      
    }, []);
    console.log("menus are",Menus)
    
    // let menuImages = Menus.map((item) => {
    //     console.log(item.strMealThumb)
    //     return (
            
    //         <>
    //         <h1>{item.strMeal}</h1>
    //         <img src={item.strMealThumb} alt={item.strMeal} />
    //         </>
    //     )
    // })

    return (
        <div>
          <Hero />
          <SpecialDishes specialmenu = {Menus} />
        </div>
    );
}

export default Menu;
