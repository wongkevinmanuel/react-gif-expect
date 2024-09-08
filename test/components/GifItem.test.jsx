import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("GifItem testing", ()=>{

    const title = 'Saitama';
    const url = 'www.kevinonofre.com/saitama.jpg';

    /* test("match with the snapshot", ()=>{
        //renderizar el componente sin datos
        const { container } = render(<GifItem
        title={title} url={url}></GifItem>);
        expect(container).toMatchSnapshot();
    }); */

    /* test("mostrar imagen con url y alt indicado",()=>{
        render(<GifItem title={title} url={url}></GifItem>);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(alt).toBe(alt);
        expect(src).toBe(url);
    }); */

    test("mostrar titulo en componente", ()=>{
        render(<GifItem title={title} url={url}></GifItem>)
        expect(screen.getByText(title)).toBeTruthy();
    })

    //test("default values in titles and url",()=>{
    //    const {container } = render(<GifItem></GifItem>);
        //buscar componente title
    //});

});