import { MdLanguage } from 'react-icons/md';

const Footer = () => {
	const items = [
		'FAQ',
		'Help Center',
		'Account',
		'Media Center',
		'Investor Relations',
		'Jobs',
		'Redeem Gift Cards',
		'Buy Gift Cards',
		'Ways to Watch',
		'Terms of Use',
		'Privacy',
		'Cookie Preferences',
		'Corporate Information',
		'Contact Us',
		'Speed Test',
		'Legal Notices',
		'Only on Netflix',
	];
	return (
		<section className='footer bg-black p-6'>
			<div className='container max-w-xl mx-auto text-[#696969]'>
				<h2 className='text-xs mb-4'>
					Questions? Call 007-803-321-2130
				</h2>
				<div className='mb-4 grid grid-cols-2 gap-2 text-[0.5em] sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
					{items.map((item, id) => (
						<span key={id} className='cursor-pointer'>
							{item}
						</span>
					))}
				</div>
				<div className='relative'>
					<MdLanguage
						size={20}
						className='absolute top-[14px] left-2'
					/>
					<select
						name='lang'
						className='mb-2 block cursor-pointer bg-transparent border border-[#696969] py-2 px-8 text-[0.6em] rounded-sm'>
						<option className='bg-black' value='english'>
							English
						</option>
						<option className='bg-black' value='indonesia'>
							Indonesia
						</option>
					</select>
				</div>
				<span className='text-[0.5em]'>Netflix Indonesia</span>
			</div>
		</section>
	);
};

export default Footer;
