export default function AddTasks({inputValue, handleAddBtn, setInputValue}){
  return(
    <div style={{display:"flex", justifyContent:"center", gap:"10px", padding:"6px 15px 14px 15px", borderBottom:"1px solid #D9CDA9"}}>
      <input 
        type="text"
        placeholder="Add a new task" 
        style={{flex:"3", border:"none", borderBottom:"1px dashed rgba(27,36,52,0.3)", outline:"none", background:"transparent", padding:"5px", fontSize:"small", fontStyle:"italic"}}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button 
        className="add-btn"
        style={{}}
        onClick={handleAddBtn}
      >+ Add</button>
    </div>
  );
}