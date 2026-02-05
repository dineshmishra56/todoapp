import { Trash2, Edit, Check, X } from 'lucide-react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  deleteTodo, 
  toggleTodo, 
  deleteAllTodos, 
  updateTodo 
} from '../redux/todoSlice';

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.todo);

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

 const confirmEdit = (id) => {
    dispatch(updateTodo({id, newtext: editingText}))
    setEditingId("")
 }

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-gray-200 w-[600px] p-3 rounded-lg mb-3 flex justify-between items-center"
        >
          {editingId === todo.id ? (
            <input
              type="text"
              className="text-black border p-1"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            <h1
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${
                todo.completed ? 'line-through text-gray-600' : ''
              }`}
            >
              {todo.text}
            </h1>
          )}

          <div className="flex gap-4 items-center">
            {
              editingId === todo.id ? <div className='flex gap-3 items-center'>
                <Check onClick={()=>confirmEdit(todo.id)} className='text-green-600 cursor-pointer'/>
                <X onClick={() => setEditingId(null)} className='text-red-600 cursor-pointer'/>
              </div> : 
              <Edit
              onClick={() => handleEdit(todo)}
              className="text-green-600 cursor-pointer"
            />
            }
            
            <Trash2
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 cursor-pointer"
            />
          </div>
        </div>
      ))}

      {todos.length > 1 && (
        <button
          onClick={() => dispatch(deleteAllTodos())}
          className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Delete All
        </button>
      )}
    </div>
  );
};
