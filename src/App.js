import React, { Component } from 'react';
import './react_app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Rompe/>
      <Calc/>
      <Blim/>
      <Canven/>
      </div>
    );
  }
}
class Rompe extends Component{
  render(){
    return(
      
      <div class="[ test ]">
          <h1 class="[ test__hed ]">Hey i am React!</h1>
          <div class="[ test__img ]">
          <img class="[ test__img-traget ]" src="https://via.placeholder.com/150/f0f8ffbe/ ?Text=imgC/O https://placeholder.com/" onClick={function(){
             alert("im am the best");
          }} ></img>

     
          </div>
          <p class="[ test__parga ]">This is the way you make a React page</p>
      </div>
    )
  }
}



class Calc extends Component{
 
 
  
  render(){


function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    
    
    seconds = time.getSeconds();

  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);

    return(
      <div class="[ frame ]" /*id="MyClockDisplay"*/>
<h2 class="[ frame__heding ]">The calender</h2>
            <div class="[ frame__month ]">
            <div class="[ frame__month-her ]">The time of day</div>
            <h3 class="[ clock ]"></h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            
            </ul>

<ul class="[ frame__weekdays ]">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
 </ul>

<ul class="[ frame__days ]">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li><span class="[ frame__active ]">10</span></li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>16</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            
            
            <li id="potp">29</li>
            <li id="potp">30</li>
            <li id="potp">31</li>
            <li id="potp">1</li>

</ul>
            </div>
      </div>
    )
    
  }
 
}
class Blim extends Component{
  render(){
    return(
    <div class="cont">
        
        <h1 class="[ heding ]">im a hedding! inside react</h1> 
        <div class="[ Gallery ]">
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
          <img src="https://via.placeholder.com/100" ></img>
    
          </div> 
          
       
    </div>
    )
  }
}


class Canven extends Component{
  render(){
 
    return(
      <div class="Holder">
      <h1 class="time">Time line</h1>

      <hr></hr>
       <div class="timeline">
       <h2>- 2017</h2>
  <div class="container-left">
    <div class="content">
 
      <p class="left">Lorem ipsum..</p>
    </div>
  </div>
  <h2>- 2016</h2>
  <div class="container-right">
    <div class="content">
      
      <p class="right">Lorem ipsum..</p>
    </div>
  </div>
  <h2>- 2015</h2>
  <div class="container-right">
    <div class="content">
      
      <p class="left">Lorem ipsum..</p>
    </div>
  </div>
  <h2>- 2014</h2>
  <div class="container-right">
    <div class="content">
      
      <p class="right">Lorem ipsum..</p>
    </div>
  </div>
  <h2>- 2013</h2>
  <div class="container-right">
    <div class="content">
      
      <p class="left">Lorem ipsum..</p>
    </div>
  </div>

</div> 
        
  
      
      </div>
     
  

    )
  }
}


export default App;
