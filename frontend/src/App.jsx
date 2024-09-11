import { useEffect, useState } from "react";
import axios from "axios";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`/api/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
      setError("Failed to fetch notes. Please try again later.");
    }
  };

  const handleAddNote = async (note) => {
    try {
      await axios.post(`/api/notes`, note);
      fetchNotes();
      setIsModalOpen(false);
      setError(null);
    } catch (error) {
      console.error("Error adding note:", error);
      setError("Failed to add note. Please try again later.");
    }
  };

  const handleUpdateNote = async (updatedNote) => {
    console.log("Updating Note:", updatedNote); //debug log
    
    if (!updatedNote.id) {
      console.error("Error: Note ID is undefined.");
      setError("Failed to update note. Note ID is missing.");
      return;
    }

    try {
      const response = await axios.put(`/api/notes/${updatedNote.id}`, {
        title: updatedNote.title,
        content: updatedNote.content,
      });
      console.log("Server response:", response.data); //debug log
      setNotes(
        notes.map((note) => (note.id === updatedNote.id ? response.data : note))
      );

      setIsModalOpen(false);
      setError(null);
      setEditingNote(null);
    } catch (error) {
      console.error("Error updating note:", error.response?.data || error.message);
      setError("Failed to update note. Please try again later.");
    }
  };

  const handleDeleteNote = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await axios.delete(`/api/notes/${id}`);
        fetchNotes();
        setError(null);
        // await axios.delete(`/api/notes/${id}`);
        // setNotes(notes.filter((note) => note.id !== id));
      } catch (error) {
        console.error("Error deleting note:", error);
        setError("Failed to delete note. Please try again later.");
      }
    }
  };

  const openModal = (note = null) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Notes</h1>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Note
        </button>
      </header>

      {error && (
        <div
          className="bg-red-300 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <NotesList notes={notes} onDelete={handleDeleteNote} onEdit={openModal} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h2 className="text-xl font-bold mb-4">
              {editingNote ? "Edit Note" : "Add Note"}
            </h2>
            <NoteForm
              note={editingNote}
              onSave={(updatedNote) => 
                editingNote 
                    ? handleUpdateNote({...updatedNote, id: editingNote.id})
                    : handleAddNote(updatedNote)
              }
              onCancel={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
