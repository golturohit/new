import AuditFeatureTwo from "./AuditFeatureTwo";
import AuditServiceArea from "./AuditServiceArea";
import AuditFeatureArea from "./AuditFeatureArea";
import AuditKeywordArea from "./AuditKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";

// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-5.jpg";
const SeoAudit = () => {
    return (
        <>
             <HeaderSix style={true} />
             <main>
                <BreadcrumbThree sub_title="SEO Audit Services"  title={<>In-Deepth Site Audit for <br /> your website</>}
                img={banner_service} style={false} />
                 <AuditServiceArea />
                 <QualityServicesArea />
                 <AuditFeatureArea />
                 <AuditFeatureTwo />
                 <AuditKeywordArea />
             </main>
             <FooterFive style_audit={true} />
        </>
    );
};

export default SeoAudit;