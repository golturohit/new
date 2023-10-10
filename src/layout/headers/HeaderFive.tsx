"use client"
import Link from 'next/link';
import NavMenu from './Menu/nav-menu';
import WorldIcon from '@/svg/world_icon';
import DownArrwo from '@/svg/down_arrwo'; 
import OffcanvasArea from '@/components/common/OffcanvasArea';
import React, { useEffect, useRef, useState } from 'react';
import HeaderLogoHomeFive from '@/svg/logo/header_logo_home_5';
import useSticky from '@/hooks/use-sticky';

const HeaderFive = () => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)

	const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
	const langToggleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (langToggleRef.current && !langToggleRef.current.contains(event.target as Node)) {
				setIsLangMenuOpen(false);
			}
		};

		if (langToggleRef.current) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			if (langToggleRef.current) {
				document.removeEventListener('click', handleClickOutside);
			}
		};
	}, []);

	const toggleLangMenu = () => {
		setIsLangMenuOpen((prevIsLangMenuOpen) => !prevIsLangMenuOpen);
	};



	return (
		<>
			<header>
				<div id="header-sticky" className={`tptransparent__header ${sticky && "header-sticky"} header-five pl-185 pr-185`}>
					<div className="container-fluid">
						<div className="tp-mega-menu-wrapper">
							<div className="row align-items-center">
								<div className="col-xl-2 col-lg-6 col-sm-4 col-6">
									<div className="tplogo__area">
										<Link href="/">
											<span> <HeaderLogoHomeFive /> </span>
										</Link>
									</div>
								</div>
								<div className="col-xl-7 col-lg-5  d-none d-xl-block">
									<div className="tpmenu__area tpmenu-5 main-mega-menu">
										<nav className="tp-main-menu-content">
											<NavMenu />
										</nav>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-8 col-6">
									<div className="tpheader__right  d-flex align-items-center justify-content-end">
										<div className="header-bottom__lang d-none d-lg-block d-flex align-items-center justify-content-end">
											<ul>
												<li>
													<button id="header-bottom__lang-toggle" onClick={toggleLangMenu}>
														<span>
															<WorldIcon />
															{' '}English{' '}
															<DownArrwo />
														</span>
													</button>
													{isLangMenuOpen &&
														<ul className={`header-bottom__lang-submenu ${isLangMenuOpen ? "open" : ""}`}>
															<li>
																<a href="#">Arabic</a>
															</li>
															<li>
																<a href="#">Spanish</a>
															</li>
															<li>
																<a href="#">Mandarin</a>
															</li>
														</ul>
													}
												</li>
											</ul>
										</div>
										<div className="d-flex align-items-center">
											<div className="tpheader-btn-5 d-none d-md-block ml-25">
												<Link href="/sign-in">Sign Up</Link>
											</div>
											<div className="offcanvas-btn d-xl-none ml-20">
												<button className="offcanvas-open-btn" onClick={() => setOpenCanvas(true)}><i className="fa-solid fa-bars"></i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<OffcanvasArea openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
		</>
	);
};

export default HeaderFive;