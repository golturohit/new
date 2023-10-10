"use client";

import SearchIconTwo from "@/svg/search_icon_2";

const BannerAnalysisFormHomeThree = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="tp-analysis-3 p-relative">
          <div className="tp-analysis-input-3 p-relative">
            <input type="text" placeholder="Enter domain, keyword or URL" />
            <span>
              <SearchIconTwo />
            </span>
          </div>
          <div className="tp-analysis-3-btn">
            <button className="search-gradient-btn" type="submit">Analyze Now</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BannerAnalysisFormHomeThree;
