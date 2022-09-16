class Inventario {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        this.productos.push(producto);
    }

    eliminar(codigo) {
        let producto = this.buscar(codigo);

        if (producto != null) {
            for (let i = 0; i < this.productos.length; i++) {
                if (this.productos[i].codigo == codigo) {
                    for (let j = i; j < this.productos.length; j++) {
                        this.productos[j] = this.productos[j + 1];
                    }
                }
            }

            this.productos.pop();
            return true;
        }
    }

    buscar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo == codigo) {
                return this.productos[i];
            }
        }

        console.log("No existe el producto");
        return null;
    }

    listado() {
        let listado = "";

        for (let i = 0; i < this.productos.length; i++) {
            listado += `${i + 1}.- ${this.productos[i].info()}\n`;
        }

        return listado;
    }

    listadoInverso() {
        let listadoInverso = "";

        for (let i = this.productos.length - 1, j = 0; i >= 0; i--, j++) {
            listadoInverso += `${j + 1}.- ${this.productos[i].info()}\n`;
        }

        return listadoInverso;
    }
}

class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info() {
        return `Código: ${this.codigo}
        Nombre: ${this.nombre}
        Cantidad: ${this.cantidad}
        Costo: $${this.costo}`;
    }
}
