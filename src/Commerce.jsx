import React, { useContext, useState } from 'react'
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react'
import Market from './components/Market'
import { CounterContext } from './Context/Context'

function Commerce() {
  const style = {
    cursor: 'pointer'
  }

   const { counter, positiveCount, negativeCount, handleSubmit } = useContext(CounterContext);


  const articles = Market().images;
  const [show, setShow] = useState(articles.length > 0 ? articles[0].image : '');

  const handleSelect = (selectedImage) => {

    const selected = articles.find(article => article.id === selectedImage)
    let isSelected = true

    if (isSelected) {
      setShow(selected.image)
    }

  }

  const display = articles.map((article) => (
    <Box key={article.id}
      borderRadius='md'
      onClick={() => handleSelect(article.id)}
    >
      <Image src={article.image}
        borderRadius='md'
        style={style}
        className='commerce-img'
      />
    </Box>
  ));

  return (
    <Box mt={{ base: '20px', md: '20px', lg: '50px' }}
      px={['0', '0', '30px']}
      display='flex'
      flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
      justifyContent='space-between'
      width='100%'
      gap={['30px', '30px', '5%']}
    >
      <Box
        width={['100%', '100%', '40%']}>
        <Box
          width='100%'
          height='400px'
          borderRadius={['0', '0', '15px']}
          mb='30px'
        >
          <Image
            src={show}
            alt='shoe image'
            boxSize='100%'
            borderRadius={['0', '0', '15px']}
          />
        </Box>

        <Box display='flex'
          gap='20px'
        >
          {display}
        </Box>
      </Box>

      <Box width={['100%', '100%', '50%']}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        px={['30px', '30px', '0']}
      >
        <Heading as='h2'
          size='xs'
          mb={['10px', '10px', '20px']}
          color='hsl(26, 100%, 55%)'
        >
          SNEAKER COMPANY
        </Heading>
        <Heading as='h1'
          size='xl'
          mb={['20px', '20px', '40px']}
        >
          Fall Limited Edition <br />
          Sneakers
        </Heading>
        <Text mb={['15px', '15px', '25px']}>
          These low-profile sneakers are your perfect
          casual wear <br />compainion.
          Featuring a durable rubber outer sole, they'll <br />
          withstand everything the weather can offer.
        </Text>
        <Box display='flex'
        flexDirection={['row', 'row', 'column']}
        alignItems={['center', 'center', 'flex-start']}
        justifyContent={['space-between', 'space-between', '']}
        mb={['15px', '15px', '0']}
        >
          <Text display='flex'
            alignItems='center'
            gap='10px'
            fontSize='xl'
            fontWeight='700'
          >
            $125.00
            <span>
              50%
            </span>
          </Text>
          <Box className='cancel-box'
            mb={['0', '0', '25px']}
          >
            <Text color='rgb(192, 187, 187)'>
              $250.00
            </Text>
            <div className='cancel'></div>
          </Box>
        </Box>
        <Box display='flex'
        flexDirection={['column', 'column', 'row']}
          gap='5%'
        >
          <Box display='flex'
            width={['100%', '100%', '35%']}
            backgroundColor='gray.100'
            alignItems='center'
            justifyContent='center'
            borderRadius='10px'
            p={['7px', '7px', '3px']}
            mb={['10px', '10px', '0']}
          >
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              color='hsl(26, 100%, 55%)'
              width='33.3%'
              onClick={negativeCount}
            >
              <Text fontWeight='bolder'
                style={style}
              >
                -
              </Text>
            </Box>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='33.3%'
            >
             {counter && <Text fontWeight='bolder'>
                {counter}
              </Text>}
            </Box>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='33.3%'
              onClick={positiveCount}
            >
              <Text color='hsl(26, 100%, 55%)'
                fontWeight='700'
                style={style}
              >
                +
              </Text>
            </Box>
          </Box>
          <Button display='flex'
            gap='10px'
            align='center'
            width={['100%', '100%', '65%']}
            backgroundColor='orange.500'
            color='#fff'
            _hover={{}}
            onClick={handleSubmit}
          >
            <Image src='./images/icon-cart.svg'
              alt='cart'
              color='#fff'
            />
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Commerce