# Link

### Attributes

- `disabled` : Boolean - toggle disabled state
- `inline` : Boolean - toggle inline style
- `href` : String - set link address
- `tag` : String - control HTML tag used (i.e., <a> vs <button>)
- `target` : String - set page target
- `tab-index` : Number

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector.
"link"
For example, in your application's stylesheet you can say:

```CSS
md-link::part(link) {
  color: grey;
  font-size: 18px;
}
```

### Slots

#### Unnamed Slots

Valid HTML content will render between `<md-link>` tags.