const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]





function orderVanilla() {
    const Vanilla = iceCream.find(iceCream => iceCream.name == 'Vanilla')
    // @ts-ignore
    Vanilla.quantity++
    console.log('here is your vanilla', Vanilla);
    drawCart()
}
function orderCookieDough() {
    const CookieDough = iceCream.find(iceCream => iceCream.name == 'Cookie Dough')
    // @ts-ignore
    CookieDough.quantity++
    console.log('here is your cookie dough', CookieDough);
    drawCart()
}
function orderStrawberry() {
    const Strawberry = iceCream.find(iceCream => iceCream.name == 'Strawberry')
    // @ts-ignore
    Strawberry.quantity++
    console.log('here is your strawberry', Strawberry);
    drawCart()
}
function orderSprinkles() {
    const Sprinkles = toppings.find(topping => topping.name == 'Sprinkles')
    // @ts-ignore
    Sprinkles.quantity++
    console.log('here is your sprinkles', Sprinkles);
    // drawToppingCart()
    drawCart()
}
function orderChocolateChips() {
    const ChocolateChips = toppings.find(topping => topping.name == 'Chocolate Chips')
    // @ts-ignore
    ChocolateChips.quantity++
    console.log('here are your chocolate chips', ChocolateChips);
    // drawToppingCart()
    drawCart()
}
function orderCookieChunks() {
    const CookieChunks = toppings.find(topping => topping.name == 'Cookie Chunks')
    // @ts-ignore
    CookieChunks.quantity++
    console.log('here are your cookie chunks', CookieChunks);
    // drawToppingCart()
    drawCart()
}


function drawCart() {
    let content = ''
    iceCream.forEach(iceCreamFlavor => {
        if (iceCreamFlavor.quantity > 0) {
            const totalPrice = (iceCreamFlavor.price * iceCreamFlavor.quantity).toFixed(2)
            content += `<p>${iceCreamFlavor.name} | Qty: ${iceCreamFlavor.quantity} | Price: $${totalPrice}</p>`
        }
    })
    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            const toppingPrice = (topping.price * topping.quantity).toFixed(2)
            content += `<p>${topping.name} | Qty: ${topping.quantity} | Price: $${topping.price}</p>`

        }
    })

    const cartElement = document.getElementById('cart')
    // @ts-ignore
    cartElement.innerHTML = content
    let calculatedTotal = calculateTotal()
    const cartTotalElement = document.getElementById('cartTotal')
    // @ts-ignore
    cartTotalElement.innerText = calculatedTotal.toFixed(2)
}
function calculateTotal() {
    let cartTotal = 0
    iceCream.forEach(iceCreamFlavor => {
        const totalPrice = iceCreamFlavor.price * iceCreamFlavor.quantity
        cartTotal += totalPrice
    })
    toppings.forEach(topping => {
        const totalTopping = topping.price * topping.quantity
        cartTotal += totalTopping
    })
    return cartTotal
}

function checkOut() {
    const wantsToCheckOut = window.confirm("Are you sure you are ready to checkout? Did you remember your toppings?")
    if (!wantsToCheckOut) {
        return
    }
    iceCream.forEach(iceCreamFlavor => iceCreamFlavor.quantity = 0)
    toppings.forEach(topping => topping.quantity = 0)
    drawCart()
}






