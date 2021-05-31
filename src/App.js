import './App.scss';
import DishForm from './components/DishFormPage/DishFormPage'
import chefSVG from './undraw_Chef.svg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${chefSVG})`}}>
      <DishForm />
    </div>
  );
}

export default App;