import { GET_CARDS, CARDS_LOADING } from './types';

export const getCards = (data) => ({ type: GET_CARDS, payload: data });
export const cardsLoading = (loading) => ({ type: CARDS_LOADING, payload: loading });
