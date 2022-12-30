import { Container } from './styles';

interface StorysetImageProps {
	image: any;
	message: string;
	link: string;
	imageAnimate?: boolean;
	textAnimate?: boolean;
}

export function StorysetImage({ image, link, message }: StorysetImageProps) {
	return (
		<Container>
			<img
				src={image}
				alt=''
			/>
			<a
				href={link}
				target='_blank'
			>
				{message}
			</a>
		</Container>
	);
}
