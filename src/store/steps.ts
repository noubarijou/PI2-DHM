import { create } from 'zustand';

export type Field = 'email' | 'name' | 'dni' | 'phone' | 'password' | '';

type StepsStoreType = {
  step: number;
  setNextStep: () => void;
  setPreviousStep: () => void;
};

const LAST_STEP = 1;

export const useStepsStore = create<StepsStoreType>(set => ({
  step: 0,
  setNextStep: () =>
    set(state => ({ step: Math.min(state.step + 1, LAST_STEP) })),
  setPreviousStep: () => set(state => ({ step: Math.max(state.step - 1, 0) }))
}));
