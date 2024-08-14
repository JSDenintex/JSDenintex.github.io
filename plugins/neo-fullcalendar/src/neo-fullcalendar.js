import { LitElement, html, css } from 'lit';
import '@fullcalendar/web-component';

class fullcalendarElement extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-fullcalendar',
      fallbackDisableSubmit: false,
      description: '',
      iconUrl: "date-picker",
      groupName: 'neo',
      version: '1.0',
      properties: {
        inputobj: {
          type: 'object',
          title: 'Calendar Object Input',
          description: 'Input calendar object if used before'
        },
        outputobj: {
          type: 'object',
          title: 'Calendar Output Input',
          description: 'Do not use',
          isValueField: true,
        },
      },
      events: ["ntx-value-change"],
      standardProperties: {
        fieldLabel: true,
        description: true,
      }
    };
  }

  static properties = {
    inputobj: { type: Object },
    outputobj: { type: Object },
  };

  static get styles() {
    return css`
      :host {
        display: block;
      }
      full-calendar {
        width: 100%;
        height: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.inputobj = {};
    this.outputobj = {};
  }

  firstUpdated() {
    this.updateCalendar(this.inputobj);
  }

  updated(changedProperties) {
    if (changedProperties.has('inputobj')) {
      this.updateCalendar(this.inputobj);
    }
  }

  updateCalendar(inputObj) {
    const calendar = this.shadowRoot.querySelector('full-calendar');
    if (calendar) {
      calendar.options = {
        initialView: 'dayGridMonth', // You can set this dynamically based on your inputObj
        events: inputObj.events || [], // Set the events from inputObj
        dateClick: this.handleDateClick.bind(this), // Handle date clicks
        eventClick: this.handleEventClick.bind(this), // Handle event clicks
        ...inputObj // Spread any other properties from inputObj into the options
      };
    }
  }
  

  handleDateClick(info) {
    const detail = { date: info.dateStr };
    this.dispatchEvent(new CustomEvent('ntx-value-change', {
      detail,
      bubbles: true,
      composed: true
    }));
  }

  handleEventClick(info) {
    const detail = { event: info.event };
    this.dispatchEvent(new CustomEvent('ntx-value-change', {
      detail,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <full-calendar shadow options='{
      "headerToolbar": {
        "left": "prev,next today",
        "center": "title",
        "right": "dayGridMonth,dayGridWeek,dayGridDay"
      }
    }' />
    `;
  }
}

customElements.define('neo-fullcalendar', fullcalendarElement);
