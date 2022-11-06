

export default function configModal(props: any) {
  function setTotal(event:any){
    console.log();
    props.setTotal(()=>!isNaN(event.target.value)?(event.target.value):"")
  }

  // console.log(props.show);
  return props.show ? (
    <div className="divvv">
      <div className="confMdl">
        <h1>Set Daily Limit</h1>
        <label className="lbl">
            <input onChange={setTotal }></input>
        </label>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
