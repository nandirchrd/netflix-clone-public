import { MdNavigateNext as Next } from 'react-icons/md';

const Header = () => {
	return (
		<div className='flex flex-col max-w-lg mx-auto px-4 gap-2 text-white -translate-y-5 justify-center items-center h-[450px] sm:h-[600px] sm:max-w-sm relative z-10'>
			<h1 className='text-lg font-bold text-center leading-5 mb-2 sm:text-3xl sm:leading-8 sm:mb-1'>
				Unlimited movies, TV shows, and more.
			</h1>
			<p className='text-xs text- mb-1 leading-3 sm:text-base'>
				Watch anywhere. Cancel anytime.
			</p>
			<p className='text-xs max-w-[12.5rem] text-center leading-2 sm:max-w-[18rem]'>
				Ready to watch? Enter your email to create or restart your
				membership.
			</p>
			<form className='w-full'>
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
					<button
						type='submit'
						className='bg-primary text-[0.7rem] py-1 px-2 rounded-sm md:w-1/2'>
						Get Started{' '}
						<Next color='white' size={20} className='inline' />
					</button>
				</label>
			</form>
		</div>
	);
};

export default Header;
