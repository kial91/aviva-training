interface IPizza {
    name: string;
    slices: number;
    toppigs: string | Array<string>;
    price: number;
    cheescrust?: boolean;
}

let solutionPizza: IPizza[] = [
    {
        name: 'Pizza BBQ',
        slices: 6,
        toppigs: ['Tomatosauce', 'BBQ sauce'],
        price: 15,
        cheescrust: true
    },
    {
        name: 'Margarita',
        slices: 8,
        toppigs: 'Tomatosauce and cheese',
        price: 10
    },
    {
        name: 'Hawaiian',
        slices: 10,
        toppigs: 'Ham and pineapple',
        price: 10,
        cheescrust: false
    }
];