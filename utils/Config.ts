export class Config {
  constructor(
    public decks: string[],
    public scores: Array<Array<number | null>>,
    public quantities: number[],
    public winCategories: WinCategory[]
  ) {}
}

export class WinCategory {
  constructor(
    public score: number,
    public chance: number,
    public emoji: string
  ) {}
}
