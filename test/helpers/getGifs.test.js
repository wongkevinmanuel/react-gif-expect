import { getGifs } from "../../src/helpers/getGifs"

describe("Test a getGifs.test.js",()=>{
    test("return arreglo de gifs",async ()=>{
        const gifs = await getGifs('One Punch');
        console.log(gifs);
        //Verificar que tenga mas de un elemento o mas
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
})