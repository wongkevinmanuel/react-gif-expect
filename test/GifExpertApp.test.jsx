
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {GifExpertApp} from '../src/GifExpertApp'

describe("Test en <GifExpertApp/>",()=>{
const inputTexto = 'Dragon ball z';

    //Match con el snapshot
    test("Match with the snapshot",()=>{
        const { container } = render (<GifExpertApp/>);
        expect(container).toMatchSnapshot(); 
    })
    
    //Funcionamiento normal del componente 
    test("Ingresar texto en Input del GifExpertApp", async() =>{
        render( <GifExpertApp />);
        screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target:{value: inputTexto} })
        //Enter en form
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        screen.debug();
        // Verificar si aparece <h3 con inputTexto
        expect(screen.getByText(inputTexto) );
        // Verificar si aparecen <images 
        await waitFor(()=>{
                //expect(screen.getAllByRole('img').length).toBe(3);
                //
                const numberImg = screen.getAllByRole('img').length;
                console.log(screen.getAllByRole('img')[0]);
                expect(numberImg).toBe(6);
            }
        );
        screen.debug();

    })
    //Que pasa si se envia la misma categoria?

})