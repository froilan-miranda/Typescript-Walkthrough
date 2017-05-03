/// <reference path="vendingMachine.ts"/>

let machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);