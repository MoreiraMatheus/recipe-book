import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
	position: relative;
	width: 250px;
	height: 375px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND.RECIPECARD};
	animation: 0.7s ${CardAppears} ease-out;
	overflow: hidden;
	border-radius: 8px;

	&:hover {
		div#BackInfo {
			transition: all 0.3s ease-out;
			top: 35%;
		}
	}

	mark {
		background-color: rgba(0, 0, 0, 0);
		color: ${({ theme }) => theme.COLORS.TEXT.PRIMARYTITLE};
		font-weight: 600;
	}

	> img {
		width: 100%;
		height: 35%;
	}

	> div#MainWrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 65%;
		width: 100%;
	}

	> div#BackInfo {
		height: 65%;
		width: 100%;
		padding-top: 32px;
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND.RECIPECARD};
		position: absolute;
		top: 100%;
		transition: all 0.3s ease-out;
		display: flex;
		flex-direction: column;
		align-items: center;

		span{
			font-weight: 600;
			margin: 16px 0;
		}

		button {
			background-color: ${({ theme }) => theme.COLORS.BACKGROUND.BUTTON};
			color: ${({ theme }) => theme.COLORS.TEXT.SECONDARYTEXT};
			border: none;
			border-radius: 16px;
			width: 60%;
			height: 13%;
			margin: 16px 0;
			cursor: pointer;
			font-size: 20px;
			font-weight: 800;
			position: absolute;
			bottom: 8px;
		}
	}
`;

export const MainInformations = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		text-align: center;
		font-weight: 600;
	}

	span {
		text-align: center;
	}
`;

export const StarWrapper = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 30px;
		height: 30px;
	}

	span {
		margin-left: 8px;
		font-size: 1.2em;
	}
`;
