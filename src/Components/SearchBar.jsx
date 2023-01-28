import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;
// arama kısmına birşey yazılmadığında ürünlerin tamamını göstermesini istiyorum ancak nasıl yapacağımı bulamadım. geri dönücem bu projeye