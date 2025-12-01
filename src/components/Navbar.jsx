import  { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.amount);
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Demo Bank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <button disabled={true} className="btn btn-primary">Your Balance: {state}</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar