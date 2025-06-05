// eslint-disable-next-line @typescript-eslint/naming-convention
function EmptyState() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
                    <img src="/assets/no-data.svg" alt="No Data" className="w-32 h-32" />
                    <h2 className="mt-4 text-lg font-semibold text-gray-700">No Data Available</h2>
                    <p className="mt-2 text-gray-500">Try adding some items or refreshing the page.</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={() => window.location.reload()}
                    >
                        Refresh Page
                    </button>
                </div>
            </div>
        </>
    )
}

export default EmptyState