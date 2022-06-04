import { memo } from "react";

export const Child2 = memo((props) => {
  console.log("<Child2>がレンダリングされました");
  const { onClickClear } = props;
  return (
    <div className="child2">
      <p className="conponemtName">Child2</p>
      <label htmlFor="radio-1">
        <input type="radio" name="gender" value="ラジオ1" id="radio-1" />
        <span className="mwform-radio-field-text">ラジオ1</span>
      </label>
      <label htmlFor="radio-2">
        <input type="radio" name="gender" value="ラジオ2" id="radio-2" />
        <span className="mwform-radio-field-text">ラジオ2</span>
      </label>
      <button onClick={onClickClear}>プルダウンの選択をリセットする</button>
    </div>
  );
});
