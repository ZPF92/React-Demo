import React, {Component}from 'react';

export default class Header extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			title:'',
			singer:''
		};
	}
	render(){
		let {title,singer} = this.state;
		return (
			<header>
        <h2 className="title">播放列表</h2>
        <input
	        type="text"
	        placeholder="输入歌曲名字"
	        value = {title}
	        onChange={this.addItemTitle.bind(this)}
        />
        <input
	        type="text"
	        placeholder="输入歌手名字"
	        value = {singer}
	        onChange={this.addItemSinger.bind(this)}
        />
        <input 
        	type="button"
        	value="添加音乐"
        	onClick={() => {
        		this.props.addItem(title,singer);
        	}}
        />
	    </header>
		);
	}
	addItemTitle(e){
		this.setState({
			title:e.target.value
		});
	}
	addItemSinger(e){
		this.setState({
			singer:e.target.value
		});
	}
};