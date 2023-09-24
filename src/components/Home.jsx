import React from 'react';
import styled from 'styled-components';
import profilePic from '../images/profile_pic.jpg'

const Header = styled.h1`
    text-align: center;
`

const Main = styled.div`
    display: flex;
    margin: 3em;
`

const Bio = styled.p`
    padding: 1em;
    align-self: center;
`

const Home = () => {
    return (
        <>
        <Header>Welcome to my portfolio!</Header>
        <Main>
        <img src={profilePic} alt="Oleksii's photo" width="500" height="500"/>
        <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi erat, pulvinar eu neque ut, faucibus vehicula purus. Nam pharetra dolor non velit sodales tincidunt. Curabitur nulla odio, venenatis nec venenatis semper, eleifend vel urna. Fusce quis odio tristique, accumsan ligula sit amet, molestie libero. Vestibulum vitae ligula fermentum, posuere urna eu, mattis metus. Vestibulum aliquet gravida facilisis. Proin placerat dolor quis justo fringilla, vehicula semper erat rhoncus. Nam erat enim, porttitor in erat et, mattis laoreet erat. Ut bibendum aliquet nunc, eu pulvinar metus pellentesque at. Donec metus erat, semper nec pellentesque eget, sagittis in purus. Maecenas rhoncus aliquet leo a vehicula. Duis in massa efficitur, rutrum est nec, ultrices magna. Etiam mollis quam non dui convallis, ac interdum ligula placerat. Proin aliquet leo id volutpat mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas condimentum lorem sit amet faucibus tincidunt.</Bio>
        <Bio>Donec sodales, mi vel venenatis bibendum, nibh magna tincidunt nisi, in elementum elit turpis ac dui. Nam ultricies elit at blandit sollicitudin. Ut sed neque eleifend, tempor dolor ac, convallis turpis. Mauris vitae fermentum nunc, eu finibus ante. Vestibulum vitae elit ut erat egestas tincidunt id ut elit. Sed dignissim, neque at condimentum interdum, augue metus tristique augue, et pulvinar erat lorem sed urna. In fermentum dui lacus, vel ullamcorper ligula luctus et.</Bio>
        </Main>
        </>
        );
}
 
export default Home;