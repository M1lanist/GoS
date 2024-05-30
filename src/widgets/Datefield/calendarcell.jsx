import React from 'react';

function CalendarCell({ date, events }) {
  return (
    <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
      {/* Содержимое ячейки календаря здесь */}
    </td>
  );
}

export default CalendarCell;
