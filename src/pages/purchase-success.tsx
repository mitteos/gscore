import React, { useState } from "react"
import { MainLayout } from "layouts"
import { HeadComponent } from "components/HeadComponent"
import styled from "styled-components"
import { TYPOGRAPHY } from "styles"
import { LinkButton } from "components/UI"
import { useRouter } from "next/router"
import { CheckoutList } from "components/Authorization"
import { CheckoutItemState } from "components/Authorization/types"
import { NextPage } from "next"

const PurchaseSuccess: NextPage = () => {
	return (
		<MainLayout>
			<HeadComponent title="Gscore | Purchase success" />
			<Container>
				<Title>Start your subscription</Title>
				<Subtitle>We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.</Subtitle>
				<CheckoutList success={true}/>
				<PurchaseButton href="/subscriptions" variant="primary">Go to my subscriptions</PurchaseButton>
			</Container>
		</MainLayout>
	)
}

export default PurchaseSuccess

const Container = styled.div`
	max-width: 620px;
	width: 43%;
	margin: 0 auto;
  @media (max-width: 1100px) {
    max-width: 100%;
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 85%;
  }
`
const Title = styled.h1`
	${TYPOGRAPHY.specialHeading3};
	margin: 0 0 16px;
  @media (max-width: 700px) {
    ${TYPOGRAPHY.specialHeading4};
  }
`
const Subtitle = styled.h2`
  ${TYPOGRAPHY.paragraphSmall};
	margin: 0 0 48px;
`
const PurchaseButton = styled(LinkButton)`
	width: 100%;
	margin: 48px 0 0;
`