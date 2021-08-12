# Alert Banner

[Live Example](https://momentum-design.github.io/momentum-ui/?path=/story/components-alert-banner--alert-banner)

### Attributes

- `type` : String - set type of alert
- `message` : String - text of the alert message
- `closable` : Boolean - toggle ability to close
- `show` : Boolean - toggle visibility
- `closeAriaLabel` : String - set aria label text for close button

### Slots

#### Alert Banner Unnamed

Any valid HTML can be composed between `<md-alert-banner>` tags and render within.

```html
<md-alert-banner
  ?show="${this.warning}"
  closable
  type="warning"
>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</md-alert-banner>
```
