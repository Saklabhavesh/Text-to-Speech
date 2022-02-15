import React from "react";
import Add from "../components/Add";

function Addition(){
    return (
    <div>
       <Add image1="/Images/5.jpg" image2="/Images/9n.jpg" plus="+" num1="5" num2="4" num3="9" num="4"></Add>
       <Add image1="/Images/4.jpg" image2="/Images/7n.jpg" plus="+" num1="4" num2="3" num3="7" num="3"></Add>

       <Add image1="/Images/3.jpg" image2="/Images/5n.jpg" plus="+" num1="3" num2="2" num3="5"></Add>
       <Add image1="/Images/2.jpg" image2="/Images/6n.jpg" plus="+" num1="2" num2="4" num3="6"></Add>

       <Add image1="/Images/6.jpg" image2="/Images/8n.jpg" plus="+" num1="6" num2="2" num3="8"></Add>
       <Add image1="/Images/3.jpg" image2="/Images/4n.jpg" plus="+" num1="3" num2="1" num3="4"></Add>


    </div>
    );
}

export default Addition;