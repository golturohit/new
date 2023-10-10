
import React from 'react';
import HeaderSix from '@/layout/headers/HeaderSix';
import BreadcrumbElever from '@/components/common/breadcrumb/breadcrumb-11';
import FooterFive from '@/layout/footers/FooterFive';
import BlogDetailsTwoPostboxArea from './BlogDetailsTwoPostboxArea';
import BlogDetailsArticleArea from '../blog-details/BlogDetailsArticleArea';

const BlogDetailsTwo = () => {
	return (
		<>
			<HeaderSix />
			<main>
				<BreadcrumbElever />
				<BlogDetailsTwoPostboxArea />
				<BlogDetailsArticleArea />
			</main>
			<FooterFive style={true} style_2={true} />
		</>
	);
};

export default BlogDetailsTwo 