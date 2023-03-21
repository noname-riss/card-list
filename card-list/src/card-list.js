import { LitElement, html, css } from 'lit';
import "university-class-card/src/university-class-card";
import "sports-card/src/sports-card";


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {


  static get properties(){
    return{
      classes: {type: Array},
      universityName: {type: String},
    }
  }

  constructor()
  {
    super();
    this.classes=[];
    this.universityName="Penn State";
    this.updateClasses();
  }

 updateClasses() {
  const address = new URL('../assets/array-list.json',import.meta.url).href;
 fetch(address).then((response) =>{
       return response.json();
   }).then((data)=>{
  this.classes = data;
  });
 console.log(data);
  }

  static get styles(){
    return css`
    :host{
      display: block;
    }
    .wrapper{
      border: 2px solid black;
      display: flex;
    }
    .item{
      display: inline-flex;
    }

    `
  }



  render(){
    return html`
    <h2>${this.universityName}</h2>
    <div class="wrapper">
      ${this.classes.map(className => html`
      <div class="item">
        <university-class-card university="${className.university}" class="${className.class}" bottomImageText="${className.bottomImageText}" topImageText="${className.topImageText}" alternateColor="${className.alternateColor}">
        </university-class-card>
        </div>

      `)}
      </div>
    `;
  }
}

customElements.define('card-list', CardList);
