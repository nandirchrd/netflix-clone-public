import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Movie = ({ src, data, onChangeBanner, ...restProps }) => {
	return (
		<img
			src={src}
			className='h-full min-w-[6rem] cursor-pointer hover:scale-110'
			onClick={() => onChangeBanner(data)}
		/>
	);
};

Movie.propTypes = {
	src: propTypes.string.isRequired,
};
export default Movie;
