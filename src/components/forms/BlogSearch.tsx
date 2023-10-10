"use client"

const BlogSearch = () => {
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <div className="sidebar__search-input-2">
                    <div className="sidebar__search-input-2-box">
                        <input type="text" placeholder="Type something..." />
                    </div>
                    <button type="submit"><i className="far fa-search"></i></button>
                </div>
            </form>
        </>
    );
};

export default BlogSearch;