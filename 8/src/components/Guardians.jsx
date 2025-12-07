import { React, useState, useRef, useEffect } from "react";
import './css/Guardians.css';

function Guardians() {
	const humans = [
		{ name: "Colleen Herman", role: "Dynamic Tactics Supervisor", text: "Totam omnis ex impedit. Ducimus sequi aspernatur et est dicta pariatur provident. Cupiditate porro at voluptatem explicabo error sit neque et. Ut omnis est.", img: "https://placehold.co/100x100?text=Colleen%5CnHerman" },
		{ name: "Doreen Stevens", role: "International Applications Consultant", text: "Maxime quas rerum distinctio voluptas facere qui ea. Qui perferendis odio rerum dignissimos consequatur quam omnis quasi qui. Eum totam dicta odio sed velit.", img: "https://placehold.co/100x100?text=Doreen%5CnStevens" },
		{ name: "Lester Richards", role: "Forward Research Executive", text: "Dolorem quo reprehenderit veniam quidem officiis. Sapiente culpa enim error sunt enim tempore deserunt sit ad. Eos aut dolor.", img: "https://placehold.co/100x100?text=Lester%5CnRichards" },
		{ name: "Judy Mccoy", role: "Dynamic Tactics Supervisor", text: "Est voluptatibus voluptatum. Commodi consequatur tempore voluptatem et enim. Et ea suscipit. Optio assumenda nostrum beatae ullam in explicabo quia placeat omnis.", img: "https://placehold.co/100x100?text=Judy%5CnMccoy" },
		{ name: "Mildred Mccoy", role: "Dynamic Tactics Supervisor", text: "Vel nihil excepturi architecto. Quaerat ut quam. Velit sit quaerat nisi necessitatibus aut.", img: "https://placehold.co/100x100?text=Mildred%5CnMccoy" }
	];

	const humansPerPage = 3;
	const [page, setPage] = useState(0);
	const humanRefs = useRef([]);
	const humansContainerRef = useRef(null);

	const scrollTo = (pageIdx) => {
		setPage(pageIdx);
		const targetHumIdx = Math.round(pageIdx * (humansPerPage / 2));
		if (humanRefs.current[targetHumIdx]) {
			humanRefs.current[targetHumIdx].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start'
			});
		}
	};

	useEffect(() => {
		const container = humansContainerRef.current;
		if (!container) return;

		const handleScroll = () => {
			const scrollLeft = container.scrollLeft;
			const humanWidth = 280;
			const currentPage = Math.round(scrollLeft / (humanWidth * (humansPerPage / 2)));
			setPage(currentPage);
		};

		container.addEventListener('scroll', handleScroll);
		return () => container.removeEventListener('scroll', handleScroll);
	}, [humansPerPage]);

	return (
		<div id="guardians">
			<h2>Testimonials from our guardians</h2>
			<p>
				Who are in extremely love with eco friendly system
			</p>
			<div id="humans" ref={humansContainerRef}>
				{humans.map(human => (
					<div key={human.name} ref={(el) => (humanRefs.current[humans.indexOf(human)] = el)}>
						<img src={human.img} alt={human.name} />
						<p>{human.text}</p>
						<h4>{human.name}</h4>
						<p>{human.role}</p>
					</div>
				))}
			</div>
			<div id="pages">
				{Array.from({ length: Math.ceil(Math.round(humans.length / (humansPerPage / 2) - 1)) }).map((_, pageIdx) => (
					<button onClick={() => scrollTo(pageIdx)} key={pageIdx}
						className={pageIdx === page ? "active" : ""}>
					</button>
				))}
			</div>
		</div>
	);
}

export default Guardians;