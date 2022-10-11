import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { SubmitHandler, useForm } from "react-hook-form"
import React, { useState } from "react"
import { Button, Input } from "components/UI"
import {NextPage} from "next";

interface FormInputs {
	currentPassword: string;
	newPassword: string;
}

export const ChangePassword: NextPage = () => {
	
	const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	const changePassword: SubmitHandler<FormInputs> = (data) => {
		setIsLoading(true)
		setTimeout(() => {
			alert(data)
			setIsLoading(false)
		}, 3000)
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
				/>
				<Input
					placeholder="New Password"
					required={true}
					register={register}
					name="newPassword"
					errors={errors.newPassword}
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