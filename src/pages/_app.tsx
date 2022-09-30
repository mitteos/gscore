import "styles/normalize.css"
import "styles/fonts.css"
import "styles/globals.css"
import type { AppProps } from "next/app"
import { LayoutWrapper } from "components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LayoutWrapper>
			<Component {...pageProps} />
		</LayoutWrapper>
	)
}

export default MyApp
