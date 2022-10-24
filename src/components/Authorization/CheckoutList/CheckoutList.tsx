import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import React from "react"
import { CheckoutItem } from "components/Authorization"
import {useAppSelector} from "hooks/redux"
import { subscriptionSelectors } from "store/features/subscription"

interface CheckoutListProps {
	success: boolean;
}

export const CheckoutList: React.FC<CheckoutListProps> = ({success}) => {

	const checkoutInfo = useAppSelector(subscriptionSelectors.getSelectedProduct)

	return (
		<>
			<CheckoutHeader>
				<CheckoutTitle>Package name</CheckoutTitle>
				<CheckoutTitle>Price</CheckoutTitle>
			</CheckoutHeader>
			<CheckoutContainer $success={success}>
				<CheckoutItem
					itemInfo={checkoutInfo}
					success={success}
				/>
			</CheckoutContainer>
		</>
	)
}

const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 48px 72px 32px 32px;
  background: ${APP_COLORS.neutral700};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 1px solid ${APP_COLORS.neutral500};
`
const CheckoutTitle = styled.h1`
  ${TYPOGRAPHY.headings3};
`
const CheckoutContainer = styled.div<{$success: boolean}>`
  display: flex;
  flex-direction: column;
  padding: ${({$success}) => $success ? "32px 72px 48px 32px" : "32px 48px 48px 32px"};
  background: ${APP_COLORS.neutral700};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`