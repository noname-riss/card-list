import { LitElement, html, css } from 'lit';
import "university-class-card/src/university-class-card";


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    university-class-card{
    border: 5px solid black;
    background-color: blue;
    display: inline-flex;
    margin: 82px auto 32px;
    padding: 0 16px;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
  }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
<university-class-card>My Classes</university-class-card>
  <university-class-card>IST 256</university-class-card>
  <university-class-card>METEO 3</university-class-card>
  <university-class-card>SRA 365</university-class-card>
  <university-class-card>GEOG 260</university-class-card>
    `;
  }
}

customElements.define('card-list', CardList);
