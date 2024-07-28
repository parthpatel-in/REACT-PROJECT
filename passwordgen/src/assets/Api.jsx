import React,
{
	useState,
	useEffect
} from 'react';
import axios from 'axios';

function CombinedExample() {
	const [data, setData] = useState(null);
	const [timer, setTimer] = useState(0);

	// Fetching data when the component mounts
	useEffect(() => {
		axios.get(
'https://fakestoreapi.com/products'
		)
			.then(response => setData(response.data))
			.catch(error =>
				console.error('Error fetching data:', error));
	}, []);
	/* 
		Empty dependency array means this effect 
		runs only once, when the component mounts
	*/

	// Subscribing to keydown event
	useEffect(() => {
		const handleKeyPress = (event) => {
			console.log('Key pressed:', event.key);
		};

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	// Changing the title of the page when the component mounts
	useEffect(() => {
		document.title = 'New Page Title';
	}, []);

	// Clean-up for timer
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimer(prevTimer => prevTimer + 1);
		}, 1000);

		return () => {
			// Clean up the interval when the component unmounts
			clearInterval(intervalId);
		};
	}, []);

	return (

		<div>
			<div>
				<p>Fetched Data:</p>
				<p>Timer: {timer}</p>
				{data ? (
					<ul>
						{
							data.map(product => (
								<li key={product.id}>
									<p>{product.title}</p>
									<p>Price: {product.price}</p>
									<p>
										Description:
										{product.description}
									</p>
								</li>
							))
						}
					</ul>
				) : (
					<p>Loading...</p>
				)}
			</div>

		</div>
	);

}

export default CombinedExample;
