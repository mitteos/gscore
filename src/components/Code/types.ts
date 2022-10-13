export interface CodeState {
	id: number;
	code: string;
	domain: string;
	status: "Active" | "Inactive" | "Hold"
}