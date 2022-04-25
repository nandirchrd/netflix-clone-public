import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Movies from '../components/Movies';
import Movie from '../components/Movie';
import Footer from '../components/Footer';
import Jumanji from '../assets/jumanji-card.jpg';
import { request } from '../config/api';
import axios from 'axios';

function Home({ ...restProps }) {
	const [activeMovie, setActiveMovie] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [trendings, setTrendings] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [netflixOriginals, setNetflixOriginals] = useState([]);
	const [actionMovies, setActionMovies] = useState([]);
	const [comedyMovies, setComedyMovies] = useState([]);
	const [horrorMovies, setHorrorMovies] = useState([]);
	const [romanceMovies, setRomanceMovies] = useState([]);
	const [documentaryMovies, setDocumentaryMovies] = useState([]);
	const navigate = useNavigate();
	const pathImg = 'https://image.tmdb.org/t/p/original';

	const handleChangeBanner = (data) => {
		console.log(data);
		setActiveMovie(data);
	};
	useEffect(() => {
		const getMovies = async () => {
			setLoading(true);
			const data = await axios.all([
				axios(request.fetchTrendings),
				axios(request.fetchTopRated),
				axios(request.fetchNetflixOriginals),
				axios(request.fetchActionMovies),
				axios(request.fetchComedyMovies),
				axios(request.fetchHorrorMovies),
				axios(request.fetchRomanceMovies),
				axios(request.fetchDocumentaryMovies),
			]);
			console.log(data[0].data.results);

			setTrendings(data[0].data.results);
			setTopRated(data[1].data.results);
			setNetflixOriginals(data[2].data.results);
			setActionMovies(data[3].data.results);
			setComedyMovies(data[4].data.results);
			setHorrorMovies(data[5].data.results);
			setRomanceMovies(data[6].data.results);
			setDocumentaryMovies(data[7].data.results);
			setLoading(false);
		};
		getMovies();
	}, []);
	return (
		<div className='bg-black'>
			<Navbar
				position='fixed'
				button={{ text: 'Log Out', navigate: '/' }}
			/>
			<Banner movie={activeMovie} />
			<main className='px-4 sm:px-8'>
				<Category title={'NETFLIX ORIGINALS'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							netflixOriginals.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
				<Category title={'TRENDINGS'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							trendings.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
				<Category title={'TOP RATED'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							topRated.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
				<Category title={'ACTION MOVIES'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							actionMovies.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
				<Category title={'COMEDY MOVIES'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							comedyMovies.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
				<Category title={'HORROR MOVIES'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							horrorMovies.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
				<Category title={'ROMANCE MOVIES'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							romanceMovies.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
				<Category title={'DOCUMENTARY MOVIES'}>
					<Movies>
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							documentaryMovies.map((data) => (
								<Movie
									key={data.id}
									src={pathImg + data.poster_path}
									data={data}
									onChangeBanner={handleChangeBanner}
								/>
							))
						)}
					</Movies>
				</Category>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
