const Pet = /* props or...*/ ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Rex",
      animal: "Dog",
      breed: "American Stafford - Belgian Malinois"
    }),
    React.createElement(Pet, {
      name: "Minou",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Shiner",
      animal: "Fish",
      breed: "Gold"
    })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
