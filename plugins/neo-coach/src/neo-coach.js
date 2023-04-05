import { LitElement, html, css } from 'lit';

class coachelement extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-coach',
      fallbackDisableSubmit: false,
      description: 'Add a form filling coach to track and inform on the time taken to fill a form',
      iconUrl: "users",
      groupName: 'Admin tools',
      version: '1.0',
      properties: {
        formtime: {
          title: 'Time used',
          description: 'Output for minutes spent filling the form',
          type: 'number',
          defaultValue: 0,
          isValueField: true,
        },
        reminderinterval: {
          type: 'number',
          title: 'Reminder interval',
          description: 'Please provide the number of minutes you want the pop-up reminder to happen'
        },
        remindermessage: {
          type: 'string',
          title: 'Reminder message',
          description: 'Message used in the reminder pop-up'
        },
        timelimit: {
          type: 'number',
          title: 'Time limit',
          description: 'Time limit in minutes you want for filling the form'
        }, 
        timesup: {
          type: 'string',
          title: 'Times up message',
          description: 'Message used in the times up pop-up'
        },

      },
      standardProperties: {
        fieldLabel: true,
        description: true,
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    // start the timer when the element is added to the page
    this.timerId = setInterval(() => {
      console.log('Timer tick');
      this.formtime += 1;
      if (this.formtime === this.reminderinterval) {
        this.showReminder();
      }
      if (this.formtime === this.timelimit) {
        this.showTimesUp();
      }
    }, 60000); // 1 minute interval
  }
  

  disconnectedCallback() {
    super.disconnectedCallback();

    // clear the timer when the element is removed from the page
    clearInterval(this.timerId);
  }

  showReminder() {
    // show a notification in the top right of the page
    const notification = new Notification('Form Reminder', {
      body: this.remindermessage,
      icon: 'path/to/icon.png'
    });
  }

  showTimesUp() {
    // show a modal that disables the page and prompts the user to refresh
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.right = '0';
    modal.style.bottom = '0';
    modal.style.left = '0';
    modal.style.background = 'rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = '9999';
    modal.innerHTML = `
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px;">
        <p>${this.timesup}</p>
        <button @click=${() => window.location.reload()}>Refresh</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  render() {
    // convert formtime to hours and minutes
    const hours = Math.floor(this.formtime / 60);
    const minutes = this.formtime % 60;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    return html`
      <p>Time spent filling form: ${formattedTime}</p>
      <slot></slot>
    `;
  }
  
}

customElements.define('neo-coach', coachelement);