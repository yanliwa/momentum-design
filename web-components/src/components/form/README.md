# Avatar

Avatar provides a easy-to-use web component that works well with Lumos design.

### Attributes

- `rel` : String - pass through to shadow DOM
- `name` : String - pass through to shadow DOM
- `action` : String - pass through to shadow DOM
- `label` : String - pass through to shadow DOM
- `method` : String - pass through to shadow DOM
- `target` : String - pass through to shadow DOM
- `enctype` : String - pass through to shadow DOM
- `no-validate` : Boolean - pass through to shadow DOM
- `accept-charset` : String - pass through to shadow DOM
- `is-valid` : Boolean - reflect validation state
- `autofill-token` : String - toggle autocomplete functionality
- `allow-redirect` : Boolean - toggle whether or not a page redirects on submission
- `autofill-name` : String - set ID or Name value if not provided

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-form::part(form) {
  font-size: 14px;
  max-width: 600px;
  width: 100px;
}
```

### Slots

#### Unnamed Slots

The Unnamed `<slot>` will render any content you pass between the `<md-form></md-form>` tags. This is intended to enclose the inputs you use within your form implementation.