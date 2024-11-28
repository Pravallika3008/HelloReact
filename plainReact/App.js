const title = React.createElement("h1", {id: 'heading'}, 'Hello World from React!!'); // this returns an object
const body = ReactDOM.createRoot(document.getElementById('root'));
body.render(title);// this render mechanism is to convert that object to an HTML element and display in Web UI. 

// rendering nested elements in  React

const parent = React.createElement(
    'div', {id:'heading'}, 
    React.createElement('div', {id:'child'}, 
        [React.createElement('h1', {id: 'title'}, "I'm h1 tag"), React.createElement('h2', {id: 'title'}, "I'm h2 tag")]
    ));
body.render(parent);
