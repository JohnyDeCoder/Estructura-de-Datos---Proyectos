class Inventario {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        let i = this.productos.length;

        if (i == 0) {
            this.productos[i] = producto;
            return true;
        }

        if (this.productos.length > 0) {
            while (producto.codigo < this.productos[i - 1].codigo) {
                this.productos[i] = this.productos[i - 1];
                i--;
            }
            this.productos[i] = producto;

            return true;
        }

        return false;
    }

    eliminar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === codigo) {
                for (let j = i; j < this.productos.length; j++) {
                    this.productos[j] = this.productos[j + 1];
                }

                this.productos.pop();
                return true;
            }
        }

        return false;
    }

    buscar(codigo) {
        let inicio = 0, fin = this.productos.length - 1, medio = Math.floor((inicio + fin) / 2);

        if (codigo === this.productos[medio].codigo) {
            return this.productos[medio];
        }

        while (codigo !== this.productos[medio].codigo) {
            if (inicio > fin) {
                return null;
            }
            else if (codigo < this.productos[medio].codigo) {
                fin = medio - 1;
            }
            else {
                inicio = medio + 1;
            }

            medio = Math.floor((inicio + fin) / 2);
        }

        if (codigo === this.productos[medio].codigo) {
            return this.productos[medio];
        }
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

        for (let i = this.productos.length - 1, j = 1; i >= 0; i--, j++) {
            listadoInverso += `${j}.- ${this.productos[i].info()}\n`;
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