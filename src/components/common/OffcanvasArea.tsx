import Link from "next/link";
import MobileMenus from "@/layout/headers/Menu/mobile-menus";
import { useEffect, useState } from "react";



const OffcanvasArea = ({ openCanvas, setOpenCanvas }: any) => {

	const [nevIcon, setNevIcon] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			setNevIcon(windowWidth <= 1199);
		};
		// Call the function once to set the initial value based on the window width
		handleResize();

		// Add event listener for the 'resize' event
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [])

	return (
		<>
			{nevIcon &&
				<>
					<div className={`offcanvas__area ${openCanvas ? "offcanvas-opened" : ""}`}>
						<div className="offcanvas__wrapper">
							<div className="offcanvas__close">
								<button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setOpenCanvas(false)}>
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
											strokeLinejoin="round" />
										<path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
											strokeLinejoin="round" />
									</svg>
								</button>
							</div>
							<div className="offcanvas__content">
								<div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
									<div className="offcanvas__logo logo">
										<Link href="/">
											<img src="assets/img/logo/logo.png" alt="logo" />
										</Link>
									</div>
								</div>
								<div className="tp-main-menu-mobile mb-35">
									<MobileMenus />
								</div>
								<div className="offcanvas__btn">
									<Link href="/contact" className="tp-btn w-100">Getting Started</Link>
								</div>
								<div className="offcanvas__contact mb-40">
									<p className="offcanvas__contact-call"><a href="tel:+964-742-44-763">+964 742 44 763</a></p>
									<p className="offcanvas__contact-mail"><a href="mailto:info@harry.com">info@seomy.com</a></p>
								</div>
								<div className="offcanvas__social">
									<a href="#"><i className="fab fa-facebook-f"></i></a>
									<a href="#"><i className="fab fa-twitter"></i></a>
									<a href="#"><i className="fab fa-youtube"></i></a>
									<a href="#"><i className="fab fa-linkedin"></i></a>
									<a href="#"><i className="fab fa-instagram"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className={`body-overlay ${openCanvas ? "opened" : ""}`} onClick={() => setOpenCanvas(false)} ></div>
				</>
			}
		</>
	);
};

export default OffcanvasArea;