import React , { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            <Link to='/'>
           <h1 style={{color:'white',textDecoration:'none'}}>eSHOP</h1>
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                   Products
                </Link>
              </li>
            </ul>
            <Link to="/Cart" className="ml-auto">
               <ButtonContainer>
                   <i className="fas fa-cart-plus" />
                   My Cart
               </ButtonContainer>
            </Link>
            
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;

}
`;