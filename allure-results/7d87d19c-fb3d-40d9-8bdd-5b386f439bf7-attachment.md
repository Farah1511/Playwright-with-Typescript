# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - strong: www.lambdatest.com
  - text: took too long to respond.
- paragraph: "Try:"
- list:
  - listitem: Checking the connection
  - listitem:
    - link "Checking the proxy and the firewall":
      - /url: "#buttons"
  - listitem:
    - link "Running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
- text: ERR_TIMED_OUT
- button "Reload"
- button "Details"
```