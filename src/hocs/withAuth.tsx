import { NextPage } from "next"
import { useEffect } from "react"
import { useAppSelector } from "hooks/redux"
import { useRouter } from "next/router"

export const withAuth = (Component: NextPage) => {
	const AuthenticatedComponent = () => {

		const {user} = useAppSelector(state => state.user)
		const router = useRouter()

		useEffect(() => {
			if(!user?.id) {
				router.push("/auth")
			}
		}, [user])

		return <Component />
	}
	return AuthenticatedComponent
}