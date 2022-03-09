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
	element: HTMLInputElement
	render() {
		return (
			<div>
				<input type="number" value={1} ref={(e: HTMLInputElement) => (this.element = e)}></input>
				{this.name}
				<button
					onClick={() =>
						Cart.current.add({
							name: this.name,
							quantity: Number.parseInt(this.element.value),
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
