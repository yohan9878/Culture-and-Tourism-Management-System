const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import("web-vitals").then(
			({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
				getCLS(onPerfEntry);
				getFID(onPerfEntry);
				getFCP(onPerfEntry);
				getLCP(onPerfEntry);
				getTTFB(onPerfEntry);
			},
		);
	}
};

var nav = document.querySelector("nav");

console.log(nav);

window.addEventListener("scroll", function () {
	if (window.pageYOffset > 100) {
		nav.classList.add("bg-dark", "shadow");
	} else {
		nav.classList.remove("bg-dark", "shadow");
	}
});

export default reportWebVitals;
