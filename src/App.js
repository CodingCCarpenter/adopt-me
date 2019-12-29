const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),      
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name:"Shy", animal:"Dog", breed:'Austrian Shepard'}),
            React.createElement(Pet, { name:"Patches", animal:"Cat", breed:'Calico'}),
            React.createElement(Pet, { name:"Meescha", animal:"Dog", breed:'Siberian Husky'})
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));