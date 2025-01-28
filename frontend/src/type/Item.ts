export interface Item {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface ItemRef {
    uid: string;
    item: Item;
}