

function Subscribe() {
    let data = [['nama1'],['nama2']]
    return(
        <div class="h-screen overflow-x-auto bg-black-200 relative">
            <table class="w-10/12 mx-auto mt-20 bg-black-200 text-sm text-left text-white">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            #
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <span class="sr-only">Edit</span>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((d, i) => {return(
                        <tr class="bg-black-200" key={i}>
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {i}
                            </th>
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {d[0]}
                            </th>
                            <td class="py-4 px-6 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                            <td class="py-4 px-6 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default Subscribe;