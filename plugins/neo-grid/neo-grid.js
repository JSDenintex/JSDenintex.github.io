import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { Grid, GridHeader, GridRow, GridCell } from 'https://cdn.jsdelivr.net/npm/gridjs@6.0.6/dist/gridjs.production.min.js';

export class MyGrid extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-grid',
      fallbackDisableSubmit: false,
      description: 'Display object as a grid',
      iconUrl: "group-control",
      groupName: 'Visual Data',
      version: '1.3',
      properties: {
        dataobject: {
          type: 'string',
          title: 'Object',
          description: 'Test'
        },
      },
      standardProperties: {
        fieldLabel: true,
        readOnly: true,
        required: true,
        description: true,
      }
    };
  }
  
  static properties = {
    dataobject: '[]'
  }

  constructor() {
    super();
  }

  firstUpdated() {
    this.grid = new Grid({
      search: false,
      editable: true
    });
    this.shadowRoot.appendChild(this.grid.getTable());
    this.renderTable();
  }

  renderTable() {
    if (!this.dataobject) {
      this.grid.setData([]);
      return;
    }

    const data = JSON.parse(this.dataobject);
    const headers = Object.keys(data[0]);
    this.grid.setData([headers, ...data.map(Object.values)]);
  }

  render() {
    return html``;
  }
}

const elementName = 'neo-grid';
customElements.define('neo-grid', MyGrid);