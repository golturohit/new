import Link from "next/link";


const BreadcrumbFive = () => {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-2-bg pb-130 pt-195" style={{ backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg-3.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content breadcrumb__content-2 text-center p-relative z-index-1">
                                <h3 className="breadcrumb__title">Team Member</h3>
                                <div className="breadcrumb__list">
                                    <span><Link href="/">Home</Link></span>
                                    <span className="dvdr"></span>
                                    <span>Team Member</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreadcrumbFive;