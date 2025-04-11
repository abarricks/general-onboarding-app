export interface LoginDetails {
	Ms: {
		name: string;
		id: string;
	};
}

export interface SystemConfig {
	loginDetails: LoginDetails;
}