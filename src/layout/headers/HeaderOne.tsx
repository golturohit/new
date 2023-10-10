'use client'
import Link from "next/link";
import { useState } from "react"; 
import NavMenu from "./Menu/nav-menu";
import LogoHomeOne from "@/svg/logo/LogoHomeOne";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import useSticky from "@/hooks/use-sticky";

const HeaderOne = () => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)
	const [openSearch, setOpenSearch] = useState(false)


	return (
		<>
			<header>
				<div id="header-sticky" className={`tptransparent__header header-1 ${sticky && "header-sticky"}`}>
					<div className="tp-header-top">
						<div className="container">
							<div className="tp-mega-menu-wrapper">
								<div className="row align-items-center">
									<div className="col-xxl-2 col-xl-2 col-lg-6 col-6">
										<div className="tplogo__area">
											<Link href="/">
												<span>
													<LogoHomeOne />
												</span>
											</Link>
										</div>
									</div>
									<div className="col-xxl-8 col-xl-7 col-lg-7 d-none d-xl-block">
										<div className="tpmenu__area main-mega-menu text-center">
											<nav className="tp-main-menu-content">
												<NavMenu />
											</nav>
										</div>
									</div>
									<div className="col-xxl-2 col-xl-3 col-lg-6 col-6">
										<div className="tpheader__right d-flex align-items-center justify-content-end">
											<div className="search-btn-wrap">
												<button className={`button-search-toggle ${openSearch ? "tp-search-icon-active" : ""}`}
													onClick={() => setOpenSearch(!openSearch)}>
													<i className="header_search-button far fa-search d-none"></i>
													<i className="header_search-button">
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="#271D3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M19.0001 19L17.2001 17.2" stroke="#271D3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</i>
													<i className="header_search-close far fa-times"></i>
												</button>
											</div>
											<div className="tpheader__btn ml-25 d-none d-sm-block">
												<Link href="/contact" className="tp-header-btn">Get a Quote</Link>
											</div>
											<div className="offcanvas-btn d-xl-none ml-20">
												<button className="offcanvas-open-btn"
													onClick={() => setOpenCanvas(true)}><i className="fa-solid fa-bars"></i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="tp-search-area p-relative" style={{ display: `${openSearch ? "block" : "none"}` }}>
						<div className="container">
							<div className="row">
								<div className="col-xl-12">
									<div className="tp-search-form p-relative">
										<form onSubmit={e => e.preventDefault()}>
											<input type="text" placeholder='Try "freelance" or "typography"..."' />
											<button type="submit" className="search-submit-icon">
												<i>
													<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M19.0001 19L17.2001 17.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</i>
											</button>
										</form>
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

export default HeaderOne;