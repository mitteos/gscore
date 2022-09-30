export interface BenefitsState {
	id: number;
	text: string;
}

export interface CardState {
	id: number,
	title: string;
	description: string;
	price: number;
	benefits: BenefitsState[]
}