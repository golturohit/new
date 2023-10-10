'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image  from "next/image";
import portfolio_data from "@/data/portfolio-data";

import LoadMoreBtn from "@/components/common/LoadMoreBtn";



// data
const categories = ["All", ...new Set(portfolio_data.map((item) => item.category))];
const perView = 4;

const PortfolioArea = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [items, setItems] = useState(portfolio_data);
	const [next, setNext] = useState(perView);

	const filterItems = ( cateItem: string ) => {
		setActiveCategory(cateItem);
		setNext(perView);
		if (cateItem === "All") {
			return setItems(portfolio_data);
		} else {
			const findItems = portfolio_data.filter((findItem) => {
				return findItem.category == cateItem;
			});
			setItems(findItems);
		}
	};
	//   handleLoadMore
	const handleLoadMore = () => {
		setNext((value) => value + 2);
	};

	return (
		<>
			<section className="portfolio-area pt-100 pb-110">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="portfolio-inner mb-50">
								<h4 className="portfolio-inner-head">See our <br /> Latest Projects</h4>
							</div>
						</div>
						<div className="col-lg-6 align-self-end">
							<div className="portfolio-inner-masonary masonary-menu mb-50">
								{categories.map((cate, i) => (
									<React.Fragment key={i}>
										<button
											onClick={() => filterItems(cate)}
											className={`${cate === activeCategory ? "active" : ""}`}
										>
											{cate}
										</button>  {' '}
									</React.Fragment>
								))}
							</div>
						</div>
					</div>
					<div className="row grid">
						{items.slice(0, next).map((item, i) =>
							<div key={i} className="col-lg-6 col-md-6 grid-item port3 port4">
								<div className="portfolio-inner-item mb-60">
									<div className="portfolio-inner-thumb">
										<Image src={item.img} alt="theme-pure" />
									</div>
									<div className="portfolio-inner-content">
										<span>{item.category}</span>
										<h4 className="portfolio-inner-title"><Link href="/portfolio-details">{item.title}</Link></h4>
									</div>
								</div>
							</div>
						)}

					</div>
					{next < items.length && (
						<div className="row">
							<div className="col-lg-12">
								<div className="portfolio-inner-btn text-center pt-10">
									<LoadMoreBtn handleLoadMore={handleLoadMore} />
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default PortfolioArea;