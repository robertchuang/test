class MyMain extends HTMLElement{
             static style=`
                main{
                    height:200px;line-height:200px;
                    text-align:center;
                    font-size:1.2rem;font-weight:bold;
                    background-color:#dddddd;
                }
             `;
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
                const main=document.createElement("main") ;
                main.textContent="Welcome";
                this.shadowRoot.appendChild(main);
            }
}
export default MyMain; 