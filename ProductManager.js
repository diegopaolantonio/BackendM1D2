import fs from "fs";

export default class ProductManager {
  constructor() {
    this.path = "./files/fileproducts.json";
  }
  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      const fileData = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(fileData);
      // console.log(result);
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
      return "Not found";
    }
    return products[productIndex];
  };

  addProduct = async (product) => {
    let products = await this.getProducts();

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

        const string = JSON.stringify(products, null, "\t");
        // console.log(string);

        await fs.promises.writeFile(this.path, string);
        return product;
      } else {
        return "The product already exists";
        return;
      }
    } else {
      return "Missing data";
    }
  };
}
