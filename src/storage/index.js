import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

const storage = getStorage();
const store = uploadBytesResumable
const getUrl = getDownloadURL
const generatName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


const upload  = async (file) => {
    const ext = file.name.split('.').pop()
    const name = `${generatName}.${ext}`
    const storageRef = ref(storage, `images/${name}`);
    const uploadTask =  await uploadBytes(storageRef, file)
    const url = await getDownloadURL(uploadTask.ref)
  return {url, name }
}

const destroyStore = async (name) => {
    const desertRef = ref(storage, `images/${name}`);
    await deleteObject(desertRef)
}

export {
    upload,
    destroyStore
}