import { LitElement, html, css } from 'lit';

class rsFillerElement extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-rsfiller',
      fallbackDisableSubmit: false,
      description: 'Repeating section filler',
      iconUrl: "repeating-section",
      groupName: 'Form Tools',
      version: '1.0',
      properties: {
        rstarget: {
          title: 'Target class',
          type: 'string',
          description: 'Class name used to target repeating section'
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
      }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.rstarget = '';
  }

  firstUpdated() {
    console.log("firstUpdated is being called");
  
    const ntxRepeatingSections = this.parentElement.querySelectorAll('ntx-repeating-section');
    console.log("ntxRepeatingSections:", ntxRepeatingSections); 
  
    for (const ntxSection of ntxRepeatingSections) {
      const targetDiv = ntxSection.querySelector(`div.${this.rstarget}`);
      if (targetDiv) {
        console.log("Found a div with the target class");
  
        const button = ntxSection.querySelector("button.btn-repeating-section-new-row");
        console.log("Button:", button); 
  
        if (button) {
          console.log("Clicking the button");
          button.click(); 
          break; 
        }
      }
    }
  }

  render() {
    console.log("Class is: " + this.rstarget);
    return html`<p>Class: ${this.rstarget}</p>`;
  }
}

customElements.define('neo-rsfiller', rsFillerElement);