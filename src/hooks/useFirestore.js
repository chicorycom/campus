import { useState, useEffect, useMemo } from 'react';
import { get } from '../database';

const useFirestore = (cl) => {
  const [docs, setDocs] = useState([]);

    async function fetchData(table){
        const documents = await get(table)
        setDocs(documents);
        return documents;
    }

  useMemo(() => {
    const ut = fetchData(cl);
    return () => ut;
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [cl]);

  return [ docs, setDocs ];
}

export default useFirestore;