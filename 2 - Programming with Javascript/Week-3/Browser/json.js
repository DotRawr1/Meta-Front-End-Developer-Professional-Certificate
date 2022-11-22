// json string to js object
const jsonStr = '{"greeting":"hello"}'
const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = "hi"
aPlainObj

// js object to json string
// doesnt allow comments
const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Hello"
}
JSON.stringify(data)