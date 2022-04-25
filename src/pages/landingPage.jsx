import Navbar from './../components/Navbar';
import Header from '../components/Header';
import Features from '../components/Features';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
function LandingPage() {
	return (
		<>
			{/* HEADER */}
			<section className='header border-b-8 border-[#222]'>
				<div className='gradient absolute right-0 left-0 top-0 bottom-0' />
				<Navbar
					button={{ text: 'Sign In', navigate: '/home' }}
					lang={true}></Navbar>
				<Header />
			</section>
			<Features />
			<Faqs />
			<Footer />
		</>
	);
}

export default LandingPage;
