# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\FullAccountLifecycle.spec.ts >> Full Account Lifecycle
- Location: tests\tests\e2e\FullAccountLifecycle.spec.ts:10:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```