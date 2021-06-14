import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Heroe async ', (done) => {
        const id = 1;
        getHeroeByIdAsync( id)
            .then(heroe => {
                expect(heroe).toBe( heroes[0])
                done();
            });
    });

        test('debe de retornar un error si heroe id no existe ', (done) => {
            const id = 10;
            getHeroeByIdAsync(id)
                .catch(err => {
                    expect(err).toBe('No se pudo encontrar el héroe');
                    done();
                });
        });
});
