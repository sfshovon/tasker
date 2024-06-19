import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/Taskboard/TaskBoard";

export default function App() {
	return (
		<div className="px-8 md:px-10 bg-gradient-to-r from-cyan-900 from-10% via-cyan-700 via-30% to-teal-800 to-90% text-white">
			<Header />
			<div className="flex flex-col justify-center items-center">
				<HeroSection />
				<TaskBoard />
			</div>
			<Footer />
		</div>
	);
}
