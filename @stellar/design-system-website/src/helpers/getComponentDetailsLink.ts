import { Routes, ComponentDetailsId } from "types/types";

export const getComponentDetailsLink = (component: ComponentDetailsId) =>
  `/${Routes.component}/${component}`;
