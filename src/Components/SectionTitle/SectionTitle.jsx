const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl my-4">{subHeading}</h2>
      <p className="text-base">{heading}</p>
    </div>
  );
};

export default SectionTitle;
