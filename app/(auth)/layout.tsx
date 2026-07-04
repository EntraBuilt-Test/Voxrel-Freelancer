import { Toaster } from "sonner"

import { ParticlesBackground } from "@/components/effects/particles-background"

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden bg-background p-6 md:p-10">
            <ParticlesBackground color="20,184,166" density={0.9} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.12),transparent_60%)]" />
            <div className="relative z-10 flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium text-foreground">
                    <img src="/voxrel-logo.png" alt="Voxrel" className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(20,184,166,0.55)]" />
                    <span className="text-lg tracking-wide">VOXREL</span>
                </a>
                {children}
            </div>
            <Toaster 
                position="top-right"
                theme="system"
                richColors
                closeButton
                duration={4000}
                expand={false}
                visibleToasts={1}
                offset={16}
                gap={8}
                toastOptions={{
                    className: 'group toast',
                    style: {
                        animation: 'none', // Let CSS handle animation
                    },
                }}
            />
        </div>
    )
}
