import React, {useContext} from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";
import Modals from './Modals';
import { CounterContext } from '../Context/Context';

function Header() {

  const {countRecieve} = useContext(CounterContext)

  const style = {
    cursor: 'pointer'
  };

  const [open, setOpen] = React.useState({
    display: 'none'
  });

  const handleOpen = () => {
    setOpen({
      display: 'block'
    });
  };

  const handleClose = () => {
    setOpen({
      display: 'none'
    });
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Box w='100%' style={{ position: 'relative' }}>

      <nav>
        <Box display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box display='flex'
            gap='70px'
            alignItems='center'
          >
            <Box display='flex'
              alignItems='center'
              gap='20px'
            >
              <Box display={['flex', 'flex', 'none']}
                alignItems='center'
                mt='8px'
              >
                <AiOutlineMenuUnfold
                  style={style}
                  className='icon'
                  size='25px'
                  onClick={handleOpen}
                />
              </Box>
              <Heading as='h2'>
                sneakers
              </Heading>
            </Box>
            <Box display={['none', 'none', 'block']}>
              <ul className='ul'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </Box>

          </Box>
          <Box display='flex'
            alignItems='center'
            gap='30px'
          >
            <Box className='cart'>
              <Image src='./images/icon-cart.svg'
                alt='cart image'
                style={style}
                onClick={toggleModal}
              />
              {countRecieve > 0 && <p className='cart-num'>{countRecieve}</p>}
            </Box>
            <Image src='./images/avatar.png'
              alt='avatar'
              boxSize='30px'
              borderRadius='full'
              style={style}
            />
          </Box>
        </Box>
      </nav>

      <Box className='menu1'
        display={['flex', 'flex', 'none']}
        style={open}
        onClick={handleClose}
      >
        <MdCloseFullscreen className='close'
          size='25px'
          style={style}
        />
        <ul className='ul ul1'>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Box>
      {isModalOpen && <Modals isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </Box>
  );
}

export default Header;
