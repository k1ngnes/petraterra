import sheben from "shared/assets/images/sheben.png";
import shps from "shared/assets/images/shps.png";
import pesokIzOtsevov from "shared/assets/images/pesokIzOtsevov.png";
import skmostLogo from "shared/assets/images/skmostLogo.svg";
import rjdLogo from "shared/assets/images/rjdLogo.svg";
import inkLogo from "shared/assets/images/inkLogo.svg";
import fifteenTwentyLogo from "shared/assets/images/fifteenTwentyLogo.svg";

export type TItem = {
  imgSrc: string;
  title: string;
  description: string;
  fractions: string[];
  productGroupId: number;
};

export const items: TItem[] = [
  {
    imgSrc: sheben,
    title: "Щебень",
    description: "Для изготовления бетона и дорожного строительства",
    fractions: ["25 – 60", "40 – 70", "20 – 40"],
    productGroupId: 0,
  },
  {
    imgSrc: shps,
    title: "ЩПС",
    description: "Применяется для дорожного строительства",
    fractions: ["0-40", "0-80"],
    productGroupId: 1,
  },
  {
    imgSrc: pesokIzOtsevov,
    title: "Песок из отсевов",
    description: "Из отсевов дробления",
    fractions: ["0-5"],
    productGroupId: 2,
  },
  {
    imgSrc: sheben,
    title: "Щебень",
    description: "Для изготовления бетона и дорожного строительства",
    fractions: ["25 – 60", "40 – 70", "20 – 40"],
    productGroupId: 0,
  },
  {
    imgSrc: shps,
    title: "ЩПС",
    description: "Применяется для дорожного строительства",
    fractions: ["0-40", "0-80"],
    productGroupId: 1,
  },
  {
    imgSrc: pesokIzOtsevov,
    title: "Песок из отсевов",
    description: "Из отсевов дробления",
    fractions: ["0-5"],
    productGroupId: 2,
  },
  {
    imgSrc: sheben,
    title: "Щебень",
    description: "Для изготовления бетона и дорожного строительства",
    fractions: ["25 – 60", "40 – 70", "20 – 40"],
    productGroupId: 0,
  },
  {
    imgSrc: shps,
    title: "ЩПС",
    description: "Применяется для дорожного строительства",
    fractions: ["0-40", "0-80"],
    productGroupId: 1,
  },
  {
    imgSrc: pesokIzOtsevov,
    title: "Песок из отсевов",
    description: "Из отсевов дробления",
    fractions: ["0-5"],
    productGroupId: 2,
  },
];

export type TReview = {
  id: number;
  logo: string;
  text: string;
  companyName: string;
};

export const reviews: TReview[] = [
  {
    id: 0,
    logo: skmostLogo,
    text: "<p>Благодарим «Петратерру» за высокий уровень профессионализма и плодотворное сотрудничество!</p><p>Уверены в дальнейшем сотрудничестве в таком же позитивном и результативном ключе!</p>",
    companyName: "АО «БАМТОННЕЛЬСТРОЙ-МОСТ»",
  },
  {
    id: 1,
    logo: rjdLogo,
    text: "<p>Качество вашей работы всегда на высоте, все выполнено очень четко и профессионально.</p><p>Вы всегда подходите к поставке практично и не допуская серьезных задержек в сроках.</p>",
    companyName: "ОАО «РОССИЙСКИЕ ЖЕЛЕЗНЫЕ ДОРОГИ»",
  },
  {
    id: 2,
    logo: inkLogo,
    text: "<p>Выражаем благодарность компании «Петратерра» за высококачественные поставки нерудных материалов.</p><p>Всегда остаемся довольны уровнем обслуживания и качеством материалов</p>",
    companyName: "АО «ИНК-КАПИТАЛ»",
  },
  {
    id: 3,
    logo: fifteenTwentyLogo,
    text: "<p>«Петратерра» всегда проявляла высокий уровень профессионализма. Менеджеры компании оперативно реагировали на наши запросы и предоставляли всю необходимую информацию</p>",
    companyName: "ООО «ГРУППА КОМПАНИЙ 1520»",
  },
  {
    id: 4,
    logo: fifteenTwentyLogo,
    text: "<p>«Петратерра» всегда проявляла высокий уровень профессионализма. Менеджеры компании оперативно реагировали на наши запросы и предоставляли всю необходимую информацию</p>",
    companyName: "ООО «ГРУППА КОМПАНИЙ 1520»",
  },
];
