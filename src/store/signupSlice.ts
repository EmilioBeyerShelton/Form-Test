import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AccountType = "personal" | "business" | null;

export interface SignupState {
  accountType: AccountType;
  products: string[];
  email?: string;
  password?: string;
  otpVerified: boolean;
  name?: string;
  dob?: string; // ISO date
  ssn?: string;
  submittedAt?: string; // ISO timestamp
}

const initialState: SignupState = {
  accountType: null,
  products: [],
  email: undefined,
  password: undefined,
  otpVerified: false,
  name: undefined,
  dob: undefined,
  ssn: undefined,
  submittedAt: undefined,
};

const slice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setAccountType(state, action: PayloadAction<AccountType>) {
      state.accountType = action.payload;
    },
    toggleProduct(state, action: PayloadAction<string>) {
      const p = action.payload;
      if (state.products.includes(p)) {
        state.products = state.products.filter((x) => x !== p);
      } else {
        state.products.push(p);
      }
    },
    setCredentials(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setOTPVerified(state, action: PayloadAction<boolean>) {
      state.otpVerified = action.payload;
    },
    setPersonalInfo(
      state,
      action: PayloadAction<{ name?: string; dob?: string; ssn?: string }>
    ) {
      const { name, dob, ssn } = action.payload;
      if (name !== undefined) state.name = name;
      if (dob !== undefined) state.dob = dob;
      if (ssn !== undefined) state.ssn = ssn;
    },
    setSubmittedAt(state, action: PayloadAction<string | undefined>) {
      state.submittedAt = action.payload;
    },
    hydrate(state, action: PayloadAction<Partial<SignupState>>) {
      return { ...state, ...action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const {
  setAccountType,
  toggleProduct,
  setCredentials,
  setOTPVerified,
  setPersonalInfo,
  setSubmittedAt,
  hydrate,
  reset,
} = slice.actions;

export default slice.reducer;
