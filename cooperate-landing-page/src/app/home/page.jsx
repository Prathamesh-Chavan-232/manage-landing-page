import React from "react";
import Image from "next/image";

const page = () => {
	return (
		<div>
			<div className="navbar">
				<div className="container">
					<a className="logo" href="#">
						Hectec<span>Solutions</span>
					</a>
					{/* 
					<Image
						id="mobile-cta"
						className="mobile-menu"
						src="images/menu.svg"
						alt="Open Navigation"
					/> */}

					<nav>
						{/* <Image
							id="mobile-exit"
							className="mobile-menu-exit"
							src="images/exit.svg"
							alt="Close Navigation"
						/> */}

						<ul className="primary-nav">
							<li className="current">
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Features</a>
							</li>
							<li>
								<a href="#">Achievements</a>
							</li>
							<li>
								<a href="#">Future Scope</a>
							</li>
						</ul>

						<ul className="secondary-nav">
							<li>
								<a href="#">Contact us</a>
							</li>
							<li className="go-premium-cta">
								<a href="#">Careers</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<section className="hero">
				<div className="container">
					<div className="left-col">
						<p className="subhead">{"It's Nitty &amp; Gritty"}</p>
						<h1>
							{
								"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iste."
							}
						</h1>
						<div></div>
						<div className="hero-cta">
							<a href="#" className="primary-cta">
								Try for free
							</a>
							<a href="#" className="watch-video-cta">
								{/* <Image
									src="https://assets.codepen.io/2621168/watch.svg"
									alt="Watch a video"
									fill="true"
								/> */}
								Watch a video
							</a>
						</div>
					</div>
					{/* 
					<Image
						src="https://assets.codepen.io/2621168/illustration.svg"
						className="hero-Image"
						alt="Illustration"
						fill="true"
					/> */}
				</div>
			</section>

			<section className="features-section">
				<div className="container">
					<ul className="features-list">
						<li>Lorem ipsum dolor sit amet consectetur.</li>
						<li>SLorem ipsum dolor sit amet consectetur.</li>
						<li>Lorem ipsum dolor sit amet consectetur.</li>
						<li>Lorem ipsum dolor sit amet consectetur.</li>
						<li>Lorem ipsum dolor sit amet consectetur.</li>
						<li>Lorem ipsum dolor sit amet consectetur.</li>
					</ul>

					{/* <Image
						src="https://assets.codepen.io/2621168/holding-phone.jpg"
						alt="Man holding phone"
						fill="true"
					/> */}
				</div>
			</section>

			<section className="testimonials-section">
				<div className="container">
					<ul>
						<li>
							{/* <Image
								src="https://assets.codepen.io/2621168/person.jpg"
								alt="Person"
							/> */}

							<blockquote>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
							</blockquote>
							<cite>- Jane Doe</cite>
						</li>
						<li>
							{/* <Image
								src="https://assets.codepen.io/2621168/person.jpg"
								alt="Person"
							/> */}

							<blockquote>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
							</blockquote>
							<cite>- Jane Doe</cite>
						</li>
						<li>
							{/* <Image
								src="https://assets.codepen.io/2621168/person.jpg"
								alt="Person"
							/> */}

							<blockquote>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
							</blockquote>
							<cite>- Jane Doe</cite>
						</li>
					</ul>
				</div>
			</section>

			<section className="contact-section">
				<div className="container">
					<div className="contact-left">
						<h2>Contact</h2>

						<form action="">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" name="name" />

							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="10"
							></textarea>

							<input
								type="submit"
								className="send-message-cta"
								value="Send message"
							/>
						</form>
					</div>
					<div className="contact-right">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209796322542!3d34.10028430183922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc35fbd217ef%3A0xcf1ef9352700d95c!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1611702818717!5m2!1sen!2sus"
							width="600"
							height="450"
							frameBorder="0"
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"
						></iframe>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
