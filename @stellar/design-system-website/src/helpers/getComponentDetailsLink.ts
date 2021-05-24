import { Routes, ComponentDetailsId } from "types/types.d";

export const getComponentDetailsLink = (component: ComponentDetailsId) =>
  `/${Routes.component}/${component}`;
