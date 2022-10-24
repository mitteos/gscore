import React, {useEffect} from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { Checkout, LoginForm, ProgressBar, RegisterForm } from "components/Authorization"
import { NextPage } from "next"
import { useAppSelector } from "hooks/redux"
import { useRouter } from "next/router"

const progressItems = [
	{id: 1, title: "Create account", query: "sign-up"},
	{id: 2, title: "Log in", query: "sign-in"},
	{id: 3, title: "Checkout", query: "checkout"},
]

const Auth: NextPage = () => {

	const {user} = useAppSelector(state => state.user)
	const router = useRouter()

	useEffect(() => {
		router.push({
			pathname: "/auth",
			query: {
				step: user?.id ? "checkout" : "sign-up",
				...router.query
			}
		})
	}, [user])
	
	return (
		<MainLayout>
			<HeadComponent title="Gscore | Authorize"/>
			<Container>
				<ProgressBar progressItems={progressItems} />
				{router.query.step === "sign-up" && <RegisterForm />}
				{router.query.step === "sign-in" && <LoginForm />}
				{router.query.step === "checkout" && <Checkout />}
			</Container>
		</MainLayout>
	)
}

export default Auth

const Container = styled.div`
	max-width: 620px;
	width: 43%;
	margin: 0 auto;
  @media (max-width: 1100px) {
    max-width: 100%;
		width: 70%;
  }
  @media (max-width: 700px) {
    width: 85%;
  }
`