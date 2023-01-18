import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", {
        name: "Iphone 14",
        code: "MLB123456",
        sales: 30,
        price: 8000,
        stock: 3,
      });
      server.create("product", {
        name: "Motorola G10",
        code: "MLB123456",
        sales: 10,
        price: 500,
        stock: 8,
      });
    },

    routes() {
      // keep this line, it allows all other API requests to hit the real server
      this.passthrough();

      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });
    },
  });
  return server;
}
