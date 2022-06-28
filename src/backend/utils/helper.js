

const iterabel = (lists, el, result) => {
    for (const element of lists) {
        if(el.id === element.category_id){
            element.sub = iterabel(lists, element, [])
            result.push(element)
        }
    }
    return result
}

/**
 * 
 * @param {array<object>} lists 
 * @returns {array<object>}
 */
export const menuIterable = lists => {
    const rtn = []
    for (const element of lists) {
        if(element.category_id === ''){
            element.sub = iterabel(lists, element, [])
            rtn.push(element)
        }
    };

    return rtn
}
    

export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const styles = {
    card: 'relative shadow-lg max-w-sm',
    cardBody: 'px-6 py-4 dark:text-gray-100',
    cardFooter: 'flex px-6 pt-4 pb-2 justify-between',
    btn: 'flex flex-col items-center focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ',
    btnSave: 'bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300',
    btnEdit: 'cursor-pointer bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300',
    btnTrash: 'cursor-pointer bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300',
    icon: 'w-5 h-5',
    langContent: 'flex items-center',
    inputRadio: 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600',
    label: 'block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300',
    cardHeader: 'w-full object-cover',
    TitleInput: 'font-bold text-xl mb-2 appearance-none border-0',
    Cardcontent: 'text-gray-700 text-base dark:text-gray-300',
    Textarea: 'w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding appearance-none border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
    imageIcon: ' text-gray-700 dark:text-gray-100'
  }