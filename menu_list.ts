// menuItems.ts
export type Menu = {
name: string;
description: string;
price: number;
courseType: string;

}

const initialMenuItems: Menu[] = [
    {
        name: "Bruschetta",
        description: "Grilled bread topped with fresh tomatoes, garlic, and basil.",
        price: 6.99,
        courseType: "starter"
    },
    {
        name: "Stuffed Mushrooms",
        description: "Mushrooms filled with cheese and herbs, baked to perfection.",
        price: 7.99,
        courseType: "starter"
    },
    {
        name: "Grilled Salmon",
        description: "Salmon fillet grilled and served with lemon butter sauce.",
        price: 18.99,
        courseType: "main"
    },
    {
        name: "Chicken Alfredo",
        description: "Fettuccine pasta served with creamy Alfredo sauce and grilled chicken.",
        price: 15.99,
        courseType: "main"
    },
    {
        name: "Chocolate Lava Cake",
        description: "A warm chocolate cake with a gooey molten center.",
        price: 8.99,
        courseType: "dessert"
    },
    {
        name: "Cheesecake",
        description: "Classic New York-style cheesecake with a graham cracker crust.",
        price: 7.99,
        courseType: "dessert"
    }
];

export default initialMenuItems;
