import "./style.css";
import * as React from "react";
import Pagination from "../../components/pagination/index";

function PaginationExample(props: any) {
	const onClickPage = (page: number) => {
		console.log(`这是第${page}页`);
	};
	return (
		<div>
			<Pagination totalPage={5} onChange={onClickPage} />
		</div>
	);
}

export default PaginationExample;
