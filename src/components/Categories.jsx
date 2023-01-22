import React from "react";

function Categories({value, onClickCategory}) {
    
    const categories = ['Все', 'Чехлы', 'Проводные наушники', 'Беспроводные наушники']

    return (
        <div className="categories">
              <ul>
                {categories.map((categoryName, i) => (
                    <li onClick={() => onClickCategory(i)} 
                    className={value === i ? 'active' : ''}>
                    {categoryName}</li>
                ))}
              </ul>
            </div>
    )
};

export default Categories;