import { CSSProperties } from "styled-components"

interface IProps {
    maxWidth?: number;
    style?: CSSProperties;
}

const Container: React.FC<IProps> = (props) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    );
}

export default Container
