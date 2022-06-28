
/**
* @author
* @function CourseAll
**/

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDatas } from "../../../hooks/DatasContext"
import { Paginations } from "../paginations"
import { CourseItem } from "./CourseItem"

const CourseAll = () => {
  const { Technologies } = useDatas()
    
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  const resultsPerPage = 10
  const totalResults = data.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPage(p)
  }

   // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(data.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return(
    <main className="relative container mx-auto -mt-20 bg-white rounded-md overflow-hidden px-4">
        <div className="flex "> 
            <div className="flex flex-col items-center w-full md:w-9/12">
                <div className="w-full text-left py-4 ">
                    <span className="">371 results </span>
                </div>
                <section className="flex flex-col w-full mb-16 md:mb-32">
                    <CourseItem data={{}}/>
                </section>
                <div className="pa">
                    <Paginations 
                        totalResults={totalResults}
                        resultsPerPage={resultsPerPage}
                        onChange={onPageChangeTable1}
                        label="Table navigation"
                    />
                </div>
            </div>
            <div className="hidden md:block md:w-3/12">
                <h1 className="text-gray-800 capitalize font-semibold tracking-widest p-4 ">Technology</h1>
                <div className="px-4 gap-y-1 capitalize">
                    {
                        Technologies.map(tech => (
                            <label for={tech.name} className="flex justify-start items-center mt-1 gap-2 text-gray-800">
                                <input type="checkbox" id={tech.name} name={tech.name} className="rounded-sm border-2 border-gray-400 " />
                                <span className="">{tech.name}</span>
                            </label>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </main>
   )
}

export default CourseAll
