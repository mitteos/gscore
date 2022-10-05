import React from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"

interface ProgressItemState {
	id: number;
	title: string;
}

interface ProgressItemProps {
	itemInfo: ProgressItemState;
	isActive: boolean;
}

export const ProgressItem: React.FC<ProgressItemProps> = ({itemInfo, isActive}) => {
	return (
		<ProgressItemContainer>
			<ProgressTitle>{itemInfo.title}</ProgressTitle>
			<ProgressLine $isActive={isActive} />
		</ProgressItemContainer>
	)
}

const ProgressItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: flex-start;
	flex: 1;
`
const ProgressTitle = styled.h1`
	${TYPOGRAPHY.single300Medium};
`
const ProgressLine = styled.div<{$isActive: boolean}>`
	width: 100%;
	height: 8px;
  background: ${({$isActive}) => $isActive ? APP_COLORS.accent : APP_COLORS.neutral600};
	border-radius: 10px;
`
