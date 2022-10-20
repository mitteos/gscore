import { Button, Input } from "components/UI"
import React from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { emailPattern } from "utils/patterns"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { userAsyncActions } from "store/features/user"
import { useRouter } from "next/router"

interface RegisterFormInputs {
	username: string;
	email: string;
	password: string;
}

export const RegisterForm: React.FC = () => {
	
	const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormInputs>()
	const {isLoading} = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const {push} = useRouter()

	const createAccount: SubmitHandler<RegisterFormInputs> = (formFields) => {
		const {username, password, email} = formFields
		dispatch(userAsyncActions.register({username, password, email}))
			.then((res) => {
				if(res.meta.requestStatus === "fulfilled") {
					push({
						pathname: "/auth",
						query: {
							step: "sign-in"
						}
					})
				}
			})
	}
	const goToLogin = () => {
		push({
			pathname: "/auth",
			query: {
				step: "sign-in"
			}
		})
	}
	
	return (
		<>
			<Title>Create account</Title>
			<Subtitle>You need to enter your name and email. We will send you a temporary password by email</Subtitle>
			<CreateAccountForm onSubmit={handleSubmit(createAccount)}>
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
				<AdditionButton onClick={goToLogin}>Go to the next step</AdditionButton>
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