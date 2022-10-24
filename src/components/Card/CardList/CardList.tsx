import { CardItem } from "../CardItem"
import styled from "styled-components"
import { ProductState } from "store/features/subscription/types"
import React from "react";

interface CardListProps {
	products: ProductState[]
}

export const CardList: React.FC<CardListProps> = ({products}) => {
	return (
		<CardRow>
			{products?.map(product =>
				<CardItem
					key={product.id}
					accent={product.id % 2 === 0 && true}
					productInfo={product}
				/>
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