const Head = (
    <div 
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-30px" // Why -30px? Because the width of the drawing is 250px, and the width of the head is 50px, so 250px - 50px = 200px. 200px / 2 = 100px. 100px + 10px = 110px. 110px - 50px = 60px. 60px / 2 = 30px.
        }}/>
)
const Body = (
    <div 
        style={{
            width: "10px",
            height: "100px",
            background: "black",
            position: "absolute",
            top: "120px", // Why 120px? Because the height of the head is 50px, and the height of the body is 100px, so 50px + 100px = 150px. 150px - 30px = 120px.
            right: "0" // Why 0? Because the right of the drawing is at the right of the div.
        }}/>
)
const Right_Arm = (
    <div 
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "150px", 
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "bottom left"
        }}/>
)
const Left_Arm = (
    <div 
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "150px", 
            right: "10px", 
            rotate: "30deg",
            transformOrigin: "bottom right"
        }}/>
)
const Right_Leg = (
    <div 
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "210px", 
            right: "-90px",
            rotate: "60deg",
            transformOrigin: "bottom left"
        }}/>
)
const Left_Leg = (
    <div 
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "210px", 
            right: "0",
            rotate: "-60deg",
            transformOrigin: "bottom right"
        }}/>
)


export function HangmanDrawing() {
    return <div // Create a div to hold the drawing
     style={{ position: 'relative' }}> 
     {Head}
     {Body}
     {Right_Arm}
     {Left_Arm}
     {Right_Leg}
     {Left_Leg}
     <div 
        style={{
            height: "50px", 
            width: "10px", 
            background: "black",
            position: "absolute",
            top: "0", // Why 0? Because the top of the drawing is at the top of the div.
            right: "0" // Why 0? Because the right of the drawing is at the right of the div.
        }} 
    />
     <div 
        style={{
            height: "10px", 
            width: "200px", 
            background: "black",
            marginLeft: "120px" // Why 120px? Because the width of the drawing is 250px, and the width of the line is 10px, so 250px - 10px = 240px. 240px / 2 = 120px.
        }} 
    />
     <div 
        style={{
            height: "400px", 
            width: "10px", 
            background: "black",
            marginLeft: "120px" // Why 120px? Because the width of the drawing is 250px, and the width of the line is 10px, so 250px - 10px = 240px. 240px / 2 = 120px.
        }} 
    />

     <div 
        style={{
            height: "10px",
            width: "250px", 
            background: "black"
        }} 
    />
     </div>
}