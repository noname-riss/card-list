import { LitElement, html, css } from 'lit';
import "university-class-card/src/university-class-card";
import "sports-card/src/sports-card";


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    university-class-card{
    display: inline-flex;
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
  <sports-card>Test1</sports-card>
  <sports-card>Test2</sports-card>
  <sports-card>Test3</sports-card>
  <sports-card>Test4</sports-card>
  <sports-card>Test5</sports-card>
    `;
  }
}

customElements.define('card-list', CardList);
