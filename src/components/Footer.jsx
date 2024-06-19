export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="py-6 md:py-8 bg-gradient-to-r from-cyan-900 from-10% via-cyan-700 via-30% to-teal-800 to-90%">
			<div className="container mx-auto">
				<p className="text-white text-center text-xs sm:text-sm md:text-base lg:text-lg">
					Copyright ©{year} | All rights reserved by Tasker
				</p>
			</div>
		</footer>
	);
}
