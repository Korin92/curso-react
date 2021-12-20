import React, { useState } from "react";
import css from "./SearchForm.module.css";
// import Button from '../../components/Button';

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({ keyword })
        //navegar
    }

    const handleChange = evt => {

        setKeyword(evt.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <input className={css["c-search-input"]}
                placeholder="Busca aquí tu gif..."
                onChange={handleChange}
                type="text"
                value={keyword} />
            <button>Buscar</button>
        </form>
    )
}

export default React.memo(SearchForm)