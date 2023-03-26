function setTimer(){
    const element1 = `
    <div>
        <h1>JavaScript</h1>
        <input type = "text" />
        <p>${new Date().toLocaleTimeString()}</p>
    </div>
`;

document.getElementById('container1').innerHTML = element1;
}
setInterval(setTimer,1000);
const element2=React.createElement(
    'div',
    null,
    React.createElement('h1',null,'React'),
    React.createElement('h1',null,
    React.createElement('input',{type: 'text'})
    ),
    React.createElement('p',null,new Date().toLocaleDateString())

);
ReactDOM.render(element2,document.getElementById('container2'));
setInterval(setTimer,1000);