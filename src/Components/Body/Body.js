import React from 'react'
import "./Body.css";

function Body() {
  const colors = ["#001524", "#ff7d00", "#A89C94FF", "#00203FFF", "#E94B3CFF", "#00539CFF"];  
  return (
    <div className="bcontainer">
        <p className="bheading">
            Resume Builder
        </p>
        <div className="toolbar">
            <div className="colors">
                {colors.map((item) => (
                    <span
                        key={item}
                        style={{ backgroundColor: item }}
                        className="color"
                    />
                ))}
            </div>
            <button className="download-btn"><span>Download!👍</span></button>
        </div>
    </div>
  )
}

export default Body