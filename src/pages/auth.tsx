import React, { useState } from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { Checkout, LoginForm, ProgressBar, RegisterForm } from "components/Authorization"

const Auth = () => {
	
	const [step, setStep] = useState<1 | 2 | 3>(1)
	
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