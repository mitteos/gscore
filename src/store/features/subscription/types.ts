import { CodeState } from "store/features/code/types"

interface PriceState {
	id: number;
	isActive: boolean;
	productId: number;
	price: string;
}

export interface ProductState {
	id: number;
	sitesCount: number;
	name: string;
	prices: PriceState[]
}

export interface SubscriptionState {
	id: number;
	userId: number;
	productId: number;
	currentPeriodStart: string;
	currentPeriodEnd: string;
	status: string;
	product: ProductState;
	codes: CodeState[]
}