'use client';

import { Link } from '@chakra-ui/react';

export default function ConsentPreferencesLink() {
  return (
    <Link
      color="gray.500"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('show_consent_preferences'));
      }}
    >
      Consent Preferences
    </Link>
  );
}
