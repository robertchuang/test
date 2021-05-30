class MyNav extends HTMLElement{
             static style=`
                nav{
                    display:flex;
                }
                nav>.title{
                    flex:none;width:200px;
                }
                nav>.menu{
                    flex:auto;text-align:right;
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
                const nav=document.createElement("nav") ;
                const title=document.createElement("div") ;
                title.className="title";
                title.textContent="我的網站";
                const menu=document.createElement("div");
                menu.className="menu";
                menu.textContent="我的選單";
                nav.appendChild(title);
                nav.appendChild(menu);
                this.shadowRoot.appendChild(nav);
            }
}
export default MyNav;        