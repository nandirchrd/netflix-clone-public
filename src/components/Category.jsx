import propTypes from 'prop-types';
const Category = ({ children, title, ...restProps }) => {
	return (
		<div className='py-4'>
			<h1 className='text-sm font-medium'>{title}</h1>
			{children}
		</div>
	);
};
Category.propTypes = {
	title: propTypes.string.isRequired,
};
export default Category;
