import Image from "next/image"
import CheckAccentIcon from "assets/svg/checkAccent.svg"
import CheckIcon from "assets/svg/check.svg"
import React from "react"
import styled from "styled-components"
import { BenefitsState } from "components/Card/types"
import { typography } from "styles"

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
  ${typography.single200Regular};
  @media (max-width: 1200px) {
    ${typography.single100Regular}
  }
`