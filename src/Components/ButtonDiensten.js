import React from 'react';
import './Button.css';
import { Link } from "react-scroll";

const STYLES = ['btn--primary', 'btn--outline']

const SIZES =['btn--medium', 'button--large']

export const ButtonDiensten = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]


    return (
        <Link
            activeClass="active"
            to="diensten"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>

            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
            </Link>
            
    )
}