import { useState, useEffect } from 'react';
import { storage, ref, store, generatName, getUrl } from '../storage'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const ext = file.name.split('.').pop()
    const metadata = {contentType: file.type};
    const name = `${generatName}.${ext}`

    // references
    const storageRef = ref(storage, 'images/' + name);
    const uploadTask = store(storageRef, file, metadata);
    
    uploadTask.on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
    const url = await getUrl(uploadTask.snapshot.ref)
     // const url = await storageRef.getDownloadURL();
      //const createdAt = timestamp();
      //await collectionRef.add({ url, createdAt });
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;