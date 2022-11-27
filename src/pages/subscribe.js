import React from 'react';
import Gambar from "../assets/binotify.png"

function Subscribe() {
    const maxData = 5;
    const [index, setIndex] = React.useState(0);
    const [showData, setShowData] = React.useState(['','']);
    let data = [
        ['nama1','1'],
        ['nama2','2'],
        ['nama3','2'],
        ['nama4','2'],
        ['nama5','2'],
        ['nama6','2'],
        ['nama7','2'],
        ['nama8','2'],
    ]

    const changeIndex = (isNext) => {
        if(!isNext && index > 0) {
            setIndex(index - 1);
        } else if (isNext && data.length % maxData == 0 && data.length / maxData != index + 1) {
            setIndex(index + 1);
        } else if (isNext && Math.ceil(data.length / maxData) - 1 >= index + 1) {
            setIndex(index + 1);
        }
    }

    React.useEffect(() => {
        setShowData(data.slice(index * maxData, index * maxData + maxData))
    }, [index])
    return(
        <div className="h-screen w-full overflow-x-auto bg-black-200 relative">
            <div classNameName='flex flex-row justify-between mt-4 mx-12'>
                <a href="/subscribe" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-max h-16 mr-2" src={Gambar} alt="logo" />
                </a>
                <button type="button" className="focus:outline-none h-12 my-2 border-2 border-red text-white bg-red hover:bg-black-200 hover:text-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Log out</button>
            </div>
            <h1 classNameName="text-white text-3xl text-center mt-8 font-bold">Daftar Request User</h1>
            <table className="w-10/12 mx-auto mt-4 bg-black-200 text-sm text-left text-white">
                <thead className="text-xs text-gray-300 uppercase bg-gray-50 border-b">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            #
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {showData && showData.map((d, i) => {return(
                        <tr className="cursor-default bg-black-200" key={i}>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-300 whitespace-nowrap">
                                {i + index * maxData + 1}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap">
                                {d[0]}
                            </th>
                            <td>
                                <button type="button" className="focus:outline-none my-2 border-2 border-green-100 text-white bg-green-100 hover:text-green-100 hover:bg-black-200 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2">Accept</button>
                            </td>
                            <td>
                                <button type="button" className="focus:outline-none my-2 border-2 border-red text-white bg-red hover:bg-black-200 hover:text-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2">Reject</button>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <div classNameName="flex flex-row ml-32 mt-4">
                <a onClick={() => changeIndex(false)} className="block px-3 py-2 ml-0 leading-tight text-gray-300 bg-transparent border border-gray-300 rounded-l-lg hover:bg-white hover:text-black-200 hover:border-white">
                    <span className="sr-only">Previous</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <a className="px-3 py-2 leading-tight text-gray-300 bg-transparent border border-transparent">{index}</a>
                <a onClick={() => changeIndex(true)} className="block px-3 py-2 leading-tight text-gray-300 bg-transparent border border-gray-300 rounded-r-lg hover:bg-white hover:text-black-200 hover:border-white">
                    <span className="sr-only">Next</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default Subscribe;