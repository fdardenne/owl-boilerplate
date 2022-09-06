import "./style.css"
import { App, Component, xml } from "@odoo/owl";
import { Counter } from "./components/Counter/Counter";

class Root extends Component {}

Root.components = { Counter };
Root.template = xml`
<div class="h-screen flex justify-center items-center flex-col">
  <h2 class="text-2xl"> OWL + Tailwind + Vite </h2>
  <img src="/owl.png" class="object-scale-down h-48 w-96"/>
  <span> Feed the owl: <Counter start="10"/></span>
</div>
`;

const app = new App(Root, { dev:true });
app.mount(document.body);
