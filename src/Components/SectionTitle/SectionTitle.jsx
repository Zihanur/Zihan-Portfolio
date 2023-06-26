
const SectionTitle = ({title,subTitle}) => {
  return (
    <div className=" mb-10">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <p className="text-xl text-center mt-2">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;