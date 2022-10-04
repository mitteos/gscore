import Image from "next/image"
import { CheckIcon, CheckAccentIcon } from "assets/svg"
import React from "react"
import styled from "styled-components"
import { BenefitsState } from "components/Card/types"
import { TYPOGRAPHY } from "styles"

interface BenefitItemProps {
	benefit: BenefitsState;
	accent?: boolean;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({benefit, accent}) => {
	return (
		<BenefitWrapper>
			<BenefitImageContainer>
				<Image
					src={accent ? CheckAccentIcon : CheckIcon}
					width={26}
					height={26}
					layout="fixed"
				/>
			</BenefitImageContainer>
			<BenefitText>{benefit.text}</BenefitText>
		</BenefitWrapper>
	)
}

const BenefitWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
`
const BenefitImageContainer = styled.div`
	flex-shrink: 0;
`
const BenefitText = styled.p`
  ${TYPOGRAPHY.single200Regular};
  @media (max-width: 1200px) {
    ${TYPOGRAPHY.single100Regular}
  }
`