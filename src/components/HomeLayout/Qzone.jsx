
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playgroundImage from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 mt-12'>
            <h2 className='font-bold mb-4'>QZone</h2>
            <div className="space-y-4">
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playgroundImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;