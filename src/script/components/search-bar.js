class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    get value(){
        return this.shadowDOM.getElementById('input').value;
    }
    render(){
        this.shadowRoot.innerHTML = `
        <style>
        #input{
            padding: 14px 30px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            border: none;
            font-family: 'Quicksand', sans-serif;
            border-radius: 4px;
        }
        .inputCity{
            margin-top: 30px;
        }
        #btnGo{
            margin-left: 5px;
            padding: 14px 30px;
            font-family: 'Quicksand', sans-serif;
            background-color: #407BFF;
            border : none;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            cursor: pointer;
            font-weight: bold;
            color: #fff;
            border-radius: 4px;
        }
        #btnGo:hover{
            background-color: aqua;
            transition: all ease-in 0.45s;
        }
        </style>
        <div class="inputCity">
            <input type="text" id="input" placeholder="Masukan nama kota...">
            <button type="submit" id="btnGo">Go</button>
        </div>
        `
        const btnGo = this.shadowDOM.getElementById('btnGo');
        btnGo.addEventListener('click', this._clickEvent);
    }
}
customElements.define('search-bar', SearchBar);