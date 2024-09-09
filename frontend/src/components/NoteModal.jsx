/* eslint-disable react/prop-types */

const NoteModal = ({ note, onSave, onCancel, onChange }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Add Note</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="border rounded-lg px-3 py-2 w-full"
                placeholder="Enter note title"
                value={note.title}
                onChange={(e) => onChange({ ...note, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block font-bold mb-2">
                Content
              </label>
              <textarea
                id="content"
                className="border rounded-lg px-3 py-2 w-full"
                rows={4}
                placeholder="Enter note content"
                value={note.content}
                onChange={(e) => onChange({ ...note, content: e.target.value })}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onSave}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
