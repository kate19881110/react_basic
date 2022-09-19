import Item from "./Item";

// const array =[1,2,3]
const List = ({ listData ,deleteData,submittingStatue}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item 
          key={id} 
          id={id} 
          noteData={note} 
          dateData={date} 
          timeData={time} 
          deleteDataItem={deleteData} 
          submittingStatue={submittingStatue}/>
        );
      })}
    </div>
  );
};

export default List;
