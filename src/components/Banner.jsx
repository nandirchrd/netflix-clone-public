import GradientImg from '../assets/gradient.png';
const Banner = ({ children, movie, onTrailerPathId, ...restProps }) => {
	const bannerUrl =
		'https://a-static.besthdwallpaper.com/jumanji-welcome-to-the-jungle-wallpaper-2304x720-13538_58.jpg';
	let classes =
		'relative bg-black py-20 px-4 sm:px-8 bg-center bg-cover overflow-hidden ';
	const pathImg = 'https://image.tmdb.org/t/p/original';

	return (
		<div
			className={classes}
			style={{
				backgroundImage: movie
					? `url("${pathImg + movie.backdrop_path}")`
					: `url(${bannerUrl})`,
			}}>
			<img
				className='absolute -bottom-5 left-0 h-24 w-full'
				src={GradientImg}
			/>
			<div className='container flex flex-col items-start gap-1'>
				<h1 className='text-xl font-bold'>
					{movie ? movie.title || movie.name : 'Jumanji'}
				</h1>
				<div className='flex gap-2'>
					<button
						onClick={() => {
							onTrailerPathId(movie.id);
						}}
						className='bg-gray-700 py-1 px-4 text-xs cursor-pointer rounded-sm'>
						Play
					</button>
				</div>
				<p className='text-[0.5em] max-w-xs'>
					{movie
						? movie.overview
						: 'The crossing-o-age journey of live fairies attending Atlas a magical boarding school in the otherworld where they must learn to master their powers w...'}
				</p>
			</div>
		</div>
	);
};

export default Banner;
