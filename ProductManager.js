import fs from "fs";

//  const path = "./files/FileProducts.json";

export default class ProductManager {
  constructor() {
    this.path = "./files/FileProducts.json";
  }
  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      const fileData = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(fileData);
      console.log(result);
      return result;
    } else {
      return [];
    }
  };

  getProductById = async (productId) => {
    const products = await this.getProducts();

    const productIndex = products.findIndex(
      (product) => product.id === productId
    );

    if (productIndex === -1) {
      console.log("Not found");
      return;
    }
    console.log(products[productIndex]);
  };

  addProduct = async (product) => {
    const products = await this.getProducts();

    console.log(products);

    if (products.length === 0) {
      this.productToAdd = false;
      product.id = 1;
    } else {
      this.productToAdd = products.find(
        (productToAdd) => productToAdd.code === product.code
      );
      product.id = products[products.length - 1].id + 1;
    }

    if (
      (product.title ?? false) &&
      (product.description ?? false) &&
      (product.price ?? false) &&
      (product.thumbnail ?? false) &&
      (product.code ?? false) &&
      (product.stock ?? false)
    ) {
      if (!this.productToAdd) {
        products.push(product);
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(products, null, "\t")
        );
        return product;
      } else {
        console.log("The product already exists");
        return;
      }
    } else {
      console.log("Missing data");
    }
  };
}
