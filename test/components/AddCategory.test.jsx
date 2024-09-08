import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe("test <AddCategory />",()=>{
    
    test('change value in the text box',()=>{
        render( <AddCategory onNuevaCategoria={ ()=>{} }/> );
        screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input , { target:{value: 'Goku'} } );
        expect(input.value).toBe('Goku');
        screen.debug();
    })

    test("call method onNewCategory if input have at value",()=>{
        
        const inputValue = 'Saitama';
        //jest.Mock<any,any> = simulacion de una funcion
        const onNuevaCategoriaMock = jest.fn();

        render(<AddCategory onNuevaCategoria={onNuevaCategoriaMock}></AddCategory>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        //Realizar accion de establecer el valor
        fireEvent.input(input, {target: {value: inputValue } });
        fireEvent.submit(form);
        screen.debug();

        //Verificar cambios
        expect(input.value).toBe('');
        //Verficar que funcion se llamo
        expect(onNuevaCategoriaMock).toHaveBeenCalled();

        //Verficar q funcion se llame una vez
        expect(onNuevaCategoriaMock).toHaveBeenCalledTimes(1);
        expect(onNuevaCategoriaMock).toHaveBeenCalledWith(inputValue);
    })

    //CASO DE USO 
    //PERSONA USA LA APP
    //TRATA DE POSTEAR FORMULARIO
    test('not debe llamar el onNewCategory si el input esta vacio', ()=>{
        const onNuevaCategoriaMock = jest.fn();

        render(<AddCategory onNuevaCategoria={onNuevaCategoriaMock} ></AddCategory>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNuevaCategoriaMock).toHaveBeenCalledTimes(0);
        expect(onNuevaCategoriaMock).not.toHaveBeenCalled();
    });
})

