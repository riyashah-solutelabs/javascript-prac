let user = {
    name: "John Doe",
    age: 30,
    _password: "123456"
}

user = new Proxy(user, {
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith("_"))
    }
})

for(let key in user){
    console.log(key)
}

console.log(Object.keys(user))
console.log(Object.values(user))
