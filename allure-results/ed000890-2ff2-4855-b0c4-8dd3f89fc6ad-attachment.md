# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\CreateAccountVerifyAPI.spec.ts >> Create Account UI + Verify API
- Location: tests\tests\e2e\CreateAccountVerifyAPI.spec.ts:8:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```