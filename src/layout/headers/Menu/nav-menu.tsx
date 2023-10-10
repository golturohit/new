import React from "react";
import Link from "next/link";
import menu_data from './menu-data';
import Image from "next/image";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i}  className={`${item.id === 1 ? "has-dropdown has-mega-menu" : ""} ${item.id === 3 ? "header-services has-dropdown has-mega-menu" : ""} ${item.id === 4 ? "has-dropdown has-megamenu" : ""} ${item.id === 5 ? "has-dropdown" : ""}`}>
            <Link href={item.link}>{item.title}</Link>
            {item.id === 1 &&
              <div className="tp-submenu submenu has-homemenu tp-mega-menu">
                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                  {item.sub_menus?.map((home_item, h_index) =>
                    <div key={h_index} className={`col homemenu ${h_index === 0 ? "active" : ""}`}>
                      <div className="homemenu-thumb">
                        <Link  href={home_item.link}>
                          <Image src={home_item.demo_img} alt="theme-pure" />
                        </Link>
                      </div>
                      <div className="homemenu-btn">
                        <Link className="menu-btn" href={home_item.link}>View Demo</Link>
                      </div>
                      <div className="demo-name">
                        <span>{home_item.title}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            }
            {item.id === 3 &&
               <div className="tp-mega-menu tp-submenu submenu">
                  <div className="row">

                    <div className="col-xl-6">
                        <div className="tp-menu-banner">
                            <h5 className="tp-menu-banner-title">{item.inner_title}</h5>
                            <ul>
                            {item.sub_menus?.map((service_item, s_index) => 
                              <li key={s_index}>
                                <Link href={service_item.link}>
                                    <span> <Image src={service_item.demo_img} alt="theme-pure" /> </span>
                                    {service_item.title}
                                </Link>
                              </li> 
                            )} 
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="tp-menu-banner-wrap">
                            <div className="tp-menu-banner-content">
                                <span>{item.banner_sub_title}</span>
                                <h5 className="tp-menu-banner-title-2">{item.banner_title}</h5>
                                <div className="tp-menu-banner-btn">
                                <Link href="/services">
                                    Learn more 
                                    <span>{item.icon}</span>
                                </Link>
                                </div>
                            </div>
                            {item.m_banner && 
                              <div className="tp-menu-banner-thumb">
                                  <Image src={item.m_banner} alt="theme-pure" />
                              </div>                            
                            }
                        </div>
                    </div>

                  </div>
              </div>        
            }
            {item.id === 4 &&   
                <ul className="tp-submenu submenu mega-menu mega-menu-container">
                  {item.sub_menus?.map((mega_item, mega_index)  => 
                    <li key={mega_index}>
                        <ul>
                          {mega_item.layout?.map((m_inner_item, m_i_index)  => 
                            <li key={m_i_index}><Link href={m_inner_item.link}>{m_inner_item.title}</Link></li>    
                          )}
                        </ul>
                    </li>                   
                  
                  )} 
                </ul>  
            }
            {item.id === 5 && 
              <ul className="tp-submenu submenu">
                {item.sub_menus?.map((drap_item, drap_index) => 
                  <li key={drap_index}><Link href={drap_item.link}>{drap_item.title}</Link></li>
                
                )} 
              </ul>            
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;

