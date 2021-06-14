import React from 'react'
import '@testing-library/dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas en destructuaracion', () => {
    test('retornaArreglo debe retornar un string y un number', () => {
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
})
