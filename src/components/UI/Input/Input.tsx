import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import React from "react"
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form"
import Image from "next/image"
import { CloseAccentIcon } from "assets/svg"
import {PatternState} from "utils/patterns";

interface InputProps<T extends FieldValues> {
	type?: string;
	required?: boolean;
	placeholder: string;
	register: UseFormRegister<T>;
	name: Path<T>;
	errors: FieldError | undefined;
	minLength?: number;
	maxLength?: number;
	pattern?: PatternState;
	isDisabled?: boolean;
	className?: string;
}
interface Option {
	value: number;
	message: string;
}
interface RegisterOptions {
	required: string | boolean;
	minLength: 0 | Option | undefined;
	maxLength: 0 | Option | undefined;
	pattern: PatternState | undefined;
}

export const Input = <T extends FieldValues>({className, isDisabled ,pattern, minLength, maxLength, type = "text", placeholder, register, name, errors, required = false}: InputProps<T>) => {

	const registerOptions: RegisterOptions = {
		required: required && "Required",
		minLength: minLength && {
			value: minLength,
			message: `Minimum ${minLength} character`
		},
		maxLength: maxLength && {
			value: maxLength,
			message: `Maximum ${maxLength} character`
		},
		pattern
	}

	return (
		<Container className={className}>
			<InputContainer>
				<InputInner
					placeholder={placeholder}
					type={type}
					$errors={errors}
					disabled={isDisabled}
					{...register(name, registerOptions)}
				/>
				<InputStatus>
					{errors && !isDisabled && <Image src={CloseAccentIcon} width={18} height={18}/>}
				</InputStatus>
			</InputContainer>
			{!isDisabled && <ErrorText>{errors?.message}</ErrorText>}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	align-items: flex-start;
`

const InputContainer = styled.div`
	position: relative;
	width: 100%;
`

const InputInner = styled.input<{$errors?: FieldError}>`
  box-shadow: 0 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
	background: ${APP_COLORS.neutral100};
  border: 1px solid ${({$errors}) => $errors ? APP_COLORS.red300 : APP_COLORS.neutral300};
	width: 100%;
	color: ${APP_COLORS.neutral500};
	padding: 25px 23px;
	${TYPOGRAPHY.single100Regular};
	transition: all .3s ease;
	&:focus {
    border: 1px solid ${APP_COLORS.neutral500};
		color: ${APP_COLORS.neutral600};
		outline: none;
  }
	&:not(:placeholder-shown) {
    color: ${APP_COLORS.neutral600};
  }
	&:disabled {
		background: ${APP_COLORS.neutral300};
		color: ${APP_COLORS.neutral600};
    border: 1px solid ${APP_COLORS.neutral300};
  }
`
const ErrorText = styled.div`
	color: ${APP_COLORS.red300};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`
const InputStatus = styled.div`
	position: absolute;
	top: 50%;
	right: 25px;
	transform: translateY(-50%);
`