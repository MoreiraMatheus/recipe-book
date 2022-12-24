import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		TITLE: string;

		COLORS: {
			TEXT: {
				DEFAULT: string;
			};
			BACKGROUND: {
				HEADER: string;
				BUTTON: string;
			};
		};
	}
}
