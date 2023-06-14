import {React,useState,useEffect} from 'react'
import Axios from 'axios'

function DataTable() {
    const [data,setData] = useState([]);
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
    .then((res)=>{
      if(res.status === 200){
        setData(res.data.users);
      }
      else{
        Promise.reject();
      }
    })
    .catch((err)=>{
      alert(err);
    })
  }, []);
  return (
    <div>
      <table>
        <tr><th>First Name</th><th>Last Name</th></tr>
        {(data.map((val,ind)=>{
          return <tr key = {ind}><td>{val.firstName}</td><td>{val.lastName}</td></tr>
        }))}
      </table>
    </div>
  )
}

export default DataTable