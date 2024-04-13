import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setnote] = useState({title: "", description: "", tag: "default"});

  const handleClick = (e) => {
    e.preventDefault();    //So that the page doesn't reload
    addNote(note.title, note.description, note.tag);
    setnote({title: "", description: "", tag: ""});
    props.showAlert("Note added Successfully", "success");
  }

  const onChange = (e) => {
    setnote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5} required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              onChange={onChange}
              minLength={5} required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              name="tag"
              id="tag"
              onChange={onChange}
              minLength={5} required
              value={note.tag}
            />
          </div>
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
