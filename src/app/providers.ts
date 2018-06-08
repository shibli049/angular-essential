import { InjectionToken } from '@angular/core';

export const lookupLists = new InjectionToken('lookupListToken');

export const LOOKUP_LISTS = {
  mediums: [
    'Movies',
    'Series'],
  categories: [
    'Action',
    'Sci-Fi',
    'Comedy',
    'Drama',
    'Horror',
    'Romance'
   ]
};
