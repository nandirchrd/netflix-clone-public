import { useEffect } from 'react';

const Movies = ({ children, ...restProps }) => {
	useEffect(() => {
		var items = document.querySelectorAll('.movies');
		items.forEach((item) =>
			item.addEventListener('wheel', (evt) => {
				evt.preventDefault();
				item.scrollLeft += evt.deltaY;
			})
		);
	}, []);
	return (
		<div className='movies flex gap-2 overflow-x-auto max-h-[10rem]'>
			{children}
		</div>
	);
};

export default Movies;
