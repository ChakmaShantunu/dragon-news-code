import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-3 text-center">

            <img className="w-87.5" src={logo} alt="" />
            <p className="text-accent">Journalism Without Fear or Favour</p>

        </div>
    );
};

export default Header;