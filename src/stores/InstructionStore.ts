// import { makeAutoObservable } from 'mobx';

// class InstructionStore {
// 	doNotShowInstructions: boolean = false;
// 	isPopupOpen: boolean = false;

// 	constructor() {
// 		makeAutoObservable(this);
// 		const storedValue = localStorage.getItem('doNotShowInstructions');
// 		this.doNotShowInstructions = storedValue === 'true';
// 	}

// 	setDoNotShow(value: boolean) {
// 		this.doNotShowInstructions = value;
// 		localStorage.setItem('doNotShowInstructions', value ? 'true': 'false');
// 	}

// 	openPopup() {
// 		this.isPopupOpen = true;
// 	}

// 	closePopup() {
// 		this.isPopupOpen = false;
// 	}
// }

// export const instructionStore = new InstructionStore();