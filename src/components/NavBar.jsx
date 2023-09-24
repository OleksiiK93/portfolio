import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    list-style-type: none;
    background-color: pink;
    margin: 0;
`
const RightGroup = styled.div`
    display: flex;
    justify-content: space-between;
`

const RightItem = styled.li`
    margin: 0 1em;
`

const NavBar = () => {
    return ( 
        <Header>
            <div>
            <li><Link to="/">oleksii</Link></li>
            </div>
            <RightGroup>
            <RightItem><a href="mailto:oleksii.koliukh@gmail.com">oleksii.koliukh@gmail.com</a></RightItem>
            <RightItem><Link to="/projects">Projects</Link></RightItem>
            </RightGroup>
        </Header>
     );
}
 
export default NavBar;