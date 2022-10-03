import React from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { CardState } from "components/Card/types"
import { BenefitList } from "components/Card"

interface CardItemStyles {
	accent?: boolean
}
interface CardItemProps extends CardItemStyles{
	cardInfo: CardState
}

export const CardItem: React.FC<CardItemProps> = ({accent, cardInfo}) => {
	return (
		<CardWrapper accent={accent}>
			<CardPrice>${cardInfo.price}</CardPrice>
			<CardTitle>{cardInfo.title}</CardTitle>
			<CardDescription>{cardInfo.description}</CardDescription>
			<CardLine accent={accent}/>
			<BenefitList
				benefits={cardInfo.benefits}
				accent={accent}
			/>
			<CardButton accent={accent}>Get Gscore</CardButton>
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

const CardButton = styled.div<CardItemStyles>`
	width: 100%;
  ${TYPOGRAPHY.single200Bold}
  padding: 26px 0;
	background: #ffffff;
	border-radius: 6px;
	color: ${({accent}) => accent ? APP_COLORS.accent : APP_COLORS.neutral800};
	text-align: center;
	cursor: pointer;
`