"use client";

import React, { useEffect } from "react";
import { Provider, useStore } from "react-redux";
import store, { RootState } from "../store/index";
import { hydrate as hydrateAction } from "../store/signupSlice";

// Provider wrapper that also hydrates from sessionStorage and persists on changes
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Hydrator>{children}</Hydrator>
    </Provider>
  );
}

function Hydrator({ children }: { children: React.ReactNode }) {
  const st = useStore();

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("signupState");
      if (raw) {
        const parsed = JSON.parse(raw);
        st.dispatch(hydrateAction(parsed));
      }
    } catch {
      // ignore
    }

    const unsubscribe = st.subscribe(() => {
      try {
        const state = st.getState() as RootState;
        sessionStorage.setItem("signupState", JSON.stringify(state.signup));
      } catch {
        // ignore
      }
    });

    return () => unsubscribe();
  }, [st]);

  return <>{children}</>;
}
