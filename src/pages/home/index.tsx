import "./style.css";
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import {
	Layout,
	Aside,
	Header,
	Footer,
	Main
} from "../../components/layout/index";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import LayoutExample from "../layout-example/index";
import GridExample from "../grid-example/index";
import PaginationExample from "../pagination-example/index";
interface IProps {}
interface IState {
	show: boolean;
}
class Home extends React.Component<IProps, IState> {
	readonly state = {
		show: true
	};
	handleAside = () => {
		this.setState({
			show: !this.state.show
		});
	};
	renderAside = () => {
		return (
			<CSSTransition
				in={this.state.show}
				timeout={300}
				classNames="fade"
				unmountOnExit
				appear={true}
			>
				<Aside className="aside">
					<div className="title">
						<img src="" alt="" />
						<div className="name" onClick={this.handleAside}>
							隐藏
						</div>
					</div>
					<ul className="list">
						<li className="item">
							<NavLink to="/layout" activeClassName="selected">
								Layout 布局
							</NavLink>
						</li>
						<li className="item">
							<NavLink to="/grid" activeClassName="selected">
								Grid 栅格
							</NavLink>
						</li>
						<li className="item">
							<NavLink to="/pagination" activeClassName="selected">
								Pagination 分页
							</NavLink>
						</li>
					</ul>
				</Aside>
			</CSSTransition>
		);
	};
	renderMenu = () => {
		if (!this.state.show) {
			return (
				<div onClick={this.handleAside} className="menu">
					菜单
				</div>
			);
		}
		return null;
	};
	render() {
		return (
			<Router>
				<Layout className="layout" dir="vertical">
					<Header className="header" />

					<Layout className="content">
						{this.renderAside()}
						{this.renderMenu()}
						<Main className="main">
							<Route exact path="/layout" component={LayoutExample} />
							<Route exact path="/grid" component={GridExample} />
							<Route exact path="/pagination" component={PaginationExample} />
						</Main>
					</Layout>
					<Footer className="footer">
						Copyright 2018-2019 版权所有 &nbsp;
						<a href="https://wanghandi.top">@沐雪</a>
					</Footer>
				</Layout>
			</Router>
		);
	}
}

export default Home;
