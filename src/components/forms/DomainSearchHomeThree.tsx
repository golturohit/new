"use client";
import SearchDomainIcon from "@/svg/search_domain_icon";
const DomainSearchHomeThree = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="tp-analysis-3 p-relative">
          <div className="tp-analysis-input-3 p-relative">
            <input type="text" placeholder="Enter domain, keyword or URL" />
            <span> 
              <SearchDomainIcon /> 
            </span>
          </div>
          <div className="tp-analysis-3-btn">
            <button type="submit" className="search-gradient-btn">
              Analyze Now
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default DomainSearchHomeThree;
