// SearchByPriority.js
import React, { useState } from "react";

const SearchByFavorite = ({ onSearch }) => {
	const [selectedValue, setSelectedPValue] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setSelectedPValue(value);
		onSearch(value, "favorite");
	};

	return (
		<div className="flex mb-2">
			<select
				id="favorite"
				value={selectedValue}
				onChange={handleChange}
				className="bg-gray-200 px-4 py-2 rounded-lg focus:outline-none text-black"
			>
				<option value="">All</option>
				<option value={true}>Favorite</option>
				<option value={false}>Not Favorite</option>
			</select>
		</div>
	);
};

export default SearchByFavorite;
