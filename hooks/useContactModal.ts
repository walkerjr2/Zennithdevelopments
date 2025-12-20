'use client';

import { create } from 'zustand';

type ModalType = 'questionnaire' | 'calendar' | 'calculator' | 'quick' | null;

interface ContactModalState {
  isOpen: boolean;
  modalType: ModalType;
  context: Record<string, any>;
  openModal: (type: ModalType, ctx?: Record<string, any>) => void;
  closeModal: () => void;
  setContext: (ctx: Record<string, any>) => void;
}

export const useContactModal = create<ContactModalState>((set) => ({
  isOpen: false,
  modalType: null,
  context: {},
  openModal: (type, ctx = {}) =>
    set({
      isOpen: true,
      modalType: type,
      context: ctx,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      // Keep modalType and context for potential re-opening
    }),
  setContext: (ctx) =>
    set((state) => ({
      context: { ...state.context, ...ctx },
    })),
}));
