# Security Policy

## Reporting a Vulnerability
Please report security vulnerabilities privately to `security@tudominio.com`. Do not open a public issue.
We will respond within 48 hours and provide a patch for critical issues within 7 days.

## Security Measures
- CSP restrictive via meta tag.
- DOMPurify sanitization on dynamic content.
- CSRF tokens for forms.
- Dependabot and npm audit automated.

## Disaster Recovery
Code is mirrored to GitLab. In case of deletion, restore from mirror. Full plan in `docs/DISASTER_RECOVERY.md`.
