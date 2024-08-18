
import './App.css';
import Button, { Lable } from './component/Button/Button';
// import Icon from './component/braveicon/Icon';

function App() {
  const imgs={
    img1:"https://banner2.cleanpng.com/20180718/hfx/kisspng-react-javascript-vue-js-logo-science-experiments-5b4fa654cef869.0219548815319465808478.jpg",
    img2:"https://banner2.cleanpng.com/20180325/kpq/kisspng-python-logo-programmer-fierce-python-cliparts-5ab7bde1954e21.4104715915219911376116.jpg",
    img3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqT3qIoz6lO3Px9asJZMjpx5R4_lsTR9f6ZQ&s",
    
  }
  // // Image calling using object
  // return (
  //   <div className="App">
     
  //   <Icon img={imgs.img1} txt={"React"}/>
  //   <Icon img={imgs.img2} txt={"React"}/>
  //   <Icon img={imgs.img3} txt={"React"}/>
  //   <Icon img={imgs.img1} txt={"React"}/>
  //   <Icon img={imgs.img1} txt={"React"}/>
  //   </div>
  // );

//   return (
//     <div className="App">
      
//   <Button cname={"one"} txt={"Home"} bg={"red"}/>
//   <Button cname={"two"} txt={"About"} bg={"blue"}/>
//   <Button cname={"three"} txt={"Submit"} bg={"green"}/>
//   <Button cname={"four"} txt={"Select"} bg={"yellow"}/>
//   <Button cname={"five"} txt={"Continue"} bg={"red"}/>
//   <Button cname={"six"} txt={"Cancel"} bg={"white"}/>
//   <Button cname={"seven"} txt={"Help"} bg={"white"}/>
//     </div>
//   );


return(
  <div className='App'>
    <Lable txt={"FirstName"} type={"number"} bg={"red"}/>
  </div>
)

}

export default App;
