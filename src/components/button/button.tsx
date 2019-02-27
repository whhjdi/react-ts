import * as React from "react";
import cs from "classnames";
interface IProps extends IStyledProps {
	size?: "small" | "big";
	shape?: "rect" | "circle";
	type?: "default" | "danger" | "primary" | "success";
	href?: string;
	target?: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.SFC<IProps> = props => {
	const {
		href,
		children,
		style,
		disabled,
		type,
		shape,
		className,
		size,
		onClick,
		target
	} = props;
	const onclick = (e: React.MouseEvent) => {
		if (disabled) {
			return e.preventDefault();
		}
		onClick && onClick.call(e.target, e);
	};
	const content =
		typeof children === "string" ? <span>{children}</span> : children;
	const button = href ? (
		<a
			href={href}
			style={style}
			className={cs(componentName, type, size, shape, className)}
			onClick={onclick}
			target={target}
		>
			{content}
		</a>
	) : (
		<button
			style={style}
			className={cs(componentName, type, shape, size, { disabled }, className)}
			disabled={disabled}
			onClick={onclick}
		>
			{content}
		</button>
	);
	return button;
};
Button.defaultProps = {
	size: "small",
	type: "default",
	shape: "rect",
	target: "_blank"
};
const componentName = "z-button";
export default Button;
