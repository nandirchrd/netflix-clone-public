import { MdNavigateNext as Next } from 'react-icons/md';
import { useEffect } from 'react';

const Faqs = () => {
	useEffect(() => {
		const faqs = [...document.getElementById('faqs').children];
		let toggle = true;
		let prevFaq = '';
		faqs.map((faq) => {
			faq.addEventListener('click', () => {
				faqs.map((faq) => faq.lastChild.classList.add('hidden'));

				if (prevFaq === faq) {
					toggle
						? faq.lastChild.classList.remove('hidden')
						: faq.lastChild.classList.add('hidden');
					toggle = !toggle;
					return;
				}
				prevFaq = faq;
				faq.lastChild.classList.remove('hidden');
			});
		});
	}, []);
	return (
		<section className='faqs bg-black py-8 border-b-8 border-[#222] md:py-12'>
			<div className='container max-w-lg mx-auto'>
				<h1 className='text-lg font-bold text-center py-2 md:text-3xl md:mb-5'>
					Frequently Asked Questions
				</h1>
				<div
					id='faqs'
					className='flex flex-col gap-1 bg max-w-lg
			 mx-auto'>
					<div>
						<div className='flex justify-between bg-[#303030] text-xs text-left py-2 px-4 cursor-pointer md:py-3 md:px-5 md:text-lg'>
							<span>What is Netflix?</span>
							<span>+</span>
						</div>
						<div className='hidden bg-[#303030] mt-0.5 text-xs text-left py-2 px-4'>
							<p className='mb-4'>
								Netflix is a streaming service that offers a
								wide variety of award-winning TV shows, movies,
								anime, documentaries, and more on thousands of
								internet-connected devices.
							</p>
							<p>
								You can watch as much as you want, whenever you
								want without a single commercial – all for one
								low monthly price. There's always something new
								to discover and new TV shows and movies are
								added every week!
							</p>
						</div>
					</div>
					{/*  */}
					<div>
						<div className='flex justify-between bg-[#303030] text-xs text-left py-2 px-4 cursor-pointer md:py-3 md:px-5 md:text-lg'>
							<span>How does Netflix cost?</span>
							<span>+</span>
						</div>
						<div className='hidden bg-[#303030] mt-0.5 text-xs text-left py-2 px-4'>
							<p>
								Watch Netflix on your smartphone, tablet, Smart
								TV, laptop, or streaming device, all for one
								fixed monthly fee. Plans range from IDR54,000 to
								IDR186,000 a month. No extra costs, no
								contracts.
							</p>
						</div>
					</div>
					{/*  */}
					<div>
						<div className='flex justify-between bg-[#303030] text-xs text-left py-2 px-4 cursor-pointer md:py-3 md:px-5 md:text-lg'>
							<span>Where can I watch on Netflix?</span>
							<span>+</span>
						</div>
						<div className='hidden bg-[#303030] mt-0.5 text-xs text-left py-2 px-4'>
							<p className='mb-4'>
								Watch anywhere, anytime. Sign in with your
								Netflix account to watch instantly on the web at
								netflix.com from your personal computer or on
								any internet-connected device that offers the
								Netflix app, including smart TVs, smartphones,
								tablets, streaming media players and game
								consoles
							</p>
							<p>
								You can also download your favorite shows with
								the iOS, Android, or Windows 10 app. Use
								downloads to watch while you're on the go and
								without an internet connection. Take Netflix
								with you anywhere.
							</p>
						</div>
					</div>
					{/*  */}
					<div>
						<div className='flex justify-between bg-[#303030] text-xs text-left py-2 px-4 cursor-pointer md:py-3 md:px-5 md:text-lg'>
							<span>How do I cancel?</span>
							<span>+</span>
						</div>
						<div className='hidden bg-[#303030] mt-0.5 text-xs text-left py-2 px-4'>
							<p>
								Netflix is flexible. There are no pesky
								contracts and no commitments. You can easily
								cancel your account online in two clicks. There
								are no cancellation fees – start or stop your
								account anytime.
							</p>
						</div>
					</div>
					{/*  */}
					<div>
						<div className='flex justify-between bg-[#303030] text-xs text-left py-2 px-4 cursor-pointer md:py-3 md:px-5 md:text-lg'>
							<span>What can I watch on Netflix?</span>
							<span>+</span>
						</div>
						<div className='hidden bg-[#303030] mt-0.5 text-xs text-left py-2 px-4'>
							<p>
								Netflix has an extensive library of feature
								films, documentaries, TV shows, anime,
								award-winning Netflix originals, and more. Watch
								as much as you want, anytime you want.
							</p>
						</div>
					</div>
					{/*  */}
					<div>
						<div className='flex justify-between bg-[#303030] text-xs text-left py-2 px-4 cursor-pointer md:py-3 md:px-5 md:text-lg'>
							<span>Is Netflix good for kids?</span>
							<span>+</span>
						</div>
						<div className='hidden bg-[#303030] mt-0.5 text-xs text-left py-2 px-4'>
							<p className='mb-4'>
								Netflix is a streaming service that offers a
								wide variety of award-winning TV shows, movies,
								anime, documentaries, and more on thousands of
								internet-connected devices.
							</p>
							<p>
								You can watch as much as you want, whenever you
								want without a single commercial – all for one
								low monthly price. There's always something new
								to discover and new TV shows and movies are
								added every week!
							</p>
						</div>
					</div>
				</div>
				<div>
					<p className='mt-4 text-xs mx-auto max-w-[14rem] text-center leading-3 md:max-w-[25rem] md:mb-3'>
						Ready to watch? Enter your email to create or restart
						your membership.
					</p>
					<form className='w-full mt-2'>
						<label
							className='flex flex-col items-center gap-2 md:flex-row md:gap-0 md:items-stretch'
							htmlFor='email'>
							<input
								className='text-xs block w-full px-1 py-2 rounded-[1px]'
								type='email'
								name='email'
								placeholder='Email address'
								id='email'
								required
							/>
							<div
								type='submit'
								className='w-2/6 flex items-center justify-center bg-primary text-[0.7rem] py-1 px-2 rounded-sm md:w-1/2'>
								Get Started{' '}
								<Next
									color='white'
									size={20}
									className='inline'
								/>
							</div>
						</label>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
