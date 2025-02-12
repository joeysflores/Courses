const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

const react = tecnologias[3]

//Destructuring Arrays: Extrae en orden desde la posicion 0
const [html, css, nodejs, reactjs] = tecnologias
const [,,, reactjs2] = tecnologias //Es igual al anterior si no quieres generar variables que no necesitas

console.log(reactjs2)