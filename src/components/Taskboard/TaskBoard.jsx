import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";
import SearchByFavorite from "./SearchByFavorite";
import SearchByPriority from "./SearchByPriority";
import SearchByTitle from "./SearchByTitle";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
	const [tasks, setTasks] = useState([]);
	const [showAddModal, setShowAddModal] = useState(false);
	const [taskToUpdate, setTaskToUpdate] = useState(null);
	const [searchType, setSearchType] = useState("Search by Title or Priority");

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
		setTasks(storedTasks);
	}, []);

	const handleAddEditTask = (newTask, isAdd) => {
		let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

		let updatedTasks;
		if (isAdd) {
			updatedTasks = [...existingTasks, newTask];
		} else {
			updatedTasks = existingTasks.map((task) =>
				task.id === newTask.id ? newTask : task
			);
		}

		localStorage.setItem("tasks", JSON.stringify(updatedTasks));

		setTasks(updatedTasks);
		handleCloseClick();
	};

	const handleEditTask = (task) => {
		setTaskToUpdate(task);
		setShowAddModal(true);
	};

	const handleDeleteTask = (taskId) => {
		const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
		localStorage.setItem("tasks", JSON.stringify(tasksAfterDelete));
		setTasks(tasksAfterDelete);
	};

	const handleDeleteallClick = () => {
		localStorage.removeItem("tasks");
		setTasks([]);
	};

	const handleFavorite = (taskId) => {
		const taskIndex = tasks.findIndex((task) => task.id === taskId);
		const newTasks = [...tasks];
		newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
		localStorage.setItem("tasks", JSON.stringify(newTasks));
		setTasks(newTasks);
	};

	const handleSearch = (searchTerm, type) => {
		const originalTasks = JSON.parse(localStorage.getItem("tasks")) || [];

		console.log("FAV", searchTerm);

		if (searchTerm.trim() === "") {
			setTasks(originalTasks);
		} else if (type === "title") {
			const filtered = originalTasks.filter((task) =>
				task.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setTasks([...filtered]);
		} else if (type === "priority") {
			const filtered = originalTasks.filter((task) =>
				task.priority.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setTasks([...filtered]);
		} else if (type === "favorite") {
			const convertToBoolean = searchTerm === "true" ? true : false;
			const filtered = originalTasks.filter(
				(task) => task.isFavorite === convertToBoolean
			);
			setTasks([...filtered]);
		}
	};

	const handleCloseClick = () => {
		setShowAddModal(false);
		setTaskToUpdate(null);
	};

	return (
		<section className="mb-20" id="tasks">
			{showAddModal && (
				<AddTaskModal
					onSave={handleAddEditTask}
					onCloseClick={handleCloseClick}
					taskToUpdate={taskToUpdate}
				/>
			)}
			<div className="container">
				<div className="p-2 flex justify-end">
					<div className="flex flex-col gap-y-2">
						<select
							value={searchType}
							onChange={(e) => setSearchType(e.target.value)}
							className="bg-gray-200 px-4 py-2 rounded-lg focus:outline-none text-black"
						>
							<option value="title">Search by Title</option>
							<option value="priority">Search by Priority</option>
							<option value="favorite">Search by Favorite</option>
						</select>
						{searchType === "title" && (
							<SearchByTitle onSearch={handleSearch} />
						)}
						{searchType === "priority" && (
							<SearchByPriority onSearch={handleSearch} />
						)}
						{searchType === "favorite" && (
							<SearchByFavorite onSearch={handleSearch} />
						)}
					</div>
				</div>

				<div className="rounded-xl border border-[rgba(206,206,206,0.12)] px-6 py-8 md:px-9 md:py-16 bg-teal-800">
					<TaskActions
						onAddClick={() => setShowAddModal(true)}
						onDeleteallClick={handleDeleteallClick}
					/>
					{tasks.length > 0 ? (
						<TaskList
							allTasks={tasks}
							onEdit={handleEditTask}
							onDelete={handleDeleteTask}
							onFav={handleFavorite}
						/>
					) : (
						<NoTasksFound />
					)}
				</div>
			</div>
		</section>
	);
}
