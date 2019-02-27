import * as React from "react";
import { Button } from "../../components/button/index";
function ButtonExample(props: any) {
	const handleClick = (e: React.MouseEvent) => {
		console.log(e);
		alert(`点击了按钮`);
	};
	return (
		<div>
			<h1>按钮组件</h1>
			<h2>基本用法</h2>
			<Button>默认按钮</Button>
			<Button type="danger">Danger</Button>
			<Button type="primary">Primary</Button>
			<Button type="success">Success</Button>
			<br />
			<Button shape="circle">默认按钮</Button>
			<Button type="danger" shape="circle">
				Danger
			</Button>
			<Button type="primary" shape="circle">
				Primary
			</Button>
			<Button type="success" shape="circle">
				Success
			</Button>
			<h2>其他用法</h2>
			<h3>disabled</h3>
			<Button disabled={true}>disabled</Button>
			<Button disabled={true} shape="circle">
				circle
			</Button>
			<h3>size</h3>
			<Button size="big">大按钮</Button>
			<Button type="danger" size="big">
				Danger
			</Button>
			<Button type="primary" size="big">
				Primary
			</Button>
			<Button type="success" size="big">
				Success
			</Button>
			<h3>click事件</h3>
			<Button onClick={handleClick}>click</Button>
			<h3>跳转</h3>
			<Button href="https://wanghandi.top" target="newWindow">
				跳转
			</Button>
		</div>
	);
}

export default ButtonExample;
