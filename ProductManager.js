

class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts = () => {
      console.log(this.products);
      return;
    };
  
    getProductById = (productId) => {
      const productIndex = this.products.findIndex(
        (product) => product.id === productId
      );
  
      if (productIndex === -1) {
        console.log("Not found");
        return;
      }
      console.log(this.products[productIndex]);
    };
  
    addProduct = (title, description, price, thumbnail, code, stock) => {
      const product = this.products.find((product) => product.code === code);
  
      if (
        (title ?? false) &&
        (description ?? false) &&
        (price ?? false) &&
        (thumbnail ?? false) &&
        (code ?? false) &&
        (stock ?? false)
      ) {
        if (!product) {
          const newProduct = {
            ...product,
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
          };
          this.products.push(newProduct);
          return;
        } else {
          console.log("The product already exists");
          return;
        }
      } else {
        console.log("Missing data");
      }
    };
  }