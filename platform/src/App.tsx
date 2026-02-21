import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css"
import News from "./components/News";
import CalendarItem from "./components/CalendarItem";
import ChartBar from "./components/ChartBar";
import Home from "./pages/home";
import Chart from "./pages/chart";
import NotFound from "./pages/notfound";

function App() {
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("アドレス入力");
  //API連携するため
  const [data, setData] = useState([]);


  //イベント処理＝苦チックしたらXXXするなど
  const handleNameChange = (e) => {
    //処理書く
  };
  const handleEmailChange = (e) => {
    //処理書く
  };


useEffect(() => {
    // この中に書きます🤗
    console.log("起動しました！！！！！！");

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response, "response");
        //ここでjsの形に変換するjson()を行なっています🤗
        const data = await response.json();
        console.log(data, "中身");
        // 取得したjsの形のデータをuseStateの更新の処理で上書きする
        setData(data);
      } catch (error) {}

      // おまじないの処理の終わり、下は消さない
    };

    // fetchDataを以下で動かします🤗
    fetchData();

    //スプレッドシートAPIを記述を書いて、データを読み込む→読み込みができたら画面に表示する
    // この下は消さない
  }, []);

      console.log("順番の確認");


  return (
    <>
      {data.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    <div>
      <p>名前が入ります</p>
      <input 
        type="text" 
        placeholder="名前を入力してください" 
        value={name} 
        onChange={handleNameChange}
      />
    </div>
    <div>
      <p>メールアドレスが入ります</p>
      <input
        type="text"
        placeholder="メールアドレスを入力してください"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
    </>
  );
}

export default App;