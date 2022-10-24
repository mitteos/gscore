import React from "react"
import styled from "styled-components"
import { BenefitsState } from "components/Card/types"
import { BenefitItem } from "components/Card"

interface BenefitListProps {
	sitesCount: number;
	accent?: boolean;
}

export const BenefitList: React.FC<BenefitListProps> = ({sitesCount, accent}) => {

	const benefits: BenefitsState[] = [
		{id: 1, text: sitesCount === 1 ? "Single site license" : `All features for ${sitesCount} sites`},
		{id: 2, text: "Special introductory pricing"},
		{id: 3, text: "Unlimited Pages and Keywords"},
		{id: 4, text: "Billed annually"}
	]

	return (
		<ListWrapper>
			{benefits.map(ben =>
				<BenefitItem
					key={ben.id}
					accent={accent}
					benefit={ben}
				/>
			)}
		</ListWrapper>
	)
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 0 32px;
`