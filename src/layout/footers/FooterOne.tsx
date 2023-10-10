import Link from "next/link";
import SeomyLogo from "@/svg/seomy_logo";
import SubscribeForm from "@/components/forms/SubscribeForm";
import SocialLinks, { CopyRight } from "@/components/common/social-links";

// fooert
interface footer_content_type {
  footer_info: JSX.Element;
  newsletter: string;
  footer_links: {
    id: number;
    title: string;
    links: {
      title: string;
      link: string;
    }[];
  }[];
}

const footer_content: footer_content_type = {
  footer_info: <> This SEO is most reputed <br /> firm which provides various <br /> online marketing </>,
  newsletter: "Our conversation is just getting started",
  footer_links: [
    {
      id: 1,
      title: "Information",
      links: [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about" },
        { title: "Project", link: "/project" },
        { title: "Plan & Pricing", link: "/price" },
        { title: "Blog", link: "/blog" },
        { title: "Contact Us", link: "/contact" },
      ],
    },
    {
      id: 2,
      title: "Services",
      links: [
        { title: "SEO Audit", link: "#" },
        { title: "SEO Services", link: "#" },
        { title: "SEO Marketing", link: "#" },
        { title: "SEO Analysis", link: "#" },
        { title: "SEO Optimization", link: "#" },
        { title: "Social Media", link: "#" },
      ],
    },
  ],
};
const { footer_info, newsletter, footer_links } = footer_content;

const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-100">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-col-1 mb-40">
                    <div className="footer-widget-logo mb-20">
                      <Link href="/">
                        <SeomyLogo />
                      </Link>
                    </div>
                    <div className="footer-widget-content">
                      <p className="footer-widget-text mb-20">{footer_info}</p>
                      <div className="footer-widget-social">
                        <span>Follow Us On</span>
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </div>
                {footer_links.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="footer-widget footer-col-2 mb-40">
                      <h4 className="footer-widget-title mb-15">
                        {item.title}
                      </h4>
                      <div className="footer-widget-link">
                        <ul>
                          {item.links?.map((link, index) => (
                            <li key={index}>
                              <Link href={link.link}>{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-col-4 mb-40">
                    <h4 className="footer-widget-title mb-20">Subcribe.</h4>
                    <div className="footer-widget-newsletter">
                      <p>{newsletter}</p>
                      <SubscribeForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-widget-copyright text-center">
                    <span> 
                      <CopyRight /> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
