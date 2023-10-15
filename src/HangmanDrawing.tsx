export function HangmanDrawing() {
    return <div // Create a div to hold the drawing
     style={{ position: 'relative' }}> 
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
            height: "250px", 
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