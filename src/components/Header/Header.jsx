import { format } from "date-fns";
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-3 text-center mt-5">

            <img className="w-87.5" src={logo} alt="" />
            <p className="text-accent">Journalism Without Fear or Favour</p>
            <p className="font-medium"><span className="text-primary">{format(new Date(), "EEEE")}{", "} <span className="text-accent">{format(new Date(), "MMMM dd, yyyy")}</span></span></p>

        </div>
    );
};

export default Header;