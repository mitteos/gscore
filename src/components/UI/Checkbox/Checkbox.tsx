import React, {useState} from "react"
import styled, {css} from "styled-components"
import {APP_COLORS} from "styles"
import Image from "next/image"
import {SuccessIcon} from "assets/svg"

interface CheckboxProps {
	isDisabled: boolean;
	onClick: () => void
}

export const Checkbox: React.FC<CheckboxProps> = ({isDisabled, onClick}) => {

	const [isChecked, setIsChecked] = useState<boolean>(false)

	const checkHandler = () => {
		!isDisabled && setIsChecked(!isChecked)
		onClick()
	}

	return (
		<CheckboxContainer
			onClick={checkHandler}
			$isActive={isChecked}
			$isDisabled={isDisabled}
		>
			<CheckboxInput type="checkbox" checked={isChecked} onChange={checkHandler} />
			<CheckboxImage src={SuccessIcon} $isActive={isChecked} width={13}/>
		</CheckboxContainer>
	);
};

const CheckboxContainer = styled.div<{$isActive: boolean, $isDisabled: boolean}>`
	width: 28px;
	height: 28px;
	background: ${({$isActive}) => $isActive ? APP_COLORS.accent : APP_COLORS.neutral100};
  box-shadow: 0 2px 6px rgba(20, 20, 43, 0.06);
  border-radius: 7px;
	cursor: ${({$isDisabled}) => $isDisabled ? "auto" : "pointer"};
	display: flex;
	align-items: center;
	justify-content: center;
  transition: all .3s ease;
  ${({$isDisabled, $isActive}) => $isDisabled ? css`
		opacity: 0.5;
		`
		: css`
    &:hover {
      background: ${$isActive ? APP_COLORS.red400 : APP_COLORS.neutral400};
    }
	`};
  
`
const CheckboxInput = styled.input`
	position: absolute;
	appearance: none;
	z-index: -1;
`
const CheckboxImage = styled(Image)<{$isActive: boolean}>`
	transition: all .3s ease;
	opacity: ${({$isActive}) => $isActive ? "1" : "0"};
`