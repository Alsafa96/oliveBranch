import React from 'react';
import {Container,Box} from '@mui/material';

function Contact(){
    return (
        <React.Fragment>
            <Container className='min-w-full h-full bg-blue-900 contactContainer ' maxWidth={false} disableGutters>
                <Box className='w-full h-full bg-black  bg-opacity-60 text-opacity-100'>
                    <p className='absolute font-bold text-white top-36 text-3xl mx-auto left-16 text-opacity-100'>Contact Us</p>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Contact;