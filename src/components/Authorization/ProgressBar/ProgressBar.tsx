import React, { useState } from "react"
import styled from "styled-components"
import { APP_COLORS, TYPOGRAPHY } from "styles"
import { ProgressItem } from "components/Authorization/ProgressItem"
import {NextPage} from "next";

interface ProgressBarProps {
	step: number;
}

export const ProgressBar: NextPage<ProgressBarProps> = ({step}) => {
	
	const [progressItems, setProgressItems] = useState([
		{id: 1, title: "Create account"},
		{id: 2, title: "Log in"},
		{id: 3, title: "Checkout"},
	])
	
	return (
		<ProgressBarContainer>
			{progressItems.map(item =>
				<ProgressItem key={item.id} itemInfo={item} isActive={item.id <= step}/>
			)}
		</ProgressBarContainer>
	)
}

const ProgressBarContainer = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 16px;
	margin: 0 0 64px;
`