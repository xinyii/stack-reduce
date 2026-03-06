import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} height={20}>
      <rect x="2" y="4" width="28" height="5" rx="2.5" fill="#a78bfa" />
      <rect x="6" y="13.5" width="20" height="5" rx="2.5" fill="#7c3aed" />
      <rect x="10" y="23" width="12" height="5" rx="2.5" fill="#4c1d95" />
    </svg>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Logo />
          Stack Reduce
        </>
      ),
    },
  };
}
