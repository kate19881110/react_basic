const Item = ({ id,noteData, dateData, timeData,deleteDataItem,submittingStatue }) => {
    function deleteItem(){
      submittingStatue.current = true
        deleteDataItem(function(prev){
            return prev.filter(item=>item.id !==id)
        })
    }
  return (
    <div className="item">
      <div>
        <p>{noteData}</p>
        <p>{`${dateData} ${timeData}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;
