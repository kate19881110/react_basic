import { useState , useEffect,useRef} from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import {API_GET_DATA} from '../../global/constants'

// 打API
async function fetchData(setData){
  const res= await fetch(API_GET_DATA)
  const {data} = await res.json()
  setData(data)
}

async function fetchSetData(data){
  await fetch(API_GET_DATA,{
    method: "PUT",
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({data})
  })
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatue =useRef(false)

  useEffect(()=>{ // 2. userEffect 重新渲染時候，重新整理 ，值有變動就更新 API
    if(!submittingStatue.current){
      return
    }
    fetchSetData(data)
      .then(data=>submittingStatue.current = false)
  },[data])

  useEffect(()=>{ // 1. userEffect 是被動效果, 一開始載入時把值渲染到頁面
    fetchData(setData)
  },[])
  return (
    <div className="app">
      <Edit add={setData} submittingStatue={submittingStatue}/>
      <List listData={data} deleteData={setData} submittingStatue={submittingStatue}/>
    </div>
  );
};

export default Home;
