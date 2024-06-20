document.addEventListener("DOMContentLoaded", function () {
	let currentIndex = 0;

	const images = document.querySelectorAll('.carousel-image');
	const totalImages = images.length;
	const prevButton = document.getElementById('prevButton');
	const nextButton = document.getElementById('nextButton');
	const thumbnails = document.querySelectorAll('.thumbnail img');

	function updateCarousel() {
		const carouselImages = document.querySelector('.carousel-images');
		const offset = -currentIndex * 100;
		carouselImages.style.transform = `translateX(${offset}%)`;
	}

	function previousImage() {
		if (currentIndex > 0) {
			currentIndex--;
			updateCarousel();
		}
	}

	function nextImage() {
		if (currentIndex < totalImages - 1) {
			currentIndex++;
			updateCarousel();
		}
	}

	function setImage(index) {
		currentIndex = index;
		updateCarousel();
	}

	prevButton.addEventListener('click', previousImage);
	nextButton.addEventListener('click', nextImage);

	thumbnails.forEach((thumbnail, index) => {
		thumbnail.addEventListener('click', () => {
			setImage(index);
		});
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowLeft') {
			previousImage();
		} else if (event.key === 'ArrowRight') {
			nextImage();
		}
	});

	updateCarousel();
});
console.log("gdfgdfg");