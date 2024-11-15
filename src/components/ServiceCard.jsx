
export default function ServiceCard({ heading, src, text }) {
    return <div className="flex flex-col lg:flex-row lg:px-8 py-8 justify-between  ">
        <div className="w-full mb-8 lg:w-1/3">
            <div className="relative before:content-[''] before:w-5 before:h-5 before:bg-orange-500 before:rounded-full before:absolute  before:-bottom-[2px] before:-right-[3px] image flex w-10 h-10 ">
                <img className="relative"
                    src={src}
                    alt="icon"
                />
            </div>
        </div>
        <div className="w-full lg:w-3/4">
            <h5 className=" mt-2 mb-6 text-xl  font-semibold">{heading}</h5>
            <p>{text}</p>
        </div>
    </div>
}