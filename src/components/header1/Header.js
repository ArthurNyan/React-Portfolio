import "./style.css"

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Arthur</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="https://github.com/ArthurNyan/React-Portfolio/blob/main/junior_frontend_developer_cv.md" className="btn">View CV</a>
            </div>
        </header>
        );
}
 
export default Header;