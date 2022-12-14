import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { SubmitHandler, useForm } from "react-hook-form"
import React from "react"
import { Button, Input } from "components/UI"
import { NextPage } from "next"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { userAsyncActions } from "store/features/user"

interface FormInputs {
	currentPassword: string;
	newPassword: string;
}

export const ChangePassword: NextPage = () => {
	
	const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>()
	const {isLoading} = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	
	const changePassword: SubmitHandler<FormInputs> = (formFields) => {
		const {newPassword, currentPassword} = formFields
		dispatch(userAsyncActions.changePassword({newPassword, currentPassword}))
	}
	
	return (
		<>
			<Title>Change password</Title>
			<Form onSubmit={handleSubmit(changePassword)}>
				<Input
					placeholder="Current Password"
					required={true}
					register={register}
					name="currentPassword"
					errors={errors.currentPassword}
					isDisabled={isLoading}
					type="password"
				/>
				<Input
					placeholder="New Password"
					required={true}
					register={register}
					name="newPassword"
					errors={errors.newPassword}
					isDisabled={isLoading}
					type="password"
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