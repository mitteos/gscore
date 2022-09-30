import { CardItem } from "../CardItem"
import styled from "styled-components"
import { useState } from "react"
import { CardState } from "components/Card/types"

export const CardList = () => {
	
	const [cards] = useState<CardState[]>([
		{
			id: 1,
			title: "Single site license",
			description: "Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price",
			price: 77,
			benefits: [
				{id: 1, text: "Single site license"},
				{id: 2, text: "Special introductory pricing"},
				{id: 3, text: "Unlimited Pages and Keywords"},
				{id: 4, text: "Billed annually"}
			]
		},
		{
			id: 2,
			title: "3 Site license",
			description: "Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price",
			price: 117,
			benefits: [
				{id: 1, text: "All features for 3 sites"},
				{id: 2, text: "Special introductory pricing"},
				{id: 3, text: "Unlimited Pages and Keywords"},
				{id: 4, text: "Billed annually"}
			]
		},
		{
			id: 3,
			title: "10 Site license",
			description: "Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price",
			price: 77,
			benefits: [
				{id: 1, text: "All features for 10 sites"},
				{id: 2, text: "Special introductory pricing"},
				{id: 3, text: "Unlimited Pages and Keywords"},
				{id: 4, text: "Billed annually"}
			]
		}
	])
	
	return (
		<CardRow>
			{cards.map(card =>
				<CardItem key={card.id} accent={card.id % 2 === 0 && true} cardInfo={card}/>
			)}
		</CardRow>
	)
}

const CardRow = styled.div`
	display: flex;
	align-items: center;
	gap: 28px;
	margin: 0 0 32px;
  @media (max-width: 1200px) {
    gap: 15px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 28px;
  }
`