import * as React from "react";

/**
 * Style
 */

const s = require("./style.scss");

interface IButtonProps {
    onClick?: () => any;
    color?: string;
    className?: string;
};

interface IButtonState {};

class Button extends React.Component<IButtonProps, IButtonState> {
    static defaultProps = {
        color: "white"
    }
    public render(): JSX.Element {
        return (
            <button className={[s.button, s[this.props.color || ""], this.props.className || ""].join(" ")} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
