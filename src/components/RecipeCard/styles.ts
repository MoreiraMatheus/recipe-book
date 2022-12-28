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
    div.MoreInfo{
      transition: all .3s ease-out;
      top: 35%;
    }
  }
  
  
	> img {
    width: 100%;
		height: 35%;
	}

	> div.Wrapper {
    display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 65%;
		width: 100%;
	}

	> div.MoreInfo {
    height: 65%;
		width: 100%;
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND.RECIPECARD};
		position: absolute;
		top: 100%;
    transition: all .3s ease-out;
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

		mark {
      background-color: rgba(0, 0, 0, 0);
			color: ${({ theme }) => theme.COLORS.TEXT.PRIMARYTITLE};
			font-weight: 600;
		}
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
