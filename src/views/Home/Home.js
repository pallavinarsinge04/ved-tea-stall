import React  from "react";
import "./Home.css";
import DrinkCard from "./../../component/DrinkCard/DrinkCard";

const drinks=[
    {
        imgUrl:"https://img.freepik.com/free-photo/still-life-with-tea-cup-organic-background_23-2151775138.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid",
              title:"Tea",
             description:"beverage produced by steeping in freshly boiled water the young leaves . ",
             price:20
    },
    {
        imgUrl:"https://img.freepik.com/free-vector/vector-illustration-bottle-full-milk_1441-147.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid",
          title:"Milk",
             description:"Milk is one of the most nutritious drinks in the world.  ",
             price:10
    },
    {
        imgUrl:"https://img.freepik.com/premium-photo/freshness-cup-gourmet-coffee-break-nature_198067-1043688.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid",
          title:"Coffee",
             description:" Some potential health benefits associated with drinking coffee include  liver cancer.  ",
             price:50
    },
    {
        imgUrl:"https://img.freepik.com/free-photo/hot-aroma-tea-wooden-plate-marble-table_114579-24812.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid",
          title:"Black Tea",
             description:"The health benefits of black tea include protecting the heart, lowering cancer risk.",
             price:15
    }
]
function Home(){
    return (
        <div>
        <div className="drink-card-container">
             <DrinkCard
             imgUrl="https://img.freepik.com/free-photo/still-life-with-tea-cup-organic-background_23-2151775138.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid"
              title="Tea"
             description="beverage produced by steeping in freshly boiled water the young leaves . "
             price={20}
         />
          <DrinkCard
          imgUrl="https://img.freepik.com/free-vector/vector-illustration-bottle-full-milk_1441-147.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid"
          title="Milk"
             description="Milk is one of the most nutritious drinks in the world. .  "
             price={10}
           />

<DrinkCard
          imgUrl="https://img.freepik.com/premium-photo/freshness-cup-gourmet-coffee-break-nature_198067-1043688.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid"
          title="Coffee"
             description=" Some potential health benefits associated with drinking coffee include  liver cancer.  "
             price={50}
           />

<DrinkCard
          imgUrl="https://img.freepik.com/free-photo/hot-aroma-tea-wooden-plate-marble-table_114579-24812.jpg?ga=GA1.1.904762670.1720760185&semt=ais_hybrid"
          title="Black Tea"
             description="The health benefits of black tea include protecting the heart, lowering cancer risk.."
             price={15}
           />
           </div>
           </div>


    )
   

}

export default Home