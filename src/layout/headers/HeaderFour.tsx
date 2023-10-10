"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavMenu from "./Menu/nav-menu"; 
import SocialLinks from "@/components/common/social-links";
import LogoHomeFour from "@/svg/logo/logo_home_4";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import header_rocket from "@/assets/img/shape/header-rocket.png";
import useSticky from "@/hooks/use-sticky";

const HeaderFour = () => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)

	return (
		<>
			<header>
				<div className="tptransparent__header-4">
					<div className="header-top d-none d-sm-block">
						<div className="container custom-container">
							<div className="row align-items-center">
								<div className="col-lg-6 col-sm-8">
									<div className="header-offer d-flex align-items-center">
										<Image src={header_rocket} alt="theme-pure" />
										<p>End of Year Sale:<span>Save up to 35%</span> on Tasks</p>
									</div>
								</div>
								<div className="col-lg-6 col-sm-4">
									<div className="header-social d-flex align-items-center">
										<div className="header-social-item"> 
											<SocialLinks />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="main-header">
						<div className="custom-container">
							<div id="header-sticky" className={`header-bg-4 ${sticky && "header-sticky"}`}>
								<div className="row align-items-center">
									<div className="col-xl-3 col-lg-6 col-sm-5 col-6">
										<div className="tplogo__area">
											<Link href="/"> <span> <LogoHomeFour /></span> </Link>
										</div>
									</div>
									<div className="col-xl-7 col-lg-6  d-none d-xl-block">
										<div className="tpmenu__area main-mega-menu">
											<nav className="tp-main-menu-content">
												<NavMenu />
											</nav>
										</div>
									</div>
									<div className="col-xl-2 col-lg-6 col-sm-7 col-6">
										<div className="header-btn header-btn-4 text-end">
											<Link className="blue-btn d-none d-xl-block" href="/contact">Contact Us</Link>
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

export default HeaderFour;