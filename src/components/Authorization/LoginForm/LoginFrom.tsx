import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { Button, Input } from "components/UI"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { emailPattern } from "utils/patterns"
import {useAppDispatch, useAppSelector} from "hooks/redux"
import { userAsyncActions } from "store/features/user"

interface LoginInputs {
	email: string;
	password: string;
}

export const LoginForm: React.FC = () => {
	
	const {register, handleSubmit, formState: {errors}} = useForm<LoginInputs>()
	const dispatch = useAppDispatch()
	const {isLoading} = useAppSelector(state => state.user)
	
	const login: SubmitHandler<LoginInputs> = (formFields) => {
		const {email, password} = formFields
		dispatch(userAsyncActions.login({email, password}))
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
					pattern={emailPattern}
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