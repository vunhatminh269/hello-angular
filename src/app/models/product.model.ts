export class Product {
  id: number | undefined;
  name!: string;
  description!: string;
  price!: number;
  imageUrl!: string;
  discountedPrice: string | number | undefined;
  image: any;
}
