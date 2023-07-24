import { LitElement, html, css } from 'lit';

class unitElement extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-unit',
      fallbackDisableSubmit: false,
      description: 'Control for diplaying units of measurement',
      iconUrl: "https://jsdenintex.github.io/plugins/neo-unit/dist/unit-icon.svg",
      groupName: 'Custom controls',
      version: '1.0',
      properties: {
        unittype: {
          title: 'Choice field',
          type: 'string',
          enum: ['kg.', 'ltr.', 'km'],
          verticalLayout: true,
          defaultValue: 'kg.',
        },
        unitvalue: {
          type: 'number',
          title: 'Unit value',
          description: 'Decimal unit value',
          isValueField: true,
          staticProperties: true,
        },
        decimalplaces: {
          type: 'integer',
          title: 'Decimal place',
          description: 'enter -1 for none, 1 for .0, 2 for .01 etc.',
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
      },
      events: ["ntx-value-change"],
    };
  }
  
  constructor() {
    super();
    this.unittype = "kg."
    this.unitvalue = ""
    this.decimalplaces = ""
  }

  static get styles() {
    const { cssRules } = document.styleSheets[0]
    const globalStyle = css([Object.values(cssRules).map(rule => 
    rule.cssText).join('\n')])
    return [
      globalStyle,
      css`
        :host {
          display: block;
        }
        .neo-unit-control {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          width: 100%;
        }
        
        .neo-unit-control .input-unit-group-append {
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
          border-color: #898F94;
          background: #FFFFFF;
          font-size: 14px;
        }
        
        .neo-unit-control .input-unit-group-append .neo-btn-input-icon:last-child {
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
        }
        
        .neo-unit-control .neo-unit-btn-icon {
          color: #006BD6;
          font-size: 20px;
          padding-left: 7px;
          padding-right: 7px;
        }
        
        .neo-unit-control .input-unit-group-append > .neo-unit-btn:last-child {
          border-radius: 4px 0 0 4px;
          cursor: default;
          border-left: 1px solid;
          border-right: none;
          border-color: inherit;
          min-width: 36px;
          color: #006bd6;
          font-size: 20px;
          font-style: normal;
          overflow: hidden;
        }
        
        .neo-btn-input-icon {
          border-left: 1px solid;
          border-right: 1px solid;
          border-top: 1px solid;
          border-bottom: 1px solid;
          border-color: inherit;
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 0;
          background-color: transparent;
          cursor: pointer;
        }
        
      .neo-unit-control .nx-zinc-control-input .input-group {
          display: flex;
          flex: 1;
      }

      .neo-unit-control > div.nx-zinc-control-input.input-group > ntx-simple-number > input{
        --bs-white: #fff;
        --bs-black: #000;
        --bs-red: #e10d11;
        --bs-orange: #e06e18;
        --bs-yellow: #ffcb00;
        --bs-green: #09894e;
        --bs-blue: #2070d0;
        --bs-teal: #5bc0de;
        --bs-pink: #ff5b77;
        --bs-purple: #613d7c;
        --bs-gray-100: #fafafa;
        --bs-gray-200: #e6e6e6;
        --bs-gray-300: #cbcbcb;
        --bs-gray-400: #949494;
        --bs-gray-500: #5b5b5b;
        --bs-gray-600: #404040;
        --bs-gray-700: #000;
        --bs-primary: #006bd6;
        --bs-secondary: #cbcbcb;
        --bs-success: #008738;
        --bs-inverse: #fff;
        --bs-info: #006bd6;
        --bs-warning: #ffcf1a;
        --bs-danger: #e60000;
        --bs-light: #fafafa;
        --bs-dark: #5b5b5b;
        --bs-primary-rgb: 0,107,214;
        --bs-secondary-rgb: 203,203,203;
        --bs-success-rgb: 0,135,56;
        --bs-inverse-rgb: 255,255,255;
        --bs-info-rgb: 0,107,214;
        --bs-warning-rgb: 255,207,26;
        --bs-danger-rgb: 230,0,0;
        --bs-light-rgb: 250,250,250;
        --bs-dark-rgb: 91,91,91;
        --bs-white-rgb: 255,255,255;
        --bs-black-rgb: 0,0,0;
        --bs-body-color-rgb: 22,23,24;
        --bs-body-bg-rgb: 241,241,241;
        --bs-font-sans-serif: "Open Sans",Helvetica,Arial,sans-serif;
        --bs-font-monospace: Menlo,Monaco,Consolas,"Courier New",monospace;
        --bs-gradient: linear-gradient(180deg,#ffffff26,#fff0);
        --bs-body-font-family: Open Sans,Helvetica,Arial,sans-serif;
        --bs-body-font-size: .875rem;
        --bs-body-font-weight: normal;
        --bs-body-line-height: 1.3;
        --bs-body-color: #161718;
        --bs-body-bg: #f1f1f1;
        --bs-border-width: 1px;
        --bs-border-style: solid;
        --bs-border-color: #e6e6e6;
        --bs-border-color-translucent: rgba(0,0,0,.175);
        --bs-border-radius: 4px;
        --bs-border-radius-sm: 2px;
        --bs-border-radius-lg: 6px;
        --bs-border-radius-xl: 1rem;
        --bs-border-radius-2xl: 2rem;
        --bs-border-radius-pill: 50rem;
        --bs-link-color: #006bd6;
        --bs-link-hover-color: #006bd6;
        --bs-code-color: #bd4147;
        --bs-highlight-bg: #ffcb00;
        --ntx-form-theme-font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
        --ntx-form-theme-color-primary: #006BD6;
        --ntx-form-theme-color-secondary: #161718;
        --ntx-form-theme-color-border: #898F94;
        --ntx-form-theme-color-input-background: #FFFFFF;
        --ntx-form-theme-color-page-background: #EFF0F0;
        --ntx-form-theme-color-form-background: #FFFFFF;
        --ntx-form-theme-border-radius: 4px;
        --ntx-form-theme-text-input-size: 14px;
        --ntx-form-theme-text-label-size: 14px;
        --ntx-form-control-line-height: 1.25;
        --ntx-form-color-error: #e60000;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        --bs-gutter-x: 30px;
        --bs-gutter-y: 0;
        word-break: break-word;
        user-select: none;
        box-sizing: border-box;
        margin: 0;
        appearance: none;
        display: block;
        font-weight: 400;
        line-height: 1;
        padding: .4375rem .75rem;
        transition: none;
        width: 100%;
        height: auto;
        border: 1px solid #898f94;
        text-align: right;
        caret-color: #161718;
        color: #161718;
        border-color: #898F94;
        font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
        background: #FFFFFF;
        font-size: 14px;
        border-radius: 0 4px 4px 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      `
    ];
  }

  onChange(e) {
    const customEvent = new CustomEvent('ntx-value-change', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: e.target.value,
    });
  
    this.dispatchEvent(customEvent);
  }
  
  render() {
    return html`
      <div class="neo-unit-control">
        <div class="input-unit-group-append">
          <button type="button" class="neo-btn-input-icon neo-unit-btn">
            <span>${this.unittype}</span>
          </button>
        </div>
        <div class="nx-zinc-control-input input-group">
          <ntx-simple-number>
            <input type="text" 
              data-simple-control="true"
              ntxmaskablenumberinputvalueaccessor=""
              class="form-control nx-theme-input-1 ng-untouched ng-pristine ng-valid"
              inputmode="decimal"
              decimalplaces=${this.decimalplaces}
              @blur=${this.onChange}
            >
          </ntx-simple-number>
        </div>
      </div>
    `;
  }  
}

customElements.define('neo-unit', unitElement);
