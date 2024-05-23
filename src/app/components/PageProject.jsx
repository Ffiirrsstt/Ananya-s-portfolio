function PageProject(props) {
  const { dataArray, curPage, sendPage, sendResetReadHide } = props;
  return (
    <div className="my-5 flex space-x-5 justify-end">
      {dataArray.map((data, index) => (
        <button
          key={index}
          onClick={() => {
            sendPage(index);
            sendResetReadHide(true);
          }}
          disabled={curPage === index ? true : false}
          className={`${
            curPage === index
              ? "bg-[#d0d0d0]"
              : "bg-[#0088b1] hover:bg-[#47abcb]"
          } 
              py-1 px-2 rounded-lg`}
        >
          <h6 className="text-white">{index + 1}</h6>
        </button>
      ))}
    </div>
  );
}

export default PageProject;
