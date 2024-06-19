export default function TaskActions({ onAddClick, onDeleteallClick }) {
	return (
		<div className="mb-14 items-center justify-between sm:flex">
			<h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
			<div className="flex items-center space-x-5">
				<button
					className="text-sm bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded-lg"
					onClick={onAddClick}
				>
					Add Task
				</button>
				<button
					className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-lg"
					onClick={onDeleteallClick}
				>
					Delete All
				</button>
			</div>
		</div>
	);
}
