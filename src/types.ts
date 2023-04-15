export type Pocket = {
    name?: string,
    cards: Card[]
}

export type Card = {
    name: string,
    path: string
}

export interface CardForm {
    name: string
}