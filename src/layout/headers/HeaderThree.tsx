'use client'
import Link from "next/link";
import HeaderLogoThree from "@/svg/logo/header_logo_3";
import HeaderStickyLogoThree from "@/svg/logo/header_sticky_logo_3"; 
import NavMenu from "./Menu/nav-menu";
import { useState } from "react";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import useSticky from "@/hooks/use-sticky";

const HeaderThree = () => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)

	return (
		<>
			<header>
				<div id="header-sticky" className={`tptransparent__header tpheader__three tp-white-menu theme-bg-4 pl-185 pr-185 ${sticky && "header-sticky"}`}>
					<div className="container-fluid">
						<div className="tp-mega-menu-wrapper">
							<div className="row align-items-center">
								<div className="col-xl-3 col-lg-6 col-sm-4 col-6">
									<div className="tplogo__area">
										<Link className="header-logo" href="/">
											<span>
												<HeaderLogoThree />
											</span>
										</Link>
										<Link className="sticky-logo" href="/">
											<span>
												<HeaderStickyLogoThree />
											</span>
										</Link>
									</div>
								</div>
								<div className="col-xl-6 col-lg-5  d-none d-xl-block">
									<div className="tpmenu__area main-mega-menu  text-center">
										<nav className="tp-main-menu-content">
											<NavMenu />
										</nav>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-7 col-6">
									<div className="tpheader__right  d-flex align-items-center justify-content-end">
										<div className="tp-header-sign">
											<Link href="/sign-in">Sign in</Link>
										</div>
										<div className="d-md-block">
											<div className="d-flex align-items-center">
												<div className="tpheader-btn-two ml-25 d-none d-md-block">
													<Link href="/contact">Free Trial</Link>
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
				</div>
			</header>
			<OffcanvasArea openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
		</>
	);
};

export default HeaderThree;