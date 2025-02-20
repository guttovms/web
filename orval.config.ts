import { defineConfig } from "orval";

export default defineConfig({
	api: {
		input: "http://localhost:3333/docs/json",
		output: {
			baseUrl: "http://localhost:3333",
			target: "./src/http/api.ts",
			httpClient: "fetch",
			client: "fetch",
			clean: true,

			override: {
				fetch: {
					includeHttpResponseReturnType: false,
				},
			},
		},
	},
});
