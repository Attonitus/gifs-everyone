import { useState } from "react";
import './InputCategory.css';

interface Props{
    onNewValue: (value: string) => void;
}

export const InputCategory = ({onNewValue}: Props) => {

    const [inputValue, setInputValue] = useState<string>('')

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputValue.trim().length < 1) return;
        
        onNewValue(inputValue);

        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit} className="form">
            <span className="material-symbols-outlined form-icon-search">
                search
            </span>
            <input type="search"
            className="form-input-search"
            onChange={onHandleChange} 
            placeholder="Search your favorite Gif!"
            value={inputValue}  />
        </form>
    )
}