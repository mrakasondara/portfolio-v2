import { get, child, getDatabase, ref as refDatabase } from "firebase/database";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "./firebase-sdk";

const database = getDatabase(app);
const rootReference = refDatabase(database);

const getAllProject = async () => {
  const dbGet = await get(child(rootReference, "projects"));
  const dbGetObject = Object.values(dbGet.val());

  const getThumbnail = dbGetObject.map((db) => {
    return getImageFromStorage(db.thumbnail).then((res) => {
      return res;
    });
  });

  const getThumb = await Promise.all(getThumbnail).then((res) => {
    return res;
  });

  const data = dbGetObject.map((project, index) => {
    return { ...project, thumbnail: getThumb[index] };
  });
  return data;
};

const getImageFromStorage = async (name) => {
  const storage = getStorage();
  const gsRef = ref(storage, `gs://mrakasondara.appspot.com/projects/${name}`);
  const getUrl = await getDownloadURL(gsRef).then((url) => {
    return url;
  });
  return getUrl;
};

const getFile = async () => {
  const storage = getStorage();
  const gsRef = ref(
    storage,
    `gs://mrakasondara.appspot.com/projects/papucraft.png`
  );
  const getUrl = await getDownloadURL(gsRef).then((url) => {
    return url;
  });
  return getUrl;
};

export { getAllProject, getFile };
