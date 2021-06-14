import React from 'react'
import '@testing-library/dom';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {
    test('debe de retornar un heroe por ID ', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h=> h.id === id);

        expect(heroe).toEqual(heroeData);
    }); 
    test('debe de retornar un undefine si heroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los heroes DC ', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroeData);
    }); 
    test('debe de retornar un arreglo con los heroes MArvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    }); 
});
