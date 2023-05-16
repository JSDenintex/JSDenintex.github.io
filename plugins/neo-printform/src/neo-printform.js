import { LitElement, html, css } from 'lit';

class templateElement extends LitElement {

  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-printform',
      fallbackDisableSubmit: false,
      description: 'Display a print button on a bar at the top of the form',
      iconUrl: 'https://jsdenintex.github.io/plugins/neo-printform/dist/printing.svg',
      groupName: 'Admin tools',
      version: '1.0',
      standardProperties: {
        fieldLabel: true,
        description: true,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .print-btn {
        display: inline-block;
        font-family: Open Sans,Helvetica,Arial,sans-serif;
        font-weight: 400;
        color: #161718;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        user-select: none;
        border: 1px solid;
        padding: .525rem .75rem;
        font-size: .875rem;
        line-height: 1;
        border-radius: 4px;
        transition: all .2s ease-in-out;
        margin-left:10px;
    }
    `;
  }

  handlePrintButtonClicked() {
    const elements = document.querySelectorAll('.d-none');
    elements.forEach((element) => {
      element.classList.toggle('d-print-block');
    });

    window.print();

    window.addEventListener('afterprint', () => {
      elements.forEach((element) => {
        element.classList.toggle('d-print-block');
      });
    });
  }

  constructor() {
    super();
  }

  render() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      return html`
      `;
    }
    // Render the print button for non-iOS devices
    return html`
    <button class='print-btn' @click="${this.handlePrintButtonClicked}">
          <!-- Print button content -->
    </button>
    `;
  }
  
}

customElements.define('neo-printform', templateElement);