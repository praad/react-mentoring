import Component from "./ExampleComponents/Component";
import PureComponent from "./ExampleComponents/PureComponent";
import FunctionalComponent from "./ExampleComponents/FunctionalComponent";
import CreateElement from "./ExampleComponents/CreateElement";
import Counter from "./Counter/Counter";
import SearchForm from "./SearchForm/SearchForm";
import GenreToggle from "./GenreToggle/GenreToggle";

function Task1() {
  return (
    <div className="Task1">
      <CreateElement />
      <Component />
      <PureComponent />
      <FunctionalComponent />
      <Counter />
      <SearchForm />
      <GenreToggle />
    </div>
  );
}

export default Task1;
