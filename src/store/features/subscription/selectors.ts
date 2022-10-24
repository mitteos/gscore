import { RootState } from "store/store"
import { createSelector } from "reselect"


const selectAllProducts = (state: RootState) => state.subscriptions.allProducts
const selectProductId = (state: RootState) => state.subscriptions.selectedProductId

export const getSelectedProduct = createSelector(
	[selectAllProducts, selectProductId],
	(allProducts, productId) => {
		return allProducts?.find(product => product.id === productId) ?? null
	}
)