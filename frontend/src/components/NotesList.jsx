/* eslint-disable react/prop-types */
import { FaTrash } from 'react-icons/fa';

const NotesList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
            <p className="text-gray-600 mb-4">{note.content.substring(0, 100)}...</p>
            <div className="flex justify-between items-center">
                <button 
                    onClick={() => onEdit(note.id)}
                    className="text-blue-500 hover:text-blue-700"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(note.id)}
                    className="text-red-500 hover:text-red-700"
                >
                    <FaTrash />
                </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NotesList;
