{

    const getProperty = <O, K extends keyof O>(userData: O, key: K): O[K] => {
        return userData[key];
    };

}