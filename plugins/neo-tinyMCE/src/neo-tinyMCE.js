import { LitElement, html, css } from 'lit';

class tinyMCEElement extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-tinymce',
      fallbackDisableSubmit: false,
      description: '',
      iconUrl: "",
      groupName: 'Custom controls',
      version: '1.0',
      properties: {
        htmlValue: {
          type: 'string',
          title: 'Default HMTL',
          description: 'Provide a variable or stringified html',
        },
        htmlOutput: {
          type: 'string',
          title: 'Output HMTL',
          description: 'Provide a variable or stringified html',
          isValueField: true,
        },
        apikey: {
          type: 'string',
          title: 'tinyMCE API Key',
          description: 'provide your tinyMCE API Key',
        },
      },
      events: ["ntx-value-change"],
      standardProperties: {
        fieldLabel: true,
        description: true,
      }
    };
  }

  createRenderRoot() {
    return this;
  }

  static properties = {
    htmlOutput: '',
    htmlValue: '',
    uniqueId: { type: String },
  };

  constructor() {
    super();
    this.uniqueId = `tiny-${Math.random().toString(36).substring(2, 11)}`;
    this.htmlValue = '';
    this.htmlOutput = '';
    this.tinymceLoaded = false;
    this.stylesheetLoaded = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    if (!window.tinymce) {
      console.log("script being added");
      if (!this.tinymceLoaded){
        await this.loadTinyMCEScript();
        this.tinymceLoaded = true;
      }
      this.initializeTinyMCE();
    }
    if (!this.stylesheetLoaded) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://cdn.tiny.cloud/1/${this.apikey || ''}/tinymce/6/skins/ui/oxide/content.min.css`;
      document.head.appendChild(link);
      this.stylesheetLoaded = true;
    }
  }
  
  loadTinyMCEScript() {
    return new Promise((resolve, reject) => {
      const apiKey = this.apikey || '';
      const script = document.createElement('script');
      script.src = `https://cdn.tiny.cloud/1/${apiKey}/tinymce/6.7.2-32/tinymce.min.js`;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  dispatchValueChange(newHtmlValue) {
    console.log('Editor content changed');
    console.log('New HTML Value:', newHtmlValue);
    const customEvent = new CustomEvent('ntx-value-change', {
      bubbles: false,
      cancelable: true,
      composed: true,
      detail: newHtmlValue,
    });
  
    setTimeout(() => this.dispatchEvent(customEvent), 100);
  }

  shouldUpdate(changedProperties) {
    return !(changedProperties.size === 1 && changedProperties.has('htmlOutput'));
  }

  async initializeTinyMCE() {
    // Check for an existing instance and clean it up if necessary
    const existingEditor = tinymce.get(this.uniqueId);
    if (existingEditor) {
      existingEditor.remove();
    }
  
    console.log("TinyMCE script loaded");
  
    const editableDiv = document.querySelector(`#${this.uniqueId}`);
    console.log("Editable Div:", editableDiv);

  if (editableDiv) {
    console.log("tinyMCE init");
    tinymce.init({
        target: editableDiv,
        inline: true,
        plugins: [
          'advlist', 'autoresize', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        autoresize_max_height: 500,
        autoresize_min_height: 200,
        statusbar: true,
        branding: false,
        setup: (editor) => {
          editor.on('init', () => {
            console.log('Editor initialized');
          });
          editor.on('blur', () => {
            if (editor.isDirty()) {
              console.log('Editor instance:', editor);
              const newHtmlValue = editor.getContent();
              this.dispatchValueChange(newHtmlValue);
              editor.setDirty(false);
              this.htmlValue = newHtmlValue
            }
          });
        },
      });
    }
  }
  
  render() {
    return html`
      <div>
        <div id="${this.uniqueId}" .innerHTML="${this.htmlValue}"></div>
      </div>
    `;
  }
}


customElements.define('neo-tinymce', tinyMCEElement);