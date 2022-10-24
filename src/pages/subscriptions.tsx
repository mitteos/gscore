import React, {useEffect, useState} from "react"
import {GetServerSideProps, NextPage} from "next"
import {MainLayout} from "layouts"
import {HeadComponent} from "components/HeadComponent"
import styled from "styled-components"
import {APP_COLORS, TYPOGRAPHY} from "styles"
import {LinkButton} from "components/UI"
import {CodeList} from "components/Code"
import {SubscriptionsIsEmpty, SubscriptionsList} from "components/Subscription"
import {useAppDispatch, useAppSelector} from "hooks/redux"
import { SubscriptionState } from "store/features/subscription/types"
import { useRouter } from "next/router"
import axios, { AxiosError } from "axios"
import {getCookie} from "cookies-next"
import {subscriptionActions} from "store/features/subscription"
import {codeActions} from "store/features/code"

interface SubscriptionsProps {
	currentSubscriptions: SubscriptionState[]
	error: string;
}

export const getServerSideProps: GetServerSideProps<SubscriptionsProps> = async ({req, res}) => {
	const token = getCookie("token", {req, res})
	try {
		const {data} = await axios.get<SubscriptionState[]>("https://gscore-back.herokuapp.com/api/subscribe/self", {
			headers: {
				Authorization: token ? `Bearer ${token}` : ""
			}
		})
		return {
			props: {
				currentSubscriptions: data,
				error: ""
			},
		}
	} catch (e) {
		return {
			props: {
				currentSubscriptions: [],
				error: e instanceof AxiosError
					? e.response?.data.message
					: "Unknown error"
			},
		}
	}
}

const Subscriptions: NextPage<SubscriptionsProps> = ({currentSubscriptions, error}) => {

	const {user: userInfo} = useAppSelector(state => state.user)
	const router = useRouter()
	const [activeSubscriptionId, setActiveSubscriptionId] = useState<number>(0)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(subscriptionActions.setCurrentSubscriptions(currentSubscriptions))
		dispatch(codeActions.setCodes(currentSubscriptions[0].codes))
	}, []);

	useEffect(() => {
		if(!userInfo?.id) {
			router.push("/auth")
		}
	}, [userInfo])

	return (
		<MainLayout>
			<HeadComponent title="Gscore | My subscriptions" />
			<Container>
				<Header>
					<Title>My subscriptions</Title>
					{!!currentSubscriptions?.length
						&& <HeaderButton
							href={{
								pathname: "/",
								query: {
									changeProductId: `${currentSubscriptions[activeSubscriptionId].productId}`,
									changeSubscriptionId: `${currentSubscriptions[activeSubscriptionId].id}`
								}
							}}
							variant="primary"
						>Upgrade</HeaderButton>
					}
				</Header>
			</Container>
			{currentSubscriptions?.length
				? <>
						<SubscriptionsList
							subscriptionsCollection={currentSubscriptions}
							setActiveSubscriptionId={setActiveSubscriptionId}
						/>
						<Container>
							<CodeList subscribeId={currentSubscriptions[activeSubscriptionId].id}/>
						</Container>
					</>
				: error
					?	<Container>
						<h3>{error}</h3>
					</Container>
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