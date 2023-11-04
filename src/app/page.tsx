import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="content bg-white" id="lqd-site-content">
      <div id="lqd-contents-wrap">
        Body
        {/*  <!-- Start Banner -->*/}
        {/*  <section className="lqd-section banner pt-20 px-75" id="banner">*/}
        {/*    <div className="container-fluid">*/}
        {/*      <div className="lqd-vslider">*/}
        {/*        <div className="rounded-6 lqd-vslider-scrn w-full relative overflow-hidden" data-lqd-slideshow="true" data-inview="true">*/}
        {/*						<span className="lqd-vslider-loader inline-flex items-center justify-center absolute z-3">*/}
        {/*							<span className="inline-flex rounded-full"></span>*/}
        {/*						</span>*/}
        {/*          <div className="lqd-vslider-scrn-inner relative overflow-hidden h-full">*/}
        {/*            <div className="lqd-vslider-ext lqd-overlay flex relative z-2 h-auto">*/}
        {/*              <ul className="w-full link-18 link-font-normal link-white reset-ul">*/}
        {/*                <li className="pt-1rem pr-1rem pl-1rem m-0 absolute is-active">*/}
        {/*                  <div className="flex flex-col pr-40percent items-start sm:pr-0">*/}
        {/*                    <h2 className="mb-0/5em leading-1em text-white">Watch the creative process behind our digital marketing.</h2>*/}
        {/*                    <a href="https://www.youtube.com/watch?v=WaSvMAl4zPw" className="fresco btn btn-naked btn-icon-left btn-icon-circle btn-icon-custom-size btn-icon-bordered btn-icon-border-thicker text-14 font-normal uppercase leading-1em tracking-0 text-black leading-20 tracking-0 capitalize hover:text-white hover:inner-text-black hover:inner-bg-white">*/}
        {/*												<span className="btn-txt">*/}
        {/*													<small>Click to Watch</small> See how it works </span>*/}
        {/*                      <span className="btn-icon w-60 h-60 text-white border-1 border-white-40 rounded-full mr-20 inner-text-black inner-bg-white">*/}
        {/*													<i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-play"></i>*/}
        {/*												</span>*/}
        {/*                    </a>*/}
        {/*                  </div>*/}
        {/*                </li>*/}
        {/*                <li className="pt-1rem pr-1rem pl-1rem m-0 absolute">*/}
        {/*                  <div className="flex flex-col pr-40percent items-start sm:pr-0">*/}
        {/*                    <h2 className="mb-0/5em leading-1em text-white">Watch the creative process behind our digital marketing.</h2>*/}
        {/*                    <a href="https://www.youtube.com/watch?v=WaSvMAl4zPw" className="fresco btn btn-naked btn-icon-left btn-icon-circle btn-icon-custom-size btn-icon-bordered btn-icon-border-thicker text-14 font-normal uppercase leading-1em tracking-0 text-black leading-20 tracking-0 capitalize hover:text-white hover:inner-text-black hover:inner-bg-white">*/}
        {/*												<span className="btn-txt">*/}
        {/*													<small>Click to Watch</small> See how it works </span>*/}
        {/*                      <span className="btn-icon w-60 h-60 text-white border-1 border-white-40 rounded-full mr-20 inner-text-black inner-bg-white">*/}
        {/*													<i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-play"></i>*/}
        {/*												</span>*/}
        {/*                    </a>*/}
        {/*                  </div>*/}
        {/*                </li>*/}
        {/*                <li className="pt-1rem pr-1rem pl-1rem m-0 absolute">*/}
        {/*                  <div className="flex flex-col pr-40percent items-start sm:pr-0">*/}
        {/*                    <h2 className="mb-0/5em leading-1em text-white">Watch the creative process behind our digital marketing.</h2>*/}
        {/*                    <a href="https://www.youtube.com/watch?v=WaSvMAl4zPw" className="fresco btn btn-naked btn-icon-left btn-icon-circle btn-icon-custom-size btn-icon-bordered btn-icon-border-thicker text-14 font-normal uppercase leading-1em tracking-0 text-black leading-20 tracking-0 capitalize hover:text-white hover:inner-text-black hover:inner-bg-white">*/}
        {/*												<span className="btn-txt">*/}
        {/*													<small>Click to Watch</small> See how it works </span>*/}
        {/*                      <span className="btn-icon w-60 h-60 text-white border-1 border-white-40 rounded-full mr-20 inner-text-black inner-bg-white">*/}
        {/*													<i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-play"></i>*/}
        {/*												</span>*/}
        {/*                    </a>*/}
        {/*                  </div>*/}
        {/*                </li>*/}
        {/*                <li className="pt-1rem pr-1rem pl-1rem m-0 absolute">*/}
        {/*                  <div className="flex flex-col pr-40percent items-start sm:pr-0">*/}
        {/*                    <h2 className="mb-0/5em leading-1em text-white">Watch the creative process behind our digital marketing.</h2>*/}
        {/*                    <a href="https://www.youtube.com/watch?v=WaSvMAl4zPw" className="fresco btn btn-naked btn-icon-left btn-icon-circle btn-icon-custom-size btn-icon-bordered btn-icon-border-thicker text-14 font-normal uppercase leading-1em tracking-0 text-black leading-20 tracking-0 capitalize hover:text-white hover:inner-text-black hover:inner-bg-white">*/}
        {/*												<span className="btn-txt">*/}
        {/*													<small>Click to Watch</small> See how it works </span>*/}
        {/*                      <span className="btn-icon w-60 h-60 text-white border-1 border-white-40 rounded-full mr-20 inner-text-black inner-bg-white">*/}
        {/*													<i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-play"></i>*/}
        {/*												</span>*/}
        {/*                    </a>*/}
        {/*                  </div>*/}
        {/*                </li>*/}
        {/*              </ul>*/}
        {/*            </div>*/}
        {/*            <div className="lqd-vslider-images lqd-overlay flex z-0">*/}
        {/*              <figure className="absolute overflow-hidden is-active">*/}
        {/*                <img className="w-full h-full lqd-overlay flex objfit-cover objfit-center" src="./assets/images/demo/asymmetric-9/banner/blog-cover-1@2x.jpeg" alt="banner">*/}
        {/*              </figure>*/}
        {/*              <figure className="absolute overflow-hidden">*/}
        {/*                <img className="w-full h-full lqd-overlay flex objfit-cover objfit-center" src="./assets/images/demo/asymmetric-9/banner/bg-1.jpg" alt="banner">*/}
        {/*              </figure>*/}
        {/*              <figure className="absolute overflow-hidden">*/}
        {/*                <img className="w-full h-full lqd-overlay flex objfit-cover objfit-center" src="./assets/images/demo/asymmetric-9/banner/bg.jpg" alt="banner">*/}
        {/*              </figure>*/}
        {/*              <figure className="absolute overflow-hidden">*/}
        {/*                <img className="w-full h-full lqd-overlay flex objfit-cover objfit-center" src="./assets/images/demo/asymmetric-9/banner/bg-1.jpg" alt="banner">*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*            <div className="lqd-vslider-menu lqd-overlay flex z-1">*/}
        {/*              <ul className="reset-ul flex flex-col lqd-overlay flex text-vertical">*/}
        {/*                <li className="flex items-end p-1/5rem m-0 relative is-active">*/}
        {/*                  <a className="lqd-webgl-slideshow-link p-1/5rem" href="#">*/}
        {/*                    <span className="inline-flex">Digital Design</span>*/}
        {/*                  </a>*/}
        {/*                </li>*/}
        {/*                <li className="flex items-end p-1/5rem m-0 relative">*/}
        {/*                  <a className="lqd-webgl-slideshow-link p-1/5rem" href="#">*/}
        {/*                    <span className="inline-flex">Branding Strategy</span>*/}
        {/*                  </a>*/}
        {/*                </li>*/}
        {/*                <li className="flex items-end p-1/5rem m-0 relative">*/}
        {/*                  <a className="lqd-webgl-slideshow-link p-1/5rem" href="#">*/}
        {/*                    <span className="inline-flex">Mobile App Design</span>*/}
        {/*                  </a>*/}
        {/*                </li>*/}
        {/*                <li className="flex items-end p-1/5rem m-0 relative">*/}
        {/*                  <a className="lqd-webgl-slideshow-link p-1/5rem" href="#">*/}
        {/*                    <span className="inline-flex">Website</span>*/}
        {/*                  </a>*/}
        {/*                </li>*/}
        {/*              </ul>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <span className="lqd-extra-cursor fixed pointer-events-none"></span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </section>*/}
        {/*  <!-- End Banner -->*/}
        {/*  <!-- Start Clients -->*/}
        {/*  <section className="lqd-section clients bg-white py-60" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "back.inOut", "direction": "random", "initValues": {"opacity" : 0} , "animations": {"opacity" : 1}}'>*/}
        {/*    <div className="container">*/}
        {/*      <div className="row items-center">*/}
        {/*        <div className="col col-12">*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h6 className="ld-fh-element mb-2em  inline-block relative">These world-class teams are already using Hub</h6>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-4 col-md-2 text-start lg:text-center sm:text-start module-img">*/}
        {/*          <div className="lqd-imggrp-single block relative animation-element">*/}
        {/*            <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*              <figure className="w-full relative">*/}
        {/*                <img width="111" height="33" src="./assets/images/demo/asymmetric-9/clients/spotify-1.svg" alt="client">*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-4 col-md-2 text-center module-img">*/}
        {/*          <div className="lqd-imggrp-single block relative animation-element">*/}
        {/*            <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*              <figure className="w-full relative">*/}
        {/*                <img width="65" height="23" src="./assets/images/demo/asymmetric-9/clients/nike.svg" alt="client">*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-4 col-md-2 text-center sm:text-end module-img">*/}
        {/*          <div className="lqd-imggrp-single block relative animation-element">*/}
        {/*            <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*              <figure className="w-full relative">*/}
        {/*                <img width="75" height="17" src="./assets/images/demo/asymmetric-9/clients/amd-logo-1.svg" alt="client">*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-4 col-md-2 text-center sm:text-start">*/}
        {/*          <div className="lqd-imggrp-single block relative animation-element">*/}
        {/*            <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*              <figure className="w-full relative">*/}
        {/*                <img width="111" height="33" src="./assets/images/demo/asymmetric-9/clients/spotify-1.svg" alt="client">*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-4 col-md-2 text-center">*/}
        {/*          <div className="lqd-imggrp-single block relative animation-element">*/}
        {/*            <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*              <figure className="w-full relative">*/}
        {/*                <img width="66" height="21" src="./assets/images/demo/asymmetric-9/clients/hulu-2.svg" alt="client">*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-4 col-md-2 text-end lg:text-center sm:text-end">*/}
        {/*          <div className="lqd-imggrp-single block relative animation-element">*/}
        {/*            <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*              <figure className="w-full relative">*/}
        {/*                <img width="93" height="27" src="./assets/images/demo/asymmetric-9/clients/4.svg" alt="client">*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </section>*/}
        {/*  <!-- End Clients -->*/}
        {/*  <!-- Start Our Services -->*/}
        {/*  <section className="lqd-section our-services py-10" id="our-services">*/}
        {/*    <div className="container">*/}
        {/*      <div className="row">*/}
        {/*        <div className="w-45percent relative flex justify-between sm:w-full module-col">*/}
        {/*          <div className="relative w-190 module-img-1">*/}
        {/*            <div className="mt-55 lqd-imggrp-single block relative" data-shadow-style="2" data-animate-shadow="true" data-inview="true" data-inview-options='{"delayTime" :200}'>*/}
        {/*              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                <figure className="w-full relative rounded-2">*/}
        {/*                  <img className="rounded-2" width="281" height="297" src="./assets/images/demo/asymmetric-9/what-we-do/1.jpg" alt="what we do">*/}
        {/*                </figure>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative w-230 module-img-2">*/}
        {/*            <div className="lqd-imggrp-single block relative" data-shadow-style="4" data-animate-shadow="true" data-inview="true" data-inview-options='{"delayTime" :300}'>*/}
        {/*              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                <figure className="w-full relative rounded-2">*/}
        {/*                  <img className="rounded-2" width="347" height="446" src="./assets/images/demo/asymmetric-9/what-we-do/3.jpg" alt="what we do">*/}
        {/*                </figure>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="absolute top-45percent max-w-full z-1 module-img-3">*/}
        {/*            <div className="lqd-imggrp-single block relative" data-shadow-style="1" data-animate-shadow="true" data-inview="true">*/}
        {/*              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                <figure className="w-full relative rounded-2">*/}
        {/*                  <img className="rounded-2" width="222" height="426" src="./assets/images/demo/asymmetric-9/what-we-do/2.jpg" alt="what we do">*/}
        {/*                </figure>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="w-55percent pl-10percent sm:w-full sm:p-0" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "back.out", "initValues": {"x": "30px", "rotationY" :30, "opacity" : 0} , "animations": {"x": "0px", "rotationY" :0, "opacity" : 1}}'>*/}
        {/*          <div className="flex justify-start items-center">*/}
        {/*            <a href="#contact-modal" className="button btn text-14 font-bold uppercase leading-1em tracking-1 text-black border-2 rounded-100 whitespace-nowrap py-0/6em px-1em mr-10 hover:bg-black hover:text-white animation-element" data-lity="#contact-modal">*/}
        {/*              <span className="btn-txt" data-text="Send a message">Send a message</span>*/}
        {/*            </a>*/}
        {/*            <a href="#contact-modal" className="button btn btn-solid btn-custom-size btn-icon-block btn-icon-top w-35 h-35 bg-accent mr-10 text-black rounded-full animation-element" data-lity="#contact-modal">*/}
        {/*								<span className="btn-icon w-1em">*/}
        {/*									<svg xmlns="http://www.w3.org/2000/svg" width="10.625" height="10.625" viewBox="0 0 10.625 10.625">*/}
        {/*										<path d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z" transform="translate(5.313 11.322)"></path>*/}
        {/*									</svg>*/}
        {/*								</span>*/}
        {/*            </a>*/}
        {/*          </div>*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h3 className="ld-fh-element text-30 leading-1/2em mt-0/75em mb-1em  inline-block relative">We help you to go online and increase your conversion rate.</h3>*/}
        {/*          </div>*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h6 className="ld-fh-element text-16 mb-1em  inline-block relative">01 <u className="ml-15">Art Direction</u></h6>*/}
        {/*          </div>*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h6 className="ld-fh-element text-16 mb-1em  inline-block relative">02 <u className="ml-15">Marketing Strategy</u></h6>*/}
        {/*          </div>*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h6 className="ld-fh-element text-16 mb-1em  inline-block relative">03 <u className="ml-15">Mobile App Design</u></h6>*/}
        {/*          </div>*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h6 className="ld-fh-element text-16 mb-1em  inline-block relative">04 <u className="ml-15">Content Management</u></h6>*/}
        {/*          </div>*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h6 className="ld-fh-element text-16 mb-1em  inline-block relative">05 <u className="ml-15">System &amp; Guides</u></h6>*/}
        {/*          </div>*/}
        {/*          <div className="ld-fancy-heading relative animation-element">*/}
        {/*            <h6 className="ld-fh-element text-16 mb-1em  inline-block relative">06 <u className="ml-15">Graphic Design</u></h6>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </section>*/}
        {/*  <!-- End Our Services -->*/}
        {/*  <!-- Start Solutions -->*/}
        {/*  <section className="lqd-section solutions pt-160 pb-80" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "back.out", "initValues": {"y": "50px", "z": "50px", "rotationY" :20, "opacity" : 0} , "animations": {"y": "0px", "z": "0px", "rotationY" :0, "opacity" : 1}}'>*/}
        {/*    <div className="container">*/}
        {/*      <div className="row">*/}
        {/*        <div className="col col-12 col-xl-3">*/}
        {/*          <div className="flex flex-col items-start module-title">*/}
        {/*            <div className="w-auto  py-5 px-10 rounded-4 bg-gray text-center ld-fancy-heading relative animation-element">*/}
        {/*              <h6 className="ld-fh-element text-10 font-bold uppercase tracking-1 m-0  inline-block relative">The process</h6>*/}
        {/*            </div>*/}
        {/*            <div className="ld-fancy-heading relative module-title animation-element">*/}
        {/*              <h2 className="ld-fh-element text-32 mt-1em mb-0/5em  inline-block relative">Magical digital solutions.</h2>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-12 col-xl-9">*/}
        {/*          <div className="flex gap-60 sm:flex-wrap module-box">*/}
        {/*            <div className="w-full flex flex-col">*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <h2 className="ld-fh-element text-15 tracking-0 mb-1/25em  inline-block relative">*/}
        {/*                  <span className="text-24 pr-10">01</span>*/}
        {/*                  <span className="font-normal pr-5">/</span>*/}
        {/*                  <span>Project Offer</span>*/}
        {/*                </h2>*/}
        {/*              </div>*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <p className="ld-fh-element mb-0/5em inline-block relative text-13 leading-16">Our design services starts and ends with a best-in-class experience strategy that builds brands. Open an online store and become an international seller. Your customers will enjoy shopping online!</p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="w-full flex flex-col">*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <h2 className="ld-fh-element text-15 tracking-0 mb-1/25em  inline-block relative">*/}
        {/*                  <span className="text-24 pr-10">02</span>*/}
        {/*                  <span className="font-normal pr-5">/</span>*/}
        {/*                  <span>Art Direction</span>*/}
        {/*                </h2>*/}
        {/*              </div>*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <p className="ld-fh-element mb-0/5em inline-block relative text-13 leading-16">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do. </p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="w-full flex flex-col">*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <h2 className="ld-fh-element text-15 tracking-0 mb-1/25em  inline-block relative">*/}
        {/*                  <span className="text-24 pr-10">03</span>*/}
        {/*                  <span className="font-normal pr-5">/</span>*/}
        {/*                  <span>Development</span>*/}
        {/*                </h2>*/}
        {/*              </div>*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <p className="ld-fh-element mb-0/5em inline-block relative text-13 leading-16">We marry creative insight with data to deliver successful user experiences. Through a process of iteration and prototyping, we design interfaces that bring joy to people while allowing them to get things done.</p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="w-full flex flex-col">*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <h2 className="ld-fh-element text-15 tracking-0 mb-1/25em  inline-block relative">*/}
        {/*                  <span className="text-24 pr-10">04</span>*/}
        {/*                  <span className="font-normal pr-5">/</span>*/}
        {/*                  <span>Launch</span>*/}
        {/*                </h2>*/}
        {/*              </div>*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <p className="ld-fh-element mb-0/5em inline-block relative text-13 leading-16">Hub embraces holistic development and support for employees the aim of being a first-choice employer our sectors. Since the 1980s, as the complexity of buildings</p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </section>*/}
        {/*  <!-- End Solutions -->*/}
        {/*  <!-- Start Section Dark -->*/}
        {/*  <section className="lqd-section section-dark max-w-full bg-dark px-75 pb-80">*/}
        {/*    <!-- Start Our Vision -->*/}
        {/*    <section className="lqd-section our-vision pt-80 min-h-70vh">*/}
        {/*      <div className="absolute w-full max-w-full bottom-0 pointer-events-none">*/}
        {/*        <div className="lqd-throwable-scene relative pointer-events-none overflow-hidden" data-lqd-throwable-scene="true" data-throwable-options='{"roundness": "7em"}'>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-1" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">Elementor Support</span>*/}
        {/*          </p>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-2" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">Mobile Builder</span>*/}
        {/*          </p>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-3" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">Next-gen Technologies</span>*/}
        {/*          </p>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-4" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">WooCommerce Builder</span>*/}
        {/*          </p>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-5" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">Adaptive Colors</span>*/}
        {/*          </p>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-6" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">Liquid Events</span>*/}
        {/*          </p>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-7" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">Smart Assets Manager</span>*/}
        {/*          </p>*/}
        {/*          <p className="lqd-throwable-element inline-block absolute top-0 left-0 whitespace-nowrap m-0 pointer-events-auto user-select-none module-float-8" data-lqd-throwable-el>*/}
        {/*            <span className="text-black py-0/25em px-1/5em text-22 leading-1/5em rounded-100 lqd-throwable-element-rot inline-block sm:text-16">Performance</span>*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="container">*/}
        {/*        <div className="row">*/}
        {/*          <div className="col col-12 mb-220">*/}
        {/*            <div className="mb-30 lqd-imggrp-single block relative">*/}
        {/*              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                <figure className="w-full relative">*/}
        {/*                  <img width="48" height="10" src="./assets/images/demo/asymmetric-9/shape/shape.svg" alt="shape">*/}
        {/*                </figure>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <h3 className="lqd-text-reveal-el mb-40 text-74 font-semibold leading-0/9em -tracking-3 text-white" data-split-text="true" data-split-options='{"type": "words, chars"}' data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top bottom", "end": "center 75%", "scrub" : 3}' data-parallax-from='{"opacity" :0.2}' data-parallax-to='{"opacity" :1, "stagger": {"from": "start", "each" : 1}}'>*/}
        {/*								<span className="lqd-adv-txt-item">*/}
        {/*									<span>We build and activate brands through cultural insight, strategic vision, and the</span>*/}
        {/*									<span className="vertical-align-top mx-5 lqd-adv-txt-fig relative inline-flex">*/}
        {/*										<img className="h-auto max-w-full border-none rounded-0" width="62" height="62" src="./assets/images/demo/asymmetric-9/shape/Img-2.png" alt="shape">*/}
        {/*									</span>*/}
        {/*								</span>*/}
        {/*              <span className="lqd-adv-txt-item">*/}
        {/*									<span>power of emotion across ever element of its expression. Developing</span>*/}
        {/*									<span className="vertical-align-top mx-5 lqd-adv-txt-fig relative inline-flex">*/}
        {/*										<img className="h-auto max-w-full border-none rounded-0" width="62" height="62" src="./assets/images/demo/asymmetric-9/shape/Img-1.png" alt="shape">*/}
        {/*									</span>*/}
        {/*								</span>*/}
        {/*              <span className="lqd-adv-txt-item">the best digital experience in the field.</span>*/}
        {/*            </h3>*/}
        {/*            <div className="flex justify-start items-center">*/}
        {/*              <div className="w-auto mr-10 py-5 border-2 border-white rounded-100 px-15 ld-fancy-heading relative">*/}
        {/*                <h5 className="ld-fh-element text-14 uppercase tracking-1 m-0 text-white  inline-block relative">Our vision</h5>*/}
        {/*              </div>*/}
        {/*              <span href="#" className="text-14 font-bold uppercase leading-1em tracking-1 text-black rounded-100 btn btn-solid btn-custom-size btn-icon-block btn-icon-top w-30 h-30 bg-accent mr-10 border-none p-0" target="_blank" rel="nofollow">*/}
        {/*									<span className="btn-icon w-1em">*/}
        {/*										<svg xmlns="http://www.w3.org/2000/svg" width="10.625" height="10.625" viewBox="0 0 10.625 10.625">*/}
        {/*											<path d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z" transform="translate(5.313 11.322)"></path>*/}
        {/*										</svg>*/}
        {/*									</span>*/}
        {/*								</span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </section>*/}
        {/*    <!-- End Our Vision -->*/}
        {/*    <!-- Start Case Studies -->*/}
        {/*    <section className="lqd-section case-studies bg-white rounded-10 mb-90" id="case-studies">*/}
        {/*      <div className="container-fluid border-bottom border-lightgray py-30">*/}
        {/*        <div className="container">*/}
        {/*          <div className="row">*/}
        {/*            <div className="col col-12 text-start">*/}
        {/*              <div className="ld-fancy-heading relative module-title">*/}
        {/*                <h2 className="ld-fh-element inline-block relative text-28 m-0">Recent Works</h2>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="container">*/}
        {/*        <div className="row">*/}
        {/*          <div className="col col-12 pt-55 pb-25 module-col">*/}
        {/*            <div className="flex flex-wrap" data-custom-animations="true" data-ca-options='{"animationTarget": "h2", "ease": "bounce.in", "direction": "random", "initValues":{ "opacity": 0 }, "animations":{ "opacity": 1 }}'>*/}
        {/*              <h2 className="text-94 font-medium -tracking-1 mr-0/25em mb-0/2em sm:text-60">.freelance</h2>*/}
        {/*              <h2 className="text-94 font-medium -tracking-1 mr-0/25em mb-0/2em sm:text-60">.ensoleille</h2>*/}
        {/*              <h2 className="text-94 font-medium -tracking-1 mr-0/25em mb-0/2em sm:text-60">.attractif</h2>*/}
        {/*              <h2 className="text-94 font-medium font-accent italic -tracking-1 mr-0/25em mb-0/2em sm:text-60">.detaille</h2>*/}
        {/*            </div>*/}
        {/*            <div className="lqd-pf-grid mt-50">*/}
        {/*              <div className="liquid-filter-items items-center justify-between">*/}
        {/*                <div className="liquid-filter-items-inner flex-grow-1">*/}
        {/*                  <span className="liquid-filter-items-label size-md">Filter by</span>*/}
        {/*                  <ul className="filter-list filter-list-inline items-centerd-lg-flex flex items-center md:hidden" id="pf-filter-case-studies">*/}
        {/*                    <li className="active text-15" data-filter="*">*/}
        {/*                      <span>All</span>*/}
        {/*                    </li>*/}
        {/*                    <li className="text-15" data-filter=".branding">*/}
        {/*                      <span>Branding</span>*/}
        {/*                    </li>*/}
        {/*                    <li className="text-15" data-filter=".custom-print">*/}
        {/*                      <span>Custom Print</span>*/}
        {/*                    </li>*/}
        {/*                    <li className="text-15" data-filter=".digital-design">*/}
        {/*                      <span>Digital Design</span>*/}
        {/*                    </li>*/}
        {/*                    <li className="text-15" data-filter=".ecommerce">*/}
        {/*                      <span>Ecommerce</span>*/}
        {/*                    </li>*/}
        {/*                  </ul>*/}
        {/*                  <div className="lqd-filter-dropdown hidden md:block" data-form-options='{ "dropdownAppendTo": "self" }'>*/}
        {/*                    <select name="lqd-filter-dropdown-pf-filter-case-studies" id="lqd-filter-dropdown-pf-filter-case-studies">*/}
        {/*                      <option selected data-filter="*" value="*">All</option>*/}
        {/*                      <option data-filter=".branding" value=".branding">Branding</option>*/}
        {/*                      <option data-filter=".custom-print" value=".custom-print">Custom Print</option>*/}
        {/*                      <option data-filter=".digital-design" value=".digital-design">Digital Design</option>*/}
        {/*                      <option data-filter=".ecommerce" value=".ecommerce">Ecommerce</option>*/}
        {/*                    </select>*/}
        {/*                  </div>*/}
        {/*                  <a href="#contact-modal" className="btn btn-naked btn-icon-right btn-hover-swp text-13 font-normal uppercase leading-1em text-black rounded-100 whitespace-nowrap capitalize" data-lity="#contact-modal">*/}
        {/*                    <span className="btn-txt" data-text="Hire me">Hire me</span>*/}
        {/*                    <span className="btn-icon">*/}
        {/*												<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*											</span>*/}
        {/*                    <span className="btn-icon">*/}
        {/*												<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*											</span>*/}
        {/*                  </a>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="lqd-pf-row row flex flex-wrap -mr-30 -ml-30" data-liquid-masonry="true" data-masonry-options='{ "filtersID": "#pf-filter-case-studies", "filtersCounter": true }'>*/}
        {/*                <div className="lqd-pf-column masonry-item digital-design ecommerce col-12 col-sm-6 col-lg-4 px-30">*/}
        {/*                  <article className="lqd-pf-item lqd-pf-item-style-2 lqd-pf-overlay-bg-scale lqd-pf-dark pf-details-h-str rounded-6">*/}
        {/*                    <div className="lqd-pf-item-inner rounded-inherit">*/}
        {/*                      <div className="lqd-pf-img mb-1em relative rounded-6 overflow-hidden">*/}
        {/*                        <figure className="w-full">*/}
        {/*                          <img width="581" height="524" src="./assets/images/demo/asymmetric-9/case-studies/1.jpg" alt="case studies">*/}
        {/*                        </figure>*/}
        {/*                        <span className="lqd-pf-overlay-bg lqd-overlay flex items-center justify-center">*/}
        {/*														<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*													</span>*/}
        {/*                      </div>*/}
        {/*                      <div className="lqd-pf-details">*/}
        {/*                        <h2 className="lqd-pf-title text-22 font-semibold text-black mt-0 mb-1">Beer</h2>*/}
        {/*                        <ul className="lqd-pf-cat reset-ul inline-nav inline-flex relative z-2">*/}
        {/*                          <li>*/}
        {/*                            <a href="#">Digital Design</a>*/}
        {/*                          </li>*/}
        {/*                        </ul>*/}
        {/*                      </div>*/}
        {/*                      <a href="./assets/images/demo/asymmetric-9/case-studies/1.jpg" className="lqd-overlay flex lqd-pf-overlay-link lqd-cc-icon-trigger fresco" data-fresco-group="true"></a>*/}
        {/*                    </div>*/}
        {/*                  </article>*/}
        {/*                </div>*/}
        {/*                <div className="lqd-pf-column masonry-item ecommerce masonry col-12 col-sm-6 col-lg-4 px-30">*/}
        {/*                  <article className="lqd-pf-item lqd-pf-item-style-2 lqd-pf-overlay-bg-scale lqd-pf-dark pf-details-h-str rounded-6">*/}
        {/*                    <div className="lqd-pf-item-inner rounded-inherit">*/}
        {/*                      <div className="lqd-pf-img mb-1em relative rounded-6 overflow-hidden">*/}
        {/*                        <figure className="w-full">*/}
        {/*                          <img width="581" height="527" src="./assets/images/demo/asymmetric-9/case-studies/2.jpg" alt="case studies">*/}
        {/*                        </figure>*/}
        {/*                        <span className="lqd-pf-overlay-bg lqd-overlay flex items-center justify-center">*/}
        {/*														<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*													</span>*/}
        {/*                      </div>*/}
        {/*                      <div className="lqd-pf-details">*/}
        {/*                        <h2 className="lqd-pf-title text-22 font-semibold text-black mt-0 mb-1">Nike</h2>*/}
        {/*                        <ul className="lqd-pf-cat reset-ul inline-nav inline-flex relative z-2">*/}
        {/*                          <li>*/}
        {/*                            <a href="#">Ecommerce</a>*/}
        {/*                          </li>*/}
        {/*                        </ul>*/}
        {/*                      </div>*/}
        {/*                      <a href="./assets/images/demo/asymmetric-9/case-studies/2.jpg" className="lqd-overlay flex lqd-pf-overlay-link lqd-cc-icon-trigger fresco" data-fresco-group="true"></a>*/}
        {/*                    </div>*/}
        {/*                  </article>*/}
        {/*                </div>*/}
        {/*                <div className="lqd-pf-column masonry-item branding custom-print masonry col-12 col-sm-6 col-lg-4 px-30">*/}
        {/*                  <article className="lqd-pf-item lqd-pf-item-style-2 lqd-pf-overlay-bg-scale lqd-pf-dark pf-details-h-str rounded-6">*/}
        {/*                    <div className="lqd-pf-item-inner rounded-inherit">*/}
        {/*                      <div className="lqd-pf-img mb-1em relative rounded-6 overflow-hidden">*/}
        {/*                        <figure className="w-full">*/}
        {/*                          <img width="581" height="524" src="./assets/images/demo/asymmetric-9/case-studies/3.jpg" alt="case studies">*/}
        {/*                        </figure>*/}
        {/*                        <span className="lqd-pf-overlay-bg lqd-overlay flex items-center justify-center">*/}
        {/*														<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*													</span>*/}
        {/*                      </div>*/}
        {/*                      <div className="lqd-pf-details">*/}
        {/*                        <h2 className="lqd-pf-title text-22 font-semibold text-black mt-0 mb-1">Psalms</h2>*/}
        {/*                        <ul className="lqd-pf-cat reset-ul inline-nav inline-flex relative z-2">*/}
        {/*                          <li>*/}
        {/*                            <a href="#">Branding</a>*/}
        {/*                          </li>*/}
        {/*                        </ul>*/}
        {/*                      </div>*/}
        {/*                      <a href="./assets/images/demo/asymmetric-9/case-studies/3.jpg" className="lqd-overlay flex lqd-pf-overlay-link lqd-cc-icon-trigger fresco" data-fresco-group="true"></a>*/}
        {/*                    </div>*/}
        {/*                  </article>*/}
        {/*                </div>*/}
        {/*                <div className="lqd-pf-column col-12 col-sm-6 col-lg-4 masonry-item branding digital-design masonry px-30">*/}
        {/*                  <article className="lqd-pf-item lqd-pf-item-style-2 lqd-pf-overlay-bg-scale lqd-pf-dark pf-details-h-str rounded-6">*/}
        {/*                    <div className="lqd-pf-item-inner rounded-inherit">*/}
        {/*                      <div className="lqd-pf-img mb-1em relative rounded-6 overflow-hidden">*/}
        {/*                        <figure className="w-full">*/}
        {/*                          <img width="581" height="524" src="./assets/images/demo/asymmetric-9/case-studies/4.jpg" alt="case studies">*/}
        {/*                        </figure>*/}
        {/*                        <span className="lqd-pf-overlay-bg lqd-overlay flex items-center justify-center">*/}
        {/*														<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*													</span>*/}
        {/*                      </div>*/}
        {/*                      <div className="lqd-pf-details">*/}
        {/*                        <h2 className="lqd-pf-title text-22 font-semibold text-black mt-0 mb-1">Pixel Phone</h2>*/}
        {/*                        <ul className="lqd-pf-cat reset-ul inline-nav inline-flex relative z-2">*/}
        {/*                          <li>*/}
        {/*                            <a href="#">Branding</a>*/}
        {/*                          </li>*/}
        {/*                        </ul>*/}
        {/*                      </div>*/}
        {/*                      <a href="./assets/images/demo/asymmetric-9/case-studies/4.jpg" className="lqd-overlay flex lqd-pf-overlay-link lqd-cc-icon-trigger fresco" data-fresco-group="true"></a>*/}
        {/*                    </div>*/}
        {/*                  </article>*/}
        {/*                </div>*/}
        {/*                <div className="lqd-pf-column masonry-item custom-print ecommerce masonry col-12 col-sm-6 col-lg-4 px-30">*/}
        {/*                  <article className="lqd-pf-item lqd-pf-item-style-2 lqd-pf-overlay-bg-scale lqd-pf-dark pf-details-h-str rounded-6">*/}
        {/*                    <div className="lqd-pf-item-inner rounded-inherit">*/}
        {/*                      <div className="lqd-pf-img mb-1em relative rounded-6 overflow-hidden">*/}
        {/*                        <figure className="w-full">*/}
        {/*                          <img width="581" height="527" src="./assets/images/demo/asymmetric-9/case-studies/5.jpg" alt="case studies">*/}
        {/*                        </figure>*/}
        {/*                        <span className="lqd-pf-overlay-bg lqd-overlay flex items-center justify-center">*/}
        {/*														<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*													</span>*/}
        {/*                      </div>*/}
        {/*                      <div className="lqd-pf-details">*/}
        {/*                        <h2 className="lqd-pf-title text-22 font-semibold text-black mt-0 mb-1">Next Bank</h2>*/}
        {/*                        <ul className="lqd-pf-cat reset-ul inline-nav inline-flex relative z-2">*/}
        {/*                          <li>*/}
        {/*                            <a href="#">Custom Print</a>*/}
        {/*                          </li>*/}
        {/*                        </ul>*/}
        {/*                      </div>*/}
        {/*                      <a href="./assets/images/demo/asymmetric-9/case-studies/5.jpg" className="lqd-overlay flex lqd-pf-overlay-link lqd-cc-icon-trigger fresco" data-fresco-group="true"></a>*/}
        {/*                    </div>*/}
        {/*                  </article>*/}
        {/*                </div>*/}
        {/*                <div className="lqd-pf-column masonry-item custom-print masonry col-12 col-sm-6 col-lg-4 px-30">*/}
        {/*                  <article className="lqd-pf-item lqd-pf-item-style-2 lqd-pf-overlay-bg-scale lqd-pf-dark pf-details-h-str rounded-6">*/}
        {/*                    <div className="lqd-pf-item-inner rounded-inherit">*/}
        {/*                      <div className="lqd-pf-img mb-1em relative rounded-6 overflow-hidden">*/}
        {/*                        <figure className="w-full">*/}
        {/*                          <img width="581" height="524" src="./assets/images/demo/asymmetric-9/case-studies/6.jpg" alt="case studies">*/}
        {/*                        </figure>*/}
        {/*                        <span className="lqd-pf-overlay-bg lqd-overlay flex items-center justify-center">*/}
        {/*														<i className="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*													</span>*/}
        {/*                      </div>*/}
        {/*                      <div className="lqd-pf-details">*/}
        {/*                        <h2 className="lqd-pf-title text-22 font-semibold text-black mt-0 mb-1">Network</h2>*/}
        {/*                        <ul className="lqd-pf-cat reset-ul inline-nav inline-flex relative z-2">*/}
        {/*                          <li>*/}
        {/*                            <a href="#">Custom Print</a>*/}
        {/*                          </li>*/}
        {/*                        </ul>*/}
        {/*                      </div>*/}
        {/*                      <a href="./assets/images/demo/asymmetric-9/case-studies/6.jpg" className="lqd-overlay flex lqd-pf-overlay-link lqd-cc-icon-trigger fresco" data-fresco-group="true"></a>*/}
        {/*                    </div>*/}
        {/*                  </article>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </section>*/}
        {/*    <!-- End Case Studies -->*/}
        {/*    <!-- Start Services -->*/}
        {/*    <section className="lqd-section services bg-white rounded-10 mb-90">*/}
        {/*      <div className="container">*/}
        {/*        <div className="row">*/}
        {/*          <div className="col col-12 text-start" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "back.out", "direction": "backward", "initValues": {"x": "-100px", "opacity" : 0} , "animations": {"x": "0px", "opacity" : 1}}'>*/}
        {/*            <div className="w-full flex flex-wrap justify-between items-center pt-35">*/}
        {/*              <div className="ld-fancy-heading relative lg:w-50percent sm:w-full module-title animation-element">*/}
        {/*                <h2 className="ld-fh-element text-28 m-0  inline-block relative">Services</h2>*/}
        {/*              </div>*/}
        {/*              <div className="flex items-center justify-end lg:w-50percent sm:w-full sm:justify-start module-btn">*/}
        {/*                <div className="ld-fancy-heading relative mr-10 py-5 px-15 mb-0 border-2 border-black rounded-100 animation-element">*/}
        {/*                  <h5 className="ld-fh-element inline-block relative text-14 uppercase tracking-1 m-0">Our services</h5>*/}
        {/*                </div>*/}
        {/*                <a href="#" className="text-14 font-bold uppercase text-black rounded-100 btn btn-solid btn-custom-size btn-icon-block btn-icon-top w-30 h-30 bg-accent border-none p-0" target="_blank" rel="nofollow">*/}
        {/*										<span className="btn-icon w-1em">*/}
        {/*											<svg xmlns="http://www.w3.org/2000/svg" width="10.625" height="10.625" viewBox="0 0 10.625 10.625">*/}
        {/*												<path d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z" transform="translate(5.313 11.322)"></path>*/}
        {/*											</svg>*/}
        {/*										</span>*/}
        {/*                </a>*/}
        {/*              </div>*/}
        {/*              <div className="divider w-full max-w-full mt-10 py-15">*/}
        {/*                <span className="w-full border-bottom border-black-50"></span>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="col col-12 pt-55 pb-70 px-10 module-col" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "back.out", "direction": "backward", "initValues": {"y": "100px", "opacity" : 0} , "animations": {"y": "0px", "opacity" : 1}}'>*/}
        {/*            <div className="accordion accordion-title-underlined accordion-sm animation-element" id="accordion-services" role="tablist" aria-multiselectable="true">*/}
        {/*              <div className="accordion-item panel active">*/}
        {/*                <div className="accordion-heading" role="tab" id="heading-item-one">*/}
        {/*                  <h4 className="accordion-title font-normal">*/}
        {/*                    <a className="collapsed" role="button" data-bs-toggle="collapse" href="#collapse-item-one" aria-expanded="true" aria-controls="collapse-item-one">*/}
        {/*                      <span className="accordion-title-txt">Make your <b>eCommerce business stand out.</b></span>*/}
        {/*                      <span className="accordion-expander text-24 w-60 h-60 flex items-center justify-center p-0 border-2 rounded-full  border-lightgray flex-shrink-0">*/}
        {/*													<i className="lqd-icn-ess icon-ion-ios-add"></i>*/}
        {/*													<i className="lqd-icn-ess icon-ion-ios-remove"></i>*/}
        {/*												</span>*/}
        {/*                    </a>*/}
        {/*                  </h4>*/}
        {/*                </div>*/}
        {/*                <div id="collapse-item-one" className="accordion-collapse collapse show" data-bs-parent="#accordion-services" role="tabpanel" aria-labelledby="heading-item-one">*/}
        {/*                  <div className="accordion-content py-1em">*/}
        {/*                    <div className="flex flex-wrap items-end">*/}
        {/*                      <div className="w-40percent flex flex-wrap align-content-end items-end gap-0 pr-150 sm:w-full module-content">*/}
        {/*                        <div className="lqd-counter relative lqd-counter-default -mb-20 text-black w-auto">*/}
        {/*                          <div className="lqd-counter-element relative font-medium mb-0" data-enable-counter="true" data-counter-options='{"targetNumber": "6"}'>*/}
        {/*                            <span className="block">6</span>*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="ld-fancy-heading relative">*/}
        {/*                          <span className="ld-fh-element inline-block relative text-16 leading-20 mb-2em italic text-gray-500 xl:m-0">Years of<br>experience</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="ld-fancy-heading relative mt-10">*/}
        {/*                          <p className="ld-fh-element mb-0/5em inline-block relative">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do.</p>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                      <div className="w-60percent sm:w-full sm:order-first">*/}
        {/*                        <div className="lqd-imggrp-single block relative">*/}
        {/*                          <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                            <figure className="w-full relative">*/}
        {/*                              <img width="1038" height="614" src="./assets/images/demo/asymmetric-9/services/acc-img-1.jpg" alt="services">*/}
        {/*                            </figure>*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="accordion-item panel">*/}
        {/*                <div className="accordion-heading" role="tab" id="heading-item-two">*/}
        {/*                  <h4 className="accordion-title font-normal">*/}
        {/*                    <a className="collapsed" role="button" data-bs-toggle="collapse" href="#collapse-item-two" aria-expanded="false" aria-controls="collapse-item-two">*/}
        {/*                      <span className="accordion-title-txt">Increase your <b>conversion rate best-in-class experience strategy.</b></span>*/}
        {/*                      <span className="accordion-expander text-24 w-60 h-60 flex items-center justify-center p-0 border-2 rounded-full  border-lightgray flex-shrink-0">*/}
        {/*													<i className="lqd-icn-ess icon-ion-ios-add"></i>*/}
        {/*													<i className="lqd-icn-ess icon-ion-ios-remove"></i>*/}
        {/*												</span>*/}
        {/*                    </a>*/}
        {/*                  </h4>*/}
        {/*                </div>*/}
        {/*                <div id="collapse-item-two" className="accordion-collapse collapse" data-bs-parent="#accordion-services" role="tabpanel" aria-labelledby="heading-item-two">*/}
        {/*                  <div className="accordion-content py-1em">*/}
        {/*                    <div className="flex flex-wrap items-end">*/}
        {/*                      <div className="w-40percent flex flex-wrap align-content-end items-end gap-0 pr-150 sm:w-full module-content">*/}
        {/*                        <div className="lqd-counter relative lqd-counter-default -mb-20 text-black w-auto">*/}
        {/*                          <div className="lqd-counter-element relative font-medium mb-0" data-enable-counter="true" data-counter-options='{"targetNumber": "6"}'>*/}
        {/*                            <span className="block">6</span>*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="ld-fancy-heading relative">*/}
        {/*                          <span className="ld-fh-element inline-block relative text-16 leading-20 mb-2em italic text-gray-500 xl:m-0">Years of<br>experience</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="ld-fancy-heading relative mt-10">*/}
        {/*                          <p className="ld-fh-element mb-0/5em inline-block relative">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do.</p>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                      <div className="w-60percent sm:w-full sm:order-first">*/}
        {/*                        <div className="lqd-imggrp-single block relative">*/}
        {/*                          <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                            <figure className="w-full relative">*/}
        {/*                              <img width="1038" height="614" src="./assets/images/demo/asymmetric-9/services/acc-img-1.jpg" alt="services">*/}
        {/*                            </figure>*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="accordion-item panel">*/}
        {/*                <div className="accordion-heading" role="tab" id="heading-item-three">*/}
        {/*                  <h4 className="accordion-title font-normal">*/}
        {/*                    <a className="collapsed" role="button" data-bs-toggle="collapse" href="#collapse-item-three" aria-expanded="false" aria-controls="collapse-item-three">*/}
        {/*                      <span className="accordion-title-txt">Learn how to <b>laser focus and target your audience.</b></span>*/}
        {/*                      <span className="accordion-expander text-24 w-60 h-60 flex items-center justify-center p-0 border-2 rounded-full  border-lightgray flex-shrink-0">*/}
        {/*													<i className="lqd-icn-ess icon-ion-ios-add"></i>*/}
        {/*													<i className="lqd-icn-ess icon-ion-ios-remove"></i>*/}
        {/*												</span>*/}
        {/*                    </a>*/}
        {/*                  </h4>*/}
        {/*                </div>*/}
        {/*                <div id="collapse-item-three" className="accordion-collapse collapse" data-bs-parent="#accordion-services" role="tabpanel" aria-labelledby="heading-item-three">*/}
        {/*                  <div className="accordion-content py-1em">*/}
        {/*                    <div className="flex flex-wrap items-end">*/}
        {/*                      <div className="w-40percent flex flex-wrap align-content-end items-end gap-0 pr-150 sm:w-full module-content">*/}
        {/*                        <div className="lqd-counter relative lqd-counter-default -mb-20 text-black w-auto">*/}
        {/*                          <div className="lqd-counter-element relative font-medium mb-0" data-enable-counter="true" data-counter-options='{"targetNumber": "6"}'>*/}
        {/*                            <span className="block">6</span>*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="ld-fancy-heading relative">*/}
        {/*                          <span className="ld-fh-element inline-block relative text-16 leading-20 mb-2em italic text-gray-500 xl:m-0">Years of<br>experience</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="ld-fancy-heading relative mt-10">*/}
        {/*                          <p className="ld-fh-element mb-0/5em inline-block relative">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do.</p>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                      <div className="w-60percent sm:w-full sm:order-first">*/}
        {/*                        <div className="lqd-imggrp-single block relative">*/}
        {/*                          <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                            <figure className="w-full relative">*/}
        {/*                              <img width="1038" height="614" src="./assets/images/demo/asymmetric-9/services/acc-img-1.jpg" alt="services">*/}
        {/*                            </figure>*/}
        {/*                          </div>*/}
        {/*                        </div>*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </section>*/}
        {/*    <!-- End Services -->*/}
        {/*    <!-- Start Section Flow -->*/}
        {/*    <section className="lqd-section section-flow bg-white rounded-10 mb-90">*/}
        {/*      <div className="container-fluid">*/}
        {/*        <div className="row">*/}
        {/*          <div className="col col-12">*/}
        {/*            <div className="lqd-section-flow items-start flex-wrap" data-lqd-section-flow="true">*/}
        {/*              <div className="lqd-section-flow-panel lqd-section-flow-panel-start col-lg-6 h-vh-100 px-0 sticky top-0 left-0 overflow-hidden">*/}
        {/*                <div className="lqd-section-flow-panel-start-inner">*/}
        {/*                  <div className="lqd-section-flow-item lqd-overlay flex overflow-hidden">*/}
        {/*                    <div className="lqd-section-flow-item-inner h-vh-100">*/}
        {/*                      <img className="h-full objfit-cover objpos-center" src="./assets/images/demo/asymmetric-9/section-flow/acc-img-1.jpg" title="section-flow-1" alt="section-flow-1">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                  <div className="lqd-section-flow-item lqd-overlay flex overflow-hidden">*/}
        {/*                    <div className="lqd-section-flow-item-inner h-vh-100">*/}
        {/*                      <img className="h-full objfit-cover objpos-center" src="./assets/images/demo/asymmetric-9/section-flow/Img.jpg" title="Img" alt="Img">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                  <div className="lqd-section-flow-item lqd-overlay flex overflow-hidden">*/}
        {/*                    <div className="lqd-section-flow-item-inner h-vh-100">*/}
        {/*                      <img className="h-full objfit-cover objpos-center" src="./assets/images/demo/asymmetric-9/section-flow/Img-1.jpg" title="Img-1" alt="Img-1">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="lqd-section-flow-panel lqd-section-flow-panel-end col-lg-6">*/}
        {/*                <div className="lqd-section-flow-item flex items-center">*/}
        {/*                  <div className="lqd-section-flow-item-inner">*/}
        {/*                    <div className="lqd-section-flow-content-mobile mb-30">*/}
        {/*                      <img src="./assets/images/demo/asymmetric-9/section-flow/acc-img-1.jpg" title="section-flow-1" alt="section-flow-1">*/}
        {/*                    </div>*/}
        {/*                    <div className="flex flex-wrap py-20percent">*/}
        {/*                      <div className="ld-fancy-heading relative py-5 px-15 leading-1 bg-gray rounded-4 mb-15">*/}
        {/*                        <h6 className="ld-fh-element inline-block relative text-10 font-bold uppercase tracking-1 m-0">7. Creative</h6>*/}
        {/*                      </div>*/}
        {/*                      <div className="ld-fancy-heading relative">*/}
        {/*                        <h2 className="ld-fh-element inline-block relative text-42 leading-0/9em mb-0/75em">We create world-class digital products materials that communicate clearly.</h2>*/}
        {/*                      </div>*/}
        {/*                      <a href="./page-asymmetric-agency-case-studies.html" className="btn btn-naked btn-icon-left btn-icon-circle btn-icon-custom-size btn-icon-bordered capitalize tracking-0 font-bold leading-1em text-14 text-black hover:inner-text-white hover:inner-bg-black">*/}
        {/*                        <span className="btn-txt" data-text="Explore Details">Explore Details</span>*/}
        {/*                        <span className="btn-icon w-55 h-55 border-1 border-black-10 text-black-40 mr-15 inner-bg-black inner-text-white text-1/5em">*/}
        {/*														<i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-add"></i>*/}
        {/*													</span>*/}
        {/*                      </a>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="lqd-section-flow-item flex items-center">*/}
        {/*                  <div className="lqd-section-flow-item-inner">*/}
        {/*                    <div className="lqd-section-flow-content-mobile mb-30">*/}
        {/*                      <img src="./assets/images/demo/asymmetric-9/section-flow/Img.jpg" title="Img" alt="Img">*/}
        {/*                    </div>*/}
        {/*                    <div className="flex flex-wrap py-20percent">*/}
        {/*                      <div className="ld-fancy-heading relative py-5 px-15 leading-1 bg-gray rounded-4 mb-15">*/}
        {/*                        <h6 className="ld-fh-element inline-block relative text-10 font-bold uppercase tracking-1 m-0">3. Agencies</h6>*/}
        {/*                      </div>*/}
        {/*                      <div className="ld-fancy-heading relative">*/}
        {/*                        <h2 className="ld-fh-element inline-block relative text-42 leading-0/9em mb-0/75em">We craft premium designs for agencies and global brands around the globe.</h2>*/}
        {/*                      </div>*/}
        {/*                      <a href="./page-asymmetric-agency-case-studies.html" className="btn btn-naked btn-icon-left btn-icon-circle btn-icon-custom-size btn-icon-bordered capitalize tracking-0 font-bold leading-1em text-14 text-black hover:inner-text-white hover:inner-bg-black">*/}
        {/*                        <span className="btn-txt" data-text="Explore Details">Explore Details</span>*/}
        {/*                        <span className="btn-icon w-55 h-55 border-1 border-black-10 text-black-40 mr-15 inner-bg-black inner-text-white text-1/5em">*/}
        {/*														<i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-add"></i>*/}
        {/*													</span>*/}
        {/*                      </a>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="lqd-section-flow-item flex items-center">*/}
        {/*                  <div className="lqd-section-flow-item-inner">*/}
        {/*                    <div className="lqd-section-flow-content-mobile mb-30">*/}
        {/*                      <img src="./assets/images/demo/asymmetric-9/section-flow/Img-1.jpg" title="Img-1" alt="Img-1">*/}
        {/*                    </div>*/}
        {/*                    <div className="flex flex-wrap py-20percent">*/}
        {/*                      <div className="ld-fancy-heading relative py-5 px-15 leading-1 bg-gray rounded-4 mb-15">*/}
        {/*                        <h6 className="ld-fh-element inline-block relative text-10 font-bold uppercase tracking-1 m-0">2. Brands</h6>*/}
        {/*                      </div>*/}
        {/*                      <div className="ld-fancy-heading relative">*/}
        {/*                        <h2 className="ld-fh-element inline-block relative text-42 leading-0/9em mb-0/75em">We create world-class digital products materials that communicate clearly.</h2>*/}
        {/*                      </div>*/}
        {/*                      <a href="./page-asymmetric-agency-case-studies.html" className="btn btn-naked btn-icon-left btn-icon-circle btn-icon-custom-size btn-icon-bordered capitalize tracking-0 font-bold leading-1em text-14 text-black hover:inner-text-white hover:inner-bg-black">*/}
        {/*                        <span className="btn-txt" data-text="Explore Details">Explore Details</span>*/}
        {/*                        <span className="btn-icon w-55 h-55 border-1 border-black-10 text-black-40 mr-15 inner-bg-black inner-text-white text-1/5em">*/}
        {/*														<i aria-hidden="true" className="lqd-icn-ess icon-ion-ios-add"></i>*/}
        {/*													</span>*/}
        {/*                      </a>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </section>*/}
        {/*    <!-- End Section Flow -->*/}
        {/*    <!-- Start Testimonials -->*/}
        {/*    <section className="lqd-section testimonials text-white mb-80" id="testimonials" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "back.out", "direction": "backward", "initValues": {"y": "100px", "opacity" : 0} , "animations": {"y": "0px", "opacity" : 1}}'>*/}
        {/*      <div className="container">*/}
        {/*        <div className="row">*/}
        {/*          <div className="w-full flex flex-col items-start flex-wrap p-0">*/}
        {/*            <div className="ld-fancy-heading relative leading-1/5em px-10 bg-lightgray rounded-4 animation-element">*/}
        {/*              <h6 className="ld-fh-element inline-block relative text-10 font-bold uppercase tracking-1 m-0">Testimonials</h6>*/}
        {/*            </div>*/}
        {/*            <div className="w-full flex flex-wrap flex-grow-1 items-center justify-start">*/}
        {/*              <div className="ld-fancy-heading relative animation-element">*/}
        {/*                <h2 className="ld-fh-element inline-block relative text-white text-68 mr-0/5em mb-0">Customer stories</h2>*/}
        {/*              </div>*/}
        {/*              <span className="btn text-14 font-bold uppercase leading-1em tracking-1 text-white border-2 rounded-100 py-0/6em px-1em bg-white-0 border-white mr-10 hover:bg-white hover:text-black animation-element">*/}
        {/*									<span className="btn-txt" data-text="read more">read more</span>*/}
        {/*								</span>*/}
        {/*              <span className="text-14 font-bold uppercase leading-1em tracking-1 text-black rounded-100 btn btn-solid btn-custom-size btn-icon-block btn-icon-top w-35 h-35 bg-accent border-none p-0 w-35 h-35  animation-element">*/}
        {/*									<span className="btn-icon w-1em">*/}
        {/*										<svg xmlns="http://www.w3.org/2000/svg" width="10.625" height="10.625" viewBox="0 0 10.625 10.625">*/}
        {/*											<path d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z" transform="translate(5.313 11.322)"></path>*/}
        {/*										</svg>*/}
        {/*									</span>*/}
        {/*								</span>*/}
        {/*              <div className="divider w-full max-w-full items-center py-30 animation-element">*/}
        {/*                <h5 className="text-14 uppercase tracking-1 text-white mr-20 mb-0">Testimonials </h5>*/}
        {/*                <span className="divider-separator items-center"></span>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="w-full flex items-center justify-start flex-wrap"></div>*/}
        {/*          <div className="w-55percent flex flex-col flex-wrap md:w-full">*/}
        {/*            <div className="lqd-imggrp-single block relative mb-25 animation-element">*/}
        {/*              <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center">*/}
        {/*                <figure className="w-full relative">*/}
        {/*                  <img width="26" height="26" src="./assets/images/demo/asymmetric-9/testimonials/Quote.svg" alt="testimonials">*/}
        {/*                </figure>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <div className="carousel-container relative carousel-nav-left carousel-nav-sm carousel-nav-shaped carousel-nav-solid carousel-nav-circle carousel-nav-left carousel-dots-inside carousel-dots-mobile-outside carousel-dots-mobile-left animation-element">*/}
        {/*              <div className="carousel-items relative" data-lqd-flickity='{"prevNextButtons": true, "navArrow": "6", "pageDots": true, "dotsIndicator": "numbers", "numbersStyle": "circle", "dotsAppendTo": "#testimonial-carousel-dots-holder", "cellAlign": "left", "groupCells": false, "buttonsAppendTo": "self", "addSlideNumbersToArrows": false}'>*/}
        {/*                <div className="carousel-item flex flex-col justify-center">*/}
        {/*                  <div className="carousel-item-inner relative w-full mb-20">*/}
        {/*                    <div className="carousel-item-content relative w-full text-20 text-white leading-1em">*/}
        {/*                      <p>By enrolling in the Four Bear Program, UM guarantees you will graduate in four years with a bachelor's degree. Discover the global city—filled with inspiration, opportunities to explore.</p>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center">*/}
        {/*                  <div className="carousel-item-inner relative w-full mb-20">*/}
        {/*                    <div className="carousel-item-content relative w-full text-20 text-white leading-1em">*/}
        {/*                      <p>By enrolling in the Four Bear Program, UM guarantees you will graduate in four years with a bachelor's degree. Discover the global city—filled with inspiration, opportunities to explore.</p>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center">*/}
        {/*                  <div className="carousel-item-inner relative w-full mb-20">*/}
        {/*                    <div className="carousel-item-content relative w-full text-20 text-white leading-1em">*/}
        {/*                      <p>By enrolling in the Four Bear Program, UM guarantees you will graduate in four years with a bachelor's degree. Discover the global city—filled with inspiration, opportunities to explore.</p>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center">*/}
        {/*                  <div className="carousel-item-inner relative w-full mb-20">*/}
        {/*                    <div className="carousel-item-content relative w-full text-20 text-white leading-1em">*/}
        {/*                      <p>By enrolling in the Four Bear Program, UM guarantees you will graduate in four years with a bachelor's degree. Discover the global city—filled with inspiration, opportunities to explore.</p>*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="w-45percent relative flex items-center justify-center flex-wrap md:hidden" id="testimonial-carousel-dots-holder">*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </section>*/}
        {/*    <!-- End Testimonials -->*/}
        {/*    <!-- Start Clients Carousel  -->*/}
        {/*    <section className="lqd-section clients-carousel">*/}
        {/*      <div className="container-fluid mx-20">*/}
        {/*        <div className="row">*/}
        {/*          <div className="col col-12">*/}
        {/*            <div className="carousel-container relative carousel-nav-shaped yes">*/}
        {/*              <div className="carousel-items relative lqd-fade-sides -mr-30 -ml-30" data-lqd-flickity='{"marquee": true, "equalHeightCells": true, "middleAlignContent": true, "marqueeTickerSpeed": "1", "pauseAutoPlayOnHover": false}'>*/}
        {/*                <div className="carousel-item flex flex-col justify-center items-center w-20percent px-30 lg:w-40percent">*/}
        {/*                  <div className="carousel-item-inner relative w-full h-220 bg-transparent border-1 border-white-10">*/}
        {/*                    <div className="carousel-item-content relative w-full justify-center">*/}
        {/*                      <img width="93" height="27" src="./assets/images/demo/asymmetric-9/clients/4-1.svg" alt="clients">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center items-center w-20percent px-30 lg:w-40percent">*/}
        {/*                  <div className="carousel-item-inner relative w-full h-220 bg-transparent border-1 border-white-10">*/}
        {/*                    <div className="carousel-item-content relative w-full justify-center">*/}
        {/*                      <img width="75" height="27" src="./assets/images/demo/asymmetric-9/clients/nike-1.svg" alt="clients">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center items-center w-20percent px-30 lg:w-40percent">*/}
        {/*                  <div className="carousel-item-inner relative w-full h-220 bg-transparent border-1 border-white-10">*/}
        {/*                    <div className="carousel-item-content relative w-full justify-center">*/}
        {/*                      <img width="46" height="33" src="./assets/images/demo/asymmetric-9/clients/Path-46878.svg" alt="clients">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center items-center w-20percent px-30 lg:w-40percent">*/}
        {/*                  <div className="carousel-item-inner relative w-full h-220 bg-transparent border-1 border-white-10">*/}
        {/*                    <div className="carousel-item-content relative w-full justify-center">*/}
        {/*                      <img width="92" height="13" src="./assets/images/demo/asymmetric-9/clients/Path-46880.svg" alt="clients">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center items-center w-20percent px-30 lg:w-40percent">*/}
        {/*                  <div className="carousel-item-inner relative w-full h-220 bg-transparent border-1 border-white-10">*/}
        {/*                    <div className="carousel-item-content relative w-full justify-center">*/}
        {/*                      <img width="68" height="30" src="./assets/images/demo/asymmetric-9/clients/Path-46881.svg" alt="clients">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="carousel-item flex flex-col justify-center items-center w-20percent px-30 lg:w-40percent">*/}
        {/*                  <div className="carousel-item-inner relative w-full h-220 bg-transparent border-1 border-white-10">*/}
        {/*                    <div className="carousel-item-content relative w-full justify-center">*/}
        {/*                      <img width="52" height="52" src="./assets/images/demo/asymmetric-9/clients/volkswagen-1.svg" alt="clients">*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </section>*/}
        {/*    <!-- End Clients Carousel  -->*/}
        {/*  </section>*/}
        {/*  <!-- End Section Dark -->*/}
        {/*  <!-- Start Blog -->*/}
        {/*  <section className="lqd-section blog pt-90 pb-60">*/}
        {/*    <div className="container">*/}
        {/*      <div className="row items-center">*/}
        {/*        <div className="col col-12 col-md-7">*/}
        {/*          <div className="flex flex-wrap items-center">*/}
        {/*            <div className="ld-fancy-heading relative sm:w-full">*/}
        {/*              <h2 className="ld-fh-element inline-block relative text-74 mr-0/25em mb-0">News</h2>*/}
        {/*            </div>*/}
        {/*            <span className="text-14 font-bold uppercase leading-1em tracking-1 text-black border-2 rounded-100 btn py-0/6em px-1em mr-10">*/}
        {/*								<span className="btn-txt" data-text="Latest news">Latest news</span>*/}
        {/*							</span>*/}
        {/*            <span className="text-14 font-bold uppercase leading-1em tracking-1 text-black rounded-100 btn btn-solid btn-custom-size btn-icon-block btn-icon-top w-35 h-35 bg-accent border-none p-0 w-35 h-35 ">*/}
        {/*								<span className="btn-icon w-1em">*/}
        {/*									<svg xmlns="http://www.w3.org/2000/svg" width="10.625" height="10.625" viewBox="0 0 10.625 10.625">*/}
        {/*										<path d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z" transform="translate(5.313 11.322)"></path>*/}
        {/*									</svg>*/}
        {/*								</span>*/}
        {/*							</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-12 col-md-5">*/}
        {/*          <div className="ld-fancy-heading relative">*/}
        {/*            <p className="ld-fh-element mb-0/5em inline-block relative">Latest news in the office. Our design services starts and ends with a best-in-class experience strategy that builds brands. </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col col-12 mt-15 mb-30">*/}
        {/*          <div className="flex flex-wrap justify-between">*/}
        {/*            <div className="ld-fancy-heading relative">*/}
        {/*              <p className="ld-fh-element mb-0/5em inline-block relative text-12 uppercase tracking-1">Latest posts</p>*/}
        {/*            </div>*/}
        {/*            <div className="ld-fancy-heading relative text-end">*/}
        {/*              <p className="ld-fh-element mb-0/5em inline-block relative text-12 uppercase tracking-1">09</p>*/}
        {/*            </div>*/}
        {/*            <div className="divider w-full pb-5">*/}
        {/*              <span className="w-full flex border-bottom border-black"></span>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div class="row -mr-10 -ml-10">*/}
        {/*        <div class="col col-12 col-md-6 col-lg-4 px-10 mb-30 flex flex-col">*/}
        {/*          <article class="lqd-lp relative lqd-lp lqd-lp-style-21 lqd-lp-style-21-alt flex flex-wrap text-start post type-post status-publish format-standard has-post-thumbnail hentry category-blog-single tag-beauty tag-travel bg-white border-1 border-black-50">*/}
        {/*            <div class="lqd-lp-img w-full relative overflow-hidden mb-1/5rem">*/}
        {/*              <figure class="lqd-overlay flex">*/}
        {/*                <img class="w-full" width="700" height="450" src="./assets/images/demo/asymmetric-9/blog/blog-img-3-700x450.jpg" alt="nvestment trend monitor">*/}
        {/*                  <div class="lqd-overlay flex items-center justify-center">*/}
        {/*                    <i class="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*                  </div>*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*            <div class="lqd-lp-contents w-full flex flex-col">*/}
        {/*              <header class="lqd-lp-header">*/}
        {/*                <div class="lqd-lp-meta flex items-center justify-between mb-1/5em">*/}
        {/*                  <time class="lqd-lp-date inline-flex items-center" datetime="2021-06-02T13:40:12+00:00">2 years ago</time>*/}
        {/*                </div>*/}
        {/*                <h2 class="lqd-lp-title mb-0/75em h5">*/}
        {/*                  <a href="#">Investment trend monitor: Top trends in 2023</a>*/}
        {/*                </h2>*/}
        {/*              </header>*/}
        {/*              <div class="lqd-lp-excerpt">*/}
        {/*                <p class="text-12 leading-16">As the complexity of buildings to increase, the field of architecture became</p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <a href="#" class="lqd-lp-overlay-link lqd-overlay flex z-2"></a>*/}
        {/*          </article>*/}
        {/*        </div>*/}
        {/*        <div class="col col-12 col-md-6 col-lg-4 px-10 mb-30 flex flex-col">*/}
        {/*          <article class="lqd-lp relative lqd-lp lqd-lp-style-21 lqd-lp-style-21-alt flex flex-wrap text-start post type-post status-publish format-standard has-post-thumbnail hentry category-blog-single tag-beauty tag-travel bg-white border-1 border-black-50">*/}
        {/*            <div class="lqd-lp-img w-full relative overflow-hidden mb-1/5rem">*/}
        {/*              <figure class="lqd-overlay flex">*/}
        {/*                <img class="w-full" width="700" height="450" src="./assets/images/demo/asymmetric-9/blog/blog-img-2-700x450.jpg" alt="Free advertising for your online business">*/}
        {/*                  <div class="lqd-overlay flex items-center justify-center">*/}
        {/*                    <i class="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*                  </div>*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*            <div class="lqd-lp-contents w-full flex flex-col">*/}
        {/*              <header class="lqd-lp-header">*/}
        {/*                <div class="lqd-lp-meta flex items-center justify-between mb-1/5em">*/}
        {/*                  <time class="lqd-lp-date inline-flex items-center" datetime="2020-09-24T06:00:29+00:00">2 years ago</time>*/}
        {/*                </div>*/}
        {/*                <h2 class="lqd-lp-title mb-0/75em h5">*/}
        {/*                  <a href="#">Free advertising for your online business</a>*/}
        {/*                </h2>*/}
        {/*              </header>*/}
        {/*              <div class="lqd-lp-excerpt">*/}
        {/*                <p class="text-12 leading-16">Since the 1980s, as the complexity of buildings began to increase, the field of </p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <a href="#" class="lqd-lp-overlay-link lqd-overlay flex z-2"></a>*/}
        {/*          </article>*/}
        {/*        </div>*/}
        {/*        <div class="col col-12 col-md-6 col-lg-4 px-10 mb-30 flex flex-col">*/}
        {/*          <article class="lqd-lp relative lqd-lp lqd-lp-style-21 lqd-lp-style-21-alt flex flex-wrap text-start post type-post status-publish format-standard has-post-thumbnail hentry category-blog-single tag-spain tag-travel bg-white border-1 border-black-50">*/}
        {/*            <div class="lqd-lp-img w-full relative overflow-hidden mb-1/5rem">*/}
        {/*              <figure class="lqd-overlay flex">*/}
        {/*                <img class="w-full" width="700" height="450" src="./assets/images/demo/asymmetric-9/blog/blog-img-1-700x450.jpg" alt="Business meeting 2023 in San Francisco">*/}
        {/*                  <div class="lqd-overlay flex items-center justify-center">*/}
        {/*                    <i class="lqd-icn-ess icon-md-arrow-forward"></i>*/}
        {/*                  </div>*/}
        {/*              </figure>*/}
        {/*            </div>*/}
        {/*            <div class="lqd-lp-contents w-full flex flex-col">*/}
        {/*              <header class="lqd-lp-header">*/}
        {/*                <div class="lqd-lp-meta flex items-center justify-between mb-1/5em">*/}
        {/*                  <time class="lqd-lp-date inline-flex items-center" datetime="2020-09-23T12:14:11+00:00">2 years ago</time>*/}
        {/*                </div>*/}
        {/*                <h2 class="lqd-lp-title mb-0/75em h5">*/}
        {/*                  <a href="#">Business meeting 2023 in San Francisco</a>*/}
        {/*                </h2>*/}
        {/*              </header>*/}
        {/*              <div class="lqd-lp-excerpt">*/}
        {/*                <p class="text-12 leading-16">Through a unique combination of engineering, construction and design disciplines and </p>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*            <a href="#" class="lqd-lp-overlay-link lqd-overlay flex z-2"></a>*/}
        {/*          </article>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </section>*/}
        {/*  <!-- End Blog -->*/}
        {/*  <!-- Start Contact -->*/}
        {/*  <section class="lqd-section contact pt-60 pb-110" id="contact">*/}
        {/*    <div class="container">*/}
        {/*      <div class="row items-start">*/}
        {/*        <div class="w-45percent sm:w-full module-content">*/}
        {/*          <div class="ld-fancy-heading relative">*/}
        {/*            <h4 class="ld-fh-element inline-block relative mb-1/5em">Looking for collaboration? Send an email to info@liquid-themes.com.</h4>*/}
        {/*          </div>*/}
        {/*          <div class="flex justify-start items-center">*/}
        {/*            <a href="#contact-modal" class="button btn text-14 font-bold uppercase leading-1em tracking-1 text-black border-2 rounded-100 btn py-0/6em px-1em mr-10 hover:bg-black hover:text-white" data-lity="#contact-modal">*/}
        {/*              <span class="btn-txt" data-text="Send a message">Send a message</span>*/}
        {/*            </a>*/}
        {/*            <a href="#" class="text-14 font-bold uppercase leading-1em tracking-1 text-black rounded-100 btn btn-solid btn-custom-size btn-icon-block btn-icon-top w-35 h-35 bg-accent mr-10 border-none p-0 w-35 h-35 " target="_blank" rel="nofollow">*/}
        {/*								<span class="btn-icon w-1em">*/}
        {/*									<svg xmlns="http://www.w3.org/2000/svg" width="10.625" height="10.625" viewBox="0 0 10.625 10.625">*/}
        {/*										<path d="M-1.76-11.322H5.313V-4.25H3.885V-8.932L-4.316-.7l-1-1,8.2-8.234H-1.76Z" transform="translate(5.313 11.322)"></path>*/}
        {/*									</svg>*/}
        {/*								</span>*/}
        {/*            </a>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div class="w-50percent sm:w-full">*/}
        {/*          <div class="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-button-block lqd-contact-form-button-circle">*/}
        {/*            <div role="form">*/}
        {/*              <div class="screen-reader-response">*/}
        {/*                <p role="status" aria-live="polite" aria-atomic="true"></p>*/}
        {/*              </div>*/}
        {/*              <form action="./assets/php/mailer.php" method="post" class="lqd-cf-form" novalidate="novalidate" data-status="init">*/}
        {/*                <p>*/}
        {/*										<span class="lqd-form-control-wrap" data-name="text">*/}
        {/*											<input type="text" name="name" value="" size="40" class="lqd-cf-form-control text-15 border-black-50" aria-required="true" aria-invalid="false" placeholder="Your name">*/}
        {/*										</span>*/}
        {/*                  <span class="lqd-form-control-wrap" data-name="email">*/}
        {/*											<input type="email" name="email" value="" size="40" class="lqd-cf-form-control text-15 border-black-50" aria-required="true" aria-invalid="false" placeholder="Email address">*/}
        {/*										</span>*/}
        {/*                  <span class="lqd-form-control-wrap text-15 border-bottom border-black-20" data-name="your-subject2">*/}
        {/*											<select name="your-subject2" class="wpcf7-form-control" aria-required="true" aria-invalid="false">*/}
        {/*												<option value="Your budget">budget</option>*/}
        {/*												<option value="&lt; 1000">&lt; 1000</option>*/}
        {/*												<option value="&lt; 2000">&lt; 2000</option>*/}
        {/*												<option value="&lt; 3000">&lt; 3000</option>*/}
        {/*											</select>*/}
        {/*										</span>*/}
        {/*                  <span class="lqd-form-control-wrap" data-name="textarea">*/}
        {/*											<textarea name="textarea" cols="10" rows="5" class="lqd-cf-form-control text-15 border-black-50" aria-required="true" aria-invalid="false" placeholder="Your message"></textarea>*/}
        {/*										</span>*/}
        {/*                  <span class="lqd-form-control-wrap border-black-50" data-name="acceptance">*/}
        {/*											<span class="lqd-cf-form-control lqd-cf-acceptance optional">*/}
        {/*												<span class="lqd-cf-list-item">*/}
        {/*													<label>*/}
        {/*														<input type="checkbox" name="acceptance" value="1" aria-invalid="false">*/}
        {/*														<span class="lqd-cf-list-item-label">I am bound by the terms of the Service I accept Privacy Policy</span>*/}
        {/*													</label>*/}
        {/*												</span>*/}
        {/*											</span>*/}
        {/*										</span>*/}
        {/*                  <input type="submit" value="Send message" class="lqd-cf-form-control has-spinner bg-transparent border-black text-14 font-bold uppercase leading-1em tracking-1 hover:text-white hover:bg-black">*/}
        {/*                </p>*/}
        {/*              </form>*/}
        {/*              <div class="lqd-cf-response-output"></div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div class="col col-m-d-1 xs:hidden sm:hidden"></div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </section>*/}
        {/*  <!-- End Contact -->*/}
      </div>
    </main>
  )
}
