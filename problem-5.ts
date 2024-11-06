{


    const getProperty = <O, K extends keyof O>(userData: O, key: K): O[K] => {
        return userData[key];
    };

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}