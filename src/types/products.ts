export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  repairer: string;
  status: number;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
}

export interface Guarantee {
  start: string;
  end: string;
}

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}
