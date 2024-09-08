import { render , screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/> ",()=>{

    const categoria = 'One Punch';

    test("mostrar el loading inicialmente",()=>{
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });
        render(<GifGrid categoria={categoria}></GifGrid>);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categoria));
    });

    //useFetchGifs se prueba de manera aislada
    //y independiente
    test('mostrar items cuando se carga las imagenes useFetchGifs',()=>{
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid categoria={categoria}></GifGrid>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})