import React from "react";
import Sidebar from "./Sidebar";
import Shot from "./Shot.png";
import Output from "./Output.png";
import Sree from "./Sree.png";
import Sakhi from "./Sakhi.png";
// import image1 from './image1.png';
// import image2 from './image2.png';
// import image3 from './image3.png';
// import image4 from './image4.png';
// import image5 from './image5.png';
// import image6 from './image6.png';


const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u>Inheritance</u></h1>

      <tr><h2 align="left"><u></u></h2>
      <h5>To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:.</h5>
       </tr>
        <tr><h1 align="left"></h1>
        <li>The super() method refers to the parent class.</li>
          <li>By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods..</li>
          <li>Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class..</li>
    
       </tr>

      <tr><h4 align="left"><u>Getter and Setters</u></h4>
          <li>Classes also allows you to use getters and setters..</li>
          <li>It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.</li>
          <li>To add getters and setters in the class, use the get and set keywords.</li>
          
      </tr>
      <tr><h4 align="left"><u>Example</u></h4>
      <img src={Shot} />
</tr>
     <tr><h4 align="left">Output</h4>
 <p><img src={Output}/>
 <tr>
    <h1 align="left">SuperKeyWord</h1>
    <p>The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.</p>
     <h3>Example</h3>
     <img src={Sree}/>
     <h4>Output</h4>
     <img src={Sakhi}/>
 </tr>
</p></tr>

     
      
         
        <tr>
         <p> <p>
            
          </p></p></tr>

       

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;