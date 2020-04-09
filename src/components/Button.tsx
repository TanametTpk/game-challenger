import React from 'react'
import styled from 'styled-components'

interface Props {
    onClick?: () => void
}

const ButtonContainer = styled.button`

    padding: 12px;
    border-radius: 12rem;
    outline: none;

`

const Button: React.FC<Props> = ({children, onClick}) => {
    return (
        <ButtonContainer onClick={onClick} >
            {children}
        </ButtonContainer>
    )
}

export default Button
