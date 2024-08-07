/**
 * @file react-router.jsx
 * @description React router configurations.
 */

'use strict';
import { GlobalProvider } from '../components/Context/Global';
import { AuthProvider } from '../hooks/useAuth';
import ProtectedRoute from '../components/ProtectedRoute';
import { DefaultLayout, BlankLayout, ErrorLayout } from '../components/Layouts';
import * as Sections from '../components/Sections';

// Routes path.
const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    profile: '/profile',
    samples: {
        section: '/samples/section',
        button: '/samples/button',
        input: '/samples/input',
        checkbox: '/samples/checkbox',
        radio: '/samples/radio',
    },
};

// Application router.
const appRouter = [
    {
        path: routes.home,
        element: (
            <GlobalProvider>
                <AuthProvider>
                    <DefaultLayout />
                </AuthProvider>
            </GlobalProvider>
        ),
        errorElement: (
            <GlobalProvider>
                <AuthProvider>
                    <ErrorLayout />
                </AuthProvider>
            </GlobalProvider>
        ),
        children: [
            {
                // errorElement: <div>Error Section Here</div>,
                children: [
                    {
                        index: true,
                        element: <Sections.IndexSection />,
                    },
                    {
                        path: routes.profile,
                        element: (
                            <ProtectedRoute>
                                <Sections.ProfileSection />
                            </ProtectedRoute>
                        ),
                        loader: Sections.ProfileSectionLoader,
                    },
                    {
                        path: routes.samples.section,
                        element: <Sections.SectionsSampleSection />,
                    },
                    {
                        path: routes.samples.button,
                        element: <Sections.ButtonSampleSection />,
                    },
                    {
                        path: routes.samples.input,
                        element: <Sections.InputSampleSection />,
                    },
                    {
                        path: routes.samples.checkbox,
                        element: <Sections.CheckboxSampleSection />,
                    },
                    {
                        path: routes.samples.radio,
                        element: <Sections.RadioSampleSection />,
                    },
                ],
            },
        ],
    },
    {
        path: routes.login,
        element: (
            <GlobalProvider>
                <AuthProvider>
                    <BlankLayout />
                </AuthProvider>
            </GlobalProvider>
        ),
        children: [
            {
                index: true,
                element: <Sections.LoginSection />,
            },
        ],
    },
    {
        path: routes.register,
        element: (
            <GlobalProvider>
                <AuthProvider>
                    <BlankLayout />
                </AuthProvider>
            </GlobalProvider>
        ),
        children: [
            {
                index: true,
                element: <Sections.RegisterSection />,
            },
        ],
    },
];

const config = {
    routes,
    appRouter,
};

export default config;
export { routes, appRouter };
