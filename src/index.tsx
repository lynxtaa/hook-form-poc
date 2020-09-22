import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, theme, CSSReset, DarkMode } from '@chakra-ui/core'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<DarkMode>
				<CSSReset />
				<App />
			</DarkMode>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
