'use client'
import Link from "next/link";
import NavMenu from "./Menu/nav-menu";
import React, { useState } from "react" 
import HeaderSixLogo from "@/svg/logo/header_6";
import ServiceHeaderLogo from "@/svg/logo/service_header_logo";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import useSticky from "@/hooks/use-sticky";

const HeaderSix = ({ style }: any) => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)
	return (
		<>
			<header>

				<div id="header-sticky" className={`tptransparent__header ${sticky && "header-sticky"} ${style ? "tp-white-menu" : ""} header-spaces`}>
					<div className="container">
						<div className="tp-mega-menu-wrapper">
							<div className="row align-items-center">
								<div className="col-xl-2 col-lg-6 col-sm-4 col-6">
									<div className="tplogo__area">
										{sticky ?
											<Link href="/" className="sticky-logo">
												<span>  <HeaderSixLogo /> </span>
											</Link>
											:
											<Link href="/" className="header-logo">
												<span> {style ? <ServiceHeaderLogo /> : <HeaderSixLogo />} </span>
											</Link>
										}
									</div>
								</div>
								<div className="col-xl-7  d-none d-xl-block">
									<div className={`tpmenu__area ${style ? "header-inner-2" : "tpmenu__hover inner-header"} main-mega-menu`}>
										<nav className="tp-main-menu-content">
											<NavMenu />
										</nav>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-8 col-6">
									<div className={`tpheader__right ${style ? "tpheader__right-white" : ""} d-flex align-items-center justify-content-end`}>
										<div className="d-flex align-items-center">
											<div className="tpheader__sign d-none d-md-block">
												<Link href="/sign-in">Sign in</Link>
											</div>
											<div className="tpheader__btn ml-25 d-none d-md-block">
												<Link href="/contact" className="tp-header-btn">Get a Quote</Link>
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

export default HeaderSix;