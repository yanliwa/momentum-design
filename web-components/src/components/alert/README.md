# Alert

### Attributes

- `closable` : Boolean - toggle ability to close
- `message` : String - the text of the alert message
- `show` : Boolean - toggle visibility
- `internalClose` true; : Boolean
- `title` : String - title text
- `btnlabel` : String - text for button aria-label
- `type` : String - set what type of alert
- `inline` : Boolean - set display style to inline

### Styling

The wrapping container of the component can be reached via CSS by using the `::part()` selector.
`content`
`alert`

For example, in your application's stylesheet you can say:

```CSS
md-alert::part(content) {
  font-size: 14px;
}

md-alert::part(alert) {
  background-color: red;
}
```

### Slots

#### Alert Named Slots

To add slotted alert content, you can use a named slot:
`slot="alert-icon"`
`slot="alert-body"`
`slot="alert-footer"`

```html
<md-alert message="Who's awesome? You are!" show>
  <a slot="alert-body" href="/">Test</a>
  <div slot="alert-footer">
    <md-button variant="primary"><span slot="text">Blue</span></md-button>
  </div>
</md-alert>
```
