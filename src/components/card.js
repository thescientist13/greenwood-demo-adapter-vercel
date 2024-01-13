import { LitElement, html, css } from 'lit';

export class Card extends LitElement {
  static properties = {
    title: '',
    thumbnail: ''
  };
  static styles = css`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid #818181;
      width: fit-content;
      border-radius: 10px;
      padding: 2rem 1rem;
      height: 680px;
      justify-content: space-between;
      background-color: #fff;
      overflow-x: hidden;
    }
    button {
      background: var(--color-accent);
      color: var(--color-white);
      padding: 1rem 2rem;
      border: 0;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
    img {
      max-width: 500px;
      min-width: 500px;
      width: 100%;
    }
    h3 {
      font-size: 1.85rem;
    }

    @media(max-width: 768px) {
      img {
        max-width: 300px;
        min-width: 300px;
      }
      div {
        height: 500px;
      }
    }
  `;

  constructor() {
    super();

    console.log('helllo???');
    this.title;
    this.thumbnail;
  }

  selectItem() {
    alert(`selected item is => ${this.title}!`);
  }

  render() {
    const { title, thumbnail } = this;
    console.log('render start', { title, thumbnail })
    if(!title && !thumbnail) {
      return;
    }
    console.log({ title, thumbnail })

    return html`
      <div>
        <h3>${title}</h3>
        <img src="${thumbnail}" alt="${title}" loading="lazy" width="100%">
        <button @click="${this.selectItem}">View Item Details</button>
      </div>
    `;
  }
}

customElements.define('app-card', Card);