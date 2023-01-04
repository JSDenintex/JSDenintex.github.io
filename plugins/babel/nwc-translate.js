import {css, html, LitElement, styleMap} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class TranslateMod extends LitElement {
    
    static getMetaConfig() {
        // plugin contract information
        return {
            title: 'translate-mod',
            fallbackDisableSubmit: false,
            description: 'Non interactable plugin to translate elements of Nintex Forms',
            iconUrl: "multiline-text",
            groupName: 'Translators',
            version: '1.0',
            properties: {
                Signature: {
                    type: 'string',
                    title: 'Select to sign',
                    description: 'Replacement text for "Select to sign" located in the signature control'
                },
            },
            standardProperties: {
                readOnly: true,
                required: true,
                description: true,
            }
        };
    }
  
    render() {
      return html`
        <script>
            function setSignatureValue() {
            alert( 'Function is calling' );
            const element = document.querySelector('ntx-signature div div div div h5.d-print-none.ng-star-inserted');
            element.innerHTML =${this.Signature};
            }
            setSignatureValue()
        </script>
      `;
    }
}

// registering the web component.
const elementName = 'translate-mod';
customElements.define('translate-mod', TranslateMod);


