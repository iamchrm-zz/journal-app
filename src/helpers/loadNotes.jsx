import { db } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];
  notesSnap.forEach((snap) => {
    //recoge el snap hijo y luego hace un push con el id del snap junto al data
    notes.push({
      id: snap.id,
      ...snap.data(),
    });
  });
  return notes;
};
