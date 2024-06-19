import Frame from "../assets/frame.png";

export default function HeroSection() {
	return (
		<section className="pb-[114px] pt-20 md:mt-[100px]">
			<div className="container">
				<div className="grid items-center gap-6 md:grid-cols-2">
					<div className="flex justify-center md:order-2">
						<img className="max-md:w-full" src={Frame} alt="frame" />
					</div>
					<div>
						<h1 className="mb-1.5 text-[56px] font-bold leading-none text-yellow-200 lg:text-[73px]">
							Tasker
						</h1>
						<p className="text-lg md:text-xl text-gray-100 my-2 opacity-60 text-justify">
							Tasker introduces an intuitive task management solution designed
							to cater to a diverse user base, ensuring the smooth creation and
							organization of tasks. Its features include the comprehensive
							generation and administration of tasks, covering aspects such as
							title, description, tags, creation date, priority levels, date and
							ownership details. Additionally, Tasker facilitates a seamless
							task listing experience and incorporates a robust search function,
							improved by the 'debounce' technique for an optimal user
							interface. Users can efficiently categorize tasks by tags,
							priority, and ownership, and designate favorites for quick
							accessibility. The system not only supports the tracking and
							updating of task statuses but also provides an easy means for task
							editing and deletion. Tasker emerges as a tool positioned to
							enhance and simplify your task management processes.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
