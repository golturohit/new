'use client'
import Link from "next/link"; 
import NavMenu from "./Menu/nav-menu";
import LogoHomeTwo from "@/svg/logo/LogoHomeTwo";
import React, { useState } from "react";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import useSticky from "@/hooks/use-sticky";

const HeaderTwo = () => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)

	return (
		<>
			<header>
				<div id="header-sticky" className={`tptransparent__header header-green header-spaces ${sticky && "header-sticky"}`}>
					<div className="container">
						<div className="tp-mega-menu-wrapper">
							<div className="row align-items-center">
								<div className="col-xl-1 col-lg-6 col-sm-4 col-6">
									<div className="tplogo__area">
										<Link href="/">
											<span>
												<LogoHomeTwo />
											</span>
										</Link>
									</div>
								</div>
								<div className="col-xl-7 col-lg-5  d-none d-xl-block">
									<div className="tpmenu__area main-mega-menu pl-35">
										<nav className="tp-main-menu-content">
											<NavMenu />
										</nav>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 col-sm-8 col-6">
									<div className="tpheader__right d-flex align-items-center justify-content-end">
										<div className="d-none d-md-block">
										</div>
										<div className="tpheader-btn-two ml-25 d-none d-md-block">
											<Link href="/marketing-analysis">Free SEO Consultation</Link>
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
			</header>
			<OffcanvasArea openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
		</>
	);
};

export default HeaderTwo;