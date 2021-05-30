class MyApp extends HTMLElement{
             static style=``;
             constructor(){
                super();
                this.attachShadow({mode:"open"});
                // 套用組件內部的 css
                this.styling();
                 // 畫出 <my-button-> 的HTML 結構
                this.render();
             }
             styling(){
                   this.stylesheet=document.createElement("style");
                   this.stylesheet.textContent=this.constructor.style;
                   this.shadowRoot.appendChild(this.stylesheet);
             }
             render(){
                const nav = document.createElement("my-nav");
                const main= document.createElement("my-main");
                this.shadowRoot.appendChild(nav);
                this.shadowRoot.appendChild(main);
            }
}
export default MyApp; 