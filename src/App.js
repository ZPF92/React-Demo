import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
	constructor(){
		super(...arguments);
		this.now = 4;
		this.state = {
			listShow:false,
			data:[
				{
					id:0,
					title:'空白格',
					singer:'蔡雅健',
					selected:true,
					like:false
				},
				{
					id:1,
					title:'空白格222',
					singer:'蔡雅健222',
					selected:true,
					like:true
				},
				{
					id:2,
					title:'空白格333',
					singer:'蔡雅健333',
					selected:true,
					like:false
				},
				{
					id:3,
					title:'空白格666',
					singer:'蔡雅健666',
					selected:true,
					like:true
				}
			]
		};
		this.addItem = this.addItem.bind(this);
		this.checkedAll = this.checkedAll.bind(this);
		this.changeLike = this.changeLike.bind(this);
		this.changeSelected = this.changeSelected.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.removeSelectedItem = this.removeSelectedItem.bind(this);
		this.selectedLikeItem = this.selectedLikeItem.bind(this);
		this.removeLikeItem = this.removeLikeItem.bind(this);
		this.showLikeList = this.showLikeList.bind(this);
	}
	addItem(title,singer){
		let data = this.state.data;
		data.push({
			title,
			singer,
			id:this.now,
			selected:false,
			like:false
		});
		this.now++;
		this.setState({
			data
		});
	}
	changeSelected(index,selected){
		let data = this.state.data;
		data.forEach(item => {
			if(item.id === index){
				data[index].selected = selected;
			}
		});
		this.setState({
			data
		});
	}
	changeLike(index,selected){
		let data = this.state.data;
		data.forEach(item => {
			if(item.id === index){
				data[index].like = selected;
			}
		});
		this.setState({
			data
		});
	}
	isCheckedAll(){
		return this.state.data.every(item => item.selected);
	}
	checkedAll(selected){
		let data = this.state.data.map(item => {
			item.selected = selected;
			return item;
		});
		this.setState({
			data
		});
	}
	removeItem(index){
		let data = this.state.data;
		data = data.filter((item,i) => i !== index);
		this.setState({
			data
		});
	}
	isCheckedLength(){
		return this.state.data.filter(item => item.selected).length;
	}
	likeData(){
		return this.state.data.filter(item => item.like);
	}
	removeSelectedItem(){
		let data = this.state.data;
		data = data.filter(item => !item.selected);
		this.setState({
			data
		});
	}
	selectedLikeItem(){
		let data = this.state.data;
		data = data.map(item => {
			item.selected && (item.like = true);
			return item;
		});
		this.setState({
			data
		});
	}
	removeLikeItem(){
		let data = this.state.data;
		data = data.map(item => {
			item.selected && (item.like = false);
			return item;
		});
		this.setState({
			data
		});
	}
	showLikeList(state){
		this.setState({
			listShow:state
		});
	}
	shouldComponentUpdate(nextProps,nextState){
		if(nextState.listShow){
			let likeData = nextState.data.filter(item => item.like);
			if(!likeData.length){
				this.setState({
					listShow:false
				});
				return false;
			}
		}
		return true;
	}
	render() {
		return (
			<div id="musicApp">
				<Header
					addItem = {this.addItem}
				/>
				<Main
					data = {this.state.listShow ? this.likeData() : this.state.data}
					isCheckedAll = {this.isCheckedAll()}
					checkedAll = {this.checkedAll}
					changeSelected = {this.changeSelected}
					changeLike = {this.changeLike}
					removeItem = {this.removeItem}
				/>
				<Footer
					data = {this.state.data}
					checkLength = {this.isCheckedLength()}
					likeLength = {this.likeData().length}
					removeSelectedItem = {this.removeSelectedItem}
					listShow = {this.state.listShow}
					selectedLikeItem = {this.selectedLikeItem}
					removeLikeItem = {this.removeLikeItem}
					showLikeList = {this.showLikeList}
				/>
			</div>
		);
	}
}

export default App;
