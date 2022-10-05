import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { SubmitHandler, useForm } from "react-hook-form"
import React, { useState } from "react"
import { Button, Input } from "components/UI"

interface FormInputs {
	current: string;
	new: string;
}

export const ChangePassword = () => {
	
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
					name="current"
					errors={errors.current}
					isDisabled={isLoading}
				/>
				<Input
					placeholder="New Password"
					required={true}
					register={register}
					name="new"
					errors={errors.new}
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