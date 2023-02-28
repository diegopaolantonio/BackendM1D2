

const productManager = new ProductManager();

productManager.getProducts(); // Imprime el array vacio ya que no se agrego ningun producto todavia

productManager.addProduct(
  // Producto 1
  "M221",
  "PLC",
  220,
  "https://download.schneider-electric.com/files?p_Doc_Ref=PF130224&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
  "SchneireM221",
  250
);

productManager.addProduct(
  // Producto sin un campo
  //   "M221",
  "PLC",
  220,
  "https://download.schneider-electric.com/files?p_Doc_Ref=PF130224&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
  "SchneireM221",
  250
);

productManager.addProduct(
  // Producto 2
  "M241",
  "PLC",
  450,
  "https://cdn.bpsolucioneselectricas.com.ar/uploads/1591999559_UEYxMzAyMjBfNDAwMHg0MDAwLnBuZw==.jpg",
  "SchneireM241",
  100
);

productManager.addProduct(
  // Producto repetido
  "M241",
  "PLC",
  450,
  "https://cdn.bpsolucioneselectricas.com.ar/uploads/1591999559_UEYxMzAyMjBfNDAwMHg0MDAwLnBuZw==.jpg",
  "SchneireM241",
  100
);

https: productManager.addProduct(
  // Producto 3
  "Zelio",
  "Programmable relay",
  135,
  "https://download.schneider-electric.com/files?p_Doc_Ref=SR_531_CPFJR16030&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
  "SchneireZelio",
  685
);

productManager.getProducts(); // Imprime el array completo

productManager.getProductById(2); // busca e imprime el elemento con id = 2

productManager.getProductById(4); // busca e imprime el elemento con id = 4
