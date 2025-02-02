

export const Nav = () => {
    return <div className="h-14 w-screen bg-gray-800 px-20 flex justify-between items-center border relative border-gray-700 left-0 top-0 mb-10">
        <div>active-eyes</div>
        <div className="flex justify-between items-center gap-10">
            <div>Hollywood</div>
            <div>Bollywood</div>
            <div>Series</div>
            <div>Others</div>
            <div>
                <input type="text" className="bg-gray-500 opacity-35 rounded-lg text-white px-3 py-1"/>
            </div>
            <div className="bg-blue-400 px-3 py-1 rounded-3xl">Log-in</div>
        </div>
    </div>
}