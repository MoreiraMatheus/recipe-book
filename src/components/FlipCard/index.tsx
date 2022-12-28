import { Card, FrontCard, BackCard, MainInformations, StarWrapper } from './styles';

import { Star } from 'phosphor-react';

export interface FlipCardProps {
	imageLink: string;
	recipeName: string;
	chefName: string;
	stars: number;
	// passar o publishedDate para UTC
	publishedDate: string;
}

export function FlipCard({
	imageLink,
	recipeName,
	chefName,
	stars,
	publishedDate,
}: FlipCardProps) {
	return (
		<Card>
			<FrontCard>
				<img
					src={imageLink}
					alt={recipeName}
				/>
				<div>
					<MainInformations>
						<h1>{recipeName}</h1>
						<span>
							chefe: <mark>{chefName}</mark>
						</span>
					</MainInformations>
					<StarWrapper>
						<Star
							color='yellow'
							weight='fill'
						/>
						<span>{stars}</span>
					</StarWrapper>
					<span>publicado em: {publishedDate}</span>
				</div>
			</FrontCard>
			<BackCard>back</BackCard>
		</Card>
	);
}
