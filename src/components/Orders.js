import React,{useState} from 'react';
import {Container,Box,List,ListItem} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import '../App.css';
import {mainMeals} from './meals.js';
import {kubbah} from './meals.js';


let renderMeals=(mealsList)=>{

  let emptyImage='../imgs/noFoodImage.jpg';

  let renderedMealsList=mealsList.map((meal,index)=>(
      <div style={{maxHeight:'85%'}}> 
        <img src={meal.mealImgSrc || emptyImage} alt={meal.mealImgSrc} className='rounded rounded-md' style={{maxHeight:'95%'}} />
        <div className='mb-10'>
           <p className='text-white font-bold justify-center bg-blue-900 mt-10 justify-center rounded rounded-t-md'>{meal.mealImgName}</p>
           {meal.mealPrice.length<2 ? <p className='text-white font-bold justify-center bg-blue-900  justify-center rounded rounded-b-md'>{meal.mealPrice[0]}</p> : meal.mealPrice.map(price=>(<p className='text-white font-bold justify-center bg-blue-900 justify-center rounded rounded-t-md'>{price}</p>)) }
           
           {meal.mealDescription ? <p className='bg-yellow-900 font-bold text-white p-3 rounded rounded-md mt-3 border border-3 border-yellow-950 hover:bg-yellow-800'>{meal.mealDescription}</p> : null}
          
        </div>
        
      </div>
  ))

  return renderedMealsList;
}

function Orders(){
  let [mainMeal,setMainMeal]=useState(kubbah);

    return(
        <React.Fragment>
          <Container className='mainContainer min-w-full mx-auto min-h-full pt-16' style={{width:'100%',height:'fit-content'}}>
            <Box style={{height:'fit-content'}} className='mt-2 w-full mx-auto xsm:pt-5   md:w-8/12 lg:w-6/12 xl:4/12' >
              <List className='flex flex-row overflow-x-auto bottom-5 whitespace-nowrap'>
                <ListItem className='font-bold block  text-lg text-orange-800 hover:cursor-pointer bg-gray-600 rounded rounded-lg border border-2 border-black bg-opacity-30' onClick={()=>{setMainMeal(kubbah)}}>Kubbah</ListItem>
                <ListItem className='font-bold text-lg text-orange-800 hover:cursor-pointer bg-gray-600 rounded rounded-lg border border-2 border-black bg-opacity-30' onClick={()=>{setMainMeal(mainMeals)}}>Main Meals</ListItem>
              </List>
              <Carousel style={{height:'90%'}} autoPlay interval={3000} infiniteLoop >
                 {renderMeals(mainMeal)}
              </Carousel>
            </Box>
          </Container>
        </React.Fragment>
    )
}

export default Orders;