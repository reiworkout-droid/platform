import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("アドレス入力");

  //イベント処理＝苦チックしたらXXXするなど
  const handleNameChange = (e) => {
    //処理書く
    //useStateのsetNameのターゲットのバリュー
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    //処理書く
    //useStateのsetNameのターゲットのバリュー
    setEmail(e.target.value);
  };


  useEffect(() => {
    console.log("起動しました");
  //このしたは消さない  
  }, []);

      console.log("順番の確認");


  return (
    <>
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