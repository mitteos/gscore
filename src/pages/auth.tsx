import React, {useEffect, useState} from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { Checkout, LoginForm, ProgressBar, RegisterForm } from "components/Authorization"
import { NextPage } from "next"
import { useAppSelector } from "hooks/redux"
import { userSelectors } from "store/features/user"

const Auth: NextPage = () => {
	
	const [step, setStep] = useState<number>(1)
	const username = useAppSelector(userSelectors.getUsername)
	useEffect(() => {
		username ? setStep(3) : setStep(1)
	}, [username])
	
	return (
		<MainLayout>
			<HeadComponent title="Gscore | Authorize"/>
			<Container>
				<ProgressBar step={step}/>
				{step === 1 && <RegisterForm setStep={setStep} />}
				{step === 2 && <LoginForm setStep={setStep} />}
				{step === 3 && <Checkout />}
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