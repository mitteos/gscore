import React from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { BenefitList } from "components/Card"
import Link from "next/link"
import { ProductState } from "store/features/subscription/types"
import { useAppDispatch } from "hooks/redux"
import { subscriptionActions } from "store/features/subscription"
import {useRouter} from "next/router";

interface CardItemStyles {
	accent?: boolean
}
interface CardItemProps extends CardItemStyles{
	productInfo: ProductState
}

export const CardItem: React.FC<CardItemProps> = ({accent, productInfo}) => {

	const router = useRouter()
	const dispatch = useAppDispatch()
	const selectProduct = () => {
		dispatch(subscriptionActions.setSelectedProduct(productInfo.prices[0].id))
	}

	return (
		<CardWrapper accent={accent}>
			<CardPrice>${productInfo.prices[0].price}</CardPrice>
			<CardTitle>{productInfo.name}</CardTitle>
			<CardDescription>Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price</CardDescription>
			<CardLine accent={accent}/>
			<BenefitList
				sitesCount={productInfo.sitesCount}
				accent={accent}
			/>
			<CardButton href={{
				pathname: "/auth",
				query: {
					changeProductId: router.query.changeProductId,
					changeSubscriptionId: router.query.changeSubscriptionId
				}

			}}>
				<CardButtonInner accent={accent} onClick={selectProduct}>Get Gscore</CardButtonInner>
			</CardButton>
		</CardWrapper>
	)
}

const CardWrapper = styled.div<CardItemStyles>`
	padding: 42px 48px;
  border-radius: 12px;
	flex: 1;
	background: ${({accent}) => accent ? APP_COLORS.accent : APP_COLORS.neutral700};
	transform: translateY(${({accent}) => accent ? "-50px" : "0"});
  @media (max-width: 1200px) {
    padding: 30px;
  }
  @media (max-width: 1000px) {
    padding: 20px;
  }
  @media (max-width: 900px) {
    padding: 42px 48px;
    transform: translateY(0px);
		width: 60%;
		margin: 0 auto;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`
const CardPrice = styled.h1`
  text-align: center;
  ${TYPOGRAPHY.headings1}
  margin: 0 0 4px;
  @media (max-width: 1200px) {
    ${TYPOGRAPHY.headings2}
  }
`
const CardTitle = styled.h2`
  text-align: center;
  ${TYPOGRAPHY.single400Bold}
  margin: 0 0 8px;
  @media (max-width: 1200px) {
    ${TYPOGRAPHY.single300Bold}
  }
`
const CardDescription = styled.p`
  text-align: center;
  ${TYPOGRAPHY.paragraphDefault};
  @media (max-width: 1200px) {
    ${TYPOGRAPHY.paragraphSmall}
  }
`
const CardLine = styled.div<CardItemStyles>`
  border: 1px solid ${({accent}) => accent === true ? "#ffffff" : "#969696"};
  width: 100%;
  margin: 40px 0 38px;
`
const CardButton = styled(Link)`
  width: 100%;
`
const CardButtonInner = styled.a<CardItemStyles>`
  width: 100%;
  display: block;
  ${TYPOGRAPHY.single200Bold}
  padding: 26px 0;
  background: #ffffff;
  border-radius: 6px;
  color: ${({accent}) => accent ? APP_COLORS.accent : APP_COLORS.neutral800};
  text-align: center;
  cursor: pointer;
`