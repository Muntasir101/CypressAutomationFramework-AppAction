// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Add quantity as 5 items to the Cart
// ### 4. Click proceed to checkout 
// ### 5. Check the Total Price of the products selected

import {
	anchor,
	printedSummerDress,
	anchorH,
	quantityWanted,
	numberOfItems,
	checkout,
	productPrice,
	priceTotal,
	totalProductPrice,
	totalPriceWithTax,
} from '../selectors/locators';

describe('Add the product quantity as five to the cart and check the total price', () => {
	before(function () {
		cy.openHomePage();
	});

	it('Click on the 5th Product with 5% discount on the Landing Page', () => {
		cy.get(anchor).contains(printedSummerDress).should('be.visible');
		cy.get(anchor).contains(printedSummerDress).click();
		cy.get(anchorH).contains(printedSummerDress).should('be.visible');
	});

	it('Add quantity as 5 for the product', () => {
		cy.get(quantityWanted).clear();
		cy.get(quantityWanted).type(numberOfItems);
		cy.clickAddToCart();
		cy.cartSuccessMessage();
		cy.cartAddedMessage();
		cy.get(checkout).click();
	});

	it('Check whether the Total price is accurate from the Cart', () => {
		cy.get(productPrice)
			.invoke('text')
			.should(textValue => {
				expect(totalProductPrice).to.eq(textValue);
			});

		cy.get(priceTotal)
			.invoke('text')
			.should(textValue => {
				expect(totalPriceWithTax).to.eq(textValue);
			});
	});
});
