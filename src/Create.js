const Create = () => {
    return (
        <div className="create">
            <h2> Add a New Quiz</h2>
            <form>
            <label>Pilihan Quiz:</label>
                <select>
                    <option value="radio">Radiobutton</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="text area">TextArea</option>
                </select>
                <label> Quiz :</label>
                <input 
                type="text"
                required
                />
                <label> Answer:</label>
                <textarea>
                    required
                </textarea>
                
                
                <button>Add Quiz</button>
            </form>
        </div>
    );
}
 
export default Create;
