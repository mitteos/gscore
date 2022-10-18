import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button, Input } from "components/UI"
import React from "react"
import { NextPage } from "next";
import { emailPattern } from "utils/patterns"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { userAsyncActions } from "store/features/user"

interface FormInputs {
	username: string;
	email: string;
}

export const ChangePersonalInfo: NextPage = () => {

	const {user: userInfo, isLoading} = useAppSelector(state => state.user)
	const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>({defaultValues: {username: userInfo?.username, email: userInfo?.email}})
	const dispatch = useAppDispatch()

	const changeInfo: SubmitHandler<FormInputs> = async (formFields) => {
		const {username, email} = formFields
		dispatch(userAsyncActions.changeInfo({email, username}))
	}
	
	return (
		<>
			<Title>Personal info</Title>
			<Form onSubmit={handleSubmit(changeInfo)}>
				<Input
					placeholder="Username"
					required={true}
					register={register}
					name="username"
					errors={errors.username}
					isDisabled={isLoading}
				/>
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
				<FormButton
					isLoading={isLoading}
					variant="primary"
				>Save</FormButton>
			</Form>
		</>
	)
}

const Title = styled.h1`
  ${TYPOGRAPHY.specialHeading4};
  margin: 0 0 24px;
	@media (max-width: 700px) {
		font-size: 20px;
	}
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
	max-width: 512px;
	width: 100%;
`
const FormButton = styled(Button)`
  width: 160px;
  margin: 24px 0 0;
`