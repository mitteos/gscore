import React from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import {Button} from "components/UI"
import { SubscriptionState } from "store/features/subscription/types"
import {useRouter} from "next/router";

interface SubscriptionItemProps {
	subscriptionInfo: SubscriptionState;
}

export const SubscriptionItem: React.FC<SubscriptionItemProps> = ({subscriptionInfo}) => {

	const subscriptionPrice = subscriptionInfo.product?.prices[0].price
	const date = new Date(+subscriptionInfo.currentPeriodEnd)
	const subscriptionDate = {
		day: date.getDate(),
		month: date.getMonth() + 1,
		year: date.getFullYear()
	}
	const {push} = useRouter()

	const viewCodes = () => {
		push({
			pathname: "/",
			query: {
				changeProductId: subscriptionInfo.product.id,
				changeSubscriptionId: subscriptionInfo.id
			}
		})
	}

	return (
		<Container>
			<ItemHeader>
				<ItemLogo>Gscore</ItemLogo>
				<ItemStatus $status={subscriptionInfo?.status}>{subscriptionInfo?.status?.toLowerCase()}</ItemStatus>
			</ItemHeader>
			<ItemLine />
			<ItemBody>
				<ItemInfo>
					<ItemInfoInner>
						<ItemName>{subscriptionInfo.product?.name}</ItemName>
						<ItemPrice>${subscriptionPrice}</ItemPrice>
					</ItemInfoInner>
					<ItemInfoInner>
						<ItemDate>valid until {subscriptionDate.day}.{subscriptionDate.month}.{subscriptionDate.year}</ItemDate>
					</ItemInfoInner>
				</ItemInfo>
				<ItemButton variant="secondary" onClick={viewCodes}>View</ItemButton>
			</ItemBody>
		</Container>
	)
}

const Container = styled.div`
  box-shadow: 0 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
	background: #393939;
	display: flex;
	flex-direction: column;
	max-width: 620px;
`
const ItemHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 48px 63px 0 32px;
	@media (max-width: 600px) {
		padding: 32px 24px 0 16px;
	}
`
const ItemLogo = styled.h1`
	${TYPOGRAPHY.headings4};
  @media (max-width: 600px) {
    ${TYPOGRAPHY.single300Medium};
  }
`
const ItemStatus = styled.h2<{$status: string}>`
  ${TYPOGRAPHY.headings4};
	text-transform: capitalize;
  color: ${({$status}) => $status === "ACTIVE"
          ? APP_COLORS.green
          : $status === "INACTIVE"
                  ? APP_COLORS.red300
                  : APP_COLORS.orange300};
  @media (max-width: 600px) {
    ${TYPOGRAPHY.single300Medium};
  }
`
const ItemLine = styled.div`
	width: 100%;
	height: 1px;
	margin: 32px 0;
	background: ${APP_COLORS.neutral500};
  @media (max-width: 600px) {
    margin: 24px 0;
  }
`
const ItemBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	padding: 0 63px 48px 32px;
  @media (max-width: 600px) {
    padding: 0 24px 32px 16px;
		gap: 24px;
  }
`
const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
  @media (max-width: 600px) {
    gap: 4px;
  }
`
const ItemInfoInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const ItemName = styled.h3`
  ${TYPOGRAPHY.single400Regular};
  @media (max-width: 600px) {
    ${TYPOGRAPHY.paragraphDefault};
  }
`
const ItemPrice = styled.h3`
	min-width: 64px;
  ${TYPOGRAPHY.single400Regular};
  @media (max-width: 600px) {
    ${TYPOGRAPHY.paragraphDefault};
		min-width: 58px;
  }
`
const ItemDate = styled.p`
	${TYPOGRAPHY.single100Regular};
	color: ${APP_COLORS.neutral500};
`
const ItemButton = styled(Button)`
	width: 120px;
`