import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		TITLE: string;

		COLORS: {
			TEXT: {
				DEFAULT: string;
				PRIMARYTEXT: string;
				SECONDARYTEXT: string;
				PRIMARYTITLE: string;
			};
			BACKGROUND: {
				HEADER: string;
				BUTTON: string;
			};
		};
		FONTS: {
			TITLE: string;
			TEXT: string;
		};
	}
}
