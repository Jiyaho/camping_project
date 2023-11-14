import AuthSession from '@/components/Providers/AuthSession';
import SWRConfigContext from '@/context/SWRConfigContext';
import { MSWComponent } from '@/mocks/MSWComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '캠핑갈까',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthSession>
          <MSWComponent>
            <SWRConfigContext>{children}</SWRConfigContext>
          </MSWComponent>
        </AuthSession>
      </body>
    </html>
  );
}
