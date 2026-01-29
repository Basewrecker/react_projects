import Rating from "./components/Rating";


const App = () => {
    return  <div>
        <Rating heading = "Rate your experience" color = "gold" feedbackMessages = {['Hate it', 'Dunno', 'meh', 'its alr', 'jolly this is good']}/>
    </div> 
};
 
export default App;