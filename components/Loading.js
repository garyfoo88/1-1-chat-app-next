import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{display: "grid", placeItems:"center", height:"100vh"}}>
      <div>
        <img
          src="./logo.png"
          alt=""
          height={200}
          style={{ marginBottom: 20 }}
        />
        <Circle color="green" size={60}/>
      </div>
    </center>
  );
}

export default Loading;
