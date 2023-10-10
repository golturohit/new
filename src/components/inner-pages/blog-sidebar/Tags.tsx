
import React from "react"
import Link from "next/link";
type tags_data_type = string[]
const tags_data: tags_data_type = [
    "Technology",
    "Envato",
    "SEO",
    "UX / UI",
    "Marketing",
    "WordPress",
    "SEO Report",
    "Ecommerce SEO",
    "Content Marketing",
    "Website Audit",
    "On-Page SEO",
    "Keywords",
    "Website Promotion",
]
const Tags = () => {
    return (
        <>
            <div className="tagcloud">
                {tags_data.map((item, i) => <React.Fragment key={i}><Link  href="#">{item}</Link> {" "}</React.Fragment>)}
            </div>
        </>
    );
};

export default Tags;