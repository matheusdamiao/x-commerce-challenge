import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
      favorite: Model,
    },

    seeds(server) {
      server.db.loadData({
        products: [
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
        ],
        favorites: [
          {
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            code: "MLB2063247364",
            sales: 150,
            price: 31.67,
            stock: 0,
          },
        ],
      });
    },

    routes() {
      // keep this line, it allows all other API requests to hit the real server
      this.passthrough();

      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });

      this.get(`/productsPaginated`, (schema, request) => {
        let page = parseInt(request.queryParams.page);
        let limit = parseInt(request.queryParams.limit);
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
        let allProducts = schema.db.products;
        let sortedProducts = allProducts.sort((a, b) => b.sales - a.sales);
        let result = sortedProducts.slice(startIndex, endIndex);

        //check if there's some product left.
        // if there is, add one more page to the total pages,
        // otherwise set total pages to be the division between all products and the page's limit
        let productsLeft = allProducts.length % limit;
        let totalPages;
        if (!productsLeft) {
          totalPages = Math.floor(allProducts.length / limit);
        } else {
          totalPages = Math.floor(allProducts.length / limit) + 1;
        }

        let data = {
          result,
          totalPages,
        };
        return data;
      });

      this.post("/products", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        console.log(attrs);
        return schema.products.create(attrs);
      });

      this.get("/favorites", (schema) => {
        return schema.favorites.all();
      });

      this.post("/favorites", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.favorites.create(attrs);
      });

      this.delete("/favorites/:name", (schema, request) => {
        let name = request.params.name;
        return schema.favorites.findBy({ name: `${name}` }).destroy();
      });
    },
  });
  return server;
}
