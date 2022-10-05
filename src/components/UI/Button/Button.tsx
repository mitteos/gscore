import styled, { keyframes } from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import React from "react"
import Image from "next/image"
import { LoaderIcon } from "assets/svg"

interface ButtonProps {
	className?: string;
	variant: "primary" | "secondary";
	isLoading: boolean;
	children: React.ReactNode | React.ReactNode[];
	onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({className, isLoading, variant, children, onClick}) => {
	return (
		<StyledButton
			$variant={variant}
			$isLoading={isLoading}
			onClick={onClick}
			className={className}
		>
			{isLoading
				? <ButtonLoader src={LoaderIcon} />
				: children}
		</StyledButton>
	)
}

const StyledButton = styled.button<{$variant: "primary" | "secondary", $isLoading: boolean}>`
	cursor: pointer;
	width: 200px;
	background: ${APP_COLORS.accent};
  box-shadow: 0 10px 28px rgba(252, 88, 66, 0.2);
  border-radius: 4px;
	padding: ${({$isLoading}) => $isLoading ? "18px 24px" : "20px 24px"} ;
	${TYPOGRAPHY.single100Bold};
	color: ${APP_COLORS.neutral100};
	border: none;
	transition: background-color .3s ease;
	&:hover {
		background: ${APP_COLORS.red400};
	}
`

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
	100% {
		transform: rotate(360deg);
	}
`
const ButtonLoader = styled(Image)`
	animation: ${spinAnimation} 2s infinite linear;
`