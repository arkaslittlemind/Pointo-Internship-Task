/* eslint-disable react/prop-types */
import { XCircleIcon } from '@heroicons/react/24/outline'


const NoteCard = ({ note, onDelete}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
        <div>
            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
            <p className="text-gray-600">{note.content.slice(0, 50)}...</p>
        </div>
        <button 
            className="text-red-500 hover:text-red-700 mt-4"
            onClick={() => onDelete(note.id)}
        >
            <XCircleIcon className="h-6 w-6 inline-block mr-2"/>
            Delete
        </button>
    </div>
  );
};

export default NoteCard;
