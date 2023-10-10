import LoadMoreIcon from "@/svg/inner-pages-icons/LoadMoreIcon";


const LoadMoreBtn = ({ handleLoadMore }: any) => {
    return (
        <>
            <button onClick={handleLoadMore}>
                <span><LoadMoreIcon /></span>
                Load More
            </button>
        </>
    );
};

export default LoadMoreBtn;