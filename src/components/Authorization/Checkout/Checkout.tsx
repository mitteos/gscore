import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { Button } from "components/UI"
import { useRouter } from "next/router"
import { CheckoutList } from "components/Authorization/CheckoutList"
import { useState } from "react"
import { CheckoutItemState } from "components/Authorization/types"
import {NextPage} from "next";

export const Checkout: NextPage = () => {
	
	const {push} = useRouter()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [checkoutItems, setCheckoutItems] = useState<CheckoutItemState[]>([
		{id: 1, name: "Single site license", price: 77}
	])
	
	const purchase = () => {
		setIsLoading(true)
		setTimeout(() => {
			push("/purchase-success")
		}, 3000)
	}
	
	return (
		<>
			<Title>Checkout</Title>
			<CheckoutList checkoutItems={checkoutItems} success={false}/>
			<TotalContainer>
				<TotalText>Total:</TotalText>
				<TotalText>$77</TotalText>
			</TotalContainer>
			<Button
				variant="primary"
				isLoading={isLoading}
				onClick={purchase}
			>Purchase</Button>
		</>
	)
}

const Title = styled.h1`
	${TYPOGRAPHY.specialHeading3};
	margin: 0 0 32px;
  @media (max-width: 700px) {
    ${TYPOGRAPHY.specialHeading4};
  }
`
const TotalContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 24px 0 48px;
`
const TotalText = styled.h1`
	${TYPOGRAPHY.specialHeading4};
`