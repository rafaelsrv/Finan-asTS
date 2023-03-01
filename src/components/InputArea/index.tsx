import { useState } from 'react';
import * as C from './styles'
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
    
}


export const InputArea = ({ onAdd }: Props) =>{

const [inputValue, setinputValue] = useState(0)

    const handleAddEvent = () =>{
        let newItem: Item = {
            date: new Date(2023, 2, 27),
            category: 'food',
            title: 'Item de teste!',
            value: inputValue
        };
        onAdd(newItem)
    }

    

    return(
        <C.Container>
            <C.Inputs>
                <C.Data><p>Data</p><input type='date' placeholder='Digite a data' id = "DateInput" ></input></C.Data>
                <C.Titulo><p>Título</p><input type='text' placeholder='Digite o Título' id = "TitleInput"></input></C.Titulo>
                <C.Valor><p>Valor</p><input type='number' placeholder='Digite o valor' id = "ValueInput" onChange={e => setinputValue(parseInt(e.target.value))}></input></C.Valor>
                
                
                <C.Select><p>Categoria</p>
                    <select>
                    <option>hehe</option>
                    <option>hehas</option>
                    <option>hehe</option>
                </select>
                </C.Select>
                
                <C.Button>
                    <button onClick={handleAddEvent}>Adicionar</button>
                </C.Button>
            
            </C.Inputs>
        </C.Container>
    );
}