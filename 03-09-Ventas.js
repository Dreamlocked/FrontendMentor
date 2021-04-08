class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProductos() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `
        idProducto: ${this._idProducto}, nombre: ${this._nombre}
        , precio: ${this._precio}. 
        `;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProductos(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
    } else {
      console.log("No se puede agregar más productos");
    }
  }

  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }

  mostrarOrdene() {
    let productosOrden = " ";

    for (let producto of this._productos) {
      productosOrden += producto.toString() + " ";
    }

    console.log(
      `Orden: ${
        this._idOrden
      } Total: ${this.calcularTotal()}, Productos: ${productosOrden}`
    );
  }
}