import { ReactComponent as Logo } from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ position, button, lang, ...restProps }) => {
	const navigate = useNavigate();
	position = position ? position : 'relative';
	const classes =
		'flex w-full justify-between items-center bg-transparent px-4 py-4 z-10 sm:px-[45px] sm:py-5 ' +
		position;

	return (
		<nav className={classes}>
			<Logo fill='red' width={90} className='sm:w-[110px] lg:w-[120px]' />
			<div className='text-[0.6rem]'>
				{lang && (
					<label htmlFor='lang' className='mr-2'>
						<select
							id='lang'
							className='w-24 px-1 py-[2px] bg-transparent border text-white rounded-sm focus:outline-none active:outline-none sm:py-1 sm:px-4'>
							<option className='bg-gray-500' value='english'>
								English
							</option>
							<option className='bg-gray-500' value='english'>
								Indonesia
							</option>
						</select>
					</label>
				)}
				{button && (
					<button
						className='bg-primary text-white  px-2 py-[2px] rounded-sm sm:py-1 sm:px-4'
						onClick={() => navigate(button.navigate)}>
						{button.text}
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
