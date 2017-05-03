/// <reference path="productCategory.ts" />

interface Product {
    name: string
    price: number
    category?: ProductCategory
}

class Initial implements Product {
    name = "Please select a product"
    price = 0
}

class CocaCola implements Product {
    name: string = "Coca-Cola"
    price = 2.30
    category = new SodaCategory()
}

class Fanta implements Product {
    name: string = "Fanta"
    price = 2
    category = new SodaCategory()
}

class Sprite implements Product {
    name: string = "Sprite"
    price = 1.80
    category = new SodaCategory()
}

class Peanuts implements Product {
    name: string = "Peanuts"
    price = 1.50
    category = new NutsCategory()
}

class Cashews implements Product {
    name: string = "Cashews"
    price = 2.80
    category = new NutsCategory()
}

class Plain implements Product {
    name: string = "Plain"
    price = 2
    category = new ChipsCategory()
}

class Cheddar implements Product {
    name: string = "Cheddar"
    price = 2
    category = new ChipsCategory()
}

class Mints implements Product {
    name: string = "Mints"
    price = 1.30
    category = new CandyCategory()
}

class Gummies implements Product {
    name: string = "Gummies"
    price = 1.90
    category = new CandyCategory()
}

class Hersey implements Product {
    name: string = "Hersey's"
    price = 1.30
    category = new CandyBarCategory()
}

class MilkyWay implements Product {
    name: string = "Milky Way"
    price = 1.80
    category = new CandyBarCategory()
}