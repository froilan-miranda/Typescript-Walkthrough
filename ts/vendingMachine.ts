/// <reference path="coin.ts" />


class VendingMachine{
	private paid = ko.observable(0);
	acceptedCoins:Quarter[] = [new Quarter(), new Quarter()]
	acceptCoin = (coin:Quarter):void => {
		let oldTotal = this.paid()
		this.paid(oldTotal + coin.Value);
	}
}
