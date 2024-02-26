import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "./redux/reducer/counter";
import Form from "./components/Form";
import Cardcontainer from "./components/Cardcontainer";
function App() {

  const data = useSelector((state)=> state.counter);
  console.log(data);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <h1>{data.count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>  
      <button onClick={() => dispatch(decrement())}>-</button>   */}
      <Form/>
      <Cardcontainer/>
    </div>
  )
}

export default App
