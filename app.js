import QuickSort from "./quicksort.js";
import Producto from "./producto.js";
import Inventario from "./inventario.js";

class App
{
    constructor()
    {
        this._inventario = new Inventario();
        this._btnAdd = document.querySelector("#btnAgregar");
        this._btnAdd.addEventListener("click", this._addProduct);
        this._alerta = document.querySelector(".task");
        this._alertaMensaje = document.querySelector("#taskMensaje");
        this._alertaResultado = document.querySelector("#taskResultado");
        this._table = document.querySelector("#tabla");
        this._btnSearch = document.querySelector("#btnSearch");
        this._searchBar = document.querySelector("#searchBar");
        this._btnSearch.addEventListener("click", () => { this._inventario.searchProduct(this._searchBar.value) });

        // let buttons = document.getElementsByClassName('deleteBtn');
        // if (buttons != undefined) {
        //   buttons.forEach(element => {
        //     element.addEventListener('click', this._deleteProduct(element.getAttribute('value')));
        //   });
        // }
    }

    _addProduct = () => {
        let prod = Producto.readForm();
    
        if (!prod) {
            this._alerta.style.display = "block";
          this._alertaMensaje.innerHTML = "Error";
          this._alertaResultado.innerHTML = "Todos los campos son obligatorios";
          return;
        }
        let added = this._inventario.agregarProducto(prod);
        
    
        if (!added) {
            this._alertaMensaje.innerHTML = "Producto";
            this._alertaResultado.innerHTML = prod.getNombre() + " ya existe!";
          return;
        } else {
          this._inventario.refreshTable(this._table);
        }
    
        this._alertaMensaje.innerHTML = "Se agrego";
        this._alertaResultado.innerHTML = prod.getNombre();


      };

      _deleteProduct = (codigo) => {
        this._inventario.eliminarPorCodigo(codigo);
      }
    }


    new App();

    
