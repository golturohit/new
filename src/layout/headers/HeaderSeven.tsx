'use client'
import Link from "next/link";
import NavMenu from "./Menu/nav-menu"; 
import HeaderSixLogo from "@/svg/logo/header_6";
import ServiceHeaderLogo from "@/svg/logo/service_header_logo";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import { useState } from "react";
import useSticky from "@/hooks/use-sticky";

const HeaderSeven = ({ style }: any) => {
	const { sticky } = useSticky()
	const [openCanvas, setOpenCanvas] = useState(false)
	return (
		<>
			<header>
				<div id="header-sticky" className={`tptransparent__header header-five pl-85 pr-85 ${sticky ? "header-sticky" : ""}`}>
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-xl-2 col-lg-4 col-sm-5 col-6">
								<div className="tplogo__area sign-in-logo mt-10">
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
							<div className="col-xl-6 col-lg-2 col-sm-1 col-1">
								<div className="tpmenu__area header-inner-2 main-mega-menu d-none">
									<nav className="tp-main-menu-content">
										<NavMenu />
									</nav>
								</div>
							</div>
							<div className="col-xl-4 col-lg-6 col-sm-6 col-4">
								<div className="tpheader__right sign-right  d-flex align-items-center justify-content-end">
									<div className="d-flex align-items-center">
										<div className="tpheader__sign d-none d-md-block">
											<Link href="/sign-in">Sign in</Link>
										</div>
										<div className="tpheader__btn ml-25 d-none d-lg-block">
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
			</header>
			<OffcanvasArea openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
		</>
	);
};

export default HeaderSeven;