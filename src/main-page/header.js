import logo from './globomanticsLogo.png'

const Header = ({subTitle, title}) => {
    return (
        <header className="row">
            <div className="col-md-5">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div className="col-md-7 mt-5 subTitle">
                {subTitle}
            </div>
        </header>
    );
}

export default Header;