const Navegacion = ()=>{
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <label className="navbar-brand">NinjaPolis</label>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content-end">
                        <label className="nav-link">Dinamicas</label>
                        <label className="nav-link">Perfil</label>
                        <label className="nav-link">Autogestion</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navegacion;