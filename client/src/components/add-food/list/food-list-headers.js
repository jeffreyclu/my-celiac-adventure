import React from 'react';

import { addFoodLabels } from '../constants';

import styles from './food-list.module.css';

export default function FoodListHeaders() {
  const foodListHeaders = Object.values(addFoodLabels)
    // filter out the explanation fields, no need to show them
    ?.filter((label) => !/Explanation/.test(label))
    ?.map((header, i) => (
      <span
        className={`${styles.foodListFields} ${styles.headers}`}
        key={`Header_${i}`}>
        {header}
      </span>
    ));
  return <section className={styles.foodListItem}>{foodListHeaders}</section>;
}
