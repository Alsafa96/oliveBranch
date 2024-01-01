import './App.css';
import AppBar from '@mui/material/AppBar';
import { Typography,Menu,MenuItem } from '@mui/material';
import Hamburger from 'hamburger-react';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes,Route,useNavigate } from 'react-router-dom';
import { usePopupState,bindTrigger,bindMenu } from 'material-ui-popup-state/hooks';
import Main from './components/Main';
import Orders from './components/Orders';
import About from './components/About';

function App() {
  const [isOpen,setOpen]=useState(false);

  function test(isOpen){
    if(isOpen){
      setOpen(false);
    }
    else{
      setOpen(true);
      document.querySelector('#openMenuButton').click();
    }
  }

  function handleMenuClosure(){
    popupState.close();
    setOpen(false);
  }
 
  const popupState=usePopupState({variant:'popover',popupId:'demoMenu'})
  return (
    <div className="App">
        <AppBar>
          <Toolbar className='block'>
            <Hamburger toggled={isOpen} toggle={()=>test(isOpen)}  direction="right" variant='contained' {...bindTrigger(popupState)} />
                <button className='h-16 w-12  hidden ' variant='container' {...bindTrigger(popupState)}  id='openMenuButton'  >Hello</button>
            <Typography mx={'auto'} fontSize={18} color='white' fontWeight={'bold'}>Olive Branch Kitchen</Typography>
          </Toolbar>
        </AppBar>
        
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='dishes' element={<Orders />} />
        </Routes>
        <Menu {...bindMenu(popupState)} className='mt-8' onClose={handleMenuClosure} >
          <MenuItem onClick={handleMenuClosure}>
            <Link to='/'>Main Page</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClosure}>
            <Link to='dishes'>Dishes Menu</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClosure}>
            <Link to='about'>About</Link>
          </MenuItem>
        </Menu>

    </div>
  );
}

export default App;
