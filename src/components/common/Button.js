import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
    border: 1px solid ${palette.gray[6]};
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: bold;
    padding: 0.37rem 1rem;
    background: white;
    outline: none;
    cursor: pointer;
    color: ${palette.gray[7]};
    &:hover {
        color: ${palette.gray[4]};
        border: 1px solid ${palette.gray[4]};
    }

    ${props => 
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.12rem;
    `}

    ${props =>
        props.blue &&
        css`
            border: none;
            color: white;
            background: ${palette.blue[5]};
            &:hover {
                background: ${palette.blue[3]};
            }
            

    `}

    ${props =>
        props.yellow &&
        css`
            border: none;
            background: ${palette.yellow[5]};
            color: black;
            font-size: 0.95rem;
            height: 51px;
            &:hover {
                background: ${palette.yellow[2]};
                color: black;
                font-size: 0.95rem;
                border: none;
            }
            
    `}

    ${props =>
    props.cyan &&
    css`
        font-weight: 700;
        border: none;
        color: white;
        background: ${palette.cyan[4]};
        &:hover {
            background: ${palette.cyan[3]};
            border: none;
            color: white;
        }
    `}

    &:disabled {
        background: ${palette.gray[3]};
        color: ${palette.gray[5]};
        cursor: not-allowed;
    }
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}    
`;

const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} fullWidth={props.fullWidth ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;