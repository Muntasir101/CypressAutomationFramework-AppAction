// ### 1. Launch the Application
// ### 2. Select the Product with 20% discount listed here
// ### 3. Add to Cart
// ### 4. Verify the message displayed that the product is added to Cart
// ### 5. Check the Product Count in the Cart

describe('Add to Cart', () => {
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

	it('click on 20% discount listed Item', () => {
		cy.printedChiffonDress();
		cy.clickChiffonDress();
	});

	it('Check whether the Add to Cart Button is enabled and click product to add to Cart', () => {
		cy.clickAddToCart();
	});

	it('Verify whether the product added to Cart message is displayed', () => {
		cy.cartSuccessMessage();
		cy.cartAddedMessage();
	});

	it('Verify the product count from the Cart', () => {
		cy.cartCount();
	});
});
