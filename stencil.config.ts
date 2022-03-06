import { Config } from "@stencil/core"

export const config: Config = {
	namespace: "webshop",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "dist-custom-elements",
		},
		{
			type: "www",
			serviceWorker: null, // disable service workers
		},
	],
}
