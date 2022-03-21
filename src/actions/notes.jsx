import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "prueba",
      body: "prueba",
      date: new Date().getTime(),
    };
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(docRef);

    dispatch(activeNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    dispatch(startNotesLoadingAction());
    // en la const notes cargamos las notas del usuario segun el user.uid
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
    dispatch(finishNotesLoadingAction());
  };
};
export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    dispatch(startNotesLoadingAction());
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db
      .doc(`${uid}/journal/notes/${note.id}`)
      .update(noteToFirestore)
      .then(
        dispatch(refreshNote(note.id, noteToFirestore)),
        dispatch(finishNotesLoadingAction())
      )
      .catch((e) => {
        dispatch(finishNotesLoadingAction());
        console.log(e);
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startNotesLoadingAction = () => ({
  type: types.notesStartLoading,
});
export const finishNotesLoadingAction = () => ({
  type: types.notesFinishLoading,
});
