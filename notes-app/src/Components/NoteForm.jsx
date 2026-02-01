import {useState} from "react";
import TextInput from "./inputs/TextInput.jsx";
import SelectInput from "./inputs/SelectInput.jsx";
import TextAreaInput from "./inputs/TextAreaInput.jsx";

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
       
       <TextInput label = "Title" name = "title" value = {formData.title} onChange = {handleChange} required/>
       
        
        <SelectInput 
           label = "Priority"
           name = "priority"
           value = {formData.priority}
           onChange = {handleChange}
           options = {[
                     {value: 'High', label: 'High'},
                     {value: 'Medium', label: 'Medium'},
                     {value: 'Low', label: 'Low'},
                 ]}
         />
        
        
        <SelectInput 
           label = "Category"
           name = "category"
           value = {formData.category}
           onChange = {handleChange}
           options = {[
                     {value: 'Work', label: 'Work'},
                     {value: 'Personal', label: 'Personal'},
                     {value: 'Ideas', label: 'Ideas'},
                 ]}
         />
         
         <TextAreaInput 
           label = "Description"
           name = "description"
           value = {formData.description}
           onChange = {handleChange}
           required
         
         />
        
        
        
        <button className = "w-full bg-black py-2 text-white rounded-lg cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-solid hover:translate-y-1 hover:text-lg transition-all duration-200">
            Add Note
        </button>
        
        
    </form>)}
        
    </>
}

export default NoteForm;