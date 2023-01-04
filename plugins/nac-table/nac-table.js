import {css, html, LitElement, styleMap} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


export class MyTable extends LitElement {
  static async getMetaConfig() {
    return {
      title: 'nac-table',
      fallbackDisableSubmit: false,
      version: '1.2',
    };
  }
  
  async loadData() {
    try {
      const response = await fetch('https://jsdenintex.github.io/plugins/nac-table/data.json');
      this.data = await response.json();
      this.requestUpdate();
    } catch (error) {
      console.error(error);
    }
  }

  constructor() {
    super();
    this.loadData();
  }

  render() {
    if (!this.data) {
      return html``;
    }
  
    const rows = this.data.map(row => html`
      <tr>
        ${Object.values(row).map(cell => html`<td>${cell}</td>`)}
      </tr>
    `);

    const headers = Object.keys(this.data[0]).map(header => html`<th>${header}</th>`);

    return html`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <table class="table table-striped">
        <thead>
          <tr>
            ${headers}
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  }
}

const elementName = 'nac-table';
customElements.define('nac-table', MyTable);