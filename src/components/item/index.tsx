import { Component, h, Prop } from "@stencil/core"
// import * as intergiro from "@payfunc/model"
import { Cart } from "../../model/Cart"

@Component({
	tag: "webshop-item",
	styleUrl: "style.css",
	scoped: true,
})
export class WebshopItem {
	@Prop() name: string
	@Prop() price: string
	@Prop() number: string
	render() {
		return (
			<div>
				{this.name}
				<button
					onClick={() =>
						Cart.current.add({
							name: this.name,
							quantity: 1,
							price: Number.parseFloat(this.price),
							number: this.number,
						})
					}>
					Buy
				</button>
			</div>
		)
	}
}
