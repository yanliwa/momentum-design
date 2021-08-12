# Icon

Icon component provides a simple interface to retrieve Momentum-UI branded Icons

### Attributes

- `color` : String - set Icon color
- `description` : String - add icon description text
- `name` : String - set icon name for accurate retrieval, refer to [Momentum Icons](https://momentum.design/icons)
- `size` : String - set Icon to a standard size
- `sizeOverrided` : Boolean - toggle on to allow non-standard sizes
- `title` : String - title text
- `type` : String -
- `isActive` : Boolean - toggle active style
- `isComboBoxIcon` : Boolean - toggle special style for combobox usage

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-icon::part(icon) {
  width: 200px;
}
```

### Example

```html
<md-icon name="icon-arrow-up_16" class="testClass"></md-icon>
<md-icon name="icon-accessibility" class="testClass" size="50" color="red"></md-icon>
<md-icon name="icon-admin_32" class="testClass" color="green"></md-icon>
<md-icon name="icon-chat_28" class="testClass" color="#008094"></md-icon>
```
