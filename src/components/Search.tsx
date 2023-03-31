import React from "react";
import debounce from "lodash.debounce";
import AppContext from "../context";


const Search = () => {
    const [value, setValue] = React.useState('')
    const {setSearchValue}: any = React.useContext(AppContext);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current?.focus();
     };

     const updateSearchValue = React.useCallback(
        debounce((value) => {
            setSearchValue(value)
        }, 250),
        [],
     )

     const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
     }

  return (
    <div className="search" >
        <form>
            <input  
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                placeholder='Поиск....'
            />
        </form>
        <img onClick={onClickClear} className="search__iconclosed" src='./img/closed.png' alt='closed'/>  
    </div>
  )
}

export default Search;