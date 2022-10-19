import React, {useEffect, useState} from "react"
import styled from "styled-components"
import { ProgressItem } from "components/Authorization/ProgressItem"
import { useRouter } from "next/router"

const progressItems = [
	{id: 1, title: "Create account", query: "sign-up"},
	{id: 2, title: "Log in", query: "sign-in"},
	{id: 3, title: "Checkout", query: "checkout"},
]

export const ProgressBar: React.FC = () => {

	const router = useRouter()

	const [activeId, setActiveId] = useState<number>(1)

	useEffect(() => {
		setActiveId(progressItems.find(el => el.query === router.query.step)?.id ?? 1)
	}, [router.query.step])

	return (
		<ProgressBarContainer>
			{progressItems.map(item =>
				<ProgressItem
					key={item.id}
					itemInfo={item}
					isActive={item.id <= activeId}
				/>
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