import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import { AuthInitializer } from "@/components/auth-initializer";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/providers/query-provider";

import "./globals.css";
import "./toast-animations.css";
import "./voxrel-teal-theme.css";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-data",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Voxrel | Freelancer",
    description: "Voxrel is a platform for transcripting and labeling audio and video files.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                <QueryProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        forcedTheme="dark"
                        disableTransitionOnChange
                    >
                        <AuthInitializer />
                        {children}
                    </ThemeProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
