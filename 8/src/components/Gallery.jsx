import React from "react";
import './css/Gallery.css';


import { useState, useRef, useEffect } from "react";

const Gallery = () => {
	const images = [
		{ src: "https://placehold.co/200x200?text=cat1", alt: "cat1" },
		{ src: "https://placehold.co/200x200?text=dog2", alt: "dog2" },
		{ src: "https://placehold.co/200x200?text=cat3", alt: "cat3" },
		{ src: "https://placehold.co/200x200?text=dog4", alt: "dog4" },
		{ src: "https://placehold.co/200x200?text=cat5", alt: "cat5" },
		{ src: "https://placehold.co/200x200?text=dog6", alt: "dog6" },
		{ src: "https://placehold.co/200x200?text=cat7", alt: "cat7" },
		{ src: "https://placehold.co/200x200?text=dog8", alt: "dog8" },
		{ src: "https://placehold.co/200x200?text=cat9", alt: "cat9" }
	];

	const imagesPerPage = 4;
	const [page, setPage] = useState(0);
	const imageRefs = useRef([]);
	const picsContainerRef = useRef(null);

	const scrollToImage = (pageIdx) => {
		setPage(pageIdx);
		const targetImgIdx = pageIdx * (imagesPerPage / 2);
		if (imageRefs.current[targetImgIdx]) {
			imageRefs.current[targetImgIdx].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start'
			});
		}
	};

	useEffect(() => {
		const container = picsContainerRef.current;
		if (!container) return;

		const handleScroll = () => {
			const scrollLeft = container.scrollLeft;
			const imageWidth = 200;
			const currentPage = Math.round(scrollLeft / (imageWidth * (imagesPerPage / 2)));
			setPage(currentPage);
		};

		container.addEventListener('scroll', handleScroll);
		return () => container.removeEventListener('scroll', handleScroll);
	}, [imagesPerPage]);

	return (
		<div id="gallery">
			<div id="pics" ref={picsContainerRef}>
				{images.map((img, idx) => (
					<img key={idx} src={img.src} alt={img.alt} ref={(el) => (imageRefs.current[idx] = el)} />
				))}
			</div>
			<div id="pages">
				{Array.from({ length: Math.ceil(images.length / (imagesPerPage / 2) - 1) }).map((_, pageIdx) => (
					<button onClick={() => scrollToImage(pageIdx)} key={pageIdx}
						className={pageIdx === page ? "active" : ""}>
					</button>
				))}
			</div>
		</div>
	);
};

export default Gallery;