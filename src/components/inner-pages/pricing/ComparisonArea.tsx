import NoticIcon from "@/svg/inner-pages-icons/NoticIcon";

// comparison data type
interface comparison_data_type {
    id: number;
    title: string;
    inner_items: ({
        id: number;
        title: string;
        essential: number;
        business: number;
        pro: number;
    } | {
        id: number;
        title: string;
        essential: string;
        business: string;
        pro: string;
    })[];
}
// comparison data 
const comparison_data: comparison_data_type[] = [
    {
        id: 1,
        title: "Account",
        inner_items: [
            {
                id: 1,
                title: "Projects",
                essential: 100,
                business: 200,
                pro: 250,
            },
            {
                id: 2,
                title: "User Seats",
                essential: 10,
                business: 20,
                pro: 30,
            },
            {
                id: 3,
                title: "Competitors per project",
                essential: "Limited",
                business: "Limited",
                pro: "Limited",
            },
            {
                id: 4,
                title: "Web design",
                essential: "15 articles",
                business: "30 articles",
                pro: "20 articles",
            },

        ]
    },
    {
        id: 2,
        title: "Website audit",
        inner_items: [
            {
                id: 1,
                title: "Pages per account",
                essential: 100,
                business: 200,
                pro: 250,
            },
            {
                id: 2,
                title: "Pages per project",
                essential: 10,
                business: 20,
                pro: 30,
            },
            {
                id: 3,
                title: "Page Changes Monitor (pages)",
                essential: "Limited",
                business: "Limited",
                pro: "Limited",
            },
        ]
    },
    {
        id: 3,
        title: "Rank tracker",
        inner_items: [
            {
                id: 1,
                title: "Keywords",
                essential: 100,
                business: 200,
                pro: 250,
            },
            {
                id: 2,
                title: "Locations per 1 keyword",
                essential: 10,
                business: 20,
                pro: 30,
            },
            {
                id: 3,
                title: "Keyword checks in total",
                essential: "Limited",
                business: "Limited",
                pro: "Limited",
            },
        ]
    },
]
const ComparisonArea = () => {
    return (
        <>
            <section className="comparison-area">
                <div className="container">
                    {comparison_data.map((item, i) =>
                        <div key={i} className="row">
                            <div className="col-lg-12">
                                <div className="pricing-comparison-tag">
                                    <h5 className={`pricing-comparison-tag-title ${i === 1 ? "pricing-comparison-tag-title-2" : ""} ${i === 2 ? "pricing-comparison-tag-title-3" : ""}`}><span></span>{item.title}</h5>
                                </div>
                                <div className="pricing-comparison mb-35">
                                    <div className="pricing-comparison-scroll">
                                        {item.inner_items?.map((inner_item, index) =>
                                            <div key={index} className="pricing-comparison-item">
                                                <div className="row">
                                                    <div className="col-lg-4 col-sm-4 col-5">
                                                        <div className="pricing-comparison-item-text d-flex align-items-center">
                                                            <h4 className="pricing-comparison-item-title">{inner_item.title}</h4>
                                                            <div className="pricing-feature-info">
                                                                <span> <NoticIcon /> </span>
                                                                <div className="pricing-feature-info-tooltip">
                                                                    <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-8 col-7">
                                                        <div className="pricing-comparison-price text-center">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-4">
                                                                    <div className="pricing-comparison-price-item pricing-comparison-price-item-1">
                                                                        <span>{inner_item.essential}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-4">
                                                                    <div className="pricing-comparison-price-item pricing-comparison-price-item-2">
                                                                        <span>{inner_item.business}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-4">
                                                                    <div className="pricing-comparison-price-item pricing-comparison-price-item-3">
                                                                        <span>{inner_item.pro}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ComparisonArea;