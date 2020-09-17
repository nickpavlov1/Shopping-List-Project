export const shoppingList = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "DeliveryOn": new Date(1996, 8, 20)
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "DeliveryOn": new Date(1996, 7, 12)
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 8, 26)
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "DeliveryOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 17)
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "DeliveryOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitPrice": 30,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 22)
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitPrice": 40,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 11, 1)
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "DeliveryOn": new Date(1997, 1, 21)
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "DeliveryOn": new Date(1996, 8, 5)
    }
];

export const CONTAINER = '#shopping-items';

export const templateHtml = (shoppingItem) => {

    $(CONTAINER).append(`
    <div id="item-info" item-id="${shoppingItem.ProductID}">
        <div id="product-name">${shoppingItem.ProductName}</div>
        <p class="item-details">Price: $${shoppingItem.UnitPrice.toFixed(2)}</p>
        <p class="item-details">Items Left: ${(shoppingItem.UnitsInStock > 0) ? shoppingItem.UnitsInStock : 'Out of Stock'}</p>
        <p id="eta">ETA: ${shoppingItem.DeliveryOn.toLocaleDateString('en-GB')}</p>
        <div id="buttons">
            <button btn-id=${shoppingItem.ProductID} class="btn" type="button">
                Add To Watchlist
            </button>
            <button btn-id=${shoppingItem.ProductID} class="btn" type="button">
                Add To Cart
            </button>
        </div>
    </div>`);
  }