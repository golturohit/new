import Link from "next/link";
import KeywordSearchForm from "@/components/forms/KeywordSearchForm";

const audit_keyword_data = {
    title: <>Perform a website <br /> audit easily with SE Ranking</>,
    tags: ["merketing", "laptop", "iphone"]
}
const {title, tags} = audit_keyword_data
const AuditKeywordArea = () => {
    return (
        <>
             <section className="keyword-area keyword-inner-wrapper cta-position">
                <div className="keyword-inner-shape">
                    <div className="container">
                        <div className="keyword-inner-bg inner-cta-bg pt-70 pb-90" style={{backgroundImage: `url(/assets/img/bg/cta-inner-bg-2.png)`}}>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="keyword-inner text-center">
                                        <div className="keyword-inner-content">
                                            <h4 className="keyword-inner-title">{title}</h4>
                                        </div>
                                        <div className="keyword-search mb-20">
                                            <div className="tpbanner__search"> 
                                            <KeywordSearchForm />
                                            </div>
                                        </div>
                                        <div className="keyword-search-tag">
                                            <span>Try</span> {tags.map((tag, i) => <Link key={i} href="/keyword-search">{tag}</Link>)}
                                        </div>
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

export default AuditKeywordArea;