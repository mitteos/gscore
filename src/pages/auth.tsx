import React, {useEffect} from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { Checkout, LoginForm, ProgressBar, RegisterForm } from "components/Authorization"
import { NextPage } from "next"
import {useAppDispatch, useAppSelector} from "hooks/redux"
import {userActions} from "../store/features/user";

const Auth: NextPage = () => {

	const {authStep, user} = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if(!user?.id) {
			dispatch(userActions.setStep(1))
		}
	}, [])
	
	return (
		<MainLayout>
			<HeadComponent title="Gscore | Authorize"/>
			<Container>
				<ProgressBar step={authStep}/>
				{authStep === 1 && <RegisterForm />}
				{authStep === 2 && <LoginForm />}
				{authStep === 3 && <Checkout />}
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