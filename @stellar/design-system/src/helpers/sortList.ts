import BigNumber from "bignumber.js";
import { get } from "lodash";
import { SortOrder } from "../types/types";

type GenericObject = {
  [key: string]: any;
};

export const sortList = <T extends GenericObject>(
  data: T[],
  sortByKey: string,
  sortOrder?: SortOrder,
) => {
  if (!data.length) {
    return data;
  }

  const isDescOrder = sortOrder === SortOrder.DESC;

  return [...data].sort((a, b) => {
    const valA = get(a, sortByKey);
    const valB = get(b, sortByKey);

    const numA = new BigNumber(valA);
    const numB = new BigNumber(valB);

    // Compare strings and dates
    if (numA.isNaN() || numB.isNaN()) {
      // Compare dates
      const datetimeA = new Date(valA).getTime();
      const datetimeB = new Date(valB).getTime();

      // Compare dates
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(datetimeA) && !isNaN(datetimeB)) {
        return isDescOrder ? datetimeA - datetimeB : datetimeB - datetimeA;
      }

      // Compare strings
      const stringA = valA.toUpperCase();
      const stringB = valB.toUpperCase();

      if (stringA > stringB) {
        return isDescOrder ? -1 : 1;
      }

      if (stringA < stringB) {
        return isDescOrder ? 1 : -1;
      }

      return 0;
    }

    // Compare numbers
    if (numA.gt(numB)) {
      return isDescOrder ? -1 : 1;
    }

    if (numA.lt(numB)) {
      return isDescOrder ? 1 : -1;
    }

    return 0;
  });
};
