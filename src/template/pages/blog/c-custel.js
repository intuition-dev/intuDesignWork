import { AbsSlotCustel } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.25/slotCustel/slotCustel/AbsSlotCustel.min.js';
class Custel1 extends AbsSlotCustel {
  template = `
        <style></style>
        <b>I'm a Cust. El</b>
        <slot></slot>`;

  constructor() {
    super();
    this.setup(this.template); // call the helper method from the base class
    this.sr.addEventListener('click', function (e) { // sr is shadow root in base class
      console.log(e.composedPath()[0]);
    });
    defEventFlux.doAction('c-custel-x', { a: 'b', c: 'd' });
  }

  static get observedAttributes() { return ['items', 'bla2']; }

  attributeChangedCallback(aName, oldVal, newVal) {
    console.log('custel received message', aName, newVal);
  }
}

customElements.define('c-custel', Custel1);