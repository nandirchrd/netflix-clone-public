import TV from '../assets/tv.png';
import Mobile from '../assets/mobile.jpg';
import Device from '../assets/device.png';
import Kids from '../assets/kids.png';
import Vikings from '../assets/vikings.gif';
import Thumb from '../assets/boxshot.png';
import Download from '../assets/download-icon.gif';
import Animation from '../assets/animation.gif';

const Features = () => {
	return (
		<section className='features'>
			<div className='border-b-8 border-[#222]'>
				<div className='container max-w-3xl mx-auto flex flex-col items-center px-5 py-8 sm:px-7 lg:flex-row'>
					<div className='z-10 lg:w-2/3'>
						<h1 className='text-lg font-bold text-center sm:text-2xl sm:mb-2 lg:text-4xl lg:text-left'>
							Enjoy on your TV.
						</h1>
						<h3 className='text-xs font-light text-center sm:text-sm lg:text-left lg:text-base lg:max-w-sm'>
							Watch on Smart TVs, Playstation, Xbox, Chromecast,
							Apple TV, Blu-ray players, and more.
						</h3>
					</div>
					<div className='relative -mt-8 overflow-hidden'>
						<img
							className='absolute top-8 md:left-10 md:top-14 lg:left-0 lg:top-8'
							src={Vikings}
							alt='Ragnar Lothbrok'
						/>
						<img className='relative' src={TV} alt='TV' />
					</div>
				</div>
			</div>

			<div className='border-b-8 border-[#222]'>
				<div className='container max-w-3xl mx-auto flex flex-col items-center px-5 py-8 sm:px-7 lg:flex-row'>
					<div className='z-10 lg:w-2/3 lg:order-1'>
						<h1 className='text-lg font-bold text-center sm:text-2xl sm:mb-2 lg:text-4xl lg:text-left'>
							Download your shows to watch offline.
						</h1>
						<h3 className='text-xs font-light text-center sm:text-sm lg:text-left lg:text-base lg:max-w-sm'>
							Save your favorites easily and always have something
							to watch.
						</h3>
					</div>
					<div className='relative -mt-8 overflow-hidden'>
						<div className='bg-black items-center flex border-2 border-[#222] gap-2 p-2 w-fit absolute bottom-5 left-[50%] -translate-x-1/2 rounded-lg'>
							<img className='max-h-10' src={Thumb} alt='thumb' />
							<h2 className='font-bold text-xs min-w-[8rem]'>
								Downloading...
							</h2>
							<img
								className='max-w-[2rem]'
								src={Download}
								alt='icon'
							/>
						</div>
						<img src={Mobile} alt='TV' />
					</div>
				</div>
			</div>

			<div className='border-b-8 border-[#222]'>
				<div className='container max-w-3xl mx-auto flex flex-col items-center px-5 py-8 sm:px-7 lg:flex-row'>
					<div className='z-10 lg:w-2/3'>
						<h1 className='text-lg font-bold text-center sm:text-2xl sm:mb-2 lg:text-4xl lg:text-left'>
							Watch everywhere.
						</h1>
						<h3 className='text-xs font-light text-center sm:text-sm lg:text-left lg:text-base lg:max-w-sm'>
							Stream unlimited movies and TV shows on your phone,
							tablet, laptop, and TV.
						</h3>
					</div>

					<div className='relative overflow-hidden'>
						<img
							className='absolute px-[4.2rem] pt-8 sm:px-20 md:px-18 md:pt-9 lg:pt-5 lg:px-16'
							src={Animation}
							alt="Netflix's logo"
						/>
						<img src={Device} alt='TV' className='relative' />
					</div>
				</div>
			</div>
			<div className='border-b-8 border-[#222]'>
				<div className='container max-w-3xl mx-auto flex flex-col items-center px-5 py-8 sm:px-7 lg:flex-row'>
					<div className='z-10 lg:w-2/3 lg:order-1'>
						<h1 className='text-lg font-bold text-center sm:text-2xl sm:mb-2 lg:text-4xl lg:text-left'>
							Create profiles for kids.
						</h1>
						<h3 className='text-xs font-light text-center sm:text-sm lg:text-left lg:text-base lg:max-w-sm'>
							Send kids on adventures with their favorite
							characters in a space made just for them—free with
							your membership.
						</h3>
					</div>
					<div className='relative overflow-hidden'>
						<img src={Kids} alt='TV' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
