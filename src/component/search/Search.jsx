import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "../image_results/ImageResults";

class Search extends Component {
	state = {
		searchText: "",
		amount: 16,
		apiUrl: "https://pixabay.com/api",
		apiKey: "17413113-36fa4516c5fbd1a9b87ebd2e8",
		images: [],
	};

	onTextChange = (e) => {
		const val = e.target.value;
		this.setState({ [e.target.name]: val }, () => {
			if (val === "") {
				this.setState({ images: [] });
			} else {
				axios
					.get(
						`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
					)
					.then((res) => this.setState({ images: res.data.hits }))
					.catch((err) => console.log(err));
			}
		});
	};

	onAmountChange = (e, index, value) => this.setState({ amount: value });

	render() {
		console.log(this.state.images);
		const { searchText, amount, images } = this.state;
		return (
			<div>
				<TextField
					name="searchText"
					value={searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search For Images"
					fullWidth={true}
				/>
				<br />
				<SelectField
					name="amount"
					floatingLabelText="Amount"
					value={amount}
					onChange={this.onAmountChange}
				>
					<MenuItem value={4} primaryText="4" />
					<MenuItem value={8} primaryText="8" />
					<MenuItem value={16} primaryText="16" />
					<MenuItem value={32} primaryText="32" />
					<MenuItem value={64} primaryText="64" />
				</SelectField>
				<br />
				{this.state.images.length > 0 ? (
					<ImageResults images={images} />
				) : null}
			</div>
		);
	}
}

export default Search;
