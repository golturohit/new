import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix"; 
import TeamDetailsArea from "./TeamDetailsArea";


const TeamDetails = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <TeamDetailsArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default TeamDetails;