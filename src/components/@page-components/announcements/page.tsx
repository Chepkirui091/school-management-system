const Announcements = () => {


    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-xl">Announcements</h1>
                <span className="text-xs text-gray-300">View All</span>
            </div>
            <div className="bg-lamaSkyLight rounded-md p-4 mt-2">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem Ipsum dolor sit amet </h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
            </div>
            <div className="bg-lamaPurpleLight rounded-md p-4 mt-2">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem Ipsum dolor sit amet </h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2024-01-01</span>
                </div>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
            </div>
            <div className="bg-lamaYellowLight rounded-md p-4 mt-2">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem Ipsum dolor sit amet </h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2023-01-01</span>
                </div>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Announcements