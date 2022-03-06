import * as intergiro from "@payfunc/model"

export interface Data {
	items: readonly Readonly<intergiro.Item>[]
	customer: Readonly<intergiro.Contact>
}
