import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe("Prueba hook useFetchGifs",()=>{

    test("Return el estado inicial", ()=>{
        //hook necesitan parte del ciclo de vida
        //de los componenetes de react
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test("return [] de imagenes y isLoading = false ", async()=>{

        const { result } = renderHook(()=> useFetchGifs('One Punch'));
        
        //Esperar el trabajo del hook (esperar que se cargen las imagenes)
        //waitFor es una promesa para esperar el return de algo
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images , isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })

})