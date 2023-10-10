"use client"
import EmailTwo from "@/svg/email_2";
import RoundSearchIcon from "@/svg/round_search_icon";

const KeywordSearchForm = () => {
	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<div className="tpbanner__form d-flex align-items-center justify-content-between">
					<div className="tpbanner__input tpkeyword__input">
						<input type="text" placeholder="Enter keyword..." />
						<span>
							<RoundSearchIcon />
						</span>
					</div>
					<div className="tpbanner__input tpkeyword__input">
						<input type="email" placeholder="Your email" />
						<span>
							<EmailTwo />
						</span>
					</div>
					<div className="tpbanner__search-btn tpkeyword__search-btn">
						<button className="banner-search-btn" type="submit">Analyze Now</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default KeywordSearchForm;

