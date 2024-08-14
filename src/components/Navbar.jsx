const Navbar = () => {
    
    const total = 2500;

    return(
        <>
            <div className="navbar">
                <div className="leftNavbar">
                    <h1 className="title">¡Pizzeria Mamma Mia!</h1>
                    <button className="btnNavbar">
                        Home
                    </button>
                    <button className="btnNavbar">
                        Login
                    </button>
                    <button className="btnNavbar">
                        Register
                    </button>
                </div>
                <div className="rightNavbar">
                    <div className="btnNavbarContainer">
                        <button className="btnNavbarRight">
                            Total: ${total}
                        </button>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Navbar