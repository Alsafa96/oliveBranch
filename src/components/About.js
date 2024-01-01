import React from 'react';
import '../App.css';
import {Container,Box} from '@mui/material';

function About(){

    return (
        <React.Fragment>
            <Container className='min-w-full min-h-screen h-fit  mainContainer p-5 pt-20'>
                <Box className='xxxs:w-full xs:w-8/12 sm:w-7/12 lg:w-4/12 mx-auto min-h-full h-fit bg-white rounded rounded-md border border-2 border-black opacity-90 aboutContainer'>
                    <div className='w-full h-2/5 headerContainer flex rounded rounded-tl-md'>
                        <img src='../../imgs/logo2.jpg' alt='logo' className='rounded rounded-t-md w-2/12 h-3/5 rounded-br-full rounded-tr-full' />
                        <p className='mx-auto  text-center'>
                            <p className='mt-10 font-bold text-orange-600 text-xl lg:text-3xl'>
                              Olive Branch Kitchen
                            </p>
                            <span className='block mt-5'>To Order: Contact us on whatsApp:- <br /><span className='font-bold text-green-800'>00962780713579</span> </span>
                        </p>
                    </div>
                    <div className='infoContainer'>
                        <p className='text-center mt-3 bg-orange-400 py-1 w-11/12 mx-auto rounded rounded-lg font-bold text-white'>Important Note:-</p>
                        <p className='text-center mt-2'>Book 2 days before the order.</p>
                        <p className='text-center mt-3 bg-orange-400 py-1 w-11/12 mx-auto rounded rounded-lg font-bold text-white'>Delivery Cost:-</p>
                        <p className='text-center mt-2'>2.5 JDs</p>
                        <p className='text-center mt-3 bg-orange-400 py-1 w-11/12 mx-auto rounded rounded-lg font-bold text-white'>Follow us on our page on instagram:-</p>
                        <a href='https://www.instagram.com/olivebranch.kitchen' className='block text-green-800 font-bold break-words p-1 text-center'>https://www.instagram.com/olivebranch.kitchen</a>
                        <div className='w-11/12  mx-auto'>
                            <p className='mt-3 bg-orange-400 font-bold text-white rounded rounded-md text-center'>Times</p>
                            <p className=' ml-2 text-center font-bold text-green-900'>8:00 a.m - 12:00 a.m</p>
                            <p className='ml-2 font-bold text-center text-green-900'>All days of week!</p>
                        </div>
                        
                    </div>
                    <div className='w-full h-fit flex bottomContainer ' style={{justifyContent:'flex-end'}}>
                            <img src='../../imgs/logo2.jpg' alt='logo' className='h-3/5 w-2/12'/>
                    </div>
                    
                </Box>
            </Container>
        </React.Fragment>  
    )

}

export default About;