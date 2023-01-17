export interface CardListProps {
  title: string;
  date: string;
  description: string;
}

export interface CardListWithLinkProps extends CardListProps {
  link: string;
}

export interface IntroductionProps {
  title1: string;
  title2: string;
  subTitle1: string;
  subTitle2: string;
}
