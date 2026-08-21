export type Product = {
  id: string;
  name: string;
  game: string;
  category: string;
  price: number;
  image: string;
  description: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: "rucoy-001",
    name: "Conta Rucoy Online #001",
    game: "Rucoy Online",
    category: "Contas",
    price: 49.90,
    image: "/products/rucoy-1.svg",
    description: "Conta demonstrativa pronta para personalizar com os dados do seu produto.",
    stock: 1
  },
  {
    id: "rucoy-002",
    name: "Conta Rucoy Online #002",
    game: "Rucoy Online",
    category: "Contas",
    price: 79.90,
    image: "/products/rucoy-2.svg",
    description: "Conta demonstrativa para seu catálogo. Substitua pelos seus dados reais.",
    stock: 1
  },
  {
    id: "item-001",
    name: "Pacote de Itens",
    game: "Rucoy Online",
    category: "Itens",
    price: 29.90,
    image: "/products/item-1.svg",
    description: "Pacote demonstrativo de itens digitais.",
    stock: 5
  },
  {
    id: "kit-001",
    name: "Kit Premium",
    game: "Rucoy Online",
    category: "Kits",
    price: 99.90,
    image: "/products/kit-1.svg",
    description: "Kit demonstrativo para destacar uma oferta especial.",
    stock: 3
  }
];