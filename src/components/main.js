import React, {Component} from 'react';
import Item from './item';

export default class Main extends Component {
	render(){
		let data = this.props.data;
		return (
			<table className="main" style={{display:data.length?"table":"none"}}>
		        <thead>
		        	<tr>
			            <th>
			                <input
				                type = "checkbox"
				                id = "checkAll"
				                checked = {this.props.isCheckedAll}
				                onClick = {(e) => {
				                	this.props.checkedAll(e.target.checked);
				                }}
			                />
			                <label>全选</label>
			            </th>
			            <th>歌曲</th>
			            <th>歌手</th>
			            <th>收藏</th>
			            <th>删除</th>
			        </tr>
		        </thead>
		        <tbody>
		            {data.map((val,index) => {
		        		return (<Item
		        			key = {index}
		        			data = {val}
		        			index = {val.id}
		        			changeSelected = {this.props.changeSelected}
		        			changeLike = {this.props.changeLike}
		        			removeItem = {this.props.removeItem}
		        		/>)
		        	})}
		        </tbody>
		    </table>
		);
	}
}