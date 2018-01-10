import React, {Component} from 'react';

export default class Footer extends Component {
	render(){
		let {data,checkLength,likeLength,listShow} = this.props;
		return (
			<footer
				style={{
					display:data.length ? "block" : "none"
				}}
			>
        <div className="info">
            <span className="align-right">当前选中{checkLength}首歌曲</span>
            <span>共{data.length}首歌曲</span>
        </div>
        <input
	        type = "button"
	        value = "删除选中歌曲"
	        style = {{
	        	display:checkLength ? "inline-block" : "none"
	        }}
	        onClick = {() => {
	        	this.props.removeSelectedItem();
	        }}
        />
        <input
	        type="button"
	        value="收藏选中歌曲"
	        style = {{
	        	display:checkLength ? "inline-block" : "none"
	        }}
	        onClick = {() => {
	        	this.props.selectedLikeItem();
	        }}
        />
        <input
	        type="button"
	        value="取消收藏选中歌曲"
	        style = {{
	        	display:checkLength ? "inline-block" : "none"
	        }}
	        onClick = {() => {
	        	this.props.removeLikeItem();
	        }}
        />
        <input
	        type="button"
	        value="查看收藏清单"
	        style = {{
	        	display:(!listShow&&likeLength) ? "inline-block" : "none"
	        }}
	        onClick = {() => {
	        	this.props.showLikeList(true);
	        }}
        />
        <input
	        type="button"
	        value="查看所有清单"
	        style = {{
	        	display:listShow ? "inline-block" : "none"
	        }}
	        onClick = {() => {
	        	this.props.showLikeList(false);
	        }}
        />
    	</footer>
		);
	}
};