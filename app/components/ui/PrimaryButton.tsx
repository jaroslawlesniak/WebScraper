import React from "react";

interface IProps {}

const PrimaryButton: React.FC<IProps> = (props) => {
    return (
        <button className="uk-button uk-button-primary">
            {props.children}
        </button>
    );
}

export default PrimaryButton;
