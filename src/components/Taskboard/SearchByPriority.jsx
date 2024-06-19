// SearchByPriority.js
import React, { useState } from "react";

const SearchByPriority = ({ onSearch }) => {
	const [selectedPriority, setSelectedPriority] = useState("");

	const handlePriorityChange = (e) => {
		const priority = e.target.value;
		setSelectedPriority(priority);
		onSearch(priority, "priority");
	};

	return (
		<div className="flex mb-2">
			<select
				id="priority"
				value={selectedPriority}
				onChange={handlePriorityChange}
				className="bg-gray-200 px-4 py-2 rounded-lg focus:outline-none text-black"
			>
				<option value="">All Priorities</option>
				<option value="High">High</option>
				<option value="Medium">Medium</option>
				<option value="Low">Low</option>
			</select>
		</div>
	);
};

export default SearchByPriority;
