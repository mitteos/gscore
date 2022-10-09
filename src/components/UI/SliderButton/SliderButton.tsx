import Image from "next/image"
import {SliderArrowIcon} from "assets/svg"
import React from "react"
import styled from "styled-components"
import {APP_COLORS} from "styles"

interface SliderButtonProps {
	variant: "prev" | "next";
	className: string;
}

export const SliderButton: React.FC<SliderButtonProps> = ({variant, className}) => {

	return (
		<NavigationButton
			$variant={variant}
			className={className}
		>
			<Image src={SliderArrowIcon} />
		</NavigationButton>
	)
}

const NavigationButton = styled.div<{$variant: "prev" | "next"}>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 13px;
  border: 1px solid ${APP_COLORS.neutral500};
  border-radius: 12px;
	cursor: pointer;
	transform: rotate(${({$variant}) => $variant === "prev" && "180"}deg);
	transition: opacity	.3s ease;
  @media (max-width: 600px) {
    display: none;
  }
`