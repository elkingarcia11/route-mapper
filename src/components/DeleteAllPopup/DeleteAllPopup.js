import "./DeleteAllPopup.css"
const DeleteAllPopup = ({showDeleteAllPopup, setShowDeleteAllPopup, eraseRoute}) =>{
    const closePopup = () => {
    setShowDeleteAllPopup(false);
    };
  
return(
    <div className={`da-popup-container ${showDeleteAllPopup ? 'visible' : 'hidden'}`}>
      <div className="da-popup-content">
        <h3>Are you sure you want to delete the entire route?</h3>
        <div className="da-row">
            <button onClick={()=>{closePopup()}}>Cancel</button>
            <button onClick={()=>{eraseRoute()}}>Delete All</button>
        </div>
      </div>
    </div>
)
}

export default DeleteAllPopup