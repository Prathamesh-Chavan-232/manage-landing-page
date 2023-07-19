import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import illustration from "@/assets/hero.jpeg";

export default function Home() {
	return (
		<div>
			<div className="mx-auto p-6 relative">
				<div className="flex items-center justify-between container">
					<div className="pt-2">
						<Image src={logo} alt="" height={100} width={100} />
						{/* <h1 className="text-2xl font-extrabold">HECTEC</h1> */}
					</div>
					<div className="space-x-6 hidden lg:flex">
						<a href="#" className="hover:text-darkGrayishBlue">
							Products
						</a>
						<a href="#" className="hover:text-darkGrayishBlue">
							About us
						</a>
						<a href="#" className="hover:text-darkGrayishBlue">
							Careers
						</a>
						<a href="#" className="hover:text-darkGrayishBlue">
							Achievements
						</a>
						<a href="#" className="hover:text-darkGrayishBlue">
							Future Scope
						</a>
					</div>
					<a className="px-8 py-3 bg-brightRed rounded-full baseline text-white hidden hover:bg-brightRedLight lg:flex">
						Get Started
					</a>
					<button id="hamburger-menu" className="block hamburger lg:hidden">
						<span className="hamburger-top"></span>
						<span className="hamburger-middle"></span>
						<span className="hamburger-bottom"></span>
					</button>
				</div>
				{/* <div
					id="mobile-menu"
					className="py-8 mt-10 space-y-6 left-6 right-6 drop-shadow-md font-bold bg-white absolute hidden flex-col items-center self-end sm:w-auto sm:self-center"
				>
					<a href="#" className="hover:text-darkGrayishBlue">
						Pricing
					</a>
					<a href="#" className="hover:text-darkGrayishBlue">
						Products
					</a>
					<a href="#" className="hover:text-darkGrayishBlue">
						About us
					</a>
					<a href="#" className="hover:text-darkGrayishBlue">
						Careers
					</a>
					<a href="#" className="hover:text-darkGrayishBlue">
						Community
					</a>
				</div> */}
			</div>

			<section id="hero">
				<div className="container flex flex-col-reverse items-center p-6 mx-auto mt-10 space-y-0 md:flex-row">
					<div className="flex flex-col items-center mb-32 space-y-12 md:w-1/2">
						<h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
							Bring everyone together to build better products
						</h1>
						<p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
							Hectec makes it simple for software teams to plan day-to-day tasks
							while keeping the larger team goals in view
						</p>
						<div className="flex justify-center md:justify-start">
							<a className="px-8 py-3 bg-brightRed rounded-full baseline text-white hover:bg-brightRedLight">
								Get Started
							</a>
						</div>
					</div>
					<div className="md:w-1/2">
						<Image src={illustration} alt="" />
					</div>
				</div>
			</section>

			<section id="features">
				<div className="container flex flex-col mx-auto mt-10 px-4 space-y-12 md:space-y-0 md:flex-row">
					<div className="flex flex-col items-center space-y-12 md:w-1/2">
						<h2 className="max-w-md text-4xl font-bold text-center md:text-left">
							{"What's different about Hectec?"}
						</h2>
						<p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
							Hectec provides all the fucntionality your team needs, without the
							complexity. Our software is tailor-made for modern digital product
							teams
						</p>
					</div>
					<div className="flex flex-col space-y-8 md:w-1/2">
						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-brightRedVLight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white bg-brightRed rounded-full md:py-1">
										01
									</div>
									<h3 className="text-base font-bold md:mb-4 md:hidden">
										Track company-wide progress
									</h3>
								</div>
							</div>
							<div>
								<h3 className="hidden mb-4 text-lg font-bold md:flex">
									Track company-wide progress
								</h3>
								<p className="text-darkGrayishBlue">
									See how your day-to-day tasks fit into the wider vision. Go
									from tracking progress at the milestone level all the way down
									to the smallest of details. Never lose sight of the bigger
									picture, again.
								</p>
							</div>
						</div>
						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-brightRedVLight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white bg-brightRed rounded-full md:py-1">
										02
									</div>
									<h3 className="text-base font-bold md:mb-4 md:hidden">
										Advanced built-in reports
									</h3>
								</div>
							</div>
							<div>
								<h3 className="hidden mb-4 text-lg font-bold md:flex">
									Advanced built-in reports
								</h3>
								<p className="text-darkGrayishBlue">
									Set internal delivery estimates and track progress toward
									company goals. Our customizable dashboard helps you build out
									the reports you need to keep key stakeholders informed.
								</p>
							</div>
						</div>
						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-brightRedVLight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white bg-brightRed rounded-full md:py-1">
										03
									</div>
									<h3 className="text-base font-bold md:mb-4 md:hidden">
										Everything you need in one place
									</h3>
								</div>
							</div>
							<div>
								<h3 className="hidden mb-4 text-lg font-bold md:flex">
									Everything you need in one place
								</h3>
								<p className="text-darkGrayishBlue">
									Stop jumping from one service to another to cummunicate, store
									files, track tasks and share documents. Hectec offers an
									all-in-one team productivity solution
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="testimonials">
				<div className="max-w-6xl px-5 mx-auto mt-32 text-center">
					<h2 className="text-4xl font-bold text-center">
						{"What's different about Hectec?"}
					</h2>
					<div className="flex flex-col mt-24 md:flex-row md:space-x-6">
						<div className="flex flex-col items-center p-6 rounded-lg bg-veryLightGray md:w-1/3">
							{/* <Image
								src="/assets/avatar-anisha.png"
								className="w-16 -mt-14"
								alt=""
							/> */}
							<h5 className="text-lg font-bold">Anisha Li</h5>
							<p className="text-sm text-darkGrayishBlue">
								{
									"Hectec has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
								}
							</p>
						</div>
						<div className="hidden flex-col items-center p-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
							{/* <Image src="/assets/avatar-ali.png" className="w-16 -mt-14" alt="" /> */}
							<h5 className="text-lg font-bold">Ali Bravo</h5>
							<p className="text-sm text-darkGrayishBlue">
								We have been able to cancle so many subscriptions since using
								manage. There is no more cross-channel confusion and everyone is
								much more focused.
							</p>
						</div>
						<div className="hidden flex-col items-center p-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
							{/* <Image
								src="/assets/avatar-richard.png"
								className="w-16 -mt-14"
								alt=""
							/> */}
							<h5 className="text-lg font-bold">Richard Watts</h5>
							<p className="text-sm text-darkGrayishBlue">
								{
									"Hectec has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
								}
							</p>
						</div>
					</div>
					<div className="my-16">
						<a className="px-8 py-3 bg-brightRed rounded-full baseline text-white hover:bg-brightRedLight">
							Get Started
						</a>
					</div>
				</div>
			</section>
			<section id="cta" className="bg-brightRed">
				<div className="px-6 py-24 mx-auto space-y-12 container flex flex-col items-center justify-between md:py-iiiii12 md:flex-row md:space-y-0">
					<h2 className="text-5xl font-bold text-center text-white leading-tight md:text-4xl md:max-w-xl md:text-left">
						Simplify how your team works today
					</h2>
					<a className="px-8 py-3 bg-white rounded-full baseline shadow-2xl text-brightRed hover:bg-gray-300">
						Get Started
					</a>
				</div>
			</section>
			<footer id="footer" className="bg-veryDarkBlue">
				<div className="py-10 mx-auto space-y-8 container flex flex-col-reverse justify-between lg:flex-row lg:space-y-0">
					<div className="space-y-12 flex flex-col-reverse items-center justify-between lg:space-y-0 lg:flex-col lg:items-start">
						<div className="mx-auto my-6 text-center text-white lg:hidden">
							Copyright &copy; 2023, All rights reserved
						</div>
						<div>
							{/* <Image src={logo} alt="logo" className="h-8" /> */}
							<h1 className="text-2xl font-extrabold text-white">HECTEC</h1>
						</div>
						<div className="flex justify-center space-x-4">
							{/* <a href="#">
								<Image src="assets/icon-facebook.svg" alt="" className="h-8" />
							</a>
							<a href="#">
								<Image src="assets/icon-youtube.svg" alt="" className="h-8" />
							</a>
							<a href="#">
								<Image src="assets/icon-twitter.svg" alt="" className="h-8" />
							</a>
							<a href="#">
								<Image src="assets/icon-pinterest.svg" alt="" className="h-8" />
							</a>
							<a href="#">
								<Image src="assets/icon-instagram.svg" alt="" className="h-8" />
							</a> */}
						</div>
					</div>
					<div className="flex justify-around space-x-32">
						<div className="flex flex-col space-y-3 text-white">
							<a href="#" className="hover:text-brightRed">
								Home
							</a>
							<a href="#" className="hover:text-brightRed">
								Pricing
							</a>
							<a href="#" className="hover:text-brightRed">
								Products
							</a>
							<a href="#" className="hover:text-brightRed">
								About
							</a>
						</div>
						<div className="flex flex-col space-y-3 text-white">
							<a href="#" className="hover:text-brightRed">
								Careers
							</a>
							<a href="#" className="hover:text-brightRed">
								Community
							</a>
							<a href="#" className="hover:text-brightRed">
								Privacy Policy
							</a>
						</div>
					</div>

					<div className="px-4 flex flex-col justify-between">
						<form action="">
							<div className="flex space-x-3">
								<input
									type="text"
									placeholder="Updated in your inbox"
									className="flex-1 px-4 rounded-full focus:outline-none"
								/>
								<button className="px-6 py-2 text-white rounded-full bg-brightRedLight focus:outline-none">
									Go
								</button>
							</div>
						</form>
						<div className="hidden text-white lg:flex">
							Copyright &copy; 2023, All rights reserved.
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
