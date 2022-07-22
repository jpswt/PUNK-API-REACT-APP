import React, { useState } from 'react';
import '../components/BeerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';

const BeerCard = (props) => {
	const heart = faHeartInactive;
	const likedHeart = faHeartActive;
	const heartInactive = <FontAwesomeIcon icon={heart} />;
	const heartActive = <FontAwesomeIcon icon={likedHeart} />;
	const { name, image_url, first_brewed, tagline, abv, description } = props;
	const [like, setLike] = useState(true);
	return (
		<li>
			<img src={image_url} alt="" />
			<div>
				<h3>
					{name}
					<span>{first_brewed}</span>
				</h3>
				<h4>{tagline}</h4>
				<p>
					<span className="abv">ABV: {abv}</span>
					{description}
				</p>
			</div>
			<p
				className="like"
				onClick={() => {
					like ? setLike(false) : setLike(true);
				}}
			>
				{like ? heartInactive : heartActive}
			</p>
		</li>
	);
};

export default BeerCard;
