import { Button, Input } from "components/UI"
import React, { useState } from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { emailPattern } from "utils/patterns";

interface RegisterFormProps {
	setStep: (e: number) => void
}
interface RegisterFormInputs {
	username: string;
	email: string;
	password: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({setStep}) => {
	
	const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormInputs>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	const createNewAccount: SubmitHandler<RegisterFormInputs> = (data) => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			alert(JSON.stringify(data))
			setStep(2)
		}, 3000)
	}
	
	return (
		<>
			<Title>Create account</Title>
			<Subtitle>You need to enter your name and email. We will send you a temporary password by email</Subtitle>
			<CreateAccountForm onSubmit={handleSubmit(createNewAccount)}>
				<Input
					placeholder="Username"
					name="username"
					register={register}
					errors={errors.username}
					required={true}
					isDisabled={isLoading}
				/>
				<Input
					placeholder="Email"
					name="email"
					register={register}
					errors={errors.email}
					required={true}
					pattern={emailPattern}
					type="email"
					isDisabled={isLoading}
				/>
				<Input
					placeholder="Password"
					name="password"
					register={register}
					errors={errors.password}
					required={true}
					type="password"
					isDisabled={isLoading}
				/>
				<FormButton variant="primary" isLoading={isLoading}>Send password</FormButton>
			</CreateAccountForm>
			<AdditionContainer>
				<AdditionText>Have an account?</AdditionText>
				<AdditionButton onClick={() => setStep(2)}>Go to the next step</AdditionButton>
			</AdditionContainer>
		</>
	)
}

const Title = styled.h1`
	${TYPOGRAPHY.specialHeading3};
	margin: 0 0 16px;
  @media (max-width: 700px) {
    ${TYPOGRAPHY.specialHeading4};
  }
`
const Subtitle = styled.h2`
	${TYPOGRAPHY.paragraphSmall};
  margin: 0 0 32px;
`
const CreateAccountForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
`
const FormButton = styled(Button)`
	margin: 24px 0 0 0;
`
const AdditionContainer = styled.div`
	display: flex;
	gap: 8px;
	margin: 48px 0 0;
`
const AdditionText = styled.p`
	${TYPOGRAPHY.single100Regular};
`
const AdditionButton = styled.p`
  ${TYPOGRAPHY.single100Regular};
	color: ${APP_COLORS.accent};
	cursor: pointer;
`