export type BreadcrumbsProps = {
  props: BreadcrumbType[];
};
export type BreadcrumbType = {
  title: string;
  pathname: string;
};

export type ProductProps = {
  props: ProductType;
};

export type ProductType = {
  title: string;
  img: string;
  price: number;
};
