import Logo from "../assets/logo.png";

export default function Header() {
	return (
		<nav className="container py-3 sticky top-0 z-50 bg-gradient-to-r from-cyan-900 from-10% via-cyan-700 via-30% to-teal-800 to-90%">
			<div className=" flex items-center justify-between">
				<img
					className="w-16 h-16 md:w-20 md:h-20 rounded-full"
					src={Logo}
					alt="Logo"
				/>
				<h1 className="text-lg md:text-3xl text-yellow-100 font-bold">
					Tasker
				</h1>
			</div>
		</nav>
	);
}
