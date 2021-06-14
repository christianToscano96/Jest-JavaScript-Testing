import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Debe retornar el componente <CounterApp/>", () => {
  
    let wrapper = shallow(<CounterApp  />);

  //reinicializar el componente
  beforeEach(() => {
    wrapper = shallow(<CounterApp  />);
  })

  test("debe de mostrar el componente ", () => {

    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <h1>
          CounterApp
        </h1>
        <h2>
           
          10
           
        </h2>
        <button
          onClick={[Function]}
        >
          +1
        </button>
        <button
          onClick={[Function]}
        >
          Reset
        </button>
        <button
          onClick={[Function]}
        >
          -1
        </button>
      </Fragment>
    `);
  });

  test('debe de mostrar el valor por defecto ', () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText= wrapper.find('h2').text().trim();
    expect(counterText).toBe('100');
  });

  test('debe de incrementar con el boton +1 ', () => {
      wrapper.find('button').at(0).simulate('click');
      const counterText= wrapper.find('h2').text().trim();

      expect(counterText).toBe('11')
  });

  test('debe de decrementar con el boton -1 ', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText= wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
  });
  
  test('debe de colocar el calor por defecto con el btn reset ', () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const counterText= wrapper.find('h2').text().trim();

    expect(counterText).toBe('105')
})
  
});
