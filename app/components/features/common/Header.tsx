import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: #FFF;
    box-shadow: 0 2px 10px rgb(0 0 0 / 25%);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
`;

const Header: React.FC = (props) => {
    return (
        <StyledHeader>
            {props.children}
        </StyledHeader>
    );
}

export default Header;
