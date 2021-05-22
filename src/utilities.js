// Drawing function
const draw = (predictions, ctx) => {
    if (predictions.length > 0) {
        
        for (let i = 0; i < predictions.length; i++) {
          const start = predictions[i].topLeft;
          const end = predictions[i].bottomRight;
          const size = [end[0] - start[0], end[1] - start[1]];
    
          // Render a rectangle over each detected face.
          
          ctx.beginPath();
          ctx.lineWidth = "6";
          ctx.strokeStyle = "red";
          ctx.rect(start[0], start[1], size[0], size[1]);
          ctx.stroke();
        }
      }

};

export default draw