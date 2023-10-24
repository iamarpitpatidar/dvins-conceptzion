import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@assets/images/logo.svg'

export default function Header() {
  return (
    <header
      id="site-header"
      className="main-header sticky-header-noshadow"
      data-sticky-header="true"
      data-sticky-values-measured="false"
      data-sticky-options='{"disableOnMobile": true, "dynamicColors": true}'
    >
      {/*<div className="lqd-head-sec-wrap w-full pt-20 px-75 module-header">*/}
      {/*  <div className="flex items-center justify-between rounded-4 shadow-black-15 px-25 bg-white m-0">*/}
      {/*    <div className="w-30percent flex items-center p-0 sm:w-50percent">*/}
      {/*      <div className="module-logo flex navbar-brand-plain py-15">*/}
      {/*        <Link*/}
      {/*          className="navbar-brand flex p-0 relative"*/}
      {/*          href="/"*/}
      {/*          rel="home"*/}
      {/*        >*/}
      {/*          <span className="navbar-brand-inner post-rel">*/}
      {/*            <Image*/}
      {/*              className="logo-default"*/}
      {/*              src={LogoImage}*/}
      {/*              alt="Dvins Logo"*/}
      {/*            />*/}
      {/*          </span>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex justify-center lg:hidden p-0">*/}
      {/*      <div className="module-primary-nav flex">*/}
      {/*        <nav className="navbar-collapse lqd-submenu-default-style inline-flex p-0 text-14 font-medium">*/}
      {/*          <ul*/}
      {/*            className="main-nav main-nav-hover-fade-inactive link-black flex reset-ul justify-center"*/}
      {/*            itemType="https://schema.org/SiteNavigationElement"*/}
      {/*            itemScope={true}*/}
      {/*            data-submenu-options='{"toggleType": "fade", "handler": "mouse-in-out"}'*/}
      {/*            data-localscroll="true"*/}
      {/*            data-localscroll-options='{"itemsSelector":">li > a", "offset": 85}'*/}
      {/*          >*/}
      {/*            <li>*/}
      {/*              <a href="#banner">Home</a>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <a href="#our-services">*/}
      {/*                Our Services*/}
      {/*                <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                  <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                </span>*/}
      {/*              </a>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <a href="#case-studies">*/}
      {/*                Case Studies*/}
      {/*                <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                  <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                </span>*/}
      {/*              </a>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <a href="#testimonials">*/}
      {/*                Testimonials*/}
      {/*                <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                  <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                </span>*/}
      {/*              </a>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <a href="#contact">*/}
      {/*                Contact*/}
      {/*                <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                  <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                </span>*/}
      {/*              </a>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </nav>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div*/}
      {/*      className="w-30percent flex items-center justify-end p-0 sm:w-50percent"*/}
      {/*      data-custom-animations="true"*/}
      {/*      data-ca-options='{" animationTarget": ".animation-element", "duration" :600, "ease": "back.out", "initValues": {"x": "100px", "opacity" : 0} , "animations": {"x": "0px", "opacity" : 1}}'*/}
      {/*    >*/}
      {/*      <div className="flex justify-end items-center sm:hidden">*/}
      {/*        <a*/}
      {/*          href="#contact-modal"*/}
      {/*          className="button btn text-14 font-bold uppercase leading-1em tracking-1 text-black border-2 rounded-100 whitespace-nowrap py-0/6em px-1em mr-10 z-1 text-14 hover:bg-black hover:text-white animation-element"*/}
      {/*          data-lity="#contact-modal"*/}
      {/*        >*/}
      {/*          <span className="btn-txt" data-text="Send a message">*/}
      {/*            Send a message*/}
      {/*          </span>*/}
      {/*        </a>*/}
      {/*        <a*/}
      {/*          href="#contact-modal"*/}
      {/*          className="button btn btn-solid btn-custom-size btn-icon-block btn-icon-top tracking-1 text-black rounded-full whitespace-nowrap z-1 bg-accent border-none p-0 w-30 h-30 sm:hidden animation-element"*/}
      {/*          data-lity="#contact-modal"*/}
      {/*        >*/}
      {/*          <span className="btn-icon w-1em">*/}
      {/*            <svg*/}
      {/*              xmlns="http://www.w3.org/2000/svg"*/}
      {/*              width="10.625"*/}
      {/*              height="10.625"*/}
      {/*              viewBox="0 0 10.625 10.625"*/}
      {/*            >*/}
      {/*              <path*/}
      {/*                d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z"*/}
      {/*                transform="translate(5.313 11.322)"*/}
      {/*              ></path>*/}
      {/*            </svg>*/}
      {/*          </span>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*      <div className="hidden ml-15 lg:block">*/}
      {/*        <div className="ld-module-sd ld-module-sd-hover ld-module-sd-left module-mobile-nav">*/}
      {/*          <button*/}
      {/*            className="nav-trigger style-6 txt-left collapsed text-13 font-normal tracking-0 capitalize bg-transparent p-0 border-none flex relative items-center justify-center"*/}
      {/*            type="button"*/}
      {/*            data-ld-toggle="true"*/}
      {/*            data-bs-toggle-options='{"cloneTriggerInTarget": false, "type": "click"}'*/}
      {/*            data-bs-toggle="collapse"*/}
      {/*            data-bs-target="#lqd-drawer-main-navigation"*/}
      {/*            aria-expanded="false"*/}
      {/*            aria-controls="lqd-drawer-main-navigation"*/}
      {/*          >*/}
      {/*            <span className="bars inline-block relative z-1">*/}
      {/*              <span className="bars-inner flex flex-col w-full h-full">*/}
      {/*                <span className="bar inline-block relative"></span>*/}
      {/*                <span className="bar inline-block relative"></span>*/}
      {/*                <span className="bar inline-block relative"></span>*/}
      {/*              </span>*/}
      {/*            </span>*/}
      {/*            <span className="text-black text-capital txt inline-block">*/}
      {/*              Menu*/}
      {/*            </span>*/}
      {/*          </button>*/}
      {/*          <div*/}
      {/*            className="ld-module-dropdown collapse absolute"*/}
      {/*            id="lqd-drawer-main-navigation"*/}
      {/*          >*/}
      {/*            <div className="ld-sd-wrap padding-unset">*/}
      {/*              <div className="ld-sd-inner">*/}
      {/*                <div className="flex flex-row  pt-100 pb-50 px-50 sm:flex-col sm:justify-between module-col-inner">*/}
      {/*                  <div className="w-30percent relative flex flex-col justify-between sm:w-full">*/}
      {/*                    <div className="relative flex flex-col module-social">*/}
      {/*                      <div className="pb-35 ld-fancy-heading relative">*/}
      {/*                        <h2 className="ld-fh-element text-16 m-0 text-black-30 inline-block relative">*/}
      {/*                          Social*/}
      {/*                        </h2>*/}
      {/*                      </div>*/}
      {/*                      <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none lqd-magnetic-items">*/}
      {/*                        <ul className="reset-ul">*/}
      {/*                          <li className="mb-25">*/}
      {/*                            <a className="text-16 text-black" href="#">*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                              Facebook*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li className="mb-25">*/}
      {/*                            <a className="text-16 text-black" href="#">*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                              Behance*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li className="mb-25">*/}
      {/*                            <a className="text-16 text-black" href="#">*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                              Dribble*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li className="mb-25">*/}
      {/*                            <a className="text-16 text-black" href="#">*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                              Instagram*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li>*/}
      {/*                            <a className="text-16 text-black" href="#">*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                              Youtube*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                        </ul>*/}
      {/*                      </div>*/}
      {/*                    </div>*/}
      {/*                    <div className="relative flex flex-col">*/}
      {/*                      <div className="w-full ld-fancy-heading relative">*/}
      {/*                        <h2 className="ld-fh-element text-16 m-0 text-black-30 inline-block relative">*/}
      {/*                          Get in touch*/}
      {/*                        </h2>*/}
      {/*                      </div>*/}
      {/*                      <div className="max-w-full ld-fancy-heading relative">*/}
      {/*                        <div className="ld-fh-element mb-0/5em inline-block relative text-20 leading-1em sm:text-16">*/}
      {/*                          <span className="text-black">*/}
      {/*                            info@liquid.com*/}
      {/*                          </span>*/}
      {/*                        </div>*/}
      {/*                      </div>*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                  <div className="flex flex-col sm:order-first">*/}
      {/*                    <div className="pb-30 ld-fancy-heading relative">*/}
      {/*                      <h2 className="ld-fh-element text-16 text-black-30  inline-block relative">*/}
      {/*                        Menu*/}
      {/*                      </h2>*/}
      {/*                    </div>*/}
      {/*                    <div className="module-primary-nav flex">*/}
      {/*                      <div*/}
      {/*                        className="navbar-collapse inline-flex p-0 lqd-submenu-default-style  lqd-magnetic-items"*/}
      {/*                        aria-expanded="false"*/}
      {/*                        role="navigation"*/}
      {/*                      >*/}
      {/*                        <ul*/}
      {/*                          className="link-black main-nav flex reset-ul lqd-menu-counter-right lqd-menu-items-block main-nav-hover-fade-inactive"*/}
      {/*                          data-submenu-options='{"toggleType": "slide", "handler": "click"}'*/}
      {/*                        >*/}
      {/*                          <li>*/}
      {/*                            <a className="text-38" href="#banner">*/}
      {/*                              Home*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li>*/}
      {/*                            <a className="text-38" href="#our-services">*/}
      {/*                              <span>Our Services</span>*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                                <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                              </span>*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li>*/}
      {/*                            <a className="text-38" href="#case-studies">*/}
      {/*                              <span>Case Studies</span>*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                                <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                              </span>*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li>*/}
      {/*                            <a className="text-38" href="#testimonials">*/}
      {/*                              <span>Testimonials</span>*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                                <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                              </span>*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                          <li>*/}
      {/*                            <a className="text-38" href="#contact">*/}
      {/*                              <span>Contact</span>*/}
      {/*                              <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                                <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                              </span>*/}
      {/*                            </a>*/}
      {/*                          </li>*/}
      {/*                        </ul>*/}
      {/*                      </div>*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className="lqd-module-backdrop"></div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="lqd-stickybar-wrap lqd-stickybar-left flex-col items-center justify-between">*/}
      {/*  <div className="flex items-center">*/}
      {/*    <div className="ld-module-sd ld-module-sd-hover ld-module-sd-left flex-grow-1 items-start">*/}
      {/*      <button*/}
      {/*        className="nav-trigger style-6 txt-left collapsed text-13 font-normal p-0 flex relative items-center justify-center"*/}
      {/*        type="button"*/}
      {/*        data-lqd-interactive-color="true"*/}
      {/*        data-ld-toggle="true"*/}
      {/*        data-bs-toggle-options='{"cloneTriggerInTarget": false, "type": "click"}'*/}
      {/*        data-bs-toggle="collapse"*/}
      {/*        data-bs-target="#lqd-drawer-stickybar-left"*/}
      {/*        aria-expanded="false"*/}
      {/*        aria-controls="lqd-drawer-stickybar-left"*/}
      {/*      >*/}
      {/*        <span className="bars inline-block relative z-1">*/}
      {/*          <span className="bars-inner flex flex-col w-full h-full">*/}
      {/*            <span className="bar inline-block relative"></span>*/}
      {/*            <span className="bar inline-block relative"></span>*/}
      {/*            <span className="bar inline-block relative"></span>*/}
      {/*          </span>*/}
      {/*        </span>*/}
      {/*        <span className="txt inline-block">Menu</span>*/}
      {/*      </button>*/}
      {/*      <div*/}
      {/*        className="ld-module-dropdown collapse absolute lqd-drawer-stickybar-left w-880"*/}
      {/*        id="lqd-drawer-stickybar-left"*/}
      {/*      >*/}
      {/*        <div className="ld-sd-wrap">*/}
      {/*          <div className="w-full min-h-100vh flex flex-row justify-start items-stretch py-100 px-135 module-left-side">*/}
      {/*            <div className="w-30percent flex flex-col justify-between">*/}
      {/*              <div className="flex flex-col">*/}
      {/*                <div className="pb-35 ld-fancy-heading relative">*/}
      {/*                  <h2 className="ld-fh-element text-16 m-0 text-black-30  inline-block relative">*/}
      {/*                    Social*/}
      {/*                  </h2>*/}
      {/*                </div>*/}
      {/*                <div className="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none lqd-magnetic-items">*/}
      {/*                  <ul className="reset-ul">*/}
      {/*                    <li className="mb-25">*/}
      {/*                      <a className="text-16 text-black" href="#">*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                        <span>Facebook</span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li className="mb-25">*/}
      {/*                      <a className="text-16 text-black" href="#">*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                        <span>Behance</span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li className="mb-25">*/}
      {/*                      <a className="text-16 text-black" href="#">*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                        <span>Dribble</span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li className="mb-25">*/}
      {/*                      <a className="text-16 text-black" href="#">*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                        <span>Instagram</span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li>*/}
      {/*                      <a className="text-16 text-black" href="#">*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty left-icon icon-next-to-label"></span>*/}
      {/*                        <span>Youtube</span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                  </ul>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="flex flex-col">*/}
      {/*                <div className="ld-fancy-heading relative">*/}
      {/*                  <h2 className="ld-fh-element text-16 m-0 text-black-30  inline-block relative">*/}
      {/*                    Get in touch*/}
      {/*                  </h2>*/}
      {/*                </div>*/}
      {/*                <div className="ld-fancy-heading relative">*/}
      {/*                  <div className="ld-fh-element mb-0/5em inline-block relative text-20 leading-1em">*/}
      {/*                    <span className="text-black">info@liquid.com</span>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*            <div className="flex flex-col sm:order-first">*/}
      {/*              <div className="pb-30 ld-fancy-heading relative">*/}
      {/*                <h2 className="ld-fh-element text-16 text-black-30  inline-block relative">*/}
      {/*                  Menu*/}
      {/*                </h2>*/}
      {/*              </div>*/}
      {/*              <div className="module-primary-nav flex">*/}
      {/*                <div*/}
      {/*                  className="navbar-collapse inline-flex p-0 lqd-submenu-default-style  lqd-magnetic-items"*/}
      {/*                  aria-expanded="false"*/}
      {/*                  role="navigation"*/}
      {/*                >*/}
      {/*                  <ul*/}
      {/*                    className="link-black main-nav flex reset-ul lqd-menu-counter-right lqd-menu-items-block main-nav-hover-fade-inactive"*/}
      {/*                    data-submenu-options='{"toggleType": "slide", "handler": "click"}'*/}
      {/*                    data-localscroll="true"*/}
      {/*                    data-localscroll-options='{"itemsSelector":">li > a", "offset": 85}'*/}
      {/*                  >*/}
      {/*                    <li>*/}
      {/*                      <a className="text-38" href="#banner">*/}
      {/*                        Home*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li>*/}
      {/*                      <a className="text-38" href="#our-services">*/}
      {/*                        Our Services*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                          <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                        </span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li>*/}
      {/*                      <a className="text-38" href="#case-studies">*/}
      {/*                        Case Studies*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                          <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                        </span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li>*/}
      {/*                      <a className="text-38" href="#testimonials">*/}
      {/*                        Testimonials*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                          <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                        </span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                    <li>*/}
      {/*                      <a className="text-38" href="#contact">*/}
      {/*                        Contact*/}
      {/*                        <span className="link-icon inline-flex hide-if-empty right-icon">*/}
      {/*                          <i className="lqd-icn-ess icon-ion-ios-arrow-down"></i>*/}
      {/*                        </span>*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                  </ul>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="lqd-module-backdrop"></div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="flex items-center pt-40">*/}
      {/*    <div className="flex items-center -rotate-180 z-100 vertical-lr">*/}
      {/*      <p className="text-14 text-black" data-lqd-interactive-color="true">*/}
      {/*        contact@hub.com*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="flex items-center">*/}
      {/*    <div className="-rotate-180 z-100 flex-grow-1">*/}
      {/*      <div*/}
      {/*        className="lqd-scrl-indc lqd-scrl-indc-style-dot mx-auto flex whitespace-nowrap align-self-end"*/}
      {/*        data-lqd-scroll-indicator="true"*/}
      {/*      >*/}
      {/*        <a*/}
      {/*          href="#wrap"*/}
      {/*          className="text-black"*/}
      {/*          data-localscroll="true"*/}
      {/*          data-lqd-interactive-color="true"*/}
      {/*        >*/}
      {/*          <span className="lqd-scrl-indc-inner flex items-center">*/}
      {/*            <span className="lqd-scrl-indc-txt">Scroll to top</span>*/}
      {/*            <span className="lqd-scrl-indc-line flex-grow-1 relative">*/}
      {/*              <span className="lqd-scrl-indc-el inline-block absolute rounded-4"></span>*/}
      {/*            </span>*/}
      {/*          </span>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="lqd-stickybar-wrap lqd-stickybar-right items-center justify-center">*/}
      {/*  <div className="-rotate-180 vertical-lr">*/}
      {/*    <a*/}
      {/*      href="#contact-modal"*/}
      {/*      className="button text-black text-14"*/}
      {/*      data-lity="#contact-modal"*/}
      {/*      data-lqd-interactive-color="true"*/}
      {/*    >*/}
      {/*      Send a message*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  )
}
