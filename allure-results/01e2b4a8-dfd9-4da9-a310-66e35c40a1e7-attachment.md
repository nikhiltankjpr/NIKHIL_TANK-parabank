# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\CreateAccountVerifyAPI.spec.ts >> Create Account UI + Verify API
- Location: tests\tests\e2e\CreateAccountVerifyAPI.spec.ts:7:5

# Error details

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\Nikhil Tank\AppData\Local\ms-playwright\firefox-1522\firefox\firefox.exe -no-remote -wait-for-browser -foreground -profile C:\Users\NIKHIL~1\AppData\Local\Temp\playwright_firefoxdev_profile-4mH5XX -juggler-pipe -silent
<launched> pid=8476
[pid=8476][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 119: unreachable code after return statement
[pid=8476][out] 
[pid=8476][out] Juggler listening to the pipe
[pid=8476][out] console.error: "Warning: unrecognized command line flag" "-foreground"
```