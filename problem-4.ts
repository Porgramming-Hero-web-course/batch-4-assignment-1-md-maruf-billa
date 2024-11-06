{
    // type for circle
    interface Circle {
        shape: "circle";
        radius: number;

    }
    // type for rectangle
    interface Rectangle {
        shape: "rectangle";
        width: number;
        height: number;
    }

    const calculateShapeArea = (userInput: Circle | Rectangle): number => {
        if (userInput.shape === "circle") {
            return Math.PI * userInput.radius ** 2
        }
        else if (userInput.shape === "rectangle") {
            return userInput.height * userInput.width
        }
        else {
            throw new Error("Shape type not match!!!!")
        }
    }

}