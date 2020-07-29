import React from 'react';
import Logo from '../LogoProject';
import './Menu.css';
import './components/ButtonLink'
import Button from '../Button'
import {Link } from 'react-router-dom';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <Logo />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo 
            </Button>
        </nav>
    );
}
export default Menu;
