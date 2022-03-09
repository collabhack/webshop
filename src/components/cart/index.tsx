import { Component, ComponentDidLoad, h, Prop, State } from "@stencil/core"
import { Cart } from "../../model/Cart"

@Component({
	tag: "webshop-cart",
	styleUrl: "style.css",
	scoped: true,
})
export class WebshopCart implements ComponentDidLoad {
	@Prop() currency = "SEK"
	@State() cart?: Cart
	@State() open: boolean
	componentDidLoad(): void {
		Cart.current.listen(cart => (this.cart = cart))
	}

	render() {
		return [
			<h1>Cart</h1>,
			<div>{this.cart?.items.length} items</div>,
			this.cart?.items.map(item => (
				<p>
					<span>{item.quantity}</span>
					<strong>{item.name}</strong>
					{(item.price ?? 0) * (item.quantity ?? 1)} {this.currency}
				</p>
			)),
		]
	}
}
