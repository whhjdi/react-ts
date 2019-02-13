import cs from "classnames";
import * as React from "react";
import { SFC } from "react";

interface IProps extends IStyledProps {}

const Aside: SFC<IProps> = props => {
	const classNames = cs(componentName, props.className);
	return (
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
};
const componentName = "z-aside";
export default Aside;
