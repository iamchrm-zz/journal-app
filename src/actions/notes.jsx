import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
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
    dispatch(addNewNote(docRef.id, newNote));
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
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNote(note.id, noteToFirestore));
    dispatch(startNotesSaveLoadingAction());
    setTimeout(() => {
      dispatch(finishNotesSaveLoadingAction());
    }, 2000);
  };
};
//react-journal-app
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

export const startNotesSaveLoadingAction = () => ({
  type: types.noteSaveStartLoading,
});
export const finishNotesSaveLoadingAction = () => ({
  type: types.noteSaveFinishLoading,
});

export const startImageUploadingAction = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const fileUrl = await fileUpload(file);
    console.log(fileUrl);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};
export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});
export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
});
