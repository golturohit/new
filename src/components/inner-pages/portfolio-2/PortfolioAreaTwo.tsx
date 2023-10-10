'use client'
import React, { useState } from "react";
import LoadMoreBtn from "@/components/common/LoadMoreBtn";
import portfolio_data_2 from "@/data/portfolio-data-2";
import Image from "next/image";

// data
const categories = ["All", ...new Set(portfolio_data_2.map((item) => item.category))];
const perView = 6;

const PortfolioAreaTwo = () => {

	const [activeCategory, setActiveCategory] = useState("All");
	const [items, setItems] = useState(portfolio_data_2);
	const [next, setNext] = useState(perView);

	const filterItems = (cateItem: string) => {
		setActiveCategory(cateItem);
		setNext(perView);
		if (cateItem === "All") {
			return setItems(portfolio_data_2);
		} else {
			const findItems = portfolio_data_2.filter((findItem) => {
				return findItem.category == cateItem;
			});
			setItems(findItems);
		}
	};
	//   handleLoadMore
	const handleLoadMore = () => {
		setNext((value) => value + 3);
	};
	return (
		<>
			<section className="portfolio-area pt-190 pb-110">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="portfolio-inner-2 text-center mb-50">
								<h4 className="portfolio-inner-2-head">Our Case Studies</h4>
								<p>We have an experienced team of production and inspection <br /> personnel  to ensure quality.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="portfolio-inner-masonary portfolio-inner-masonary-2 text-center masonary-menu mb-60">
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
							<div key={i} className="col-lg-4 col-md-6 grid-item port-details3  port-details5">
								<div className="portfolio-inner-item-2 mb-40">
									<div className="portfolio-inner-thumb-2">
										<Image src={item.img} alt="theme-pure" />
									</div>
									<div className="portfolio-inner-content-2">
										<div className="portfolio-inner-title-2"><a href="portfolio-details.html">{item.title}</a></div>
										<p>{item.sm_des}</p>
										<div className="portfolio-inner-tag-2">
											<a href="#">Branding</a>{' '}
											<a href="#">Website</a>{' '}
											<a href="#">Design</a>{' '}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					{next < items.length && (
						<div className="row">
							<div className="col-lg-12">
								<div className="portfolio-inner-btn text-center pt-20">
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

export default PortfolioAreaTwo;