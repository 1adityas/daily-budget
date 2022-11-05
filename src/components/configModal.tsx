export default function configModal(props: any) {
  console.log(props.show);
  return props.show ? (
    <div className="confMdl">
      <h1 >yo</h1>
    </div>
  ) : (
    <div></div>
  );
}
