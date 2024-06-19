import { useState } from "react";

export default function SearchByTitle({ onSearch }) {
	const [searchTitle, setSearchTitle] = useState("");

	const handleChange = (e) => {
		setSearchTitle(e.target.value);
		onSearch(e.target.value, "title");
	};

	return (
		<div className="flex mb-2">
			<div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
				<input
					type="search"
					id="search-dropdown"
					className="z-20 text-black block w-full bg-gray-200 px-4 py-2 pr-10 focus:outline-none shadow-2xl"
					placeholder="Search Task by Title"
					value={searchTitle}
					onChange={handleChange}
					required
				/>
				<span className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4">
					<svg
						className="h-4 w-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</span>
			</div>
		</div>
	);
}
