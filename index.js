import ProductManager from "./ProductManager.js";

const productManager = new ProductManager();

const func = async () => {

  // let primerConsulta = await productManager.getProducts(); // Imprime el array vacio ya que no se agrego ningun producto todavia
  // console.log(primerConsulta);

     // Producto 1
  let product = {
     title: "M221",
     description: "PLC",
     price: 220,
     thumbnail:
       "https://download.schneider-electric.com/files?p_Doc_Ref=PF130224&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
     code: "SchneireM221",
     stock: 250
   };

    let agregar = await productManager.addProduct(product); // Producto 1
    console.log(agregar);

   product = {
     // Producto sin un campo
     //   title: "M221",
     description: "PLC",
     price: 220,
     thumbnail:
       "https://download.schneider-electric.com/files?p_Doc_Ref=PF130224&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
     code: "SchneireM221",
     stock: 250,
   };

  //  agregar = await productManager.addProduct(product); // Producto 1
  //  console.log(agregar);

   product = {
     // Producto 2
     title: "M241",
     description: "PLC",
     price: 450,
     thumbnail:
       "https://cdn.bpsolucioneselectricas.com.ar/uploads/1591999559_UEYxMzAyMjBfNDAwMHg0MDAwLnBuZw==.jpg",
     code: "SchneireM241",
     stock: 100,
   };

  //  agregar = await productManager.addProduct(product); // Producto 1
  //  console.log(agregar);

   product = {
     // Producto repetido
     title: "M241",
     description: "PLC",
     price: 450,
     thumbnail:
       "https://cdn.bpsolucioneselectricas.com.ar/uploads/1591999559_UEYxMzAyMjBfNDAwMHg0MDAwLnBuZw==.jpg",
     code: "SchneireM241",
     stock: 100,
   };

  //  agregar = await productManager.addProduct(product); // Producto 1
  //  console.log(agregar);

   product = {
     // Producto 3
     title: "Zelio",
     description: "Programmable relay",
     price: 135,
     thumbnail:
       "https://download.schneider-electric.com/files?p_Doc_Ref=SR_531_CPFJR16030&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
     code: "SchneireZelio",
     stock: 685,
   };

  //  agregar = await productManager.addProduct(product); // Producto 1
  //  console.log(agregar);

  //  let segundaConsulta = await productManager.getProducts(); // Imprime el array completo
  //  console.log(segundaConsulta);

  //  let buscarId1 = await productManager.getProductById(2); // busca e imprime el elemento con id = 2
  //  console.log(buscarId1);

  //  let buscarId2 = await productManager.getProductById(4); // busca e imprime el elemento con id = 4
  //  console.log(buscarId2);
};

func ();