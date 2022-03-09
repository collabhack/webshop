import { Component, ComponentDidLoad, h, State } from "@stencil/core"
import { Cart } from "../../model/Cart"

@Component({
	tag: "webshop-checkout",
	styleUrl: "style.css",
	scoped: true,
})
export class WebshopCheckout implements ComponentDidLoad {
	@State() cart: Cart
	componentDidLoad(): void {
		Cart.current.listen(cart => (this.cart = cart))
	}
	render() {
		return <div>Hello, World! I'm</div>
	}
}
