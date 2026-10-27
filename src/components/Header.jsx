
import './Header.css';

function Header({ categories }) {
  return (
    <header className="header">
      <a href="#home" className="logo">
        NOVA
      </a>

      <nav className="nav-menu" aria-label="Menu principal">
        <a href="#home">Home</a>

        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
          >
            {category.title}
          </a>
        ))}
      </nav>

      <div className="user-profile">
        <span>JM</span>
      </div>
    </header>
  );
}

export default Header;
