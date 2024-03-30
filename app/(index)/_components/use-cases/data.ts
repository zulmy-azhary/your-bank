import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import {
  HiBanknotes,
  HiBookOpen,
  HiBuildingLibrary,
  HiBuildingOffice2,
  HiCurrencyDollar,
  HiMiniPresentationChartBar,
} from "react-icons/hi2";

export const useCases = [
  {
    title: "For Individuals",
    description:
      "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
    metrics: [
      { percentage: 78, description: "Secure Retirement Planning" },
      { percentage: 63, description: "Manageable Debt Consolidation" },
      { percentage: 91, description: "Reducing financial burdens" },
    ],
    cards: [
      { icon: GiReceiveMoney, description: "Managing Personal Finances" },
      { icon: GiTakeMyMoney, description: "Saving for the Future" },
      { icon: HiBuildingLibrary, description: "Homeownership" },
      { icon: HiBookOpen, description: "Education Funding" },
    ],
  },
  {
    title: "For Business",
    description:
      "For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
    metrics: [
      { percentage: 65, description: "Cash Flow Management" },
      { percentage: 70, description: "Drive Business Expansion" },
      { percentage: 45, description: "Streamline payroll processing" },
    ],
    cards: [
      { icon: HiBuildingOffice2, description: "Startups and Entrepreneurs" },
      { icon: HiBanknotes, description: "Cash Flow Management" },
      { icon: HiMiniPresentationChartBar, description: "Business Expansion" },
      { icon: HiCurrencyDollar, description: "Payment Solutions" },
    ],
  },
];
