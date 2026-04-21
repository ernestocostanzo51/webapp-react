import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
           
            <NavLink className="navbar-brand" to="/">
              MovieApp
            </NavLink>
            
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/books">
                    Lista Libri
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    
      <main className="container mt-4 flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-light py-3 text-center border-top mt-auto">
        <div className="container">
          <span className="text-muted">© 2026 Movie Database</span>
        </div>
      </footer>
    </div>
  );
}