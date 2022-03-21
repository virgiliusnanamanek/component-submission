class AppNav extends HTMLElement {
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
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          .navbar {
              background-color: #407BFF;
              width: 100%;
              left: 0;
              top: 0;
              padding-top: 0;
              margin: 0 auto;
              display: inline-block;
              text-align: center;
              box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
              position : sticky;
          }
          .navbar .navTitle{
              font-size: 1.5em;
              color: #fff;
          }
          
      </style>
          
          <nav class="navbar" id="navbar">
              <h1 class="navTitle" id="appTitle">WEATHER APP</h1>
          </nav>
          
          `;
    }
  }
  
  customElements.define("app-nav", AppNav);
  