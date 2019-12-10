import React, { Component } from "react";
import "./styles.css";

export default class LandingPage extends Component {
  render() {
    return (
    <div>
      <div className="body-wrap boxed-container">
        <header className="site-header">
			<div className="header-shape header-shape-1">
				<svg width="337" height="222" viewBox="0 0 337 222" xmlns="http://www.w3.org/2000/svg">
				    <defs>
				        <linearGradient x1="50%" y1="55.434%" x2="50%" y2="0%" id="header-shape-1">
				            <stop stopColor="#E0E1FE" stopOpacity="0" offset="0%"/>
				            <stop stopColor="#E0E1FE" offset="100%"/>
				        </linearGradient>
				    </defs>
				    <path d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z" transform="translate(-1103)" fill="url(#header-shape-1)" fillRule="evenodd"/>
				</svg>
			</div>
			<div className="header-shape header-shape-2">
				<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{"overflow": "visible"}}>
				    <defs>
				        <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="header-shape-2">
				            <stop stopColor="#FF3058" offset="0%"/>
				            <stop stopColor="#FF6381" offset="100%"/>
				        </linearGradient>
				    </defs>
				    <circle className="anime-element fadeup-animation" cx="64" cy="64" r="64" fill="url(#header-shape-2)" fillRule="evenodd"/>
				</svg>
			</div>
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h1 className="m-0">
                            <a href="/">
								<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
									<title>Helios</title>
								    <defs>
								        <linearGradient x1="114.674%" y1="39.507%" x2="-52.998%" y2="39.507%" id="logo-a">
								            <stop stopColor="#8D92FA" offset="0%"/>
								            <stop stopColor="#8D92FA" stopOpacity="0" offset="100%"/>
								        </linearGradient>
								        <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="logo-b">
								            <stop stopColor="#FF3058" offset="0%"/>
								            <stop stopColor="#FF6381" offset="100%"/>
								        </linearGradient>
								        <linearGradient x1="32.716%" y1="-20.176%" x2="32.716%" y2="148.747%" id="logo-c">
								            <stop stopColor="#FF97AA" offset="0%"/>
								            <stop stopColor="#FF97AA" stopOpacity="0" offset="100%"/>
								        </linearGradient>
								    </defs>
								    <g fill="none" fillRule="evenodd">
								        <path d="M31.12 7.482C28.327 19.146 19.147 28.326 7.483 31.121A12.04 12.04 0 0 1 .88 24.518C3.674 12.854 12.854 3.674 24.518.879a12.04 12.04 0 0 1 6.603 6.603z" fill="#312ECA"/>
								        <path d="M28.874 3.922l-24.91 24.99a12.026 12.026 0 0 1-3.085-4.394C3.674 12.854 12.854 3.674 24.518.879a12.025 12.025 0 0 1 4.356 3.043z" fill="url(#logo-a)"/>
								        <g opacity=".88">
								            <path d="M31.12 24.518a12.04 12.04 0 0 1-6.602 6.603C12.854 28.326 3.674 19.146.879 7.482A12.04 12.04 0 0 1 7.482.88c11.664 2.795 20.844 11.975 23.639 23.639z" fill="url(#logo-b)"/>
								            <path d="M24.518 31.12C12.854 28.327 3.674 19.147.879 7.483A12.015 12.015 0 0 1 3.46 3.57L28.47 28.5a12.016 12.016 0 0 1-3.951 2.62z" fill="url(#logo-c)"/>
								        </g>
								    </g>
								</svg>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>

            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
						<div className="hero-copy">
	                        <h1 className="mt-0" style={{fontWeight: "600"}}>Welcome to Helios</h1>
	                        <p className="hero-paragraph">Helios is a Weather Futures Trading Platform built on top of the Ethereum blockchain.</p>
							<div className="hero-form field field-grouped">
								<div className="control">
									<a className="button button-primary button-block" href="/">Get Started</a>
								</div>
							</div>
						</div>
						<div className="hero-illustration">
							<div className="hero-shape hero-shape-1">
								<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" style={{"overflow" :"visible"}}>
									<circle className="anime-element fadeup-animation" cx="20" cy="20" r="20" fill="#FFD8CD" fillRule="evenodd"/>
								</svg>
							</div>
							<div className="hero-shape hero-shape-2">
								<svg width="88" height="88" xmlns="http://www.w3.org/2000/svg" style={{"overflow" :"visible"}}>
								    <circle className="anime-element fadeup-animation" cx="44" cy="44" r="44" fill="#FFD2DA" fillRule="evenodd"/>
								</svg>
							</div>
							<div className="hero-main-shape">
								<svg width="940" height="647" viewBox="0 0 940 647" xmlns="http://www.w3.org/2000/svg" style={{"overflow" :"visible"}}>
									<defs>
										<linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="hero-illustration-a">
											<stop stopColor="#261FB6" offset="0%"/>
											<stop stopColor="#4950F6" offset="100%"/>
										</linearGradient>
										<linearGradient x1="89.764%" y1="16.809%" x2="11.987%" y2="82.178%" id="hero-illustration-b">
											<stop stopColor="#FC8464" offset="0%"/>
											<stop stopColor="#FB5C32" offset="100%"/>
										</linearGradient>
										<linearGradient x1="100%" y1="23.096%" x2="4.439%" y2="96.586%" id="hero-illustration-c">
											<stop stopColor="#1ADAB7" offset="0%"/>
											<stop stopColor="#55EBD0" offset="100%"/>
										</linearGradient>
										<filter x="-13%" y="-150%" width="126.1%" height="400%" filterUnits="objectBoundingBox" id="hero-illustration-d">
											<feGaussianBlur stdDeviation="32" in="SourceGraphic"/>
										</filter>
										<linearGradient x1="0%" y1="100%" x2="46.694%" y2="42.915%" id="hero-illustration-f">
											<stop stopColor="#EEF1FA" offset="0%"/>
											<stop stopColor="#FFF" offset="100%"/>
										</linearGradient>
										<rect id="hero-illustration-e" width="800" height="450" rx="4"/>
										<linearGradient x1="100%" y1="-12.816%" x2="0%" y2="-12.816%" id="hero-illustration-g">
											<stop stopColor="#D2DAF0" stopOpacity="0" offset="0%"/>
											<stop stopColor="#D2DAF0" offset="50.045%"/>
											<stop stopColor="#D2DAF0" stopOpacity="0" offset="100%"/>
										</linearGradient>
										<linearGradient x1="116.514%" y1="-21.201%" x2="0%" y2="100%" id="hero-illustration-h">
											<stop stopColor="#55EBD0" offset="0%"/>
											<stop stopColor="#4950F6" offset="100%"/>
										</linearGradient>
										<path id="hero-illustration-j" d="M0 0h308v288H0z"/>
										<filter x="-15.6%" y="-12.5%" width="139%" height="141.7%" filterUnits="objectBoundingBox" id="hero-illustration-i">
											<feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
											<feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
											<feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
										</filter>
										<circle id="hero-illustration-k" cx="16" cy="16" r="16"/>
										<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-m">
											<stop stopColor="#C6FDF3" offset="0%"/>
											<stop stopColor="#C6FDF3" stopOpacity="0" offset="100%"/>
										</linearGradient>
										<linearGradient x1="2.875%" y1="89.028%" x2="99.412%" y2="6.885%" id="hero-illustration-n">
											<stop stopColor="#83F0DD" offset="0%"/>
											<stop stopColor="#1ADAB7" offset="50.924%"/>
											<stop stopColor="#55EBD0" offset="100%"/>
										</linearGradient>
										<linearGradient x1="50%" y1="1.569%" x2="50%" y2="97.315%" id="hero-illustration-o">
											<stop stopColor="#FF97AA" offset="0%"/>
											<stop stopColor="#FF6381" offset="100%"/>
										</linearGradient>
										<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-illustration-p">
											<stop stopColor="#FCAC96" offset="0%"/>
											<stop stopColor="#FC8464" offset="100%"/>
										</linearGradient>
										<circle id="hero-illustration-r" cx="28" cy="28" r="28"/>
										<filter x="-85.7%" y="-64.3%" width="314.3%" height="314.3%" filterUnits="objectBoundingBox" id="hero-illustration-q">
											<feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
											<feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
											<feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
										</filter>
										<circle id="hero-illustration-t" cx="36" cy="36" r="36"/>
										<filter x="-66.7%" y="-50%" width="266.7%" height="266.7%" filterUnits="objectBoundingBox" id="hero-illustration-s">
											<feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
											<feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
											<feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
										</filter>
										<circle id="hero-illustration-v" cx="28" cy="28" r="28"/>
										<filter x="-85.7%" y="-64.3%" width="314.3%" height="314.3%" filterUnits="objectBoundingBox" id="hero-illustration-u">
											<feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
											<feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
											<feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
										</filter>
										<circle id="hero-illustration-x" cx="24" cy="24" r="24"/>
										<filter x="-100%" y="-75%" width="350%" height="350%" filterUnits="objectBoundingBox" id="hero-illustration-w">
											<feOffset dx="12" dy="24" in="SourceAlpha" result="shadowOffsetOuter1"/>
											<feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
											<feColorMatrix values="0 0 0 0 0.0666666667 0 0 0 0 0.062745098 0 0 0 0 0.243137255 0 0 0 0.08 0" in="shadowBlurOuter1"/>
										</filter>
									</defs>
									<g fill="none" fillRule="evenodd">
										<path className="anime-element stroke-animation" d="M600,300 C600,465.685425 465.685425,600 300,600 C134.314575,600 1.3749042e-14,465.685425 3.60373576e-15,300 C-6.54157051e-15,134.314575 134.314575,-1.29473326e-14 300,-2.30926389e-14 C465.685425,-3.32379452e-14 600,134.314575 600,300 Z" fill="url(#hero-illustration-a)" stroke="#4950F6"/>
										<g transform="translate(435 518)">
											<circle className="anime-element fadeup-animation" fill="url(#hero-illustration-b)" cx="106" cy="32" r="32"/>
											<circle className="anime-element fadeup-animation" fill="url(#hero-illustration-c)" cx="12" cy="117" r="12"/>
										</g>
										<g className="anime-element fadeleft-animation">
                      <path fill="#FFF" d="M32 60h606v450H27z" style={{"overflow" :"visible"}}>
                      </path>

											<g transform="translate(103 75)">
												<path fillOpacity="0.05" fill="#11103E" filter="url(#hero-illustration-d)" d="M32 410h736v64H32z"/>
												<use fill="url(#hero-illustration-e)" />
											</g>
											<g transform="translate(123 87)">
												<circle fill="#D2DAF0" cx="4" cy="4" r="4"/>
												<circle fill="#D2DAF0" cx="20" cy="4" r="4"/>
												<circle fill="#D2DAF0" cx="36" cy="4" r="4"/>
												<path fillOpacity=".56" fill="#FFF" d="M736 2h24v4h-24z"/>
												<path fill="url(#hero-illustration-g)" d="M27 20h706v2H27z"/>
											</g>
											<g transform="translate(396 157)">
												<path fill="#FFF" d="M0 0h308v144H0z"/>
												<path fill="#EEF1FA" d="M28 119h252v1H28zM28 94h252v1H28zM28 69h252v1H28zM28 44h252v1H28z"/>
												<path stroke="url(#hero-illustration-h)" strokeWidth="3" d="M26 119l49.19-38.316 14.615 19.035 16.36-19.035 31.306 4.272 33.079-23.54 34.86 38.303 15.625-50.412 16.356 12.109 16.472-12.11 15.075 21.443 16.976-21.442"/>
												<rect fill="#D2DAF0" x="28" y="20" width="24" height="4" rx="2"/>
											</g>
											<g>
												<path fill="#FFF" d="M396 333h308v144H396z"/>
												<path fill="#EEF1FA" d="M424 452h252v1H424zM424 427h252v1H424zM424 402h252v1H424zM424 377h252v1H424z"/>
												<path fill="url(#hero-illustration-o)" d="M28 24h12v96H28z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-p)" d="M52 67h12v53H52z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-o)" d="M76 24h12v96H76z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-p)" d="M100 82h12v38h-12z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-o)" d="M124 45h12v75h-12z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-p)" d="M148 67h12v53h-12z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-o)" d="M172 82h12v38h-12z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-p)" d="M196 45h12v75h-12z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-o)" d="M220 67h12v53h-12z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-p)" d="M244 82h12v38h-12z" transform="translate(396 333)"/>
												<path fill="url(#hero-illustration-o)" d="M268 45h12v75h-12z" transform="translate(396 333)"/>
											</g>
										</g>
										<g className="anime-element fadeleft-animation">
											<g transform="translate(56 157)">
												<use fill="#000" filter="url(#hero-illustration-i)" />
												<use fill="#FFF" />
												<path fill="#EEF1FA" d="M0 191h308v1H0zM28 44h252v1H28z"/>
												<rect fill="#D2DAF0" x="28" y="20" width="24" height="4" rx="2"/>
												<rect fill="#ABABC9" x="28" y="216" width="64" height="4" rx="2"/>
												<rect fill="#D2DAF0" x="256" y="216" width="24" height="4" rx="2"/>
												<rect fill="#D2DAF0" x="64" y="20" width="24" height="4" rx="2"/>
												<g transform="translate(28 232)">
													<mask id="hero-illustration-l" fill="#fff">
														<use />
													</mask>
													<use fill="#ABABC9" />
													<image mask="url(#hero-illustration-l)" x="-2" width="33" height="33" />
												</g>
												<path d="M308 89.82v101.063H0v-33.728l3.038-3.799 10.783-7.894 8.687-2.646h9.246l21.198 10.54 9.852 3.251 6.608-3.25 8.644-12.005 6.87-6.388 7.892-1.512 10.906 6.066 13.895 15.802 11.188 5.944h5.692l7.314-3.28 7.19-9.37 5.879-13.65 10.774-21.657 8.34-14.026 9.243-12.336 9.594-7.043 15.407-3.881 6.362 1.497 14.939 7.765 10.531 8.166 13.17 12.338 12.362 7.52 12.756 3.746 8.366-1.542 8.96-5.366 10.183-15.377L308 89.82z" fill="url(#hero-illustration-m)"/>
												<path d="M308 84.066v8.885c-13.215 32.373-36.292 33.308-68.007 2.699-18.456-17.814-33.74-21.583-47.058-13.978-10.675 6.097-19.593 18.713-29.342 38.963-2.594 5.388-10.386 22.73-11.136 24.336-11.298 24.181-27.067 24.181-45.624.363-12.17-13.657-21.486-13.657-29.221-.248-3.596 6.232-6.872 9.923-10.352 11.627-3.677 1.8-7.4 1.412-12.305-.82-2.416-1.098-12.51-6.8-14.82-7.981a101.498 101.498 0 0 0-4.586-2.208c-11.912-5.359-23.695-.926-35.549 13.65v-4.62c11.94-13.38 24.255-17.4 36.78-11.766 1.571.707 3.13 1.46 4.72 2.273 2.416 1.235 12.425 6.889 14.697 7.922 4.167 1.895 7.013 2.192 9.744.855 2.836-1.388 5.748-4.67 9.072-10.432 8.843-15.326 20.622-15.326 34.123-.172 17.344 22.257 30.338 22.257 40.603.287.734-1.572 8.536-18.936 11.151-24.368 9.998-20.768 19.193-33.776 30.557-40.266 14.618-8.348 31.298-4.234 50.63 14.424 32.601 31.465 54.068 28.367 65.923-9.425z" fill="url(#hero-illustration-n)" fillRule="nonzero"/>
											</g>
										</g>
									</g>
								</svg>
							</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features section">
                <div className="container">
                    <div className="features-inner section-inner">
                        <div className="features-header text-center">
                            <div className="container-sm">
                                <h2 className="section-title mt-0">How It Works</h2>
                                <p className="section-paragraph"> Helios is powered by the Honeycomb marketplace, an external API source for smart contracts on the Chainlink network.</p>
                            </div>
                        </div>
						<div className="features-wrap">
							<div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon" style={{"background":"#FFD2DA"}}>
                              <h1 className="mt-2" style={{position: "absolute", marginLeft: "0.65em"}}>1</h1>
                                    </div>
                                    <h4 className="feature-title mt-3 mb-8">Long/Short Position</h4>
                                    <p className="text-sm">Just like any other derivative product, you can buy or sell weather futures. Your orders are recorded on the Futures Smart Contract.</p>
                                </div>
                            </div>
							<div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon" style={{"background":"#ffdf85"}}>
                              <h1 className="mt-2" style={{position: "absolute", marginLeft: "0.65em"}}>2</h1>
                                    </div>
                                    <h4 className="feature-title mt-3 mb-8">Fill Order</h4>
                                    <p className="text-sm">Once you place an order, it can be filled by another trader. The long and short trade amounts are then sent to an Escrow Smart Contract.</p>
                                </div>
                            </div>
							<div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon" style={{"background":"#C6FDF3"}}>
                              <h1 className="mt-2" style={{position: "absolute", marginLeft: "0.65em"}}>3</h1>
                                    </div>
                                    <h4 className="feature-title mt-3 mb-8">Square Off</h4>
                                    <p className="text-sm">
                                      Depending on the mean average temperatures received from the World Weather Online API and Aeris Weather API, 
                                      you can decide to square off your position on or before the expiry date.
                                    </p>
                                </div>
                            </div>
							<div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon" style={{"background":"#E0E1FE"}}>

                              <h1 className="mt-2" style={{position: "absolute", marginLeft: "0.65em"}}>4</h1>
                                    </div>
                                    <h4 className="feature-title mt-3 mb-8">Settlement</h4>
                                    <p className="text-sm">
                                      The settlement price for the weather futures contract is based 
                                      on the Heating Degree Days (HDD) index. It is calculated by 
                                      multiplying the HDD value by 0.003 ETH.
                                    </p>
                                </div>
                            </div>
						</div>
                    </div>
                </div>
            </section>

			
			<section className="newsletter section text-light">
                <div className="container-sm">
                    <div className="newsletter-inner section-inner">
                        <div className="newsletter-header text-center">
                            <h2 className="section-title mt-0">Start Trading Weather Futures</h2>
                            <p className="section-paragraph">Click the button below to visit the trading platform!</p>
                        </div>
                        <div className="row justify-content-center">
                            <a className="button button-primary button-block button-shadow" href="/">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>

        <footer className="site-footer">
            <div className="container">
                <div className="site-footer-inner has-top-divider">
                    <div className="brand footer-brand">
                        <a href="/">
							<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
								<title>Helios</title>
								<defs>
									<linearGradient x1="114.674%" y1="39.507%" x2="-52.998%" y2="39.507%" id="logo-footer-a">
										<stop stopColor="#8D92FA" offset="0%"/>
										<stop stopColor="#8D92FA" stopOpacity="0" offset="100%"/>
									</linearGradient>
									<linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="logo-footer-b">
										<stop stopColor="#FF3058" offset="0%"/>
										<stop stopColor="#FF6381" offset="100%"/>
									</linearGradient>
									<linearGradient x1="32.716%" y1="-20.176%" x2="32.716%" y2="148.747%" id="logo-footer-c">
										<stop stopColor="#FF97AA" offset="0%"/>
										<stop stopColor="#FF97AA" stopOpacity="0" offset="100%"/>
									</linearGradient>
								</defs>
								<g fill="none" fillRule="evenodd">
									<path d="M31.12 7.482C28.327 19.146 19.147 28.326 7.483 31.121A12.04 12.04 0 0 1 .88 24.518C3.674 12.854 12.854 3.674 24.518.879a12.04 12.04 0 0 1 6.603 6.603z" fill="#312ECA"/>
									<path d="M28.874 3.922l-24.91 24.99a12.026 12.026 0 0 1-3.085-4.394C3.674 12.854 12.854 3.674 24.518.879a12.025 12.025 0 0 1 4.356 3.043z" fill="url(#logo-footer-a)"/>
									<g opacity=".88">
										<path d="M31.12 24.518a12.04 12.04 0 0 1-6.602 6.603C12.854 28.326 3.674 19.146.879 7.482A12.04 12.04 0 0 1 7.482.88c11.664 2.795 20.844 11.975 23.639 23.639z" fill="url(#logo-footer-b)"/>
										<path d="M24.518 31.12C12.854 28.327 3.674 19.147.879 7.483A12.015 12.015 0 0 1 3.46 3.57L28.47 28.5a12.016 12.016 0 0 1-3.951 2.62z" fill="url(#logo-footer-c)"/>
									</g>
								</g>
							</svg>
                        </a>
                    </div>
                    <div>&copy; 2019 Helios, made with <span role="img" aria-label="love">❤️</span> by <a href="https://github.com/roheat">roheat</a>.</div>
                </div>
            </div>
        </footer>
    </div>
    </div>)
    }
}
