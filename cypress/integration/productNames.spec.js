// ### 1. Launch the Application
// ### 2. Arrive on to the Landing Page
// ### 3. Verify the product names from the page are visible

import {
	anchor,
	fadedShortSleeveTshirts,
	printedDress,
	anchorProduct,
	printedDressTwo,
	blouse,
	printedSummerDress,
	printedSummerDressTwo,
	printedChiffonDress,
} from '../selectors/locators';

describe('Check Product Names Visible on the Landing Page', () => {
	before(function () {
		cy.openHomePage();
	});

	it('Check the title, url and links on the Landing Page', () => {
		cy.verifyTitle();
		cy.verifyUrl();
		cy.verifyForPageToLoad();
		cy.contactLink();
		cy.loginLink();
	});

	it('Check the product name: Faded Short Sleeve T-shirts is visible', () => {
		cy.get(anchor).contains(fadedShortSleeveTshirts).should('be.visible');
	});

	it('Check the product name: Blouse is visible', () => {
		cy.get(anchorProduct).contains(blouse).should('be.visible');
	});

	it('Check the product name: Printed Dress is visible', () => {
		cy.get(anchor).contains(printedDress).should('be.visible');
	});

	it('Check the product name: Printed Dress Two is visible', () => {
		cy.get(printedDressTwo).contains(printedDress).should('be.visible');
	});

	it('Check the product name: Printed Summer Dress is visible', () => {
		cy.get(anchor).contains(printedSummerDress).should('be.visible');
	});

	it('Check the product name: Printed Summer Dress Two is visible', () => {
		cy.get(printedSummerDressTwo)
			.contains(printedSummerDress)
			.should('be.visible');
	});

	it('Check the product name: Printed Chiffon Dress is visible', () => {
		cy.get(anchor).contains(printedChiffonDress).should('be.visible');
	});
});
