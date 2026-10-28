
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <label htmlFor="course-search">
        Encontre seu próximo curso
      </label>

      <input
        id="course-search"
        type="search"
        placeholder="Buscar cursos..."
        value={searchTerm}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;
