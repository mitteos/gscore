import Image from "next/image"
import { CartIcon } from "assets/svg"
import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { CheckoutItemState } from "components/Authorization/types"
import React from "react"

interface CheckoutItemProps {
	itemInfo: CheckoutItemState;
	success: boolean;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({itemInfo, success}) => {
	return (
		<CheckoutContainer>
			<CheckoutItemText>{itemInfo.name}</CheckoutItemText>
			<CheckoutPriceContainer>
				<CheckoutItemText>${itemInfo.price}</CheckoutItemText>
				{!success && <Image src={CartIcon} />}
			</CheckoutPriceContainer>
		</CheckoutContainer>
	)
}

const CheckoutContainer= styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  gap: 20px;
`
const CheckoutItemText = styled.p`
	${TYPOGRAPHY.paragraphLarge};
`
const CheckoutPriceContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 9px;
`