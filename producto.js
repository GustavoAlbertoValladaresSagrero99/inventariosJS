export default class Producto
{
    constructor(codigo, nombre, cantidad, precio)
    {
        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
    }

    getCodigo()
    {
        return this._codigo;
    }

    getNombre()
    {
        return this._nombre;
    }

    getCantidad()
    {
        return this._cantidad;
    }

    getPrecio()
    {
        return this._precio;
    }

    getPrecioTotal()
    {
        return this._cantidad * this._precio;
    }


    static readForm() {
        let code = document.querySelector("#code").value;
        let name = document.querySelector("#name").value.trim();
        let unit = Number(document.querySelector("#unit").value);
        let cost = Number(document.querySelector("#cost").value);
    
        if (code && name && unit && cost) {
          document.querySelector("form").reset();
          return new Producto(code, name, unit, cost);
        }
    
        return false;
      }
} 
