

interface faq_data_one_type {
    id?: string | any;
    aria_labelledby?: string | any;
    aria_expanded?: string | any ;
    collapsed?: string | any ;
    active?: string | any ;
    ques?: string | any ;
    ans?: string | any ;
}


const faq_data_one: faq_data_one_type[] =  [
    {
        id: "One",
        aria_labelledby: "Three",
        aria_expanded: "false", 
        collapsed: "collapsed",
        active: "",
        ques: "Why Is SEO Important?",
        ans: "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
    },
    {
        id: "Two",
        aria_labelledby: "Two",
        aria_expanded: "false", 
        collapsed: "collapsed",
        active: "",
        ques: "Why Is SEO Important For Small Business?",
        ans: "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
    },
    {
        id: "Three",
        aria_labelledby: "Three",
        aria_expanded: "true", 
        collapsed: "",
        active: "show",
        ques: "How do I choose the best SEO Agency?",
        ans: "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
    },
    {
        id: "Four",
        aria_labelledby: "Four",
        aria_expanded: "false", 
        collapsed: "collapsed",
        active: "",
        ques: "How do SEO Agencies work?",
        ans: "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
    },
]
export default faq_data_one
