import * as intergiro from "@payfunc/model"
import { Data } from "./Data"

export class Cart implements Readonly<Data> {
	readonly items: readonly Readonly<intergiro.Item>[]
	readonly customer: Readonly<intergiro.Contact>
	readonly #listeners: ((cart: Cart) => void)[] = []
	private constructor(data?: Data) {
		this.items = data?.items ?? []
		this.customer = data?.customer ?? {}
	}
	listen(listener: (cart: Cart) => void): void {
		listener(this)
		this.#listeners.push(listener)
	}
	add(item: intergiro.Item): Cart {
		return this.update({ ...this, items: [...this.items, item] })
	}
	set(items: readonly Readonly<intergiro.Item>[]): Cart
	set(customer: Readonly<intergiro.Contact>): Cart
	set(data: readonly Readonly<intergiro.Item>[] | Readonly<intergiro.Contact>): Cart {
		return this.update(Array.isArray(data) ? { ...this, items: data } : { ...this, customer: data })
	}
	private update(data: Data): Cart {
		Cart.#current = new Cart(data)
		this.#listeners.forEach(listener => listener(Cart.#current))
		return Cart.#current
	}
	static #current = new Cart()
	static get current(): Cart {
		return Cart.#current
	}
}
