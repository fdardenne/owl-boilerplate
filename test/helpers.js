// From: https://github.com/odoo/owl/blob/master/doc/learning/how_to_test.md#unit-tests

let lastFixture = null;

/** 
* Create a fixture div and append it to the DOM.
* If a fixture already exists, it will be removed from the DOM and replaced by the new one.
* @return {HTMLElement} Return the test fixture
*/
export function makeTestFixture() {
  let fixture = document.createElement("div");
  document.body.appendChild(fixture);
  if (lastFixture) {
    lastFixture.remove();
  }
  lastFixture = fixture;
  return fixture;
}

/** 
* Wait the next tick.
* @summary Owl does wait for the next animation frame to actually update the DOM. This is why it is necessary to wait with the nextTick (or other methods) to make sure that the DOM is up-to-date.
*/
export async function nextTick() {
  await new Promise((resolve) => setTimeout(resolve));
  await new Promise((resolve) => requestAnimationFrame(resolve));
}