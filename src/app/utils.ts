import {IDnaItem} from './model';

export function haveMatches(item: IDnaItem, arr: IDnaItem[]): boolean {
  return !!arr.find(arrItem => (arrItem.region === item.region && arrItem.value === item.value));
}
