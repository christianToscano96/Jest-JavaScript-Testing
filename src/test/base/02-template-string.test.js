import React from 'react'
import '@testing-library/dom';

import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.tes.js', () => {

    test('getSaludo debe retornar Hola Christian', () => {
        const nombre = 'Christian';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
        console.log(saludo)
    })
    
});