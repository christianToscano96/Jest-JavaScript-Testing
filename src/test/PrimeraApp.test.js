import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp />", () => {
  //test('debe de mostrar el emnsaje "Hi, Im christian" ', () => {
  //    const saludo= "Hi I'm Christian";
  //    const {getByText} = render( <PrimeraApp saludo={saludo} />);
  //    expect( getByText(saludo + '!!!')).toBeInTheDocument();
  //});
  test('debe de mostrar el componente <PrimeraApp />" ', () => {
    const saludo = "Hi I'm Christian";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <h1>
           
          Hi I'm Christian
          !!!
        </h1>
        <p>
          Soy un subtitulo
        </p>
      </Fragment>
    `);
  });

  test('debe de mostart el subtitulo enviado por props', () => {
    const saludo = "Hi I'm Christian";

    const subtitulo = "soy un subtitulo";
    const wrapper = shallow(
    <PrimeraApp 
        saludo={saludo} 
        subtitulo={subtitulo}
    />);
    
    const textoParrafo = wrapper.find('p').text();

    expect(textoParrafo).toBe(subtitulo)
  })
  
});
