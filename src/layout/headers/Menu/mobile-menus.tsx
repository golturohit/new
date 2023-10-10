"use client"
import React, { useState } from "react";
// internal 
import menu_data from "./menu-data";
import Link from "next/link";
import Image from "next/image";


const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu, menu_index) => (
            <React.Fragment key={menu_index}>

              {/* home  */}
              {menu.img_dropdown && (
                <li className="has-dropdown has-mega-menu dropdown-opened">
                  <Link href={menu.link}>{menu.title}
                    <button className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}>
                      <i className="fa-regular fa-angle-right"></i>
                    </button>
                  </Link>

                  <div className="tp-submenu submenu has-homemenu tp-mega-menu"
                    style={{ display: navTitle === menu.title ? "block" : "none", }}>
                    <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">

                      {menu.sub_menus?.map((img_menu, img_index) =>
                        <div key={img_index} className="col homemenu">
                          <div className="homemenu-thumb">
                            <Link href={img_menu.link}>
                              <Image src={img_menu.demo_img} alt="demo-img" />
                            </Link>
                          </div>
                          <div className="homemenu-btn">
                            <Link href="" className="menu-btn">View Demo</Link>
                          </div>
                          <div className="demo-name">
                            <span>SEO Analysis</span>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                  <ul
                    className="tp-submenu submenu mega-menu mega-menu-container"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}>
                    {menu.sub_menus?.map((sub, i) => (
                      <React.Fragment key={i}>
                        {sub.layout?.map((mega, m_index) =>
                          <ul key={m_index}>
                            <li key={m_index}>
                              <Link href={mega.link}>{mega.title}</Link>
                            </li>
                          </ul>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              )}
              {/* service  */}
              {menu.service_dropdown && (
                <li className="header-services has-dropdown has-mega-menu dropdown-opened">
                  <Link href={menu.link}>{menu.title}
                    <button className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}>
                      <i className="fa-regular fa-angle-right"></i>
                    </button>
                  </Link>

                  <div className="tp-mega-menu tp-submenu submenu"
                    style={{ display: navTitle === menu.title ? "block" : "none", }}>
                    <div className="row">

                      <div className="col-xl-6">
                        <div className="tp-menu-banner">
                          <h5 className="tp-menu-banner-title">{menu.inner_title}</h5>
                          <ul>
                            {menu.sub_menus?.map((service_menu, service_index) =>
                              <li key={service_index}>
                                <Link href={service_menu.link}>
                                  <span>
                                    <Image src={service_menu.demo_img} alt="demo-img" />
                                  </span>
                                  {service_menu.title}
                                </Link>
                              </li>
                            )}
                          </ul>

                        </div>
                      </div>

                    </div>
                  </div>
                  <ul
                    className="tp-submenu submenu mega-menu mega-menu-container"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}>
                    {menu.sub_menus?.map((sub, i) => (
                      <React.Fragment key={i}>
                        {sub.layout?.map((mega, m_index) =>
                          <ul key={m_index}>
                            <li key={m_index}>
                              <Link href={mega.link}>{mega.title}</Link>
                            </li>
                          </ul>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              )}

              {/* pages  */}
              {menu.has_megamenu && (
                <li className="has-dropdown has-megamenu dropdown-opened">
                  <Link href={menu.link}>{menu.title}
                    <button className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}>
                      <i className="fa-regular fa-angle-right"></i>
                    </button>

                  </Link>

                  <ul
                    className="tp-submenu submenu mega-menu mega-menu-container"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}>
                    {menu.sub_menus?.map((sub, page_index) => (
                      <React.Fragment key={page_index}>
                        {sub.layout?.map((mega, m_index) =>
                          <ul key={m_index}>
                            <li key={m_index}>
                              <Link href={mega.link}>{mega.title}</Link>
                            </li>
                          </ul>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              )}

              {/* blog  */}
              {menu.blog_dropdown && (
                <li className="has-dropdown">
                  <Link href={menu.link}>{menu.title}
                    <button className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}>
                      <i className="fa-regular fa-angle-right"></i>
                    </button>
                  </Link>
                  <ul className="tp-submenu submenu" style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}>
                    {menu.sub_menus?.map((sub, sub_index) => (
                      <li key={sub_index}>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}

              {!menu.has_dropdown && (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;



