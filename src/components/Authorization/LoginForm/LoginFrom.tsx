import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { Button, Input } from "components/UI"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface LoginFormProps {
	setStep: (e: 1 | 2 | 3) => void
}
interface LoginInputs {
	email: string;
	password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({setStep}) => {
	
	const {register, handleSubmit, formState: {errors}} = useForm<LoginInputs>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	const login: SubmitHandler<LoginInputs> = (data) => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			alert(JSON.stringify(data))
			setStep(3)
		}, 3000)
	}
	
	return (
		<>
			<Title>Log in</Title>
			<LoginFormContainer onSubmit={handleSubmit(login)}>
				<Input
					placeholder="Email"
					required={true}
					register={register}
					name="email"
					errors={errors.email}
					type="email"
					isEmail={true}
					isDisabled={isLoading}
				/>
				<Input
					placeholder="Password"
					type="password"
					required={true}
					register={register}
					name="password"
					errors={errors.password}
					isDisabled={isLoading}
				/>
				<FormButton isLoading={isLoading} variant="primary">Log in</FormButton>
			</LoginFormContainer>
		</>
	)
}

const Title = styled.h1`
	${TYPOGRAPHY.specialHeading3};
	margin: 0 0 32px;
  @media (max-width: 700px) {
    ${TYPOGRAPHY.specialHeading4};
  }
`
const LoginFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
`
const FormButton = styled(Button)`
	margin: 24px 0 0;
`