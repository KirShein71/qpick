import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {setSort} from '../redax/slices/sortSlice'

function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.sort.sort)
    const list = [
        {name: 'алфавиту (а-я)', sortProperty: 'title'},
        {name: 'алфавиту (я-а)', sortProperty: '-title'}
    ]
    const [open, setOpen] = React.useState(false)
    const onClickListItem = (obj) => {
        dispatch(setSort(obj));
        setOpen(false);
    }


    return (
        <div className="sort">
            <div className="sort__text">Сортировка по:</div>
            <span onClick={() => setOpen(!open)}>{sort.name}</span>
            {open && (
                <div className="sort__popup">
                <ul>
                  {list.map((obj, i) =>(
                    <li 
                    onClick={() => onClickListItem(obj)} 
                    className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}
                </li>
                  ))}
                </ul>
              </div>
              )}
        </div>
    )
}

export default Sort;