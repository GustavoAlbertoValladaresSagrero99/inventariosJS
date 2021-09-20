export default class Inventario
{
    constructor()
    {
        this._registroProductos = new Array(20);
        this._items = 0;
        this._tablaRegistros = document.querySelector("#tabla");
    }

    agregarProducto(producto)
    {
        let pos = this.buscarCodigo(producto.getCodigo());
        if (pos >= 0) {
          return false;
        }
    
        this._setProduct(producto);
        this._items++;
        console.log(this._registroProductos)
        return true;
    }

    _setProduct (index, product) {
        this._registroProductos[index] = product;
    }

    _setProduct (product) {
        this._registroProductos[this._items] = product;
    }

    eliminarPorCodigo(codigo)
    {
        console.log(codigo)
        let pos = this.buscarCodigo(codigo);
        if(pos >= 0)
        {
            let prod = this._registroProductos[pos];
            this._eliminar(pos, this._registroProductos.length-1);
            this._items--;
            this.refreshTable(this._tablaRegistros,);
            return prod;
        }

        return false;
    }

    _eliminar(inicio, fin)
    {
        for(let i=inicio+1; i <= fin; i++)
        {
            this._registroProductos[inicio] = this._registroProductos[i];
            inicio++;
        }
        this._registroProductos[this._registroProductos.length-1] = null;
    }

    buscarCodigo(codigo)
    {
        let found = false;
        let position = -1;
        let index = 0;
     
        while(!found && index < this._items) {
            if(this._registroProductos[index].getCodigo() == codigo) {
                found = true;
                position = index;
            } else {
                index += 1;
            }
        }
        return position;
    }

    searchProduct (codigo) {
        let pos = this.buscarCodigo(codigo);
        console.log(pos)
        if (pos >= 0) {
            let data = [];
            data.push(this._registroProductos[pos]);
            console.log(data);
            this.refreshTable(this._tablaRegistros, data);
        } else {
            alert("el producto no se encuentra");
        }
    }

    
    _mostrar(product, table)
    {
        let row = table.insertRow(-1);
        let colCode= row.insertCell(0);
        let colName = row.insertCell(1);
        let colUnit = row.insertCell(2);
        let colCost = row.insertCell(3);
        let colTotal = row.insertCell(4);
        let colActions = row.insertCell(5);
    
        row.setAttribute("id", `row${product.getCodigo()}`);
        colCode.setAttribute("id", `colCode${product.getCodigo()}`);
        colName.setAttribute("id", `colName${product.getCodigo()}`);
        colUnit.setAttribute("id", `colUnit${product.getCodigo()}`);
        colCost.setAttribute("id", `colCost${product.getCodigo()}`);
        colTotal.setAttribute("id", `colTotal${product.getCodigo()}`);
        colActions.setAttribute("id", `colActions${product.getCodigo()}`);
        colActions.setAttribute("class", "actions");
    
        colCode.innerHTML = product.getCodigo();
        colName.innerHTML = product.getNombre();
        colUnit.innerHTML = product.getCantidad();
        colCost.innerHTML = `$${product.getPrecio()}`;
        colTotal.innerHTML = `$${product.getPrecioTotal()}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.value = product.getCodigo();
        deleteBtn.type = "button";
        deleteBtn.textContent = "Eliminar"
        deleteBtn.addEventListener('click', () => {this.eliminarPorCodigo(deleteBtn.getAttribute('value'))});
        colActions.appendChild(deleteBtn);
    }

    listar()
    {
        
    }

    listarInvertido()
    {

    }

    refreshTable (table, data) {
        let limit;
        if (data === undefined) {
            data = this._registroProductos;
            limit = this._items
        } else {
            limit = data.length
        }
        table.innerHTML = "";
        console.log(data)
        for (let i = 0; i < limit; i++) {
            this._mostrar(data[i], table);
        }
    }

    
}