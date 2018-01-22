import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { getRecipes } from './apis/Yummly';

// const Home = () => {
//   const recipes = await getRecipes();
//   console.log(recipes);
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// };

class Home extends React.Component {
  state = { recipes: [] as any[] };

  async componentDidMount() {
    const recipes = await getRecipes();
    console.log(recipes);
    await this.setState({ recipes });
  }

  displayRecipeList(): any {
    return this.state.recipes.map((recipe, i) => (
      <div key={i}>
        <h3>{recipe.recipeName}</h3>
        <img src={recipe.imageUrlsBySize[90]} />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>{this.displayRecipeList()}</div>
      </div>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;
