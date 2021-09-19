import styled from "styled-components";

interface IProps {
    to: string;
}

const StyledLink = styled.a`
    display: inline-block;
    color: #0052cc;
    padding: 15px;
    border-bottom: 2px solid #fff;
    margin-right: 25px;

    &:hover {
        border-color: #DFE1E5;
    }
`;

const MenuItem: React.FC<IProps> = (props) => {
    return (
        <StyledLink href={props.to}>
            {props.children}
        </StyledLink>
    );
}

export default MenuItem;
