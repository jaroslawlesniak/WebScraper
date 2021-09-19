import styled, { CSSProperties } from "styled-components"

interface IProps {
    maxWidth?: number;
    style?: CSSProperties;
}

const StyledContainer = styled.div<IProps>`
    margin: 0px auto;
    max-width: ${props => props.maxWidth || 1300}px;
`;

const Container: React.FC<IProps> = (props) => {
    return (
        <StyledContainer {...props}>
            {props.children}
        </StyledContainer>
    );
}

export default Container
