import NextAuthSessionProvider from "@/providers/sessionProvider";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/providers/theme-provider";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dev.Finance",
    description: "Gerencie suas finanças de forma simples e prática.",

    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://dev-finance-pi-six.vercel.app/",
        title: "Dev.Finance",
        description: "Gerencie suas finanças de forma simples e prática.",
        images: [
            {
                url: "https://dev-finance-pi-six.vercel.app/api/og",
                width: 1280,
                height: 720,
                alt: "Dev-Finance",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body
                className={`${roboto.className} min-h-screen scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-800`}
            >
                <NextAuthSessionProvider>
                    <ThemeProvider attribute="class" defaultTheme="system">
                        {children}
                        <Analytics />
                        <ToastContainer
                            autoClose={5000}
                            hideProgressBar={false}
                            theme="dark"
                        />
                        {/* <Footer /> */}
                    </ThemeProvider>
                </NextAuthSessionProvider>
            </body>
        </html>
    );
}
