import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AccountType = "personal" | "business" | null;

export interface personalDate {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  appartment: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
}

export interface SignupState {
  accountType: AccountType;
  products: string[];
  email?: string;
  password?: string;
  otpVerified: boolean;
  personalData: personalDate;
  submittedAt?: string; // ISO timestamp
}

const initialState: SignupState = {
  accountType: null,
  products: [],
  email: undefined,
  password: undefined,
  otpVerified: false,
  personalData: {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    street: "",
    appartment: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
  },
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
      action: PayloadAction<{ email: string; password: string }>,
    ) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setOTPVerified(state, action: PayloadAction<boolean>) {
      state.otpVerified = action.payload;
    },
    setPersonalInfo(state, action: PayloadAction<personalDate>) {
      state.personalData.firstName = action.payload.firstName;
      state.personalData.middleName = action.payload.middleName;
      state.personalData.lastName = action.payload.lastName;
      state.personalData.dateOfBirth = action.payload.dateOfBirth;
      state.personalData.street = action.payload.street;
      state.personalData.appartment = action.payload.appartment;
      state.personalData.city = action.payload.city;
      state.personalData.state = action.payload.state;
      state.personalData.zipcode = action.payload.zipcode;
      state.personalData.phone = action.payload.phone;
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
