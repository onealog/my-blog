export interface CardListProps {
  title: string;
  date: string;
  description: string;
};

export interface CardListWithLinkProps extends CardListProps {
  link: string;
};
