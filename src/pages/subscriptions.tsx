import React from "react"
import {NextPage} from "next"
import {MainLayout} from "layouts"
import {HeadComponent} from "components/HeadComponent"
import styled from "styled-components"
import {APP_COLORS, TYPOGRAPHY} from "styles"
import {LinkButton} from "components/UI"
import {CodeList} from "components/Code"
import {SubscriptionsIsEmpty, SubscriptionsList} from "components/Subscription"
import {SubscriptionState} from "components/Subscription/types"

const subscriptionsCollection: SubscriptionState[] = [
	{id: 1, name: "Single site license", price: 77, date: "12.09.2022", status: "Active"},
	{id: 2, name: "3 sites license", price: 177, date: "23.05.2021", status: "Active"},
	{id: 3, name: "10 sites license", price: 233, date: "02.11.2022", status: "Active"},
]

const Subscriptions: NextPage = () => {
	return (
		<MainLayout>
			<HeadComponent title="Gscore | My subscriptions" />
			<Container>
				<Header>
					<Title>My subscriptions</Title>
					{!!subscriptionsCollection.length && <HeaderButton href="/" variant="primary">Upgrade</HeaderButton>}
				</Header>
			</Container>
			{subscriptionsCollection.length
				? <>
						<SubscriptionsList subscriptionsCollection={subscriptionsCollection}/>
						<Container>
							<CodeList />
						</Container>
					</>
				: <SubscriptionsIsEmpty />
			}
		</MainLayout>
	)
}

export default Subscriptions;

const Container = styled.div`
  width: 85%;
  max-width: 1226px;
	margin: 0 auto;
`
const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 0 44px;
`
const Title = styled.h1`
  ${TYPOGRAPHY.specialHeading2};
  @media (max-width: 1000px) {
    ${TYPOGRAPHY.specialHeading3};
  }
  @media (max-width: 700px) {
    ${TYPOGRAPHY.specialHeading4};
  }
`
const HeaderButton = styled(LinkButton)`
	width: 152px;
  @media (max-width: 600px) {
    ${TYPOGRAPHY.single100Bold};
		padding: 0;
		width: auto;
		color: ${APP_COLORS.accent};
		background: none;
		&:hover {
			background: none;
		}
  }
`