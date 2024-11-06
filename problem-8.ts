{
    const validateKeys = <T extends object>(obj: T, keys: (keyof T | any)[]): boolean => {
        return keys.every(key => key in obj);

    }


}