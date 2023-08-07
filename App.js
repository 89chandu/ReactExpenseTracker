// import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
// import Person from './Person/Person';
import Expense from './Person/Expense';


// class  App extends Component {
//   constructor(props){
//     super(props);
//        this.state = {
//         persons: [
//           {
//             id:1,
//           name: " Chandu bopche ", 
//           age : 23,
//           },
//           {
//             id:2,
//             name: "Nilesh choudhry",
//             age: 22,
//           }, 
//           {
//             id:3,
//             name:"Sanket Rahangdale",
//             age: 21,
//           }
//         ],
//         isShow:true,
//       };
//       this.toggleHandler = this.toggleHandler.bind(this);
//     }
//      toggleHandler(){
//       this.setState({isShow: !this.state.isShow})
//     }
//   render(){
//       let persons;
//       if(this.state.isShow){
//       persons=this.state.persons.map((p) =>{
//         return(
//           <Person key ={p.id} name = {p.name} age ={p.age} />
//         )
//       });
//     }else{
//         persons="";
//       }
//       return <div className="App">
//         <button onClick={this.toggleHandler}>button</button>
//         {persons}
//         </div>;
// }
// }

function App(){
  return(
    <div>
      <h2>Lets get started</h2>
      <Expense></Expense>
    </div>
  );
}

export default App;
  