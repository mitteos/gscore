import "styles/normalize.css"
import "styles/fonts.css"
import "styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { persistor, store } from "store/store"
import { PersistGate } from "redux-persist/integration/react"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
}

export default MyApp
