import PropTypes from "prop-types";
function CoreValues({ icon, title, desc }) {
    return (
        <div className="md:w-4/12 px-4 py-3">
            <div className="bg-[#161616] h-25 p-10 rounded-[20px]">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <p className="flex justify-center md:justify-start">{icon}</p>
                    <p className="font-medium text-md text-[#FBFBFB]">{title}</p>
                    <p className="text-[#9B9CA1] text-sm">{desc}</p>
                </div>
            </div>
        </div>
    );
}
CoreValues.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default CoreValues;
