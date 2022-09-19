import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add ,submittingStatue}) => {
  const [note, setNote] = useState("");
  function onNoteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function onDateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function onTimeChange(e) {
    setTime(e.target.value);
  }

  console.log(note, date, time);

  function addItem() {
    submittingStatue.current =true
    // 需拿到上一個值 add, add 為空陣列
    // 把現在 data 塞進去，上個值為解構
    add(function (preData) {
      return [
        ...preData,
        {
          id: v4(),
          note,
          date,
          time,
        },
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={onNoteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={onDateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={onTimeChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
