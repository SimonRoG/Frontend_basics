import React from "react";
import './css/Gallery.css';


import { useState } from "react";

const Gallery = () => {
	const images = [
		{ src: "https://placehold.co/200x200?text=cat1", alt: "cat1" },
		{ src: "https://placehold.co/200x200?text=dog2", alt: "dog2" },
		{ src: "https://placehold.co/200x200?text=cat3", alt: "cat3" },
		{ src: "https://placehold.co/200x200?text=dog4", alt: "dog4" },
		{ src: "https://placehold.co/200x200?text=cat5", alt: "cat5" },
		{ src: "https://placehold.co/200x200?text=dog6", alt: "dog6" },
		{ src: "https://placehold.co/200x200?text=cat7", alt: "cat7" }
	];

	const imagesPerPage = 4;
	const [page, setPage] = useState(0);
	const startIdx = page * (imagesPerPage / 2);
	const endIdx = startIdx + imagesPerPage;
	const imagesToShow = images.slice(startIdx, endIdx);

	return (
		<>
			<div id="gallery">
				{imagesToShow.map((img, idx) => (
					<img key={startIdx + idx} src={img.src} alt={img.alt} />
				))}
			</div>
			<div id="gallerypages">
				{Array.from({ length: Math.ceil(images.length / (imagesPerPage / 2) - 1) }).map((_, pageIdx) => (
					<button onClick={() => setPage(pageIdx)} key={pageIdx} 
						className={pageIdx === page ? "active" : ""}>
					</button>
				))}
			</div>
		</>
	);
};

export default Gallery;