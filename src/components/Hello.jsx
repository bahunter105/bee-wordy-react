// before
const Hello = (props) => {
  return <h1> Hello, {props.name} </h1>;
}

// with destructuring
const Hellp = ({ name }) => {
  return <h1> Hello, {name} </h1>;
}

const helloHunter = <Hello name='Hunter' />
