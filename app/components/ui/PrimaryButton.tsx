import React from "react";
import styled from "styled-components";

interface IProps {}

const StyledButton = styled.button`
    background-color: #0052cc;
    color: #fff;
    border: none;
    padding: 10px 25px;
    border-radius: 4px;
    cursor: pointer;
`;

const PrimaryButton: React.FC<IProps> = (props) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    );
}

export default PrimaryButton
