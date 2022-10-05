import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button, Input } from "components/UI"
import React, { useState } from "react"

interface FormInputs {
	username: string;
	email: string;
}

export const ChangePersonalInfo = () => {
	
	const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	const changeInfo: SubmitHandler<FormInputs> = (data) => {
		setIsLoading(true)
		setTimeout(() => {
			alert(data)
			setIsLoading(false)
		}, 3000)
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
					isEmail={true}
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