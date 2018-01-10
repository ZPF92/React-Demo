import React, {Component} from 'react';

export default class Item extends Component {
	render(){
		let {data,index} = this.props;
		return (
			<tr className={(data.selected ? "selected" : "") 
			+ (data.like ? " like" : "")}>
		    <td>
	        <input
	        	type = "checkbox"
	        	checked = {data.selected}
	        	onChange = {(e) => {
	        		this.props.changeSelected(index,e.target.checked);
	        	}}
	        />
		    </td>
		    <td>{data.title}</td>
		    <td>{data.singer}</td>
		    <td>
	        <input
	        	type="checkbox"
	        	checked={data.like}
	        	onChange = {(e) => {
	        		this.props.changeLike(index,e.target.checked);
	        	}}
	        />
		    </td>
		    <td>
	        <a
	        	onClick = {() => {
	        		this.props.removeItem(index);
	        	}}
	        >X</a>
		    </td>
			</tr>
		);
	}
};