{
    class Car {
        private currentYear = new Date().getFullYear();
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge() {
            if (this.currentYear > this.year) {
                return this.currentYear - this.year;
            }
            else {
                return ("You inputted future date.")
            }
        }
    }




}