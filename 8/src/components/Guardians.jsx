import { React, useState, useRef, useEffect } from "react";
import './css/Guardians.css';
import ColleenHermanImg from '../assets/humans/ColleenHerman.jpg';
import DoreenStevensImg from '../assets/humans/DoreenStevens.jpg';
import LesterRichardsImg from '../assets/humans/LesterRichards.jpg';
import JudyMccoyImg from '../assets/humans/JudyMccoy.jpg';
import MildredMccoyImg from '../assets/humans/MildredMccoy.jpg';

function Guardians() {
	const humans = [
		{ name: "Colleen Herman", role: "Dynamic Tactics Supervisor", text: "Totam omnis ex impedit. Ducimus sequi aspernatur et est dicta pariatur provident. Cupiditate porro at voluptatem explicabo error sit neque et. Ut omnis est.", img: ColleenHermanImg },
		{ name: "Doreen Stevens", role: "International Applications Consultant", text: "Maxime quas rerum distinctio voluptas facere qui ea. Qui perferendis odio rerum dignissimos consequatur quam omnis quasi qui. Eum totam dicta odio sed velit.", img: DoreenStevensImg },
		{ name: "Lester Richards", role: "Forward Research Executive", text: "Dolorem quo reprehenderit veniam quidem officiis. Sapiente culpa enim error sunt enim tempore deserunt sit ad. Eos aut dolor.", img: LesterRichardsImg },
		{ name: "Judy Mccoy", role: "Dynamic Tactics Supervisor", text: "Est voluptatibus voluptatum. Commodi consequatur tempore voluptatem et enim. Et ea suscipit. Optio assumenda nostrum beatae ullam in explicabo quia placeat omnis.", img: JudyMccoyImg },
		{ name: "Mildred Mccoy", role: "Dynamic Tactics Supervisor", text: "Vel nihil excepturi architecto. Quaerat ut quam. Velit sit quaerat nisi necessitatibus aut.", img: MildredMccoyImg }
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