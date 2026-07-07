import {atom} from 'jotai';

export const mobileMenuOpenAtom = atom(false);
export const contactModalOpenAtom = atom(false);
export const selectedServiceCategoryAtom = atom<'all' | 'telecom' | 'digital'>('all');
