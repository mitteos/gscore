import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { Button } from "components/UI"
import { CheckoutList } from "components/Authorization/CheckoutList"
import React, {useEffect} from "react"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { subscriptionAsyncActions, subscriptionSelectors } from "store/features/subscription"
import { useRouter } from "next/router"

export const Checkout: React.FC = () => {

	const {isLoading, selectedProductId} = useAppSelector(state => state.subscriptions)
	const selectedProductInfo = useAppSelector(subscriptionSelectors.getSelectedProduct)
	const dispatch = useAppDispatch()
	const router = useRouter()

	useEffect(() => {
		if(selectedProductInfo === null) {
			router.push("/")
		}
	}, [])

	const changeProduct = () => {
		const subscribeId = Number(router.query.changeSubscriptionId)
		if(selectedProductId) {
			dispatch(subscriptionAsyncActions.changeProduct({productId: selectedProductId, subscribeId}))
				.then(async (res) => {
					if(res.meta.requestStatus === "fulfilled") {
						router.push("/subscriptions")
					}
				})
		}
	}

	const purchase = () => {
		dispatch(subscriptionAsyncActions.buySubscription(selectedProductInfo?.id))
			.then(async (res) => {
				if(res.meta.requestStatus === "fulfilled") {
					router.push("/purchase-success")
				}
			})
	}

	return (
		<>
			<Title>Checkout</Title>
			<CheckoutList success={false}/>
			<TotalContainer>
				<TotalText>Total:</TotalText>
				<TotalText>${selectedProductInfo?.prices[0].price}</TotalText>
			</TotalContainer>
			<Button
				variant="primary"
				isLoading={isLoading}
				onClick={router.query.changeProductId ? changeProduct : purchase}
			>{router.query.changeProductId ? "Change" : "Purchase"}</Button>
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