import React from "react"
import styled from "styled-components"
import { BenefitsState } from "components/Card/types"
import { BenefitItem } from "components/Card"

interface BenefitListProps {
	benefits: BenefitsState[];
	accent?: boolean;
}

export const BenefitList: React.FC<BenefitListProps> = ({benefits, accent}) => {
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