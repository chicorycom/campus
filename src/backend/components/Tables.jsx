import React, { useEffect, useState } from 'react'
import { Image } from './Image'
import SectionTitle from './Typography/SectionTitle'

import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Badge,
    Button,
    Pagination,
  } from '@windmill/react-ui'
  import { EditIcon, TrashIcon } from '../icons'


const styles = {
  tableContainer: 'mb-8',
  tableBody: 'dark:text-gray-100',
  tableCellContainer: 'flex items-center text-sm',
  tableCellCntImg: 'relative hidden w-8 h-8 mr-3 rounded-full md:block',
  tableCellImg: 'object-cover w-8 h-8 w-full h-full rounded-full',
  tableCellp: 'font-semibold',
  tableCellspan: 'text-sm',
  tableCellAction: 'flex items-center space-x-4',
  btnEdit: 'bg-orange-500 text-gray-100 rounded hover:bg-orange-700 dark:text-gray-100',
  btnTrash: 'bg-red-700 text-gray-100 rounded hover:bg-red-800 dark:text-gray-100'
}


  /**
   * 
   * @param {object} param0 
   * @returns JSX.Element
   */
  function TableCells({data}){
    if(typeof data === 'object' && data.hasOwnProperty('src')){
      return (<TableCell>         
        <div className={styles.tableCellContainer}>
          {
            data.src && (
            <div className={styles.tableCellCntImg}>
                <Image 
                  className={styles.tableCellImg} 
                  image={{alt: data?.alt, src: data.src }}
                />
            </div>
            )
          }
          <div>
            <p className={styles.tableCellp}>{data.name}</p>
            {/*<p className="text-xs text-gray-600 dark:text-gray-400">{data.job}</p>*/}
          </div>
        </div>
    </TableCell>)
    }

    return (<TableCell><span className={styles.tableCellspan}>{data}</span></TableCell>)
  }



/**
* @author
* @function Tables
  @returns JSX.Element
**/

export const Tables = ({title, headers, datas}) => {
    
  const [pageTable, setPageTable] = useState(1)
  
  const [dataTable, setDataTable] = useState([])


    // pagination setup
   const resultsPerPage = 10
   const totalResults = datas.length

   // pagination change control
    function onPageChangeTable(p) {
      setPageTable(p)
    }

    useEffect(() => {
        setDataTable(datas.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage))
    }, [pageTable])


  return(
    <>
         <SectionTitle>{title}</SectionTitle>
            <TableContainer className={styles.tableContainer}>
              <Table>
                  <TableHeader>
                    <tr>
                      {headers.map(headre => <TableCell>{headre}</TableCell>)}
                    </tr>
                  </TableHeader>
                  <TableBody className={styles.tableBody}>
                    {dataTable.map((data, i) => (
                      <TableRow key={i}>
                        {headers.map(header => {
                          return header === 'Actions' ? 
                            <TableCell>
                            <div className={styles.tableCellAction}>
                              <Button className={styles.btnEdit} layout="link" size="icon" aria-label="Edit">
                                <EditIcon className="w-5 h-5" aria-hidden="true" />
                              </Button>
                              <Button className={styles.btnTrash} layout="link" size="icon" aria-label="Delete">
                                <TrashIcon className="w-5 h-5" aria-hidden="true" />
                              </Button>
                            </div>
                          </TableCell>
                        :
                          <TableCells data={data[header]} />
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
              </Table>
              {
                totalResults > resultsPerPage && (
                  <TableFooter>
                    <Pagination
                      totalResults={totalResults}
                      resultsPerPage={resultsPerPage}
                      onChange={onPageChangeTable}
                      label="Table navigation"
                    />
                  </TableFooter>
                )
              }
            </TableContainer>
    </>
   )
  }
