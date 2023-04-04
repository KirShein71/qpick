import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectSort, setSort} from '../redax/slices/sortSlice'



function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector(selectSort)
    const sortRef = React.useRef<HTMLDivElement>(null)
    type PopupClick = MouseEvent & {
        path: Node [];
    }
    type SortItem = {
        name: string;
        sortProperty: string;
    };
    const list: SortItem[] = [
        {name: 'алфавиту (а-я)', sortProperty: '-title'},
        {name: 'алфавиту (я-а)', sortProperty: 'title'},
        {name: 'популярности', sortProperty: 'raiting'}, 
        {name: 'цене(возрастание)', sortProperty: '-price'},
        {name: 'цене(убывание)', sortProperty: 'price'}
        
    ]
    const [open, setOpen] = React.useState(false)
    const onClickListItem = (obj: SortItem) => {
        dispatch(setSort(obj));
        setOpen(false);
    }

    React.useEffect(()=>{
        const hadleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;
            if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
                setOpen(false)
            }
        };

        document.body.addEventListener('click', hadleClickOutside)

        return () => {
            document.body.removeEventListener('click', hadleClickOutside)
        }
    })


    return (
        <div ref={sortRef} className="sort">
            <div className="sort__text">Сортировка по:</div>
            <span onClick={() => setOpen(!open)}>{sort.name}</span>
            {open && (
                <div className="sort__popup">
                <ul>
                  {list.map((obj, i) =>(
                    <li 
                    key={i}
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