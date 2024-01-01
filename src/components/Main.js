import "../App.css";
import React from 'react'
import {Container,Box} from '@mui/material'
import {useNavigate} from 'react-router-dom';
function Main() {
 
  let navigate=useNavigate();
  return (
    <React.Fragment>
      <Container className='h-fit flex justify-center items-center min-h-full min-w-full mainContainer' disableGutters>
        <Box className='min-w-full h-screen min-h-full bg-black bg-opacity-30'>
          <Box className='h-5/6 w-full absolute top-20'>
            <Box className='bg-black mx-auto my-auto xxxs:w-11/12 xxs:w-10/12  xs:w-8/12 sm:w-6/12  p-2 rounded rounded-md bg-opacity-50 verticalAlignment'>
                <p className='w-full text-center font-bold text-white text-2xl title'>Olive Branch Kitchen</p>
                <img src="../imgs/log.png" alt="logo" className='mt-5 mx-auto block ' width={200} height={500}  />  

                <p className='w-full mt-1 text-center text-xl font-bold p-2 text-white description'>This is the place where you can get the taste of the original Iraqi Kitchen</p>
            </Box>
           
            <button className=' bg-yellow-800 block mt-6 mx-auto text-2xl rounded rounded-lg p-3 text-white font-bold' onClick={()=>navigate('dishes')}>View Dishes</button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Main;
