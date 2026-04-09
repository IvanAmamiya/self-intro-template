import { useEffect, useReducer } from 'react';
import { defaultProfile } from '../constants/defaultProfile';
import { loadDraft, saveDraft } from '../services/storageService';
import type { ProfileData } from '../types/profile';

type Action =
  | { type: 'set'; payload: ProfileData }
  | { type: 'patch'; payload: Partial<ProfileData> }
  | { type: 'patch-contact'; payload: Partial<ProfileData['contact']> }
  | { type: 'patch-theme'; payload: Partial<ProfileData['theme']> }
  | { type: 'reset' };

function reducer(state: ProfileData, action: Action): ProfileData {
  switch (action.type) {
    case 'set':
      return action.payload;
    case 'patch':
      return { ...state, ...action.payload };
    case 'patch-contact':
      return { ...state, contact: { ...state.contact, ...action.payload } };
    case 'patch-theme':
      return { ...state, theme: { ...state.theme, ...action.payload } };
    case 'reset':
      return defaultProfile;
    default:
      return state;
  }
}

export function useProfileForm() {
  const [data, dispatch] = useReducer(reducer, defaultProfile);

  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      const merged: ProfileData = {
        ...defaultProfile,
        ...draft,
        contact: {
          ...defaultProfile.contact,
          ...draft.contact,
        },
        theme: {
          ...defaultProfile.theme,
          ...draft.theme,
        },
        privacy: {
          ...defaultProfile.privacy,
          ...draft.privacy,
        },
      };

      dispatch({ type: 'set', payload: merged });
    }
  }, []);

  useEffect(() => {
    saveDraft(data);
  }, [data]);

  return {
    data,
    setField: (payload: Partial<ProfileData>) => dispatch({ type: 'patch', payload }),
    setContact: (payload: Partial<ProfileData['contact']>) => dispatch({ type: 'patch-contact', payload }),
    setTheme: (payload: Partial<ProfileData['theme']>) => dispatch({ type: 'patch-theme', payload }),
    reset: () => dispatch({ type: 'reset' }),
    saveNow: () => saveDraft(data),
  };
}
