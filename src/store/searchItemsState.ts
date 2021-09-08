import { atom, selector } from "recoil";
import { albums } from "../data/albums";

import { SearchResultItem } from "../models";

export interface SearchTermState {
    requestId: number;
    searchTerm: string;
}

export interface SearchItemsState {
    searchItems: Array<SearchResultItem>;
}

export const searchTermState = atom<{ requestId: number, searchTerm: string }>({
    key: 'searchTermState',
    default: { requestId: 0, searchTerm: '' }
});

export const searchItemsBySearchTerm = selector<SearchItemsState>({
    key: 'searchAjax',
    get: async ({ get }) => {
        console.log('Searching');
        const { searchTerm } = get(searchTermState);

        const result = await new Promise<SearchItemsState>((resolve) => {
            setTimeout(() => {
                resolve({ searchItems: albums.filter(si => si.title.indexOf(searchTerm) > 0) });
            }, 500);
        });

        return result;
    }
});