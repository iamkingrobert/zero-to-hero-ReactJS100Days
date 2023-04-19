import React from 'react'

// Please Read The Comments Below For Better Understanding Of Props And Props Destructuring

// We use props in React to pass data from one component to 
// another (from a parent component to a child component(s)). 
// Props is just a shorter way of saying properties. 


// name, age, and nationality are our props and as seen below. 
// We First Destructure The Props In The Function Parameter

function HowToProps(name, age, nationality) {
  return (
    <div>
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h2>{nationality}</h2>
    </div>
  )
}

// Destructuring Props: is a special kind of syntax you can use 
// to "unpack" (or extract) values from arrays, 
// or properties from objects, into distinct variables.

export default HowToProps