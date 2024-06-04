

const MyClassPage = () => {
  

  return (
    <div className="MyClassPage m-20 flex-1">
        <div className="mb-4 flex justify-between">
            <div className="relative flex items-center">
              <div className="absolute inset-y-4 start-0 flex items-center ps-4 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="search" className="block w-md p-3 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Поиск студента" required />
            </div>
            <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
              + Добавить студента </button>
          </div>

          {/* =================== TABLE ========================================================= */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-md text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-5">
                          №
                      </th>
                      <th scope="col" className="px-6 py-5">
                          Имя
                      </th>
                      <th scope="col" className="px-6 py-5">
                          Ранг
                      </th>
                      <th scope="col" className="px-6 py-5">
                          Группа
                      </th>
                      <th scope="col" className="px-6 py-5">
                          E-mail
                      </th>
                      <th scope="col" className="px-6 py-5">
                          Действия
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          1.
                      </th>
                      <td className="px-6 py-4">
                          Taira Isakova
                      </td>
                      <td className="px-6 py-4">
                          90
                      </td>
                      <td className="px-6 py-4">
                          CS-11
                      </td>
                      <td className="px-6 py-4">
                          taira@gmail.com
                      </td>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          2.
                      </th>
                      <td className="px-6 py-4">
                          Timofey Tian
                      </td>
                      <td className="px-6 py-4">
                          95
                      </td>
                      <td className="px-6 py-4">
                          CS-12
                      </td>
                      <td className="px-6 py-4">
                          tima@gmail.com
                      </td>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          3.
                      </th>
                      <td className="px-6 py-4">
                          Boris Shinko
                      </td>
                      <td className="px-6 py-4">
                          100
                      </td>
                      <td className="px-6 py-4">
                          CS-12
                      </td>
                      <td className="px-6 py-4">
                          boris@gmail.com
                      </td>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>            
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default MyClassPage;