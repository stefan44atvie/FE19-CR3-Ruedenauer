export const products: {name: string, price: number, description?: string, availability:boolean, image:string, category:string}[] = [
    {    
        name: "Himbeer Soda",
        price: 3.50,
        description: "A tasty drink with bubbly or silent water",
        availability: false,
        image: "../../assets/images/menu/himbeer.JPG",
        category: "Drink"
    },
    {
        name: "Tegernseer Beer",
        price: 5.40,
        description: "The famous beer of bavarian production from Tegernsee",
        image: "../../assets/images/menu/beer1.jpeg",
        category: "Drink",
        availability: true
    },
    {
        name: "Classic White Wine",
        price: 6.40,
        description: "Classical White Wine, produced in Upper Austria",
        category: "Drink",
        availability:true,
        image: "../../assets/images/menu/wine.jpeg"
    },
    {
        name: "Hirter Spieß",
        price: 13.50,
        description: "with juicy pork",
        availability:true,
        image: "../../assets/images/menu/spiess.jpeg",
        category: "Dish"
    },
    {
        name: "Hähnchensalat",
        price: 9.80,
        description: "fruity chicken salad with curry dressing",
        availability:true,
        image: "../../assets/images/menu/food1.jpeg",
        category: "Dish"
    },
    {
        name: "Sausage with dumplings",
        price: 9.80,
        description: "Frankfurter Sausages with bread dumplings",
        availability:true,
        image: "../../assets/images/menu/food2.jpg",
        category: "Dish"
    },
    {
        name: "Grilled roast chicken",
        price: 14.80,
        description: "Grilled roast chicken with various attachments",
        availability:true,
        image: "../../assets/images/menu/food3.JPG",
        category: "Dish"
    },
]