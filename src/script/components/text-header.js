class TextHeader extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowDOM.innerHTML = `
  
          <style>
          .headline{
              font-weight: 700;
              font-size: 3em;
          }
          </style>

            <h5>WEATHER FORECAST</h5>
            <h1 class="headline">Check your weather forecast in your city...</h1>
            <p class="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum quam illo
                similique expedita repellat nihil porro eos odit deleniti.
            </p>
            
          `;
    }
  }
   
  customElements.define("text-header", TextHeader);