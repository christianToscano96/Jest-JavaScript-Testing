import React from 'react'
import '@testing-library/dom';
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto ', () => {
        const userTest = {
        uid: 'ABC123',
        username: 'El_Chris1502'
        };

        const user = getUser();
        console.log(user);
        expect(user).toStrictEqual(userTest)

    });

    test('getUsuarioActivo debe retornar un nobjeto con parametro nombre', () => {
        const nombre = 'Christian';

        const userTest2= getUsuarioActivo(nombre);
        console.log(userTest2);

        expect(userTest2).toEqual(
            {
                uid: 'ABC567',
                username: nombre
            }
        )
    });
})
