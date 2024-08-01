import Image from "next/image";

const GaleryModal = (props) => {
  return (
    <div>
      <div
        className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
          props.isDialogOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-[90%] h-[80%] rounded-lg bg-gray-200   shadow-2xl transition-all duration-300 ${
            props.isDialogOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-28 scale-90"
          }`}
        >
          <div className=" ">
            <button
              onClick={props.handleCloseDialog}
              className="text-lg font-bold absolute top-3 right-3"
            >
              x
            </button>
            {/* <Image
              src="/Assets/ProjectPictures/Datafirst/1.png"
              alt="Datafirst"
              fill
              className="object-contain"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleryModal;

{
  /* <Image
src={props.picturePath}
alt={props.picturePath}
fill
className="object-contain hover:blur-sm duration-500"
priority
/> */
}
