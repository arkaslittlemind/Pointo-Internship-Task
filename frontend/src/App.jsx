
import { useEffect, useState } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import './App.css'

// const API_URL = '/api/notes';

function App() {

  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`/api/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleAddNote = async (note) => {
    try {
      await axios.post(`/api/notes`, note);
      fetchNotes();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleUpdateNote = async (note) => {
    try {
      await axios.put(`{note.id}`, note);
      fetchNotes();
      setIsModalOpen(false);
      setEditingNote(null);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await axios.delete(`/api/notes/${id}`);
        fetchNotes();
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }
  };

  const openModal = (note = null) => {
    setEditingNote(note);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  }

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

      {/* <p>Notes: {notes.length}</p> */}
      <NotesList notes={notes} onDelete={handleDeleteNote} onEdit={openModal}/>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <h2 className="text-xl font-bold mb-4">
            {editingNote ? 'Edit Note' : 'Add Note'}
          </h2>
          <NoteForm
            note={editingNote}
            onSave={editingNote ? handleUpdateNote : handleAddNote}
            onCancel={closeModal}
          />
        </div>
      </div>
      )}
    </div>
  );
}

export default App
