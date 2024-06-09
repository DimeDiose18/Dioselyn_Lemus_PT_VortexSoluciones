import { Tools } from "./Tools";

const InputWrite = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 w-[90%] gap-4 md:w-[50%]">
            <div className="flex rounded-md shadow-sm row-start-1 col-start-1 row-end-2 col-end-3">
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 bg-screen py-1.5 pl-1 text-gray-900 placeholder:text-gray-400"
                    placeholder="Write .."
                />
            </div>
            <Tools />
            <div className="flex justify-end">
                <button className="bg-sky hover:bg-baby-blue text-white font-light py-1 px-5 rounded-2xl">
                    Post
                </button>
            </div>
        </div>
    );
}

export { InputWrite }