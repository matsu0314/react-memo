export const Child1 = (props) => {
  console.log("<Child1>がレンダリングされました");
  const areaData = [
    { name: "選択してください", value: "" },
    { name: "選択１", value: "選択１" },
    { name: "選択2", value: "選択2" },
    { name: "選択3", value: "選択3" },
    { name: "選択4", value: "選択4" }
  ];
  const { onChangeArea, selectArea } = props;
  return (
    <>
      <div className="child1">
        <p className="conponemtName">Child1</p>
        <div className="selectItem">
          <select onChange={onChangeArea} value={selectArea}>
            {areaData.map((area, index) => {
              return (
                <option key={index} value={area.value}>
                  {area.name}
                </option>
              );
            })}
          </select>
        </div>
        <p>
          {props.selectArea
            ? `選択したのは「${selectArea}」です。`
            : "ここにプルダウンで選択した値が表示されます"}
        </p>
      </div>
    </>
  );
};
