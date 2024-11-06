{
    const removeDuplicates = (numbers: number[]): number[] => {
        const filteredArr: number[] = [];

        for (let i = 0; i < numbers.length; i++) {
            if (!filteredArr.includes(numbers[i])) {
                filteredArr.push(numbers[i]);
            }
        }

        return filteredArr;
    };


    // alternative with array method 

    // const removeDuplicatesAlterNative = (numbers: number[]): number[] => {
    //     return Array.from(new Set(numbers));
    // }




}
