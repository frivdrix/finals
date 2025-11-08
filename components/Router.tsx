import { MemberProvider } from "@/integrations"

import { ScrollToTop } from "@/lib/scroll-to-top"

// Layout component that includes ScrollToTop

function Layout() {
  return (
    <>
      <ScrollToTop />

      {/* Removed react-router-dom dependency - using Next.js routing instead */}
      {/* This component is no longer needed with Next.js App Router */}
      {/* <Outlet /> */}
    </>
  )
}

// const router = createBrowserRouter([

//   {

//     path: "/",

//     element: <Layout />,

//     errorElement: <ErrorPage />,

//     children: [

//       {

//         index: true,

//         element: <HomePage />,

//       },

//       {

//         path: "case-studies",

//         element: <CaseStudiesPage />,

//       },

//       {

//         path: "faq",

//         element: <FAQPage />,

//       },

//       {

//         path: "contact",

//         element: <ContactPage />,

//       },

//       {

//         path: "*",

//         element: <Navigate to="/" replace />,

//       },

//     ],

//   },

// ], {

//   basename: import.meta.env.BASE_NAME,

// });

export default function AppRouter() {
  return (
    <MemberProvider>
      {/* Removed react-router-dom dependency - using Next.js routing instead */}
      {/* <RouterProvider router={router} /> */}
      null
    </MemberProvider>
  )
}
