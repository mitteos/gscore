export interface SubscriptionState {
	id: number;
	status: "Active" | "Inactive" | "Hold";
	name: string;
	price: number;
	date: string;
}