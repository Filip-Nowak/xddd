document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".nav");
	const navBtn = document.querySelector(".burger-btn");
	const allNavItems = document.querySelectorAll(".nav__item");
	const footerYear = document.querySelector(".footer__year");
	const msgStatus = document.querySelector('.msg-status');

	const handleNav = () => {
		nav.classList.toggle("show");

		allNavItems.forEach((item) => {
			item.addEventListener("click", () => {
				nav.classList.remove("show");
			});
		});
	};

	const addShadow = () => {
		if (window.scrollY >= 500) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	};

	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};

	// console.log(document.location.search);
	if (document.location.search === '?mail_status=sent') {
		msgStatus.classList.add('success');
		msgStatus.textContent = 'Wiadomość wysłana!'

		setTimeout(() => {
			msgStatus.classList.remove('success')
		}, 3000);
	}

	if (document.location.search === '?mail_status=error') {
		msgStatus.classList.add('error');
		msgStatus.textContent = 'Wystąpił błąd!'

		setTimeout(() => {
			msgStatus.classList.remove('error')
		}, 3000);
	}

	handleCurrentYear();
	window.addEventListener("scroll", addShadow);
	navBtn.addEventListener("click", handleNav);
});
