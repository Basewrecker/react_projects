import {useState} from "react";

const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: '',
    })
    
    const [isFormVisible, setIsFormVisible] = useState(false);
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.title || !formData.description) {
            return;
        }
        
        const newNote = {id: Date.now(), ...formData};
        
        setNotes([newNote, ...notes])
        
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: '',
        });
    };
    
    return <> 
        
    <button onClick = {() => setIsFormVisible(!isFormVisible)} className = "w-full bg-gray-100 border border-gray-300 text-black py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white duration-300 hover:-translate-y-1 mb-5" id = "addNote">
        { isFormVisible ? 'Hide Form' : 'Add New Note'}
    </button>
    
    
        
        {isFormVisible && (<form onSubmit = {handleSubmit} className = "mb-6">
       
       
        <div className = "mb-4">
            <label htmlFor = "title" className = "block font-semibold">
                Title
            </label>
            <input name = "title" className = "w-full p-2 border rounded-lg" type = "text" value = {formData.title} onChange = {handleChange}/>
        </div>
        
        
        <div className = "mb-4">
            <label htmlFor = "priority" className = "block font-semibold">
                Priority
            </label>
            <select name = "priority" className = "w-full p-2 border rounded-lg" value = {formData.priority} onChange = {handleChange}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
        </div>
        
        
        <div className = "mb-4">
            <label htmlFor = "priority" className = "block font-semibold">
                Category
            </label>
            <select name = "category" className = "w-full p-2 border rounded-lg" value = {formData.category} onChange = {handleChange}>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Ideas">Ideas</option>
            </select>
        </div>
        
        <div className = "mb-4">
            <label htmlFor = "description" className = "block font-semibold">
                Description
            </label>
            <textarea name = "description" className = "w-full p-2 border rounded-lg" type = "text" value = {formData.description} onChange = {handleChange}></textarea>
        </div>
        
        <button className = "w-full bg-black py-2 text-white rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-solid hover:translate-y-1 hover:text-lg transition-all duration-200">
            Add Note
        </button>
        
        
    </form>)}
        
    </>
}

export default NoteForm;