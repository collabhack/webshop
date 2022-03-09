import { Component, ComponentDidLoad, h, State } from "@stencil/core"
import * as intergiro from "@payfunc/model"
import { Cart } from "../../model/Cart"

@Component({
	tag: "webshop-cart",
	styleUrl: "style.css",
	scoped: true,
})
export class WebshopCart implements ComponentDidLoad {
	@State() cart: Cart
	componentDidLoad(): void {
		Cart.current.listen(cart => (this.cart = cart))
	}

	render() {
		return [<h1>Cart</h1>, <div>{this.cart.items.length} items</div>]
	}
}
