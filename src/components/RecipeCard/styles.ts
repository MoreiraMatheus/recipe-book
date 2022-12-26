import styled, { keyframes } from 'styled-components';

export interface ContainerProps {
	image: string;
}

const CardAppears = keyframes`
  from{
    opacity: 0;
    transform: translateX(-100%);
  }
  to{
    left: 0;
    transform: translateX(0);
  }
`;

export const Container = styled.div<ContainerProps>`
	width: 250px;
	height: 375px;
	flex-shrink: 0;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND.RECIPECARD};
	border-radius: 8px;
	animation: 0.7s ${CardAppears} ease-out;
	overflow: hidden;

	> section {
		width: 100%;
		height: 35%;
		background-color: yellow;
		background-image: url(${({image})=>image});
		background-position: center;
		background-size: contain;
	}
`;

export const RecipeInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	/* height: 100%; */

	h1 {
		text-align: center;
		font-weight: 600;
		margin-top: 8px;
	}

	mark {
		background-color: rgba(0, 0, 0, 0);
		color: ${({ theme }) => theme.COLORS.TEXT.PRIMARYTITLE};
		font-weight: 600;
	}
`;
