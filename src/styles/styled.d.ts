import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		TITLE: string;

		TEXT: {};
		BACKGROUND: {
			HEADER: string;
		};
	}
}
