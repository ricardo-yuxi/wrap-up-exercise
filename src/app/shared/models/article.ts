export class Article {
  name: string;
  cost: number;
  result: number;

  constructor(name: string, cost: number, result?: number) {
    this.name = name;
    this.cost = cost;
    this.result = result || 0;
  }

  calculateVat(): void {
    this.result = this.cost * 1.19;
  }
}