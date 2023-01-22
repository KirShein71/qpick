import React from "react";
import AppContext from "../context";

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(AppContext);
    const inputRef = React.useRef();
    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
     };
  return (
    <div className="search" >
        <form>
            <input  
                ref={inputRef}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder='Поиск....'
            />
        </form>
        <img onClick={onClickClear} className="search__iconclosed" src='./img/closed.png' alt='closed'/>  
    </div>
  )
}

export default Search;