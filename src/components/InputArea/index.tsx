import { useState } from 'react';
import * as C from './styles'
import { Item } from '../../types/Item';
import { Category } from '../TableItem/styles';
import { categories } from '../../data/categories';



type Props = {
    onAdd: (item: Item) => void;
    
}


export const InputArea = ({ onAdd }: Props) =>{

const [InputValue, setInputValue] = useState(0)
const [InputTitle, setInputTitle] = useState('')
const [InputCategorie, setInputCategorie] = useState('')
const [InputDate, setInputDate] = useState('')

    
    const handleAddEvent = () =>{
        let newItem: Item = {
            date: new Date(InputDate),
            category: InputCategorie,
            title: InputTitle,
            value: InputValue
            
        };
        console.log(InputDate)
        
        onAdd(newItem)
        
    }
        
        

    return(
        <C.Container>
            <C.Inputs>
                <C.Data><p>Data</p><input type='date' onChange={e => setInputDate(e.target.value)} ></input></C.Data>
                <C.Titulo><p>Título</p><input type='text' placeholder='Digite o Título'  onChange={e => setInputTitle(e.target.value)}></input></C.Titulo>
                <C.Valor><p>Valor</p><input type='number' placeholder='Digite o valor'  onChange={e => setInputValue(parseInt(e.target.value))}></input></C.Valor>
                
                
                <C.Select><p>Categoria</p>
                <select onChange={e => setInputCategorie(e.target.value)} >
                    <option>Selecione</option>
                    <option value="food">Alimentação</option>
                    <option value="rent">Aluguel</option>
                    <option value="salary">Salário</option>
                </select>
                
                </C.Select>
                
                <C.Button>
                    <button onClick={handleAddEvent}>Adicionar</button>
                </C.Button>
            
            </C.Inputs>
        </C.Container>
    );
}