import AboutBrandArea from './AboutBrandArea';
import AboutCounterArea from './AboutCounterArea';
import AboutCompanyArea from './AboutCompanyArea';
import AboutMissionArea from './AboutMissionArea';
import HeaderSix from "@/layout/headers/HeaderSix";
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import ProcessAreaHomeOne from '@/components/homes/home/ProcessAreaHomeOne';
import FunfactAreaHomeOne from '@/components/homes/home/FunfactAreaHomeOne';
import AwardAreaHomeFour from '@/components/homes/home-4/AwardAreaHomeFour';
import TeamAreaHomeFive from '@/components/homes/home-5/TeamAreaHomeFive';
import FooterFive from '@/layout/footers/FooterFive';

const About = () => {
	return (
		<>
			<HeaderSix />
			<main>
				<Breadcrumb />
				<AboutBrandArea />
				<ProcessAreaHomeOne style={true} />
				<AboutMissionArea />
				<AboutCounterArea />
				<AboutCompanyArea />
				<AwardAreaHomeFour style={true} />
				<FunfactAreaHomeOne />
				<TeamAreaHomeFive style={true} />
			</main>
			<FooterFive style={true} />
		</>
	);
};

export default About;