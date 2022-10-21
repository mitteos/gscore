import Image from "next/image"
import { CartIcon } from "assets/svg"
import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import React from "react"
import { ProductState } from "store/features/subscription/types"

interface CheckoutItemProps {
	itemInfo: ProductState | null;
	success: boolean;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({itemInfo, success}) => {
	return (
		<CheckoutContainer>
			<CheckoutItemText>{itemInfo?.name}</CheckoutItemText>
			<CheckoutPriceContainer>
				<CheckoutItemText>${itemInfo?.prices[0].price}</CheckoutItemText>
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