import React, { useEffect,useState } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import FilterData from './FilterData';

const Menu = () => {

    let [Menus , SetMenu] = useState([])
    let [Category , SetCategory] = useState([])
    let [loading , Setloading] = useState(true)
    let [singleDish , SetsingleDish] = useState([])

    async function getAllTheMenu() {
        const UPI_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(UPI_URL)
        let data = await response.json()
       SetMenu(data.meals)
       Setloading(false)
    }
    async function getAllTheCategory() {
        const UPI_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(UPI_URL)
        let catergoriesData = await response.json()
       SetCategory(catergoriesData.categories)
    }
    //get single dish
    async function getAllSingleDish() {
        const UPI_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch(UPI_URL)
        let singleDishes = await response.json()
       SetsingleDish(singleDishes.meals)
       
    }
    useEffect(() => {
        getAllTheMenu()
        getAllTheCategory()
        getAllSingleDish()

      
    }, []);
    console.log("menus are",Category)
    
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
          {!loading ? <SpecialDishes specialmenu = {Menus} /> : <h1 className='text-[30px] text-center'>loading..</h1>}
          {!loading ? <FilterData categoriesItem = {Category} 
          allmenu = {Menus}
          getAllSingleDish = {singleDish}
          SetsingleDish = {SetsingleDish}
          /> : null}
          
        </div>
    ); 
}

export default Menu;
