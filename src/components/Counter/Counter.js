import { Component, useState, xml } from "@odoo/owl";

// Component Documentation: https://github.com/odoo/owl/blob/master/doc/reference/component.md
export class Counter extends Component {
    setup() {
        this.state = useState({ count: this.props.start });
    }
    
    increment() {
        this.state.count++;
    }
}

// Template documentation: https://github.com/odoo/owl/blob/master/doc/reference/templates.md
Counter.template = xml`
<button t-on-click="increment" class="bg-blue-500 hover:bg-indigo-700 text-white p-2 m-2 rounded-md">
<t t-esc="state.count"/> Bug(s)
</button>
`;