import Link from "next/link";
import KeywordSearchForm from "@/components/forms/KeywordSearchForm"; 


type keyword_content_type = {
    title: string;
    sm_info: JSX.Element;
    tags: string[];
}
const keyword_content: keyword_content_type = {
    title: "Competitor Analysis",
    sm_info: <>Find the keywords your competitors rank for and analyze their data insights to uncover <br /> their SEO strategy in one click</>,
    tags: ["merketing", "laptop", "iphone"]
}
const { title, sm_info, tags } = keyword_content

const KeywordArea = () => {
    return (
        <>
            <section className="keyword-area keyword-inner-wrapper keyword-inner-bg pt-105 pb-120" style={{ backgroundImage: `url(/assets/img/shape/keyword-inner.png)` }}>
                <div className="keyword-inner-shape">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="keyword-inner text-center">
                                    <div className="keyword-inner-content">
                                        <h4 className="keyword-inner-title">{title}</h4>
                                        <p>{sm_info}</p>
                                    </div>
                                    <div className="keyword-search mb-25">
                                        <div className="tpbanner__search">
                                            <KeywordSearchForm />
                                        </div>
                                    </div>
                                    <div className="keyword-search-tag">
                                        <span>Try</span>
                                        {tags.map((tag, i) => <Link key={i} href="/keyword-search">{tag}</Link>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default KeywordArea;