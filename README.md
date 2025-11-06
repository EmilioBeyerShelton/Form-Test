This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Documentation

Prompt:
I am building a multi step signup for a fictional bank. We start with 6 pages that have the features listed down below. We store the date that is submitted by the user in a Redux store for session persistance and will present the datat on the last page of the form. We use Shadcn for ui components and the builtin page router fron Next.js for navigation. For forms we use the Form component and a form schema from shadcn. Start by building these pages and create the Redux store with a sclice and reducer.

- **Landing Page**: This page has a Welcome message, a short description of what you can do on this website, two cards for two accounts (Personal and Business) and a submit button. create some feature for the two accounts that will be listed on each card. The user will need to select one of the two Account models to be able to continue.
- **Additional Products**: This page has some additional products like a "Investment" package or a "Cashback" package one can add to therir basic account. these packages are listed on cards. Below the cards is a submit button.
- **Setup account**: This page will prompt the user to input their E-Mail and password.
- **Account Validation**: This page will prompt to input a 6 digit OTP set by email. We will not send a email, there will be a default code (123456). When submitting the code, a spinner will appear for a few seconds.
- **Personal inforation**: This page will prompt the user to input personal data ranging from name and date of birth to social security number.
- **Review Submitted Details**: This page is the last page and will list all submitted Data in a formatted list.
