import { useState, useCallback } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
import "./styles.css";

export default function App() {
  console.log("レンダリング開始-----------------------");
  // selectの初期値を指定
  const [selectArea, setSelectArea] = useState("");

  // selectを変更した時
  const onChangeArea = (e) => {
    setSelectArea(e.target.value);
    console.log("onChangeAreaイベントが実行されました");
  };

  //　selectの選択をクリア
  const onClickClear = useCallback(() => {
    setSelectArea("");
  }, []);

  console.log("<Parent>がレンダリングされました");

  return (
    <div className="parent">
      <p className="conponemtName">Parent</p>
      <Child1
        onChangeArea={onChangeArea}
        setSelectArea={setSelectArea}
        selectArea={selectArea}
      />
      <Child2 onClickClear={onClickClear} />
    </div>
  );
}
