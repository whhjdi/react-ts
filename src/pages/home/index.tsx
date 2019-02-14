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
import {
	HashRouter as Router,
	Route,
	NavLink,
	Redirect
} from "react-router-dom";
import LayoutExample from "../layout-example/index";
import GridExample from "../grid-example/index";
import PaginationExample from "../pagination-example/index";
import SlidesExample from "../slides-example";
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
					<div className="close">
						<svg className="icon" aria-hidden="true" onClick={this.handleAside}>
							<use xlinkHref="#icon-close" />
						</svg>
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
						<li className="item">
							<NavLink to="/slides" activeClassName="selected">
								Slides 轮播
							</NavLink>
						</li>
					</ul>
				</Aside>
			</CSSTransition>
		);
	};
	renderHeader() {
		return (
			<div className="menu">
				<div className="submenu">
					<svg className="icon" aria-hidden="true" onClick={this.handleAside}>
						<use xlinkHref="#icon-menu" />
					</svg>
					<img
						src="https://i.loli.net/2019/01/26/5c4bd425a1128.jpeg"
						alt=""
						className="title-img"
					/>
					<div className="text">沐雪</div>
				</div>
				<div className="other">
					<a href="https://github.com/whhjdi/react-ts">
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-github-fill" />
						</svg>
					</a>
				</div>
			</div>
		);
	}
	render() {
		return (
			<Router>
				<Layout className="layout" dir="vertical">
					<Header className="header">{this.renderHeader()}</Header>

					<Layout className="content">
						{this.renderAside()}
						<Main className="main">
							<Route exact path="/" render={() => <Redirect to="/layout" />} />
							<Route exact path="/layout" component={LayoutExample} />
							<Route exact path="/grid" component={GridExample} />
							<Route exact path="/pagination" component={PaginationExample} />
							<Route exact path="/slides" component={SlidesExample} />
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
