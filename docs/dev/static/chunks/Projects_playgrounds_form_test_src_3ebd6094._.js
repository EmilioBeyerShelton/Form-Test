(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/playgrounds/form_test/src/store/signupSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "hydrate",
    ()=>hydrate,
    "reset",
    ()=>reset,
    "setAccountType",
    ()=>setAccountType,
    "setCredentials",
    ()=>setCredentials,
    "setOTPVerified",
    ()=>setOTPVerified,
    "setPersonalInfo",
    ()=>setPersonalInfo,
    "toggleProduct",
    ()=>toggleProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$10$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/playgrounds/form_test/node_modules/.pnpm/@reduxjs+toolkit@2.10.1_react-redux@9.2.0_@types+react@19.2.2_react@19.2.0_redux@5.0.1__react@19.2.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
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
        phone: ""
    }
};
const slice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$10$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "signup",
    initialState,
    reducers: {
        setAccountType (state, action) {
            state.accountType = action.payload;
        },
        toggleProduct (state, action) {
            const p = action.payload;
            if (state.products.includes(p)) {
                state.products = state.products.filter((x)=>x !== p);
            } else {
                state.products.push(p);
            }
        },
        setCredentials (state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        setOTPVerified (state, action) {
            state.otpVerified = action.payload;
        },
        setPersonalInfo (state, action) {
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
        hydrate (state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
        reset () {
            return initialState;
        }
    }
});
const { setAccountType, toggleProduct, setCredentials, setOTPVerified, setPersonalInfo, hydrate, reset } = slice.actions;
const __TURBOPACK__default__export__ = slice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/playgrounds/form_test/src/store/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "store",
    ()=>store,
    "useAppDispatch",
    ()=>useAppDispatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$10$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/playgrounds/form_test/node_modules/.pnpm/@reduxjs+toolkit@2.10.1_react-redux@9.2.0_@types+react@19.2.2_react@19.2.0_redux@5.0.1__react@19.2.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playgrounds/form_test/node_modules/.pnpm/react-redux@9.2.0_@types+react@19.2.2_react@19.2.0_redux@5.0.1/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$src$2f$store$2f$signupSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playgrounds/form_test/src/store/signupSlice.ts [app-client] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$10$2e$1_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        signup: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$src$2f$store$2f$signupSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"];
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/playgrounds/form_test/src/providers/ReduxProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playgrounds/form_test/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playgrounds/form_test/node_modules/.pnpm/react-redux@9.2.0_@types+react@19.2.2_react@19.2.0_redux@5.0.1/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playgrounds/form_test/src/store/index.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playgrounds$2f$form_test$2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Projects/playgrounds/form_test/src/providers/ReduxProvider.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projects_playgrounds_form_test_src_3ebd6094._.js.map