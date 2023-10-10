import Link from "next/link";


const categories_data = [
    {id: 1, categories: "Events",        items: "02"},
    {id: 2, categories: "Marketing",     items: "04"},
    {id: 3, categories: "Digital",       items: "08"},
    {id: 4, categories: "SEOMY Product", items: "01"},
    {id: 5, categories: "Sales SEO",     items: "00"},
    {id: 6, categories: "SEO",           items: "05"},
]
const Categories = () => {
    return (
        <>
            <div className="sidebar__widget-content">
                <ul>
                    {categories_data.map((item, i) => 
                        <li key={i}> <Link href="/blog">{item.categories}<span>{item.items}</span></Link> </li>
                    
                    )} 
                </ul>
            </div>
        </>
    );
};

export default Categories;