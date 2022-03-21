class WeatherDisplay extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode : 'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <style>
            .card{
                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
                height: 350px;
                border-radius: 4px;
                background-color : #fff;
                cursor : pointer;
            }
            </style>
            <div class="card">
            </div>
        `
    }
}
customElements.define('weather-display', WeatherDisplay);
