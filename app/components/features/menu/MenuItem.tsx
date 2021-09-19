interface IProps {
    to: string;
}

const MenuItem: React.FC<IProps> = (props) => {
    return (
        <a href={props.to}>
            {props.children}
        </a>
    );
}

export default MenuItem;
