import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Detail = () => {
  return (
    <div>
        <Navbar />
    <Container>
        <Background>
            <img src='/images/slider-1.jpg' alt='movieBackground' />
        </Background>
    </Container>
    </div>
  )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
    left: 0px;
    right: 0px;
    top: 0px;
    opacity: 0.8;
    position: fixed;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;
    }

    
`
export default Detail