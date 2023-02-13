import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: "https://tmsqazfwbmssgsnkbitt.supabase.co",
      supabaseKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtc3FhemZ3Ym1zc2dzbmtiaXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyODkyMTgsImV4cCI6MTk5MTg2NTIxOH0.YEbT5WU0qUkvzzyX0kheGKJgnl1wjmYLYnvhmRbvsDY",
    })
  );

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
export default MyApp;
