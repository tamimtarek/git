

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="mx-auto md:w-3/12 text-center">
            <h3 className="text-yellow-600 mb-2 italic">-- {subHeading} --</h3>
            <h1 className="md:text-3xl border-y-4 py-3 mb-4 uppercase ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;