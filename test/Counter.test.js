
import { Counter } from "../src/components/Counter/Counter";
import { nextTick, makeTestFixture } from './helpers';
import { mount } from "@odoo/owl";


//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------
let fixture

beforeEach(() => {
  fixture = makeTestFixture();
});

afterEach(() => {
  fixture.remove();
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
describe("Counter", () => {
  test("Counter click increment the number", async () => {
    const props = { start: 3 };
    const comp = await mount(Counter, fixture, { props });

    // do some assertions
    expect(fixture.querySelector("button").innerHTML).toBe("3 Bug(s) ");

    fixture.querySelector('button').click();
    await nextTick();

    expect(fixture.querySelector("button").innerHTML).toBe("4 Bug(s) ");
  });
});