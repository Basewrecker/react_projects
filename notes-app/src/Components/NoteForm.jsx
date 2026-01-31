import {useState} from "react";

const NoteForm = () => {
    const[title,setTitle] = useState('');
    const[priority, setPriority] = useState('Medium');
    const[category,setCategory] = useState('Work');
    const[description,setDescription] = useState('');
    
    return <form className = "mb-6">
       
       
        <div className = "mb-4">
            <label htmlFor = "title" className = "block font-semibold">
                Title
            </label>
            <input className = "w-full p-2 border rounded-lg" type = "text" value = {title} onChange = {(event) => setTitle(event.target.value)}/>
        </div>
        
        
        <div className = "mb-4">
            <label htmlFor = "priority" className = "block font-semibold">
                Priority
            </label>
            <select className = "w-full p-2 border rounded-lg" value = {priority} onChange = {(event) => setPriority(event.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
        </div>
        
        
        <div className = "mb-4">
            <label htmlFor = "priority" className = "block font-semibold">
                Category
            </label>
            <select className = "w-full p-2 border rounded-lg" value = {category} onChange = {(event) => setCategory(event.target.value)}>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Ideas">Ideas</option>
            </select>
        </div>
        
        <div className = "mb-4">
            <label htmlFor = "description" className = "block font-semibold">
                Description
            </label>
            <textarea className = "w-full p-2 border rounded-lg" type = "text" value = {description} onChange = {(event) => setDescription(event.target.value)}></textarea>
        </div>
        
        <button className = "w-full bg-black py-2 text-white rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-solid hover:translate-y-1 hover:text-lg transition-all duration-200">
            Add Note
        </button>
        
        
    </form>
}

export default NoteForm;