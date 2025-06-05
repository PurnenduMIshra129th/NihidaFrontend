import { useLoader } from "../../contexts/context/loader/LoaderContext";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Loader() {
     const { isLoading } = useLoader();

    return  isLoading ? (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md z-50">
                <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                    <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                </div>
            </div>

        </>
    ) : null
}

export default Loader