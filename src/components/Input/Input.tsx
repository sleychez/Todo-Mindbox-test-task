import React, {useState} from 'react'

type InputProps = {
    placeholder: string,
    iconName: string,
    onKeyPress: (value: string) => void
}

const Input: React.FC<InputProps> = ({placeholder, iconName, onKeyPress}) => {
    const [value, setValue] = useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    const pressKeyHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onKeyPress(value)
            setValue('')
        }
    }

    const id:string = `input-${placeholder.split(' ').join('-')}-${Date.now()}`

    return (
        <div className="input-field addInput">
            <i className="material-icons prefix">{iconName}</i>
            <input onKeyPress={pressKeyHandler} value={value} onChange={changeHandler} id={id} type="text"
                   className="validate" placeholder={placeholder}/>
            <label htmlFor={id}/>
        </div>
    )
}

export default Input